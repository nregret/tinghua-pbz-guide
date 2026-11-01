# 素材

dist/assets/game-art.webp：1920×1080 游戏场景图，来自 https://static0.fextralifeimages.com/file/phantomblade0/background.jpg?v=1790605456 ，浏览器所见原页背景素材。2026-11-01 下载，仅转换 AVIF 为 WebP，未创作或改写画面。游戏内容版权归 S-GAME 及相关权利方。原页：https://phantombladezero.wiki.fextralife.com/All_Memory_Flowers 。页内显示版权署名。

dist/assets/icon.svg：本项目原创几何图标，作为听花玩家攻略站图标，不使用游戏官方标识。

## 点位地图与实机图

dist/assets/flowers/*.webp：226张图片，来自用户指定Fextralife记忆之花页面对应条目的地图/实机图。每条记录都按区域、英文记忆系列和章节与原表匹配，117条记录有图、11条原页无图。原始文件页与静态图地址保留在dist/images.js的source/original字段。

下载于2026-11-01。只进行格式转换与WebP质量86压缩；超过1920像素的图等比例缩小至1920以内，未补造或修改图中位置标注。共5,153,364字节。图示及标注来源Fextralife；游戏画面与内容版权归S-GAME及相关权利方。路线旁及放大窗口显示署名。

## GPT娘立绘（v3）

dist/assets/gpt-guide.webp：内置ImageGen于2026-11-01生成的本站原创非官方GPT拟人插画。1254×1254，RGBA透明；WebP质量91，保留alpha，426,760字节。原始PNG交付于outputs/GPT娘-听花原创立绘.png。完整生成提示词、工具与来源说明在同目录gpt-guide.webp.json及outputs/GPT娘-生成说明.json。

方向研究参考 https://genderswapai.com/zh-CN/ai-gijinka 和 https://wulusai.net/AI/AI%E5%A8%98%E6%A1%A3%E6%A1%88 中的GPT白龙娘社区识别元素（白发、青绿、白龙）。未将参考原画作为图像输入，未复制特定原作服装或构图；没有可信统一热度排名，不宣称最火第一或官方角色。

## 字体（v3）

dist/assets/fonts/ZCOOLKuaiLe-Regular.ttf：站酷快乐体，来自Google Fonts官方开源仓库 https://github.com/google/fonts/tree/main/ofl/zcoolkuaile 。随附OFL.txt，遵循SIL Open Font License。只用于标题和站名，正文使用设备中文无衬线字体。
