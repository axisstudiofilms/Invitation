'use client';
import {useEffect,useRef,useState} from 'react';
import {Play,Pause} from 'lucide-react';
import type {Content} from '@/lib/invitation';
export function InvitationJourney({data,active,children}:{data:Content;active:boolean;children:React.ReactNode}){
 const root=useRef<HTMLDivElement>(null),startTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const [playing,setPlaying]=useState(false),[reduced,setReduced]=useState(true);
 const ne=data.language!=='en';
 useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{setReduced(media.matches||data.motion==='off');if(media.matches||data.motion==='off')setPlaying(false);};update();media.addEventListener('change',update);return()=>media.removeEventListener('change',update);},[data.motion]);
 useEffect(()=>{
  if(!active||reduced)return;
  // Guided scrolling is an explicit guest action, never a timed surprise.
  const stop=(event?:Event)=>{if(event?.target instanceof Element&&event.target.closest('.journey-pause'))return;if(startTimer.current)clearTimeout(startTimer.current);setPlaying(false);};
  const visibility=()=>{if(document.hidden)stop();};
  window.addEventListener('wheel',stop,{passive:true});window.addEventListener('touchstart',stop,{passive:true});window.addEventListener('pointerdown',stop,{passive:true});window.addEventListener('keydown',stop);document.addEventListener('visibilitychange',visibility);
  return()=>{if(startTimer.current)clearTimeout(startTimer.current);window.removeEventListener('wheel',stop);window.removeEventListener('touchstart',stop);window.removeEventListener('pointerdown',stop);window.removeEventListener('keydown',stop);document.removeEventListener('visibilitychange',visibility);};
 },[active,reduced]);
 useEffect(()=>{
  if(!playing||!active||reduced)return;
  let frame=0,last=0,position=scrollY;
  const advance=(time:number)=>{const end=Math.min(document.documentElement.scrollHeight,root.current?root.current.getBoundingClientRect().bottom+scrollY:Infinity)-innerHeight;if(position>=end-2){setPlaying(false);return;}if(last){position+=Math.min(time-last,64)/1000*(innerWidth<600?14:19);window.scrollTo({top:Math.min(position,end),behavior:'instant'});}last=time;frame=requestAnimationFrame(advance);};frame=requestAnimationFrame(advance);return()=>cancelAnimationFrame(frame);
 },[playing,active,reduced]);
 useEffect(()=>{
  const el=root.current;if(!el||!active||reduced||typeof IntersectionObserver==='undefined')return;
  const sections=[...el.querySelectorAll('.card-section,.card-footer')];el.dataset.enhanced='true';
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.setAttribute('data-seen','true');observer.unobserve(e.target);}}),{threshold:.04});sections.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight)s.setAttribute('data-seen','true');observer.observe(s);});
  return()=>{observer.disconnect();delete el.dataset.enhanced;};
 },[active,reduced]);
 return <div ref={root} className="invitation-journey" data-motion={reduced?'off':'gentle'}>{children}{active&&!reduced&&<button className="journey-pause" onClick={()=>{if(startTimer.current)clearTimeout(startTimer.current);setPlaying(v=>!v);}} aria-label={playing?'Pause guided scroll':'Resume guided scroll'} aria-pressed={playing}>{playing?<Pause size={16}/>:<Play size={16}/>}<span>{playing?(ne?'रोक्नुहोस्':'Pause scroll'):(ne?'बिस्तारै हेर्नुहोस्':'Guided scroll')}</span></button>}</div>;
}
