# 听花 · 影之刃零记忆之花图文查询

免费、纯静态的中文攻略查询站。浅粉色界面，按需查位置，不记录个人收集进度。

- 128 条已收录位置、37 个记忆系列、8 个区域。
- 中文名称、铃铛、地点和路线关键词搜索；区域与系列组合筛选。
- 内置 226 张地图和实机图，站内放大、切换与查看相关位置。
- 桌面与手机适配，非官方原创 GPT 娘向导插画。
- 无登录、广告、追踪脚本或后端服务。

[在爱发电支持作者](https://www.ifdian.net/a/nnegret)

## 本地运行

需要 Node.js 22 或更新版本，不需要安装应用依赖。

```sh
git clone https://github.com/nregret/tinghua-pbz-guide.git
cd tinghua-pbz-guide
npm start
```

打开 `http://127.0.0.1:4318/`。请通过 HTTP 服务器访问，直接双击 HTML 可能阻止浏览器加载 ES 模块。

## 检查

```sh
npm run check
node --check dist/app.js
```

## 部署到 Cloudflare Pages

网站不需要构建，静态产物目录为 `dist`。使用已授权的 Cloudflare 账户：

```sh
npx wrangler login
npx wrangler pages project create tinghua-pbz-guide --production-branch main
npx wrangler pages deploy dist --project-name tinghua-pbz-guide --branch main
```

已创建项目后，后续更新只需提交代码并重新执行 `pages deploy`。此方案使用直接上传；本仓库不包含账户令牌，也不会自动向 Cloudflare 部署。

若另行通过 Cloudflare 的 Git 集成创建项目，框架选择 `None`，无需构建命令，输出目录设为 `dist`。

## 目录

| 路径 | 内容 |
| --- | --- |
| `dist/index.html` | 页面、说明、赞助入口 |
| `dist/app.js` | 查询、筛选、图示与灯箱 |
| `dist/data.js` | 中文点位和路线 |
| `dist/images.js` | 图示对应关系及来源 |
| `dist/styles.css` | 浅粉主题与双端布局 |
| `dist/gallery.css` | 图片与灯箱 |
| `dist/assets/` | 站内图片、角色和字体 |

## 内容与贡献

位置事实主要参考 [Fextralife 原页](https://phantombladezero.wiki.fextralife.com/All_Memory_Flowers)，中文名称对照公开中文游戏资料；路线使用独立中文表述，未搬运原页对白。

128 是当前收录记录数，不是对全游戏总量的承诺。17 条细节有待核实标记，11 个点位原页无配图；参考页尚未列出冷荼其四和众正道头领其六。欢迎通过 Issue 或 PR 提供游戏内准确名称、位置与证据。

应用代码和作者编写的文字按 [MIT License](LICENSE) 开源。第三方游戏画面、图示与字体保留其原许可和权利归属，详见 [第三方说明](THIRD_PARTY_NOTICES.md) 与 [素材记录](ASSETS.md)。
