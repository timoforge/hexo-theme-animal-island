# 🏗️ 项目结构

<p align="center">
  <a href="./STRUCTURE.md">English</a> · <strong>简体中文</strong>
</p>

```text
hexo-theme-animal-island/
├── _config.yml                         # 主题默认配置
├── README.md                           # 英文总览与快速使用
├── README.zh-CN.md                     # 中文总览与快速使用
├── LICENSE                             # 个人学习与非商业使用许可
├── LEGAL_NOTICE.md                     # 中英法律声明与使用限制
├── CREDITS.txt                         # 参考项目与素材鸣谢
├── package.json                        # 校验脚本与包元信息
├── docs/                               # 文档手册
├── examples/
│   └── _config.animal-island.yml       # 推荐复制到 Hexo 根目录的覆盖配置
├── layout/                             # Hexo EJS 模板
│   ├── layout.ejs                      # 全站外壳、统一底板、右侧装饰
│   ├── index.ejs                       # 首页
│   ├── post.ejs                        # 文章页
│   ├── page.ejs                        # 独立页面、搜索、分类标签总览
│   ├── archive.ejs                     # 归档/列表页
│   ├── category.ejs                    # 分类页，复用 archive
│   ├── tag.ejs                         # 标签页，复用 archive
│   ├── 404.ejs                         # 404 页面
│   └── _partial/                       # 公共局部模板
│       ├── head.ejs                    # meta、CSS、提前主题初始化
│       ├── header.ejs                  # 侧边栏、移动端头部、主题按钮
│       ├── footer.ejs                  # 页脚、JS 引入
│       ├── post-card.ejs               # 首页文章卡片
│       ├── pagination.ejs              # 分页
│       └── toc.ejs                     # 文章页自动大纲
├── source/
│   ├── css/
│   │   └── animal-island.css           # 主题样式与昼夜变量
│   ├── js/
│   │   └── animal-island.js            # 主题切换、抽屉、目录、搜索
│   └── images/
│       ├── island-assets/              # 横幅、菜单、装饰小岛素材
│       └── animal-ui/                  # 光标、海浪、树等素材
└── tools/
    └── validate-theme.js               # 轻量静态校验脚本
```

## 🧩 Hexo 渲染关系

- `layout/layout.ejs` 是全站外层模板，所有页面内容都会进入 `<%- body %>`。
- 主题将 `<%- body %>` 放进 `ai-island-board`，因此首页、分类、归档、标签、搜索、关于等页面共享同一底板。
- 搜索页、分类总览和标签总览由 `layout/page.ejs` 根据 page `type` 分支渲染。
- 右侧装饰栏在 `layout/layout.ejs` 中统一渲染；文章页会替换为 TOC，搜索页会替换为搜索提示卡。
- `layout/_partial/head.ejs` 在 CSS 加载前读取 `localStorage`，减少主题闪烁。
- `layout/_partial/footer.ejs` 负责引入 `source/js/animal-island.js`。

## 🖼️ 静态资源路径

EJS 中的图片使用 Hexo `url_for()` 输出，例如：

```ejs
<%- url_for(assets.favicon || '/images/island-assets/favicon.svg') %>
```

CSS 中的图片使用相对路径，例如：

```css
url("../images/animal-ui/cursor-icon.png")
```

这样主题复制到不同站点或部署到子路径时更容易复用。
