import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BarChart3,
  Bell,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Grid2X2,
  Heart,
  Pencil,
  Search,
  Trash2,
  Upload,
  UserCircle,
  Zap,
} from "lucide-react";
import catRealScene from "./assets/works/cat-real-scene.png";
import catRealCutout from "./assets/works/cat-clean-cutout.png";
import frogRealScene from "./assets/works/frog-real-scene.png";
import frogRealCutout from "./assets/works/frog-clean-cutout.png";
import bunnyRealScene from "./assets/works/bunny-real-scene.png";
import bunnyRealCutout from "./assets/works/bunny-clean-cutout.png";
import bearRealScene from "./assets/works/bear-real-scene.png";
import bearRealCutout from "./assets/works/bear-clean-cutout.png";
import penguinRealScene from "./assets/works/penguin-real-scene.png";
import penguinRealCutout from "./assets/works/penguin-clean-cutout.png";
import dragonRealScene from "./assets/works/dragon-real-scene.png";
import dragonRealCutout from "./assets/works/dragon-clean-cutout.png";
import jellyRealScene from "./assets/works/jelly-real-scene.png";
import jellyRealCutout from "./assets/works/jelly-clean-cutout.png";
import chickRealScene from "./assets/works/chick-real-scene.png";
import chickRealCutout from "./assets/works/chick-clean-cutout.png";
import monkeyRealScene from "./assets/works/monkey-real-scene.png";
import monkeyRealCutout from "./assets/works/monkey-clean-cutout.png";
import roosterRealScene from "./assets/works/rooster-real-scene.png";
import roosterRealCutout from "./assets/works/rooster-clean-cutout.png";
import foxRealScene from "./assets/works/fox-real-scene.png";
import foxRealCutout from "./assets/works/fox-clean-cutout.png";
import pandaRealScene from "./assets/works/panda-real-scene.png";
import pandaRealCutout from "./assets/works/panda-clean-cutout.png";
import sealRealScene from "./assets/works/seal-real-scene.png";
import sealRealCutout from "./assets/works/seal-clean-cutout.png";
import squirrelRealScene from "./assets/works/squirrel-real-scene.png";
import squirrelRealCutout from "./assets/works/squirrel-clean-cutout.png";
import octopusRealScene from "./assets/works/octopus-real-scene.png";
import octopusRealCutout from "./assets/works/octopus-clean-cutout.png";
import whaleRealScene from "./assets/works/whale-real-scene.png";
import whaleRealCutout from "./assets/works/whale-clean-cutout.png";
import cakeRealScene from "./assets/works/cake-real-scene.png";
import cakeRealCutout from "./assets/works/cake-clean-cutout.png";
import mushroomRealScene from "./assets/works/mushroom-real-scene.png";
import mushroomRealCutout from "./assets/works/mushroom-clean-cutout.png";
import alpacaRealScene from "./assets/works/alpaca-real-scene.png";
import alpacaRealCutout from "./assets/works/alpaca-clean-cutout.png";
import moonRealScene from "./assets/works/moon-real-scene.png";
import moonRealCutout from "./assets/works/moon-clean-cutout.png";
import "./styles.css";

const works = [
  { id: "frog", month: "2025-05", day: 2, name: "青团蛙", date: "2025年5月2日", type: "自然系", rarity: "优秀", level: 7, form: "森林形态", power: 2120, likes: 11, progress: 24, pieces: 220, edge: "white", scene: frogRealScene, cutout: frogRealCutout, thumb: frogRealCutout },
  { id: "bunny", month: "2025-05", day: 20, name: "草莓兔", date: "2025年5月20日", type: "甜心系", rarity: "优秀", level: 8, form: "软糖形态", power: 2450, likes: 14, progress: 28, pieces: 260, edge: "white", scene: bunnyRealScene, cutout: bunnyRealCutout, thumb: bunnyRealCutout },
  { id: "bear", month: "2025-05", day: 7, name: "奶油小熊", date: "2025年5月7日", type: "暖阳系", rarity: "稀有", level: 9, form: "暖阳形态", power: 2980, likes: 15, progress: 31, pieces: 300, edge: "gold", scene: bearRealScene, cutout: bearRealCutout, thumb: bearRealCutout },
  { id: "penguin", month: "2025-05", day: 9, name: "海盐企鹅", date: "2025年5月9日", type: "冰晶系", rarity: "稀有", level: 12, form: "蓝闪形态", power: 4380, likes: 18, progress: 49, pieces: 330, edge: "gold", scene: penguinRealScene, cutout: penguinRealCutout, thumb: penguinRealCutout },
  { id: "monkey", month: "2025-05", day: 12, name: "栗子猴", date: "2025年5月12日", type: "活力系", rarity: "普通", level: 10, form: "淘气形态", power: 3180, likes: 13, progress: 36, pieces: 310, edge: "purple", scene: monkeyRealScene, cutout: monkeyRealCutout, thumb: monkeyRealCutout },
  { id: "chick", month: "2025-05", day: 20, name: "太阳团子", date: "2025年5月20日", type: "光系", rarity: "普通", level: 11, form: "发光形态", power: 3360, likes: 16, progress: 40, pieces: 280, edge: "purple", scene: chickRealScene, cutout: chickRealCutout, thumb: chickRealCutout },
  { id: "rooster", month: "2025-05", day: 17, name: "小白鸡", date: "2025年5月17日", type: "守护系", rarity: "普通", level: 9, form: "清晨形态", power: 2860, likes: 12, progress: 33, pieces: 240, edge: "white", scene: roosterRealScene, cutout: roosterRealCutout, thumb: roosterRealCutout },
  { id: "cat", month: "2025-05", day: 20, name: "草莓布丁喵", date: "2025年5月20日", type: "甜心系", rarity: "史诗", level: 18, form: "紫闪形态", power: 8650, likes: 23, progress: 72, pieces: 620, edge: "rainbow", scene: catRealScene, cutout: catRealCutout, thumb: catRealCutout },
  { id: "dragon", month: "2025-05", day: 26, name: "葡萄龙", date: "2025年5月26日", type: "幻彩系", rarity: "传说", level: 18, form: "金闪形态", power: 8650, likes: 29, progress: 72, pieces: 710, edge: "rainbow", scene: dragonRealScene, cutout: dragonRealCutout, thumb: dragonRealCutout },
  { id: "jelly", month: "2025-05", day: 29, name: "葡萄团子", date: "2025年5月29日", type: "果冻系", rarity: "稀有", level: 14, form: "果冻形态", power: 5120, likes: 20, progress: 58, pieces: 410, edge: "gold", scene: jellyRealScene, cutout: jellyRealCutout, thumb: jellyRealCutout },
  { id: "fox", month: "2025-04", day: 3, name: "枫糖小狐", date: "2025年4月3日", type: "暖阳系", rarity: "稀有", level: 13, form: "灵巧形态", power: 4980, likes: 18, progress: 46, pieces: 430, edge: "gold", scene: foxRealScene, cutout: foxRealCutout, thumb: foxRealCutout },
  { id: "panda", month: "2025-04", day: 8, name: "竹叶熊猫", date: "2025年4月8日", type: "自然系", rarity: "优秀", level: 10, form: "圆滚形态", power: 3260, likes: 14, progress: 34, pieces: 310, edge: "white", scene: pandaRealScene, cutout: pandaRealCutout, thumb: pandaRealCutout },
  { id: "seal", month: "2025-04", day: 13, name: "冰糖海豹", date: "2025年4月13日", type: "冰晶系", rarity: "普通", level: 8, form: "软冰形态", power: 2410, likes: 12, progress: 26, pieces: 260, edge: "white", scene: sealRealScene, cutout: sealRealCutout, thumb: sealRealCutout },
  { id: "squirrel", month: "2025-04", day: 21, name: "栗子松鼠", date: "2025年4月21日", type: "活力系", rarity: "稀有", level: 15, form: "蓄能形态", power: 5860, likes: 21, progress: 55, pieces: 520, edge: "gold", scene: squirrelRealScene, cutout: squirrelRealCutout, thumb: squirrelRealCutout },
  { id: "octopus", month: "2025-04", day: 21, name: "珊瑚章鱼", date: "2025年4月21日", type: "海盐系", rarity: "优秀", level: 12, form: "摇摆形态", power: 4120, likes: 19, progress: 43, pieces: 380, edge: "purple", scene: octopusRealScene, cutout: octopusRealCutout, thumb: octopusRealCutout },
  { id: "whale", month: "2025-03", day: 5, name: "喷水鲸", date: "2025年3月5日", type: "海盐系", rarity: "优秀", level: 11, form: "蓝闪形态", power: 3720, likes: 16, progress: 39, pieces: 350, edge: "purple", scene: whaleRealScene, cutout: whaleRealCutout, thumb: whaleRealCutout },
  { id: "cake", month: "2025-03", day: 11, name: "草莓蛋糕", date: "2025年3月11日", type: "甜心系", rarity: "史诗", level: 14, form: "紫闪形态", power: 5380, likes: 25, progress: 52, pieces: 470, edge: "gold", scene: cakeRealScene, cutout: cakeRealCutout, thumb: cakeRealCutout },
  { id: "mushroom", month: "2025-03", day: 18, name: "蘑菇童子", date: "2025年3月18日", type: "森林系", rarity: "传说", level: 17, form: "金闪形态", power: 7920, likes: 31, progress: 68, pieces: 640, edge: "rainbow", scene: mushroomRealScene, cutout: mushroomRealCutout, thumb: mushroomRealCutout },
  { id: "alpaca", month: "2025-03", day: 24, name: "围巾羊驼", date: "2025年3月24日", type: "暖阳系", rarity: "普通", level: 9, form: "毛绒形态", power: 2880, likes: 13, progress: 32, pieces: 290, edge: "white", scene: alpacaRealScene, cutout: alpacaRealCutout, thumb: alpacaRealCutout },
  { id: "moon", month: "2025-03", day: 24, name: "抱星彩月", date: "2025年3月24日", type: "幻彩系", rarity: "传说", level: 18, form: "月光形态", power: 8420, likes: 34, progress: 70, pieces: 690, edge: "rainbow", scene: moonRealScene, cutout: moonRealCutout, thumb: moonRealCutout },
];
const tabs = [
  { id: "home", label: "首页", icon: CalendarDays },
  { id: "collection", label: "收藏", icon: Grid2X2 },
  { id: "stats", label: "统计", icon: BarChart3 },
  { id: "profile", label: "我的", icon: UserCircle },
];

