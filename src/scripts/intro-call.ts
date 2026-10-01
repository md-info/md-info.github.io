const choices = document.querySelector<HTMLElement>('#dialogue-choices')!;
const returning = document.querySelector<HTMLElement>('#return-profile')!;
const speaker = document.querySelector<HTMLElement>('.dialogue-speaker')!;
const line = document.querySelector<HTMLElement>('#dialogue-line')!;
const subtitle = document.querySelector<HTMLElement>('#call-subtitle')!;
const announcement = document.querySelector<HTMLElement>('#call-announcement')!;
const incoming = document.querySelector<HTMLElement>('#incoming-call')!;
const active = document.querySelector<HTMLElement>('#active-call')!;
const introduction = line.textContent!;
const replies: Record<string,string> = {
 interests: "I'm studying Computing & Information Systems at Athabasca University, while exploring cybersecurity, creating technical content, and building digital business projects. You'll find those threads in my profile.",
 toronto: "Toronto after dark is the setting for this portfolio: city lights, movement, and a game-inspired interface. Take a look around — the menu opens my work, studies, and interests."
};
function readSession(key:string) { try { return sessionStorage.getItem(key); } catch { return null; } }
function saveSession(key:string,value:string) { try { sessionStorage.setItem(key,value); } catch { /* Optional interaction works without storage. */ } }
let generation=0;
let inCall=false;
const timers = new Set<number>();
function delay(ms:number) { return new Promise<void>(resolve=>{const id=window.setTimeout(()=>{timers.delete(id);resolve();},ms);timers.add(id);}); }
function cancel() { generation++; timers.forEach(id=>clearTimeout(id)); timers.clear(); }
function restore() {
 cancel(); inCall=false; incoming.hidden=true; active.hidden=true; choices.hidden=true;
 returning.hidden=false; subtitle.hidden=false; speaker.hidden=true; line.textContent=introduction;
}
async function say(name:string,text:string,token:number) {
 if(token!==generation) return false;
 choices.hidden=true; subtitle.hidden=false; speaker.hidden=false; speaker.textContent=name+':'; line.textContent='';
 const words=text.split(' ');
 const instant=document.documentElement.classList.contains('motion-paused') || matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(instant) line.textContent=text;
 else for(let i=0;i<words.length;i++) {
  if(token!==generation) return false;
  line.textContent=words.slice(0,i+1).join(' '); await delay(55);
 }
 if(token!==generation) return false;
 announcement.textContent=name+': '+text;
 await delay(name==='You'?850:450);
 return token===generation;
}
function revealChoices() {
 if(!inCall) return;
 choices.hidden=false; choices.classList.remove('dialogue-refresh'); void choices.offsetWidth; choices.classList.add('dialogue-refresh');
}
if(readSession('md-intro-complete')!=='yes' && readSession('md-call-dismissed')!=='yes') {
 subtitle.hidden=true;
 const arrivalToken=generation;
 void (async()=>{
  let visibleTime=0;
  while(visibleTime<5000) { await delay(250); if(arrivalToken!==generation) return; if(!document.hidden) visibleTime+=250; }
  if(!inCall) { incoming.hidden=false; announcement.textContent='Incoming call from Michel. Answer or decline.'; }
 })();
 document.querySelector('#answer-call')!.addEventListener('click',async()=>{
  if(inCall) return; cancel(); inCall=true; incoming.hidden=true; active.hidden=false; returning.hidden=true;
  const token=generation;
  if(await say('Michel',introduction,token)) { revealChoices(); choices.querySelector<HTMLAnchorElement>('a')!.focus({preventScroll:true}); }
 });
 for(const id of ['decline-call','end-call']) document.querySelector('#'+id)!.addEventListener('click',()=>{saveSession('md-call-dismissed','yes');restore();returning.focus({preventScroll:true});});
 choices.querySelectorAll<HTMLButtonElement>('button[data-reply]').forEach(button=>{
  const key=button.dataset.reply!; if(readSession('md-intro-used-'+key)==='yes') button.disabled=true;
  button.addEventListener('click',async()=>{
   if(!inCall || choices.hidden || button.disabled) return;
   const token=++generation; button.disabled=true; saveSession('md-intro-used-'+key,'yes');
   if(!await say('You',button.textContent!.replace('›','').trim(),token)) return;
   if(await say('Michel',replies[key],token)) { revealChoices(); choices.querySelector<HTMLAnchorElement>('a')!.focus({preventScroll:true}); }
  });
 });
 document.querySelector('#dialogue-progress')!.addEventListener('click',async(event)=>{
  event.preventDefault(); if(!inCall || choices.hidden) return;
  const token=++generation;
  if(!await say('You',"Sure, I'll check it out.",token)) return;
  if(!await say('Michel',"Great. Take a look — I'll see you on the other side.",token)) return;
  saveSession('md-intro-complete','yes'); location.assign('/profile/');
 });
}
window.addEventListener('pagehide',cancel);
