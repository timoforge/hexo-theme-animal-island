# 🗒️ Project Manual

<p align="center">
  <strong>English</strong> · <a href="./PROJECT_MANUAL.zh-CN.md">简体中文</a>
</p>

This manual explains how to maintain Animal Island as a personal-learning and non-commercial Hexo theme.

> ⚠️ **Usage restriction:** This project is for personal learning, research, and non-commercial demonstration only. Commercial use is prohibited. Read [LEGAL_NOTICE.md](../LEGAL_NOTICE.md) before using it.

## 1. 🏝️ First setup

1. Copy or clone the theme to `themes/animal-island` in your Hexo site.
2. Set `theme: animal-island` in the Hexo root `_config.yml`.
3. Copy `examples/_config.animal-island.yml` to the Hexo root.
4. Update avatar, hero text, menu, and footer links.
5. Run `hexo clean && hexo generate`.

## 2. ✍️ Daily writing

The theme does not change Hexo's content workflow. Posts still live in:

```text
source/_posts/
```

Create a post:

```bash
hexo new "My post title"
```

Create a standalone page, such as about:

```bash
hexo new page about
```

If the menu links to `/about/`, make sure the page exists.

## 3. 🖼️ Replacing visual assets

Prefer replacing images through `_config.animal-island.yml` fields such as `assets`, `profile`, and `side_board.icons`.

Recommended paths:

```text
source/images/island-assets/
source/images/animal-ui/
```

You can also place images in your site's own `source/images/` and reference them with the same public path style.

## 4. 🔄 Updating the theme

If your site uses a copied theme folder:

1. Back up `themes/animal-island`.
2. Replace it with the new theme package.
3. Keep site-specific settings in the site root `_config.animal-island.yml`; do not hard-code personal settings into the theme default `_config.yml`.
4. Rebuild the site.

If your site cloned the theme with Git, pull updates inside `themes/animal-island`, then rebuild.

If your site uses a symlink, update the symlink target source directory.

## 5. 🧭 Maintenance rules

- Put site-specific customizations in the site root `_config.animal-island.yml`.
- Put reusable theme defaults in theme `_config.yml`.
- Keep style changes in `source/css/animal-island.css`.
- Keep interaction changes in `source/js/animal-island.js`.
- Run `npm run validate` and a Hexo build after changes.

## 6. 🩹 Common issues

### Theme is not applied

Check the Hexo root `_config.yml`:

```yaml
theme: animal-island
```

Confirm the folder exists:

```text
themes/animal-island
```

### Images do not show

Check that images exist under the theme or site `source/images/`, and that config paths start with `/images/`.

### Day/night switch does not work

Check that theme buttons exist:

```text
data-theme-choice="day"
data-theme-choice="night"
```

Confirm `source/js/animal-island.js` is loaded.

### Cursor changes to hand pointer

Check whether CSS added:

```css
cursor: pointer;
```

This theme keeps the same cursor over links and buttons.
