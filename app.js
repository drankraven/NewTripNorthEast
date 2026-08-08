const routeDays = [
  {
    day: 1,
    date: "8/13 周四 · 住哈尔滨",
    title: "长春 → 哈尔滨（中央大街 · 索菲亚 · 松花江）",
    totalDrive: "266.5 km / 约 2 h 55 min / 过路费约 ¥99",
    stay: "住哈尔滨道里区中央大街一带",
    pace: "强度：轻。全程唯一一个上午就能到目的地的日子，下午和晚上全部留给老城区步行。",
    dayNote: "第一天不用早起硬赶。长春加满油再出发，京哈高速路况好、服务区密。中央大街片区停车紧张，优先选带地下车位的酒店，停好车后全程步行。",
    legs: [{ route: "长春 → 哈尔滨", time: "266.5 km · 约 2 h 55 min · ¥99" }],
    timeline: [
      { time: "07:30", what: "长春出发", where: "出城前加满油", detail: "京哈高速 G1 北上，路况好。三人轮换开车，第一天不必赶时间。", nav: [125.323643, 43.816996, "长春"] },
      { time: "10:40", what: "抵达哈尔滨 · 入住", where: "中央大街片区", detail: "先把车停进酒店地下车库。中央大街是步行街，车开不进去，接下来半天全靠走。", nav: [126.622275, 45.772875, "哈尔滨中央大街亚朵S酒店"] },
      { time: "11:30", what: "午餐 · 老派俄餐", where: "华梅西餐厅（中央大街店）", detail: "1925 年的老字号俄餐厅。红菜汤、罐虾、软煎马哈鱼是经典组合。吃个氛围，别抱米其林期待。", nav: [126.618969, 45.773091, "华梅西餐厅(中央大街店)"] },
      { time: "13:00", what: "中央大街步行", where: "面包石路 · 百年建筑群", detail: "1450 米方石路，两侧巴洛克与折衷主义老建筑。马迭尔冰棍在门口窗口买，边走边吃是标准动作。", nav: [126.618958, 45.773941, "中央大街"] },
      { time: "14:30", what: "圣·索菲亚教堂", where: "透笼街 · 拜占庭穹顶", detail: "全程评分最高的单体景点（4.9）。广场喂鸽子 + 绿顶红墙出片。内部现为建筑艺术馆，需另购票，20 分钟看完。", nav: [126.627215, 45.770125, "圣索菲亚教堂"] },
      { time: "15:40", what: "松花江畔", where: "防洪纪念塔 + 斯大林公园", detail: "中央大街北端直接连江边。纪念塔是哈尔滨地标，往东西两侧都是滨江步道，夏天很凉快。", nav: [126.617203, 45.780654, "防洪胜利纪念塔"] },
      { time: "16:30", what: "过江 · 二选一", where: "观光索道 或 太阳岛渡船", detail: "索道横跨松花江到太阳岛，往返约 40 分钟，视角好。想省钱就坐轮渡。体力不支可直接跳过，在江边坐着看船。", nav: [126.610547, 45.7779, "江上城堡观光索道"] },
      { time: "18:00", what: "老道外 · 中华巴洛克", where: "靖宇街历史街区", detail: "和中央大街完全不同的另一面哈尔滨——中式院落套西洋立面，市井气重。评分 4.8，游客明显更少。", nav: [126.640729, 45.781791, "中华巴洛克历史文化街区"] },
      { time: "19:00", what: "晚餐 · 锅包肉", where: "张包铺 或 老厨家", detail: "锅包肉发源地就是哈尔滨。老厨家是郑氏后人开的，正宗酸甜口；张包铺主打包子和家常菜，更亲民。", nav: [126.567689, 45.735866, "张包铺"] },
      { time: "20:30", what: "中央大街夜景", where: "灯光下的面包石", detail: "夜里的中央大街比白天更好看，街头乐队和啤酒摊都出来了。哈尔滨啤酒配红肠，收工。" },
    ],
    meals: "午餐华梅西餐厅俄式简餐；下午马迭尔冰棍、红肠；晚餐张包铺或老厨家锅包肉。",
    hotel: "哈尔滨中央大街亚朵S酒店（4.7，尚志大街160号，有车位）；备选全季中央大街店（4.4）。",
    fuel: "长春出城前加满。哈尔滨市区不必再加，D2 早晨出城时在迎宾加油站补满即可。",
    stops: ["中央大街", "圣·索菲亚教堂", "防洪纪念塔 / 斯大林公园", "中华巴洛克街区"],
  },
  {
    day: 2,
    date: "8/14 周五 · 住佳木斯",
    title: "哈尔滨 → 佳木斯（早市 · 松花江东行）",
    totalDrive: "373.0 km / 约 4 h / 过路费约 ¥152",
    stay: "住佳木斯前进区（火车站 / 光复路一带）",
    pace: "强度：中。上午留 1.5 小时逛早市，午后是纯赶路段，傍晚在佳木斯江边休整。",
    dayNote: "佳木斯本身不是重景点城市，它的作用是把哈尔滨到鸡西这段 650 km 拆成两天。所以今天别期待惊喜，把它当作一个吃得不错、能好好睡一觉的中转站。",
    legs: [{ route: "哈尔滨 → 佳木斯", time: "373.0 km · 约 4 h 01 min · ¥152" }],
    timeline: [
      { time: "07:00", what: "红专街早市", where: "哈尔滨市井早市", detail: "东北早市文化的浓缩版：油炸糕、豆腐脑、格瓦斯、现烤列巴。比任何景点都真实。7 点前后人最多。" },
      { time: "08:40", what: "退房出发 · 补满油", where: "机场路 中国石化迎宾加油站", detail: "评分 4.7 的大站。上哈同高速 G1011 东行。", nav: [126.555385, 45.708239, "中国石化迎宾加油站"] },
      { time: "11:00", what: "服务区休息", where: "哈同高速沿线", detail: "全程约 4 小时，中途至少停一次。这段路车少、路直，容易犯困，三人轮换。" },
      { time: "13:00", what: "抵达佳木斯 · 午餐", where: "三姐妹冷面馆（保卫路）", detail: "评分 4.7。东北冷面和延吉冷面口味不同，汤更酸甜。配辣白菜和牛肉。", nav: [130.36612, 46.810055, "三姐妹冷面馆(保卫路)"] },
      { time: "14:30", what: "入住 · 休整", where: "如家neo酒店（佳木斯火车站店）", detail: "评分 4.7，升平路 302 号。开了 4 小时车，先睡个午觉再出门。", nav: [130.384668, 46.808519, "如家neo酒店(佳木斯火车站店)"] },
      { time: "16:00", what: "沿江公园", where: "松花江南岸", detail: "佳木斯最舒服的地方。江堤很长，有沙滩段，当地人叫「东北小三亚」。傍晚风大，带件外套。", nav: [130.352084, 46.825976, "佳木斯市沿江公园"] },
      { time: "17:30", what: "知青文化广场 / 天主堂", where: "和平路 · 永安街", detail: "顺路的城市小景。知青广场是北大荒垦荒历史的纪念地，10 分钟看完；天主堂是老建筑，外观拍照。", nav: [130.374857, 46.819899, "知青文化广场"] },
      { time: "18:30", what: "晚餐 · 铁锅炖", where: "徐记铁锅炖（光复路店）", detail: "评分 4.5。铁锅炖大鹅或江鱼配贴饼子，是东北人自己吃的馆子。三人点一锅足够。", nav: [130.380188, 46.812085, "徐记铁锅炖(光复路店)"] },
      { time: "20:00", what: "早睡", where: "酒店", detail: "明天是全程节奏最紧的一天：要跑 393 km 并在傍晚赶到兴凯湖看日落。今晚务必睡够。" },
    ],
    meals: "早餐红专街早市；午餐三姐妹冷面；晚餐徐记铁锅炖。想加菜可去多喜客海鲜烤肉自助（4.6）。",
    hotel: "如家neo酒店（佳木斯火车站店，4.7，升平路302号）；佳木斯住宿整体价格低，性价比高。",
    fuel: "出哈尔滨时在迎宾加油站加满，373 km 中途无需补油。到佳木斯后不急着加，D3 早晨在市区世纪石油（4.6）补满。",
    stops: ["红专街早市", "佳木斯沿江公园", "知青文化广场", "铁锅炖晚餐"],
  },
  {
    day: 3,
    date: "8/15 周六 · 住密山",
    title: "佳木斯 → 鸡西（大冷面）→ 密山 → 兴凯湖看日落",
    totalDrive: "393.3 km / 约 5 h 35 min / 过路费约 ¥153",
    stay: "住密山市区（兴凯湖国际大酒店）",
    pace: "强度：全程最高。驾驶 5.5 小时且分四段，傍晚还要赶湖边日落，必须早出发。",
    dayNote: "今天是唯一需要卡时间的一天。兴凯湖离密山 53 km、单程约 1 小时，8 月中旬日落在 18:50 前后，所以最晚 16:30 要从密山发车。若上午延误超过 1 小时，就放弃兴凯湖直接在密山休整——它值得看，但不值得摸黑赶路。",
    legs: [
      { route: "佳木斯 → 鸡西", time: "201.0 km · 约 2 h 13 min · ¥83" },
      { route: "鸡西 → 密山", time: "84.2 km · 约 1 h 04 min · ¥32" },
      { route: "密山 → 兴凯湖", time: "53.6 km · 约 1 h 23 min · ¥19" },
      { route: "兴凯湖 → 密山", time: "54.5 km · 约 55 min · ¥19" },
    ],
    timeline: [
      { time: "07:00", what: "出发 · 市区补满油", where: "佳木斯 世纪石油加油站", detail: "浦东路与联盟路交叉口，评分 4.6。今天分四段跑，出发前一定加满。", nav: [130.314575, 46.789976, "世纪石油加油站"] },
      { time: "09:30", what: "抵达鸡西", where: "鸡冠区步行街", detail: "煤城，市容一般，但吃的是硬通货。直接奔冷面。", nav: [130.969385, 45.295087, "鸡西"] },
      { time: "10:00", what: "早午餐 · 鸡西大冷面", where: "大东江冷面（步行街店）", detail: "鸡西冷面是东北冷面里名气最大的一支，必配「辣菜」（拌菜拼盘）。评分 4.6，人均二十几块。这顿是今天的重点之一，别急着走。", nav: [130.984086, 45.304672, "大东江冷面(步行街店)"] },
      { time: "11:30", what: "鸡西 → 密山", where: "84 km · 约 1 小时", detail: "沿途是三江平原的农田和湿地，视野开阔。" },
      { time: "13:00", what: "入住密山 · 卸行李", where: "密山兴凯湖国际大酒店", detail: "评分 4.4，东安街 201 号，密山最好的选择之一。先入住，去湖边轻装出行。", nav: [131.864454, 45.541091, "密山兴凯湖国际大酒店"] },
      { time: "14:00", what: "密山 → 兴凯湖", where: "53.6 km · 约 1 h 20 min", detail: "省道为主，限速低，别按高速估时间。中途 中国石化密山东方加油站（4.5）可补油。", nav: [131.739717, 45.478194, "中国石化密山东方加油站"] },
      { time: "15:30", what: "兴凯湖 · 新开流景区", where: "中俄界湖 · 湖岗沙滩", detail: "评分 4.6。这不是第二个镜泊湖——兴凯湖是 4380 km² 的界湖，站在岸边看不到对岸，有真正的细沙滩和涌浪，体感更接近海。北面的小兴凯湖和大兴凯湖之间夹着一道 90 km 长的天然湖岗，是这里独有的地貌。", nav: [132.375752, 45.347278, "兴凯湖新开流景区"] },
      { time: "18:00", what: "湖边日落", where: "湖岗沙滩", detail: "8 月中旬这里 18:50 左右日落。湖面朝西南，是看落日的好角度。湖边风大且蚊虫多，长袖和驱蚊液备好。" },
      { time: "19:15", what: "返回密山", where: "54.5 km · 约 1 小时", detail: "夜间省道注意路面动物和农用车，控制车速。" },
      { time: "20:30", what: "晚餐 · 朝鲜族汤饭", where: "延奶奶朝鲜族汤饭", detail: "密山朝鲜族人口多，汤饭和辣白菜做得地道。评分 4.1，胜在实在。累了一天，热汤最舒服。", nav: [131.867598, 45.5429, "延奶奶朝鲜族汤饭"] },
    ],
    meals: "早午餐鸡西大东江冷面（必吃）；兴凯湖景区内餐饮有限，车上备水和干粮；晚餐密山延奶奶朝鲜族汤饭。",
    hotel: "密山兴凯湖国际大酒店（4.4，东安街201号）。密山是县级市，住宿档次有限，这家是当地最稳的。",
    fuel: "佳木斯出发前加满。密山东方加油站（4.5）在去兴凯湖路上，可按需补油。晚上回密山后不必加，D4 早晨再说。",
    stops: ["鸡西大冷面", "密山", "兴凯湖新开流景区", "湖岗沙滩日落"],
  },
  {
    day: 4,
    date: "8/16 周日 · 住镜泊湖",
    title: "密山 → 横道河子俄式小镇 → 镜泊湖",
    totalDrive: "394.4 km / 约 4 h 05 min / 过路费约 ¥166",
    stay: "住镜泊湖风景区内",
    pace: "强度：中高。上午一段近 300 km 的长途，下午在小镇轻松逛，傍晚进景区。",
    dayNote: "横道河子是这条线上最容易被低估的地方——一座 1897 年因中东铁路而生的俄式小镇，教堂、机车库、木刻楞民居都还在，游客却不多。它被安排在今天而不是从镜泊湖折返，就是为了避开 400 km 的无谓回头路。",
    legs: [
      { route: "密山 → 横道河子", time: "约 294 km · 约 3 h 05 min" },
      { route: "横道河子 → 镜泊湖", time: "约 100 km · 约 1 h" },
    ],
    timeline: [
      { time: "07:00", what: "密山出发 · 加满油", where: "密山市区", detail: "今天上午是连续 3 小时车程，出发前加满、备好水。" },
      { time: "11:00", what: "抵达横道河子", where: "海林市横道河子镇", detail: "进镇先找地方停车，小镇不大，核心区步行即可。", nav: [129.078641, 44.812391, "横道河子"] },
      { time: "11:20", what: "圣母进堂教堂", where: "镇中心 · 全木结构", detail: "1900 年建的木结构东正教堂，中国现存最完整的木制教堂之一。评分 4.4，青绿色洋葱顶非常上镜。", nav: [129.077414, 44.813056, "圣母进堂教堂"] },
      { time: "12:00", what: "午餐 · 东北筋饼", where: "老太太筋饼店", detail: "评分 4.5，小镇上的老店。筋饼卷酱肉配小菜，量大实惠。", nav: [129.104988, 44.797217, "老太太筋饼店"] },
      { time: "13:00", what: "俄罗斯风情小镇", where: "木刻楞民居 · 中东铁路遗迹", detail: "评分 4.6。成片的俄式木屋和百年铁路建筑群，加上镇北的中东铁路机车库（扇形车库，蒸汽机车时代遗物），是全国保存最好的中东铁路小镇。", nav: [129.070857, 44.819005, "俄罗斯风情小镇"] },
      { time: "14:30", what: "东北虎林园（可选）", where: "横道河子东北虎繁育基地", detail: "评分 4.7，全球最大的东北虎人工繁育基地。有投喂车项目，见仁见智。不感兴趣可跳过，省 1.5 小时。", nav: [129.115158, 44.794709, "横道河子东北虎林园"] },
      { time: "16:00", what: "前往镜泊湖", where: "约 100 km · 1 小时", detail: "进入景区前会有检票口，提前查好当天票价和车辆入园规定。" },
      { time: "17:00", what: "入住镜泊湖景区内", where: "镜泊湖瀑布山庄", detail: "坦白说景区内住宿条件一般（评分 3.6），但优势不可替代：出门就是瀑布，明早不用重新进山排队。追求住宿品质可退回牡丹江市区，代价是每天多跑 120 km。", nav: [128.957078, 44.063183, "镜泊湖瀑布山庄"] },
      { time: "18:30", what: "晚餐 · 镜泊湖鱼", where: "镜泊湖天水阁湖鱼馆", detail: "评分 4.6。镜泊湖白鱼、湖虾是这里的招牌，清蒸或炖都行。点菜前先问价，湖鱼按斤计价。", nav: [128.955856, 44.065624, "镜泊湖天水阁湖鱼馆"] },
      { time: "20:00", what: "湖边散步", where: "景区步道", detail: "夜里的镜泊湖很安静，星空条件好。带手电，山区夜路无照明。" },
    ],
    meals: "早餐密山；午餐横道河子老太太筋饼；晚餐镜泊湖天水阁湖鱼馆（尝湖鱼）。",
    hotel: "镜泊湖瀑布山庄（景区内，3.6）——选它是为了位置而非品质。备选：牡丹江市区镜泊湖国际大酒店，需每天多跑 120 km。",
    fuel: "密山出发前加满。途经牡丹江可在 中国石油江滨加油站（4.7）补油；景区内无加油站，进山前务必保证半箱以上。",
    stops: ["圣母进堂教堂", "横道河子俄罗斯风情小镇", "中东铁路机车库", "东北虎林园（可选）"],
  },
{
    day: 5,
    date: "8/17 周一 · 住镜泊湖",
    title: "镜泊湖深度 · 吊水楼瀑布 + 地下森林火山口",
    totalDrive: "219.1 km / 约 3 h 20 min / 过路费约 ¥40",
    stay: "继续住镜泊湖景区内（不换酒店）",
    pace: "强度：低。全程唯一不换住宿的一天，车程都在景区内部，可以放慢。",
    dayNote: "整趟行程的核心就在今天。镜泊湖是一万年前火山熔岩堵塞牡丹江形成的堰塞湖，狭长 45 km，两岸为火山岩峭壁。上午看吊水楼瀑布（8 月丰水期水量最好，跳水表演视天气加演），中午坐峡谷游船，下午跑地下森林火山口。全天不换酒店，节奏可以放慢。",
    legs: [
      { route: "山庄 → 吊水楼瀑布", time: "景区内 · 约 10 min" },
      { route: "镜泊湖 → 地下森林火山口", time: "约 70 km · 约 1 h 20 min" },
      { route: "火山口 → 镜泊湖", time: "约 70 km · 约 1 h 20 min" },
    ],
    timeline: [
      { time: "07:30", what: "早餐后进瀑布区", where: "吊水楼瀑布", detail: "早去人少。宽 40 米、落差 20 多米的马蹄形瀑布，8 月是丰水期，水量最好的时候。评分 4.5。", nav: [128.948883, 44.056441, "镜泊湖吊水楼瀑布"] },
      { time: "09:00", what: "跳水表演", where: "瀑布顶端", detail: "当地跳水人从 20 多米高的崖顶跃入深潭，是镜泊湖的招牌节目。场次通常在上午和下午各两场，具体时间和是否表演以当天现场公告为准，遇大水或恶劣天气会取消。" },
      { time: "10:30", what: "百里长湖游船", where: "镜泊湖码头", detail: "湖长 45 km，游船线路会经过大孤山、白石砬子、城墙砬子等湖区景观。全程约 1.5 小时，坐船是看这个湖最好的方式。", nav: [128.951244, 44.063163, "镜泊湖国家级风景名胜区"] },
      { time: "12:30", what: "午餐", where: "景区餐饮或山庄", detail: "景区内餐饮价格偏高、选择少。可提前在山庄订餐，或前一晚在牡丹江方向采买。" },
      { time: "13:30", what: "前往地下森林", where: "约 70 km · 1 h 20 min", detail: "山路弯多，限速低，别按里程估时间。这段单程 1 小时 20 分钟，是今天唯一较长的驾驶。" },
      { time: "15:00", what: "地下森林 · 火山口国家森林公园", where: "十座火山口 · 原始森林", detail: "评分 4.3。一万年前火山喷发后塌陷成的巨型火山口，森林长在坑底，站在观景台往下看是一片沉在地下的原始林海。有木栈道可以下到坑底，来回约 1.5 小时。", nav: [128.545525, 44.196051, "地下森林"] },
      { time: "17:00", what: "返回镜泊湖", where: "约 70 km", detail: "山区傍晚易起雾，开雾灯、降速。" },
      { time: "18:30", what: "晚餐 · 换一家", where: "景区内餐馆", detail: "今天不赶路，可以慢慢吃。明天是全程最长的驾驶日（473 km），吃完早点休息。" },
      { time: "20:00", what: "打包行李 · 早睡", where: "山庄", detail: "明早 06:30 就要出发去珲春，今晚把行李收好、车加满。" },
    ],
    meals: "三餐基本都在景区内解决，选择有限、价格偏高。建议提前备好水果和零食。",
    hotel: "继续住镜泊湖瀑布山庄，不用换酒店、不用重新进山检票。",
    fuel: "景区内没有加油站。今天出景区去火山口前应保证半箱以上，回程顺路在 宁安 中国石油向阳加油站（4.8）加满，为明天的 473 km 做准备。",
    stops: ["吊水楼瀑布", "跳水表演", "百里长湖游船", "地下森林火山口"],
  },
  {
    day: 6,
    date: "8/18 周二 · 住延吉",
    title: "镜泊湖 → 珲春（帝王蟹）→ 延吉",
    totalDrive: "473.3 km / 约 5 h 45 min / 过路费约 ¥180",
    stay: "住延吉市区（网红墙 / 水上市场一带）",
    pace: "强度：高。全程最长驾驶日，但只有两个停留点，节奏简单。",
    dayNote: "今天的重点不是景点而是一顿饭。珲春是中国离日本海最近的口岸城市，俄罗斯远东的帝王蟹从这里入关，价格比内陆低一大截。按你的想法，珲春只吃蟹、不去防川，午后直接进延吉。",
    legs: [
      { route: "镜泊湖 → 珲春", time: "约 383 km · 约 4 h 35 min" },
      { route: "珲春 → 延吉", time: "约 90 km · 约 1 h 10 min" },
    ],
    timeline: [
      { time: "06:30", what: "出发", where: "镜泊湖景区", detail: "全程最长的一天，早走早到。出景区后经宁安上高速。" },
      { time: "07:30", what: "宁安补油", where: "中国石油向阳加油站", detail: "201 国道旁，评分 4.8。这是出景区后第一个靠谱的大站。", nav: [129.482134, 44.360181, "中国石油向阳加油站"] },
      { time: "10:00", what: "敦化服务区休息", where: "珲乌高速沿线", detail: "四个半小时车程，中途至少停两次。这段穿越长白山余脉，山区高速弯道多。" },
      { time: "12:00", what: "抵达珲春 · 帝王蟹", where: "珲春新西市场", detail: "评分 4.6。市场里挑活蟹，旁边饭店代加工（清蒸 / 蟹脚刺身 / 蟹黄炒饭）。三人一只 3–4 斤的帝王蟹足够，记得看蟹的活力和是否空壳，加工费单算，先谈好价。", nav: [130.351225, 42.856353, "珲春新西市场"] },
      { time: "13:00", what: "慢慢吃", where: "市场周边餐厅", detail: "备选 江琪海鲜餐厅（4.5）。这顿是今天唯一的正事，留足两小时，别赶。", nav: [130.358152, 42.864673, "江琪海鲜餐厅"] },
      { time: "14:30", what: "珲春 → 延吉", where: "90 km · 约 1 h 10 min", detail: "出发前在 中国石油板石加油站（4.7，珲乌高速口）补油。", nav: [130.367354, 42.8149, "中国石油板石加油站"] },
      { time: "16:00", what: "入住延吉", where: "维也纳酒店（延边大学网红墙店）", detail: "评分 4.8，位置在网红墙旁边，晚上出门方便。", nav: [129.496306, 42.905476, "维也纳酒店(延吉延边大学网红墙店)"] },
      { time: "17:00", what: "延边大学网红弹幕墙", where: "延边大学正门对面", detail: "评分 4.8，延吉最出片的地方。整面山坡楼房打满朝汉双语霓虹弹幕，天黑后才亮，18:30 之后效果最好。", nav: [129.491533, 42.907429, "延边大学网红弹幕墙"] },
      { time: "18:30", what: "晚餐 · 延吉烤肉", where: "金木头烤串 或 延家村火盆", detail: "延吉烤肉和韩式不同，牛肉现切、辣酱是灵魂。金木头烤串（4.7）人气高；想吃朝鲜族火盆和拌饭就去延家村（4.6）。", nav: [129.519214, 42.894841, "金木头烤串(延吉市店)"] },
      { time: "20:00", what: "延吉水上市场", where: "夜市 · 布尔哈通河边", detail: "评分 4.7。米肠、明太鱼、打糕、辣白菜，朝鲜族小吃一条街。夜里灯笼亮起来很热闹。", nav: [129.502003, 42.922746, "延吉水上市场"] },
    ],
    meals: "早餐镜泊湖；午餐珲春帝王蟹（本行程最贵也最值得的一顿）；晚餐延吉烤肉 + 水上市场夜宵。",
    hotel: "维也纳酒店（延吉延边大学网红墙店，4.8）；备选全季延吉市政府店（4.6）、国际饭店（4.7）。",
    fuel: "镜泊湖出发前须满箱。宁安向阳加油站（4.8）第一次补，珲春板石加油站（4.7）第二次补。473 km 是今天必须认真对待的数字。",
    stops: ["珲春帝王蟹", "延边大学网红弹幕墙", "延吉烤肉", "延吉水上市场"],
  },
  {
    day: 7,
    date: "8/19 周三 · 返回长春",
    title: "延吉 → 朝鲜族民俗园 → 长春",
    totalDrive: "423.1 km / 约 4 h 35 min / 过路费约 ¥183",
    stay: "回到长春，行程结束",
    pace: "强度：中。上午留两小时给延吉，10 点发车，傍晚前到家。",
    dayNote: "最后一天不要贪。延吉上午看一个点就够，把返程留出充裕余量——珲乌高速这段有山区隧道群，遇雨雾容易堵。",
    legs: [{ route: "延吉 → 长春", time: "423.1 km · 约 4 h 35 min · ¥183" }],
    timeline: [
      { time: "07:30", what: "朝鲜族早餐", where: "延吉市区", detail: "米肠汤饭或明太鱼汤配打糕，走之前再吃一顿正宗的。" },
      { time: "08:30", what: "中国朝鲜族民俗园", where: "帽儿山脚下 · 阿里郎广场", detail: "评分 4.7。朝鲜族传统建筑群，可以租民族服装拍照，是延吉最完整的民俗展示地。逛一圈约 1.5 小时。", nav: [129.493446, 42.874227, "中国朝鲜族民俗园"] },
      { time: "10:00", what: "出发 · 补满油", where: "中国石化加油站（延吉西站）", detail: "延朝路 8 号，评分 4.4，正好在西行出城方向。", nav: [129.381466, 42.901906, "中国石化加油站(延吉西站)"] },
      { time: "12:30", what: "敦化休息 / 午餐", where: "珲乌高速 敦化段", detail: "行程过半，停车吃饭换人。敦化也可加油（中国石油，4.0）。", nav: [128.347188, 43.788999, "敦化 中国石油加油站"] },
      { time: "15:30", what: "抵达长春", where: "环线闭合", detail: "7 天 2543 km，长春 → 哈尔滨 → 佳木斯 → 密山 → 横道河子 → 镜泊湖 → 珲春 → 延吉 → 长春，全程零回头路。", nav: [125.323643, 43.816996, "长春"] },
    ],
    meals: "早餐延吉朝鲜族汤饭；午餐敦化服务区或县城；晚餐回长春自行安排。",
    hotel: "无（返程日）。若不想当天开满全程，可在敦化住一晚，把返程拆成两段。",
    fuel: "延吉西站加满即可跑完全程 423 km。敦化有备选站点。",
    stops: ["中国朝鲜族民俗园", "延吉西站补油", "敦化中途休息", "抵达长春"],
  },
];


