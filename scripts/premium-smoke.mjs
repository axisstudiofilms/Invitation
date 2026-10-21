import assert from 'node:assert/strict';
import {defaultContent,templates,contentSchema,setInvitationLanguage} from '../lib/invitation.ts';
const base=process.env.AXIS_TEST_URL||'http://127.0.0.1:5173';
async function html(path){const r=await fetch(base+path);assert.equal(r.status,200,path);return r.text();}
assert.equal(templates.length,17);
const home=await html('/');assert.equal((home.match(/<header class="studio-header"/g)||[]).length,1,'Single studio header');assert.ok(!home.includes('class="product-nav"'),'No second navigation bar');assert.ok(home.includes('application/ld+json'),'Structured metadata');assert.ok(home.includes('rel="canonical"'),'Canonical');
const header=home.slice(home.indexOf('<header'),home.indexOf('</header>'));
for(const path of ['/templates','/pricing','/help','/dashboard','/create'])assert.ok(header.includes(`href="${path}"`),'Product navigation '+path);
assert.ok(!header.includes('href="https://axisfilmstudio.com'),'Header links stay in the invitation app');
const sitemap=await html('/sitemap.xml');assert.equal((sitemap.match(/<loc>/g)||[]).length,21);assert.ok(!sitemap.includes('/w/'));assert.ok(!sitemap.includes('/editor/'));assert.ok((await html('/robots.txt')).includes('Sitemap:'));
for(const t of templates){const page=await html('/templates/'+t.id);assert.ok(page.includes(t.english.replace(/&/g,'&amp;')),'Unique template metadata '+t.id);assert.ok(page.includes('/templates/'+t.id),'Template canonical '+t.id);assert.ok(t.id==='ivory-nepali'?page.includes('ivory-envelope'):page.includes('duet-primary')&&page.includes('duet-secondary'),'Template opening '+t.id);assert.ok(!page.includes('Scroll speed'),'No guest settings toolbar');}
assert.ok((await html('/w/suman-priya')).includes('noindex'),'Couple invitations not indexed');assert.ok((await html('/dashboard')).includes('noindex'),'Private pages not indexed');
const english=setInvitationLanguage(defaultContent,'en');assert.equal(english.groomFamily,'The Adhikari family');const custom=setInvitationLanguage({...defaultContent,welcome:'Our custom words'},'en');assert.equal(custom.welcome,'Our custom words','Language changes preserve custom wording');
assert.ok(!contentSchema.safeParse({...defaultContent,font:'not-a-font'}).success);assert.ok(!contentSchema.safeParse({...defaultContent,motion:'flash'}).success);
assert.ok(!contentSchema.safeParse({...defaultContent,heroSecondary:'javascript:alert(1)'}).success,'Unsafe second photo rejected');
const headers={'Content-Type':'application/json',Cookie:'__sites_local_auth=1'};const data={...defaultContent,font:'kalam',motion:'cinematic',autoScroll:true,template:'letter'};const created=await fetch(base+'/api/invitations',{method:'POST',headers,body:JSON.stringify(data)});assert.equal(created.status,201);const inv=await created.json();const saved=await (await fetch(base+'/api/invitations/'+inv.id,{headers})).json();assert.equal(saved.data.font,'kalam');assert.equal(saved.data.motion,'cinematic');assert.equal(saved.data.autoScroll,true);
const bank=await fetch(base+'/api/payments',{method:'POST',headers,body:JSON.stringify({provider:'bank',invitationId:inv.id})});assert.equal(bank.status,200);assert.equal((await bank.json()).mode,'test');
console.log('PASS: single header, 17 templates, SEO metadata/sitemap/noindex, language preservation, persisted font/motion/scroll settings, bank test adapter.');

