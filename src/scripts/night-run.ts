const canvas = document.querySelector<HTMLCanvasElement>('#night-run')!;
const ctx = canvas.getContext('2d')!;
const overlay = document.querySelector<HTMLElement>('#game-overlay')!;
const message = document.querySelector<HTMLElement>('#game-message')!;
const start = document.querySelector<HTMLButtonElement>('#game-start')!;
const pauseButton = document.querySelector<HTMLButtonElement>('#game-pause')!;
const scoreEl = document.querySelector('#game-score')!;
const healthEl = document.querySelector('#game-health')!;
const bestEl = document.querySelector('#game-best')!;
const announcement = document.querySelector('#game-announcement')!;
let best = 0;
try { best = Number(localStorage.getItem('md-night-run-best')) || 0; } catch { /* optional storage */ }
bestEl.textContent = String(best).padStart(4, '0');
type ObjectInRoad = { lane: number; depth: number; signal: boolean };
let state: 'ready' | 'running' | 'paused' | 'over' = 'ready';
let lane = 1, score = 0, health = 3, time = 0, spawn = 0, last = 0, frame = 0;
let objects: ObjectInRoad[] = [];
const W = 1000, H = 500, horizon = 160;
function project(depth: number, offset: number) { const scale = depth * depth; return { x: W / 2 + offset * (35 + scale * 360), y: horizon + scale * (H - horizon), scale }; }
function draw() {
  const sky = ctx.createLinearGradient(0, 0, 0, H); sky.addColorStop(0, '#070b18'); sky.addColorStop(1, '#15152b');
  ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
  // An abstract skyline with a slender Toronto-inspired tower.
  for (let i = 0; i < 28; i++) {
    const x = i * 39 - 25, height = 30 + (i * 41 % 89);
    ctx.fillStyle = '#141c30'; ctx.fillRect(x, horizon - height, 31, height);
    ctx.fillStyle = i % 3 === 0 ? '#86682f' : '#264355';
    for (let y = horizon - height + 8; y < horizon - 5; y += 13) for (let wx = x + 5; wx < x + 28; wx += 10) ctx.fillRect(wx, y, 3, 4);
  }
  ctx.strokeStyle = '#fd748a'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(735, 150); ctx.lineTo(735, 25); ctx.stroke();
  ctx.fillStyle = '#ac537b'; ctx.fillRect(725, 68, 20, 5); ctx.fillStyle = '#84e5ee'; ctx.fillRect(730, 74, 10, 3);
  ctx.fillStyle = '#080e19'; ctx.beginPath(); ctx.moveTo(430, horizon); ctx.lineTo(570, horizon); ctx.lineTo(970, H); ctx.lineTo(30, H); ctx.closePath(); ctx.fill();
  for (const offset of [-1.25, -.42, .42, 1.25]) {
    const a = project(0, offset), b = project(1, offset); ctx.strokeStyle = Math.abs(offset) > 1 ? '#fd6571' : '#7de5ed44'; ctx.lineWidth = Math.abs(offset) > 1 ? 2 : 1;
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
  }
  for (let i = 0; i < 15; i++) {
    const depth = (i / 15 + time * .21) % 1; const a = project(depth, -1.25), b = project(depth, 1.25);
    ctx.strokeStyle = '#74d8e817'; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
  }
  for (const item of [...objects].sort((a, b) => a.depth - b.depth)) {
    const p = project(item.depth, (item.lane - 1) * .82), size = 7 + p.scale * 42;
    ctx.fillStyle = item.signal ? '#86edf3' : '#dc4a61'; ctx.shadowColor = ctx.fillStyle; ctx.shadowBlur = item.signal ? 14 : 5;
    if (item.signal) { ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(Math.PI / 4); ctx.fillRect(-size / 3, -size / 3, size * .66, size * .66); ctx.restore(); }
    else { ctx.fillRect(p.x - size / 2, p.y - size * .7, size, size * .9); ctx.fillStyle = '#171f35'; ctx.fillRect(p.x - size * .32, p.y - size * .55, size * .64, size * .3); }
    ctx.shadowBlur = 0;
  }
  const p = project(.88, (lane - 1) * .82);
  ctx.fillStyle = '#f4ed49'; ctx.shadowColor = '#f4ed49'; ctx.shadowBlur = 16;
  ctx.beginPath(); ctx.moveTo(p.x, p.y - 28); ctx.lineTo(p.x + 22, p.y + 15); ctx.lineTo(p.x - 22, p.y + 15); ctx.closePath(); ctx.fill(); ctx.shadowBlur = 0;
  ctx.fillStyle = '#0c1321'; ctx.fillRect(p.x - 7, p.y - 10, 14, 13);
}
function updateHUD() { scoreEl.textContent = String(Math.floor(score)).padStart(4, '0'); healthEl.textContent = `${health} / 3`; }
function end() {
  state = 'over'; document.body.classList.remove('game-playing');
  best = Math.max(best, Math.floor(score)); bestEl.textContent = String(best).padStart(4, '0');
  try { localStorage.setItem('md-night-run-best', String(best)); } catch { /* optional storage */ }
  message.textContent = `Run complete. ${Math.floor(score)} signals.`; start.textContent = 'RUN AGAIN ↗'; overlay.hidden = false;
  pauseButton.textContent = 'PAUSE'; announcement.textContent = `Run complete. Score ${Math.floor(score)}. Best ${best}.`; start.focus();
}
function loop(now: number) {
  if (state !== 'running') return;
  const dt = Math.min((now - last) / 1000, .05); last = now; time += dt; spawn += dt; score += dt * 5;
  if (spawn > Math.max(.42, 1 - time / 120)) { spawn = 0; objects.push({ lane: Math.floor(Math.random() * 3), depth: .01, signal: Math.random() > .55 }); }
  for (const item of objects) {
    const before = item.depth; item.depth += dt * (.25 + Math.min(time / 200, .25));
    if (before < .88 && item.depth >= .88 && item.lane === lane) { if (item.signal) score += 100; else { health--; announcement.textContent = `${health} integrity remaining.`; } item.depth = 2; }
  }
  objects = objects.filter(item => item.depth < 1.12); updateHUD(); draw();
  if (health <= 0) { end(); return; } frame = requestAnimationFrame(loop);
}
function play() {
  if (state !== 'paused') { lane = 1; score = 0; health = 3; time = 0; spawn = 0; objects = []; updateHUD(); }
  cancelAnimationFrame(frame); state = 'running'; document.body.classList.add('game-playing'); overlay.hidden = true; pauseButton.textContent = 'PAUSE'; canvas.focus(); last = performance.now(); frame = requestAnimationFrame(loop);
}
function pause() {
  if (state === 'paused') { play(); return; }
  if (state !== 'running') return;
  state = 'paused'; cancelAnimationFrame(frame); message.textContent = 'Run paused.'; start.textContent = 'RESUME ↗'; overlay.hidden = false; pauseButton.textContent = 'RESUME'; announcement.textContent = 'Run paused.';
}
function move(direction: number) { if (state === 'running') lane = Math.max(0, Math.min(2, lane + direction)); }
start.addEventListener('click', play); pauseButton.addEventListener('click', pause);
document.querySelector('#game-left')?.addEventListener('click', () => move(-1)); document.querySelector('#game-right')?.addEventListener('click', () => move(1));
document.addEventListener('keydown', event => {
  if (document.querySelector('dialog[open]') || (state !== 'running' && state !== 'paused')) return;
  if (['ArrowLeft', 'ArrowRight', 'a', 'd', 'A', 'D', ' ', 'Escape'].includes(event.key)) {
    event.preventDefault(); event.stopImmediatePropagation();
    if (event.key === 'Escape') end(); else if (event.key === ' ') pause(); else move(['ArrowLeft', 'a', 'A'].includes(event.key) ? -1 : 1);
  }
}, true);
document.addEventListener('visibilitychange', () => { if (document.hidden && state === 'running') pause(); });
document.querySelectorAll('.settings-open').forEach(button => button.addEventListener('click', () => { if (state === 'running') pause(); }));
draw();
