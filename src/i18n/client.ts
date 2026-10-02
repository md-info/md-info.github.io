import messages from './messages.json';
export type Locale='en'|'fr'|'ja';
const dictionary=messages as Record<string,{fr:string;ja:string}>;
const reverse=new Map<string,string>();
for(const [en,translations] of Object.entries(dictionary))for(const value of Object.values(translations))if(value!==en)reverse.set(value,en);
let locale:Locale='en';
try{const saved=localStorage.getItem('md-language');if(saved==='fr'||saved==='ja')locale=saved;}catch{}
const normalize=(text:string)=>text.replace(/\s+/g,' ').trim();
export function original(text:string){return reverse.get(normalize(text))??normalize(text);}
export function getLocale(){return locale;}
export function translate(text:string):string{
 const key=original(text);
 if(locale==='en')return key;
 const entry=dictionary[key];if(entry)return entry[locale];
 const words:Record<string,{fr:string;ja:string}>={PROFILE:{fr:'PROFIL',ja:'プロフィール'},PROJECTS:{fr:'PROJETS',ja:'プロジェクト'},RESEARCH:{fr:'RECHERCHE',ja:'調査・研究'},COURSEWORK:{fr:'COURS',ja:'履修科目'},CONTACT:{fr:'CONTACT',ja:'連絡'},EXPERIENCE:{fr:'PARCOURS',ja:'経歴'},ARCADE:{fr:'ARCADE',ja:'ゲーム'},BLOG:{fr:'JOURNAL',ja:'ノート'}};
 let m=key.match(/^ARCHIVE \/ (.+)$/);if(m&&words[m[1]])return `${locale === 'fr' ? 'ARCHIVES' : 'アーカイブ'} / ${words[m[1]][locale]}`;
 m=key.match(/^Academic Year (.+)$/);if(m)return locale==='fr'?`Année universitaire ${m[1]}`:`${m[1]}年度`;
 m=key.match(/^Final Grade: (.+)$/);if(m)return locale==='fr'?`Note finale : ${m[1]}`:`最終成績：${m[1]}`;
 m=key.match(/^(Fall|Summer|Winter) (\d+)$/);if(m)return locale==='fr'?`${{Fall:'Automne',Summer:'Été',Winter:'Hiver'}[m[1]]} ${m[2]}`:`${m[2]}年${{Fall:'秋',Summer:'夏',Winter:'冬'}[m[1]]}`;
 m=key.match(/^(\d+) FILES? AVAILABLE$/);if(m)return locale==='fr'?`${m[1]} DOSSIER${m[1]==='1'?'':'S'} DISPONIBLE${m[1]==='1'?'':'S'}`:`${m[1]}件のファイル`;
 m=key.match(/^(\d+) (published|matching) notes?$/);if(m)return locale==='fr'?`${m[1]} notes ${m[2]==='published'?'publiées':'correspondantes'}`:`${m[2]==='published'?'公開':'一致する'}ノート：${m[1]}件`;
 m=key.match(/^Run complete\. (\d+) signals\.$/);if(m)return locale==='fr'?`Partie terminée. ${m[1]} signaux.`:`終了。シグナル：${m[1]}。`;
 m=key.match(/^(\d+) integrity remaining\.$/);if(m)return locale==='fr'?`Intégrité restante : ${m[1]}.`:`残り耐久力：${m[1]}。`;
 m=key.match(/^Run complete\. Score (\d+)\. Best (\d+)\.$/);if(m)return locale==='fr'?`Partie terminée. Score ${m[1]}. Record ${m[2]}.`:`終了。スコア：${m[1]}。ベスト：${m[2]}。`;
 m=key.match(/^Selected (.+)$/);if(m)return locale==='fr'?`Sélection : ${m[1]}`:`選択：${m[1]}`;
 m=key.match(/^Credential ID: (.+)$/);if(m)return locale==='fr'?`Identifiant du certificat : ${m[1]}`:`資格証明ID：${m[1]}`;
 m=key.match(/^(.+) — Michel Deosaran$|^Blog - Michel Deosaran$/);if(m){const heading=m[1]??'Journal';const titles:Record<string,string>={'Work Experience':'Work','Education & Certifications':'Education','Open Source & GitHub':'Community','Night Run':'Night run','Toronto After Dark':'THE CITY AFTER DARK'};return `${translate(titles[heading]??heading)} — Michel Deosaran`;}
 // Dates in the portfolio are translated; article dates stay in their original form.
 const months:Record<string,number>={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
 if(/\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}/.test(key))return key.replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})/g,(_,month,year)=>new Intl.DateTimeFormat(locale==='fr'?'fr-CA':'ja-JP',{month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(Number(year),months[month],1)))).replace('Present',locale==='fr'?'Aujourd’hui':'現在');
 return key;
}
let titleRecord:{source:string;rendered:string}|undefined;
const records=new WeakMap<Text,{source:string;rendered:string}>();
const attributes=new WeakMap<Element,Map<string,{source:string;rendered:string}>>();
const exempt='.note-body,.note-document>header,.note-tab,.note-path,.note-description,[data-note-search],.outline-link,.note-cover,.blog-content,pre,code,[data-no-translate]';
let observer:MutationObserver;
function apply(){
 observer?.disconnect();document.documentElement.lang=locale;
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  const node=walker.currentNode as Text;const parent=node.parentElement;
  if(!parent||parent.closest(`script,style,textarea,${exempt}`))continue;
  const current=node.data;if(!current.trim())continue;
  const previous=records.get(node);const source=previous&&current===previous.rendered?previous.source:original(current);
  const leading=current.match(/^\s*/)?.[0]??'',trailing=current.match(/\s*$/)?.[0]??'';
  const rendered=leading+translate(source)+trailing;
  records.set(node,{source,rendered});if(current!==rendered)node.data=rendered;
 }
 document.querySelectorAll('[aria-label],[placeholder],[title],[alt]').forEach(element=>{
  if(element.closest(exempt))return;
  const map=attributes.get(element)??new Map();attributes.set(element,map);
  for(const attr of ['aria-label','placeholder','title','alt']){const value=element.getAttribute(attr);if(!value)continue;const prev=map.get(attr);const source=prev&&value===prev.rendered?prev.source:original(value);const rendered=translate(source);map.set(attr,{source,rendered});if(value!==rendered)element.setAttribute(attr,rendered);}
 });
 const title=document.querySelector('title');if(title){const current=document.title;const source=titleRecord&&current===titleRecord.rendered?titleRecord.source:original(current);const rendered=translate(source);titleRecord={source,rendered};title.textContent=rendered;}
 document.querySelectorAll<HTMLSelectElement>('[data-language-select]').forEach(select=>select.value=locale);
 observer?.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','placeholder','title','alt']});
}
export function setLocale(next:Locale){locale=next;try{localStorage.setItem('md-language',next);}catch{}apply();window.dispatchEvent(new CustomEvent('portfolio-language',{detail:next}));}
let pending=false;
observer=new MutationObserver(()=>{if(!pending){pending=true;queueMicrotask(()=>{pending=false;apply();});}});
document.addEventListener('astro:page-load',()=>{
 document.querySelectorAll<HTMLSelectElement>('[data-language-select]').forEach(select=>select.addEventListener('change',()=>setLocale(select.value as Locale)));
 apply();
});
document.addEventListener('astro:before-swap',()=>observer.disconnect());
