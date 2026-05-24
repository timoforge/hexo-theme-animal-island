# ⚙️ Configuration Guide

<p align="center">
  <strong>English</strong> · <a href="./CONFIGURATION.zh-CN.md">简体中文</a>
</p>

Theme defaults live in the theme directory:

```text
_config.yml
```

For real Hexo sites, create a site-level override file:

```text
_config.animal-island.yml
```

This keeps personal settings outside the theme package, so upgrades do not overwrite them.

## 🔁 asset_version

Optional cache-busting value appended to the theme CSS and JavaScript URLs.

```yaml
asset_version: "2026-05-24"
```

Leave it empty to let the theme generate a build-time value. Set it explicitly when your hosting platform applies long-lived immutable caching to `/css/*` or `/js/*` and you need a predictable asset URL change after deployment.

## 🧑 profile

Sidebar avatar, name, intro, and status text.

```yaml
profile:
  avatar: /images/island-assets/profile.jpg
  name: "Islander"
  intro: "Welcome to my island blog."
  status: "Writing, building, and exploring today."
```

- `avatar`: public path for the avatar image.
- `name`: name under the avatar; falls back to Hexo `author`, then site `title`.
- `intro`: short sidebar bio.
- `status`: default status shown at the sidebar bottom and right notice card.

## 🖼️ assets

Default image asset paths used by the theme.

```yaml
assets:
  favicon: /images/island-assets/favicon.svg
  divider: /images/island-assets/divider_line.png
  not_found_icon: /images/island-assets/not-found.png
  header_banner_day: /images/island-assets/header_banner_light.png
  header_banner_night: /images/island-assets/header_banner_dark.png
  footer_banner_day: /images/island-assets/banner_light.png
  footer_banner_night: /images/island-assets/banner_dark.png
  side_leaf_day: /images/island-assets/side-guide.svg
  side_leaf_night: /images/island-assets/side-guide.svg
```

These paths are rendered through Hexo `url_for()`, so they work with the site's `root` setting.

## 🏡 hero

Home page hero area.

```yaml
hero:
  icon: /images/island-assets/favicon.svg
  greeting: "Hey there"
  title: "Welcome to my island"
  subtitle: "A cozy island-style Hexo blog."
  recent_title: "Recent Notes"
  cta_text: "Explore archives"
  cta_url: /archives/
```

## 🪧 side_board

Right-side decorative board shared by most pages.

```yaml
side_board:
  label: "Island Board"
  title: ""
  description: ""
  bubble: "Writing · Archive · Island notes"
  icons:
    - /images/island-assets/board-note.png
    - /images/island-assets/photos.png
    - /images/island-assets/drawing.png
```

- `label`: small label above the notice card.
- `title`: falls back to site `title` when empty.
- `description`: falls back to `profile.status`, then site `description`.
- `bubble`: right-side bubble text.
- `icons`: any public image paths.

## 📚 toc

Sticky post table of contents. It extracts headings from rendered post HTML and keeps the TOC visible on desktop.

```yaml
toc:
  enable: true
  min_depth: 2
  max_depth: 4
  max_items: 32
```

- `enable`: show TOC by default on post pages.
- `min_depth`: minimum heading level, default `2` for Markdown `##`.
- `max_depth`: maximum heading level, default `4` for Markdown `####`.
- `max_items`: maximum heading count; `0` means unlimited.

Per-post overrides are supported in front matter.

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

## 🧭 menu

Sidebar main navigation.

```yaml
menu:
  home:
    text: Home
    url: /
    icon: /images/island-assets/nav-home.png
  archives:
    text: Archives
    url: /archives/
    icon: /images/island-assets/photos.png
```

Each item supports:

- `text`: displayed label.
- `url`: destination URL.
- `icon`: optional navigation icon.

For a custom page such as `friends`, add a menu item and create the page in Hexo.

```yaml
menu:
  friends:
    text: Friends
    url: /friends/
    icon: /images/island-assets/messages.png
```

```bash
hexo new page friends
```

## 🏷️ labels

Fixed UI text can be overridden through `labels`.

```yaml
labels:
  profile_label: "Island Representative"
  drawer_open: "Open menu"
  home_aria: "Back to home"
  nav_aria: "Main navigation"
  toc_label: "Contents"
  toc_title: "On this page"
  toc_aria: "Post table of contents"
  toc_empty: "No headings available for this post."
  theme_title: "Theme"
  theme_aria: "Theme switcher"
  theme_day: "Day"
  theme_night: "Night"
  theme_day_short: "D"
  theme_night_short: "N"
  archive_label: "Island Archive"
  archive_title: "Archives"
  list_title: "Posts"
  page_label: "Island Page"
  search_label: "Island Search"
  search_aria: "Site search"
  search_help: "Search titles, content, categories, and tags. Multiple keywords must all match."
  search_input_label: "Search keywords"
  search_placeholder: "Search title, content, category, or tag"
  search_submit: "Search"
  search_initial: "Search results will appear here."
  search_no_results: "No matching posts found. Try another keyword."
  search_no_script: "Search requires browser JavaScript."
  untitled_post: "Untitled post"
  pagination_aria: "Pagination"
  pagination_prev: "Previous"
  pagination_next: "Next"
  not_found_code: "404"
  not_found_title: "This place does not exist"
  not_found_subtitle: "The path may be wrong, or the post is still under construction."
  not_found_back_home: "Back home"
```

Common mappings:

- `profile_label`: profile-card identity label.
- `toc_*`: post TOC labels, title, aria text, and empty state.
- `theme_*`: day/night switch text.
- `archive_label`, `archive_title`, `list_title`: archive and list page labels.
- `search_*`: search page text, placeholder, button, initial state, empty state, and no-script text.
- `pagination_prev`, `pagination_next`: pagination buttons.
- `not_found_*`: 404 page text.

## 🧾 footer / links

Footer text and links.

```yaml
footer:
  text: "Made with Hexo on Animal Island."

links:
  - name: GitHub
    url: https://github.com/timoforge/hexo-theme-animal-island
  - name: RSS
    url: ""
```

External links open in a new tab. Internal links open in the current tab. Empty `url` values are displayed as non-clickable text.

## 🌗 Theme mode

The theme has two modes:

```text
day
night
```

Browser storage key:

```text
animal-island-theme
```

Button attributes:

```text
data-theme-choice="day"
data-theme-choice="night"
```

CSS switches night variables through `html[data-theme="night"]`. `labels.theme_day` and `labels.theme_night` only change visible text; they do not change actual theme values.
