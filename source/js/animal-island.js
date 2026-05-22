(() => {
  const root = document.documentElement;
  const storageKey = "animal-island-theme";
  const themes = new Set(["day", "night"]);

  function preferredTheme() {
    const saved = localStorage.getItem(storageKey);
    return themes.has(saved) ? saved : "day";
  }

  function applyTheme(theme) {
    const nextTheme = themes.has(theme) ? theme : "day";
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem(storageKey, nextTheme);

    document.querySelectorAll("[data-theme-choice]").forEach((button) => {
      const active = button.getAttribute("data-theme-choice") === nextTheme;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function setDrawerOpen(open) {
    document.body.classList.toggle("is-drawer-open", open);
    document.body.toggleAttribute("data-drawer-locked", open);
    document.querySelectorAll("[data-drawer-toggle]").forEach((button) => {
      button.setAttribute("aria-expanded", String(open));
    });
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  function decodeHash(hash) {
    try {
      return decodeURIComponent(hash);
    } catch (error) {
      return hash;
    }
  }

  function setupToc() {
    const links = Array.from(document.querySelectorAll("[data-ai-toc-link]"));
    if (!links.length) return;

    const items = links
      .map((link) => {
        const rawHash = link.getAttribute("href") || "";
        const id = decodeHash(rawHash.replace(/^#/, ""));
        const heading = id ? document.getElementById(id) : null;
        return heading ? { heading, link } : null;
      })
      .filter(Boolean);

    if (!items.length) return;

    let currentActiveItem = null;

    function keepActiveLinkVisible(link) {
      const list = link.closest(".ai-toc__list");
      if (!list) return;

      const padding = 12;
      const linkTop = link.offsetTop;
      const linkBottom = linkTop + link.offsetHeight;
      const visibleTop = list.scrollTop + padding;
      const visibleBottom = list.scrollTop + list.clientHeight - padding;

      if (linkTop < visibleTop) {
        list.scrollTop = Math.max(0, linkTop - padding);
      } else if (linkBottom > visibleBottom) {
        list.scrollTop = linkBottom - list.clientHeight + padding;
      }
    }

    function setActive(activeItem) {
      if (!activeItem || activeItem === currentActiveItem) return;
      currentActiveItem = activeItem;

      items.forEach((item) => {
        const active = item === activeItem;
        item.link.classList.toggle("is-active", active);
        item.link.toggleAttribute("aria-current", active);
      });

      keepActiveLinkVisible(activeItem.link);
    }

    function updateActiveToc() {
      let activeItem = items[0];
      for (const item of items) {
        if (item.heading.getBoundingClientRect().top <= 150) {
          activeItem = item;
        } else {
          break;
        }
      }
      setActive(activeItem);
    }

    updateActiveToc();
    window.addEventListener("scroll", updateActiveToc, { passive: true });
    window.addEventListener("hashchange", updateActiveToc);
  }

  function setupSearch() {
    const searchBoxes = document.querySelectorAll("[data-ai-search]");
    if (!searchBoxes.length) return;

    function toList(value) {
      return Array.isArray(value) ? value.filter(Boolean) : [];
    }

    function normalize(value) {
      return String(value || "").toLowerCase();
    }

    function keywordsFromQuery(query) {
      return normalize(query)
        .split(/\s+/)
        .map((keyword) => keyword.trim())
        .filter(Boolean);
    }

    function buildSearchText(post) {
      return normalize(
        [
          post.title,
          post.excerpt,
          post.text,
          ...toList(post.categories),
          ...toList(post.tags),
        ].join(" ")
      );
    }

    function createTerm(text, prefix = "") {
      const term = document.createElement("span");
      term.className = "ai-search-result__term";
      term.textContent = `${prefix}${text}`;
      return term;
    }

    function createResultCard(post) {
      const card = document.createElement("a");
      card.className = "ai-search-result";
      card.href = post.url || "#";

      const meta = document.createElement("div");
      meta.className = "ai-search-result__meta";
      if (post.date) {
        const time = document.createElement("time");
        time.dateTime = post.date;
        time.textContent = post.date;
        meta.appendChild(time);
      }

      const categories = toList(post.categories);
      if (categories.length) {
        const category = document.createElement("span");
        category.textContent = `分类：${categories.join("、")}`;
        meta.appendChild(category);
      }

      const title = document.createElement("h2");
      title.textContent = post.title || "未命名文章";

      card.appendChild(meta);
      card.appendChild(title);

      if (post.excerpt) {
        const excerpt = document.createElement("p");
        excerpt.className = "ai-search-result__excerpt";
        excerpt.textContent = post.excerpt;
        card.appendChild(excerpt);
      }

      const tags = toList(post.tags);
      if (categories.length || tags.length) {
        const terms = document.createElement("div");
        terms.className = "ai-search-result__terms";
        categories.forEach((category) =>
          terms.appendChild(createTerm(category, "◎ "))
        );
        tags.forEach((tag) => terms.appendChild(createTerm(tag, "# ")));
        card.appendChild(terms);
      }

      return card;
    }

    searchBoxes.forEach((box) => {
      const dataNode = box.querySelector("#ai-search-data");
      const form = box.querySelector("[data-ai-search-form]");
      const input = box.querySelector("[data-ai-search-input]");
      const results = box.querySelector("[data-ai-search-results]");
      const stats = box.querySelector("[data-ai-search-stats]");

      if (!dataNode || !input || !results) return;

      let posts = [];
      try {
        const parsed = JSON.parse(dataNode.textContent || "[]");
        posts = Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        posts = [];
      }

      const indexedPosts = posts.map((post) => ({
        post,
        searchText: buildSearchText(post),
      }));
      const totalText = `共 ${posts.length} 篇可搜索文章`;
      const initialText =
        box.getAttribute("data-initial-text") ||
        "输入关键词后会在这里显示匹配的文章。";
      const emptyText =
        box.getAttribute("data-empty-text") ||
        "没有找到匹配的文章，换个关键词试试。";
      const searchRoot = box.closest(".ai-island-board") || document;
      const sideTip = searchRoot.querySelector("[data-ai-search-side-tip]");
      const sideTipLabel = sideTip
        ? sideTip.querySelector("[data-ai-search-side-tip-label]")
        : null;
      const sideTipMessage = sideTip
        ? sideTip.querySelector("[data-ai-search-side-tip-message]")
        : null;
      const sideTipMeter = sideTip
        ? sideTip.querySelector("[data-ai-search-side-tip-meter]")
        : null;
      const suggestionButtons = sideTip
        ? sideTip.querySelectorAll("[data-ai-search-suggestion]")
        : [];

      function setStats(text) {
        if (stats) stats.textContent = text;
      }

      function readableQuery(keywords) {
        return keywords.join(" ");
      }

      function setSideTip(state, label, message, progress = null) {
        if (!sideTip) return;
        sideTip.setAttribute("data-state", state);
        if (sideTipLabel) sideTipLabel.textContent = label;
        if (sideTipMessage) sideTipMessage.textContent = message;
        if (sideTipMeter) {
          if (progress === null) {
            sideTip.removeAttribute("data-meter-level");
            sideTipMeter.style.width = "0%";
            return;
          }

          const safeProgress = Math.max(0, Math.min(100, progress));
          const meterLevel =
            safeProgress < 34 ? "low" : safeProgress < 67 ? "medium" : "high";
          sideTip.setAttribute("data-meter-level", meterLevel);
          sideTipMeter.style.width = `${safeProgress}%`;
        }
      }

      function showMessage(message) {
        results.innerHTML = "";
        const empty = document.createElement("p");
        empty.className = "ai-search-empty";
        empty.textContent = message;
        results.appendChild(empty);
      }

      function showInitial() {
        setStats(totalText);
        showMessage(initialText);
        setSideTip(
          "idle",
          "岛民推荐",
          "点下面的关键词，或者输入标题、正文、分类和标签来找文章。"
        );
      }

      function renderMatches(matches) {
        results.innerHTML = "";
        matches.forEach((post) => {
          results.appendChild(createResultCard(post));
        });
      }

      function performSearch() {
        const keywords = keywordsFromQuery(input.value);
        if (!keywords.length) {
          showInitial();
          return;
        }

        const queryText = readableQuery(keywords);
        const matches = indexedPosts
          .filter((item) =>
            keywords.every((keyword) => item.searchText.includes(keyword))
          )
          .map((item) => item.post);

        if (!matches.length) {
          setStats(`没有找到匹配结果 · ${totalText}`);
          showMessage(emptyText);
          setSideTip(
            "empty",
            "换个线索",
            `暂时没有找到“${queryText}”，试试更短的词，或者直接搜分类、标签。`,
            0
          );
          return;
        }

        const progress = posts.length
          ? (matches.length / posts.length) * 100
          : 0;
        setStats(`找到 ${matches.length} 篇文章 · ${totalText}`);
        renderMatches(matches);
        setSideTip(
          "success",
          `找到 ${matches.length} 篇`,
          `“${queryText}” 有线索啦，左侧结果已经更新。`,
          progress
        );
      }

      if (form) {
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          performSearch();
        });
      }
      input.addEventListener("input", performSearch);
      suggestionButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const keyword =
            button.getAttribute("data-ai-search-suggestion") ||
            button.textContent ||
            "";
          input.value = keyword.trim();
          input.focus();
          performSearch();
        });
      });

      const initialQuery =
        new URLSearchParams(window.location.search).get("q") || "";
      if (initialQuery.trim()) {
        input.value = initialQuery;
        performSearch();
      } else {
        showInitial();
      }
    });
  }

  applyTheme(preferredTheme());
  setupToc();
  setupSearch();

  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      applyTheme(button.getAttribute("data-theme-choice"));
    });
  });

  document.querySelectorAll("[data-drawer-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      setDrawerOpen(!document.body.classList.contains("is-drawer-open"));
    });
  });

  document.querySelectorAll("[data-drawer-mask]").forEach((mask) => {
    mask.addEventListener("click", closeDrawer);
  });

  document.querySelectorAll(".ai-menu-item").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawer();
  });
})();
