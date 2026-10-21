import {pageMetadata,siteUrl} from '@/lib/seo';
import {templates,sampleContent} from '@/lib/invitation';
import {GuestInvitation} from '@/components/invitation-view';
import {notFound} from 'next/navigation';
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;const t=templates.find(t=>t.id===id);if(!t)notFound();return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'CreativeWork',name:t.english+' Wedding Invitation',description:t.description,url:siteUrl+'/templates/'+id,inLanguage:['ne','en'],creator:{'@type':'Organization',name:'Axis Studio',url:'https://axisfilmstudio.com'}}).replace(/</g,'\\u003c')}}/><div className="preview-banner"><a href="/templates">← Collection</a><span>{t.english} · Sample invitation</span><a href={`/create?template=${id}`}>Use this design ↗</a></div><GuestInvitation data={sampleContent(t)}/></>;}

export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;const t=templates.find(t=>t.id===id);return t?pageMetadata(t.english+' Wedding Invitation',t.description+' Personalize the typography, language, photos and guest experience.','/templates/'+id):{title:'Template not found',robots:{index:false}};}