const fuelPlan = [
  { day: "D1", legs: "长春满油 → 哈尔滨（不用补）", rule: "266.5 km，全程最短。长春出发前加满即可跑完，哈尔滨市区不必再加。" },
  { day: "D2", legs: "哈尔滨迎宾站加满 → 佳木斯", rule: "373.0 km。出城时在机场路中国石化迎宾加油站（4.7）加满，哈同高速中途无需补油。" },
  { day: "D3", legs: "佳木斯加满 → 密山东方站按需 → 密山", rule: "393.3 km 且分四段跑。出发前在佳木斯世纪石油（4.6）加满；去兴凯湖路上有密山东方加油站（4.5）可补。" },
  { day: "D4", legs: "密山加满 → 牡丹江江滨站 → 进山前满箱", rule: "394.4 km。镜泊湖景区内没有加油站，进景区前务必在牡丹江中国石油江滨加油站（4.7）加满。" },
  { day: "D5", legs: "景区内往返 → 宁安向阳站加满", rule: "219.1 km，都在景区内部。回程顺路在宁安向阳加油站（4.8）加满，为 D6 的长途做准备。" },
  { day: "D6", legs: "宁安加满 → 珲春板石站补 → 延吉", rule: "473.3 km，全程最长驾驶日。两次补油：宁安向阳（4.8）与珲春板石（4.7，高速口）。" },
  { day: "D7", legs: "延吉西站加满 → 长春", rule: "423.1 km。延吉西站中国石化（4.4）在西行出城方向，加满可直达长春。敦化有备选站。" },
];

