import assert from 'node:assert/strict';import fs from 'node:fs';import {flowers,groups,regions} from './dist/data.js';
import {imageSets} from './dist/images.js';
assert.equal(flowers.length,128);assert.equal(groups.length,37);assert.equal(regions.length,8);assert.equal(new Set(flowers.map(x=>x.id)).size,128);
const expected={valley:1,forest:18,village:16,town:32,lake:30,camp:19,prison:6,mountain:6};
for(const r of regions)assert.equal(flowers.filter(x=>x.region===r.id).length,expected[r.id],r.name);
for(const f of flowers){const g=groups.find(g=>g.id===f.group);assert.ok(g);assert.ok(f.part>=1&&f.part<=g.total);assert.ok(f.place&&f.route);assert.ok(regions.find(r=>r.id===f.region));assert.ok(!/[a-zA-Z]/.test(f.place+f.route),f.id);}
const missing=groups.flatMap(g=>Array.from({length:g.total},(_,i)=>i+1).filter(p=>!flowers.find(f=>f.group===g.id&&f.part===p)).map(p=>`${g.id}-${p}`));assert.deepEqual(missing,['cold-4','leaders-6']);
for(const file of ['dist/index.html','dist/styles.css','dist/app.js','dist/assets/game-art.webp','dist/assets/icon.svg'])assert.ok(fs.existsSync(file));
const images=Object.values(imageSets).flat();assert.equal(images.length,226);assert.equal(Object.values(imageSets).filter(x=>x.length).length,117);assert.equal(Object.keys(imageSets).length,128);
for(const img of images){assert.ok(img.src.startsWith('assets/flowers/'));assert.ok(fs.existsSync('dist/'+img.src));assert.ok(img.width>=200&&img.height>=200);}
const html=fs.readFileSync('dist/index.html','utf8');assert.ok(html.includes('lang="zh-CN"'));const external=[...html.matchAll(/<a\b[^>]*href=["'](https?:\/\/[^"']+)["']/gi)].map(m=>m[1]);
const allowed=new Set(['https://www.ifdian.net/a/nnegret','https://github.com/nregret/tinghua-pbz-guide']);
assert.ok(external.every(url=>allowed.has(url)));assert.equal(external.filter(url=>url.includes('ifdian.net')).length,2);
console.log(JSON.stringify({records:flowers.length,series:groups.length,regions:expected,missing,pending:flowers.filter(f=>f.tags.some(t=>t.includes('待核'))).length,images:images.length,illustrated:117,missingImages:11,outboundAnchors:external.length,result:'passed'}));
