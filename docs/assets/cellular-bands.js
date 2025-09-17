// Cellular Bands Interactive Finder
// Wait for page to fully load, including Docsify
function initBandsFinder() {
  // Check if elements exist, if not wait a bit more
  if (!document.getElementById('rows')) {
    setTimeout(initBandsFinder, 100);
    return;
  }
  const d = [
    // ---------- UNITED STATES ----------
    { c:"🇺🇸 United States", k:"ATT, AT&T", carrier:"AT&T", lte:["B2","B4","B5","B12","B14","B17","B29","B30","B66"], nr:["n2","n5","n66","n77","n260","n261"], note:"n2/n66 mostly via DSS; C-band n77 is main mid-band. mmWave (n260/n261) limited urban."},
    { c:"🇺🇸 United States", k:"Verizon, VZW", carrier:"Verizon", lte:["B2","B4","B5","B13","B66"], nr:["n2","n5","n66","n77","n260","n261"], note:"C-band n77 widespread; mmWave n260/n261 in dense areas."},
    { c:"🇺🇸 United States", k:"TMobile, T-Mobile", carrier:"T-Mobile", lte:["B2","B4","B12","B66","B71"], nr:["n25","n41","n71","n77","n258","n260","n261"], note:"n41 (2.5 GHz) primary; n71 for reach; C-band n77 infill; mmWave sparse."},
  
    // ---------- UNITED KINGDOM ----------
    { c:"🇬🇧 United Kingdom", k:"EE", carrier:"EE", lte:["B1","B3","B7","B20","B28"], nr:["n78","n28","n1"], note:"n78 (3.5 GHz) core; low-band n28 (700 MHz) plus some DSS on n1."},
    { c:"🇬🇧 United Kingdom", k:"Vodafone UK", carrier:"Vodafone", lte:["B1","B3","B7","B8","B20"], nr:["n78","n28","n1"], note:"Mix of n78 + n28; SA live."},
    { c:"🇬🇧 United Kingdom", k:"O2", carrier:"O2", lte:["B1","B3","B20"], nr:["n78","n28"], note:"700 MHz n28 + 3.5 GHz n78."},
    { c:"🇬🇧 United Kingdom", k:"Three UK", carrier:"Three", lte:["B1","B3","B20","B32"], nr:["n78"], note:"3.5 GHz capacity focus."},
  
    // ---------- GERMANY / FRANCE / SPAIN ----------
    { c:"🇩🇪 Germany", k:"Deutsche Telekom, Telekom", carrier:"Deutsche Telekom", lte:["B1","B3","B8","B20"], nr:["n1","n78"], note:"n1 via DSS (2.1 GHz) + n78 (3.6 GHz)."},
    { c:"🇫🇷 France", k:"Orange", carrier:"Orange", lte:["B1","B3","B7","B20"], nr:["n78","n28"], note:"700 MHz (n28) + 3.5 GHz (n78)."},
    { c:"🇪🇸 Spain", k:"Movistar, Telefonica", carrier:"Telefónica (Movistar)", lte:["B1","B3","B7","B20"], nr:["n78","n28"], note:"700 MHz n28 + 3.5 GHz n78 widespread."},
  
    // ---------- AUSTRALIA ----------
    { c:"🇦🇺 Australia", k:"Telstra", carrier:"Telstra", lte:["B1","B3","B5","B7","B28","B40"], nr:["n78","n257","n258","n261"], note:"n78 nationwide; mmWave (n257/258/261) in cities."},
    { c:"🇦🇺 Australia", k:"Optus", carrier:"Optus", lte:["B1","B3","B7","B28","B40"], nr:["n78","n258"], note:"3.5 GHz + 26 GHz."},
    { c:"🇦🇺 Australia", k:"Vodafone AU, TPG", carrier:"Vodafone", lte:["B1","B3","B5","B7","B8","B28"], nr:["n78"], note:"3.5 GHz focus."},
  
    // ---------- JAPAN ----------
    { c:"🇯🇵 Japan", k:"Docomo, NTT", carrier:"NTT Docomo", lte:["B1","B3","B19","B21","B28","B42"], nr:["n78","n79","n257"], note:"Sub-6 n78/n79; mmWave n257 in urban zones."},
    { c:"🇯🇵 Japan", k:"KDDI, au", carrier:"KDDI (au)", lte:["B1","B3","B11","B18","B26","B28","B41"], nr:["n77","n78","n79","n257"], note:"3.7 GHz (n77/n78), 4.5 GHz (n79), 28 GHz (n257)."},
    { c:"🇯🇵 Japan", k:"SoftBank", carrier:"SoftBank", lte:["B1","B3","B8","B41","B42"], nr:["n77","n79","n257"], note:"Sub-6 mix + mmWave."},
  
    // ---------- INDIA ----------
    { c:"🇮🇳 India", k:"Jio", carrier:"Reliance Jio", lte:["B3","B5","B40"], nr:["n28","n78"], note:"700 MHz n28 + 3.5 GHz n78."},
    { c:"🇮🇳 India", k:"Airtel", carrier:"Airtel", lte:["B1","B3","B8","B40"], nr:["n78"], note:"3.5 GHz n78 primary."},
    { c:"🇮🇳 India", k:"Vi, Vodafone Idea", carrier:"Vi (Vodafone Idea)", lte:["B1","B3","B8","B40","B41"], nr:["n78"], note:"5G footprint limited; n78 where active."},
  
    // ---------- CANADA ----------
    { c:"🇨🇦 Canada", k:"Rogers", carrier:"Rogers", lte:["B2","B4","B5","B7","B12","B13","B17","B66"], nr:["n66","n5","n25","n77","n78"], note:"n66/n5 via DSS; 3500 MHz n78 mid-band; C-band n77 rollout."},
    { c:"🇨🇦 Canada", k:"Bell", carrier:"Bell", lte:["B2","B4","B5","B7","B12","B17","B66"], nr:["n66","n5","n25","n77","n78"], note:"Similar mix incl. 3500 MHz."},
    { c:"🇨🇦 Canada", k:"Telus", carrier:"Telus", lte:["B2","B4","B5","B7","B12","B17","B66"], nr:["n71","n5","n66","n25","n77","n78"], note:"Adds 600 MHz n71 in some markets + 3500 MHz."},
  
    // ---------- BRAZIL ----------
    { c:"🇧🇷 Brazil", k:"Vivo, Telefônica", carrier:"Vivo", lte:["B3","B7","B28"], nr:["n78"], note:"Nationwide 3.5 GHz n78; auction 2021."},
    { c:"🇧🇷 Brazil", k:"Claro BR", carrier:"Claro", lte:["B3","B7","B28"], nr:["n78"], note:"n78 + FWA options."},
    { c:"🇧🇷 Brazil", k:"TIM BR", carrier:"TIM", lte:["B3","B7","B28"], nr:["n78"], note:"n78 across capitals."},
  
    // ---------- MALAYSIA (DNB SWN) ----------
    { c:"🇲🇾 Malaysia", k:"Celcom", carrier:"Celcom (on DNB)", lte:["B3","B7","B8","B28"], nr:["n78"], note:"All MNOs ride DNB single wholesale n78 (3.5 GHz)."},
    { c:"🇲🇾 Malaysia", k:"Digi", carrier:"Digi (on DNB)", lte:["B3","B7","B8","B28"], nr:["n78"], note:"As above."},
    { c:"🇲🇾 Malaysia", k:"Maxis", carrier:"Maxis (on DNB)", lte:["B1","B3","B7","B8","B28"], nr:["n78"], note:"As above."},
    { c:"🇲🇾 Malaysia", k:"U Mobile", carrier:"U Mobile (on DNB)", lte:["B3","B7","B8"], nr:["n78"], note:"As above."},
  
    // ---------- MEXICO ----------
    { c:"🇲🇽 Mexico", k:"Telcel", carrier:"Telcel", lte:["B2","B4","B5","B7","B28","B66"], nr:["n78"], note:"Primary mid-band n78; other 5G bands may appear device-dependent."},
    { c:"🇲🇽 Mexico", k:"AT&T MX", carrier:"AT&T Mexico", lte:["B2","B4","B5","B7","B66"], nr:["n66","n41","n78"], note:"Mix of n66/n41/n78 depending on market."},
    { c:"🇲🇽 Mexico", k:"Movistar", carrier:"Movistar (RAN-share)", lte:["B2","B4","B7"], nr:["n7","n41"], note:"Leans on RAN sharing; 5G availability varies."},
  
    // ---------- SOUTH AFRICA ----------
    { c:"🇿🇦 South Africa", k:"Vodacom ZA", carrier:"Vodacom", lte:["B1","B3","B7","B8","B20","B28","B41"], nr:["n78"], note:"3.5 GHz n78; dual-band Massive-MIMO with 2.6 GHz LTE (B41)."},
    { c:"🇿🇦 South Africa", k:"MTN ZA", carrier:"MTN", lte:["B1","B3","B7","B8","B20","B28"], nr:["n78"], note:"n78 core."},
    { c:"🇿🇦 South Africa", k:"Cell C", carrier:"Cell C", lte:["B1","B3","B7","B20"], nr:["n78"], note:"5G mainly through partners."},
    { c:"🇿🇦 South Africa", k:"Telkom ZA", carrier:"Telkom", lte:["B3","B20","B40"], nr:["n78"], note:"Own 2.3 GHz LTE + n78 5G."},
  
    // ---------- SOUTH KOREA ----------
    { c:"🇰🇷 South Korea", k:"SKT, SK Telecom", carrier:"SK Telecom", lte:["B1","B3","B5","B7"], nr:["n78","n257"], note:"n78 (3.5 GHz) main; mmWave n257 in Seoul. Excellent unlimited 5G tourist eSIMs."},
    { c:"🇰🇷 South Korea", k:"KT Korea Telecom", carrier:"KT", lte:["B1","B3","B5","B7"], nr:["n78","n257"], note:"Wide 3.5 GHz coverage; mmWave pilot."},
    { c:"🇰🇷 South Korea", k:"LG U+", carrier:"LG U+", lte:["B1","B3","B5","B7"], nr:["n78"], note:"Midband only but great data rates."},
  
    // ---------- SINGAPORE ----------
    { c:"🇸🇬 Singapore", k:"Singtel", carrier:"Singtel", lte:["B1","B3","B7","B8","B20"], nr:["n78","n257"], note:"n78 islandwide; mmWave n257 pilot downtown."},
    { c:"🇸🇬 Singapore", k:"StarHub", carrier:"StarHub", lte:["B1","B3","B7","B8"], nr:["n78"], note:"Affordable tourist SIMs with 5G."},
    { c:"🇸🇬 Singapore", k:"M1", carrier:"M1", lte:["B1","B3","B7"], nr:["n78"], note:"Strong 5G SA rollout."},
  
    // ---------- HONG KONG ----------
    { c:"🇭🇰 Hong Kong", k:"CSL, HKT", carrier:"CSL", lte:["B1","B3","B7"], nr:["n78"], note:"Cheap prepaid + full 5G n78."},
    { c:"🇭🇰 Hong Kong", k:"3 HK", carrier:"Three HK", lte:["B1","B3","B7"], nr:["n78"], note:"n78 on main tourist corridors."},
  
    // ---------- TAIWAN ----------
    { c:"🇹🇼 Taiwan", k:"Chunghwa Telecom", carrier:"Chunghwa Telecom", lte:["B1","B3","B7","B8"], nr:["n78"], note:"n78 coverage in all major cities. Tourist 5G SIM widely available."},
    { c:"🇹🇼 Taiwan", k:"FarEasTone", carrier:"FarEasTone", lte:["B1","B3","B7"], nr:["n78"], note:"Great speeds downtown Taipei."},
  
    // ---------- THAILAND ----------
    { c:"🇹🇭 Thailand", k:"AIS", carrier:"AIS", lte:["B1","B3","B8"], nr:["n28","n41"], note:"n41 2.6 GHz plus n28 low band; strong 5G tourist packages."},
    { c:"🇹🇭 Thailand", k:"TrueMove H", carrier:"TrueMove H", lte:["B1","B3","B8"], nr:["n28","n41"], note:"n41 main mid-band; eSIM widely supported."},
  
    // ---------- INDONESIA ----------
    { c:"🇮🇩 Indonesia", k:"Telkomsel", carrier:"Telkomsel", lte:["B1","B3","B5","B8","B40"], nr:["n40"], note:"5G limited (n40 2.3 GHz) but good LTE B3 coverage Bali/Jakarta."},
  
    // ---------- PHILIPPINES ----------
    { c:"🇵🇭 Philippines", k:"Globe", carrier:"Globe Telecom", lte:["B1","B3","B5","B28"], nr:["n41"], note:"5G in Metro Manila/Cebu on n41."},
    { c:"🇵🇭 Philippines", k:"Smart", carrier:"Smart Communications", lte:["B1","B3","B5","B28"], nr:["n41"], note:"Similar footprint; n41 mid-band."},
  
    // ---------- UAE / DUBAI ----------
    { c:"🇦🇪 United Arab Emirates", k:"Etisalat", carrier:"Etisalat", lte:["B1","B3","B7","B20"], nr:["n78","n258"], note:"n78 across emirates; mmWave n258 at expo / Dubai hotspots."},
    { c:"🇦🇪 United Arab Emirates", k:"du", carrier:"du", lte:["B1","B3","B7"], nr:["n78"], note:"5G coverage in tourist zones."},
  
    // ---------- SAUDI ARABIA ----------
    { c:"🇸🇦 Saudi Arabia", k:"STC", carrier:"STC", lte:["B1","B3","B8","B20"], nr:["n78","n41"], note:"Massive n78 rollout; high speeds in Riyadh/Jeddah."},
  
    // ---------- EGYPT ----------
    { c:"🇪🇬 Egypt", k:"Vodafone Egypt", carrier:"Vodafone", lte:["B1","B3"], nr:["n78"], note:"n78 pilot Cairo. LTE B3 main nationwide."},
  
    // ---------- MOROCCO ----------
    { c:"🇲🇦 Morocco", k:"Maroc Telecom", carrier:"Maroc Telecom", lte:["B3"], nr:["n78"], note:"5G trials Casablanca/Marrakesh."},
  
    // ---------- ARGENTINA ----------
    { c:"🇦🇷 Argentina", k:"Personal", carrier:"Personal", lte:["B4","B7","B28"], nr:["n78"], note:"5G (n78) launched Buenos Aires."},
  
    // ---------- CHILE ----------
    { c:"🇨🇱 Chile", k:"Entel", carrier:"Entel", lte:["B3","B7","B28"], nr:["n78"], note:"Full 3.5 GHz n78 mid-band."},
  
    // ---------- COLOMBIA ----------
    { c:"🇨🇴 Colombia", k:"Claro Colombia", carrier:"Claro", lte:["B2","B4","B7","B28"], nr:["n78"], note:"First 5G licenses 2024; n78 in Bogotá."},
  
    // ---------- SWITZERLAND ----------
    { c:"🇨🇭 Switzerland", k:"Swisscom", carrier:"Swisscom", lte:["B1","B3","B7","B20"], nr:["n78","n258"], note:"Nationwide 3.5 GHz n78; mmWave n258 in cities."},
  
    // ---------- NETHERLANDS ----------
    { c:"🇳🇱 Netherlands", k:"KPN", carrier:"KPN", lte:["B1","B3","B7","B20"], nr:["n78"], note:"n78 3.5 GHz main midband; strong coverage Amsterdam."},
  
    // ---------- PORTUGAL ----------
    { c:"🇵🇹 Portugal", k:"MEO", carrier:"MEO", lte:["B1","B3","B7","B20"], nr:["n78"], note:"5G widely available on 3.5 GHz n78."},
  
    // ---------- TURKEY ----------
    { c:"🇹🇷 Turkey", k:"Turkcell", carrier:"Turkcell", lte:["B1","B3","B7"], nr:["n78"], note:"5G pilot n78; LTE still main outside Istanbul."}
  ];
  

  const rows = document.getElementById('rows');
  const countrySel = document.getElementById('country');
  const q = document.getElementById('q');
  const toggles = [...document.querySelectorAll('.bar .tog button')];
  const clearBtn = document.getElementById('clear');

  // Debug: Check if elements exist
  if (!rows || !countrySel || !q || !toggles.length || !clearBtn) {
    console.error('Missing DOM elements:', { rows, countrySel, q, toggles, clearBtn });
    return;
  }

  function getBandType(band) {
    const b = band.toLowerCase();
    
    // mmWave bands (24+ GHz)
    if (/n2(57|58|60|61)/.test(b)) return 'mmwave';
    
    // Low bands (sub-1GHz)
    if (/^(b5|b8|b12|b13|b14|b17|b18|b19|b20|b26|b28|b29|b71|n5|n8|n12|n14|n18|n20|n26|n28|n71)$/.test(b)) return 'low';
    
    // High bands (2.3-6GHz)
    if (/^(b7|b30|b38|b40|b41|b42|b43|b48|n7|n38|n40|n41|n77|n78|n79)$/.test(b)) return 'high';
    
    // Special bands (carrier-specific or unique)
    if (/^(b32|b46|n25|n66)$/.test(b)) return 'special';
    
    // Mid bands (1-2.3GHz) - default
    return 'mid';
  }

  function chip(txt, isMmWave){
    const span = document.createElement('span');
    span.className='chip';
    span.textContent = txt;
    
    const bandType = getBandType(txt);
    span.dataset.bandType = bandType;
    
    if(isMmWave) span.dataset.mmwave="1";
    span.title = `Click to copy ${txt} (${bandType} band)`;
    span.onclick = async () => {
      try { await navigator.clipboard.writeText(txt); span.style.outlineColor='#5fdb6d'; } catch(e){}
    };
    return span;
  }

  function makeRow(x){
    const r = document.createElement('div');
    r.className='row';
    r.style.display='grid';
    r.style.gridTemplateColumns='220px 220px 1fr 1fr';
    r.style.gap='8px';

    const c = document.createElement('div');
    c.className='country';
    c.innerHTML = `<span class="flag">${x.c.split(' ')[0]}</span><strong>${x.c.replace(/^[^ ]+ /,'')}</strong>`;
    const car = document.createElement('div'); car.className='carrier'; car.textContent=x.carrier;

    const l4 = document.createElement('div'); const l5 = document.createElement('div');
    const wrap4 = document.createElement('div'); wrap4.className='chips';
    const wrap5 = document.createElement('div'); wrap5.className='chips';

    (x.lte||[]).forEach(b=>wrap4.appendChild(chip(b, false)));
    (x.nr||[]).forEach(b=>wrap5.appendChild(chip(b, /n2(57|58|60|61)/.test(b))));

    l4.appendChild(wrap4); l5.appendChild(wrap5);

    const note = document.createElement('div'); note.className='notes hidden'; note.textContent = x.note||'';
    const spanAll = document.createElement('div');
    spanAll.style.gridColumn='1/-1'; spanAll.appendChild(note);

    c.onclick = ()=> note.classList.toggle('hidden');

    r.appendChild(c); r.appendChild(car); r.appendChild(l4); r.appendChild(l5); r.appendChild(spanAll);
    r.dataset.country = x.c;
    r.dataset.k = (x.c+' '+x.carrier+' '+(x.lte||[]).join(' ')+' '+(x.nr||[]).join(' ')+' '+(x.k||'')).toLowerCase();
    return r;
  }

  // Sort data by country first
  d.sort((a, b) => a.c.localeCompare(b.c));
  
  // Populate country dropdown dynamically
  const uniqueCountries = [...new Set(d.map(x => x.c))].sort();
  uniqueCountries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySel.appendChild(option);
  });

  const nodes = d.map(makeRow);
  nodes.forEach(n=>rows.appendChild(n));

  function applyFilter(){
    const wantLTE = toggles.find(t=>t.dataset.type==='lte').classList.contains('active');
    const wantNR  = toggles.find(t=>t.dataset.type==='nr').classList.contains('active');
    const country = countrySel.value;
    const query = q.value.trim().toLowerCase();

    nodes.forEach(n=>{
      let ok = true;
      if(country && n.dataset.country !== country) ok=false;
      if(query && !n.dataset.k.includes(query)) ok=false;

      // per-tech visibility: hide columns but keep row if either type matches
      const cols = n.querySelectorAll(':scope > div');
      const lteCol = cols[2], nrCol = cols[3];
      lteCol.style.display = wantLTE ? '' : 'none';
      nrCol.style.display  = wantNR  ? '' : 'none';

      // If both hidden, hide the whole row
      if(!wantLTE && !wantNR) ok=false;

      n.style.display = ok ? 'grid' : 'none';
    });
  }

  toggles.forEach(btn=>btn.onclick = (e)=>{ e.target.classList.toggle('active'); applyFilter(); });
  countrySel.oninput = q.oninput = applyFilter;
  clearBtn.onclick = ()=>{ q.value=''; countrySel.value=''; toggles.forEach(b=>b.classList.add('active')); applyFilter(); };

  applyFilter();
}

// Start initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBandsFinder);
} else {
  initBandsFinder();
}