const points = [
  { name: "长春 · 起终点", days: [1, 7], lat: 43.816996, lng: 125.323643, kind: "terminal", detail: "7 天环线的起点与终点。" },
  { name: "哈尔滨", days: [1, 2], lat: 45.802981, lng: 126.53505, kind: "city", detail: "中央大街、圣索菲亚、松花江与老道外。D1 住宿。" },
  { name: "佳木斯", days: [2, 3], lat: 46.800002, lng: 130.318916, kind: "city", detail: "三江平原中转站，沿江公园与铁锅炖。D2 住宿。" },
  { name: "鸡西", days: [3], lat: 45.295087, lng: 130.969385, kind: "spot", detail: "鸡西大冷面的发源地，D3 早午餐停留。" },
  { name: "密山", days: [3, 4], lat: 45.529482, lng: 131.846824, kind: "city", detail: "兴凯湖门户县级市，D3 住宿。" },
  { name: "兴凯湖 · 新开流", days: [3], lat: 45.347278, lng: 132.375752, kind: "spot", detail: "中俄界湖，4380 km² 湖面与 90 km 天然湖岗，看的是「海」。" },
  { name: "横道河子", days: [4], lat: 44.812391, lng: 129.078641, kind: "spot", detail: "1897 年中东铁路俄式小镇，木教堂与扇形机车库。" },
  { name: "镜泊湖", days: [4, 5, 6], lat: 44.063163, lng: 128.951244, kind: "spot", detail: "火山堰塞湖，吊水楼瀑布与百里长湖。D4、D5 住宿。" },
  { name: "地下森林火山口", days: [5], lat: 44.196051, lng: 128.545525, kind: "spot", detail: "十座塌陷火山口，森林长在坑底。" },
  { name: "珲春", days: [6], lat: 42.862551, lng: 130.365829, kind: "spot", detail: "口岸城市，俄罗斯帝王蟹入关地。D6 午餐停留。" },
  { name: "延吉", days: [6, 7], lat: 42.891034, lng: 129.507655, kind: "city", detail: "延边朝鲜族自治州首府，网红墙、烤肉与水上市场。D6 住宿。" },
];

