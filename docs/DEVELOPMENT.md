# 开发手册

## 本地校验

主题包提供轻量校验脚本：

```bash
cd /path/to/hexo-theme-animal-island
npm run validate
```

校验内容包括：

- 关键文件是否存在。
- CSS 大括号是否平衡。
- CSS 内部图片路径是否存在。
- JS 基础语法是否可解析。
- EJS 标签 `<%` / `%>` 数量是否匹配。
- 代码中是否重新出现旧的单按钮主题切换或 `cursor: pointer`。
- `_config.yml` 与 EJS 中默认 `/images/...` 引用是否能在 `source/images/` 找到。

## 在 Hexo 项目中测试

推荐把主题软链接到测试 Hexo 项目：

```bash
cd /path/to/your-hexo-site
mkdir -p themes
ln -s /path/to/hexo-theme-animal-island themes/animal-island
```

配置：

```yaml
theme: animal-island
```

生成：

```bash
hexo clean && hexo generate
```

## 修改入口

- EJS 模板：`layout/`
- 公共局部模板：`layout/_partial/`
- 样式：`source/css/animal-island.css`
- 交互：`source/js/animal-island.js`
- 图片：`source/images/`
- 默认配置：`_config.yml`
- 用户配置示例：`examples/_config.animal-island.yml`
- 英文 README：`README.md`
- 中文 README：`README.zh-CN.md`

## 主题切换实现约定

请保留以下约定，避免破坏昼夜切换：

- 主题值只使用 `day` 和 `night`。
- 按钮使用 `data-theme-choice="day|night"`。
- 状态写入 `html[data-theme]`。
- localStorage key 固定为 `animal-island-theme`。
- `<head>` 中保留提前初始化脚本，减少刷新闪烁。

## 光标实现约定

本主题的交互要求是按钮/链接 hover 时光标不变，所以不要添加：

```css
cursor: pointer;
```

如需更换光标图片，请替换 `source/images/animal-ui/cursor-icon.png` 或修改 CSS 中对应路径。

## 发版检查清单

发版或复制给别人前建议检查：

1. `npm run validate` 通过。
2. 在至少一个 Hexo 项目中 `hexo clean && hexo generate` 通过。
3. `README.md`、`README.zh-CN.md`、`docs/`、`examples/` 与 `_config.yml` 同步。
4. `LICENSE`、`LEGAL_NOTICE.md`、`CREDITS.txt` 和 `docs/ASSETS_AND_CREDITS.md` 保留。
5. “仅限个人学习、严禁商业使用”的限制未被删除或弱化。
6. `package.json` 的 `files` 字段包含需要发布的文档、示例、许可证和法律声明文件。
7. 新增图片已放在 `source/images/` 并能被 Hexo 复制。
