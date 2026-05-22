# Hexo Theme Animal Island

<p align="center">
  <a href="./README.md">English</a> · <strong>简体中文</strong>
</p>

Animal Island 是一套源码公开的 Hexo 主题，仅供个人学习与非商业使用。视觉上采用温暖的小岛生活氛围：柔和纸片卡片、圆角面板、轻松的装饰素材、类似手机应用的侧边导航，以及内置浅色 / 夜色切换。

> **法律声明**
> 本项目仅供个人学习和非商业用途使用，严禁商业使用、转售、付费分发或用于商业服务。
>
> 本项目的 UI 元素、视觉 token 与部分素材来自或参考自 guokaigdg 的 [animal-island-ui](https://github.com/guokaigdg/animal-island-ui)，以及 [CREDITS.txt](./CREDITS.txt) 与 [docs/ASSETS_AND_CREDITS.md](./docs/ASSETS_AND_CREDITS.md) 中列明的其他来源；这些 UI 元素不是 Nintendo 提供的素材。
>
> 本项目不是 Nintendo 官方产品，未获得 Nintendo 背书，也与 Nintendo 无任何关联。使用者需自行承担使用本主题或相关服务产生的后果；由此产生的任何法律纠纷或责任均与本仓库作者/维护者无关。详见 [LEGAL_NOTICE.md](./LEGAL_NOTICE.md)。

## 功能亮点

- Hexo 原生主题结构：`layout/`、`source/` 与 `_config.yml`。
- 首页、文章、独立页面、归档、分类、标签、搜索和 404 页面共享小岛底板布局。
- 响应式侧边栏、移动端抽屉菜单、个人资料卡片、导航图标和右侧装饰栏。
- 内置客户端站内搜索，可搜索文章标题、正文、分类和标签，不依赖第三方搜索服务。
- 分类 / 标签总览页会从 Hexo 的 `site.categories` 和 `site.tags` 自动渲染。
- 文章页右侧自动生成悬浮目录，支持单篇文章通过 front-matter 覆盖。
- 显式浅色 / 夜色双按钮切换，状态写入 `localStorage`，并在 `<head>` 提前初始化以减少刷新闪烁。
- 可配置个人信息、首页横幅、菜单、界面文案、右侧公告栏、页脚链接、图片资源和文章目录行为。
- 链接、按钮和表单控件使用统一自定义光标。
- 自带轻量静态校验脚本，便于公开发布前检查。

## 环境要求

- Hexo `>= 6`
- Node.js `>= 16`

## 快速开始

把主题克隆到 Hexo 站点的 `themes/` 目录（发布后按需把 `your-username` 替换成实际 GitHub 账号或组织名）：

```bash
cd /path/to/your-hexo-site
mkdir -p themes
git clone https://github.com/your-username/hexo-theme-animal-island.git themes/animal-island
```

然后修改 Hexo 站点根目录 `_config.yml`：

```yaml
theme: animal-island
```

复制主题覆盖配置示例到 Hexo 站点根目录：

```bash
cp themes/animal-island/examples/_config.animal-island.yml _config.animal-island.yml
```

生成站点：

```bash
hexo clean && hexo generate
# 或者使用你自己的 npm 构建命令
```

> 如果你把主题目录改成别的名字，`theme:` 的值必须与目录名一致；覆盖配置文件名也要对应，例如 `_config.<theme-name>.yml`。

## 推荐创建的页面

默认菜单指向搜索、分类、标签、归档和关于页面。归档由 Hexo 内置生成，其他页面建议在站点中创建：

```bash
hexo new page search
hexo new page categories
hexo new page tags
hexo new page about
```

为生成后的页面设置 front matter：

```yaml
# source/search/index.md
---
title: 搜索
type: search
---
```

```yaml
# source/categories/index.md
---
title: 分类
type: categories
---
```

```yaml
# source/tags/index.md
---
title: 标签
type: tags
---
```

`search` 页面由主题内置客户端脚本驱动；`categories` 和 `tags` 页面会读取 Hexo 的 `site.categories` 与 `site.tags`。

## 配置方式

主题默认配置位于主题包内：

```text
_config.yml
```

真实站点建议把个性化配置放在 Hexo 站点根目录覆盖文件中：

```text
_config.animal-island.yml
```

最小示例：

```yaml
profile:
  avatar: /images/island-assets/profile.jpg
  name: "Islander"
  intro: "欢迎来到我的小岛博客。"
  status: "今天也在岛上写作、记录和探索。"

hero:
  title: "欢迎来到我的小岛"
  subtitle: "一座温暖的小岛风格 Hexo 博客。"
  cta_text: "查看归档"
  cta_url: /archives/

toc:
  enable: true
  min_depth: 2
  max_depth: 4

labels:
  profile_label: "Island Representative"
  search_aria: "站内搜索"
  archive_title: "文章归档"
  theme_title: "底色主题"
```

完整示例见 [examples/\_config.animal-island.yml](./examples/_config.animal-island.yml)，详细字段说明见 [docs/CONFIGURATION.md](./docs/CONFIGURATION.md)。

## 文章目录

文章目录默认开启，会从文章渲染后的标题中自动提取。

单篇文章关闭目录：

```yaml
---
title: 示例文章
toc: false
---
```

单篇文章覆盖目录层级：

```yaml
---
title: 示例文章
toc:
  min_depth: 2
  max_depth: 3
toc_title: "本文目录"
---
```

## 主题切换

主题按钮使用：

```html
data-theme-choice="day" data-theme-choice="night"
```

浏览器本地保存键：

```text
animal-island-theme
```

支持值为 `day` 和 `night`。主题会在 CSS 加载前把保存值写入 `html[data-theme]`，从而减少刷新时的闪烁。

## 文档目录

详细文档位于 `docs/`：

- [安装手册](./docs/INSTALLATION.md)
- [配置手册](./docs/CONFIGURATION.md)
- [定制手册](./docs/CUSTOMIZATION.md)
- [开发手册](./docs/DEVELOPMENT.md)
- [项目结构](./docs/STRUCTURE.md)
- [项目使用手册](./docs/PROJECT_MANUAL.md)
- [故障排查](./docs/TROUBLESHOOTING.md)
- [素材与鸣谢](./docs/ASSETS_AND_CREDITS.md)
- [法律声明与使用限制](./LEGAL_NOTICE.md)

## 开发与校验

发布前建议运行主题自带校验脚本：

```bash
cd /path/to/hexo-theme-animal-island
npm run validate
```

同时建议在真实 Hexo 站点中验证：

```bash
cd /path/to/your-hexo-site
hexo clean && hexo generate
```

## GitHub 发布检查清单

上传 GitHub 公开仓库前建议检查：

1. 确认安装命令中的克隆地址已经使用最终 GitHub 仓库账号或组织名。
2. 保留 `LICENSE`、`LEGAL_NOTICE.md`、`CREDITS.txt` 和 [docs/ASSETS_AND_CREDITS.md](./docs/ASSETS_AND_CREDITS.md)。
3. 确认“仅限个人学习、严禁商业使用”的限制清晰可见且未被删除。
4. 运行 `npm run validate`。
5. 在至少一个 Hexo 站点中执行 `hexo clean && hexo generate`。
6. 保持 [README.md](./README.md) 与 [README.zh-CN.md](./README.zh-CN.md) 内容同步。

## 许可证与使用限制

本项目源码公开但仅限个人学习与非商业使用，严禁商业使用。详见 [LICENSE](./LICENSE) 与 [LEGAL_NOTICE.md](./LEGAL_NOTICE.md)。第三方 UI 元素、参考项目与素材鸣谢见 [CREDITS.txt](./CREDITS.txt) 和 [docs/ASSETS_AND_CREDITS.md](./docs/ASSETS_AND_CREDITS.md)；复制、修改或公开分享本主题时，请保留这些声明。