const colors = { 1: "#0f766e", 2: "#b4532a", 3: "#2f5f8f", 4: "#b88918", 5: "#7c3f74", 6: "#c2410c", 7: "#15803d" };

const pois = [
  { name: "哈尔滨中央大街亚朵S酒店 · 4.7", kind: "hotel", lat: 45.772875, lng: 126.622275, day: 1, detail: "尚志大街160号，步行到中央大街 3 分钟，有停车位。D1 首选。" },
  { name: "全季酒店(哈尔滨中央大街店) · 4.4", kind: "hotel", lat: 45.777441, lng: 126.619925, day: 1, detail: "西头道街19号，连锁备选。" },
  { name: "如家neo酒店(佳木斯火车站店) · 4.7", kind: "hotel", lat: 46.808519, lng: 130.384668, day: 2, detail: "升平路302号，佳木斯性价比最好的连锁。" },
  { name: "密山兴凯湖国际大酒店 · 4.4", kind: "hotel", lat: 45.541091, lng: 131.864454, day: 3, detail: "东安街201号，密山当地最稳的选择。" },
  { name: "镜泊湖瀑布山庄 · 3.6", kind: "hotel", lat: 44.063183, lng: 128.957078, day: 4, detail: "景区内住宿，条件一般但出门就是瀑布，D4、D5 连住不用换。" },
  { name: "维也纳酒店(延吉延边大学网红墙店) · 4.8", kind: "hotel", lat: 42.905476, lng: 129.496306, day: 6, detail: "延西街，网红墙旁边，晚上出门方便。D6 首选。" },
  { name: "全季酒店(延吉市政府店) · 4.6", kind: "hotel", lat: 42.88845, lng: 129.498378, day: 6, detail: "河南街铁北路439号，连锁备选。" },

  { name: "华梅西餐厅(中央大街店) · 4.7", kind: "food", lat: 45.773091, lng: 126.618969, day: 1, detail: "1925 年老字号俄餐，红菜汤与罐虾。D1 午餐。" },
  { name: "马迭尔冷饮厅(中央大街) · 4.7", kind: "food", lat: 45.773285, lng: 126.61932, day: 1, detail: "马迭尔冰棍在门口窗口买，边走边吃。" },
  { name: "张包铺 · 4.7", kind: "food", lat: 45.735866, lng: 126.567689, day: 1, detail: "包子与东北家常菜，锅包肉可点。D1 晚餐。" },
  { name: "老厨家(三合路店) · 4.6", kind: "food", lat: 45.704294, lng: 126.66007, day: 1, detail: "锅包肉创始家族郑氏经营，正宗酸甜口。D1 晚餐备选。" },
  { name: "三姐妹冷面馆(保卫路) · 4.7", kind: "food", lat: 46.810055, lng: 130.36612, day: 2, detail: "佳木斯冷面，汤更酸甜。D2 午餐。" },
  { name: "徐记铁锅炖(光复路店) · 4.5", kind: "food", lat: 46.812085, lng: 130.380188, day: 2, detail: "铁锅炖大鹅配贴饼子。D2 晚餐。" },
  { name: "大东江冷面(步行街店) · 4.6", kind: "food", lat: 45.304672, lng: 130.984086, day: 3, detail: "鸡西大冷面，必配辣菜。D3 早午餐，本行程必吃项。" },
  { name: "延奶奶朝鲜族汤饭 · 4.1", kind: "food", lat: 45.5429, lng: 131.867598, day: 3, detail: "密山朝鲜族汤饭，实在管饱。D3 晚餐。" },
  { name: "老太太筋饼店 · 4.5", kind: "food", lat: 44.797217, lng: 129.104988, day: 4, detail: "横道河子小镇老店，筋饼卷酱肉。D4 午餐。" },
  { name: "镜泊湖天水阁湖鱼馆 · 4.6", kind: "food", lat: 44.065624, lng: 128.955856, day: 4, detail: "镜泊湖白鱼与湖虾，点前先问价。D4、D5 晚餐。" },
  { name: "珲春新西市场 · 4.6", kind: "food", lat: 42.856353, lng: 130.351225, day: 6, detail: "帝王蟹市场，挑活蟹旁边饭店代加工。D6 午餐，全程最贵的一顿。" },
  { name: "江琪海鲜餐厅 · 4.5", kind: "food", lat: 42.864673, lng: 130.358152, day: 6, detail: "珲春海鲜餐厅备选。" },
  { name: "金木头烤串(延吉市店) · 4.7", kind: "food", lat: 42.894841, lng: 129.519214, day: 6, detail: "延吉烤肉，牛肉现切。D6 晚餐。" },
  { name: "延吉水上市场 · 4.7", kind: "food", lat: 42.922746, lng: 129.502003, day: 6, detail: "朝鲜族小吃夜市，米肠、明太鱼、打糕。D6 夜宵。" },
  { name: "延家村·朝鲜族高丽火盆 · 4.6", kind: "food", lat: 42.918868, lng: 129.497947, day: 6, detail: "朝鲜族火盆与拌饭，晚餐备选。" },

  { name: "中国石化迎宾加油站 · 4.7", kind: "fuel", lat: 45.708239, lng: 126.555385, day: 2, detail: "哈尔滨机场路6号，D2 出城方向加满。" },
  { name: "世纪石油加油站 · 4.6", kind: "fuel", lat: 46.789976, lng: 130.314575, day: 3, detail: "佳木斯浦东路与联盟路口，D3 出发前加满。" },
  { name: "中国石化密山东方加油站 · 4.5", kind: "fuel", lat: 45.478194, lng: 131.739717, day: 3, detail: "309 省道，去兴凯湖路上可补油。" },
  { name: "中国石油江滨加油站 · 4.7", kind: "fuel", lat: 44.545858, lng: 129.628219, day: 4, detail: "牡丹江市区，进镜泊湖景区前最后的大站。" },
  { name: "中国石油向阳加油站 · 4.8", kind: "fuel", lat: 44.360181, lng: 129.482134, day: 5, detail: "宁安 201 国道旁，出景区后第一个靠谱大站。" },
  { name: "中国石油板石加油站 · 4.7", kind: "fuel", lat: 42.8149, lng: 130.367354, day: 6, detail: "珲春珲乌高速入口，去延吉前补油。" },
  { name: "中国石化加油站(延吉西站) · 4.4", kind: "fuel", lat: 42.901906, lng: 129.381466, day: 7, detail: "延朝路8号，D7 西行出城方向加满可直达长春。" },
];

