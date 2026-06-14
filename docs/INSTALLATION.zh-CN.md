# 📦 安装手册

<p align="center">
  <a href="./INSTALLATION.md">English</a> · <strong>简体中文</strong>
</p>

Animal Island 是标准 Hexo 主题，可以通过 GitHub 克隆、源码复制或本地软链接安装到任意 Hexo 项目的 `themes/` 目录中。

> ⚠️ **使用限制：** 本项目仅限个人学习、研究与非商业演示使用，严禁商业使用。安装和使用前请阅读 [LEGAL_NOTICE.md](../LEGAL_NOTICE.md)。

## 🌿 方式一：从 GitHub 克隆

推荐大多数用户使用这种方式。

```bash
cd /path/to/your-hexo-site
mkdir -p themes
git clone https://github.com/timoforge/hexo-theme-animal-island.git themes/animal-island
```

然后修改 Hexo 站点根目录 `_config.yml`：

```yaml
theme: animal-island
```

## 🧺 方式二：复制已下载源码

适合从 Release 压缩包或本机源码目录安装：

```bash
cd /path/to/your-hexo-site
mkdir -p themes
cp -a /path/to/hexo-theme-animal-island themes/animal-island
```

## 🔗 方式三：本地开发软链接

适合在同一台机器上维护主题并同步测试多个 Hexo 项目：

```bash
cd /path/to/your-hexo-site
mkdir -p themes
ln -s /path/to/hexo-theme-animal-island themes/animal-island
```

注意：软链接方式下，修改 `/path/to/hexo-theme-animal-island` 会影响所有使用该链接的站点。

## ⚙️ 添加主题覆盖配置

推荐复制示例配置到站点根目录：

```bash
cp themes/animal-island/examples/_config.animal-island.yml _config.animal-island.yml
```

Hexo 会把主题默认 `_config.yml` 和站点根目录 `_config.animal-island.yml` 合并，后者优先级更高。升级主题时，尽量只保留站点根目录中的覆盖配置，不要直接改主题默认配置。

## 📡 RSS 订阅支持

主题在 `<head>` 中内置了 RSS autodiscovery 链接。要实际生成订阅源，需在 Hexo 站点中安装 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)：

```bash
npm install hexo-generator-feed
```

然后在站点根目录 `_config.yml` 中添加 feed 配置：

```yaml
feed:
  type: atom
  path: atom.xml
  limit: 20
```

如果未安装 `hexo-generator-feed`，autodiscovery 链接会指向不存在的 `atom.xml`。请安装插件或移除 feed 配置。

## 🗺️ 推荐创建页面

默认菜单包含搜索、分类、标签、归档和关于。归档由 Hexo 内置生成，其他页面建议手动创建：

```bash
hexo new page search
hexo new page categories
hexo new page tags
hexo new page about
```

然后给对应页面设置 `type`：

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

## 🧪 生成验证

在 Hexo 站点根目录运行：

```bash
hexo clean && hexo generate
```

如果站点 `package.json` 已经定义了构建命令，也可以使用：

```bash
npm run build
```

## 📁 目录名规则

`theme:` 的值必须等于 `themes/` 下的目录名。

推荐：

```text
themes/animal-island
```

```yaml
theme: animal-island
```

如果你保留目录名 `hexo-theme-animal-island`，则需要：

```yaml
theme: hexo-theme-animal-island
```

同时覆盖配置文件名也要改成：

```text
_config.hexo-theme-animal-island.yml
```
