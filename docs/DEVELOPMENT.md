# 🧰 Development Guide

<p align="center">
  <strong>English</strong> · <a href="./DEVELOPMENT.zh-CN.md">简体中文</a>
</p>

## 🧪 Local validation

The theme package provides a lightweight validation script.

```bash
npm run validate
```

It checks:

- Required files exist.
- CSS brace balance.
- CSS image URLs point to existing files.
- JavaScript can be parsed.
- EJS `<%` / `%>` tag counts match.
- Legacy single-button theme toggles and `cursor: pointer` do not reappear.
- Default `/images/...` references in `_config.yml` and EJS exist under `source/images/`.
- Release-safety wording avoids old Nintendo-adjacent names and asset paths.

## 🏝️ Test inside a Hexo site

This repository is only the theme package. Test rendered output inside a real Hexo site.

Recommended local symlink setup:

```bash
cd /path/to/your-hexo-site
mkdir -p themes
ln -s /path/to/hexo-theme-animal-island themes/animal-island
```

Configure the Hexo site root `_config.yml`.

```yaml
theme: animal-island
```

Generate the site.

```bash
hexo clean && hexo generate
```

## 🛠️ Main edit points

- EJS templates: `layout/`
- Shared partials: `layout/_partial/`
- Styles: `source/css/animal-island.css`
- Interactions: `source/js/animal-island.js`
- Images: `source/images/`
- Default config: `_config.yml`
- User override example: `examples/_config.animal-island.yml`
- English README: `README.md`
- Chinese README: `README.zh-CN.md`

## 🌗 Theme switching conventions

Keep these conventions to avoid breaking day/night mode.

- Theme values are only `day` and `night`.
- Buttons use `data-theme-choice="day|night"`.
- State is written to `html[data-theme]`.
- The localStorage key is `animal-island-theme`.
- Keep the early initialization script in `<head>` before CSS loads.

## 🖱️ Cursor conventions

The theme intentionally keeps the same custom cursor over links and buttons, so do not add:

```css
cursor: pointer;
```

To change the cursor image, replace `source/images/animal-ui/cursor-icon.png` or update the corresponding CSS URL.

## 🚢 Release checklist

Before publishing or copying the theme to others:

1. `npm run validate` passes.
2. `hexo clean && hexo generate` passes in at least one Hexo site.
3. `README.md`, `README.zh-CN.md`, `docs/`, `examples/`, and `_config.yml` are in sync.
4. `LICENSE`, `LEGAL_NOTICE.md`, `CREDITS.txt`, and `docs/ASSETS_AND_CREDITS.md` are kept.
5. Personal-learning-only and non-commercial restrictions are not removed or weakened.
6. `package.json` `files` includes required docs, examples, license, and legal notice files.
7. New images live under `source/images/` and can be copied by Hexo.