const poiColors = {
  fuel: { bg: "#d97706", icon: "油", label: "加油站" },
  hotel: { bg: "#2563eb", icon: "住", label: "酒店" },
  food: { bg: "#dc2626", icon: "食", label: "餐饮" },
};

function amapMarkerUrl(lng, lat, name) {
  const params = new URLSearchParams({
    position: `${lng},${lat}`,
    name,
    src: "NewTripNorthEast",
    coordinate: "gaode",
    callnative: "1",
  });
  return `https://uri.amap.com/marker?${params}`;
}

function navLink(nav) {
  if (!nav) return "";
  const [lng, lat, name] = nav;
  return `<a class="nav-link" href="${amapMarkerUrl(lng, lat, name)}" target="_blank" rel="noreferrer">高德导航</a>`;
}

function renderItinerary() {
  const container = document.querySelector("#itinerary");
  container.innerHTML = routeDays
    .map(
      (item) => `
        <article class="timeline-card" data-day="${item.day}">
          <div class="day-badge">D${item.day}<span class="day-date">${item.date}</span></div>
          <div>
            <h3>${item.title}</h3>
            <div class="timeline-meta">${item.totalDrive} · ${item.stay}</div>
            <div class="weather-badge">${item.pace}</div>
            <p class="weather-tip">${item.dayNote}</p>
            <div class="legs">
              <p class="legs-title">分段驾驶</p>
              <ul>${item.legs.map((leg) => `<li><span class="leg-route">${leg.route}</span><span class="leg-time">${leg.time}</span></li>`).join("")}</ul>
            </div>
            <div class="timeline-hours">
              ${item.timeline
                .map(
                  (entry) => `
                    <div class="hour-entry">
                      <span class="hour-time">${entry.time}</span>
                      <div class="hour-body">
                        <span class="hour-what">${entry.what}<span class="hour-where"> · ${entry.where}</span>${navLink(entry.nav)}</span>
                        <div class="hour-detail">${entry.detail.replace(/\n/g, "<br>")}</div>
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <div class="detail-grid">
              <div><strong>就餐</strong><span>${item.meals}</span></div>
              <div><strong>住宿</strong><span>${item.hotel}</span></div>
              <div><strong>油车补给</strong><span>${item.fuel}</span></div>
            </div>
            <ul class="stop-list">${item.stops.map((stop) => `<li>${stop}</li>`).join("")}</ul>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFuelPlan() {
  const container = document.querySelector("#fuel-plan");
  container.innerHTML = fuelPlan
    .map((item) => `<article class="charge-card"><strong>${item.day}</strong><h3>${item.legs}</h3><p>${item.rule}</p></article>`)
    .join("");
}

let routeMap = null;
let routeLayerGroup = null;
let markerGroup = null;
let poiGroup = null;
let activeDay = "all";
let activePoiKinds = new Set(["fuel", "hotel", "food"]);

function setMapStatus(message, visible = true) {
  const status = document.getElementById("map-status");
  if (!status) return;
  status.textContent = message;
  status.hidden = !visible;
}

function initLeafletMap() {
  const element = document.getElementById("leaflet-map");
  if (!element || typeof L === "undefined") {
    if (element) element.innerHTML = '<div class="map-fallback">地图组件加载失败，请检查网络后刷新。</div>';
    return;
  }

  routeMap = L.map("leaflet-map", { attributionControl: false, zoomControl: true }).setView([44.8, 128.9], 6);
  routeMap.zoomControl.setPosition("bottomright");

  let tileErrors = 0;
  const tileLayer = L.tileLayer(
    "https://api.open.geovisearth.com/map/v1/vec/{z}/{x}/{y}?token=22813193061716c4d729ab41f125de23",
    { maxZoom: 18, minZoom: 4 },
  );
  tileLayer.on("loading", () => setMapStatus("星图云底图加载中…"));
  tileLayer.on("load", () => setMapStatus("", false));
  tileLayer.on("tileerror", () => {
    tileErrors += 1;
    if (tileErrors >= 6) setMapStatus("星图云底图暂未加载，但高德路线与景点仍可查看。请稍后刷新。", true);
  });
  tileLayer.addTo(routeMap);

  drawMap("all");
}

function makeRouteIcon(background, label, size = 28) {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<div style="background:${background};color:#fff;width:${size}px;height:${size}px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:850;font-size:${size < 28 ? "11px" : "13px"};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3)">${label}</div>`,
    iconSize: [size + 6, size + 6],
    iconAnchor: [(size + 6) / 2, (size + 6) / 2],
    popupAnchor: [0, -((size + 6) / 2)],
  });
}

function makePoiIcon(kind) {
  const config = poiColors[kind];
  return L.divIcon({
    className: "custom-div-icon poi-icon",
    html: `<div style="background:${config.bg};color:#fff;width:24px;height:24px;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:850;border:2px solid #fff;box-shadow:0 1px 5px rgba(0,0,0,0.28)">${config.icon}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -15],
  });
}

