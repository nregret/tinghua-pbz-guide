---
name: 听花
description: 浅粉二次元风格的中文记忆之花图文查询站
colors:
  bg: '#fffafb'
  surface: '#fff'
  surface-hover: '#fff1f6'
  line: '#efdae4'
  ink: '#493442'
  muted: '#745769'
  faint: '#846478'
  accent: '#ac3464'
  accent-deep: '#fce5ee'
  gold: '#8d523e'
  primary-fill: '#b33e6e'
  primary-hover: '#9c2f5b'
  field-line: '#e2b9cd'
  sidebar: '#fff6f9'
  region-selected-bg: '#f8dfe9'
  region-selected-ink: '#96335b'
  tag-bg: '#f5e8f0'
  tag-ink: '#79536b'
  pending-bg: '#fff0df'
  pending-ink: '#8b5c3c'
typography:
  display:
    fontFamily: '''ZCOOL KuaiLe'', ''Microsoft YaHei'', sans-serif'
    fontSize: clamp(34px, 3.2vw, 48px)
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0.015em
  headline:
    fontFamily: '''ZCOOL KuaiLe'', ''Microsoft YaHei'', sans-serif'
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.015em
  title:
    fontFamily: '''ZCOOL KuaiLe'', ''Microsoft YaHei'', sans-serif'
    fontSize: 23px
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: '''Microsoft YaHei'', ''PingFang SC'', ''Noto Sans SC'', sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.85
  record:
    fontFamily: '''Microsoft YaHei'', ''PingFang SC'', ''Noto Sans SC'', sans-serif'
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.65
  label:
    fontFamily: '''Microsoft YaHei'', ''PingFang SC'', ''Noto Sans SC'', sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.85
rounded:
  tag: 4px
  chapter: 5px
  related: 7px
  button: 9px
  control: 10px
  surface: 12px
  panel: 16px
  hero: 20px
  pill: 99px
spacing:
  xs: 5px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  section: 48px
components:
  button-primary:
    backgroundColor: '{colors.primary-fill}'
    textColor: '{colors.surface}'
    rounded: '{rounded.control}'
    padding: 9px 17px
  button-primary-hover:
    backgroundColor: '{colors.primary-hover}'
  button-secondary:
    backgroundColor: '{colors.surface}'
    textColor: '#955174'
    rounded: '{rounded.button}'
    padding: 8px 15px
  button-text:
    backgroundColor: transparent
    textColor: '{colors.muted}'
    padding: 5px 0
  input-search:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.surface}'
    padding: 11px 14px
  nav-region:
    backgroundColor: transparent
    textColor: '{colors.muted}'
    rounded: '{rounded.control}'
    padding: 11px 12px
  nav-region-selected:
    backgroundColor: '{colors.region-selected-bg}'
    textColor: '{colors.region-selected-ink}'
  chip-tag:
    backgroundColor: '{colors.tag-bg}'
    textColor: '{colors.tag-ink}'
    rounded: '{rounded.tag}'
    padding: 0 6px
  chip-pending:
    backgroundColor: '{colors.pending-bg}'
    textColor: '{colors.pending-ink}'
  query-row:
    backgroundColor: transparent
    textColor: '#593c4c'
    rounded: '{rounded.control}'
    padding: 16px 13px
  image-tile:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.surface}'
    padding: '0'
  image-viewer:
    backgroundColor: '{colors.bg}'
    textColor: '{colors.ink}'
    rounded: '{rounded.panel}'
    padding: '0'
    width: min(1180px, calc(100vw - 36px))
  notice:
    backgroundColor: '#fff6f0'
    textColor: '#7e5d50'
    rounded: '{rounded.surface}'
    padding: 13px 16px
---

# Design System: 听花

## Overview

**Creative North Star: "花笺里的二次元向导"**

以“花笺里的二次元向导”为视觉主线：奶白页面、浅粉表面和深玫瑰文字形成轻盈的中文查询界面，站酷快乐体让标题带有手写般的亲切感，正文保持设备无衬线的清楚和稳定。颜色柔和，信息层级明确，查询横行与图示承担内容主体。

透明 GPT 娘立绘是首屏的向导形象：白发、青绿与白龙元素参考常见社区拟人方向，粉白服饰与持花造型是本站的 ImageGen 原创表达。她不是官方角色，也不承担聊天交互。网站随用随查，资料数量只说明已收录范围。

