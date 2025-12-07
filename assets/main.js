/* Minimal JS: menu toggle and simple dark-mode (saved per-session) */
(function(){
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  const body = document.body;

  menuBtn && menuBtn.addEventListener('click', function(){
    if(nav.style.display === 'block'){ nav.style.display = ''; }
    else { nav.style.display = 'block'; }
  });

  // simple persist theme using localStorage
  function applyTheme(t){
    if(t === 'dark'){ body.classList.remove('light'); body.classList.add('dark'); document.documentElement.style.setProperty('--bg','#0b1320'); document.documentElement.style.setProperty('--text','#e6f0f2'); document.documentElement.style.setProperty('--muted','#98a4ad'); document.documentElement.style.setProperty('--card','#081827'); document.documentElement.style.setProperty('--accent','#3dd6d1'); }
    else { body.classList.remove('dark'); body.classList.add('light'); document.documentElement.style.setProperty('--bg','#ffffff'); document.documentElement.style.setProperty('--text','#0b1320'); document.documentElement.style.setProperty('--muted','#5b6b76'); document.documentElement.style.setProperty('--card','#f6f8fa'); document.documentElement.style.setProperty('--accent','#0ea5a4'); }
  }

  const saved = localStorage.getItem('site-theme') || 'light';
  applyTheme(saved);

  // toggle with double-click on logo (hidden shortcut)
  const logo = document.querySelector('.logo');
  logo && logo.addEventListener('dblclick', function(){
    const next = document.body.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('site-theme', next);
    applyTheme(next);
  });
})();