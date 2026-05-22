# 🧰 Development Guide / 开发手册

## 🧪 Local validation / 本地校验

The theme package provides a lightweight validation script.

主题包提供轻量校验脚本：

```bash
npm run validate
```

It checks / 校验内容包括：

- Required files exist. / 关键文件是否存在。
- CSS brace balance. / CSS 大括号是否平衡。
- CSS image URLs point to existing files. / CSS 内部图片路径是否存在。
- JavaScript can be parsed. / JS 基础语法是否可解析。
- EJS `<%` / `%>` tag counts match. / EJS 标签 `<%` / `%>` 数量是否匹配。
- Legacy single-button theme toggles and `cursor: pointer` do not reappear. / 代码中是否重新出现旧的单按钮主题切换或 `cursor: pointer`。
- Default `/images/...` references in `_config.yml` and EJS exist under `source/images/`. / `_config.yml` 与 EJS 中默认 `/images/...` 引用是否能在 `source/images/` 找到。
- Release-safety wording avoids old Nintendo-adjacent names and asset paths. / 发布安全措辞不会重新出现旧的高风险命名或素材路径。

## 🏝️ Test inside a Hexo site / 在 Hexo 项目中测试

This repository is only the theme package. Test rendered output inside a real Hexo site.

本仓库只是主题包。渲染效果需要在真实 Hexo 站点中测试。

Recommended local symlink setup:

推荐把主题软链接到测试 Hexo 项目：

```bash
cd /path/to/your-hexo-site
mkdir -p themes
ln -s /path/to/hexo-theme-animal-island themes/animal-island
```

Configure the Hexo site root `_config.yml`.

配置 Hexo 站点根目录 `_config.yml`：

```yaml
theme: animal-island
```

Generate the site.

生成：

```bash
hexo clean && hexo generate
```

## 🛠️ Main edit points / 修改入口

- EJS templates / EJS 模板：`layout/`
- Shared partials / 公共局部模板：`layout/_partial/`
- Styles / 样式：`source/css/animal-island.css`
- Interactions / 交互：`source/js/animal-island.js`
- Images / 图片：`source/images/`
- Default config / 默认配置：`_config.yml`
- User override example / 用户配置示例：`examples/_config.animal-island.yml`
- English README / 英文 README：`README.md`
- Chinese README / 中文 README：`README.zh-CN.md`

## 🌗 Theme switching conventions / 主题切换实现约定

Keep these conventions to avoid breaking day/night mode.

请保留以下约定，避免破坏昼夜切换：

- Theme values are only `day` and `night`. / 主题值只使用 `day` 和 `night`。
- Buttons use `data-theme-choice="day|night"`. / 按钮使用 `data-theme-choice="day|night"`。
- State is written to `html[data-theme]`. / 状态写入 `html[data-theme]`。
- The localStorage key is `animal-island-theme`. / localStorage key 固定为 `animal-island-theme`。
- Keep the early initialization script in `<head>` before CSS loads. / `<head>` 中保留提前初始化脚本，减少刷新闪烁。

## 🖱️ Cursor conventions / 光标实现约定

The theme intentionally keeps the same custom cursor over links and buttons, so do not add:

本主题要求按钮/链接 hover 时光标不变，所以不要添加：

```css
cursor: pointer;
```

To change the cursor image, replace `source/images/animal-ui/cursor-icon.png` or update the corresponding CSS URL.

如需更换光标图片，请替换 `source/images/animal-ui/cursor-icon.png` 或修改 CSS 中对应路径。

## 🚢 Release checklist / 发版检查清单

Before publishing or copying the theme to others:

发版或复制给别人前建议检查：

1. `npm run validate` passes. / `npm run validate` 通过。
2. `hexo clean && hexo generate` passes in at least one Hexo site. / 在至少一个 Hexo 项目中 `hexo clean && hexo generate` 通过。
3. `README.md`, `README.zh-CN.md`, `docs/`, `examples/`, and `_config.yml` are in sync. / `README.md`、`README.zh-CN.md`、`docs/`、`examples/` 与 `_config.yml` 同步。
4. `LICENSE`, `LEGAL_NOTICE.md`, `CREDITS.txt`, and `docs/ASSETS_AND_CREDITS.md` are kept. / `LICENSE`、`LEGAL_NOTICE.md`、`CREDITS.txt` 和 `docs/ASSETS_AND_CREDITS.md` 保留。
5. Personal-learning-only and non-commercial restrictions are not removed or weakened. / “仅限个人学习、严禁商业使用”的限制未被删除或弱化。
6. `package.json` `files` includes required docs, examples, license, and legal notice files. / `package.json` 的 `files` 字段包含需要发布的文档、示例、许可证和法律声明文件。
7. New images live under `source/images/` and can be copied by Hexo. / 新增图片已放在 `source/images/` 并能被 Hexo 复制。
