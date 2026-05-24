# 🩹 Troubleshooting

<p align="center">
  <strong>English</strong> · <a href="./TROUBLESHOOTING.zh-CN.md">简体中文</a>
</p>

## Hexo cannot find the theme

Make sure the folder name matches the `theme` value in the Hexo root `_config.yml`.

```text
themes/animal-island
```

```yaml
theme: animal-island
```

If the folder is named `hexo-theme-animal-island`, then `theme:` must use that exact name.

## CSS or JavaScript is missing after build

Confirm generated files exist in Hexo output.

```text
public/css/animal-island.css
public/js/animal-island.js
```

If they are missing, check whether the theme is placed under the correct `themes/animal-island` directory.

## CSS changes do not appear after deployment

The theme appends `?v=...` to `animal-island.css` and `animal-island.js` so hosts with long-lived immutable caching can fetch updated assets. If production still shows old styling, fetch the live HTML and confirm it references a new versioned asset URL.

```html
<link rel="stylesheet" href="/css/animal-island.css?v=...">
```

For predictable cache busting, set `asset_version` in the site-level `_config.animal-island.yml` before building.

## Image 404

Image config values should be public paths.

```yaml
profile:
  avatar: /images/island-assets/profile.jpg
```

Confirm the source file exists in the theme or site.

```text
source/images/island-assets/profile.jpg
```

## Day mode shows night banner

The theme renders day/night banner images at the same time and controls visibility through `html[data-theme]`. If templates were changed, confirm these classes still exist.

```text
ai-banner-img--day
ai-banner-img--night
```

## Page switch or refresh flickers

Keep the early `animal-island-theme` script in `layout/_partial/head.ejs`. It must run before CSS loads.

## Cursor changes over buttons

Search CSS for cursor rules.

```bash
grep -nR "cursor:" source/css layout
```

Do not add `cursor: pointer`. This theme keeps the same cursor for buttons, links, and form controls.

## Search page has no search box

Make sure the search page front matter has `type: search`.

```yaml
---
title: Search
type: search
---
```

## Categories or tags page is empty

Make sure posts have `categories` or `tags` in their front matter. The overview pages render from Hexo `site.categories` and `site.tags`.