function dayRouteCoordinates(day) {
  const geometry = window.routeGeometry || {};
  if (day === "all") return Object.values(geometry).flatMap((route) => route.coordinates || []);
  return geometry[Number(day)]?.coordinates || [];
}

function drawRoutes(day) {
  routeLayerGroup = L.layerGroup().addTo(routeMap);
  const geometry = window.routeGeometry || {};
  const days = day === "all" ? Object.keys(geometry) : [String(day)];
  days.forEach((dayNumber) => {
    const route = geometry[dayNumber];
    if (!route?.coordinates?.length) return;
    L.polyline(route.coordinates, {
      color: colors[Number(dayNumber)] || colors[1],
      weight: day === "all" ? 5 : 6,
      opacity: 0.9,
      lineJoin: "round",
      lineCap: "round",
    })
      .bindPopup(`<strong>D${dayNumber} 高德实测路线</strong><br>${route.distanceKm} km · 约 ${route.durationHours} h · 过路费约 ¥${route.tolls}`)
      .addTo(routeLayerGroup);
  });
}

function drawRoutePoints(day) {
  markerGroup = L.layerGroup().addTo(routeMap);
  const visiblePoints = day === "all" ? points : points.filter((point) => point.days.includes(Number(day)));
  visiblePoints.forEach((point, index) => {
    const pointDay = day === "all" ? point.days[0] : Number(day);
    const label = point.kind === "terminal" ? "环" : String(index + 1);
    const navigation = amapMarkerUrl(point.lng, point.lat, point.name);
    L.marker([point.lat, point.lng], { icon: makeRouteIcon(colors[pointDay] || colors[1], label) })
      .bindPopup(`<strong>${point.name}</strong><br><small>${point.detail}</small><br><a href="${navigation}" target="_blank" rel="noreferrer">高德导航</a>`)
      .addTo(markerGroup);
  });
}

