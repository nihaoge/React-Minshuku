
// import aa1 from './images/a1.webp'
// import aa2 from './images/a2.webp'
// import aa3 from './images/a3.webp'
// import aa4 from './images/a4.webp'
// import aa5 from './images/b1.webp'
// import aa6 from './images/b2.webp'
// import aa7 from './images/b3.webp'
// import aa8 from './images/b4.webp'
// import aa9 from './images/c1.webp'
// import aa10 from './images/c2.webp'
// import aa11 from './images/c3.webp'
// import aa12 from './images/c4.webp'
// import aa13 from './images/d1.webp'
// import aa14 from './images/d2.webp'
// import aa15 from './images/d3.webp'
// import aa17 from './images/e1.webp'
// import aa18 from './images/e2.webp'
// import aa19 from './images/e3.webp'
// import aa20 from './images/e4.webp'
// import aa21 from './images/f1.webp'
// import aa22 from './images/f2.webp'
// import aa23 from './images/f3.webp'
// import aa24 from './images/f4.webp'
// import aa25 from './images/g1.webp'
// import aa26 from './images/g2.webp'
// import aa27 from './images/g3.webp'
// import aa28 from './images/g4.webp'
// import aa29 from './images/h1.webp'
// import aa30 from './images/h2.webp'
// import aa31 from './images/h3.webp'
// import aa32 from './images/h4.webp'