**Key Characteristics:**
- 默认浅色：奶白与淡粉表面，深玫瑰正文。
- 自托管站酷快乐体标题，设备无衬线正文。
- 整行展开图文，区域、系列与关键词共同查询。
- 透明原创 GPT 娘立绘与浅色站内灯箱。

## Colors

### Primary

**玫瑰动作色**（`accent`）用于链接、筛选底线、键盘焦点和查询动作；实际首屏主链接采用 `primary-fill`，悬停采用 `primary-hover`。`accent-deep` 是浅粉选中层，沿用现有变量名称而非其旧有语义。

### Secondary

**暖棕提示色**（`gold`）用于回访与资料提示，名称沿用 CSS；待核标签采用 `pending-bg` / `pending-ink` 的暖杏组合。

### Neutral

**奶白**（`bg`）、**纯白**（`surface`）、**浅樱粉**（`surface-hover`）构成页面与交互层。**深玫瑰**（`ink`）、**灰玫瑰**（`muted`）与**辅助玫瑰**（`faint`）建立正文、说明与辅文层级。`line` 保持轻柔分隔，`field-line` 保持字段边界。侧栏与区域选中底色使用已提取的专用色，普通标签采用 `tag-bg` / `tag-ink`。

**The Readable Pastel Rule.** 浅粉负责表面，深玫瑰负责文字；柔和感不能以降低文字可读性换取。

## Typography

**Display Font:** 自托管站酷快乐体（`ZCOOL KuaiLe`），文件 `dist/assets/fonts/ZCOOLKuaiLe-Regular.ttf`，OFL 许可随 `dist/assets/fonts/OFL.txt` 保存。使用 `font-display: swap`，字重 400；回退为 Microsoft YaHei 与 sans-serif。
**Body Font:** Microsoft YaHei、PingFang SC、Noto Sans SC、sans-serif，最终字形依设备。

- **Display**：首屏采用 frontmatter 的 clamp；1150px 以下和800px以下为39px，560px以下为31px，1600px起为49px。
- **Headline**：一般章节28px；阅读章节桌面27px、800px以下25px；手机清单标题26px。
- **Title**：区域23px；灯箱标题桌面23px、手机22px，字重均400。
- **Body**：基础14px / 1.85；路线桌面14px、手机13px，段落最长74ch；查询说明与来源引言13px。
- **Record**：名称15px / 500，1150px以下14px、560px以下15px；地点桌面13px，1150px以下12px。
- **Label**：按钮与筛选通常12px，手机11px；辅文与图注10–11px，手机角色署名8px。小字号只用于简短辅助信息。

## Layout

最大容器1580px，桌面采用224px区域侧栏与弹性内容列；页首78px，内容内边距30px 38px 0。1150px以下侧栏202px，内容26px 27px 0；1600px起内容两侧48px。

800px以下为单列：页首65px，区域索引在其下横向滚动，工具条距顶部115px，内容22px 23px 0。560px以下内容18px 16px 0。桌面查询行包含名称、地点、图示提示和箭头；手机改为名称、地点、图示提示三行，右侧箭头跨行，最小高度111px。

首屏浅粉容器桌面最小高318px，左侧文本、右侧透明角色，角色原图尺寸1254×1254，使用 contain；手机容器最小高285px，文本与角色局部错位保持可读。立绘是实际透明图像 `assets/gpt-guide.webp`，不是表情符号或占位插图。

图库桌面两列、间距15px，560px以下单列、间距13px。灯箱桌面宽度 `min(1180px, calc(100vw - 36px))`、最大95dvh；手机宽度 `calc(100vw - 16px)`、最大96dvh。桌面图像舞台高 `min(64vh,680px)`，手机16:10、最小150px、最大60vh。说明与来源桌面三列，手机纵排。

## Elevation & Depth

主体以白底、浅粉层和细边界呈现。查询行没有悬浮阴影。搜索聚焦使用 `0 0 0 3px #fbe9f1`，通知使用 `0 8px 30px #9d547832`，灯箱使用 `0 18px 70px #61374c40`，遮罩为 `rgba(52,32,46,.68)`；角色仅使用 `drop-shadow(0 7px 9px #c77c9b18)`。

