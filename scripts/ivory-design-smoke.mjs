import {sampleContent,templates} from '../lib/invitation.ts';
import assert from 'node:assert/strict';
const base='http://127.0.0.1:5173',headers={'Content-Type':'application/json',Cookie:'__sites_local_auth=1'};
const data={...sampleContent(templates.find(t=>t.id==='ivory-nepali')),groom:'Aarav Vikram Adhikari',bride:'Shruti Rajyalaxmi Sharma',groomNe:'आरव विक्रम अधिकारी',brideNe:'श्रुति राज्यलक्ष्मी शर्मा',motion:'off'};
const c=await fetch(base+'/api/invitations',{method:'POST',headers,body:JSON.stringify(data)});assert.equal(c.status,201);const inv=await c.json();const slug='ivory-longnames-'+Date.now();
const p=await fetch(base+'/api/invitations/'+inv.id+'/publish',{method:'POST',headers,body:JSON.stringify({slug,revision:inv.revision})});assert.equal(p.status,200);
const html=await(await fetch(base+'/w/'+slug)).text();assert.ok(html.includes('data-motion="off"'));assert.ok(html.includes('noindex'));assert.ok(html.includes('आरव विक्रम अधिकारी'));
const sample=await(await fetch(base+'/templates/ivory-nepali')).text();assert.ok(sample.includes('CreativeWork'));assert.ok(sample.includes('rel="canonical"'));assert.ok(sample.includes('ivory-envelope-flap'));assert.ok(sample.includes('ivory-countdown'));
console.log(JSON.stringify({result:'PASS',url:base+'/w/'+slug,checks:['long names preserved','motion-off setting','public noindex','template canonical','template structured data']}));
