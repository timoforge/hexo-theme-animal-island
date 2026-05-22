# 项目使用手册

这份手册面向实际使用者，说明如何把 Animal Island 作为一个个人学习与非商业用途主题维护。

> 使用限制：本项目仅限个人学习、研究与非商业演示使用，严禁商业使用。使用前请阅读 [LEGAL_NOTICE.md](../LEGAL_NOTICE.md)。

## 1. 初次接入

1. 把主题复制到 Hexo 项目的 `themes/animal-island`。
2. 在 Hexo 根 `_config.yml` 中设置 `theme: animal-island`。
3. 复制 `examples/_config.animal-island.yml` 到 Hexo 根目录。
4. 修改头像、首页文案、菜单和页脚链接。
5. 执行 `hexo clean && hexo generate`。

## 2. 日常写作

主题不改变 Hexo 的内容管理方式。文章仍放在：

```text
source/_posts/
```

创建文章：

```bash
hexo new "文章标题"
```

创建独立页面，例如关于页：

```bash
hexo new page about
```

如果菜单里有 `/about/`，请确保对应页面存在。

## 3. 更换视觉素材

优先通过 `_config.animal-island.yml` 的 `assets`、`profile`、`side_board.icons` 替换图片。

建议路径：

```text
source/images/island-assets/
source/images/animal-ui/
```

如果你在站点自己的 `source/images/` 放图片，也可以在配置中使用同样的 public 路径。

## 4. 更新主题

如果你的站点是复制主题目录：

1. 先备份站点里的 `themes/animal-island`。
2. 用新的主题包替换该目录。
3. 保留站点根目录 `_config.animal-island.yml`，不要把个人配置写死到主题默认 `_config.yml`。
4. 重新执行构建。

如果你的站点是 Git 克隆主题目录，可以在 `themes/animal-island` 内拉取更新后重新构建。

如果你的站点是软链接主题目录，只需要更新软链接指向的 `/path/to/hexo-theme-animal-island`。

## 5. 推荐维护原则

- 站点个性化内容放在站点根目录 `_config.animal-island.yml`。
- 主题通用默认值放在主题 `_config.yml`。
- 样式改动集中在 `source/css/animal-island.css`。
- 交互改动集中在 `source/js/animal-island.js`。
- 每次改完运行 `npm run validate` 和 Hexo 构建。

## 6. 常见问题

### 页面没有套用主题

检查 Hexo 根目录 `_config.yml`：

```yaml
theme: animal-island
```

并确认目录存在：

```text
themes/animal-island
```

### 图片不显示

检查图片是否存在于主题或站点的 `source/images/` 中，并确认配置路径以 `/images/` 开头。

### 切换浅色/夜色没有效果

检查页面中是否存在按钮属性：

```text
data-theme-choice="day"
data-theme-choice="night"
```

并确认 `source/js/animal-island.js` 被正确加载。

### 鼠标指针又变成手型

搜索样式中是否新增了：

```css
cursor: pointer;
```

本主题要求所有按钮、链接 hover 时保持统一指针。
