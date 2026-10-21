import {siteUrl} from '@/lib/seo';
import {templates} from '@/lib/invitation';
export function GET(){const paths=['/','/templates','/pricing','/help',...templates.map(t=>'/templates/'+t.id)];const escape=(v:string)=>v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(p=>'<url><loc>'+escape(siteUrl+p)+'</loc></url>').join('')+'</urlset>',{headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'public, max-age=3600'}});}
