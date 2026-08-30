const menu=document.querySelector('.menu'); if(menu) menu.addEventListener('click',()=>menu.closest('.header').classList.toggle('open'));
const grid=document.querySelector('#resource-grid');
if(grid && window.RESOURCES){
 const render=list=>grid.innerHTML=list.map(r=>`<article class="card"><div class="icon">${r.icon}</div><span class="tag-pill">${r.cat}</span><span class="tag-pill">${r.format}</span><h3>${r.title}</h3><p>${r.desc}</p><small>${r.age}</small></article>`).join('');
 render(window.RESOURCES);
 document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;render(f==='all'?window.RESOURCES:window.RESOURCES.filter(r=>r.cat===f));}));
}
