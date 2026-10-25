/**
 * NewTripNorthEast · 通用自驾路书渲染器（模板）
 * 纯逻辑：所有行程内容来自 route-data.js 的 window.routeData，本文件无需修改。
 * 依赖：Leaflet 1.9.4（由 index.html 引入）
 */
/* global L */

const TRIP = window.routeData;
const { routeGeometry, routeDays, fuelPlan, points, colors, pois, poiColors } = TRIP;

const days = [...new Set(routeDays.map((r) => r.day))].sort((a, b) => a - b);

function dayColor(day) {
  return colors[day] || "#0f766e";
}

/* 高德导航链接：经度在前；nav = [lng, lat] 或 [lng, lat, name] */
function navLink(nav) {
  if (!Array.isArray(nav) || nav.length < 2) return "";
  const name = nav[2] ? encodeURIComponent(nav[2]) : "终点";
  return `https://uri.amap.com/navigation?to=${nav[0]},${nav[1]},${name}&mode=car&coordinate=gaode`;
}

/* 高德 POI 标记图标 */
function amapMarkerUrl(lng, lat, name) {
  return `https://uri.amap.com/marker?position=${lng},${lat}&name=${encodeURIComponent(name)}&coordinate=gaode&callnative=1`;
}

/* ── 顶部总览 ── */
function renderOverview() {
  const t = TRIP.trip;
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  set("trip-title", t.title);
  set("trip-subtitle", t.subtitle);
  set("trip-dates", t.dates);
  set("stat-distance", `约 ${t.distanceKm} km`);
  set("stat-hours", `约 ${t.driveHours} h`);
  set("stat-days", `${t.days} 天`);
  set("stat-pois", `${t.poiCount}`);
  const tagBox = document.getElementById("stat-tags");
  if (tagBox) {
    tagBox.innerHTML = "";
    (t.tags || []).forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      tagBox.appendChild(li);
    });
  }
}

/* ── 逐日行程 ── */
function renderItinerary() {
  const box = document.getElementById("itinerary");
  if (!box) return;
  routeDays.forEach((r) => {
    const c = dayColor(r.day);
    const card = document.createElement("article");
    card.className = "timeline-card";
    card.dataset.day = r.day;

    const rows = [];
    if (r.totalDrive) rows.push(["驾车", r.totalDrive]);
    if (r.hotel) rows.push(["住宿", r.hotel]);
    if (r.fuel) rows.push(["加油", r.fuel]);
    if (r.stops && r.stops.length) rows.push(["经停", r.stops.join(" · ")]);
    if (r.meals) rows.push(["餐饮", r.meals]);
    if (r.dayNote) rows.push(["当日提示", r.dayNote]);

    card.innerHTML = `
      <div class="day-banner" style="border-top:6px solid ${c}">
        <span>Day ${r.day}</span>
        <strong>${r.date} · ${r.title}</strong>
      </div>
      <ol class="timeline">
        ${r.timeline
          .map(
            (t) => `
        <li class="timeline-item">
          <time>${t.time}</time>
          <div>
            <h4>${t.what}</h4>
            <p>${t.where}${t.detail ? `。${t.detail}` : ""}${
              t.nav && t.nav.length >= 2
                ? ` <a href="${navLink(t.nav)}" target="_blank" rel="noreferrer">导航</a>`
                : ""
            }</p>
          </div>
        </li>`
          )
          .join("")}
      </ol>
      ${rows
        .map(([label, text]) => `<p class="tip-row"><strong>${label}</strong>：${text}</p>`)
        .join("")}`;
    box.appendChild(card);
  });
}

/* ── 加油/补能规划 ── */
function renderFuelPlan() {
  const box = document.getElementById("fuel-plan");
  if (!box) return;
  const table = document.createElement("table");
  table.innerHTML = `
    <caption>每日驾驶与补给规划</caption>
    <thead><tr><th>日程</th><th>路段</th><th>里程与费用</th></tr></thead>
    <tbody>
      ${fuelPlan
        .map(
          (f) => {
            const label = /^\d+$/.test(String(f.day)) ? `Day ${f.day}` : String(f.day);
            return `<tr><td>${label}</td><td>${f.legs}</td><td>${f.rule}</td></tr>`;
          }
        )
        .join("")}
    </tbody>`;
  box.appendChild(table);
}