function drawPois(day) {
  poiGroup = L.layerGroup().addTo(routeMap);
  const visiblePois = pois.filter((poi) => activePoiKinds.has(poi.kind) && (day === "all" || poi.day === Number(day)));
  visiblePois.forEach((poi) => {
    const navigation = amapMarkerUrl(poi.lng, poi.lat, poi.name);
    L.marker([poi.lat, poi.lng], { icon: makePoiIcon(poi.kind) })
      .bindPopup(`<strong>${poiColors[poi.kind].label} · ${poi.name}</strong><br><small>${poi.detail}</small><br><a href="${navigation}" target="_blank" rel="noreferrer">高德导航</a>`)
      .addTo(poiGroup);
  });
}

function fitMap(day) {
  const routeCoordinates = dayRouteCoordinates(day);
  const pointCoordinates = (day === "all" ? points : points.filter((point) => point.days.includes(Number(day)))).map((point) => [point.lat, point.lng]);
  const boundsPoints = [...routeCoordinates, ...pointCoordinates];
  if (boundsPoints.length) routeMap.fitBounds(L.latLngBounds(boundsPoints).pad(day === "all" ? 0.08 : 0.16));
}

function drawMap(day) {
  if (!routeMap) return;
  activeDay = day;
  if (routeLayerGroup) routeMap.removeLayer(routeLayerGroup);
  if (markerGroup) routeMap.removeLayer(markerGroup);
  if (poiGroup) routeMap.removeLayer(poiGroup);
  drawRoutes(day);
  drawRoutePoints(day);
  drawPois(day);
  fitMap(day);
}

function togglePoiKind(kind) {
  if (activePoiKinds.has(kind)) activePoiKinds.delete(kind);
  else activePoiKinds.add(kind);
  if (poiGroup) routeMap.removeLayer(poiGroup);
  drawPois(activeDay);
}

function bindFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      drawMap(button.dataset.day);
    });
  });

  document.querySelectorAll(".poi-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-off");
      togglePoiKind(button.dataset.kind);
    });
  });
}

renderItinerary();
renderFuelPlan();
bindFilters();
initLeafletMap();
