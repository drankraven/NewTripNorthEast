# 东北 7 天自驾环线路书（2026.08.13 – 08.19）

长春出发、长春收尾的 7 天 6 晚油车自驾环线静态网页。3 人成行，全程零回头路。

**在线地址：** https://drankraven.github.io/NewTripNorthEast/

## 路线

```
长春 → 哈尔滨 → 佳木斯 → 鸡西 → 密山 → 兴凯湖 → 横道河子 → 镜泊湖
     → 地下森林火山口 → 珲春 → 延吉 → 长春
```

| 日期 | 行程 | 里程 | 时长 | 过路费 | 住宿 |
| --- | --- | ---: | ---: | ---: | --- |
| D1 8/13 四 | 长春 → 哈尔滨 | 266.5 km | 2.93 h | ¥99 | 哈尔滨 |
| D2 8/14 五 | 哈尔滨 → 佳木斯 | 373.0 km | 3.99 h | ¥152 | 佳木斯 |
| D3 8/15 六 | 佳木斯 → 鸡西 → 密山 → 兴凯湖 | 393.3 km | 5.58 h | ¥153 | 密山 |
| D4 8/16 日 | 密山 → 横道河子 → 镜泊湖 | 394.4 km | 4.05 h | ¥166 | 镜泊湖 |
| D5 8/17 一 | 镜泊湖 · 吊水楼瀑布 + 地下森林 | 219.1 km | 3.31 h | ¥40 | 镜泊湖 |
| D6 8/18 二 | 镜泊湖 → 珲春 → 延吉 | 473.3 km | 5.79 h | ¥180 | 延吉 |
| D7 8/19 三 | 延吉 → 长春 | 423.1 km | 4.57 h | ¥183 | — |
| **合计** | | **2,542.7 km** | **30.2 h** | **¥973** | 6 晚 |

按 7.5–9 L/100km 估算，全程需 191–229 L 汽油。

## 数据来源

- **路线折线 / 里程 / 时长 / 过路费**：高德 Web Service API `direction/driving`（`extensions=all`，按 `steps[].polyline` 拼接真实道路几何）
- **POI 名称 / 评分 / 坐标**：高德 Web Service API `place/text`
- **地图底图**：星图云 GeoVis 矢量瓦片
- **导航链接**：高德 `uri.amap.com/marker` 公共协议

## 技术栈

纯静态页面，无构建步骤，无依赖安装。**根目录即通用路书骨架**，任何行程只需两个文件：

| 文件 | 说明 |
| --- | --- |
| `index.html` | 通用页面骨架（占位文案，DOM id 由渲染器驱动） |
| `app.js` | 纯渲染逻辑：读取 `window.routeData` 生成总览/逐日行程/加油表/Leaflet 地图，不含任何行程内容 |
| `styles.css` | 全部样式 |
| `route-data.js` | 注释版行程数据占位（复制新行程时从这里对照字段） |

所有行程内容集中在各示例的 `route-data.js`（`window.routeData`：trip / routeGeometry / routeDays / fuelPlan / points / colors / pois / poiColors / tileUrl）。

## 本地预览

直接双击打开任意示例的 `index.html`（file:// 即可运行），或起本地服务：

```bash
python -m http.server 8080
# 打开 http://localhost:8080/examples/northeast/
```

## 示例

| 目录 | 说明 |
| --- | --- |
| `index.html` + `route-data.js`（根目录） | 通用骨架本体：占位数据，打开可见空白路书结构 |
| `examples/northeast/` | 东北环线：长春→哈尔滨→佳木斯→鸡西·兴凯湖→横道河子·镜泊湖→瑶春→延吉→长春（7 天，2,542.7 km，29 POI） |
| `examples/lianyungang-linyi-jinan/` | 连云港 → 临沂 → 济南 亲子自驾线（5 天 4 晚，508.6 km，异地还车） |

新建行程：复制任意示例目录（或根目录骨架的 `index.html`+`route-data.js`），只编辑其中的 `route-data.js`（行程数据）与 `index.html`（标题/文案），`app.js` 与 `styles.css` 复用根目录无需改动。

坐标约定：`routeGeometry` 折线用 Leaflet 顺序 `[纬度, 经度]`；`points` / `pois` / `timeline.nav` 用高德顺序 `[经度, 纬度]`。里程 / 时长 / 过路费来自高德实测，不在数据里估算。

## 免责说明

景区开放时间、票价、表演场次、酒店评分与路况均会变化，出发前一天请再次确认。