/* ── Leaflet 地图 ── */
function initLeafletMap() {
  const status = document.getElementById("status");
  if (!window.L) {
    if (status) status.textContent = "地图库加载失败";
    return;
  }
  const map = L.map("leaflet-map", { zoomControl: true });
  const vec = L.tileLayer(TRIP.tileUrl, {
    attribution: TRIP.tileAttribution,
    maxZoom: 18,
  }).addTo(map);
  vec.on("load", () => status && (status.textContent = "地图已就绪"));
  vec.on("tileerror", () => status && (status.textContent = "在线地图加载异常，可下拉查看文字行程"));

  const routeLayers = [];
  const allCoords = [];

  days.forEach((d) => {
    const g = routeGeometry[String(d)];
    if (!g || !Array.isArray(g.coordinates) || !g.coordinates.length) return;
    const layer = L.polyline(g.coordinates, {
      color: dayColor(d),
      weight: 5,
      opacity: 0.85,
    }).addTo(map);
    layer.bindTooltip(`Day ${d} · ${g.distanceKm} km · ${g.durationHours} h`, { sticky: true });
    routeLayers.push({ day: d, layer });
    allCoords.push(...g.coordinates);
  });

  const markers = L.layerGroup().addTo(map);
  points.forEach((p) => {
    const icon = L.divIcon({
      className: "",
      html: `<div style="background:${dayColor(p.days ? p.days[0] : 1)};color:#fff;padding:2px 7px;border-radius:12px;font-size:11px;font-weight:700;white-space:nowrap;box-shadow:0 1px 4px rgba(0,0,0,.25)">${p.name}</div>`,
      iconSize: [0, 0],
    });
    L.marker([p.coords[1], p.coords[0]], { icon }).addTo(markers);
    allCoords.push([p.coords[1], p.coords[0]]);
  });

  if (allCoords.length) map.fitBounds(allCoords, { padding: [36, 36] });
  else map.setView([35, 116], 6);

  /* 日期筛选 */
  const filterBox = document.getElementById("day-filter");
  if (filterBox) {
    days.forEach((d) => {
      const btn = document.createElement("button");
      btn.className = "filter-button";
      btn.textContent = `Day ${d}`;
      btn.style.borderBottomColor = dayColor(d);
      btn.addEventListener("click", () => {
        routeLayers.forEach(({ day, layer }) => {
          if (day === d) map.addLayer(layer);
          else map.removeLayer(layer);
        });
        const entry = routeLayers.find((r) => r.day === d);
        if (entry) map.fitBounds(entry.layer.getBounds(), { padding: [36, 36] });
      });
      filterBox.appendChild(btn);
    });
    const all = document.createElement("button");
    all.className = "filter-button";
    all.textContent = "全程";
    all.style.borderBottomColor = "#374151";
    all.addEventListener("click", () => {
      routeLayers.forEach(({ layer }) => map.addLayer(layer));
      if (allCoords.length) map.fitBounds(allCoords, { padding: [36, 36] });
    });
    filterBox.appendChild(all);
  }

  /* POI 图例开关 */
  const legendBox = document.getElementById("poi-legend");
  const poiLayers = {};
  pois.forEach((p) => {
    const meta = poiColors[p.kind];
    if (!meta) return;
    const icon = L.divIcon({
      className: "",
      html: `<div style="background:${meta.bg};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 4px rgba(0,0,0,.25)">${meta.icon}</div>`,
      iconSize: [22, 22],
    });
    const m = L.marker([p.coords[1], p.coords[0]], { icon });
    m.bindPopup(
      `<b>${p.name}</b>${p.day ? `（Day ${p.day}）` : ""}<br><a href="${amapMarkerUrl(
        p.coords[0],
        p.coords[1],
        p.name
      )}" target="_blank" rel="noreferrer">高德打开</a>`
    );
    poiLayers[p.kind] = poiLayers[p.kind] || [];
    poiLayers[p.kind].push(m);
  });
  Object.entries(poiLayers).forEach(([kind, ms]) => {
    ms.forEach((m) => m.addTo(map));
    if (legendBox) {
      const btn = document.createElement("button");
      btn.className = "poi-toggle";
      btn.textContent = `${poiColors[kind].icon} ${poiColors[kind].label}`;
      btn.addEventListener("click", () => {
        const active = map.hasLayer(ms[0]);
        ms.forEach((m) => (active ? map.removeLayer(m) : m.addTo(map)));
        btn.classList.toggle("is-off", active);
      });
      legendBox.appendChild(btn);
    }
  });
}

renderOverview();
renderItinerary();
renderFuelPlan();
initLeafletMap();
