# 🩹 故障排查

<p align="center">
  <a href="./TROUBLESHOOTING.md">English</a> · <strong>简体中文</strong>
</p>

## Hexo 提示找不到主题

确认目录名和 `_config.yml` 中的 `theme` 一致：

```text
themes/animal-island
```

```yaml
theme: animal-island
```

如果目录名是 `hexo-theme-animal-island`，则 `theme:` 也必须使用这个完整名称。

## 构建后样式或脚本没有加载

确认生成目录中存在：

```text
public/css/animal-island.css
public/js/animal-island.js
```

如果没有，检查主题是否位于正确的 `themes/animal-island` 目录。

## 图片 404

主题配置中的图片路径应该是 public 路径，例如：

```yaml
profile:
  avatar: /images/island-assets/profile.jpg
```

并确认主题或站点中存在对应源文件：

```text
source/images/island-assets/profile.jpg
```

## 浅色模式出现深色横幅

当前主题会同时渲染 day/night 两套横幅，并通过 `html[data-theme]` 控制显示。如果你改过模板，请确认仍保留：

```text
ai-banner-img--day
ai-banner-img--night
```

## 页面切换或刷新闪烁

确认 `layout/_partial/head.ejs` 中保留了提前读取 `animal-island-theme` 的脚本。这个脚本必须在 CSS 前执行。

## 光标在按钮上变化

搜索 CSS：

```bash
grep -nR "cursor:" source/css layout
```

不要添加 `cursor: pointer`。主题要求按钮、链接、表单控件保持同一光标。

## 搜索页没有搜索框

确认搜索页 front matter 设置了 `type: search`：

```yaml
---
title: 搜索
type: search
---
```

## 分类或标签页面为空

确认文章 front matter 中写了 `categories` 或 `tags`。分类 / 标签总览页会读取 Hexo 的 `site.categories` 和 `site.tags`。
