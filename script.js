(function(){
  const root=document.documentElement;
  const button=document.querySelector('.theme-toggle');
  const key='bh-academic-theme';
  let saved=null; try{saved=localStorage.getItem(key)}catch(e){}
  if(saved==='dark') root.dataset.theme='dark';
  if(button){button.setAttribute('aria-pressed',root.dataset.theme==='dark'?'true':'false');button.addEventListener('click',()=>{const dark=root.dataset.theme!=='dark';root.dataset.theme=dark?'dark':'light';button.setAttribute('aria-pressed',String(dark));try{localStorage.setItem(key,dark?'dark':'light')}catch(e){}})}
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