const hoteList = [
    [
        {id: 1, a:'整套公寓.1卫1床', name: '【铂乐公寓】深圳北站1.8米大床房简约舒适公寓可养宠物1207', money:'￥139 每晚',el:4.5, type: 's1', img: 'https://z1.muscache.cn/im/pictures/21943caa-42dc-4769-b5a7-4a4bd576fcf1.jpg?aki_policy=large'},
        {id: 2, a:'整套公寓.1室1卫1床', name: '带电梯，独享整个房源，自助入住密码锁，配备健身房【朋友家·六o蹴】深圳北站高铁民治白石龙地铁直达宝安', money:'￥150 每晚',el:4, type: 's1', img: 'https://z1.muscache.cn/im/pictures/65eaf1f4-4e4b-4db5-b627-a3a254856f24.jpg?aki_policy=large'},
        {id: 3, a:'独立房间.1室1卫1床', name: '【欧式建筑】3分钟抵达腾讯 百度｜春蚕｜深圳大学｜海岸城｜深圳湾口岸｜深圳湾体育中心｜万象城', money:'￥161 每晚',el:3.5, type: 's1', img: 'https://z1.muscache.cn/im/pictures/ab54f0dc-4f4a-4162-ab63-94abdd3c0bb6.jpg?aki_policy=large'},
        {id: 4, a:'合住房间.1室2卫6床', name: '[万沃1]三层Loft/亚洲最高楼俯瞰城市夜景', money:'￥90 每晚',el:3, type: 's1', img: 'https://z1.muscache.cn/im/pictures/20458c41-c5df-4b9a-b154-5713a1686086.jpg?aki_policy=large'}
    ],
    [
        {id: 5, a:'独立房间.1室1卫1床', name: '西关/沙面/白天鹅宾馆/南方大厦/上下九路/附近房源', money:'￥68 每晚',el:5, type: 's2', img: 'https://z1.muscache.cn/im/pictures/9dca0c9e-950f-496c-ae8e-54e2ec72a761.jpg?aki_policy=large'},
        {id: 6, a:'独立房间.1室1卫1床', name: '未来社特价迷你单间【江南西地铁口旁】', money:'￥88 每晚',el:4, type: 's2', img: 'https://z1.muscache.cn/im/pictures/9713f3f6-6ca8-4706-a843-48826b7754ca.jpg?aki_policy=large'},
        {id: 7, a:'整套公寓.1室1卫1床', name: '京溪南方医院地铁口清新风-09', money:'￥151 每晚',el:2.5, type: 's2', img: 'https://z1.muscache.cn/im/pictures/252a1fb6-c8ec-4be6-8609-b57565ba964a.jpg?aki_policy=large'},
        {id: 8, a:'合住房间.1室3卫6床', name: '【舍予舍】北京路上下九花园别墅女生六人间No2', money:'￥76 每晚',el:4, type: 's2', img: 'https://z1.muscache.cn/im/pictures/7126ba43-8e1c-4a64-9f3e-e4db98c03fbd.jpg?aki_policy=large'}
    ],
    [
        {id: 9, a:'整套公寓.1卫1床', name: '【禾栖家】解放碑 | 洪崖洞 |  投影仪 | 工业风', money:'￥152 每晚',el:3, type: 's3', img: 'https://z1.muscache.cn/im/pictures/272b26a0-9c8b-4e1b-97aa-c68c65fe4d88.jpg?aki_policy=large'},
        {id: 10, a:'整套公寓.1卫1床', name: '《朝暮与卿》洪崖洞/解放碑/地铁口附近/全景天窗/温馨北欧风', money:'￥101 每晚',el:4, type: 's3', img: 'https://z1.muscache.cn/im/pictures/7b1ca721-d37f-4af1-b0aa-42903e42e138.jpg?aki_policy=large'},
        {id: 11, a:'整间LOFT.1室1卫1床', name: '赵小姐家／莫兰迪／高清投影仪/Loft复式/紧邻山城步道、解放碑、洪崖洞、长江索道、朝天门/近地铁站', money:'￥130 每晚',el:5, type: 's3', img: 'https://z1.muscache.cn/im/pictures/b0085055-92e8-493e-b6b8-0c36e32df39c.jpg?aki_policy=large'},
        {id: 12, a:'整套公寓.1室1卫1床', name: '【一柒•dream I】解放碑，洪崖洞/地铁站近在咫尺，超赞汉服、白色纱裙拍照主题房，免费提供多套！', money:'￥155 每晚',el:5, type: 's3', img: 'https://z1.muscache.cn/im/pictures/363a12e1-97fc-4555-95f9-ef25c5943b46.jpg?aki_policy=large'}
    ],
    [
        {id: 13, a:'独立房间.1室1.5卫1床', name: '【天安门、前门大街、故宫、王府井】2号、4号地铁口，步行可达【前门】【天安门】地铁直达机场火车站', money:'￥161 每晚',el:5, type: 's4', img: 'https://z1.muscache.cn/im/pictures/be071ba5-e400-43e4-9654-950fafc47802.jpg?aki_policy=large'},
        {id: 14, a:'独立房间.1室1卫1床', name: '松泉居【电梯二环地铁2#线东四十条地铁150米机场快轨东直门站450米】故宫雍和宫什刹海天安门', money:'￥142 每晚',el:4, type: 's4', img: 'https://z1.muscache.cn/im/pictures/80ffb999-3e10-4679-ae2a-66cbd4f4bce1.jpg?aki_policy=large'},
        {id: 15, a:'整套房子.1室1卫2床', name: '【民宿先生】近故宫/天安门/景山/南锣鼓巷/鼓楼/王府井旁/简约一居室', money:'￥279 每晚',el:2.5, type: 's4', img: 'https://z1.muscache.cn/im/pictures/b1f88686-22db-4e7c-8f11-cde840f71be5.jpg?aki_policy=large'},
        {id: 16, a:'青年床位.1室1卫1床', name: '三里屯工体旁阳光明媚的青年旅舍女生六人间床位（多人预定请私信哦）', money:'￥120 每晚',el:3, type: 's4', img: 'https://z1.muscache.cn/im/pictures/d3ce62ae-b002-4269-8d94-eb4de2c8f1f8.jpg?aki_policy=large'}
    ],
    [
        {id: 17, a:'独立公寓.1卫1床', name: '近九眼桥/川师大/锦华万达/【复古黑熵单人房】花园洋房合拼房源中其中一间房', money:'￥70 每晚',el:4.5, type: 's5', img: 'https://z1.muscache.cn/im/pictures/5b209961-7461-4a3e-a068-fc809ddbc5cb.jpg?aki_policy=large'},
        {id: 18, a:'整套房子.1室1卫1床', name: '【第2家】市中心春熙路【观景私密情侣闺蜜房】交通枢纽', money:'￥142 每晚',el:5, type: 's5', img: 'https://z1.muscache.cn/im/pictures/5410b061-66c4-44b2-b143-2f9be0b68403.jpg?aki_policy=large'},
        {id: 19, a:'独立房间.1室1卫2床', name: '【半年青·通幽】市中心/独立卫浴/百平高空花园/近·川音/川大/新南门/九眼桥/太古里/春熙路', money:'￥116 每晚',el:4.5, type: 's5', img: 'https://z1.muscache.cn/im/pictures/f5538d60-e41f-4133-99df-7740fee136e3.jpg?aki_policy=large'},
        {id: 20, a:'整套公寓.1卫1床', name: '【简约生活】超大绿化超大空间/秘境人生静谧生活/凯德凯丹环绕/高品质精致一居', money:'￥190 每晚',el:4, type: 's5', img: 'https://z1.muscache.cn/im/pictures/pro_photo_tool/Hosting-33915965-unapproved/original/709807ee-ad3c-4c4c-af3e-97b02ac96fc6.JPEG?aki_policy=large'}
    ],
    [
        {id: 21, a:'公寓客房.1室1卫1床', name: '【简致大床】近公交地铁口 住厦门中山路商圈！打卡网红美食购物，鼓浪屿/厦大/曾厝垵/环岛路/双子塔', money:'￥83 每晚',el:4.5, type: 's6', img: 'https://z1.muscache.cn/im/pictures/c3104a05-40c3-4d54-9729-d14f7ea93dbd.jpg?aki_policy=large'},
        {id: 22, a:'独立房间.1室1卫1床', name: '解忧·【猫先生】  厦门大学.曾厝垵.海边.环岛路(点我头像.查看更多房源)', money:'￥77 每晚',el:4.5, type: 's6', img: 'https://z1.muscache.cn/im/pictures/dcd2c900-1545-4a44-90a4-e4cd13051b22.jpg?aki_policy=large'},
        {id: 23, a:'整套公寓.1卫1床', name: '【星河】中山路家庭房/双床房/高清投影/有阳台晒衣/BRT公交多线直达厦大曾厝垵环岛路沙坡尾厦门站', money:'￥122 每晚',el:5, type: 's6', img: 'https://z1.muscache.cn/im/pictures/d283e24d-9205-470d-9624-7d3813ce0784.jpg?aki_policy=large'},
        {id: 24, a:'青旅单间.1室1卫1床', name: '舒适大床双人房，海边民宿，闹中取静，曾厝垵小吃街1分钟，各景区公交直达', money:'￥130 每晚',el:5, type: 's6', img: 'https://z1.muscache.cn/im/pictures/74c49bd6-9a9b-4688-afb1-f8f7e7a211bf.jpg?aki_policy=large'}
    ],
    [
        {id: 25, a:'独立房间.1室1卫1床', name: '【湘江边/山脚下，还你一个异乡的小家】在长沙，一个闹中取静的梦', money:'￥71 每晚',el:4, type: 's7', img: 'https://z1.muscache.cn/im/pictures/2d496ebf-cd39-4d9f-882b-d275db4dfb89.jpg?aki_policy=large'},
        {id: 26, a:'整套公寓.1卫1床', name: '茶颜悦色不排队【北欧社会少女心】沙湾公园正地铁口15分钟五一广场市中心CBD商圈童趣温柔小屋', money:'￥135 每晚',el:3.5, type: 's7', img: 'https://z1.muscache.cn/im/pictures/5017c573-865c-4de8-908f-8866cd555ff7.jpg?aki_policy=large'},
        {id: 27, a:'整套公寓.2室1卫3床', name: '【时光】近五一广场/下楼即是地铁口/三馆一厅/北辰洲际酒店/江景/1居2人', money:'￥179 每晚',el:1.5, type: 's7', img: 'https://z1.muscache.cn/im/pictures/02c5ea01-9eb0-4219-8697-c4dcc9d62f5b.jpg?aki_policy=large'},
        {id: 28, a:'独立房间.1室2卫1床', name: '【Andy家•文艺书房】岳麓山全景•日式榻榻米•金星路地铁站•真实共享空间', money:'￥79 每晚',el:3.5, type: 's7', img: 'https://z1.muscache.cn/im/pictures/ad8b7d39-39fe-40ea-b317-a6defd703955.jpg?aki_policy=large'}
    ],
    [
        {id: 29, a:'整套公寓.1室1卫1床', name: '江汉路步行街/地铁站/江滩/昙华林/万松园/解忧丶贰', money:'￥190 每晚',el:5, type: 's8', img: 'https://z1.muscache.cn/im/pictures/23bd8ddb-4343-4f65-b68b-cba9a72920b3.jpg?aki_policy=large'},
        {id: 30, a:'整套公寓.1室1卫1床', name: '汉口火车站地铁旁 白色异域风情 投影大床房直达天河机场', money:'￥164 每晚',el:3.5, type: 's8', img: 'https://z1.muscache.cn/im/pictures/06497ca3-8536-4ed3-9b0f-c34726a9bc16.jpg?aki_policy=large'},
        {id: 31, a:'整套房子.1室1.5卫2床', name: '(禁烟)1室1厅1卫1阳台 有地铁 近江汉路 新华路体育场 中山公园 武广商圈 民众乐园 协和亚心', money:'￥144 每晚',el:4.5, type: 's8', img: 'https://z1.muscache.cn/im/pictures/ee085e8b-ff4e-411a-905b-aa3e7b756aba.jpg?aki_policy=large'},
        {id: 32, a:'整套公寓.2室1卫2床', name: '【胖妹大宅门】近邻7号线建安街地铁口，附近临近商场、大学城、光谷步行街', money:'￥186 每晚',el:4, type: 's8', img: 'https://z1.muscache.cn/im/pictures/fecdac3d-3639-487c-99d1-e77f751d0d6b.jpg?aki_policy=large'}
    ],
    
]



export {
    hoteList
}