#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const errors = [];

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
}

const requiredFiles = [
  "_config.yml",
  "README.md",
  "README.zh-CN.md",
  "LEGAL_NOTICE.md",
  "CREDITS.txt",
  "LICENSE",
  "layout/layout.ejs",
  "layout/index.ejs",
  "layout/post.ejs",
  "layout/page.ejs",
  "layout/archive.ejs",
  "layout/category.ejs",
  "layout/tag.ejs",
  "layout/404.ejs",
  "layout/_partial/head.ejs",
  "layout/_partial/header.ejs",
  "layout/_partial/footer.ejs",
  "layout/_partial/post-card.ejs",
  "layout/_partial/pagination.ejs",
  "layout/_partial/toc.ejs",
  "source/css/animal-island.css",
  "source/js/animal-island.js",
  "examples/_config.animal-island.yml",
  "docs/INSTALLATION.md",
  "docs/INSTALLATION.zh-CN.md",
  "docs/CONFIGURATION.md",
  "docs/CONFIGURATION.zh-CN.md",
  "docs/CUSTOMIZATION.md",
  "docs/CUSTOMIZATION.zh-CN.md",
  "docs/DEVELOPMENT.md",
  "docs/DEVELOPMENT.zh-CN.md",
  "docs/STRUCTURE.md",
  "docs/STRUCTURE.zh-CN.md",
  "docs/PROJECT_MANUAL.md",
  "docs/PROJECT_MANUAL.zh-CN.md",
  "docs/TROUBLESHOOTING.md",
  "docs/TROUBLESHOOTING.zh-CN.md",
  "docs/ASSETS_AND_CREDITS.md",
  "docs/ASSETS_AND_CREDITS.zh-CN.md",
];

for (const file of requiredFiles) {
  if (!exists(file)) errors.push(`Missing required file: ${file}`);
}

const cssPath = "source/css/animal-island.css";
if (exists(cssPath)) {
  const css = read(cssPath);
  let balance = 0;
  let minBalance = 0;
  let line = 1;
  let minLine = 1;
  for (const ch of css) {
    if (ch === "\n") line += 1;
    if (ch === "{") balance += 1;
    if (ch === "}") balance -= 1;
    if (balance < minBalance) {
      minBalance = balance;
      minLine = line;
    }
  }
  if (balance !== 0 || minBalance < 0) {
    errors.push(
      `CSS brace balance failed: balance=${balance}, min=${minBalance}, line=${minLine}`
    );
  }

  for (const match of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
    const url = match[1];
    if (/^(data:|https?:|#)/.test(url)) continue;
    const assetPath = path.resolve(root, "source/css", url);
    if (!fs.existsSync(assetPath)) errors.push(`CSS asset not found: ${url}`);
  }
}

const jsPath = "source/js/animal-island.js";
if (exists(jsPath)) {
  const js = read(jsPath);
  try {
    new Function(js);
  } catch (error) {
    errors.push(`JavaScript syntax error: ${error.message}`);
  }
}

const layoutFiles = walk(path.join(root, "layout")).filter((file) =>
  file.endsWith(".ejs")
);
for (const file of layoutFiles) {
  const content = fs.readFileSync(file, "utf8");
  const openCount = (content.match(/<%/g) || []).length;
  const closeCount = (content.match(/%>/g) || []).length;
  if (openCount !== closeCount) {
    errors.push(
      `EJS tag mismatch: ${path.relative(
        root,
        file
      )} open=${openCount} close=${closeCount}`
    );
  }
}

const codeFiles = [
  ...layoutFiles,
  path.join(root, "source/css/animal-island.css"),
  path.join(root, "source/js/animal-island.js"),
].filter(fs.existsSync);
const codeText = codeFiles
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

const forbiddenPatterns = [
  /cursor\s*:\s*pointer/i,
  /data-theme-toggle/,
  /data-theme-icon/,
  /data-theme-label/,
  /ai-theme-toggle/,
  /select-cursor/,
];
for (const pattern of forbiddenPatterns) {
  if (pattern.test(codeText))
    errors.push(`Forbidden legacy cursor/theme pattern found: ${pattern}`);
}

const configAndLayouts = [
  path.join(root, "_config.yml"),
  ...layoutFiles,
].filter(fs.existsSync);
for (const file of configAndLayouts) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(/\/images\/[A-Za-z0-9_./-]+/g)) {
    const sourcePath = path.join(root, "source", match[0].replace(/^\//, ""));
    if (!fs.existsSync(sourcePath)) {
      errors.push(
        `Referenced public image missing: ${match[0]} in ${path.relative(
          root,
          file
        )}`
      );
    }
  }
}

const textFilesForLegalSafety = [
  "_config.yml",
  "examples/_config.animal-island.yml",
  "README.md",
  "README.zh-CN.md",
  "CREDITS.txt",
  "LEGAL_NOTICE.md",
  "LICENSE",
  "package.json",
  ...walk(path.join(root, "docs")).filter((file) => file.endsWith(".md")),
  ...layoutFiles,
  path.join(root, "source/css/animal-island.css"),
  path.join(root, "source/js/animal-island.js"),
]
  .map((file) => (path.isAbsolute(file) ? file : path.join(root, file)))
  .filter(fs.existsSync);
const legacyLegalRiskPatterns = [
  /\/images\/ac\b/i,
  /source\/images\/ac\b/i,
  /nook/i,
  /brewster/i,
  /critterpedia/i,
  /Animal Crossing/i,
  /动物森友会|动森/,
];
for (const file of textFilesForLegalSafety) {
  const content = fs.readFileSync(file, "utf8");
  for (const pattern of legacyLegalRiskPatterns) {
    if (pattern.test(content)) {
      errors.push(
        `Legacy Nintendo-adjacent wording or asset path found: ${pattern} in ${path.relative(
          root,
          file
        )}`
      );
    }
  }
}

if (errors.length) {
  console.error("Animal Island theme validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Animal Island theme validation passed.");
