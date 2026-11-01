export const regions=[
['valley','悲泣溪谷','红房子，后期回访','Weeping_Creek_Valley',''],
['forest','血色森林','从第一朵花开始','Crimson_Forest','crimson-forest'],
['village','陆家村','萤火与井底的秘密','Village_of_Lu','village-of-lu'],
['town','庞镇与戏梦山庄','街巷、宅邸与山庄','Pangzhen','pangzhen-mirage-estate'],
['lake','梅谷湖','乘舟寻花，雪中拾忆','Meigu_Lake','meigu-lake'],
['camp','正道大营','栈道、鸽舍与三高塔','Mandate_Encampment','mandate-encampment'],
['prison','枷笼山','宗祠与荒行子的往事','Mountain_of_Imprisonment','mountain-of-imprisonment'],
['mountain','断魂山','雪山之上的最后记忆','Mount_Soulrend','mount-soulrend']
].map(([id,name,description,anchor,map])=>({id,name,description,anchor,map}));
export const sourceUrl='https://phantombladezero.wiki.fextralife.com/All_Memory_Flowers';
export const mapRoot='https://wikily.gg/zh-cn/phantom-blade-zero/interactive-map';
export const groups=[
['cold','冷荼',6,10,"Leng Tu's Memory Flower"],
['gift','虚空留下的记忆之花',1,5,'Memory Flower Left by Inanis'],
['fellow','同门',3,7,'Fellow Disciples'],
['trans','龙体之术',4,7,'On Perfect Transcension'],
['iron','拳痴铁狂',2,5,'Stone Hand Iron Fever'],
['inanis','虚空',6,10,'Inanis'],
['bai','白赤练',2,5,'Bai Chilian'],
['defy','龙体反抗者',2,5,'Transcension Defyers'],
['firefly','萤火',6,10,'Firefly'],
['villagers','陆家村村民',4,7,'Villagers of Lu'],
['masters','正道大师们',3,7,'Mandate Masters'],
['fighters','江湖人士',2,5,'Wulin Fighters'],
['lion','舞狮尊主',6,10,'Lion Dance Grandmaster'],
['search','寻觅',2,5,'The Search'],
['estate','山庄实验',3,7,'Estate Experiments'],
['kin','相煎何急',2,5,'Bitter Kin'],
['brother','再会兄长',2,5,'Reunion with Brother'],
['mother','慈母心',2,5,"A Mother's Heart"],
['leaders','众正道头领',6,10,'Mandate Leaders'],
['snow','白雪儿',2,5,"Bai Xue'er"],
['yuer','玉儿',3,7,"Yu'er"],
['gao','高员外',3,7,'Patron Gao'],
['thread','囚命弟子',4,7,'Thread-Binding Disciple'],
['puppet','三面魔偶',3,7,'Aberrant Three-Faced Puppet'],
['yan','烟儿',6,10,"Yan'er"],
['crew','水行帮众',4,7,'Blackwater Crew'],
['gen','老根头',1,5,'Old Man Gen'],
['intruder','闯入者',2,5,'Intruder'],
['xuan','玄礼',6,10,'Xuan Li'],
['blizzard','风雪刀客',6,10,'Blizzard Blademaster'],
['scripture','禁忌浊经',3,7,'Forbidden Blight Scripture'],
['qian','倩倩',3,7,'Qianqian'],
['stars','七星弟子',6,10,'Seven Stars'],
['twins','双侠',2,5,'Twin Heroes'],
['victim','实验受害者',3,7,'Experiment Victim'],
['huang','关于荒行子的记忆之花',6,10,'Memory Flower on Huangxing'],
['monster','怪物',3,7,'Monster']
].map(([id,name,total,hp,en])=>({id,name,total,hp,en}));
// 独立编写的位置速查；不收录原页的叙事对白。编号是记忆章节，并非拾取顺序。
const rows=`
valley|cold|5|红房子·上层阳台|取得哑巴人偶的舌头后开启红房子，检查楼上阳台的栏杆旁。|回访
forest|gift|1|血色森林·入口|与虚空相遇后，先看入口鹤形铃铛一旁的路面。|
forest|fellow|1|挂笼小道·桥边洞穴|花千笑战后沿断桥后的路线前进，在桥旁洞穴、狼群附近拾取。|
forest|fellow|2|挂笼小道·洞内低处|营救妙手小张时探索洞窟，过洞内桥后检查较低的平台。|
forest|fellow|3|亡命徒陷阱·骑兵旁|从铃铛附近的支路进入骑兵所在空地，清理敌人后检查地面。|战斗
forest|trans|1|飞贼营地·桥下空地|到营地另一端的桥边，沿侧面下到桥下的开阔地。|
forest|trans|2|飞贼营地·下层洞窟|在营地左下方找有两名敌人守着的洞窟，进入后拾取。|战斗
forest|trans|4|悬崖山舍·地下|进入山舍地窖，沿木架下到堆有尸体的底部。|
forest|trans|3|飞贼营地·东侧机关洞|拿到守门人的盾后返回，用盾抵挡弩箭穿过洞道；出口骑兵旁有花。|回访,机关
forest|iron|1|镜林入口·铃铛旁|躲过大铁球追逐、抵达镜林入口后，先检查铃铛附近地面。|
forest|iron|2|镜林入口·铁狂战场后方|击败铁狂后，检查他原先站立位置后方的地面。|战斗
forest|inanis|1|镜林入口·铁狂后方洞道|铁狂战后走进背后的洞窟，在岔路附近寻找。|战斗
forest|inanis|2|遗冢地·墓旁|从遗冢地铃铛观察对面的墓地，检查近旁地面。|
forest|inanis|3|遗冢地至迷雾消散处|深入遗冢地下方的迷雾树林，在到达下一个铃铛前检查林间亮光。|
forest|inanis|4|镜林深处前·洞口外|由迷雾消散处向北穿洞，出来后检查临崖的开阔地。|
forest|inanis|5|镜林深处·铃铛旁|过河抵达镜林深处，先收取铃铛一旁的蓝色花。|
forest|inanis|6|丝线缠绕的巨树·镜林路中|进入镜子机关所在树林，在三面镜子之间的道路上寻找。|
forest|bai|1|丝线缠绕的巨树·林间道路|继续推进镜林机关路线，检查通路中央的地面。|
forest|bai|2|丝线缠绕的巨树·雾门前|在同一片树林继续向雾门方向探索，留意路上的另一朵花。|
village|defy|2|正道大营外门·铃铛旁|从陆家村岔路口往北到外门，拾取铃铛一旁的花；另一片在正道大营。|
village|firefly|1|老根头藏身处·守门人后|击败守门人后从战场左侧小门继续，检查两个唱歌小人偶附近。|战斗
village|firefly|6|幽蓝萤火之庙·神坛|到达庙内后检查烛光环绕的供坛。集齐本系列可继续湖心秘密。|
village|firefly|2|三人偶水井附近·石桥下|下到村中溪流，检查小石桥附近的河道。|
village|firefly|3|大廊桥下方·祭拜屋|由廊桥旁的下行路线进入有多人偶祭拜的建筑，检查屋内。|
village|firefly|5|大廊桥另一侧·崖边|过桥后从右侧房屋下梯子走出，检查树旁崖边、杀气琥珀宝箱附近。|
village|firefly|4|机关巨怪残骸·楼板下|进入挂红带的屋子，下到地板洞口后的低处，沿通道走到空地。|
village|villagers|1|村中溪流·女人偶旁|击败浅水中的女人偶，检查战后出现的记忆之花。|战斗
village|villagers|2|飞贼密道入口外·河流尽头|碧海大师战后沿河向上游搜查，经过黑石宝箱后继续到水中干地。|战斗
village|villagers|4|梯田·屋内桌上|从梯田铃铛进入近旁房屋，查看室内的桌子。|
village|villagers|3|幸存者小院·大坑边|下到院子的低处，检查露天大坑入口附近。|
village|masters|1|圣母雕像场·战场|击败天玄派大师的残躯后，在场内收取出现的花。|战斗
village|masters|2|飞贼密道入口外·战场|击败碧海大师残躯后，检查交战区域的地面。|战斗
village|masters|3|机关巨怪残骸·红带屋|进入铃铛附近挂满红带的屋子，摧毁大师残躯后收取。|战斗
village|fighters|1|圣母雕像场·附近屋内|离开战场前搜查对面的房子，沿短阶进入，在靠木墙的地面寻找。|
village|fighters|2|水井之下·落脚处|解除三人偶水井的封锁后下到井底，检查刚落地的位置。|机关
town|lion|1|市集·酒馆内|进入市集铃铛旁的酒馆，查看座椅附近；楼上的黑石是另一种收集品。|
town|lion|2|黄家宅邸前路口·灯笼街|向挂满红布与灯笼的街道探索，检查露天桌椅。|
town|lion|3|斩骑战场上方·阶梯尽头|斩骑战后沿阶梯往高处走，检查荆棘挡路的位置前方。|战斗
town|lion|4|戏声缥缈的水塘·路旁院屋|进入水塘旁带院子的建筑，检查屋内地面。|
town|lion|5|青蛇屋·上坡路|沿青蛇屋区域向上爬坡，留意路边地面。|
town|lion|6|舞狮馆·第二进院落|打开锁门、清理首个院子后继续向里，花在第二个院子。|机关,战斗
town|search|1|戏声缥缈的水塘·井底|击败骨婉约后，沿井壁下到三船殉难井底，避免直接高处跳落。|战斗
town|search|2|三船殉难井底·上层房间|从井底爬梯上到放有酒坛的房间，检查棺材附近地面。|
town|estate|3|青蛇屋·右上方屋门外|从青蛇屋铃铛寻找右上方建筑，检查正门外。|
town|estate|1|戏梦山庄·室外石阶|取得能喷火的舞狮头后返回，烧开荆棘，沿山庄室外阶梯查找。|回访,机关
town|estate|2|青蛇屋·高层尸体旁|使用铃铛附近的抓钩点上屋，再爬梯子到更高处，检查尸体。|机关
town|kin|1|祠堂广场·舞狮馆附近|在舞狮馆铃铛右上方向找建筑，检查入口外地面；另一片在湖区。|
town|brother|1|黄家大宅·二楼卧室|进入黄家大宅，上楼找到卧室，检查床铺附近。|机关
town|mother|1|后山凉亭至贫民窟·木道|沿连接凉亭与贫民窟的路行走，检查木板栈道。|
town|mother|2|贫民窟·铃铛东面空地|到贫民窟东侧的开阔处，检查慈母心任务关联位置。|
town|leaders|2|贫民窟·道路|后期带上不灭侠胆支线相关物品，再回来检查路边的记忆。|回访,条件待核
town|snow|1|青蛇屋·锁院内卧室|用后街院落钥匙进入老根头家附近的院子，经屋顶到卧室，检查床旁。|机关
town|snow|2|青蛇屋·锁院内屋外|进入同一院落，检查白雪儿另一片所在房子的外侧地面。|机关
town|yuer|1|山庄后门至傩面祭台·首栋房屋|进入后门院落，搜索前往傩面祭台途中第一栋建筑。|
town|yuer|2|戏梦山庄·校场楼上阳台|到使者曾出现的楼上，查看面向校场的阳台。|
town|yuer|3|冷荼书房附近·院内石柱|在坐满人偶、摆有红烛的大院内，检查中央石柱底部。|
town|gao|1|山庄后门至傩面祭台·第二栋房屋|沿后门院落继续往前，进入下一栋建筑搜查。|
town|gao|2|戏梦山庄·校场上层连屋|穿过挂有戏服的房屋二楼，经高处走道到相邻房间，检查画下书桌。|
town|gao|3|冷荼书房·楼上小祠堂|上到书房高层，进入小供奉室，检查供坛正前方。|
town|thread|1|傩面祭台·阶梯下屋门口|从后门院落穿过竹林，在通往祭台的阶梯下检查建筑门前。|
town|thread|2|竹影道·东南低处|从铃铛向东南下行，再上短石阶，检查关闭的建筑门前。|
town|thread|3|连廊·人头陈列室|搜查连廊相接房间，找到成排人头雕塑的架子，检查旁边地面。|
town|thread|4|冷荼书房附近·浮雕墙|在放有傩面碎片的建筑附近寻找浮雕墙，检查石花盆旁；会有敌人伏击。|战斗
town|puppet|1|戏梦山庄·校场战场旁二楼|击败校场的十二号人偶后，进入旁边建筑，在二楼临院阳台寻找。|战斗
town|puppet|2|灵堂·供坛|击败秋枫后，搜索同室供坛的烛台与祭品之间。|战斗
town|puppet|3|圣躯府邸·上层走廊尽头|从铃铛所在房间设法上楼，沿长廊走到底，在供坛前拾取。|
town|cold|6|圣躯心池·剧情后道路|与玉儿相关的场景结束后，检查正前方道路地面。|
lake|yan|1|梅谷湖·离港后的湖面|从庞镇船坞乘舟出发，搜查湖面漂浮的蓝色花丛。|
lake|yan|4|梅谷湖·低矮石岸旁|乘船贴着较低的岩岸搜寻，查看水中的蓝花群。|
lake|yan|6|梅谷湖·大型沉船旁|绕到大型木制沉船的船身旁，检查紧贴船体的蓝花。|
lake|yan|3|梅谷乐坊船坞附近·石岸水域|从乐坊船坞向邻近石岸的浅水处搜查，寻找漂浮蓝花。|
lake|yan|2|梅谷湖·岩岸与残破木船间|在靠岸浅水、破船与岩石之间搜查蓝花群。|
lake|yan|5|梅谷乐坊船坞·东北水域|乘舟到船坞东北面的矮石边，寻找水中的另一片蓝花。|
lake|crew|2|水行帮船坞·屋内墙边|登岸进入船坞房屋，检查靠墙的地板。|
lake|crew|3|水行帮船坞·铃铛旁屋内|进入紧邻铃铛的另一栋房子，搜查室内地面。|
lake|crew|4|梅谷村东岛船坞·临水平台|沿木质水边平台走，检查栏杆旁的外缘。|
lake|crew|1|梅谷村西岛船坞·东侧第二栋屋|由铃铛向东搜索第二栋建筑，查看屋外的木质露台。|
lake|kin|2|梅谷村东岛船坞·屋内桌凳旁|进入岛上建筑，检查桌凳附近地面；与庞镇的其一配成一组。|
lake|cold|1|白蛇屋·铃铛所在房间|进入白蛇屋铃铛所在的屋内，检查房间地面。|
lake|cold|3|白蛇屋·高手战后屋内|击败白蛇屋的鬼差高手后进入前方建筑，在内室地面寻找。|战斗
lake|cold|2|白蛇屋·东侧凉亭|跨桥去岛的东侧，查看凉亭内的石桌。|
lake|brother|2|陆家村浅滩船坞·木栈道|击败阿瑾后，返回战场附近木制步道，收取出现的花。|战斗
lake|gen|1|冰湖船坞·老根头面前|在铃铛附近找到老根头，查看他身前的完整记忆之花。|
lake|intruder|2|冰湖船坞·大斜树下|在木栈道旁找倾斜的大树，检查树下雪地。|
lake|intruder|1|冰湖船坞·木屋附近树下|继续搜查船坞其他树木，检查近木屋一棵树的根部。|
lake|xuan|1|雪原遗迹·入口铃铛旁|进入冰湖后方的遗迹区域，检查入口铃铛旁雪地。|地标待核
lake|xuan|2|雪原遗迹·望湖木平台|深入遗迹的木质平台，到能望见绿色极光与湖水的边缘寻找。|地标待核
lake|xuan|3|雪原遗迹·琵琶屏障后码头|用幻术琵琶穿过屏障，查看绿色灯笼一旁的木码头。|机关,地标待核
lake|blizzard|1|雪原遗迹·沉船甲板|登上遗迹中的破船，检查甲板栏杆附近的雪地。|地标待核
lake|blizzard|2|雪原遗迹·接屋顶的木道|沿与屋顶相连的木栈道前行，检查积雪屋面一旁。|地标待核
lake|blizzard|3|雪原遗迹·山壁前空地|在山壁附近搜索断裂木道旁的雪地空地。|地标待核
lake|blizzard|4|雪原遗迹·地下木构旁|从重伤幻术师所在帐篷下到地下，在有自爆敌人的房间查看木构旁地面。|地标待核
lake|blizzard|5|雪原遗迹·漂浮建筑间铃铛|进入满是漂浮建筑碎块的空间，检查其中铃铛近旁。|地标待核
lake|scripture|1|雪原遗迹·漂浮遗迹入口|穿过地下区域抵达漂浮建筑空间，在入口斜木平台上寻找。|地标待核
lake|scripture|2|雪原遗迹·漂浮船体甲板|前进到漂浮的沉船，检查甲板上桶与木箱旁。|地标待核
lake|scripture|3|雪原遗迹·出口前破船楼梯|接近漂浮遗迹出口时搜查破船，花在楼梯旁。|地标待核
lake|blizzard|6|禁忌之径·低矮洞道|沿洞内木板路前进，在通往白影陨落之处的道路上寻找。|
camp|qian|1|夕阳小径·木屋桌上|进入附近小木屋，检查敞开窗户下方的桌子。|
camp|qian|2|乱葬岗·铃铛旁空地|在铃铛近旁的空地搜查地面。|
camp|qian|3|乱葬岗战场后·左侧崖边平台|离开战场继续前进，检查左手边临崖木平台外缘。|
camp|stars|1|栈道入口·铃铛上方平台|爬梯到铃铛正上方的木平台，在边缘寻找。|
camp|stars|5|栈道眺望台·红门平台|取得营前山谷大门钥匙后，进入红门所在木平台搜查。|机关
camp|stars|2|箭塔之下·栏杆旁|搜查铃铛附近木质平台，查看靠栏杆的位置。|
camp|stars|4|栈道入口·谷底|下到山谷底部，检查木制路障旁的地面。|
camp|stars|3|鸽舍·塔后木构旁|绕到鸽舍背后，检查木结构一旁。|
camp|stars|6|鸽舍外·山体内部|从塔顶跨铁链到山坡，击破地面木板后进山体，在内部楼层寻找。|机关,武装名待核
camp|defy|1|乱葬岗·战场旁上坡|击败乱葬岗首领后走侧路上坡，检查石像附近；另一片在陆家村。|战斗
camp|twins|2|三高塔·大师兄战场|击败大师兄后，检查首领战场的地面。|战斗
camp|twins|1|三高塔·红衣女剑客参战路线|鸽舍塔顶不击败红衣女剑客，跨铁链离开；她在三高塔加入战斗后取胜，检查场内追加的花。|分支,战斗
camp|victim|1|校场·上行木阶旁|沿木阶向上，在台阶近旁地面搜查。|
camp|victim|3|校场·屋内二楼|上到建筑二楼，在放有药品的宝箱旁检查地面。|
camp|victim|2|校场·高层木平台|探索高处木质平台，检查平台外缘。|
camp|leaders|5|幽禁之地·道路|后期取得能收取此类记忆的支线物品后，回来检查沿路地面。|回访,条件待核
camp|leaders|3|三高塔·营火与箭靶旁|搜索塔区营地，查看营火和练习靶附近地面。|
camp|leaders|1|乱葬岗·首领战场旁浅水|后期带上相关支线物品，再回来检查战场一旁河流的浅水处。|回访,条件待核
camp|leaders|4|大营瀑布后方·东南民居后|推进不灭侠胆支线取得对应破碎物品后，回到民居后收取敌对正道弟子留下的记忆。|回访,条件待核
prison|huang|1|祭拜圣母之路·临崖屋二楼|进入贴着悬崖的建筑，上二楼检查地面。|
prison|huang|2|铁杀营地·战场旁木平台|利用崖壁到达战场边缘的木质平台，在平台上寻找。|机关
prison|huang|3|横刀平台·临崖木台|查看首领战场边缘贴着山壁的木平台，检查外沿。|
prison|huang|4|宗祠外山门·旁侧山洞|进入铃铛一旁的山洞，检查洞内尸体附近。|
prison|huang|5|宗祠外山门·下方红烛空地|沿崖壁滑到下层摆满红烛的小空地，检查尸体旁。|机关
prison|huang|6|圣母娘娘宗祠·玉面战场旁屋|进入玉面郎君战场附近的建筑，检查室内地面。|
mountain|monster|1|山神庙·上坡小神龛旁|沿通往山神庙铃铛的坡路走，检查路边小神龛。|
mountain|monster|2|最后的正道营地·前方主路|向下一个铃铛前进，在到达前检查主路左侧。|
mountain|monster|3|巨物盘踞处·西北冰洞|从铃铛向西北进入冰洞，在洞内搜索。|
mountain|xuan|4|山神庙·沿途木平台|沿山神庙主线道路前进，检查经过的木质平台。|
mountain|xuan|5|最后的正道营地·西侧冰道|沿西侧主路进入结冰路段，检查木结构下方。|
mountain|xuan|6|首领战后·出洞上行路|击败该段双首领后沿主路向洞外爬升，在上行途中搜查。|战斗,首领名待核
`;
export const flowers=rows.trim().split('\n').map((line,index)=>{const [region,group,part,place,route,tags]=line.split('|');return {id:`${group}-${part}`,index:index+1,region,group,part:Number(part),place,route,tags:tags?tags.split(','):[]};});
