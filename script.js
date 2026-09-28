(function(){
  const path = window.location.pathname.split('/').filter(Boolean);
  const isFile = path.length && /\.[a-z0-9]+$/i.test(path[path.length-1]);
  const depth = Math.max(0, (isFile ? path.length - 1 : path.length));
  const root = '../'.repeat(depth);

  document.querySelectorAll('[data-root-href]').forEach(a => {
    a.setAttribute('href', root + a.getAttribute('data-root-href'));
  });

  const menu = document.querySelector('.menu');
  const links = document.querySelector('.links');
  if(menu && links){
    menu.addEventListener('click',()=>{
      const open = links.classList.toggle('mobile');
      menu.setAttribute('aria-expanded', String(open));
      if(open){
        links.style.display='grid';
        links.style.position='absolute';
        links.style.top='66px';
        links.style.left='0';
        links.style.right='0';
        links.style.padding='18px';
        links.style.background='#100708';
        links.style.borderBottom='1px solid rgba(244,197,66,.28)';
        links.style.gap='16px';
      } else {
        links.style.display='';
        links.removeAttribute('style');
      }
    });
  }
})();
