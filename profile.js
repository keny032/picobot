// Profile logic: save to localStorage
(function(){
  const form = document.getElementById('profileForm');
  const clearBtn = document.getElementById('clearProfile');
  const status = document.getElementById('profileStatus');

  const KEY = 'mz_profile';

  function load(){
    try{
      const raw = localStorage.getItem(KEY);
      if(!raw) return;
      const data = JSON.parse(raw);
      for (const [k,v] of Object.entries(data)){
        const el = document.getElementById(k);
        if(el) el.value = v || '';
      }
    }catch(e){ console.warn(e); }
  }

  function save(data){
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  form?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      plate: document.getElementById('plate').value.toUpperCase().replace(/\s+/g,'')
    };
    save(data);
    status.textContent = 'Sačuvano!';
    setTimeout(()=>status.textContent='', 2000);
  });

  clearBtn?.addEventListener('click', ()=>{
    localStorage.removeItem(KEY);
    form.reset();
    status.textContent = 'Profil obrisan.';
    setTimeout(()=>status.textContent='', 2000);
  });

  load();
})();