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
  ShieldCheck,
  Sparkles,
  Trophy,
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
  {
    id: "frog",
    month: "2025-05",
    day: 2,
    name: "青团蛙",
    date: "2025年5月2日",
    type: "自然系",
    rarity: "优秀",
    level: 7,
    form: "森林形态",
    power: 2120,
    likes: 11,
    progress: 24,
    pieces: 220,
    edge: "white",
    scene: frogRealScene,
    cutout: frogRealCutout,
    thumb: frogRealCutout,
  },
  {
    id: "bunny",
    month: "2025-05",
    day: 20,
    name: "草莓兔",
    date: "2025年5月5日",
    type: "甜心系",
    rarity: "优秀",
    level: 8,
    form: "软糖形态",
    power: 2450,
    likes: 14,
    progress: 28,
    pieces: 260,
    edge: "white",
    scene: bunnyRealScene,
    cutout: bunnyRealCutout,
    thumb: bunnyRealCutout,
  },
  {
    id: "bear",
    month: "2025-05",
    day: 7,
    name: "奶油小熊",
    date: "2025年5月7日",
    type: "暖阳系",
    rarity: "稀有",
    level: 9,
    form: "暖阳形态",
    power: 2980,
    likes: 15,
    progress: 31,
    pieces: 300,
    edge: "gold",
    scene: bearRealScene,
    cutout: bearRealCutout,
    thumb: bearRealCutout,
  },
  {
    id: "penguin",
    month: "2025-05",
    day: 9,
    name: "海盐企鹅",
    date: "2025年5月9日",
    type: "冰晶系",
    rarity: "稀有",
    level: 12,
    form: "蓝闪形态",
    power: 4380,
    likes: 18,
    progress: 49,
    pieces: 330,
    edge: "gold",
    scene: penguinRealScene,
    cutout: penguinRealCutout,
    thumb: penguinRealCutout,
  },
  {
    id: "monkey",
    month: "2025-05",
    day: 12,
    name: "栗子猴",
    date: "2025年5月12日",
    type: "活力系",
    rarity: "普通",
    level: 10,
    form: "淘气形态",
    power: 3180,
    likes: 13,
    progress: 36,
    pieces: 310,
    edge: "purple",
    scene: monkeyRealScene,
    cutout: monkeyRealCutout,
    thumb: monkeyRealCutout,
  },
  {
    id: "chick",
    month: "2025-05",
    day: 20,
    name: "太阳团子",
    date: "2025年5月15日",
    type: "光系",
    rarity: "普通",
    level: 11,
    form: "发光形态",
    power: 3360,
    likes: 16,
    progress: 40,
    pieces: 280,
    edge: "purple",
    scene: chickRealScene,
    cutout: chickRealCutout,
    thumb: chickRealCutout,
  },
  {
    id: "rooster",
    month: "2025-05",
    day: 17,
    name: "小白鸡",
    date: "2025年5月17日",
    type: "守护系",
    rarity: "普通",
    level: 9,
    form: "清晨形态",
    power: 2860,
    likes: 12,
    progress: 33,
    pieces: 240,
    edge: "white",
    scene: roosterRealScene,
    cutout: roosterRealCutout,
    thumb: roosterRealCutout,
  },
  {
    id: "cat",
    month: "2025-05",
    day: 20,
    name: "草莓布丁喵",
    date: "2025年5月20日",
    type: "甜心系",
    rarity: "史诗",
    level: 18,
    form: "紫闪形态",
    power: 8650,
    likes: 23,
    progress: 72,
    pieces: 620,
    edge: "rainbow",
    scene: catRealScene,
    cutout: catRealCutout,
    thumb: catRealCutout,
  },
  {
    id: "dragon",
    month: "2025-05",
    day: 26,
    name: "葡萄龙",
    date: "2025年5月26日",
    type: "幻彩系",
    rarity: "传说",
    level: 18,
    form: "金闪形态",
    power: 8650,
    likes: 29,
    progress: 72,
    pieces: 710,
    edge: "rainbow",
    scene: dragonRealScene,
    cutout: dragonRealCutout,
    thumb: dragonRealCutout,
  },
  {
    id: "jelly",
    month: "2025-05",
    day: 29,
    name: "葡萄团子",
    date: "2025年5月29日",
    type: "果冻系",
    rarity: "稀有",
    level: 14,
    form: "果冻形态",
    power: 5120,
    likes: 20,
    progress: 58,
    pieces: 410,
    edge: "gold",
    scene: jellyRealScene,
    cutout: jellyRealCutout,
    thumb: jellyRealCutout,
  },
  {
    id: "fox",
    month: "2025-04",
    day: 3,
    name: "枫糖小狐",
    date: "2025年4月3日",
    type: "暖阳系",
    rarity: "稀有",
    level: 13,
    form: "灵巧形态",
    power: 4980,
    likes: 18,
    progress: 46,
    pieces: 430,
    edge: "gold",
    scene: foxRealScene,
    cutout: foxRealCutout,
    thumb: foxRealCutout,
  },
  {
    id: "panda",
    month: "2025-04",
    day: 8,
    name: "竹叶熊猫",
    date: "2025年4月8日",
    type: "自然系",
    rarity: "优秀",
    level: 10,
    form: "圆滚形态",
    power: 3260,
    likes: 14,
    progress: 34,
    pieces: 310,
    edge: "white",
    scene: pandaRealScene,
    cutout: pandaRealCutout,
    thumb: pandaRealCutout,
  },
  {
    id: "seal",
    month: "2025-04",
    day: 13,
    name: "冰糖海豹",
    date: "2025年4月13日",
    type: "冰晶系",
    rarity: "普通",
    level: 8,
    form: "软冰形态",
    power: 2410,
    likes: 12,
    progress: 26,
    pieces: 260,
    edge: "white",
    scene: sealRealScene,
    cutout: sealRealCutout,
    thumb: sealRealCutout,
  },
  {
    id: "squirrel",
    month: "2025-04",
    day: 21,
    name: "栗子松鼠",
    date: "2025年4月21日",
    type: "活力系",
    rarity: "稀有",
    level: 15,
    form: "蓄能形态",
    power: 5860,
    likes: 21,
    progress: 55,
    pieces: 520,
    edge: "gold",
    scene: squirrelRealScene,
    cutout: squirrelRealCutout,
    thumb: squirrelRealCutout,
  },
  {
    id: "octopus",
    month: "2025-04",
    day: 21,
    name: "珊瑚章鱼",
    date: "2025年4月21日",
    type: "海盐系",
    rarity: "优秀",
    level: 12,
    form: "摇摆形态",
    power: 4120,
    likes: 19,
    progress: 43,
    pieces: 380,
    edge: "purple",
    scene: octopusRealScene,
    cutout: octopusRealCutout,
    thumb: octopusRealCutout,
  },
  {
    id: "whale",
    month: "2025-03",
    day: 5,
    name: "喷水鲸",
    date: "2025年3月5日",
    type: "海盐系",
    rarity: "优秀",
    level: 11,
    form: "蓝闪形态",
    power: 3720,
    likes: 16,
    progress: 39,
    pieces: 350,
    edge: "purple",
    scene: whaleRealScene,
    cutout: whaleRealCutout,
    thumb: whaleRealCutout,
  },
  {
    id: "cake",
    month: "2025-03",
    day: 11,
    name: "草莓蛋糕",
    date: "2025年3月11日",
    type: "甜心系",
    rarity: "史诗",
    level: 14,
    form: "紫闪形态",
    power: 5380,
    likes: 25,
    progress: 52,
    pieces: 470,
    edge: "gold",
    scene: cakeRealScene,
    cutout: cakeRealCutout,
    thumb: cakeRealCutout,
  },
  {
    id: "mushroom",
    month: "2025-03",
    day: 18,
    name: "蘑菇童子",
    date: "2025年3月18日",
    type: "森林系",
    rarity: "传说",
    level: 17,
    form: "金闪形态",
    power: 7920,
    likes: 31,
    progress: 68,
    pieces: 640,
    edge: "rainbow",
    scene: mushroomRealScene,
    cutout: mushroomRealCutout,
    thumb: mushroomRealCutout,
  },
  {
    id: "alpaca",
    month: "2025-03",
    day: 24,
    name: "围巾羊驼",
    date: "2025年3月24日",
    type: "暖阳系",
    rarity: "普通",
    level: 9,
    form: "毛绒形态",
    power: 2880,
    likes: 13,
    progress: 32,
    pieces: 290,
    edge: "white",
    scene: alpacaRealScene,
    cutout: alpacaRealCutout,
    thumb: alpacaRealCutout,
  },
  {
    id: "moon",
    month: "2025-03",
    day: 24,
    name: "抱星彩月",
    date: "2025年3月24日",
    type: "幻彩系",
    rarity: "传说",
    level: 18,
    form: "月光形态",
    power: 8420,
    likes: 34,
    progress: 70,
    pieces: 690,
    edge: "rainbow",
    scene: moonRealScene,
    cutout: moonRealCutout,
    thumb: moonRealCutout,
  },
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

