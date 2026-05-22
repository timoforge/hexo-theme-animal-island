# 🎨 Customization Guide / 定制手册

Most user-facing content should be customized through `_config.animal-island.yml`. Visual rules live mainly in `source/css/animal-island.css`.

本主题尽量把可变内容放进 `_config.animal-island.yml`，把视觉样式集中在 `source/css/animal-island.css`。

## 🏷️ Site info / 修改站点信息

Site title, author, language, and similar Hexo-wide values still belong in the Hexo site root `_config.yml`.

站点标题、作者、语言等仍然在 Hexo 站点根目录 `_config.yml` 中配置：

```yaml
title: 小岛日记
author: Islander
language: zh-CN
```

The theme reads these values automatically. If `profile.name` is set in the theme override config, it has priority for the sidebar name.

主题会读取这些值并渲染；如果在主题覆盖配置中设置了 `profile.name`，侧边栏名称会优先使用 `profile.name`。

## 🧑 Sidebar profile / 修改侧边栏个人信息

Override `profile` in the site root `_config.animal-island.yml`.

在站点根目录 `_config.animal-island.yml` 中覆盖：

```yaml
profile:
  avatar: /images/island-assets/profile.jpg
  name: "Islander"
  intro: "欢迎来到我的小岛博客。"
  status: "今天也在岛上写作、记录和探索。"
```

## 🏡 Home hero text / 修改首页文案

Override `hero` in `_config.animal-island.yml`.

在 `_config.animal-island.yml` 中覆盖：

```yaml
hero:
  title: "我的博客"
  subtitle: "记录技术、生活与思考。"
  cta_text: "查看归档"
  cta_url: /archives/
```

## 🏷️ UI labels / 修改界面文字

Fixed UI text can be overridden through `labels`, including profile labels, archive titles, theme buttons, search text, and pagination buttons.

固定界面文案可以通过 `labels` 覆盖，例如侧边栏身份标签、归档页标题、主题切换按钮、搜索文案和分页按钮：

```yaml
labels:
  profile_label: "Island Representative"
  theme_title: "底色主题"
  theme_day: "浅色"
  theme_night: "夜色"
  archive_label: "Island Archive"
  archive_title: "文章归档"
  search_placeholder: "输入标题、正文、分类或标签"
  search_submit: "搜索"
  pagination_prev: "上一页"
  pagination_next: "下一页"
```

## 🧭 Navigation / 修改导航

Edit `menu` in `_config.animal-island.yml`.

在 `_config.animal-island.yml` 中修改 `menu`：

```yaml
menu:
  home:
    text: 首页
    url: /
    icon: /images/island-assets/nav-home.png
  search:
    text: 搜索
    url: /search/
    icon: /images/island-assets/brush.png
  about:
    text: 关于
    url: /about/
    icon: /images/island-assets/messages.png
```

Remove menu items you do not need.

删除不需要的菜单项即可隐藏。

## 🌗 Day/night colors / 修改昼夜配色

Core variables live in:

核心变量在：

```text
source/css/animal-island.css
```

Day mode variables are under `:root`; night mode variables are under:

浅色变量位于 `:root`，夜色变量位于：

```css
html[data-theme="night"] {
  /* night variables */
}
```

Prefer changing CSS variables instead of rewriting component rules.

建议只改 CSS 变量，例如：

```css
:root {
  --ai-primary: #2abaaa;
  --ai-page-bg: #f7f3e7;
  --ai-main-bg: #fffdf5;
}
```

## 🖼️ Banners and decorative images / 修改横幅与装饰图片

Prefer replacing asset paths in config.

优先在配置中替换资源路径：

```yaml
assets:
  header_banner_day: /images/island-assets/header_banner_light.png
  header_banner_night: /images/island-assets/header_banner_dark.png
  footer_banner_day: /images/island-assets/banner_light.png
  footer_banner_night: /images/island-assets/banner_dark.png
```

Put new images under the theme or site `source/images/`, then reference them through public paths such as `/images/...`.

把新图片放入主题或站点的 `source/images/` 下，并使用 `/images/...` 这样的 public 路径引用。

## 🪧 Right-side board / 修改右侧装饰栏

```yaml
side_board:
  label: "Island Board"
  title: "我的公告"
  description: "欢迎来到这里。"
  bubble: "写作 · 技术 · 生活"
  icons:
    - /images/island-assets/photos.png
    - /images/island-assets/messages.png
```

## 📚 Post TOC / 修改文章大纲

The post TOC is enabled by default. It reads `##` to `####` headings and follows the reading position on desktop.

文章详情页右侧大纲默认开启，会自动读取文章中的 `##` 到 `####` 标题，并以悬浮书签样式跟随页面滚动：

```yaml
toc:
  enable: true
  min_depth: 2
  max_depth: 4
  max_items: 32
```

TOC labels can be changed through `labels`.

大纲文案可通过 `labels` 修改：

```yaml
labels:
  toc_label: "Contents"
  toc_title: "文章大纲"
  toc_empty: "这篇文章暂时没有可用的大纲"
```

Per-post front matter can disable or override TOC behavior.

单篇文章可以在 front matter 中关闭或覆盖：

```yaml
---
title: 示例文章
toc: false
---
```

```yaml
---
title: 示例文章
toc:
  min_depth: 2
  max_depth: 3
toc_title: "本篇目录"
---
```

## 🖱️ Cursor / 修改鼠标指针

The cursor is configured globally in CSS.

鼠标指针在 CSS 中统一配置：

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

本主题刻意不使用 `cursor: pointer`，这样按钮和链接 hover 时不会切换成另一种指针。

## 🧱 Page templates / 修改页面模板

Templates live in:

页面模板在：

```text
layout/
```

Common files / 常用文件：

- `layout/index.ejs`: home page. / 首页。
- `layout/post.ejs`: post detail page. / 文章详情。
- `layout/page.ejs`: standalone pages such as about, search, categories, and tags. / 独立页面，例如 about、search、categories、tags。
- `layout/archive.ejs`: archive, category, and tag listings. / 归档、分类、标签列表。
- `layout/layout.ejs`: global shell, shared board layout, and right-side decorations. / 全站统一底板与右侧装饰。

To keep the shared board effect, avoid bypassing `ai-island-board` in `layout/layout.ejs`.

如果要保持当前统一底板效果，尽量不要绕开 `layout/layout.ejs` 中的 `ai-island-board`。
