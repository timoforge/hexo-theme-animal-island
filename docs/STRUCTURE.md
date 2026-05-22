# 🏗️ Project Structure / 项目结构

```text
hexo-theme-animal-island/
├── _config.yml                         # Theme default config / 主题默认配置
├── README.md                           # English overview and quick start / 英文总览与快速使用
├── README.zh-CN.md                     # Chinese overview and quick start / 中文总览与快速使用
├── LICENSE                             # Personal-learning and non-commercial license / 个人学习与非商业使用许可
├── LEGAL_NOTICE.md                     # Bilingual legal notice and restrictions / 中英法律声明与使用限制
├── CREDITS.txt                         # Credits for references and assets / 参考项目与素材鸣谢
├── package.json                        # Validation script and package metadata / 校验脚本与包元信息
├── docs/                               # Bilingual guides / 双语手册
├── examples/
│   └── _config.animal-island.yml       # Recommended site-level override config / 推荐复制到 Hexo 根目录的覆盖配置
├── layout/                             # Hexo EJS templates / Hexo EJS 模板
│   ├── layout.ejs                      # Global shell, shared board, right rail / 全站外壳、统一底板、右侧装饰
│   ├── index.ejs                       # Home page / 首页
│   ├── post.ejs                        # Post page / 文章页
│   ├── page.ejs                        # Standalone pages, search, taxonomy overviews / 独立页面、搜索、分类标签总览
│   ├── archive.ejs                     # Archive and listing pages / 归档/列表页
│   ├── category.ejs                    # Category page, reuses archive behavior / 分类页，复用 archive
│   ├── tag.ejs                         # Tag page, reuses archive behavior / 标签页，复用 archive
│   ├── 404.ejs                         # 404 page / 404 页面
│   └── _partial/                       # Shared partial templates / 公共局部模板
│       ├── head.ejs                    # meta, CSS, early theme init / meta、CSS、提前主题初始化
│       ├── header.ejs                  # sidebar, mobile header, theme buttons / 侧边栏、移动端头部、主题按钮
│       ├── footer.ejs                  # footer and JS include / 页脚、JS 引入
│       ├── post-card.ejs               # home post card / 首页文章卡片
│       ├── pagination.ejs              # pagination / 分页
│       └── toc.ejs                     # post table of contents / 文章页自动大纲
├── source/
│   ├── css/
│   │   └── animal-island.css           # Theme styles and day/night variables / 主题样式与昼夜变量
│   ├── js/
│   │   └── animal-island.js            # theme switch, drawer, TOC, search / 主题切换、抽屉、目录、搜索
│   └── images/
│       ├── island-assets/              # banners, menu icons, decorative island assets / 横幅、菜单、装饰小岛素材
│       └── animal-ui/                  # cursor, sea, tree, UI assets / 光标、海浪、树等素材
└── tools/
    └── validate-theme.js               # lightweight static validation script / 轻量静态校验脚本
```

## 🧩 Hexo rendering flow / Hexo 渲染关系

- `layout/layout.ejs` is the global wrapper; all page content is inserted through `<%- body %>`. / `layout/layout.ejs` 是全站外层模板，所有页面内容都会进入 `<%- body %>`。
- The theme places `<%- body %>` inside `ai-island-board`, so home, category, archive, tag, search, about, and normal pages share the same board layout. / 主题将 `<%- body %>` 放进 `ai-island-board`，因此首页、分类、归档、标签、搜索、关于等页面共享同一底板。
- `layout/page.ejs` branches by page `type` for search, category overview, and tag overview pages. / 搜索页、分类总览和标签总览由 `layout/page.ejs` 根据 page `type` 分支渲染。
- The right-side rail is rendered in `layout/layout.ejs`; post pages replace it with TOC, and search pages replace it with search helper cards. / 右侧装饰栏在 `layout/layout.ejs` 中统一渲染；文章页会替换为 TOC，搜索页会替换为搜索提示卡。
- `layout/_partial/head.ejs` reads `localStorage` before CSS loads to reduce day/night flicker. / `layout/_partial/head.ejs` 在 CSS 加载前读取 `localStorage`，减少主题闪烁。
- `layout/_partial/footer.ejs` includes `source/js/animal-island.js`. / `layout/_partial/footer.ejs` 负责引入 `source/js/animal-island.js`。

## 🖼️ Static asset paths / 静态资源路径

Images in EJS should use Hexo `url_for()`.

EJS 中的图片使用 Hexo `url_for()` 输出，例如：

```ejs
<%- url_for(assets.favicon || '/images/island-assets/favicon.svg') %>
```

Images in CSS use relative URLs from `source/css/`.

CSS 中的图片使用相对路径，例如：

```css
url("../images/animal-ui/cursor-icon.png")
```

This keeps the theme reusable when copied to different sites or deployed under a subpath.

这样主题复制到不同站点或部署到子路径时更容易复用。
