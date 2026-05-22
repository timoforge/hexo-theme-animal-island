# 定制手册

本主题尽量把可变内容放进 `_config.animal-island.yml`，把视觉样式集中在 `source/css/animal-island.css`。

## 修改站点信息

站点标题、作者、语言等仍然在 Hexo 站点根目录 `_config.yml` 中配置：

```yaml
title: 小岛日记
author: Islander
language: zh-CN
```

主题会读取这些值并渲染；如果在主题覆盖配置中设置了 `profile.name`，侧边栏名称会优先使用 `profile.name`。

## 修改侧边栏个人信息

在站点根目录 `_config.animal-island.yml` 中覆盖：

```yaml
profile:
  avatar: /images/island-assets/profile.jpg
  name: "Islander"
  intro: "欢迎来到我的小岛博客。"
  status: "今天也在岛上写作、记录和探索。"
```

## 修改首页文案

在站点根目录 `_config.animal-island.yml` 中覆盖：

```yaml
hero:
  title: "我的博客"
  subtitle: "记录技术、生活与思考。"
  cta_text: "查看归档"
  cta_url: /archives/
```

## 修改界面文字

截图中标注的固定文案可以通过 `labels` 覆盖，例如侧边栏身份标签、归档页标题、主题切换按钮和分页按钮：

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

## 修改导航

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

删除不需要的菜单项即可隐藏。

## 修改昼夜配色

核心变量在：

```text
source/css/animal-island.css
```

浅色变量位于 `:root`，夜色变量位于：

```css
html[data-theme="night"] {
  /* night variables */
}
```

建议只改 CSS 变量，例如：

```css
:root {
  --ai-primary: #2abaaa;
  --ai-page-bg: #f7f3e7;
  --ai-main-bg: #fffdf5;
}
```

## 修改横幅与装饰图片

优先在配置中替换资源路径：

```yaml
assets:
  header_banner_day: /images/island-assets/header_banner_light.png
  header_banner_night: /images/island-assets/header_banner_dark.png
  footer_banner_day: /images/island-assets/banner_light.png
  footer_banner_night: /images/island-assets/banner_dark.png
```

把新图片放入主题或站点的 `source/images/` 下，并使用 public 路径引用。

## 修改右侧装饰栏

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

## 修改文章大纲

文章详情页右侧大纲默认开启，会自动读取文章中的 `##` 到 `####` 标题，并以悬浮书签样式跟随页面滚动：

```yaml
toc:
  enable: true
  min_depth: 2
  max_depth: 4
  max_items: 32
```

大纲文案可通过 `labels` 修改：

```yaml
labels:
  toc_label: "Contents"
  toc_title: "文章大纲"
  toc_empty: "这篇文章暂时没有可用的大纲"
```

单篇文章可以在 front-matter 中关闭或覆盖：

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

## 修改鼠标指针

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

本主题刻意不使用 `cursor: pointer`，这样按钮和链接 hover 时不会切换成另一种指针。

## 修改页面模板

页面模板在：

```text
layout/
```

常用文件：

- `layout/index.ejs`：首页。
- `layout/post.ejs`：文章详情。
- `layout/page.ejs`：独立页面，例如 about。
- `layout/archive.ejs`：归档、分类、标签列表。
- `layout/layout.ejs`：全站统一底板与右侧装饰。

如果要保持当前统一底板效果，尽量不要绕开 `layout/layout.ejs` 中的 `ai-island-board`。
