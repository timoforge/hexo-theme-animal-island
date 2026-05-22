# 🏝️ Hexo Theme Animal Island

<p align="center">
  <a href="./README.md">English</a> · <strong>简体中文</strong>
</p>

<p align="center">
  🍃 一套温暖小岛风格的 Hexo 主题：纸片卡片、柔和配色、昼夜切换，还有轻松的岛屿 UI 氛围。
</p>

<p align="center">
  <strong>Hexo >= 6</strong> · <strong>Node.js >= 16</strong> · <strong>源码公开 / 仅限非商业使用</strong>
</p>

---

## ⚠️ 法律声明

本项目仅供 **个人学习、研究与非商业演示** 使用。严禁商业使用、转售、付费分发或用于商业服务。

本项目的 UI 元素、视觉 token 与部分素材来自或参考自 guokaigdg 的 [animal-island-ui](https://github.com/guokaigdg/animal-island-ui)，以及 [CREDITS.txt](./CREDITS.txt) 与 [docs/ASSETS_AND_CREDITS.zh-CN.md](./docs/ASSETS_AND_CREDITS.zh-CN.md) 中列明的其他来源；这些 UI 元素不是 Nintendo 提供的素材。

本项目 **不是** Nintendo 官方产品，**未获得** Nintendo 背书，也 **与 Nintendo 无任何关联**。使用者需自行承担使用后果。详见 [LEGAL_NOTICE.md](./LEGAL_NOTICE.md) 和 [LICENSE](./LICENSE)。

## 🌊 演示

- 🏖️ [在线预览](https://hexo-theme-animal-island-demo.pages.dev)

![Animal Island 主题首页预览](./docs/assets/animal-island-home-preview.png)

## 🌿 功能亮点

- 🏡 Hexo 原生主题结构：`layout/`、`source/` 与 `_config.yml`。
- 📱 响应式侧边栏、移动端抽屉菜单、个人资料卡片、导航图标和右侧装饰栏。
- 🌗 内置 `day` / `night` 昼夜切换，状态写入 `localStorage`。
- 🔎 客户端站内搜索，可搜索文章标题、正文、分类和标签。
- 🧭 分类 / 标签总览页会从 Hexo 集合自动渲染。
- 📚 文章页右侧自动生成悬浮目录。
- 🧩 可配置个人信息、首页横幅、菜单、界面文案、右侧公告栏、页脚链接、图片资源和文章目录行为。
- 🖱️ 链接、按钮和表单控件使用统一自定义光标。
- 🧪 自带轻量静态校验脚本，便于发布前检查。

## 📦 安装

把主题克隆到 Hexo 站点的 `themes/` 目录：

```bash
cd /path/to/your-hexo-site
mkdir -p themes
git clone https://github.com/timoforge/hexo-theme-animal-island.git themes/animal-island
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
```

> 如果你把主题目录改成别的名字，`theme:` 的值必须与目录名一致；覆盖配置文件名也要对应，例如 `_config.<theme-name>.yml`。

## 🗺️ 推荐页面

默认菜单指向搜索、分类、标签、归档和关于页面。归档由 Hexo 内置生成，其他页面建议在 Hexo 站点中创建：

```bash
hexo new page search
hexo new page categories
hexo new page tags
hexo new page about
```

为页面设置 front matter：

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

## ⚙️ 配置

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

links:
  - name: GitHub
    url: https://github.com/timoforge/hexo-theme-animal-island
  - name: RSS
    url: ""
```

完整示例见 [examples/_config.animal-island.yml](./examples/_config.animal-island.yml)，详细字段说明见 [docs/CONFIGURATION.zh-CN.md](./docs/CONFIGURATION.zh-CN.md)。

## 📚 文章目录

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

## 🌗 主题切换

主题按钮使用：

```html
data-theme-choice="day" data-theme-choice="night"
```

浏览器本地保存键：

```text
animal-island-theme
```

支持值为 `day` 和 `night`。主题会在 CSS 加载前把保存值写入 `html[data-theme]`，从而减少刷新时的闪烁。

## 🧰 开发

发布前建议运行主题自带校验脚本：

```bash
npm run validate
```

同时建议在真实 Hexo 站点中验证：

```bash
cd /path/to/your-hexo-site
hexo clean && hexo generate
```

本主题包没有单独的测试套件或 lint 脚本。校验脚本会检查关键文件、CSS 资源引用、JavaScript 语法、EJS 标签、主题/光标约定、图片引用和发布安全措辞。

## 🧾 文档目录

- 📦 [安装手册](./docs/INSTALLATION.zh-CN.md)
- ⚙️ [配置手册](./docs/CONFIGURATION.zh-CN.md)
- 🎨 [定制手册](./docs/CUSTOMIZATION.zh-CN.md)
- 🧰 [开发手册](./docs/DEVELOPMENT.zh-CN.md)
- 🏗️ [项目结构](./docs/STRUCTURE.zh-CN.md)
- 🗒️ [项目使用手册](./docs/PROJECT_MANUAL.zh-CN.md)
- 🩹 [故障排查](./docs/TROUBLESHOOTING.zh-CN.md)
- 🙏 [素材与鸣谢](./docs/ASSETS_AND_CREDITS.zh-CN.md)
- ⚠️ [法律声明与使用限制](./LEGAL_NOTICE.md)

## 🌱 参考资源

- [animal-island-ui](https://github.com/guokaigdg/animal-island-ui) by guokaigdg — UI 元素、视觉 token 与部分小岛风格素材参考。
- [ac-site-template](https://github.com/yunxinz/ac-site-template) by Zhang Yunxin / yunxinz — 布局氛围与装饰素材参考。
- 完整鸣谢与使用说明：[docs/ASSETS_AND_CREDITS.zh-CN.md](./docs/ASSETS_AND_CREDITS.zh-CN.md)。

## 🚢 GitHub 发布检查清单

上传 GitHub 公开仓库前建议检查：

- [ ] 运行 `npm run validate`。
- [ ] 在至少一个 Hexo 站点中执行 `hexo clean && hexo generate`。
- [ ] 保持 `README.md` 与 `README.zh-CN.md` 内容同步。
- [ ] 保留 `LICENSE`、`LEGAL_NOTICE.md`、`CREDITS.txt` 和 `docs/ASSETS_AND_CREDITS.md`。
- [ ] 确认“仅限个人学习、严禁商业使用”的限制清晰可见且未被删除。

## 📜 许可证

本项目源码公开但仅限个人学习与非商业使用，严禁商业使用。详见 [LICENSE](./LICENSE) 与 [LEGAL_NOTICE.md](./LEGAL_NOTICE.md)。

第三方 UI 元素、参考项目与素材鸣谢见 [CREDITS.txt](./CREDITS.txt) 和 [docs/ASSETS_AND_CREDITS.zh-CN.md](./docs/ASSETS_AND_CREDITS.zh-CN.md)；复制、修改或公开分享本主题时，请保留这些声明。