const demoMonths = ["2025-03", "2025-04", "2025-05"];
const collectionMilestoneTarget = 100;
const pendingCutoutIds = new Set([]);

function getMonthLabel(month) {
  const [year, monthText] = month.split("-");
  return `${year}年${Number(monthText)}月`;
}

function formatDateLabel(date) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function toMonthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function formatMonthLabel(month) {
  const [year, monthText] = month.split("-");
  return `${year}年${Number(monthText)}月`;
}

function evaluateWorkStats({ pieces, colorCount = 4, hasShiny = false, isLegend = false, streakDays = 0 }) {
  const complexity = Math.min(2200, Math.round(pieces * 7.2));
  const colorBonus = Math.min(900, colorCount * 120);
  const shinyBonus = hasShiny ? 900 : 0;
  const legendBonus = isLegend ? 1300 : 0;
  const streakBonus = Math.min(600, streakDays * 40);
  const power = Math.round((1100 + complexity + colorBonus + shinyBonus + legendBonus + streakBonus) / 10) * 10;
  const rarity =
    power >= 7600 ? "传说" :
    power >= 5600 ? "史诗" :
    power >= 3600 ? "稀有" :
    power >= 2400 ? "优秀" :
    "普通";

  return {
    power,
    rarity,
    level: Math.max(1, Math.min(30, Math.round(power / 420))),
    progress: Math.max(8, Math.min(92, Math.round(power / 110))),
  };
}

function createUploadedWork(file, url, index) {
  const today = new Date();
  const pieces = Math.max(180, Math.min(680, Math.round(file.size / 4200)));
  const stats = evaluateWorkStats({ pieces, colorCount: 4, streakDays: 1 });
  return {
    id: `upload-${today.getTime()}-${index}`,
    month: toMonthKey(today),
    day: today.getDate(),
    name: "新豆灵",
    date: formatDateLabel(today),
    type: "自制系",
    rarity: stats.rarity,
    level: stats.level,
    form: "新生形态",
    power: stats.power,
    likes: 0,
    progress: stats.progress,
    pieces,
    edge: "white",
    scene: url,
    cutout: url,
    thumb: url,
    uploaded: true,
    cutoutStatus: "processing",
    sourceName: file.name,
    sourceSizeKb: Math.max(1, Math.round(file.size / 1024)),
  };
}

async function extractCutoutFromImage(file, fallbackUrl) {
  try {
    const { removeBackground } = await import("@imgly/background-removal");
    const blob = await removeBackground(file, {
      model: "isnet_quint8",
      device: "cpu",
      output: {
        format: "image/png",
        quality: 0.95,
        type: "foreground",
      },
    });
    return await trimTransparentCutout(URL.createObjectURL(blob));
  } catch (error) {
    return fallbackCutoutFromImage(fallbackUrl);
  }
}

function trimTransparentCutout(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const source = document.createElement("canvas");
      const context = source.getContext("2d", { willReadFrequently: true });
      source.width = image.naturalWidth;
      source.height = image.naturalHeight;
      context.drawImage(image, 0, 0);

      const frame = context.getImageData(0, 0, source.width, source.height);
      const { data, width, height } = frame;
      let minX = width;
      let minY = height;
      let maxX = 0;
      let maxY = 0;
      let subjectCount = 0;

      for (let index = 0; index < width * height; index += 1) {
        const alpha = data[index * 4 + 3];
        if (alpha > 18) {
          const x = index % width;
          const y = Math.floor(index / width);
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
          subjectCount += 1;
        }
      }

      const imageArea = width * height;
      if (subjectCount < imageArea * 0.015 || subjectCount > imageArea * 0.88) {
        reject(new Error("cutout review failed"));
        return;
      }

      const padding = Math.round(Math.max(width, height) * 0.035);
      const cropX = Math.max(0, minX - padding);
      const cropY = Math.max(0, minY - padding);
      const cropW = Math.min(width - cropX, maxX - minX + 1 + padding * 2);
      const cropH = Math.min(height - cropY, maxY - minY + 1 + padding * 2);
      const output = document.createElement("canvas");
      output.width = Math.max(1, cropW);
      output.height = Math.max(1, cropH);
      output.getContext("2d").drawImage(source, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
      output.toBlob((blob) => {
        if (!blob) {
          reject(new Error("cutout export failed"));
          return;
        }
        resolve(URL.createObjectURL(blob));
      }, "image/png");
    };
    image.onerror = reject;
    image.src = url;
  });
}

function fallbackCutoutFromImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      const source = document.createElement("canvas");
      const context = source.getContext("2d", { willReadFrequently: true });
      const maxSize = 900;
      const scale = Math.min(1, maxSize / Math.max(image.naturalWidth, image.naturalHeight));
      source.width = Math.max(1, Math.round(image.naturalWidth * scale));
      source.height = Math.max(1, Math.round(image.naturalHeight * scale));
      context.drawImage(image, 0, 0, source.width, source.height);

      const frame = context.getImageData(0, 0, source.width, source.height);
      const { data, width, height } = frame;
      const corners = [
        [0, 0],
        [width - 1, 0],
        [0, height - 1],
        [width - 1, height - 1],
      ].map(([x, y]) => {
        const offset = (y * width + x) * 4;
        return [data[offset], data[offset + 1], data[offset + 2]];
      });
      const bg = corners.reduce((sum, color) => sum.map((value, index) => value + color[index]), [0, 0, 0]).map((value) => value / corners.length);
      const mask = new Uint8Array(width * height);

      for (let index = 0; index < width * height; index += 1) {
        const offset = index * 4;
        const dr = data[offset] - bg[0];
        const dg = data[offset + 1] - bg[1];
        const db = data[offset + 2] - bg[2];
        const distance = Math.sqrt(dr * dr + dg * dg + db * db);
        const saturation = Math.max(data[offset], data[offset + 1], data[offset + 2]) - Math.min(data[offset], data[offset + 1], data[offset + 2]);
        mask[index] = distance > 42 || saturation > 38 ? 1 : 0;
      }

      const queue = [];
      const pushBackground = (x, y) => {
        if (x < 0 || y < 0 || x >= width || y >= height) return;
        const index = y * width + x;
        if (mask[index] !== 0) return;
        mask[index] = 2;
        queue.push(index);
      };
      for (let x = 0; x < width; x += 1) {
        pushBackground(x, 0);
        pushBackground(x, height - 1);
      }
      for (let y = 0; y < height; y += 1) {
        pushBackground(0, y);
        pushBackground(width - 1, y);
      }
      while (queue.length) {
        const index = queue.shift();
        const x = index % width;
        const y = Math.floor(index / width);
        pushBackground(x + 1, y);
        pushBackground(x - 1, y);
        pushBackground(x, y + 1);
        pushBackground(x, y - 1);
      }

      let minX = width;
      let minY = height;
      let maxX = 0;
      let maxY = 0;
      let subjectCount = 0;
      for (let index = 0; index < width * height; index += 1) {
        const subject = mask[index] !== 2;
        const offset = index * 4;
        data[offset + 3] = subject ? data[offset + 3] : 0;
        if (subject) {
          const x = index % width;
          const y = Math.floor(index / width);
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
          subjectCount += 1;
        }
      }
      if (subjectCount < width * height * 0.02) {
        reject(new Error("cutout failed"));
        return;
      }

      context.putImageData(frame, 0, 0);
      const padding = Math.round(Math.max(width, height) * 0.04);
      const cropX = Math.max(0, minX - padding);
      const cropY = Math.max(0, minY - padding);
      const cropW = Math.min(width - cropX, maxX - minX + padding * 2);
      const cropH = Math.min(height - cropY, maxY - minY + padding * 2);
      const output = document.createElement("canvas");
      output.width = Math.max(1, cropW);
      output.height = Math.max(1, cropH);
      output.getContext("2d").drawImage(source, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
      output.toBlob((blob) => {
        if (!blob) {
          reject(new Error("cutout export failed"));
          return;
        }
        resolve(URL.createObjectURL(blob));
      }, "image/png");
    };
    image.onerror = reject;
    image.src = url;
  });
}

function getRarityEdge(work) {
  if (work.rarity === "传说") return "legend";
  if (work.rarity === "史诗") return "epic";
  if (work.rarity === "稀有") return "gold";
  if (work.rarity === "优秀") return "silver";
  return "white";
}

function isShiny(work) {
  return ["闪光", "蓝闪", "紫闪", "金闪"].some((tag) => work.form.includes(tag));
}

function getCutoutClass(work, extra = "") {
  return `rarity-cut edge-${getRarityEdge(work)} ${isShiny(work) ? "shiny-cut" : ""} ${work.uploaded ? "uploaded-cutout" : ""} ${extra}`.trim();
}

function getShinyTone(work) {
  if (!isShiny(work)) return "";
  if (work.form.includes("蓝闪")) return "blue";
  if (work.form.includes("紫闪")) return "purple";
  if (work.form.includes("金闪")) return "gold";
  if (work.rarity === "传说") return "gold";
  if (work.rarity === "史诗") return "purple";
  return "blue";
}

function getCollectionCardClass(work, selectedId) {
  const shinyTone = getShinyTone(work);
  const hasNormalFrame = !isShiny(work) && ["稀有", "史诗"].includes(work.rarity);
  return [
    "collection-card",
    work.id === selectedId ? "selected" : "",
    hasNormalFrame ? "normal-frame-card" : "",
    work.rarity === "传说" ? "legend-card" : "",
    shinyTone ? `shiny-card shiny-${shinyTone}` : "",
  ].filter(Boolean).join(" ");
}

function getCollectionType(work) {
  const shinyTone = getShinyTone(work);
  if (work.rarity === "传说" && shinyTone === "gold") return "传说金闪";
  if (work.rarity === "传说") return "传说彩框";
  if (shinyTone === "gold") return "金闪";
  if (shinyTone === "purple") return "紫闪";
  if (shinyTone === "blue") return "蓝闪";
  if (["稀有", "史诗"].includes(work.rarity)) return "普通边框";
  return "无光无框";
}

function getWorkAssetStatus(work) {
  if (!work.uploaded) return "演示作品";
  if (work.cutoutStatus === "ready") return "原图已保留 · 抠图已生成";
  if (work.cutoutStatus === "processing") return "原图已保留 · 正在抠图";
  return "原图已保留 · 抠图待复查";
}

function getWorkTraitRows(work) {
  return [
    { label: "形态", value: work.form },
    { label: "系列", value: work.type },
    { label: "拼豆数", value: `${work.pieces}` },
    { label: "收录日", value: work.date },
  ];
}

function needsCutoutReview(work) {
  if (work.uploaded) return work.cutoutStatus !== "ready";
  return pendingCutoutIds.has(work.id);
}

function getDayGroups(month, sourceWorks = works) {
  return sourceWorks
    .filter((work) => work.month === month)
    .reduce((groups, work) => {
      const list = groups.get(work.day) ?? [];
      list.push(work);
      groups.set(work.day, list);
      return groups;
    }, new Map());
}

function getCalendarCells(month) {
  const [year, monthText] = month.split("-").map(Number);
  const first = new Date(year, monthText - 1, 1);
  const start = new Date(year, monthText - 1, 1 - first.getDay());
  return Array.from({ length: 35 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return {
      day: date.getDate(),
      inMonth: date.getMonth() === monthText - 1,
      key: date.toISOString(),
    };
  });
}

function cycleWork(list, currentId, step) {
  if (list.length < 2) return currentId;
  const index = Math.max(0, list.findIndex((item) => item.id === currentId));
  return list[(index + step + list.length) % list.length].id;
}

