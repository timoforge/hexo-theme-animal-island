# 🩹 Troubleshooting / 故障排查

## Hexo cannot find the theme / Hexo 提示找不到主题

Make sure the folder name matches the `theme` value in the Hexo root `_config.yml`.

确认目录名和 `_config.yml` 中的 `theme` 一致：

```text
themes/animal-island
```

```yaml
theme: animal-island
```

If the folder is named `hexo-theme-animal-island`, then `theme:` must use that exact name.

如果目录名是 `hexo-theme-animal-island`，则 `theme:` 也必须使用这个完整名称。

## CSS or JavaScript is missing after build / 构建后样式或脚本没有加载

Confirm generated files exist in Hexo output.

确认生成目录中存在：

```text
public/css/animal-island.css
public/js/animal-island.js
```

If they are missing, check whether the theme is placed under the correct `themes/animal-island` directory.

如果没有，检查主题是否位于正确的 `themes/animal-island` 目录。

## Image 404 / 图片 404

Image config values should be public paths.

主题配置中的图片路径应该是 public 路径，例如：

```yaml
profile:
  avatar: /images/island-assets/profile.jpg
```

Confirm the source file exists in the theme or site.

并确认主题或站点中存在对应源文件：

```text
source/images/island-assets/profile.jpg
```

## Day mode shows night banner / 浅色模式出现深色横幅

The theme renders day/night banner images at the same time and controls visibility through `html[data-theme]`. If templates were changed, confirm these classes still exist.

当前主题会同时渲染 day/night 两套横幅，并通过 `html[data-theme]` 控制显示。如果你改过模板，请确认仍保留：

```text
ai-banner-img--day
ai-banner-img--night
```

## Page switch or refresh flickers / 页面切换或刷新闪烁

Keep the early `animal-island-theme` script in `layout/_partial/head.ejs`. It must run before CSS loads.

确认 `layout/_partial/head.ejs` 中保留了提前读取 `animal-island-theme` 的脚本。这个脚本必须在 CSS 前执行。

## Cursor changes over buttons / 光标在按钮上变化

Search CSS for cursor rules.

搜索 CSS：

```bash
grep -nR "cursor:" source/css layout
```

Do not add `cursor: pointer`. This theme keeps the same cursor for buttons, links, and form controls.

不要添加 `cursor: pointer`。主题要求按钮、链接、表单控件保持同一光标。

## Search page has no search box / 搜索页没有搜索框

Make sure the search page front matter has `type: search`.

确认搜索页 front matter 设置了 `type: search`：

```yaml
---
title: Search
type: search
---
```

## Categories or tags page is empty / 分类或标签页面为空

Make sure posts have `categories` or `tags` in their front matter. The overview pages render from Hexo `site.categories` and `site.tags`.

确认文章 front matter 中写了 `categories` 或 `tags`。分类 / 标签总览页会读取 Hexo 的 `site.categories` 和 `site.tags`。
