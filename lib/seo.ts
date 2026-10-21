import type {Metadata} from 'next';
export const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL||'https://axis-invitation.axisstudio-films.chatgpt.site').replace(/\/$/,'');
export function pageMetadata(title:string,description:string,path:string):Metadata{return {title,description,alternates:{canonical:siteUrl+path},openGraph:{title:title+' | Axis Invitation',description,url:siteUrl+path,siteName:'Axis Invitation',type:'website',locale:'en_US',alternateLocale:['ne_NP']},twitter:{card:'summary',title,description}};}
export const privateMetadata:Metadata={robots:{index:false,follow:false,noarchive:true}};
