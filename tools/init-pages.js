#!/usr/bin/env node
/**
 * Animal Island Theme — Default Pages Initializer
 *
 * Usage (from your Hexo blog root):
 *   node node_modules/hexo-theme-animal-island/tools/init-pages.js
 *
 * Or via the theme directory directly:
 *   node themes/animal-island/tools/init-pages.js
 *
 * This script creates the default pages (search, categories, tags, about)
 * in your blog's source/ directory, so the theme's menu links work out of the box.
 */

const fs = require("fs");
const path = require("path");

// Determine the blog root (where source/ should be)
const cwd = process.cwd();
const possibleRoots = [
  cwd,
  path.resolve(cwd, ".."),
  path.resolve(cwd, "../.."),
];

let blogRoot = null;
for (const dir of possibleRoots) {
  const sourceDir = path.join(dir, "source");
  if (fs.existsSync(sourceDir) && fs.statSync(sourceDir).isDirectory()) {
    blogRoot = dir;
    break;
  }
}

if (!blogRoot) {
  console.error(
    "❌ Cannot find Hexo blog root (no source/ directory found)."
  );
  console.error("   Please run this script from your Hexo blog root.");
  process.exit(1);
}

console.log(`📍 Hexo blog root: ${blogRoot}`);

const pages = [
  {
    dir: "search",
    file: "search/index.md",
    frontMatter: { title: "搜索", type: "search" },
    body: "",
  },
  {
    dir: "categories",
    file: "categories/index.md",
    frontMatter: { title: "分类", type: "categories" },
    body: "",
  },
  {
    dir: "tags",
    file: "tags/index.md",
    frontMatter: { title: "标签", type: "tags" },
    body: "",
  },
  {
    dir: "about",
    file: "about/index.md",
    frontMatter: { title: "关于" },
    body: "\n欢迎来到我的小岛博客。\n\n你可以在这里介绍自己的信息。\n",
  },
];

const sourceDir = path.join(blogRoot, "source");
let created = 0;
let skipped = 0;

for (const page of pages) {
  const targetPath = path.join(sourceDir, page.file);

  if (fs.existsSync(targetPath)) {
    console.log(`⏭️  Skipped (already exists): ${page.file}`);
    skipped++;
    continue;
  }

  // Ensure directory exists
  const targetDir = path.dirname(targetPath);
  fs.mkdirSync(targetDir, { recursive: true });

  // Build front matter
  const fmLines = ["---"];
  for (const [key, value] of Object.entries(page.frontMatter)) {
    fmLines.push(`${key}: ${value}`);
  }
  fmLines.push("---");

  // Write file
  const content = fmLines.join("\n") + page.body;
  fs.writeFileSync(targetPath, content, "utf8");
  console.log(`✅ Created: ${page.file}`);
  created++;
}

console.log(`\n📊 Summary: ${created} created, ${skipped} skipped`);
if (created > 0) {
  console.log("\n💡 Run 'hexo generate' to see the new pages.");
}
