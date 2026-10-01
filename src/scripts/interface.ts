const dialog = document.querySelector<HTMLDialogElement>('#settings-dialog')!;
const motion = document.querySelector<HTMLInputElement>('#motion-setting')!;
const sound = document.querySelector<HTMLInputElement>('#sound-setting')!;
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
function read(key: string) { try { return localStorage.getItem(key); } catch { return null; } }
function save(key: string, value: string) { try { localStorage.setItem(key, value); } catch { /* settings work without storage */ } }
motion.checked = read('md-motion') === null ? !preference.matches : read('md-motion') === 'on';
sound.checked = read('md-sound') === 'on';
function applyMotion() { document.documentElement.classList.toggle('motion-paused', !motion.checked); }
applyMotion();
motion.addEventListener('change', () => { save('md-motion', motion.checked ? 'on' : 'off'); applyMotion(); });
preference.addEventListener('change', () => { if (read('md-motion') === null) { motion.checked = !preference.matches; applyMotion(); } });
sound.addEventListener('change', () => save('md-sound', sound.checked ? 'on' : 'off'));
let audio: AudioContext | undefined;
function tick() {
  if (!sound.checked) return;
  try {
    audio ??= new AudioContext(); void audio.resume();
    const tone = audio.createOscillator(); const volume = audio.createGain();
    tone.type = 'sine'; tone.frequency.setValueAtTime(680, audio.currentTime);
    tone.frequency.exponentialRampToValueAtTime(340, audio.currentTime + 0.065);
    volume.gain.setValueAtTime(0.035, audio.currentTime); volume.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.07);
    tone.connect(volume); volume.connect(audio.destination); tone.start(); tone.stop(audio.currentTime + 0.075);
  } catch { /* audio is optional */ }
}
document.querySelectorAll<HTMLButtonElement>('.settings-open').forEach(button => button.addEventListener('click', () => { tick(); dialog.showModal(); }));
document.querySelector('#settings-close')?.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
const menu = [...document.querySelectorAll<HTMLElement>('.game-menu .menu-item')];
menu.forEach(item => { item.addEventListener('click', tick); item.addEventListener('focus', tick); });
document.addEventListener('keydown', event => {
  if (document.querySelector('dialog[open]') || document.body.classList.contains('game-playing')) return;
  const target = event.target as HTMLElement;
  if (target.matches('input, textarea, select') || target.isContentEditable) return;
  const index = menu.indexOf(target);
  if (event.key === 'Enter' && target === document.body && menu.length) { event.preventDefault(); menu[0].click(); }
  if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && (index >= 0 || target === document.body)) {
    event.preventDefault(); const next = index < 0 ? 0 : (index + (event.key === 'ArrowDown' ? 1 : -1) + menu.length) % menu.length;
    menu[next].focus();
  }
  if (event.key === 'Escape' && location.pathname !== '/') { location.assign('/'); }
});
function clock() { const el = document.querySelector('#toronto-time'); if (el) el.textContent = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()) + ' / TORONTO'; }
clock(); setInterval(clock, 60000);
document.addEventListener('visibilitychange', () => document.documentElement.classList.toggle('tab-hidden', document.hidden));
