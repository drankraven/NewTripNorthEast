/**
 * NewTripNorthEast · 行程数据文件（模板）
 *
 * 用法：复制整个 template/ 目录，改名后只编辑本文件与 index.html。
 * 所有行程内容都在这里，app.js / styles.css 不需要改动。
 *
 * 坐标约定：
 *   - polyline（window.routeData.routeGeometry）使用 Leaflet 顺序 [纬度, 经度]
 *   - 其余所有 points / pois / timeline.nav 使用 [经度, 纬度]（高德顺序）
 * 可用高德 Web 服务 API（geocode / driving v3）批量生成 polyline 与里程数据。
 */
window.routeData = {
  /* ── 行程总览（顶部卡片 + 地图标题） ── */
  trip: {
    title: "示例 · 两城自驾路书",
    subtitle: "出发地 → 途经地 → 返程地",
    dates: "YYYY.MM.DD–MM.DD",
    distanceKm: 0,        // 总里程（含各段之和）
    driveHours: "0.0",    // 总驾驶小时（字符串，可写 "约 9.5–10.5"）
    poiCount: 0,          // 打卡点总数
    days: 0,              // 行程天数（与 routeDays 数量一致）
    tags: ["示例标签"],
  },

  /* ── 各日驾驶路线几何（Leaflet 顺序 [纬度, 经度]） ──
     键 = 天数（字符串 "1"、"2" …），与 routeDays[].day 对应。
     durationHours 保留 2 位小数；tolls 为过路费（元，无则 0）。 */
  routeGeometry: {
    "1": { distanceKm: 0, durationHours: 0, tolls: 0, coordinates: [] },
  },

  /* ── 逐日行程卡片 ──
     day: 天数；date: 日期；title: 当日主题；totalDrive: 里程摘要（自由文本）
     hotel/fuel: 住宿 / 加油（自由文本）
     stops: 经停点数组，如 ["A", "B"]（渲染为 “A · B”），无则省略或留空数组 []
     dayNote: 当日整体提示（亲子/路况/闭馆/行李，显示为“当日提示”）
     timeline: 时间轴条目 { time, what, where, detail, nav:[经度,纬度] 或 [经度,纬度,名称] }
     meals: 自由文本（如 “早：酒店含早 / 午：老渔民海鲜馆 / 晚：盐河巷小吃”） */
  routeDays: [
    {
      day: 1,
      date: "MM.DD 周X",
      title: "当日主题",
      totalDrive: "0 km / 约 0 h / 过路费约 ¥0",
      hotel: "住宿：",
      fuel: "加油：",
      stops: [],
      dayNote: "亲子/路况/闭馆等当日提醒",
      timeline: [
        {
          time: "08:00",
          what: "活动名称",
          where: "地点",
          detail: "要点与注意事项",
          nav: [0, 0],
        },
      ],
      meals: "早： / 午： / 晚：",
    },
  ],

  /* ── 每日驾驶摘要（加油/补能规划表） ── */
  fuelPlan: [
    { day: 1, legs: "起点 → 途经 → 终点", rule: "里程 / 耗时 / 费用" },
  ],

  /* ── 地图城市/区域标记（kind: terminal | city | spot） ── */
  points: [
    { name: "起点", kind: "terminal", coords: [0, 0] },
  ],

  /* ── 各日主色（键 = 天数，最多 7 天） ── */
  colors: {
    1: "#0f766e",
    2: "#b4532a",
    3: "#2f5f8f",
    4: "#b88918",
    5: "#7c3f74",
    6: "#3f7c59",
    7: "#a04545",
  },

  /* ── 实用 POI（kind: fuel | hotel | food） ── */
  pois: [
    // { name: "示例酒店", kind: "hotel", coords: [经度, 纬度], day: 1, detail: "地址 · 备注" },
  ],

  /* ── POI 图标配色（kind → 渲染样式）；新增 pois 时需保证 kind 有对应项 ── */
  poiColors: {
    hotel: { bg: "#2563eb", icon: "宿", label: "住宿" },
    food: { bg: "#dc2626", icon: "食", label: "餐饮" },
    fuel: { bg: "#16a34a", icon: "油", label: "加油" },
  },

  /* ── 地图瓦片（默认高德矢量；可替换为 GeoVis 影像等） ── */
  tileUrl: "https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",
  tileAttribution: "© 高德地图",
};
