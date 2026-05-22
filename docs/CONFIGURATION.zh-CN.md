# ⚙️ 配置手册

<p align="center">
  <a href="./CONFIGURATION.md">English</a> · <strong>简体中文</strong>
</p>

主题默认配置位于主题目录：

```text
_config.yml
```

在实际 Hexo 站点中，推荐创建站点级覆盖文件：

```text
_config.animal-island.yml
```

这样以后升级主题时，不需要直接改主题目录里的默认配置。

## 🧑 profile

侧边栏头像、名称、简介与状态文案。

```yaml
profile:
  avatar: /images/island-assets/profile.jpg
  name: "Islander"
  intro: "欢迎来到我的小岛博客。"
  status: "今天也在岛上写作、记录和探索。"
```

- `avatar`：头像图片 public 路径。
- `name`：侧边栏头像下方名称；留空或删除时使用 Hexo 站点 `author`，再退回到站点 `title`。
- `intro`：侧边栏个人简介。
- `status`：侧边栏底部和右侧装饰卡片的默认状态文案。

## 🖼️ assets

主题默认图像资源路径。

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

这些路径会通过 Hexo 的 `url_for()` 输出，能适配站点 `root` 配置。

## 🏡 hero

首页头图区域。

```yaml
hero:
  icon: /images/island-assets/favicon.svg
  greeting: "Hey there"
  title: "欢迎来到我的小岛"
  subtitle: "一座小岛风格的 Hexo 博客。"
  recent_title: "Recent Notes"
  cta_text: "开始逛岛"
  cta_url: /archives/
```

## 🪧 side_board

统一底板右侧装饰栏。

```yaml
side_board:
  label: "Island Board"
  title: ""
  description: ""
  bubble: "写作 · 归档 · 小岛日常"
  icons:
    - /images/island-assets/board-note.png
    - /images/island-assets/photos.png
    - /images/island-assets/drawing.png
```

- `label`：右侧公告卡片顶部小标题。
- `title` 留空时使用站点 `title`。
- `description` 留空时使用 `profile.status`，再退回到站点 `description`。
- `bubble`：右侧气泡文字。
- `icons` 可以放任意 public 图片路径。

## 📚 toc

文章详情页右侧悬浮书签式自动大纲。开启后，主题会从每篇文章渲染后的标题标签中自动提取目录，并吸附在页面右侧随滚动保持可见。

```yaml
toc:
  enable: true
  min_depth: 2
  max_depth: 4
  max_items: 32
```

- `enable`：是否默认在所有文章详情页显示大纲。
- `min_depth`：参与大纲的最小标题级别，默认 `2`，对应 Markdown 的 `##`。
- `max_depth`：参与大纲的最大标题级别，默认 `4`，对应 Markdown 的 `####`。
- `max_items`：最多显示多少个标题，设置为 `0` 表示不限制。

单篇文章可以在 front matter 中覆盖：

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
toc_title: "本文目录"
---
```

## 🧭 menu

侧边栏主导航。

```yaml
menu:
  home:
    text: 首页
    url: /
    icon: /images/island-assets/nav-home.png
  archives:
    text: 归档
    url: /archives/
    icon: /images/island-assets/photos.png
```

每一项支持：

- `text`：显示文字。
- `url`：跳转地址。
- `icon`：导航图标，可留空。

如果添加自定义页面，比如 `friends`，需要添加菜单并在 Hexo 中创建对应页面：

```yaml
menu:
  friends:
    text: 友链
    url: /friends/
    icon: /images/island-assets/messages.png
```

```bash
hexo new page friends
```

## 🏷️ labels

模板中的界面文字集中在 `labels` 中，固定文案都可以在这里覆盖。

```yaml
labels:
  profile_label: "Island Representative"
  drawer_open: "打开菜单"
  home_aria: "返回首页"
  nav_aria: "主导航"
  toc_label: "Contents"
  toc_title: "文章大纲"
  toc_aria: "文章大纲"
  toc_empty: "这篇文章暂时没有可用的大纲"
  theme_title: "底色主题"
  theme_aria: "底色主题切换"
  theme_day: "浅色"
  theme_night: "夜色"
  theme_day_short: "日"
  theme_night_short: "夜"
  archive_label: "Island Archive"
  archive_title: "文章归档"
  list_title: "文章列表"
  page_label: "Island Page"
  search_label: "Island Search"
  search_aria: "站内搜索"
  search_help: "支持搜索文章标题、正文、分类和标签，多个关键词会同时匹配。"
  search_input_label: "搜索关键词"
  search_placeholder: "输入标题、正文、分类或标签"
  search_submit: "搜索"
  search_initial: "输入关键词后会在这里显示匹配的文章。"
  search_no_results: "没有找到匹配的文章，换个关键词试试。"
  search_no_script: "搜索功能需要启用浏览器 JavaScript。"
  untitled_post: "未命名文章"
  pagination_aria: "分页"
  pagination_prev: "上一页"
  pagination_next: "下一页"
  not_found_code: "404"
  not_found_title: "岛上好像没有这个地方"
  not_found_subtitle: "也许路径写错了，或者这篇文章还在建设中。"
  not_found_back_home: "返回首页"
```

常用字段对应关系：

- `profile_label`：侧边栏个人卡片上的身份标签。
- `toc_*`：文章详情页右侧大纲的标签、标题、辅助朗读文案和无目录提示。
- `theme_*`：底色主题切换区文字。
- `archive_label`、`archive_title`、`list_title`：归档 / 列表页面标题文字。
- `search_*`：搜索页标题标签、输入框、按钮、初始提示、无结果提示和无脚本提示。
- `pagination_prev`、`pagination_next`：分页按钮文字。
- `not_found_*`：404 页面文案。

## 🧾 footer / links

页脚文案和链接。

```yaml
footer:
  text: "Made with Hexo on Animal Island."

links:
  - name: GitHub
    url: https://github.com/timoforge/hexo-theme-animal-island
  - name: RSS
    url: ""
```

外链会自动使用 `_blank` 打开；站内链接使用当前窗口打开；`url` 留空时会保留显示为不可点击文本。

## 🌗 主题模式

主题内置两个模式：

```text
day
night
```

浏览器保存键：

```text
animal-island-theme
```

按钮属性：

```text
data-theme-choice="day"
data-theme-choice="night"
```

CSS 根据 `html[data-theme="night"]` 切换夜色变量。`labels.theme_day` 和 `labels.theme_night` 只修改按钮显示文字，不改变实际主题值。
