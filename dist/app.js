import {regions,groups,flowers} from './data.js';
import {imageSets} from './images.js';
const $=s=>document.querySelector(s);
const groupMap=new Map(groups.map(g=>[g.id,g]));
const regionMap=new Map(regions.map(r=>[r.id,r]));
const ids=new Set(flowers.map(f=>f.id));
const numbers=['','一','二','三','四','五','六'];
let region='all',filter='all',series='all',query='',expandAll=false,toastTimer;
const openRoutes=new Set();
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=id=>`<svg aria-hidden="true"><use href="#i-${id}"/></svg>`;
const isPending=f=>f.tags.some(t=>t.includes('待核'));
function announce(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').hidden=false;toastTimer=setTimeout(()=>$('#toast').hidden=true,5000);}
function renderRegions(){
 $('#regions').innerHTML=[{id:'all',name:'全部区域'},...regions].map(r=>`<button class="region-button" data-region="${r.id}" aria-pressed="${r.id===region}"><span>${esc(r.name)}</span><span>${r.id==='all'?flowers.length:flowers.filter(f=>f.region===r.id).length}处</span></button>`).join('');
}
function groupPath(f){
 const g=groupMap.get(f.group);
 const links=flowers.filter(x=>x.group===g.id).sort((a,b)=>a.part-b.part).map(target=>`<button data-go="${target.id}" title="${esc(target.place)}">${g.total===1?'完整记忆':`其${numbers[target.part]}`} · ${esc(regionMap.get(target.region).name.split('与')[0])}</button>`).join('');
 return `<div class="group-path"><div class="group-path-title">同一段记忆的相关位置</div><div class="petal-links">${links}</div></div>`;
}
function gallery(f){
 const images=imageSets[f.id]||[];
 if(!images.length)return '<div class="no-images"><strong>此处暂无原始图示</strong><p>参考页没有提供这一条的地图或截图。请按上方文字路线定位，也可查看下方相关位置。</p></div>';
 const name=groupMap.get(f.group).name;
 return `<div class="point-gallery">${images.map((img,index)=>{const kind=img.kind==='map'?'地图定位':'实机位置';return `<button class="image-tile" data-photo="${f.id}" data-photo-index="${index}" aria-label="站内放大${esc(name)}${kind}"><img src="${img.src}" width="${img.width}" height="${img.height}" loading="lazy" decoding="async" alt="${esc(name)}其${numbers[f.part]}的${kind}"><span class="photo-caption"><b>${kind}</b><span>点击放大</span>${icon('zoom')}</span></button>`;}).join('')}</div><p class="image-credit">图示：Fextralife · 游戏画面 © S-GAME。原图保留游戏界面，中文地名见上方说明。</p>`;
}
let viewerId='',viewerIndex=0,viewerZoom=false;
function showPhoto(id,index){
 const images=imageSets[id]||[];if(!images.length)return;
 viewerId=id;viewerIndex=(index+images.length)%images.length;viewerZoom=false;
 const f=flowers.find(f=>f.id===id),g=groupMap.get(f.group),img=images[viewerIndex];
 $('#viewer-title').textContent=`${g.name} · ${g.total===1?'完整记忆':'其'+numbers[f.part]}`;
 $('#viewer-caption').textContent=`${img.kind==='map'?'地图定位':'实机位置'} · ${f.place}`;
 $('#viewer-photo').src=img.src;$('#viewer-photo').alt=`${g.name} ${f.place} ${img.kind==='map'?'地图':'实机截图'}`;
 $('#viewer-photo').classList.remove('zoomed');$('#viewer-zoom').textContent='放大查看';$('#viewer-zoom').setAttribute('aria-pressed','false');
 $('#viewer-previous').disabled=images.length<2;$('#viewer-next').disabled=images.length<2;
 if(!$('#image-viewer').open){$('#image-viewer').showModal();document.body.classList.add('viewer-open');}
}
function flowerRow(f){
 const g=groupMap.get(f.group),open=expandAll||openRoutes.has(f.id),chapter=g.total===1?'完整记忆':`其${numbers[f.part]}`;
 const photos=(imageSets[f.id]||[]).length;
 return `<article class="flower" id="${f.id}"><button class="flower-main" data-toggle="${f.id}" aria-expanded="${open}" aria-controls="route-${f.id}">
 <span class="flower-title"><span class="flower-name">${esc(g.name)} <span class="chapter">${chapter}</span></span><span class="flower-sub">完整记忆奖励：生命上限 +${g.hp}%</span></span>
 <span class="flower-location"><span class="flower-place">${esc(f.place)}</span><span class="tags">${f.tags.map(t=>`<span class="tag ${t.includes('待核')?'pending':''}">${esc(t)}</span>`).join('')}</span></span>
 <span class="photo-count">${photos?icon('image')+' 有图':'暂无配图'}</span><span class="toggle-route">${icon('chevron')}</span></button>
 <div id="route-${f.id}" class="flower-route" ${open?'':'hidden'}><p>${esc(f.route)}</p>${isPending(f)?'<p class="pending-note">此条含待核细节，请结合下方图示和游戏内提示确认。</p>':''}${gallery(f)}<div class="route-links"><button data-copy="${f.id}">分享此位置 ${icon('link')}</button></div>${groupPath(f)}</div></article>`;
}
function filtered(){return flowers.filter(f=>{
 const g=groupMap.get(f.group),r=regionMap.get(f.region);
 return (region==='all'||f.region===region)&&(series==='all'||f.group===series)&&(filter!=='images'||(imageSets[f.id]||[]).length>0)&&(filter!=='return'||f.tags.includes('回访'))&&(filter!=='pending'||isPending(f))&&(!query||`${g.name} ${g.en} ${r.name} ${f.place} ${f.route} ${f.tags.join(' ')}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
});}
function render(){
 const visible=filtered();
 $('#results').innerHTML=regions.map(r=>{const items=visible.filter(f=>f.region===r.id);if(!items.length)return '';return `<section class="region-section" aria-labelledby="heading-${r.id}"><div class="region-header"><div class="region-name"><h3 id="heading-${r.id}">${esc(r.name)}</h3><p>${esc(r.description)}</p></div><span>${items.length}处位置</span></div><div class="flowers">${items.map(flowerRow).join('')}</div></section>`;}).join('');
 $('#empty').hidden=visible.length!==0;
 $('#result-count').textContent=`找到 ${visible.length} 处位置`;
 $('#active-filter').hidden=region==='all'&&series==='all'&&filter==='all'&&!query;
 $('#active-filter').innerHTML=`<span>正在查看：${esc(region==='all'?'全部区域':regionMap.get(region).name)}${series==='all'?'':' · '+esc(groupMap.get(series).name)}</span><button class="text-button" data-clear>清除筛选</button>`;
 document.querySelectorAll('[data-region]').forEach(btn=>btn.setAttribute('aria-pressed',btn.dataset.region===region));
 document.querySelectorAll('[data-filter]').forEach(btn=>btn.setAttribute('aria-pressed',btn.dataset.filter===filter));
 $('#expand').textContent=expandAll?'收起全部图文':'展开全部图文';
}
function clearFilters(){region='all';filter='all';series='all';query='';$('#series').value='all';$('#search').value='';render();}
function goTo(id){if(!ids.has(id))return;const f=flowers.find(f=>f.id===id);region=f.region;series='all';query='';filter='all';$('#series').value='all';$('#search').value='';openRoutes.add(id);render();history.replaceState(null,'',`#${id}`);requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({block:'start',behavior:'smooth'}));}
$('#series').innerHTML='<option value="all">所有记忆系列</option>'+groups.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join('');
renderRegions();render();
$('#regions').addEventListener('click',e=>{const btn=e.target.closest('[data-region]');if(!btn)return;region=btn.dataset.region;series='all';$('#series').value='all';render();$('#list').scrollIntoView({block:'start',behavior:'smooth'});btn.scrollIntoView({block:'nearest',inline:'nearest'});});
$('.filter-tabs').addEventListener('click',e=>{const btn=e.target.closest('[data-filter]');if(btn){filter=btn.dataset.filter;render();}});
$('#search').addEventListener('input',e=>{query=e.target.value.trim();render();});
$('#series').addEventListener('change',e=>{series=e.target.value;render();});
$('#expand').addEventListener('click',()=>{expandAll=!expandAll;openRoutes.clear();render();});
$('#clear-filters').addEventListener('click',clearFilters);
$('#active-filter').addEventListener('click',e=>{if(e.target.closest('[data-clear]'))clearFilters();});
$('#results').addEventListener('click',async e=>{
 const photo=e.target.closest('[data-photo]');if(photo){showPhoto(photo.dataset.photo,Number(photo.dataset.photoIndex));return;}
 const toggle=e.target.closest('[data-toggle]');if(toggle){const id=toggle.dataset.toggle;const area=$('#route-'+id),open=area.hidden;area.hidden=!open;toggle.setAttribute('aria-expanded',open);open?openRoutes.add(id):openRoutes.delete(id);return;}
 const target=e.target.closest('[data-go]');if(target){goTo(target.dataset.go);return;}
 const copy=e.target.closest('[data-copy]');if(copy){const link=new URL(location.href);link.hash=copy.dataset.copy;try{await navigator.clipboard.writeText(link.href);announce('位置链接已复制，可以发给朋友啦。');}catch{history.replaceState(null,'',link.href);announce('请复制地址栏中的位置链接。');}}
});
$('#viewer-close').addEventListener('click',()=>$('#image-viewer').close());
$('#viewer-previous').addEventListener('click',()=>showPhoto(viewerId,viewerIndex-1));
$('#viewer-next').addEventListener('click',()=>showPhoto(viewerId,viewerIndex+1));
$('#viewer-zoom').addEventListener('click',()=>{viewerZoom=!viewerZoom;$('#viewer-photo').classList.toggle('zoomed',viewerZoom);$('#viewer-zoom').textContent=viewerZoom?'适应画面':'放大查看';$('#viewer-zoom').setAttribute('aria-pressed',viewerZoom);});
$('#image-viewer').addEventListener('close',()=>{document.body.classList.remove('viewer-open');document.querySelector(`[data-photo="${viewerId}"][data-photo-index="${viewerIndex}"]`)?.focus({preventScroll:true});});
$('#image-viewer').addEventListener('click',e=>{if(e.target===$('#image-viewer'))$('#image-viewer').close();});
document.querySelectorAll('[data-source]').forEach(btn=>btn.addEventListener('click',()=>{const panel=$('#source-'+btn.dataset.source),open=panel.hidden;document.querySelectorAll('.source-inline').forEach(p=>p.hidden=true);document.querySelectorAll('[data-source]').forEach(b=>b.setAttribute('aria-expanded','false'));panel.hidden=!open;btn.setAttribute('aria-expanded',open);}));
$('#show-glossary').addEventListener('click',()=>{const panel=$('#glossary');panel.hidden=!panel.hidden;if(!panel.hidden){$('#glossary-content').innerHTML=`<div class="glossary-rows">${groups.map(g=>`<div class="glossary-item"><b>${esc(g.name)}</b><span>${esc(g.en)}</span></div>`).join('')}</div>`;panel.scrollIntoView({block:'start',behavior:'smooth'});}$('#show-glossary').innerHTML=(panel.hidden?'查看全部系列对照':'收起完整对照')+icon('arrow');});
document.addEventListener('keydown',e=>{if($('#image-viewer').open){if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();showPhoto(viewerId,viewerIndex+(e.key==='ArrowRight'?1:-1));}return;}if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();$('#search').focus();}if(e.key==='Escape'&&document.activeElement===$('#search')){$('#search').value='';query='';render();}});
window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(ids.has(id))goTo(id);});
if(ids.has(location.hash.slice(1)))goTo(location.hash.slice(1));