区域与查询背景反馈150ms、展开箭头200ms，曲线 `cubic-bezier(.16,1,.3,1)`。减少动态效果偏好会禁用动画、过渡与平滑滚动。

## Shapes

大圆角保持柔和但不影响资料密度：首屏20px、手机16px；搜索与图示12px、手机搜索10px；区域与查询行10px；常规按钮9px；章节5px、标签4px、关联位置7px。灯箱桌面16px、手机13px。只有短小免费标识和角色署名使用99px胶囊形态。

## Components

### Buttons

主链接白字玫瑰底、10px圆角、12px/500；手机11px。常规按钮白底、玫瑰描边、9px圆角，至少40px高。文本按钮不加实底。键盘焦点为2px动作色外框，偏移4px。保持已有悬停色，不加入未实现的按下动画。

### Inputs / Fields

搜索与系列选择均为白底、浅玫瑰描边。搜索聚焦时容器描边变深并出现浅粉焦点层；内部输入移除单独外框，通过容器反馈。搜索正文13px，手机11px，手机隐藏快捷键提示。

### Navigation

区域按钮默认灰玫瑰、透明底；悬停浅粉底和动作色，选中浅玫瑰底与深玫瑰文字并加粗。区域数量使用“N处”，只表示资料数量。查询筛选为“全部点位 / 带图位置 / 需回访 / 待核细节”，选中态以文字和2px底线表达。

### Chips / Notices

章节徽记采用浅粉底与玫瑰字，地点标签采用灰粉组合，待核用暖杏组合。编辑提示为暖奶油底与棕色说明；缺图为暖奶油底和虚线边界。说明必须保留文字，不能只依赖颜色。

### Signature: 整行查询展开

整条记录是一个按钮，以 `aria-expanded` 和 `aria-controls` 关联图文区域；悬停浅粉，展开箭头旋转90°。名称、章节、奖励、地点、标签与有图提示保持稳定层级。展开后显示文字路线、站内图示、位置分享和同组跳转；数量始终采用资料条数或位置数，不表达个人完成状态。

### Signature: 图示与浅色灯箱

图示按钮采用白底、12px圆角、浅玫瑰边界，16:9图像以 contain 保留完整画面。图注区分“地图定位”与“实机位置”，明确“点击放大”，保留 Fextralife 与游戏画面 © S-GAME 署名。

原生 dialog 以奶白表面、浅玫瑰边框、浅灰粉图像舞台与深玫瑰文字组织内容。“上一张”“下一张”循环切图；单图时两者禁用。“放大查看”切换200%图像宽度，按钮变为“适应画面”并更新 aria-pressed，图像区可滚动。关闭按钮、Esc与背景点击关闭，关闭后返回对应图示焦点；灯箱期间锁定背景滚动。手机控制按钮等分可用宽度。所有图示操作留在本站。

### Signature: 原创 GPT 娘

首屏使用真实透明原创立绘，保留白发、青绿、白龙与粉白衣装识别点；角色说明明确“本站非官方拟人”。角色容器不接收指针事件，不构成查询、聊天或登录入口。图像与标题保持视觉平衡，不用立绘遮挡查询信息。

## Do's and Don'ts

### Do:
- **Do** 使用现有玫瑰色焦点、选中底色和清楚的文字层级。
- **Do** 让整条查询行可展开，并使用 aria-expanded 表达状态。
- **Do** 将 N处 作为资料数量，查询结果写为 找到 N 处位置。
- **Do** 保留图示类型、来源署名、缺图说明与待核文字。

### Don't:
- **Don't** 引入个人完成状态、打卡分数或完成/剩余比例。
- **Don't** 将 GPT 娘称为官方形象或无依据的热度第一。
- **Don't** 裁掉图示中的地图和游戏界面，或让看图操作跳离本站。
- **Don't** 把浅色标题字体扩展为长路线正文，或用颜色代替文字语义。

<!-- Evidence: v3 source extraction from PRODUCT.md, dist/styles.css, dist/gallery.css, dist/index.html and dist/app.js. Parent independent review: ship; 1440px and 390px without horizontal overflow; query 萤火=6, images filter=117, pending filter=17; lightbox switch/zoom/Esc passed; console empty; minimum sampled contrast 4.99:1; no personal tracking controls or visible completion fractions. This documentation task did not run a browser. Impeccable context/concept-seed/detect launchers were not successfully run and are not recorded as passing. -->
