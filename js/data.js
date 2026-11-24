/* ============================================================
   JNX EBIKE — 产品数据库 & 公司信息 (真实数据)
   两轮车: 来源 南京珏能行电动车产品手册.pdf
   三轮车: 来源 珏能行三轮电动车产品册.pptx
   ============================================================ */

// ---------- 公司信息 (来自营业执照，真实) ----------
const COMPANY = {
  nameZh: "南京珏能行新能源科技有限公司",
  nameEn: "Nanjing Juenengxing New Energy Technology Co., Ltd.",
  brand: "JNX EBIKE",
  founded: "2026",
  capital: "RMB 2,000,000",
  creditCode: "91320106MAKADA2Q5J",
  address: "南京市鼓楼区胜棋里9号国科军通凤凰城A座6437室",
  addressEn: "Room 6437, Block A, Guoke JunTong Phoenix City, No.9 Shengqi Lane, Gulou District, Nanjing, Jiangsu, China",
  legalRep: "邸晓君",
  businessScope: "新兴能源技术研发；电动自行车销售；摩托车及零配件批发零售；货物进出口；技术进出口；进出口代理；电池制造销售；充电桩销售等"
};

// ---------- 两轮车产品 (真实车型 + 真实参数) ----------
// 顺序与PDF页面严格对应：图02=page2(H8)...图21=page21(Yellow Bike)
const BIKES_2W = [
  { model:"H8",            battery:"48V/60V/72V 20Ah", motor:"24H High-Efficiency", brake:"Front Disc", tire:"3.00-10 Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"GM8",           battery:"48V/60V 20Ah", motor:"24H High-Efficiency", brake:"Front Disc", tire:"2.75-10 Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"GM6",           battery:"48V/60V 20Ah", motor:"24H High-Efficiency", brake:"Front Disc", tire:"2.75-10 Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"Xiao Jiu",      battery:"48V/60V/72V 20Ah", motor:"27H High-Efficiency", brake:"Front & Rear Disc", tire:"3.00-10 Tubeless", extra:"National Standard, USB, 3-Speed" },
  { model:"Cangqiong",     battery:"48V/60V 20Ah", motor:"24H High-Efficiency", brake:"Front Disc", tire:"3.00-10 Tubeless", extra:"National Standard, USB, 3-Speed" },
  { model:"Divine Turtle", battery:"48V/60V 20Ah", motor:"27H High-Efficiency", brake:"Front Disc", tire:"3.00-10 Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"Sun Turtle",    battery:"48V/60V 20Ah", motor:"24H High-Efficiency", brake:"Front Disc", tire:"3.00-10 Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"V6",            battery:"48V/60V 20Ah", motor:"24H High-Efficiency", brake:"Front Disc", tire:"3.00-10 Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"V1",            battery:"48V/60V 20Ah", motor:"24H High-Efficiency", brake:"Front Disc", tire:"2.75-10 Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"Kunlun",        battery:"48V/60V 20Ah", motor:"24H High-Efficiency", brake:"Front Disc", tire:"3.00-10 Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"JNX S-01",      battery:"48V/60V 20Ah", motor:"27H High-Efficiency", brake:"Front Disc", tire:"Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"JNX S-02",      battery:"48V/60V 20Ah", motor:"27H High-Efficiency", brake:"Front Disc", tire:"Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"JNX S-03",      battery:"48V/60V 20Ah", motor:"27H High-Efficiency", brake:"Front Disc", tire:"Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"JNX S-04",      battery:"48V/60V 20Ah", motor:"27H High-Efficiency", brake:"Front Disc", tire:"Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"JNX S-05",      battery:"48V/60V 20Ah", motor:"24H High-Efficiency", brake:"Front Disc", tire:"2.75-10 Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"JNX S-06",      battery:"48V/60V 20Ah", motor:"27H High-Efficiency", brake:"Front Disc", tire:"Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"JNX S-07",      battery:"48V/60V 20Ah", motor:"27H High-Efficiency", brake:"Front Disc", tire:"Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"Little Whirlwind", battery:"48V/60V 20Ah", motor:"24H High-Efficiency", brake:"Front Disc", tire:"18x2.5 Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"Harley",        battery:"60V/72V 30Ah", motor:"30H High-Efficiency", brake:"Front Disc", tire:"Wide Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" },
  { model:"Yellow Bike",   battery:"60V/72V 20Ah", motor:"30H High-Efficiency", brake:"Front Disc", tire:"Tubeless", extra:"USB, Dual Remote Alarm, 3-Speed" }
];

// ---------- 三轮车产品 (真实车型 + 真实参数) ----------
const BIKES_3W = [
  { model:"TUKTUK B6-6",     size:"2700×1250×1750mm", motor:"72V / 2000W-3000W", brake:"Front 130 / Rear 180 Drum", tire:"4.00-12", weight:"300 kg", type:"passenger" },
  { model:"TUKTUK B6S2-Z26", size:"2650×1260×1780mm", motor:"72V / 2000W-3000W", brake:"Front 180 / Rear 220 Oil Drum", tire:"4.00-12", weight:"315 kg", type:"passenger" },
  { model:"TUKTUK B6S3-Z26", size:"2650×1260×1780mm", motor:"72V / 2000W-3000W", brake:"Front 180 / Rear 220 Oil Drum", tire:"4.00-12 / 125/65-12", weight:"340 kg", type:"passenger" },
  { model:"TUKTUK B9H2-L26", size:"2980×1260×1820mm", motor:"72V / 2500W-3000W", brake:"Front 180 / Rear 220 Oil Drum", tire:"4.00-12", weight:"370 kg", type:"passenger" },
  { model:"TUKTUK B9L2-L26", size:"3300×1260×1820mm", motor:"72V / 2500W-3000W", brake:"Front 180 / Rear 220 Oil Drum", tire:"4.00-12 / 125/65-12", weight:"370 kg", type:"passenger" },
  { model:"TUKTUK C6S2-V",   size:"2600×1330×1900mm", motor:"72V / 2000W-3000W", brake:"Front 180 / Rear 220 Oil Drum", tire:"125/65-12 Tubeless", weight:"350 kg", type:"passenger" },
  { model:"TUKTUK C9S2-L26", size:"3430×1350×1860mm", motor:"72V / 2500W-3000W", brake:"Front 180 / Rear 220 Oil Drum", tire:"135/65-12 Tubeless", weight:"370 kg", type:"passenger" },
  { model:"TUKTUK VIGO",     size:"3000×1050×1810mm", motor:"1500W / 1800W", brake:"Front Disc 220 / Rear Drum", tire:"4.00-12", weight:"255 kg", type:"passenger" },
  { model:"Feike G9-X1",     size:"2980×1260×1760mm", motor:"72V / 2500W-3000W", brake:"Front Disc 220 / Rear 220", tire:"4.00-12", weight:"350 kg", type:"passenger" },
  { model:"VEWO Cargo",      size:"3430×1380×2190mm", motor:"1800W / 2000W", brake:"Front Disc 220 / Rear Drum 180", tire:"5.00-12", weight:"350 kg", type:"cargo" },
  { model:"JX-01 Cargo",     size:"3200×1200×1430mm", motor:"60V/72V 1200W-1500W", brake:"Front 130 Hand / Rear 160 Drum", tire:"—", weight:"255 kg", type:"cargo" },
  { model:"Yake 02 Taxi",    size:"2850×1010×1890mm", motor:"1200W / 1500W", brake:"Front 130 / Rear 160 Drum", tire:"4.00-12", weight:"255 kg", type:"passenger" },
  { model:"JX Cargo",        size:"3130×1280×2040mm", motor:"1500W / 1800W", brake:"Hydraulic & Drum", tire:"4.00-12", weight:"330 kg", type:"cargo" },
  { model:"Yake 07L",        size:"3200×1045×1805mm", motor:"1200W / 1500W", brake:"Front 130 / Rear 160 Drum", tire:"4.00-12", weight:"268 kg", type:"cargo" },
  { model:"Yake 07S",        size:"2480×1000×1860mm", motor:"1200W / 1500W", brake:"Front 130 / Rear 160 Drum", tire:"4.00-12", weight:"238 kg", type:"cargo" },
  { model:"1.1 Small Flatbed",size:"2500×900×1104mm", motor:"60V 500W-600W", brake:"Front 110 / Rear 130 Drum", tire:"—", weight:"113 kg", type:"cargo" },
  { model:"1.6 Warrior Dump", size:"3050×1180×1350mm", motor:"60V 1200W-1500W", brake:"Front 130 Hand / Rear 160 Drum", tire:"—", weight:"215 kg", type:"cargo" },
  { model:"1.8 Double Girder",size:"3250×1380×1430mm", motor:"60V/72V 1800W-2000W", brake:"Front 180 Disc + Rear Disc", tire:"—", weight:"300 kg", type:"cargo" },
  { model:"1.8 Wolf + Canopy",size:"3200×1400×1860mm", motor:"60V/72V 1800W-2000W", brake:"Front 180 Disc + Rear Disc", tire:"—", weight:"310 kg", type:"cargo" }
];

// 三轮车产品图映射 (裁剪后的干净产品图)
const TRI_IMAGES = [
  "images/products/tc_image7.jpg", "images/products/tc_image10.jpg", "images/products/tc_image8.jpg",
  "images/products/tc_image6.jpg", "images/products/tc_image3.jpg", "images/products/tc_image9.jpg",
  "images/products/tc_image11.jpg", "images/products/tc_image15.jpg", "images/products/tc_image16.jpg",
  "images/products/tc_image19.jpg", "images/products/tc_image17.jpg", "images/products/tc_image20.jpg",
  "images/products/tc_image21.jpg", "images/products/tc_image22.jpg", "images/products/tc_image23.jpg",
  "images/products/tc_image24.jpg", "images/products/tc_image4.jpg", "images/products/tc_image14.jpg",
  "images/products/tc_image12.jpg"
];
