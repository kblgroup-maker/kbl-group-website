const header=document.querySelector('.header'),progress=document.querySelector('.progress');
addEventListener('scroll',()=>{const y=scrollY;header.classList.toggle('scrolled',y>80);progress.style.width=(y/(document.documentElement.scrollHeight-innerHeight)*100)+'%'});
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.querySelectorAll('.filters button').forEach(btn=>btn.onclick=()=>{document.querySelector('.filters .active').classList.remove('active');btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.project').forEach(p=>p.classList.toggle('hidden',f!=='all'&&p.dataset.category!==f))});
const box=document.querySelector('.lightbox'),boxImg=box.querySelector('img');document.querySelectorAll('.project').forEach(p=>p.onclick=()=>{boxImg.src=p.dataset.src;box.showModal()});box.querySelector('button').onclick=()=>box.close();box.onclick=e=>{if(e.target===box)box.close()};
document.getElementById('year').textContent=new Date().getFullYear();
