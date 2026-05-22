# 🎨 Customization Guide

<p align="center">
  <strong>English</strong> · <a href="./CUSTOMIZATION.zh-CN.md">简体中文</a>
</p>

Most user-facing content should be customized through `_config.animal-island.yml`. Visual rules live mainly in `source/css/animal-island.css`.

## 🏷️ Site info

Site title, author, language, and similar Hexo-wide values still belong in the Hexo site root `_config.yml`.

```yaml
title: Island Notes
author: Islander
language: en
```

The theme reads these values automatically. If `profile.name` is set in the theme override config, it has priority for the sidebar name.

## 🧑 Sidebar profile

Override `profile` in the site root `_config.animal-island.yml`.

```yaml
profile:
  avatar: /images/island-assets/profile.jpg
  name: "Islander"
  intro: "Welcome to my island blog."
  status: "Writing, building, and exploring today."
```

## 🏡 Home hero text

Override `hero` in `_config.animal-island.yml`.

```yaml
hero:
  title: "My Blog"
  subtitle: "Notes about tech, life, and thoughts."
  cta_text: "Explore archives"
  cta_url: /archives/
```

## 🏷️ UI labels

Fixed UI text can be overridden through `labels`, including profile labels, archive titles, theme buttons, search text, and pagination buttons.

```yaml
labels:
  profile_label: "Island Representative"
  theme_title: "Theme"
  theme_day: "Day"
  theme_night: "Night"
  archive_label: "Island Archive"
  archive_title: "Archives"
  search_placeholder: "Search title, content, category, or tag"
  search_submit: "Search"
  pagination_prev: "Previous"
  pagination_next: "Next"
```

## 🧭 Navigation

Edit `menu` in `_config.animal-island.yml`.

```yaml
menu:
  home:
    text: Home
    url: /
    icon: /images/island-assets/nav-home.png
  search:
    text: Search
    url: /search/
    icon: /images/island-assets/brush.png
  about:
    text: About
    url: /about/
    icon: /images/island-assets/messages.png
```

Remove menu items you do not need.

## 🌗 Day/night colors

Core variables live in:

```text
source/css/animal-island.css
```

Day mode variables are under `:root`; night mode variables are under:

```css
html[data-theme="night"] {
  /* night variables */
}
```

Prefer changing CSS variables instead of rewriting component rules.

```css
:root {
  --ai-primary: #2abaaa;
  --ai-page-bg: #f7f3e7;
  --ai-main-bg: #fffdf5;
}
```

## 🖼️ Banners and decorative images

Prefer replacing asset paths in config.

```yaml
assets:
  header_banner_day: /images/island-assets/header_banner_light.png
  header_banner_night: /images/island-assets/header_banner_dark.png
  footer_banner_day: /images/island-assets/banner_light.png
  footer_banner_night: /images/island-assets/banner_dark.png
```

Put new images under the theme or site `source/images/`, then reference them through public paths such as `/images/...`.

## 🪧 Right-side board

```yaml
side_board:
  label: "Island Board"
  title: "Notice"
  description: "Welcome here."
  bubble: "Writing · Tech · Life"
  icons:
    - /images/island-assets/photos.png
    - /images/island-assets/messages.png
```

## 📚 Post TOC

The post TOC is enabled by default. It reads `##` to `####` headings and follows the reading position on desktop.

```yaml
toc:
  enable: true
  min_depth: 2
  max_depth: 4
  max_items: 32
```

TOC labels can be changed through `labels`.

```yaml
labels:
  toc_label: "Contents"
  toc_title: "On this page"
  toc_empty: "No headings available for this post."
```

Per-post front matter can disable or override TOC behavior.

```yaml
---
title: My post
toc: false
---
```

```yaml
---
title: My post
toc:
  min_depth: 2
  max_depth: 3
toc_title: "On this page"
---
```

## 🖱️ Cursor

The cursor is configured globally in CSS.

```css
html,
body,
a,
button,
input,
textarea,
select,
[role="button"] {
  cursor: url("../images/animal-ui/cursor-icon.png") 2 2, auto;
}
```

Do not add `cursor: pointer`; this theme intentionally keeps the same custom cursor over links and buttons.

## 🧱 Page templates

Templates live in:

```text
layout/
```

Common files:

- `layout/index.ejs`: home page.
- `layout/post.ejs`: post detail page.
- `layout/page.ejs`: standalone pages such as about, search, categories, and tags.
- `layout/archive.ejs`: archive, category, and tag listings.
- `layout/layout.ejs`: global shell, shared board layout, and right-side decorations.

To keep the shared board effect, avoid bypassing `ai-island-board` in `layout/layout.ejs`.