function createUploadedWork(file, url, index) {
  const today = new Date();
  const pieces = Math.max(180, Math.min(680, Math.round(file.size / 4200)));
  return {
    id: `upload-${today.getTime()}-${index}`,
    month: toMonthKey(today),
    day: today.getDate(),
    name: "新豆灵",
    date: formatDateLabel(today),
    type: "自制系",
    rarity: "普通",
    level: 1,
    form: "新生形态",
    power: 1200 + pieces * 6,
    likes: 0,
    progress: 8,
    pieces,
    edge: "white",
    scene: url,
    cutout: url,
    thumb: url,
    uploaded: true,
  };
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
  if (work.uploaded) return "自制上传";
  if (work.rarity === "传说" && shinyTone === "gold") return "传说金闪";
  if (work.rarity === "传说") return "传说彩框";
  if (shinyTone === "gold") return "金闪";
  if (shinyTone === "purple") return "紫闪";
  if (shinyTone === "blue") return "蓝闪";
  if (["稀有", "史诗"].includes(work.rarity)) return "普通边框";
  return "无光无框";
}

function needsCutoutReview(work) {
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
        <strong>{draft ? "继续生成豆灵动效" : "上传拼豆成品"}</strong>
        <p>{draft ? "已选择照片，下一步抠图生成" : "保留原图，生成抠图豆灵"}</p>
      </div>
      {draft && <img alt="已上传预览" src={draft} />}
    </button>
  );
}

