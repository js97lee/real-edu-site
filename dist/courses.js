(() => {
 const size=6,cards=[...document.querySelectorAll('.course')],filters=[...document.querySelectorAll('[data-filter]')];
 const params=new URLSearchParams(location.search);
 const category=filters.some(b=>b.dataset.filter===params.get('category'))?params.get('category'):'all';
 const matching=cards.filter(c=>category==='all'||c.dataset.category.split(' ').includes(category));
 const pages=Math.max(1,Math.ceil(matching.length/size));
 const requested=Number(params.get('page'));
 const page=Math.min(pages,Math.max(1,Number.isInteger(requested)?requested:1));
 const url=(p,cat=category)=>{const q=new URLSearchParams();if(cat!=='all')q.set('category',cat);q.set('page',p);return 'courses.html?'+q.toString();};
 const visible=new Set(matching.slice((page-1)*size,page*size));cards.forEach(c=>c.hidden=!visible.has(c));
 filters.forEach(b=>{b.classList.toggle('active',b.dataset.filter===category);b.setAttribute('aria-pressed',String(b.dataset.filter===category));b.addEventListener('click',()=>{location.href=url(1,b.dataset.filter);});});
 document.querySelector('#course-results').textContent=`전체 ${matching.length}개 강좌 · ${page} / ${pages} 페이지`;
 const nav=document.querySelector('#course-pagination');
 const link=(p,label,current=false)=>`<a href="${url(p)}"${current?' aria-current="page"':''} aria-label="${label==='이전'||label==='다음'?label+' 페이지':p+' 페이지'}">${label}</a>`;
 nav.innerHTML=(page>1?link(page-1,'이전'):'<span aria-disabled="true">이전</span>')+Array.from({length:pages},(_,i)=>link(i+1,String(i+1),i+1===page)).join('')+(page<pages?link(page+1,'다음'):'<span aria-disabled="true">다음</span>');
 if(params.get('page')!==String(page)||params.get('category')&&category==='all')history.replaceState(null,'',url(page));
})();
