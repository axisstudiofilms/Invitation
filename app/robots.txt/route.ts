import {siteUrl} from '@/lib/seo';
export function GET(){return new Response('User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /editor/\nDisallow: /preview/\nDisallow: /dashboard\nDisallow: /create\nDisallow: /signin-with-chatgpt\nSitemap: '+siteUrl+'/sitemap.xml\n',{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public, max-age=3600'}});}