function useSwipePager(onPrev, onNext) {
  const startX = useRef(null);
  return {
    onPointerDown: (event) => {
      startX.current = event.clientX;
    },
    onPointerUp: (event) => {
      if (startX.current === null) return;
      const delta = event.clientX - startX.current;
      startX.current = null;
      if (Math.abs(delta) < 36) return;
      if (delta < 0) onNext();
      if (delta > 0) onPrev();
    },
  };
}

function Header({ title = "BeanDex", onNotify, onSearch }) {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <div>
        <button aria-label="搜索" onClick={onSearch} type="button"><Search size={26} /></button>
        <button aria-label="通知" onClick={onNotify} type="button"><Bell size={25} /></button>
      </div>
    </header>
  );
}

function UploadEntry({ draft, onUpload }) {
  return (
    <button className="upload-entry" onClick={onUpload} type="button">
      <span><Upload size={22} /></span>
      <div>
        <strong>{draft ? "继续上传拼豆成品" : "上传拼豆成品"}</strong>
        <p>{draft ? "上一张已收录，可查看原图和抠图" : "保留原图，生成抠图豆灵"}</p>
      </div>
      {draft && <img alt="已上传预览" src={draft} />}
    </button>
  );
}

function CalendarPanel({ dayGroups, month, onMonthNext, onMonthPrev, revealedDays, selectedId, onSelect }) {
  const days = getCalendarCells(month);
  return (
    <section className="calendar-section" aria-label={`${getMonthLabel(month)}成品日历`}>
      <div className="calendar-head">
        <h2>{getMonthLabel(month)}</h2>
        <div className="month-buttons">
          <button aria-label="上个月" onClick={onMonthPrev} type="button"><ChevronLeft size={22} /></button>
          <button aria-label="下个月" onClick={onMonthNext} type="button"><ChevronRight size={22} /></button>
        </div>
      </div>
      <div className="week-labels">
        {["日", "一", "二", "三", "四", "五", "六"].map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      <div className="calendar-grid">
        {days.map(({ day, inMonth, key }, index) => {
          const group = inMonth ? dayGroups.get(day) : null;
          const isRevealed = group && revealedDays.has(`${month}-${day}`);
          return (
            <button
              className={`calendar-day ${!inMonth ? "muted" : ""} ${isRevealed ? "has-work" : ""} ${
                isRevealed && group?.some((item) => item.id === selectedId) ? "selected" : ""
              } ${isRevealed && group?.length > 1 ? "stacked" : ""}`}
              data-count={isRevealed && group?.length > 1 ? group.length : undefined}
              data-date-day={inMonth ? `${month}-${day}` : undefined}
              data-testid={group ? `work-day-${day}` : `empty-day-${index}`}
              disabled={!group || !isRevealed}
              key={key}
              onClick={() => group && onSelect(group[0].id)}
              type="button"
            >
              <span>{day}</span>
              {isRevealed && group && (
                <div className="day-stack">
                  {group.slice(0, 3).map((item, stackIndex) => (
                    <img
                      alt={item.name}
                      className={needsCutoutReview(item) ? "photo-thumb pending-cutout-thumb" : getCutoutClass(item)}
                      key={item.id}
                      src={needsCutoutReview(item) ? item.scene : item.thumb}
                      style={{
                        "--stack-index": stackIndex,
                        "--stack-offset": stackIndex - (Math.min(group.length, 3) - 1) / 2,
                      }}
                    />
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function HomeEntryRun({ catalogWorks, month, onLand }) {
  const [sprites, setSprites] = useState([]);

  useEffect(() => {
    let cancelled = false;
    const timers = [];
    const frame = window.requestAnimationFrame(() => {
      if (cancelled) return;
      const monthWorks = catalogWorks.filter((work) => work.month === month);
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const starts = [
        (index) => ({ x: -72, y: 104 + index * 34 }),
        (index) => ({ x: vw + 28, y: 128 + index * 31 }),
        (index) => ({ x: 54 + index * 42, y: -72 }),
        (index) => ({ x: vw - 86 - index * 38, y: vh + 28 }),
      ];

      setSprites(
        monthWorks.map((work, index) => {
          const target = document.querySelector(`[data-date-day="${work.month}-${work.day}"]`);
          const rect = target?.getBoundingClientRect();
          const start = starts[index % starts.length](index);
          const modes = ["roll", "hop", "flip", "bounce"];
          const toX = (rect?.left ?? vw * 0.5) + (rect?.width ?? 48) / 2 - 22;
          const toY = (rect?.top ?? vh * 0.5) + (rect?.height ?? 48) / 2 - 22;
          return {
            delay: `${index * 0.08}s`,
            fromX: `${start.x}px`,
            fromY: `${start.y}px`,
            id: `${month}-${work.id}`,
            lockX: `${toX}px`,
            lockY: `${toY - 72}px`,
            midX: `${toX + (start.x < toX ? -72 : 72)}px`,
            midY: `${toY - 112}px`,
            mode: modes[index % modes.length],
            toX: `${toX}px`,
            toY: `${toY}px`,
            work,
          };
        })
      );

      monthWorks.forEach((work, index) => {
        timers.push(window.setTimeout(() => {
          if (!cancelled) onLand(`${work.month}-${work.day}`);
        }, 1680 + index * 80));
      });
    });
    const timer = window.setTimeout(() => {
      if (!cancelled) setSprites([]);
    }, 3050);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      timers.forEach((item) => window.clearTimeout(item));
    };
  }, [catalogWorks, month, onLand]);

  if (!sprites.length) return null;

  return (
    <div className="entry-runner-layer" aria-hidden="true">
      {sprites.map((sprite) => (
        <React.Fragment key={sprite.id}>
          <span
            className="entry-target"
            style={{
              "--entry-delay": sprite.delay,
              "--to-x": sprite.toX,
              "--to-y": sprite.toY,
            }}
          />
          <img
            alt=""
            className={`entry-runner entry-${sprite.mode} rarity-cut edge-${getRarityEdge(sprite.work)}`}
            src={sprite.work.cutout}
            style={{
              "--entry-delay": sprite.delay,
              "--from-x": sprite.fromX,
              "--from-y": sprite.fromY,
              "--lock-x": sprite.lockX,
              "--lock-y": sprite.lockY,
              "--mid-x": sprite.midX,
              "--mid-y": sprite.midY,
              "--to-x": sprite.toX,
              "--to-y": sprite.toY,
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

function PixiMeshSpirit({ className, motionDelay, motionRange, motionSpeed, motionTilt, src, workName }) {
  const hostRef = useRef(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    let app = null;
    let destroyed = false;
    let cleanup = () => {};

    async function mountMesh() {
      try {
        const host = hostRef.current;
        if (!host) return;

        const { Application, Assets, MeshPlane } = await import("pixi.js");
        app = new Application();
        await app.init({
          width: 166,
          height: 166,
          backgroundAlpha: 0,
          antialias: true,
          autoDensity: true,
          resolution: Math.min(window.devicePixelRatio || 1, 2),
        });
        if (destroyed || !hostRef.current) {
          app.destroy({ removeView: true }, false);
          return;
        }

        host.replaceChildren(app.canvas);
        const texture = Assets.get(src) || await Assets.load(src);
        if (destroyed) return;

        const plane = new MeshPlane({ texture, verticesX: 8, verticesY: 8 });
        const scale = Math.min(148 / texture.width, 148 / texture.height);
        plane.scale.set(scale);
        plane.pivot.set(texture.width / 2, texture.height / 2);
        plane.position.set(83, 86);
        app.stage.addChild(plane);

        const { buffer } = plane.geometry.getAttribute("aPosition");
        const base = Float32Array.from(buffer.data);
        const range = Number.parseFloat(motionRange) || 12;
        const speed = Number.parseFloat(motionSpeed) || 2.4;
        const tilt = Number.parseFloat(motionTilt) || 3;
        let time = Number.parseFloat(motionDelay) || 0;

        const tick = (ticker) => {
          time += (ticker.deltaMS || 16.67) / 1000;
          const phase = (time / speed) * Math.PI * 2;
          const data = buffer.data;
          for (let index = 0; index < data.length; index += 2) {
            const x = base[index];
            const y = base[index + 1];
            const nx = x / texture.width;
            const ny = y / texture.height;
            const body = Math.sin(phase + ny * 1.9) * range * 0.13;
            const foot = Math.sin(phase * 1.8 + nx * Math.PI) * range * 0.12 * Math.max(0, ny - 0.62);
            const ear = Math.sin(phase * 1.25 + nx * 2.2) * range * 0.1 * Math.max(0, 0.34 - ny);
            data[index] = x + body + foot;
            data[index + 1] = y + Math.sin(phase + nx * Math.PI) * range * 0.08 + ear;
          }
          plane.rotation = Math.sin(phase) * (tilt * Math.PI / 180) * 0.36;
          plane.y = 86 + Math.sin(phase * 2) * 2;
          buffer.update();
        };

        app.ticker.add(tick);
        cleanup = () => app?.ticker.remove(tick);
      } catch {
        setFallback(true);
      }
    }

    mountMesh();

    return () => {
      destroyed = true;
      cleanup();
      app?.destroy({ removeView: true }, false);
    };
  }, [motionDelay, motionRange, motionSpeed, motionTilt, src]);

  if (fallback) {
    return (
      <img
        alt={`${workName} 抠图动效`}
        className={className}
        src={src}
        style={{
          "--motion-delay": motionDelay,
          "--motion-range": motionRange,
          "--motion-speed": motionSpeed,
          "--motion-tilt": motionTilt,
        }}
      />
    );
  }

  return <div aria-label={`${workName} mesh 效果`} className={`${className} pixi-mesh-spirit`} ref={hostRef} role="img" />;
}

function SpiritPanel({ currentIndex, onDetail, onEdit, onSelectWork, work, workList }) {
  if (!work || !workList.length) {
    return (
      <section className="spirit-card" aria-label="暂无成品展示">
        <div className="spirit-slide">
          <div className="spirit-info">
            <p>本月暂无成品，先上传一张拼豆成品。</p>
          </div>
        </div>
      </section>
    );
  }

  const canPage = workList.length > 1;
  const goPrev = () => onSelectWork(cycleWork(workList, work.id, -1));
  const goNext = () => onSelectWork(cycleWork(workList, work.id, 1));
  const swipe = useSwipePager(goPrev, goNext);

  return (
    <section className="spirit-card" {...swipe}>
      <div className="spirit-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {workList.map((item) => (
          <article className="spirit-slide" key={item.id}>
            <div className="cutout-stage">
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              {needsCutoutReview(item) ? (
                <div className="review-cutout">
                  <img alt={`${item.name} 原图预览`} src={item.scene} />
                  <span>抠图待复查</span>
                </div>
              ) : (
                <PixiMeshSpirit
                  className={getCutoutClass(item, "cutout-image")}
                  src={item.cutout}
                  motionDelay={`${(item.day % 5) * -0.34}`}
                  motionRange={`${10 + (item.level % 4) * 3}`}
                  motionSpeed={`${2.2 + (item.day % 3) * 0.22}`}
                  motionTilt={`${2 + (item.level % 3)}`}
                  workName={item.name}
                />
              )}
              <span className="shine shine-one" />
              <span className="shine shine-two" />
            </div>
            <div className="spirit-info">
              <div className="name-row">
                <h2>{item.name}</h2>
                <button aria-label="编辑名称" onClick={onEdit} type="button"><Pencil size={18} /></button>
                <button aria-label="查看详情" onClick={onDetail} type="button"><ChevronRight size={22} /></button>
              </div>
              <p><strong>Lv.{item.level}</strong><span>{item.form}</span></p>
              <div className="power-box">
                <small>能量值</small>
                <strong>{item.power.toLocaleString()}</strong>
                <Zap size={20} />
              </div>
              <div className="spirit-stat-grid">
                <span><b>{item.rarity}</b>稀有度</span>
                <span><b>{item.type}</b>系列</span>
                <span><b>{item.pieces}</b>拼豆数</span>
                <span><b>{item.likes}</b>喜欢</span>
              </div>
              <p className="spirit-date">{item.date}</p>
            </div>
          </article>
        ))}
      </div>
      {canPage && (
        <div className="spirit-pager">
          <button aria-label="上一件豆灵" onClick={goPrev} type="button"><ChevronLeft size={18} /></button>
          <span>{currentIndex + 1}/{workList.length}</span>
          <button aria-label="下一件豆灵" onClick={goNext} type="button"><ChevronRight size={18} /></button>
        </div>
      )}
    </section>
  );
}

function HomePage({
  activeMonth,
  catalogWorks,
  currentIndex,
  dayGroups,
  draftUpload,
  onAction,
  onMonthNext,
  onMonthPrev,
  onOpenDetail,
  onSearch,
  onNotify,
  onUpload,
  selected,
  selectedId,
  selectedDayWorks,
  onSelect,
}) {
  const [revealedCalendarDays, setRevealedCalendarDays] = useState(() => new Set());

  useEffect(() => {
    setRevealedCalendarDays(new Set());
  }, [activeMonth]);

  const revealCalendarDay = useCallback((dayKey) => {
    setRevealedCalendarDays((current) => {
      if (current.has(dayKey)) return current;
      const next = new Set(current);
      next.add(dayKey);
      return next;
    });
  }, []);

  return (
    <>
      <HomeEntryRun catalogWorks={catalogWorks} month={activeMonth} onLand={revealCalendarDay} />
      <Header onNotify={onNotify} onSearch={onSearch} />
      <UploadEntry draft={draftUpload} onUpload={onUpload} />
      <CalendarPanel
        dayGroups={dayGroups}
        month={activeMonth}
        onMonthNext={onMonthNext}
        onMonthPrev={onMonthPrev}
        revealedDays={revealedCalendarDays}
        selectedId={selectedId}
        onSelect={onSelect}
      />
      <SpiritPanel
        currentIndex={currentIndex}
        onDetail={onOpenDetail}
        onEdit={() => onAction("名称编辑入口已触发")}
        onSelectWork={onSelect}
        work={selected}
        workList={selectedDayWorks}
      />
    </>
  );
}

function CollectionPage({ catalogWorks, favoriteIds, onDelete, onFavoriteToggle, onNotify, onSearch, selectedId, onSelect }) {
  const filters = [
    { id: "all", label: "全部", group: "总览", test: () => true },
    { id: "plain", label: "无光无框", group: "基础", test: (work) => getCollectionType(work) === "无光无框" },
    { id: "frame", label: "普通边框", group: "基础", test: (work) => getCollectionType(work) === "普通边框" },
    { id: "blue", label: "蓝闪", group: "闪光", test: (work) => getShinyTone(work) === "blue" },
    { id: "purple", label: "紫闪", group: "闪光", test: (work) => getShinyTone(work) === "purple" },
    { id: "gold", label: "金闪", group: "闪光", test: (work) => getShinyTone(work) === "gold" },
    { id: "legend", label: "传说彩框", group: "传说", test: (work) => work.rarity === "传说" && getShinyTone(work) !== "gold" },
    { id: "legend-gold", label: "传说金闪", group: "传说", test: (work) => work.rarity === "传说" && getShinyTone(work) === "gold" },
  ];
  const filterGroups = ["总览", "基础", "闪光", "传说"].map((group) => ({
    group,
    items: filters.filter((filter) => filter.group === group),
  }));
  const [activeFilter, setActiveFilter] = useState(filters[0].id);
  const [deleteModeId, setDeleteModeId] = useState("");
  const [selectedMotion, setSelectedMotion] = useState({ id: "", type: "hop", tick: 0 });
  const pressTimer = useRef(null);
  const longPressRef = useRef(false);
  const activeRule = filters.find((filter) => filter.id === activeFilter) ?? filters[0];
  const visibleWorks = catalogWorks.filter(activeRule.test);
  const clearLongPress = () => window.clearTimeout(pressTimer.current);
  const startLongPress = (id) => {
    longPressRef.current = false;
    window.clearTimeout(pressTimer.current);
    pressTimer.current = window.setTimeout(() => {
      longPressRef.current = true;
      setDeleteModeId(id);
    }, 520);
  };
  const selectFromCard = (id) => {
    if (longPressRef.current) {
      longPressRef.current = false;
      return;
    }
    const motionTypes = ["hop", "wiggle", "pop", "flip"];
    setDeleteModeId("");
    setSelectedMotion({
      id,
      type: motionTypes[Math.floor(Math.random() * motionTypes.length)],
      tick: Date.now(),
    });
    onSelect(id);
  };

  return (
    <>
      <Header title="收藏" onNotify={onNotify} onSearch={onSearch} />
      <div className="filter-row">
        {filterGroups.map((group) => (
          <div className="filter-group" key={group.group}>
            <span>{group.group}</span>
            <div>
              {group.items.map((filter) => {
                const count = catalogWorks.filter(filter.test).length;
                return (
                  <button className={filter.id === activeFilter ? "active" : ""} key={filter.id} onClick={() => setActiveFilter(filter.id)} type="button">
                    {filter.label}<b>{count}</b>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <section className="collection-grid">
        {visibleWorks.map((work) => (
          <article
            className={`${getCollectionCardClass(work, selectedId)} ${deleteModeId === work.id ? "delete-revealed" : ""} ${
              selectedMotion.id === work.id ? `motion-${selectedMotion.type}` : ""
            }`}
            key={`${work.id}-${selectedMotion.id === work.id ? selectedMotion.tick : "idle"}`}
            onContextMenu={(event) => {
              event.preventDefault();
              setDeleteModeId(work.id);
            }}
            onPointerCancel={clearLongPress}
            onPointerDown={() => startLongPress(work.id)}
            onPointerLeave={clearLongPress}
            onPointerUp={clearLongPress}
          >
            <button className="collection-card-main" onClick={() => selectFromCard(work.id)} type="button">
              <img alt={work.name} className={needsCutoutReview(work) ? "photo-thumb" : getCutoutClass(work)} src={needsCutoutReview(work) ? work.scene : work.cutout} />
              <strong>{work.name}</strong>
              <small>{getCollectionType(work)}</small>
              <div className="dex-tags">
                <em>{work.type}</em>
                <em>{work.form}</em>
              </div>
              <span>{work.rarity} · 能量值 {work.power.toLocaleString()}</span>
              <i className="energy-meter" style={{ "--meter": `${Math.min(100, Math.round(work.power / 90))}%` }} />
            </button>
            <div className="collection-action-buttons" aria-hidden={deleteModeId !== work.id}>
              <button
                aria-label={`${favoriteIds.has(work.id) ? "取消最爱" : "设为最爱"} ${work.name}`}
                className={`favorite-work-button ${favoriteIds.has(work.id) ? "active" : ""}`}
                onClick={() => onFavoriteToggle(work.id)}
                tabIndex={deleteModeId === work.id ? 0 : -1}
                type="button"
              >
                <Heart size={13} fill={favoriteIds.has(work.id) ? "currentColor" : "none"} />
              </button>
              <button
                aria-label={`删除 ${work.name}`}
                className="delete-work-button"
                onClick={() => onDelete(work.id)}
                tabIndex={deleteModeId === work.id ? 0 : -1}
                type="button"
              >
                <Trash2 size={13} />
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

function getMilestoneRows(catalogWorks) {
  const totalPower = catalogWorks.reduce((sum, item) => sum + item.power, 0);
  const shinyCount = catalogWorks.filter(isShiny).length;
  const legendCount = catalogWorks.filter((work) => work.rarity === "传说").length;
  return [
    { id: "collect", title: "收集里程碑", current: catalogWorks.length, target: collectionMilestoneTarget, unit: "件", reward: "完成 100 件豆灵收藏" },
    { id: "streak", title: "连续记录", current: 7, target: 14, unit: "天", reward: "解锁晨光入场" },
    { id: "power", title: "能量突破", current: totalPower, target: 120000, unit: "", reward: "解锁能量徽章" },
    { id: "rare", title: "稀有发现", current: shinyCount + legendCount, target: 8, unit: "只", reward: "解锁金闪特效" },
  ];
}

function MilestonePanel({ catalogWorks, compact = false }) {
  const milestoneRows = getMilestoneRows(catalogWorks);

  return (
    <section className={`milestone-panel ${compact ? "profile-milestone" : ""}`}>
      <div className="milestone-head">
        <h2>里程碑</h2>
        <span>{milestoneRows.filter((item) => item.current >= item.target).length}/{milestoneRows.length}</span>
      </div>
      {milestoneRows.map((item, index) => {
        const progress = Math.min(100, Math.round((item.current / item.target) * 100));
        return (
          <div className={`milestone-row milestone-${item.id}`} key={item.id} style={{ "--queue-delay": `${0.16 + index * 0.12}s` }}>
            <div>
              <strong>{item.title}</strong>
              <span>{item.reward}</span>
            </div>
            <b>{item.current.toLocaleString()}{item.unit} / {item.target.toLocaleString()}{item.unit}</b>
            <i><em style={{ width: `${progress}%` }} /></i>
          </div>
        );
      })}
    </section>
  );
}

function StatsPage({ activeMonth, catalogWorks, onMonthNext, onMonthPrev, onNotify, onSearch }) {
  const monthWorks = catalogWorks.filter((work) => work.month === activeMonth);
  const monthPower = monthWorks.reduce((sum, item) => sum + item.power, 0);
  const top = [...monthWorks].sort((a, b) => b.power - a.power).slice(0, 5);

  return (
    <>
      <Header title="统计" onNotify={onNotify} onSearch={onSearch} />
      <div className="stats-month-bar">
        <button aria-label="上个月统计" onClick={onMonthPrev} type="button"><ChevronLeft size={20} /></button>
        <strong>{formatMonthLabel(activeMonth)}</strong>
        <button aria-label="下个月统计" onClick={onMonthNext} type="button"><ChevronRight size={20} /></button>
      </div>
      <section className="stats-hero">
        <p>{formatMonthLabel(activeMonth)}创作力</p>
        <strong>{monthPower.toLocaleString()}</strong>
        <span>本月完成 {monthWorks.length} 件成品，下面展示本月能量值前五</span>
      </section>
      <h2 className="stats-section-title">本月能量值前五</h2>
      <section className="bar-panel">
        {top.map((work, index) => (
          <div key={work.id} style={{ "--queue-delay": `${index * 0.12}s` }}>
            <i style={{ height: `${24 + work.progress * 0.9}px` }} />
            <img alt={work.name} src={work.thumb} />
            <span>{work.name}</span>
          </div>
        ))}
      </section>
      <section className="rank-list">
        <h2>{formatMonthLabel(activeMonth)}能量值前五</h2>
        {top.map((work, index) => (
          <div className="rank-row" key={work.id} style={{ "--queue-delay": `${0.1 + index * 0.12}s` }}>
            <b>{index + 1}</b>
            <img alt={work.name} src={work.thumb} />
            <span>{work.name}</span>
            <strong>{work.power.toLocaleString()}</strong>
          </div>
        ))}
      </section>
    </>
  );
}
function ProfilePage({ avatarId, catalogWorks, favoriteIds, onAvatarChange, onNameChange, onNotify, onSearch, profileName }) {
  const hasWorks = catalogWorks.length > 0;
  const avatarWork = catalogWorks.find((work) => work.id === avatarId) ?? catalogWorks[0];
  const avatarChoices = catalogWorks.filter((work) => favoriteIds.has(work.id)).slice(0, 6);
  const cycleChoices = avatarChoices.length ? avatarChoices : catalogWorks.slice(0, 6);
  const avatarClassName = avatarWork ? (needsCutoutReview(avatarWork) ? "photo-thumb" : getCutoutClass(avatarWork)) : "photo-thumb";
  const avatarSrc = avatarWork ? (needsCutoutReview(avatarWork) ? avatarWork.scene : avatarWork.cutout) : "";
  const cycleTargetId = avatarWork ? cycleWork(cycleChoices, avatarWork.id, 1) : "";

  return (
    <>
      <Header title="我的" onNotify={onNotify} onSearch={onSearch} />
      <section className="profile-card">
        <button
          className="profile-avatar"
          onClick={() => hasWorks && onAvatarChange(cycleTargetId)}
          type="button"
          aria-label="更换头像"
          disabled={!hasWorks}
        >
          {hasWorks ? (
            <img alt="用户头像" className={avatarClassName} src={avatarSrc} />
          ) : (
            <UserCircle size={32} />
          )}
          <Pencil size={16} />
        </button>
        <div className="profile-edit">
          <input aria-label="修改昵称" maxLength={14} onChange={(event) => onNameChange(event.target.value)} value={profileName} />
          <p>{hasWorks ? "连续记录 7 天" : "暂无作品，先上传后可查看记录"} </p>
        </div>
      </section>
      <section className="avatar-row" aria-label="头像选择">
        {hasWorks && avatarChoices.length ? (
          avatarChoices.map((work) => (
            <button className={work.id === avatarWork.id ? "active" : ""} key={work.id} onClick={() => onAvatarChange(work.id)} type="button">
              <img alt={work.name} className={needsCutoutReview(work) ? "photo-thumb" : getCutoutClass(work)} src={needsCutoutReview(work) ? work.scene : work.cutout} />
            </button>
          ))
        ) : (
          <p>{hasWorks ? "长按收藏页卡片，点心形按钮加入最爱。" : "尚未有可选头像，前往首页上传新作品。"} </p>
        )}
      </section>
      <MilestonePanel catalogWorks={catalogWorks} compact />
      <section className="settings-panel" aria-label="设定">
        <h2>设定</h2>
        <div><strong>形态</strong><p>由作品主题、系列和动效状态生成。</p></div>
        <div><strong>能量值</strong><p>按拼豆数、颜色数、闪光状态、传说加成和连续记录计算。</p></div>
        <div><strong>稀有度</strong><p>按能量值分档：普通、优秀、稀有、史诗、传说。</p></div>
        <div><strong>闪光</strong><p>蓝闪、紫闪、金闪是额外表现层。</p></div>
        <div><strong>边框</strong><p>普通作品无框，传说使用彩框和扫光。</p></div>
        <div><strong>叠加</strong><p>闪光和边框可叠加，传说加金闪是最高效果。</p></div>
      </section>
    </>
  );
}
function App() {
  const [selectedId, setSelectedId] = useState("cat");
  const [activeMonth, setActiveMonth] = useState("2025-05");
  const [activeTab, setActiveTab] = useState("home");
  const [detailWork, setDetailWork] = useState(null);
  const [notice, setNotice] = useState("");
  const [profileName, setProfileName] = useState("少波的豆灵馆");
  const [avatarId, setAvatarId] = useState("cat");
  const [draftUpload, setDraftUpload] = useState("");
  const [pendingDeleteId, setPendingDeleteId] = useState("");
  const [deletedWorkIds, setDeletedWorkIds] = useState(() => new Set());
  const [favoriteWorkIds, setFavoriteWorkIds] = useState(() => new Set(["frog", "bunny", "bear", "penguin", "monkey", "chick"]));
  const [userWorks, setUserWorks] = useState([]);
  const noticeTimer = useRef(null);
  const uploadInputRef = useRef(null);
  const objectUrlsRef = useRef([]);
  const allWorks = useMemo(() => [...userWorks, ...works], [userWorks]);
  const catalogWorks = useMemo(() => allWorks.filter((work) => !deletedWorkIds.has(work.id)), [allWorks, deletedWorkIds]);
  const pendingDeleteWork = allWorks.find((work) => work.id === pendingDeleteId);
  const availableMonths = useMemo(
    () => Array.from(new Set([...demoMonths, ...catalogWorks.map((work) => work.month)])).sort(),
    [catalogWorks]
  );
  const activeMonthWorks = catalogWorks.filter((work) => work.month === activeMonth);
  const hasCatalogWorks = catalogWorks.length > 0;
  const selected = hasCatalogWorks ? activeMonthWorks.find((work) => work.id === selectedId) ?? activeMonthWorks[0] ?? catalogWorks[0] : null;
  const activeDayGroups = getDayGroups(activeMonth, catalogWorks);
  const selectedDayWorks = selected ? activeDayGroups.get(selected.day) ?? [selected] : [];
  const currentIndex = selected && selectedDayWorks.length ? Math.max(0, selectedDayWorks.findIndex((work) => work.id === selected.id)) : 0;
  const selectWork = (id) => {
    const next = catalogWorks.find((work) => work.id === id);
    if (next) setActiveMonth(next.month);
    setSelectedId(id);
  };
  const requestDeleteWork = (id) => setPendingDeleteId(id);
  const cancelDeleteWork = () => setPendingDeleteId("");
  const confirmDeleteWork = () => {
    const target = allWorks.find((work) => work.id === pendingDeleteId);
    if (!target) return;
    const nextWorks = catalogWorks.filter((work) => work.id !== target.id);
    setDeletedWorkIds((current) => {
      const next = new Set(current);
      next.add(target.id);
      return next;
    });
    setFavoriteWorkIds((current) => {
      if (!current.has(target.id)) return current;
      const next = new Set(current);
      next.delete(target.id);
      return next;
    });
    setDetailWork((current) => (current?.id === target.id ? null : current));
    if (avatarId === target.id) setAvatarId(nextWorks[0]?.id ?? "");
    if (selectedId === target.id) {
      const nextSelected = nextWorks.find((work) => work.month === activeMonth) ?? nextWorks[0];
      if (nextSelected) {
        setSelectedId(nextSelected.id);
        setActiveMonth(nextSelected.month);
      }
    }
    setPendingDeleteId("");
    showNotice("已删除该作品");
  };
  const toggleFavoriteWork = (id) => {
    const isFavorite = favoriteWorkIds.has(id);
    setFavoriteWorkIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
    showNotice(isFavorite ? "已取消最爱" : "已加入最爱");
  };
  const switchMonth = (step) => {
    const index = Math.max(0, availableMonths.indexOf(activeMonth));
    const nextMonth = availableMonths[(index + step + availableMonths.length) % availableMonths.length];
    const nextWork = catalogWorks.find((work) => work.month === nextMonth);
    setActiveMonth(nextMonth);
    if (nextWork) setSelectedId(nextWork.id);
  };
  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      event.target.value = "";
      showNotice("请选择图片文件");
      return;
    }
    const url = URL.createObjectURL(file);
    objectUrlsRef.current.push(url);
    const nextWork = createUploadedWork(file, url, userWorks.length + 1);
    setDraftUpload(url);
    setUserWorks((current) => [nextWork, ...current]);
    setActiveMonth(nextWork.month);
    setSelectedId(nextWork.id);
    setActiveTab("home");
    event.target.value = "";
    showNotice("已生成豆灵，写入今天日历");
    showNotice("正在自动抠图");
    extractCutoutFromImage(file, url)
      .then((cutoutUrl) => {
        objectUrlsRef.current.push(cutoutUrl);
        setDraftUpload(cutoutUrl);
        setUserWorks((current) => current.map((work) => (
          work.id === nextWork.id
            ? { ...work, cutout: cutoutUrl, thumb: cutoutUrl, cutoutStatus: "ready" }
            : work
        )));
        showNotice("抠图已完成，豆灵已动起来");
      })
      .catch(() => {
        setUserWorks((current) => current.map((work) => (
          work.id === nextWork.id ? { ...work, cutoutStatus: "review" } : work
        )));
        showNotice("抠图需要复查，先保留原图");
      });
  };
  const showNotice = (message) => {
    setNotice(message);
    window.clearTimeout(noticeTimer.current);
    noticeTimer.current = window.setTimeout(() => setNotice(""), 1800);
  };
  useEffect(() => () => {
    window.clearTimeout(noticeTimer.current);
    objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
  }, []);
  const openDetail = () => setDetailWork(selected);
  const closeDetail = () => setDetailWork(null);
  const page = useMemo(() => {
    const headerActions = {
      onNotify: () => showNotice("今天已有作品更新"),
      onSearch: () => showNotice("搜索入口已触发"),
    };
    if (activeTab === "collection") {
      return (
        <CollectionPage
          {...headerActions}
          catalogWorks={catalogWorks}
          favoriteIds={favoriteWorkIds}
          selectedId={selectedId}
          onDelete={requestDeleteWork}
          onFavoriteToggle={toggleFavoriteWork}
          onSelect={selectWork}
        />
      );
    }
    if (activeTab === "stats") {
      return (
        <StatsPage
          {...headerActions}
          activeMonth={activeMonth}
          catalogWorks={catalogWorks}
          onMonthNext={() => switchMonth(1)}
          onMonthPrev={() => switchMonth(-1)}
        />
      );
    }
    if (activeTab === "profile") {
      return (
        <ProfilePage
          {...headerActions}
          avatarId={avatarId}
          catalogWorks={catalogWorks}
          favoriteIds={favoriteWorkIds}
          onAvatarChange={setAvatarId}
          onNameChange={setProfileName}
          profileName={profileName}
        />
      );
    }
    return (
      <HomePage
        {...headerActions}
        activeMonth={activeMonth}
        catalogWorks={catalogWorks}
        currentIndex={currentIndex}
        dayGroups={activeDayGroups}
        draftUpload={draftUpload}
        onAction={showNotice}
        onMonthNext={() => switchMonth(1)}
        onMonthPrev={() => switchMonth(-1)}
        onOpenDetail={openDetail}
        onUpload={() => uploadInputRef.current?.click()}
        selected={selected}
        selectedId={selectedId}
        selectedDayWorks={selectedDayWorks}
        onSelect={selectWork}
      />
    );
  }, [activeDayGroups, activeMonth, activeTab, avatarId, catalogWorks, currentIndex, draftUpload, favoriteWorkIds, profileName, selected, selectedDayWorks, selectedId]);

  return (
    <main className="app-shell">
      <input
        aria-label="上传拼豆成品照片"
        accept="image/*"
        className="hidden-upload"
        onChange={handleUpload}
        ref={uploadInputRef}
        type="file"
      />
      <div className={`page-motion page-${activeTab}`} key={activeTab}>
        {page}
      </div>
      {detailWork && (
        <section className="detail-sheet" aria-label="作品详情">
          <div className="detail-media-pair">
            <figure>
              <img alt={`${detailWork.name} 原图`} src={detailWork.scene} />
              <figcaption>原图</figcaption>
            </figure>
            <figure>
              <img
                alt={`${detailWork.name} 抠图`}
                className={needsCutoutReview(detailWork) ? "photo-thumb" : getCutoutClass(detailWork)}
                src={needsCutoutReview(detailWork) ? detailWork.scene : detailWork.cutout}
              />
              <figcaption>豆灵</figcaption>
            </figure>
          </div>
          <div className="detail-info">
            <div className="detail-title-row">
              <div>
                <h2>{detailWork.name}</h2>
                <p>Lv.{detailWork.level} · {detailWork.rarity}</p>
              </div>
              <button aria-label="关闭详情" onClick={closeDetail} type="button">关闭</button>
            </div>
            <strong>能量值 {detailWork.power.toLocaleString()}</strong>
            <p className="asset-status">{getWorkAssetStatus(detailWork)}</p>
            <div className="detail-traits">
              {getWorkTraitRows(detailWork).map((row) => (
                <span key={row.label}><b>{row.label}</b>{row.value}</span>
              ))}
            </div>
            {detailWork.sourceName && (
              <p className="source-file">{detailWork.sourceName} · {detailWork.sourceSizeKb}KB</p>
            )}
          </div>
        </section>
      )}
      {pendingDeleteWork && (
        <section className="confirm-backdrop" role="dialog" aria-modal="true" aria-label="删除作品确认">
          <div className="confirm-sheet">
            <strong>删除这个作品？</strong>
            <p>{pendingDeleteWork.name} 会从日历、收藏和统计里移除。</p>
            <div>
              <button onClick={cancelDeleteWork} type="button">取消</button>
              <button className="danger" onClick={confirmDeleteWork} type="button">删除</button>
            </div>
          </div>
        </section>
      )}
      {notice && <div className="toast" role="status">{notice}</div>}
      <nav className="tabbar" aria-label="主导航">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            className={activeTab === id ? "active" : ""}
            key={id}
            onClick={() => setActiveTab(id)}
            type="button"
          >
            <Icon size={24} />
            {label}
            {activeTab === id && <i />}
          </button>
        ))}
      </nav>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    if (import.meta.env.PROD) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
      return;
    }
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => registrations.forEach((registration) => registration.unregister()))
      .catch(() => {});
    if ("caches" in window) {
      caches.keys()
        .then((keys) => keys.forEach((key) => caches.delete(key)))
        .catch(() => {});
    }
  });
}
