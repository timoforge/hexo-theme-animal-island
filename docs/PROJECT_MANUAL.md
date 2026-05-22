# 🗒️ Project Manual / 项目使用手册

This manual explains how to maintain Animal Island as a personal-learning and non-commercial Hexo theme.

这份手册面向实际使用者，说明如何把 Animal Island 作为一个个人学习与非商业用途主题维护。

> ⚠️ Usage restriction / 使用限制：This project is for personal learning, research, and non-commercial demonstration only. Commercial use is prohibited. Read [LEGAL_NOTICE.md](../LEGAL_NOTICE.md) before using it. / 本项目仅限个人学习、研究与非商业演示使用，严禁商业使用。使用前请阅读 [LEGAL_NOTICE.md](../LEGAL_NOTICE.md)。

## 1. 🏝️ First setup / 初次接入

1. Copy or clone the theme to `themes/animal-island` in your Hexo site. / 把主题复制或克隆到 Hexo 项目的 `themes/animal-island`。
2. Set `theme: animal-island` in the Hexo root `_config.yml`. / 在 Hexo 根 `_config.yml` 中设置 `theme: animal-island`。
3. Copy `examples/_config.animal-island.yml` to the Hexo root. / 复制 `examples/_config.animal-island.yml` 到 Hexo 根目录。
4. Update avatar, hero text, menu, and footer links. / 修改头像、首页文案、菜单和页脚链接。
5. Run `hexo clean && hexo generate`. / 执行 `hexo clean && hexo generate`。

## 2. ✍️ Daily writing / 日常写作

The theme does not change Hexo's content workflow. Posts still live in:

主题不改变 Hexo 的内容管理方式。文章仍放在：

```text
source/_posts/
```

Create a post.

创建文章：

```bash
hexo new "文章标题"
```

Create a standalone page, such as about.

创建独立页面，例如关于页：

```bash
hexo new page about
```

If the menu links to `/about/`, make sure the page exists.

如果菜单里有 `/about/`，请确保对应页面存在。

## 3. 🖼️ Replacing visual assets / 更换视觉素材

Prefer replacing images through `_config.animal-island.yml` fields such as `assets`, `profile`, and `side_board.icons`.

优先通过 `_config.animal-island.yml` 的 `assets`、`profile`、`side_board.icons` 替换图片。

Recommended paths:

建议路径：

```text
source/images/island-assets/
source/images/animal-ui/
```

You can also place images in your site's own `source/images/` and reference them with the same public path style.

如果你在站点自己的 `source/images/` 放图片，也可以在配置中使用同样的 public 路径。

## 4. 🔄 Updating the theme / 更新主题

If your site uses a copied theme folder:

如果你的站点是复制主题目录：

1. Back up `themes/animal-island`. / 先备份站点里的 `themes/animal-island`。
2. Replace it with the new theme package. / 用新的主题包替换该目录。
3. Keep site-specific settings in the site root `_config.animal-island.yml`; do not hard-code personal settings into the theme default `_config.yml`. / 保留站点根目录 `_config.animal-island.yml`，不要把个人配置写死到主题默认 `_config.yml`。
4. Rebuild the site. / 重新执行构建。

If your site cloned the theme with Git, pull updates inside `themes/animal-island`, then rebuild.

如果你的站点是 Git 克隆主题目录，可以在 `themes/animal-island` 内拉取更新后重新构建。

If your site uses a symlink, update the symlink target source directory.

如果你的站点是软链接主题目录，只需要更新软链接指向的 `/path/to/hexo-theme-animal-island`。

## 5. 🧭 Maintenance rules / 推荐维护原则

- Put site-specific customizations in the site root `_config.animal-island.yml`. / 站点个性化内容放在站点根目录 `_config.animal-island.yml`。
- Put reusable theme defaults in theme `_config.yml`. / 主题通用默认值放在主题 `_config.yml`。
- Keep style changes in `source/css/animal-island.css`. / 样式改动集中在 `source/css/animal-island.css`。
- Keep interaction changes in `source/js/animal-island.js`. / 交互改动集中在 `source/js/animal-island.js`。
- Run `npm run validate` and a Hexo build after changes. / 每次改完运行 `npm run validate` 和 Hexo 构建。

## 6. 🩹 Common issues / 常见问题

### Theme is not applied / 页面没有套用主题

Check the Hexo root `_config.yml`.

检查 Hexo 根目录 `_config.yml`：

```yaml
theme: animal-island
```

Confirm the folder exists.

并确认目录存在：

```text
themes/animal-island
```

### Images do not show / 图片不显示

Check that images exist under the theme or site `source/images/`, and that config paths start with `/images/`.

检查图片是否存在于主题或站点的 `source/images/` 中，并确认配置路径以 `/images/` 开头。

### Day/night switch does not work / 切换浅色/夜色没有效果

Check that theme buttons exist.

检查页面中是否存在按钮属性：

```text
data-theme-choice="day"
data-theme-choice="night"
```

Confirm `source/js/animal-island.js` is loaded.

并确认 `source/js/animal-island.js` 被正确加载。

### Cursor changes to hand pointer / 鼠标指针又变成手型

Check whether CSS added:

搜索样式中是否新增了：

```css
cursor: pointer;
```

This theme keeps the same cursor over links and buttons.

本主题要求所有按钮、链接 hover 时保持统一指针。
