// Run: node --test skills/design-playbook/scripts/contrast.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parseColor, contrast } from './contrast.mjs';

const near = (a, b, tol = 0.02) => assert.ok(Math.abs(a - b) <= tol, `${a} not within ${tol} of ${b}`);
const script = fileURLToPath(new URL('./contrast.mjs', import.meta.url));

test('black on white is 21:1', () => near(contrast('#000', '#ffffff'), 21));
test('known greys straddle the 4.5 line', () => {
  near(contrast('#767676', '#fff'), 4.54);
  near(contrast('#777777', '#fff'), 4.48);
});
test('pure blue and red on white', () => {
  near(contrast('#0000FF', '#FFFFFF'), 8.59);
  near(contrast('#FF0000', '#FFFFFF'), 4.0);
});
test('order does not matter', () => near(contrast('#fff', '#123456'), contrast('#123456', '#fff'), 1e-9));
test('rgb() and #rrggbbaa parse', () => {
  assert.deepEqual(parseColor('rgb(10, 20, 30)'), { r: 10, g: 20, b: 30, a: 1 });
  assert.deepEqual(parseColor('#ff000080'), { r: 255, g: 0, b: 0, a: 128 / 255 });
});
test('a translucent foreground is composited over the background', () => {
  // 50% black over white is mid grey (~#808080, ~3.95:1)
  near(contrast('rgba(0,0,0,0.5)', '#fff'), 3.95, 0.05);
});
test('a translucent background is composited over the given ground', () => {
  near(contrast('#fff', 'rgba(0,0,0,0.5)', '#000'), 21); // 50% black over black is black
  near(contrast('#fff', 'rgba(0,0,0,0.5)'), contrast('#fff', '#808080'), 0.05); // default ground is white
});
test('CLI --over sets the ground for translucent backgrounds', () => {
  const out = execFileSync('node', [script, '--over', '#000', '#fff', 'rgba(0,0,0,0.5)']).toString();
  assert.match(out, /21\.00:1/);
});
test('oklch converts to sRGB', () => {
  near(contrast('oklch(1 0 0)', 'oklch(0 0 0)'), 21);
  near(contrast('oklch(62.8% 0.2577 29.23)', '#fff'), 4.0, 0.05); // = #ff0000
});
test('bad input throws a clear error', () => {
  assert.throws(() => parseColor('banana'), /Cannot read colour/);
});
test('CLI exits 1 when a pair is below --min, 0 otherwise', () => {
  assert.equal(execFileSync('node', [script, '#000', '#fff']).toString().includes('PASS'), true);
  assert.throws(() => execFileSync('node', [script, '--min', '4.5', '#999', '#fff'], { stdio: 'pipe' }));
});
