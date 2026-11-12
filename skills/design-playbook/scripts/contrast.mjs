#!/usr/bin/env node
// WCAG 2.x contrast checker. No dependencies.
// Usage: node contrast.mjs [--min 4.5] [--over <surface>] <fg> <bg> [<fg> <bg> ...]
// Colours: #rgb, #rrggbb, #rrggbbaa, rgb()/rgba(), oklch(L C H [/ a]), white, black.
// A translucent foreground is composited over its background, as the browser paints it.
// Exits 1 when any pair is below --min (default 4.5), so it can gate a build.
import { pathToFileURL } from 'node:url';

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const num = (s) => {
  const t = String(s).trim();
  if (t.endsWith('%')) return parseFloat(t) / 100;
  return parseFloat(t);
};

function oklchToRgb(L, C, H) {
  const h = (H * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const lin = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  const [r, g, bl] = lin.map((c) => {
    const v = clamp(c, 0, 1);
    const e = v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055;
    return Math.round(clamp(e, 0, 1) * 255);
  });
  return { r, g, b: bl };
}

export function parseColor(input) {
  const s = String(input).trim().toLowerCase();
  if (s === 'white') return { r: 255, g: 255, b: 255, a: 1 };
  if (s === 'black') return { r: 0, g: 0, b: 0, a: 1 };
  let m = s.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/);
  if (m) {
    let h = m[1];
    if (h.length === 3) h = [...h].map((c) => c + c).join('');
    const p = (i) => parseInt(h.slice(i, i + 2), 16);
    return { r: p(0), g: p(2), b: p(4), a: h.length === 8 ? p(6) / 255 : 1 };
  }
  m = s.match(/^rgba?\(\s*([^)]+)\)$/);
  if (m) {
    const parts = m[1].split(/[\s,/]+/).filter(Boolean);
    if (parts.length >= 3) {
      const ch = (v) => (v.endsWith('%') ? Math.round(num(v) * 255) : Math.round(parseFloat(v)));
      const a = parts[3] !== undefined ? num(parts[3]) : 1;
      const out = { r: ch(parts[0]), g: ch(parts[1]), b: ch(parts[2]), a };
      if ([out.r, out.g, out.b, out.a].every(Number.isFinite)) return out;
    }
  }
  m = s.match(/^oklch\(\s*([^)]+)\)$/);
  if (m) {
    const [main, alpha] = m[1].split('/');
    const parts = main.trim().split(/[\s,]+/);
    if (parts.length === 3) {
      const L = num(parts[0]);
      const C = parseFloat(parts[1]);
      const H = parseFloat(parts[2]) || 0;
      if ([L, C].every(Number.isFinite)) {
        return { ...oklchToRgb(L, C, H), a: alpha !== undefined ? num(alpha) : 1 };
      }
    }
  }
  throw new Error(`Cannot read colour "${input}". Use #hex, rgb(), oklch(), white or black.`);
}

const over = (top, base) => ({
  r: top.r * top.a + base.r * (1 - top.a),
  g: top.g * top.a + base.g * (1 - top.a),
  b: top.b * top.a + base.b * (1 - top.a),
  a: 1,
});

function luminance({ r, g, b }) {
  const lin = (c) => {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

// ground: what a translucent background sits on (default white). Pass the real surface.
export function contrast(fg, bg, ground = '#ffffff') {
  let back = typeof bg === 'string' ? parseColor(bg) : bg;
  if (back.a < 1) back = over(back, typeof ground === 'string' ? parseColor(ground) : ground);
  let front = typeof fg === 'string' ? parseColor(fg) : fg;
  if (front.a < 1) front = over(front, back);
  const [hi, lo] = [luminance(front), luminance(back)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function main(argv) {
  let min = 4.5;
  let ground = null;
  const cols = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--min') min = parseFloat(argv[++i]);
    else if (argv[i] === '--over') ground = argv[++i];
    else if (argv[i] === '-h' || argv[i] === '--help') return usage(0);
    else cols.push(argv[i]);
  }
  if (!Number.isFinite(min) || cols.length === 0 || cols.length % 2) return usage(2);
  let failed = 0;
  console.log(`pair | ratio | text 4.5 | large text / UI 3 | AAA 7 | vs --min ${min}`);
  for (let i = 0; i < cols.length; i += 2) {
    let r;
    try {
      if (!ground && parseColor(cols[i + 1]).a < 1) {
        console.error(`Warning: ${cols[i + 1]} is translucent; assuming it sits on white. Pass --over <surface> for the real ground.`);
      }
      r = contrast(cols[i], cols[i + 1], ground ?? '#ffffff');
    } catch (err) {
      console.error(err.message);
      return 2;
    }
    const ok = (t) => (r >= t ? 'pass' : 'fail');
    const verdict = r >= min ? 'PASS' : 'FAIL';
    if (verdict === 'FAIL') failed++;
    console.log(`${cols[i]} on ${cols[i + 1]} | ${r.toFixed(2)}:1 | ${ok(4.5)} | ${ok(3)} | ${ok(7)} | ${verdict}`);
  }
  if (failed) console.log(`${failed} pair(s) below ${min}:1`);
  return failed ? 1 : 0;
}

function usage(code) {
  console.log('Usage: node contrast.mjs [--min 4.5] [--over <surface>] <fg> <bg> [<fg> <bg> ...]\n--over: the solid surface a translucent background sits on (default white).\nThresholds: body text 4.5, large text (24px+, or 18.66px+ bold) 3, UI shapes and focus rings 3.');
  return code;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) process.exitCode = main(process.argv.slice(2));
