# Hexo Theme Animal Island

<p align="center">
  <strong>English</strong> · <a href="./README.zh-CN.md">简体中文</a>
</p>

Animal Island is a source-available Hexo theme for personal learning and non-commercial use. It provides a warm island-life look: soft paper cards, rounded panels, playful decorative assets, a phone-like sidebar navigation, and a built-in day/night color switch.

> **Legal Notice**
> This project is for personal learning and non-commercial use only. Commercial use, resale, paid redistribution, or use in commercial services is prohibited.
>
> UI elements, visual tokens, and selected assets are credited to [animal-island-ui](https://github.com/guokaigdg/animal-island-ui) by guokaigdg and other sources listed in [CREDITS.txt](./CREDITS.txt) and [docs/ASSETS_AND_CREDITS.md](./docs/ASSETS_AND_CREDITS.md). They are not provided by Nintendo.
>
> This project is not an official Nintendo product, is not endorsed by Nintendo, and is not affiliated with Nintendo. Users are responsible for their own use; any legal disputes or liabilities arising from using this theme or related services are unrelated to the author/maintainer. See [LEGAL_NOTICE.md](./LEGAL_NOTICE.md).

## Highlights

- Native Hexo theme structure: `layout/`, `source/`, and `_config.yml`.
- Island-board layout shared by home, posts, pages, archives, categories, tags, search, and 404 pages.
- Responsive sidebar, mobile drawer menu, profile card, navigation icons, and decorative right rail.
- Client-side search page for post titles, content, categories, and tags. No external search service required.
- Category and tag overview pages rendered from Hexo collections.
- Sticky post table of contents generated from article headings, with per-post front-matter overrides.
- Explicit day/night theme switch stored in `localStorage` with early `<head>` initialization to reduce flashing.
- Configurable profile, hero banner, menu, labels, side board, footer links, images, and TOC behavior.
- Unified custom cursor for links, buttons, and form controls.
- Lightweight validation script for release checks.

## Requirements

- Hexo `>= 6`
- Node.js `>= 16`

## Quick Start

Clone this repository into the `themes/` directory of your Hexo site (replace `your-username` with the final GitHub owner if needed):

```bash
cd /path/to/your-hexo-site
mkdir -p themes
git clone https://github.com/your-username/hexo-theme-animal-island.git themes/animal-island
```

Then enable the theme in the Hexo site root `_config.yml`:

```yaml
theme: animal-island
```

Copy the example override configuration to the Hexo site root:

```bash
cp themes/animal-island/examples/_config.animal-island.yml _config.animal-island.yml
```

Generate the site:

```bash
hexo clean && hexo generate
# or use your own npm build script
```

> If you rename the theme folder, the `theme:` value must match the folder name. The override file name must match as well, for example `_config.<theme-name>.yml`.

## Recommended Pages

The default menu points to search, categories, tags, archives, and about pages. Archives are built in by Hexo, but the other pages should be created in your site:

```bash
hexo new page search
hexo new page categories
hexo new page tags
hexo new page about
```

Set the front matter for the generated pages:

```yaml
# source/search/index.md
---
title: Search
type: search
---
```

```yaml
# source/categories/index.md
---
title: Categories
type: categories
---
```

```yaml
# source/tags/index.md
---
title: Tags
type: tags
---
```

The `search` page is powered by the theme's client-side script. The `categories` and `tags` pages read `site.categories` and `site.tags` from Hexo.

## Configuration

Theme defaults live in the theme package:

```text
_config.yml
```

For real sites, keep your custom values in the Hexo site root override file:

```text
_config.animal-island.yml
```

Minimal example:

```yaml
profile:
  avatar: /images/island-assets/profile.jpg
  name: "Islander"
  intro: "Welcome to my island blog."
  status: "Writing, building, and exploring today."

hero:
  title: "Welcome to my island"
  subtitle: "A cozy island-style Hexo blog."
  cta_text: "Explore archives"
  cta_url: /archives/

toc:
  enable: true
  min_depth: 2
  max_depth: 4

labels:
  profile_label: "Island Representative"
  search_aria: "Site search"
  archive_title: "Archives"
  theme_title: "Theme"
```

See the complete example in [examples/\_config.animal-island.yml](./examples/_config.animal-island.yml) and the configuration guide in [docs/CONFIGURATION.md](./docs/CONFIGURATION.md).

## Post Table of Contents

The post TOC is enabled by default and reads headings from rendered post content.

Disable it for a single post:

```yaml
---
title: My post
toc: false
---
```

Override heading depth for one post:

```yaml
---
title: My post
toc:
  min_depth: 2
  max_depth: 3
toc_title: "On this page"
---
```

## Theme Switching

Theme buttons use:

```html
data-theme-choice="day" data-theme-choice="night"
```

The browser storage key is:

```text
animal-island-theme
```

Supported values are `day` and `night`. The theme writes the value to `html[data-theme]` before CSS loads to reduce refresh flicker.

## Documentation

Detailed guides are available in `docs/`:

- [Installation](./docs/INSTALLATION.md)
- [Configuration](./docs/CONFIGURATION.md)
- [Customization](./docs/CUSTOMIZATION.md)
- [Development](./docs/DEVELOPMENT.md)
- [Project structure](./docs/STRUCTURE.md)
- [Project manual](./docs/PROJECT_MANUAL.md)
- [Troubleshooting](./docs/TROUBLESHOOTING.md)
- [Assets and credits](./docs/ASSETS_AND_CREDITS.md)
- [Legal notice and usage restrictions](./LEGAL_NOTICE.md)

## Development and Validation

Run the built-in validation script before publishing changes:

```bash
cd /path/to/hexo-theme-animal-island
npm run validate
```

Validate inside a real Hexo site as well:

```bash
cd /path/to/your-hexo-site
hexo clean && hexo generate
```

## Publishing Checklist

Before publishing this theme on GitHub:

1. Confirm the clone URL in installation snippets matches the final GitHub repository owner.
2. Keep `LICENSE`, `LEGAL_NOTICE.md`, `CREDITS.txt`, and [docs/ASSETS_AND_CREDITS.md](./docs/ASSETS_AND_CREDITS.md).
3. Make sure the non-commercial and personal-learning-only restrictions are visible and unchanged.
4. Run `npm run validate`.
5. Test `hexo clean && hexo generate` in at least one Hexo site.
6. Keep [README.md](./README.md) and [README.zh-CN.md](./README.zh-CN.md) in sync.

## License and Usage Restrictions

This project is source-available for personal learning and non-commercial use only. Commercial use is prohibited. See [LICENSE](./LICENSE) and [LEGAL_NOTICE.md](./LEGAL_NOTICE.md). Third-party UI elements, references, and asset credits are listed in [CREDITS.txt](./CREDITS.txt) and [docs/ASSETS_AND_CREDITS.md](./docs/ASSETS_AND_CREDITS.md); keep these notices when copying, modifying, or publicly sharing this theme.