function TodayPhoto({ currentIndex, onOpenPhoto, onSelectWork, onViewAll, work, workList }) {
  const canPage = workList.length > 1;
  const [photoIndex, setPhotoIndex] = useState(currentIndex);
  const listKey = workList.map((item) => item.id).join("|");
  const selectPhotoIndex = (nextIndex) => {
    const next = (nextIndex + workList.length) % workList.length;
    setPhotoIndex(next);
    onSelectWork(workList[next].id);
  };
  const goPrev = (event) => {
    event?.stopPropagation();
    selectPhotoIndex(photoIndex - 1);
  };
  const goNext = (event) => {
    event?.stopPropagation();
    selectPhotoIndex(photoIndex + 1);
  };
  const swipe = useSwipePager(goPrev, goNext);

  useEffect(() => {
    setPhotoIndex(currentIndex);
  }, [currentIndex, listKey]);

  return (
    <section className="today-block">
      <div className="section-row">
        <h2>今日完成 <span>✦</span></h2>
        <button onClick={onViewAll} type="button">查看全部</button>
      </div>
      <div className="photo-carousel" {...swipe}>
        <div className="photo-track" style={{ transform: `translateX(-${photoIndex * 100}%)` }}>
          {workList.map((item) => (
            <button
              className="photo-card"
              key={item.id}
              onClick={onOpenPhoto}
              type="button"
              aria-label={`${item.name} 成品照片`}
            >
              <img alt={`${item.name} 桌面成品照`} className="photo-image" src={item.scene} />
              <div className="photo-caption">
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.date}</p>
                </div>
                <div className="like-count">
                  <Heart size={22} fill="#ff5f7d" />
                  <span>{item.likes}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        {canPage && (
          <>
            <button aria-label="上一件作品" className="carousel-nav prev" onClick={goPrev} type="button"><ChevronLeft size={20} /></button>
            <button aria-label="下一件作品" className="carousel-nav next" onClick={goNext} type="button"><ChevronRight size={20} /></button>
            <div className="carousel-dots">
              {workList.map((item, index) => (
                <button
                  aria-label={`切换到 ${item.name}`}
                  className={index === photoIndex ? "active" : ""}
                  key={item.id}
                  onClick={(event) => {
                    event.stopPropagation();
                    selectPhotoIndex(index);
                  }}
                  type="button"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
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
              data-date-day={group ? `${month}-${day}` : undefined}
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
          const toX = (rect?.left ?? vw * 0.5) + (rect?.width ?? 48) / 2 - 22;
          const toY = (rect?.top ?? vh * 0.5) + (rect?.height ?? 48) / 2 - 22;
          return {
            delay: `${index * 0.08}s`,
            fromX: `${start.x}px`,
            fromY: `${start.y}px`,
            id: `${month}-${work.id}`,
            midX: `${(start.x + toX) / 2}px`,
            midY: `${(start.y + toY) / 2 - 34}px`,
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
        <img
          alt=""
          className={`entry-runner rarity-cut edge-${getRarityEdge(sprite.work)}`}
          key={sprite.id}
          src={sprite.work.cutout}
          style={{
            "--entry-delay": sprite.delay,
            "--from-x": sprite.fromX,
            "--from-y": sprite.fromY,
            "--mid-x": sprite.midX,
            "--mid-y": sprite.midY,
            "--to-x": sprite.toX,
            "--to-y": sprite.toY,
          }}
        />
      ))}
    </div>
  );
}

function SpiritPanel({ catalogWorks, currentIndex, onDetail, onEdit, onSelectWork, work, workList }) {
  const canPage = workList.length > 1;
  const goPrev = () => onSelectWork(cycleWork(workList, work.id, -1));
  const goNext = () => onSelectWork(cycleWork(workList, work.id, 1));
  const swipe = useSwipePager(goPrev, goNext);
  const collectionProgress = Math.min(100, Math.round((catalogWorks.length / collectionMilestoneTarget) * 100));

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
                  <span>抠图待精修</span>
                </div>
              ) : (
                <img
                  alt={`${item.name} 抠图动效`}
                  className={getCutoutClass(item, "cutout-image")}
                  src={item.cutout}
                  style={{
                    "--motion-delay": `${(item.day % 5) * -0.34}s`,
                    "--motion-range": `${10 + (item.level % 4) * 3}px`,
                    "--motion-speed": `${2.2 + (item.day % 3) * 0.22}s`,
                    "--motion-tilt": `${2 + (item.level % 3)}deg`,
                  }}
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
              <div className="progress-label">
                <span>里程碑进度</span>
                <b>{collectionProgress}%</b>
              </div>
              <div className="progress-bar">
                <i style={{ width: `${collectionProgress}%` }} />
              </div>
              <div className="collect-line">
                <span>收集 {collectionMilestoneTarget} 件作品</span>
                <strong>{catalogWorks.length} / {collectionMilestoneTarget}</strong>
              </div>
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
  onViewAll,
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
      <TodayPhoto
        currentIndex={currentIndex}
        onOpenPhoto={onOpenDetail}
        onSelectWork={onSelect}
        onViewAll={onViewAll}
        work={selected}
        workList={selectedDayWorks}
      />
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
        catalogWorks={catalogWorks}
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

function CollectionPage({ catalogWorks, onNotify, onSearch, selectedId, onSelect }) {
  const filters = [
    { label: "全部", test: () => true },
    { label: "无光无框", test: (work) => getCollectionType(work) === "无光无框" },
    { label: "普通边框", test: (work) => getCollectionType(work) === "普通边框" },
    { label: "蓝闪", test: (work) => getShinyTone(work) === "blue" },
    { label: "紫闪", test: (work) => getShinyTone(work) === "purple" },
    { label: "金闪", test: (work) => getShinyTone(work) === "gold" },
    { label: "传说彩框", test: (work) => work.rarity === "传说" },
    { label: "自制上传", test: (work) => work.uploaded },
  ];
  const [activeFilter, setActiveFilter] = useState(filters[0].label);
  const activeRule = filters.find((filter) => filter.label === activeFilter) ?? filters[0];
  const visibleWorks = catalogWorks.filter(activeRule.test);

  return (
    <>
      <Header title="收藏" onNotify={onNotify} onSearch={onSearch} />
      <section className="dex-summary">
        <div>
          <p>图鉴完成度</p>
          <strong>{catalogWorks.length}/100</strong>
        </div>
        <div>
          <p>最高稀有度</p>
          <strong>传说</strong>
        </div>
      </section>
      <div className="filter-row">
        {filters.map((filter) => (
          <button
            className={filter.label === activeFilter ? "active" : ""}
            key={filter.label}
            onClick={() => setActiveFilter(filter.label)}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>
      <section className="collection-grid">
        {visibleWorks.map((work) => (
          <button
            className={getCollectionCardClass(work, selectedId)}
            key={work.id}
            onClick={() => onSelect(work.id)}
            type="button"
          >
            <img
              alt={work.name}
              className={needsCutoutReview(work) ? "photo-thumb" : getCutoutClass(work)}
              src={needsCutoutReview(work) ? work.scene : work.cutout}
            />
            <strong>{work.name}</strong>
            <small>{getCollectionType(work)}</small>
            <span>{work.rarity} · {work.power.toLocaleString()}</span>
          </button>
        ))}
      </section>
    </>
  );
}

function StatsPage({ catalogWorks, onNotify, onSearch }) {
  const totalPower = catalogWorks.reduce((sum, item) => sum + item.power, 0);
  const top = [...catalogWorks].sort((a, b) => b.power - a.power).slice(0, 5);
  const shinyCount = catalogWorks.filter(isShiny).length;
  const legendCount = catalogWorks.filter((work) => work.rarity === "传说").length;
  const milestoneRows = [
    {
      id: "collect",
      title: "收集里程碑",
      current: catalogWorks.length,
      target: collectionMilestoneTarget,
      unit: "件",
      reward: "完成 100 件豆灵收藏",
    },
    {
      id: "streak",
      title: "连续记录",
      current: 7,
      target: 14,
      unit: "天",
      reward: "解锁晨光入场",
    },
    {
      id: "power",
      title: "能量突破",
      current: totalPower,
      target: 120000,
      unit: "",
      reward: "解锁战力徽章",
    },
    {
      id: "rare",
      title: "稀有发现",
      current: shinyCount + legendCount,
      target: 8,
      unit: "只",
      reward: "解锁金闪特效",
    },
  ];

  return (
    <>
      <Header title="统计" onNotify={onNotify} onSearch={onSearch} />
      <section className="stats-hero">
        <p>五月创作力</p>
        <strong>{totalPower.toLocaleString()}</strong>
        <span>已完成 {catalogWorks.length} 件成品，保留战力前五</span>
      </section>
      <section className="bar-panel">
        {top.map((work, index) => (
          <div key={work.id} style={{ "--queue-delay": `${index * 0.12}s` }}>
            <i style={{ height: `${24 + work.progress * 0.9}px` }} />
            <span>{index + 1}</span>
          </div>
        ))}
      </section>
      <section className="milestone-panel">
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
      <section className="rank-list">
        <h2>战力前五</h2>
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

function ProfilePage({ avatarId, catalogWorks, onAvatarChange, onNameChange, onNotify, onSearch, profileName }) {
  const avatarWork = catalogWorks.find((work) => work.id === avatarId) ?? catalogWorks[0];
  const avatarChoices = catalogWorks.slice(0, 6);

  return (
    <>
      <Header title="我的" onNotify={onNotify} onSearch={onSearch} />
      <section className="profile-card">
        <button className="profile-avatar" onClick={() => onAvatarChange(cycleWork(avatarChoices, avatarWork.id, 1))} type="button" aria-label="更换头像">
          <img
            alt="用户头像"
            className={needsCutoutReview(avatarWork) ? "photo-thumb" : getCutoutClass(avatarWork)}
            src={needsCutoutReview(avatarWork) ? avatarWork.scene : avatarWork.cutout}
          />
          <Pencil size={16} />
        </button>
        <div className="profile-edit">
          <input aria-label="修改昵称" maxLength={14} onChange={(event) => onNameChange(event.target.value)} value={profileName} />
          <p>连续记录 7 天</p>
        </div>
      </section>
      <section className="avatar-row" aria-label="头像选择">
        {avatarChoices.map((work) => (
          <button
            className={work.id === avatarWork.id ? "active" : ""}
            key={work.id}
            onClick={() => onAvatarChange(work.id)}
            type="button"
          >
            <img
              alt={work.name}
              className={needsCutoutReview(work) ? "photo-thumb" : getCutoutClass(work)}
              src={needsCutoutReview(work) ? work.scene : work.cutout}
            />
          </button>
        ))}
      </section>
      <section className="profile-list">
        <div><Trophy size={22} /><span>当前称号</span><strong>豆灵收藏家</strong></div>
        <div><Sparkles size={22} /><span>AI 动效额度</span><strong>12 次</strong></div>
        <div><ShieldCheck size={22} /><span>照片原则</span><strong>保留原作</strong></div>
      </section>
      <section className="settings-panel" aria-label="设定">
        <h2>设定</h2>
        <div><strong>形态</strong><p>由作品主题、系列和动效状态生成，记录普通、季节、闪光等展示状态。</p></div>
        <div><strong>能量值</strong><p>按豆数、颜色数、完成难度、稀有度和连续记录加权计算。</p></div>
        <div><strong>闪光</strong><p>闪光是额外状态，分蓝闪、紫闪、金闪；蓝闪偏清透，紫闪偏稀有，金闪用于最高展示。</p></div>
        <div><strong>边框</strong><p>无光普通作品不加框；稀有和史诗使用普通边框；传说使用彩框和扫光。</p></div>
        <div><strong>叠加</strong><p>闪光和边框可叠加；传说加金闪光是当前最高效果。</p></div>
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
  const [userWorks, setUserWorks] = useState([]);
  const noticeTimer = useRef(null);
  const uploadInputRef = useRef(null);
  const catalogWorks = useMemo(() => [...userWorks, ...works], [userWorks]);
  const availableMonths = useMemo(
    () => Array.from(new Set([...demoMonths, ...catalogWorks.map((work) => work.month)])).sort(),
    [catalogWorks]
  );
  const activeMonthWorks = catalogWorks.filter((work) => work.month === activeMonth);
  const selected = activeMonthWorks.find((work) => work.id === selectedId) ?? activeMonthWorks[0] ?? catalogWorks[0];
  const activeDayGroups = getDayGroups(activeMonth, catalogWorks);
  const selectedDayWorks = activeDayGroups.get(selected.day) ?? [selected];
  const currentIndex = Math.max(0, selectedDayWorks.findIndex((work) => work.id === selected.id));
  const selectWork = (id) => {
    const next = catalogWorks.find((work) => work.id === id);
    if (next) setActiveMonth(next.month);
    setSelectedId(id);
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
    const url = URL.createObjectURL(file);
    const nextWork = createUploadedWork(file, url, userWorks.length + 1);
    setDraftUpload(url);
    setUserWorks((current) => [nextWork, ...current]);
    setActiveMonth(nextWork.month);
    setSelectedId(nextWork.id);
    setActiveTab("home");
    event.target.value = "";
    showNotice("已生成豆灵，写入今天日历");
  };
  const showNotice = (message) => {
    setNotice(message);
    window.clearTimeout(noticeTimer.current);
    noticeTimer.current = window.setTimeout(() => setNotice(""), 1800);
  };
  const openDetail = () => setDetailWork(selected);
  const closeDetail = () => setDetailWork(null);
  const page = useMemo(() => {
    const headerActions = {
      onNotify: () => showNotice("今天已有 3 件作品更新"),
      onSearch: () => showNotice("搜索入口已触发"),
    };
    if (activeTab === "collection") return <CollectionPage {...headerActions} catalogWorks={catalogWorks} selectedId={selectedId} onSelect={selectWork} />;
    if (activeTab === "stats") return <StatsPage {...headerActions} catalogWorks={catalogWorks} />;
    if (activeTab === "profile") {
      return (
        <ProfilePage
          {...headerActions}
          avatarId={avatarId}
          catalogWorks={catalogWorks}
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
        onViewAll={() => setActiveTab("collection")}
      />
    );
  }, [activeDayGroups, activeMonth, activeTab, avatarId, catalogWorks, currentIndex, draftUpload, profileName, selected, selectedDayWorks, selectedId]);

  return (
    <main className="app-shell">
      <input
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
          <img
            alt={detailWork.name}
            className={needsCutoutReview(detailWork) ? "photo-thumb" : getCutoutClass(detailWork)}
            src={needsCutoutReview(detailWork) ? detailWork.scene : detailWork.cutout}
          />
          <div>
            <h2>{detailWork.name}</h2>
            <p>Lv.{detailWork.level} · {detailWork.form}</p>
            <strong>{detailWork.power.toLocaleString()}</strong>
          </div>
          <button onClick={closeDetail} type="button">关闭</button>
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
