# 🏗️ Project Structure

<p align="center">
  <strong>English</strong> · <a href="./STRUCTURE.zh-CN.md">简体中文</a>
</p>

```text
hexo-theme-animal-island/
├── _config.yml                         # Theme default config
├── README.md                           # English overview and quick start
├── README.zh-CN.md                     # Chinese overview and quick start
├── LICENSE                             # Personal-learning and non-commercial license
├── LEGAL_NOTICE.md                     # Bilingual legal notice and restrictions
├── CREDITS.txt                         # Credits for references and assets
├── package.json                        # Validation script and package metadata
├── docs/                               # Documentation guides
├── examples/
│   └── _config.animal-island.yml       # Recommended site-level override config
├── layout/                             # Hexo EJS templates
│   ├── layout.ejs                      # Global shell, shared board, right rail
│   ├── index.ejs                       # Home page
│   ├── post.ejs                        # Post page
│   ├── page.ejs                        # Standalone pages, search, taxonomy overviews
│   ├── archive.ejs                     # Archive and listing pages
│   ├── category.ejs                    # Category page, reuses archive behavior
│   ├── tag.ejs                         # Tag page, reuses archive behavior
│   ├── 404.ejs                         # 404 page
│   └── _partial/                       # Shared partial templates
│       ├── head.ejs                    # meta, CSS, early theme init
│       ├── header.ejs                  # sidebar, mobile header, theme buttons
│       ├── footer.ejs                  # footer and JS include
│       ├── post-card.ejs               # home post card
│       ├── pagination.ejs              # pagination
│       └── toc.ejs                     # post table of contents
├── source/
│   ├── css/
│   │   └── animal-island.css           # Theme styles and day/night variables
│   ├── js/
│   │   └── animal-island.js            # theme switch, drawer, TOC, search
│   └── images/
│       ├── island-assets/              # banners, menu icons, decorative island assets
│       └── animal-ui/                  # cursor, sea, tree, UI assets
└── tools/
    └── validate-theme.js               # lightweight static validation script
```

## 🧩 Hexo rendering flow

- `layout/layout.ejs` is the global wrapper; all page content is inserted through `<%- body %>`.
- The theme places `<%- body %>` inside `ai-island-board`, so home, category, archive, tag, search, about, and normal pages share the same board layout.
- `layout/page.ejs` branches by page `type` for search, category overview, and tag overview pages.
- The right-side rail is rendered in `layout/layout.ejs`; post pages replace it with TOC, and search pages replace it with search helper cards.
- `layout/_partial/head.ejs` reads `localStorage` before CSS loads to reduce day/night flicker.
- `layout/_partial/footer.ejs` includes `source/js/animal-island.js`.

## 🖼️ Static asset paths

Images in EJS should use Hexo `url_for()`.

```ejs
<%- url_for(assets.favicon || '/images/island-assets/favicon.svg') %>
```

Images in CSS use relative URLs from `source/css/`.

```css
url("../images/animal-ui/cursor-icon.png")
```

This keeps the theme reusable when copied to different sites or deployed under a subpath.
