import { writeFileSync } from "node:fs";

const cx = 600;
const cy = 600;

const line = (x1, y1, x2, y2, w = 0.7, o = 0.55) =>
  `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#e8c97a" stroke-width="${w}" opacity="${o}"/>`;

const pt = (deg, r) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
};

const star = (x, y, r = 2.2, o = 0.7) =>
  `<g transform="translate(${x} ${y})" opacity="${o}" fill="#f0d78c"><path d="M0 ${-r} L${r * 0.22} ${-r * 0.22} L${r} 0 L${r * 0.22} ${r * 0.22} L0 ${r} L${-r * 0.22} ${r * 0.22} L${-r} 0 L${-r * 0.22} ${-r * 0.22} Z"/></g>`;

let ticks = "";
for (let d = 0; d < 360; d += 5) {
  const long = d % 30 === 0;
  const mid = d % 10 === 0;
  const r1 = long ? 548 : mid ? 556 : 560;
  const [x1, y1] = pt(d, r1);
  const [x2, y2] = pt(d, 568);
  ticks += line(x1, y1, x2, y2, long ? 1.1 : 0.55, long ? 0.7 : 0.35);
}

let houses = "";
for (let i = 0; i < 12; i++) {
  const d = i * 30;
  const [x1, y1] = pt(d, 118);
  const [x2, y2] = pt(d, 542);
  houses += line(x1, y1, x2, y2, i % 3 === 0 ? 0.85 : 0.45, i % 3 === 0 ? 0.38 : 0.2);
}

const axes = [0, 90, 45, 135]
  .map((d) => {
    const r = d % 90 === 0 ? 580 : 420;
    const [x1, y1] = pt(d, 96);
    const [x2, y2] = pt(d, r);
    return line(x1, y1, x2, y2, d % 90 === 0 ? 1.15 : 0.6, d % 90 === 0 ? 0.45 : 0.22);
  })
  .join("");

const dots = [
  [180, 70],
  [240, 130],
  [320, 90],
  [980, 160],
  [1040, 240],
  [860, 80],
  [140, 900],
  [200, 980],
  [980, 920],
  [1080, 860],
  [70, 400],
  [1130, 520],
  [90, 620],
]
  .map(([x, y], i) => star(x, y, i % 3 === 0 ? 2.6 : 1.6, 0.45 + (i % 4) * 0.08))
  .join("");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" fill="none">
  <circle cx="600" cy="600" r="568" stroke="#e8c97a" stroke-width="1.2" opacity="0.38"/>
  <circle cx="600" cy="600" r="542" stroke="#e8c97a" stroke-width="0.7" opacity="0.28"/>
  <circle cx="600" cy="600" r="430" stroke="#e8c97a" stroke-width="0.6" opacity="0.22"/>
  <circle cx="600" cy="600" r="310" stroke="#e8c97a" stroke-width="0.55" opacity="0.2"/>
  <circle cx="600" cy="600" r="196" stroke="#e8c97a" stroke-width="0.7" opacity="0.26"/>
  <circle cx="600" cy="600" r="118" stroke="#e8c97a" stroke-width="0.9" opacity="0.32"/>
  <circle cx="600" cy="600" r="36" stroke="#e8c97a" stroke-width="0.8" opacity="0.28"/>
  ${ticks}
  ${houses}
  ${axes}
  <path d="M600 564c-18 0-32 14-32 32 14-2 26-12 32-26 6 14 18 24 32 26 0-18-14-32-32-32z" fill="#e8c97a" opacity="0.42"/>
  <path d="M248 268 L292 244 L338 270 L364 228" stroke="#e8c97a" stroke-width="0.8" opacity="0.38"/>
  ${star(248, 268, 2.1, 0.7)}${star(292, 244, 1.7, 0.55)}${star(338, 270, 2.4, 0.65)}${star(364, 228, 1.6, 0.5)}
  <path d="M860 250 L910 280 L956 246 L990 300 L940 330" stroke="#e8c97a" stroke-width="0.8" opacity="0.34"/>
  ${star(860, 250, 2, 0.6)}${star(910, 280, 2.3, 0.7)}${star(956, 246, 1.6, 0.5)}${star(990, 300, 2.1, 0.62)}${star(940, 330, 1.5, 0.45)}
  <path d="M220 760 L260 800 L210 850 L280 880" stroke="#e8c97a" stroke-width="0.75" opacity="0.32"/>
  ${star(220, 760, 1.8, 0.5)}${star(260, 800, 2.4, 0.68)}${star(210, 850, 1.6, 0.48)}${star(280, 880, 2, 0.58)}
  <path d="M880 820 L930 790 L970 840 L1020 800" stroke="#e8c97a" stroke-width="0.75" opacity="0.3"/>
  ${star(880, 820, 1.7, 0.5)}${star(930, 790, 2.2, 0.64)}${star(970, 840, 1.8, 0.5)}${star(1020, 800, 1.6, 0.46)}
  ${dots}
  <circle cx="600" cy="600" r="3.2" fill="#f0d78c" opacity="0.55"/>
</svg>
`;

writeFileSync(new URL("../public/bg-astral.svg", import.meta.url), svg);
console.log("ok", svg.length);
