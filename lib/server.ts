import { env } from 'cloudflare:workers';
import { getChatGPTUser } from '@/app/chatgpt-auth';
import type { Content } from '@/lib/invitation';
export const database = () => {if(!env.DB)throw new Error('Database unavailable');return env.DB;};
export function rowToInvitation(r:Record<string,any>){return {id:r.id,slug:r.slug,data:JSON.parse(r.data),publishedData:r.published_data?JSON.parse(r.published_data):null,revision:r.revision,updatedAt:r.updated_at,publishedAt:r.published_at};}
export function sameOrigin(request:Request) {const o=request.headers.get('origin');return !o || o===new URL(request.url).origin;}
export async function identity(request:Request) {if(!sameOrigin(request))return null;return getChatGPTUser();}
export const failure=(message:string,status=400)=>Response.json({error:message},{status});
export async function ownsMedia(data:Content,ownerId:string){const keys=[data.hero,data.heroSecondary||'',...data.gallery,data.music,data.video,data.giftQr].filter(v=>v.startsWith('/api/media/')).map(v=>v.slice('/api/media/'.length));for(const key of new Set(keys)){const row=await database().prepare('SELECT key FROM uploads WHERE key = ? AND owner_id = ?').bind(key,ownerId).first();if(!row)return false;}return true;}
export async function protect(request:Request,action:()=>Promise<Response>) {try {return await action();}catch(e){console.error('Invitation API failed',e);return failure('We could not complete that request. Your changes are still in the editor. Please try again.',503);}}
