import { navigate } from 'astro:transitions/client';
document.addEventListener('astro:page-load',()=>{
if(!document.querySelector('#incoming-call'))return;
const choices = document.querySelector<HTMLElement>('#dialogue-choices')!;
const returning = document.querySelector<HTMLElement>('#return-profile')!;
const speaker = document.querySelector<HTMLElement>('.dialogue-speaker')!;
const line = document.querySelector<HTMLElement>('#dialogue-line')!;
const subtitle = document.querySelector<HTMLElement>('#call-subtitle')!;
const announcement = document.querySelector<HTMLElement>('#call-announcement')!;
const incoming = document.querySelector<HTMLElement>('#incoming-call')!;
const active = document.querySelector<HTMLElement>('#active-call')!;
// Keep mobile HUD panels outside the animated page's containing block.
const callHome = incoming.parentElement!;
const mobileCall = window.matchMedia('(max-width:700px)');
function positionCallPanels(){
  const parent=mobileCall.matches?document.body:callHome;
  parent.append(incoming,active);
}
positionCallPanels();
mobileCall.addEventListener('change',positionCallPanels);
document.addEventListener('astro:before-swap',()=>{
  mobileCall.removeEventListener('change',positionCallPanels);
  if(incoming.parentElement===document.body){incoming.remove();active.remove();}
},{once:true});
const introduction = line.textContent!;
const progress = document.querySelector<HTMLAnchorElement>('#dialogue-progress')!;
const progressText = progress.querySelector<HTMLElement>('.progress-text')!;
const replyButtons = [...choices.querySelectorAll<HTMLButtonElement>('button[data-reply]')];
type Thread = { line:string; action:string; href:string; farewell:string; options:[{key:string;text:string},{key:string;text:string}] };
const threads:Record<string,Thread> = {
  "root": {
    "line": "I'm Michel. Toronto looks good from here, right? Give a city a little darkness and suddenly even the concrete has personality. Anyway—glad you picked up. What's on your mind?",
    "action": "All right. Let me look around.",
    "href": "/profile/",
    "farewell": "Make yourself at home. If something catches your eye, follow it. I'll be around.",
    "options": [
      {
        "key": "banter",
        "text": "You always call strangers like this?"
      },
      {
        "key": "work",
        "text": "So, what's keeping you up?"
      }
    ]
  },
  "banter": {
    "line": "Only the ones wandering through my corner of the internet. A normal welcome page would've been easier, sure. But I like a little atmosphere. You remember a conversation. You forget another wall of text.",
    "action": "Fair enough. Show me around.",
    "href": "/profile/",
    "farewell": "Deal. Pick a thread and see where it goes. No guided tour required.",
    "options": [
      {
        "key": "city",
        "text": "I'll give you this—the view's pretty good."
      },
      {
        "key": "resume",
        "text": "All this atmosphere… got a résumé to go with it?"
      }
    ]
  },
  "city": {
    "line": "Right? I like Toronto with the volume turned down. Same city, different mood. Though I think the best part of technology is still the people using it. All the neon in the world can't make a frustrating system feel good.",
    "action": "Let me see what you've built.",
    "href": "/projects/",
    "farewell": "Here's the work. Different problems, different tools. Hopefully something in there gives you an idea of your own.",
    "options": [
      {
        "key": "taste",
        "text": "So when does a system actually feel good?"
      },
      {
        "key": "root",
        "text": "Okay, back to you. What else is here?"
      }
    ]
  },
  "work": {
    "line": "Software. The usual trap: 'this should be a quick fix.' Lately it's property data at ZM Intelligence—getting records, maps, and databases to agree with each other. I like that moment when a messy problem finally starts making sense. Getting there can be… less elegant.",
    "action": "Okay, show me the projects.",
    "href": "/projects/",
    "farewell": "Take a look. There's a local AI savings planner and a web intelligence pipeline. I'll let the details do the talking for a minute.",
    "options": [
      {
        "key": "taste",
        "text": "Be honest. Does everything really need AI now?"
      },
      {
        "key": "resume",
        "text": "Sounds like work. Give me the résumé version."
      }
    ]
  },
  "taste": {
    "line": "My take? A tool earns its place when it makes someone's next step easier. AI can help. So can a decent search box. I'd rather have something useful that explains itself than something impressive that makes you guess.",
    "action": "Let's open the notebook.",
    "href": "/blog/",
    "farewell": "It's in the journal. Folders, study notes, a few things worth keeping. Browse at your own pace.",
    "options": [
      {
        "key": "evidence",
        "text": "And when the impressive thing is confidently wrong?"
      },
      {
        "key": "root",
        "text": "Fair. Let's change the subject."
      }
    ]
  },
  "evidence": {
    "line": "That's when I want receipts. Where did this come from? What's a fact, and what's a guess? It's part of the ZM Intelligence work—keeping the source trail visible. A polished screen shouldn't get to bluff its way past a bad assumption.",
    "action": "Show me that side of the work.",
    "href": "/research/",
    "farewell": "Research is where I've put that approach. It's still taking shape, but the source should always be something you can follow.",
    "options": [
      {
        "key": "resume",
        "text": "Okay, I like that. What's your background?"
      },
      {
        "key": "root",
        "text": "Enough serious talk. Back to the view."
      }
    ]
  },
  "resume": {
    "line": "Sure—the short version. Computing & Information Systems at Athabasca. Software development, business development, and digital products at Zeon Michael Group. Before that, client services at VIVA. Different settings, same reminder: the person on the other end matters.",
    "action": "Let me read the experience record.",
    "href": "/experience/",
    "farewell": "Work, education, and community—all in there. And if you've got something interesting in mind, you'll find me under Connect.",
    "options": [
      {
        "key": "work",
        "text": "All right. Back to the 'quick fix.'"
      },
      {
        "key": "root",
        "text": "Thanks. Let's just look around for a minute."
      }
    ]
  }
};
function readSession(key:string) { try { return sessionStorage.getItem(key); } catch { return null; } }
function saveSession(key:string,value:string) { try { sessionStorage.setItem(key,value); } catch {} }
let generation=0;
let inCall=false;
let thread='root';
const timers = new Set<number>();
function delay(ms:number) { return new Promise<void>(resolve=>{const id=window.setTimeout(()=>{timers.delete(id);resolve();},ms);timers.add(id);}); }
function cancel() { generation++; timers.forEach(id=>clearTimeout(id)); timers.clear(); }
function restore() {
 cancel(); window.dispatchEvent(new CustomEvent('portfolio-call',{detail:false})); inCall=false; incoming.hidden=true; active.hidden=true; choices.hidden=true;
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
 await delay(name==='You'?850:900);
 return token===generation;
}
function revealChoices() {
 if(!inCall) return;
 const current=threads[thread];
 progress.href=current.href;progressText.textContent=current.action;
 replyButtons.forEach((button,index)=>{
  const option=current.options[index];button.dataset.reply=option.key;
  button.querySelector('.reply-text')!.textContent=option.text;
  button.disabled=option.key!=='root' && readSession('md-intro-thread-'+option.key)==='yes';
 });
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
  if(inCall) return; cancel(); inCall=true; window.dispatchEvent(new CustomEvent('portfolio-call',{detail:true})); incoming.hidden=true; active.hidden=false; returning.hidden=true;
  const token=generation;
  const greeting=say('Michel',"Hey. You found the place. I was wondering who'd turn up.",token);
  if(mobileCall.matches)requestAnimationFrame(()=>{
    if(!inCall||token!==generation)return;
    subtitle.scrollIntoView({block:'center',behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});
  });
  if(!await greeting)return;
  if(!await say('Michel',"Too quiet in here? Radio's down by Settings. Pick a track. Every late-night detour needs a soundtrack.",token))return;
  if(await say('Michel',introduction,token)) { revealChoices(); progress.focus({preventScroll:true}); }
 });
 for(const id of ['decline-call','end-call']) document.querySelector('#'+id)!.addEventListener('click',()=>{saveSession('md-call-dismissed','yes');restore();returning.focus({preventScroll:true});});
 replyButtons.forEach(button=>button.addEventListener('click',async()=>{
  if(!inCall || choices.hidden || button.disabled) return;
  const key=button.dataset.reply!; const userLine=button.querySelector('.reply-text')!.textContent!;
  const token=++generation; button.disabled=true;
  if(key!=='root')saveSession('md-intro-thread-'+key,'yes');
  if(!await say('You',userLine,token))return;
  thread=key;
  if(await say('Michel',threads[thread].line,token)){revealChoices();progress.focus({preventScroll:true});}
 }));
 progress.addEventListener('click',async(event)=>{
  event.preventDefault(); if(!inCall || choices.hidden)return;
  const current=threads[thread];const token=++generation;
  if(!await say('You',current.action,token))return;
  if(!await say('Michel',current.farewell,token))return;
  saveSession('md-intro-complete','yes');void navigate(current.href);
 });
}
document.addEventListener('astro:before-swap',()=>{cancel();window.dispatchEvent(new CustomEvent('portfolio-call',{detail:false}));},{once:true});
});
