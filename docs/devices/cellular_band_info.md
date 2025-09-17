# Cellular Band Information

Interactive cellular band finder for major carriers worldwide.

<style>
  .cellui { --bg:#0b0f14; --fg:#e8eef6; --mut:#9fb0c2; --card:#121a22; --chip:#182231; --chipb:#1f2b3b; --ok:#5fdb6d; --mmw:#caa7ff; --brd:#203040; }
  .cellui * { box-sizing:border-box; }
  .cellui { font-family: Inter, ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Noto Color Emoji, EmojiOne; color:var(--fg); background:transparent; }
  .cellui .bar { position:sticky; top:0; z-index:5; background:linear-gradient(180deg, rgba(11,15,20,.95), rgba(11,15,20,.85)); backdrop-filter:saturate(1.2) blur(6px); border:1px solid var(--brd); border-radius:14px; padding:10px; margin:8px 0 16px; display:grid; gap:10px; grid-template-columns: 1fr 160px 120px 120px; }
  .cellui .bar input, .cellui .bar select, .cellui .bar button {
    width:100%; padding:10px 12px; border-radius:12px; border:1px solid var(--brd); background:var(--card); color:var(--fg); outline:none;
  }
  .cellui .bar .tog { display:flex; gap:8px; }
  .cellui .bar .tog button { cursor:pointer; background:var(--chip); border:1px solid var(--brd); }
  .cellui .bar .tog button.active { background:var(--chipb); }
  .cellui .table { width:100%; border-collapse:separate; border-spacing:0 8px; }
  .cellui .row { background:var(--card); border:1px solid var(--brd); border-radius:16px; overflow:hidden; }
  .cellui .row > div { padding:10px 12px; }
  .cellui .row.head { background:transparent; border:0; font-weight:700; color:var(--mut); }
  .cellui .row .country { display:flex; gap:10px; align-items:center; cursor:pointer; }
  .cellui .flag { width:20px; height:20px; }
  .cellui .carrier { font-weight:600; }
  .chips { display:flex; flex-wrap:wrap; gap:6px; }
  .chip { background:var(--chip); border:1px solid var(--brd); padding:6px 8px; border-radius:10px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:12px; cursor:pointer; }
  .chip[data-mmwave="1"]{ outline:1px dashed var(--mmw); }
  .chip:hover { transform:translateY(-1px); }
  
  /* Band color coding */
  .chip[data-band-type="low"] { background: linear-gradient(135deg, #4ade80, #22c55e); color: #000; }
  .chip[data-band-type="mid"] { background: linear-gradient(135deg, #60a5fa, #3b82f6); color: #fff; }
  .chip[data-band-type="high"] { background: linear-gradient(135deg, #f472b6, #ec4899); color: #fff; }
  .chip[data-band-type="mmwave"] { background: linear-gradient(135deg, #c084fc, #a855f7); color: #fff; outline: 2px dashed #fbbf24; }
  .chip[data-band-type="special"] { background: linear-gradient(135deg, #fb923c, #f97316); color: #fff; }
  .notes { color:var(--mut); font-size:12px; margin-top:6px; }
  .hidden { display:none; }

  @media (max-width:900px){
    .cellui .bar { grid-template-columns: 1fr 1fr; }
    .cellui .bar .tog { grid-column:1/-1; }
  }
</style>

<div class="cellui" id="bands-app">

  <!-- Filter Bar -->
  <div class="bar">
    <input id="q" placeholder="Search country / carrier / band (e.g. n78, B20, 'Telcel')">
    <select id="country">
      <option value="">All countries</option>
    </select>
    <div class="tog" role="group" aria-label="4G/5G filter">
      <button type="button" data-type="lte" class="active">Show 4G (LTE)</button>
      <button type="button" data-type="nr" class="active">Show 5G (NR)</button>
    </div>
    <button id="clear">Reset</button>
  </div>

  <!-- Head -->
  <div class="row head" style="display:grid;grid-template-columns: 220px 220px 1fr 1fr; gap:8px;">
    <div>Country</div><div>Carrier</div><div>4G (LTE)</div><div>5G (NR)</div>
  </div>

  <!-- DATA ROWS (tap chips to copy) -->
  <div id="rows"></div>

  <div class="notes">
    Tap a band to copy. Click a country to toggle extra notes.<br>
    <strong>Band Colors:</strong> 
    <span class="chip" data-band-type="low" style="margin:2px;">Low</span>
    <span class="chip" data-band-type="mid" style="margin:2px;">Mid</span>
    <span class="chip" data-band-type="high" style="margin:2px;">High</span>
    <span class="chip" data-band-type="mmwave" style="margin:2px;">mmWave</span>
    <span class="chip" data-band-type="special" style="margin:2px;">Special</span>
  </div>
</div>


