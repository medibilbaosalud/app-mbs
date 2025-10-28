<!-- ============= MBS · SaaS Médico Premium (Resumen + Pagos Nutri + Pagos Logopedas + Charts) ============= -->
<style>
:root{
  --mbs-electric-blue:#2264ff;
  --mbs-electric-blue-dark:#1a48d0;
  --mbs-electric-blue-rgb:34,100,255;
  --mbs-night:#091020;
  --mbs-night-rgb:9,16,32;
  --mbs-soft-surface:#f4f6fb;
  --mbs-soft-border:#d7deea;
}

body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, "Inter", "Segoe UI", Roboto, Arial, sans-serif;
  background:linear-gradient(160deg, rgba(var(--mbs-night-rgb),.9) 0%, rgba(var(--mbs-night-rgb),.72) 36%, rgba(244,246,251,.96) 100%);
}

/* ========== Layout wrapper para integrar los widgets ========== */
.mbs-suite{
  font-family: ui-sans-serif, system-ui, -apple-system, "Inter", "Segoe UI", Roboto, Arial, sans-serif;
  color:#0b1f33;
  max-width:1180px;
  margin:0 auto;
  padding:3.4rem 1.4rem 3rem;
  position:relative;
  isolation:isolate;
}
.mbs-suite::before{
  content:"";
  position:fixed;
  top:-260px;
  left:50%;
  transform:translateX(-50%);
  width:min(1280px,94vw);
  height:520px;
  border-radius:58% 42% 60% 40% / 58% 58% 42% 42%;
  background:radial-gradient(circle at top, rgba(var(--mbs-electric-blue-rgb),.22), rgba(var(--mbs-electric-blue-rgb),0));
  filter:blur(0.5px);
  opacity:.9;
  z-index:-2;
  pointer-events:none;
}
.mbs-suite::after{
  content:"";
  position:fixed;
  top:-140px;
  right:6%;
  width:320px;
  height:320px;
  border-radius:50%;
  background:radial-gradient(circle at center, rgba(255,255,255,.18), rgba(255,255,255,0));
  filter:blur(2px);
  opacity:.75;
  z-index:-2;
  pointer-events:none;
}
.mbs-suite-nav{
  display:flex;
  gap:.65rem;
  flex-wrap:wrap;
  justify-content:center;
  margin:2.2rem auto 1.9rem;
  padding:.75rem .95rem;
  background:rgba(255,255,255,.92);
  border-radius:999px;
  border:1px solid rgba(148,163,184,.25);
  box-shadow:0 24px 48px rgba(15,23,42,.12);
  backdrop-filter:blur(18px) saturate(1.2);
}
.mbs-suite-tab{
  appearance:none;
  border:1px solid transparent;
  background:rgba(15,23,42,.06);
  color:#0b1f33;
  padding:.64rem 1.48rem;
  border-radius:999px;
  font-weight:700;
  letter-spacing:.12px;
  cursor:pointer;
  transition:box-shadow .2s ease, transform .12s ease, border-color .2s ease, background .2s ease, color .2s ease;
  box-shadow:0 1px 4px rgba(15,23,42,.08);
}
.mbs-suite-tab.is-active{
  background:linear-gradient(145deg,var(--mbs-electric-blue) 0%,var(--mbs-electric-blue-dark) 100%);
  border-color:rgba(var(--mbs-electric-blue-rgb),.2);
  color:#fff;
  box-shadow:0 16px 32px rgba(var(--mbs-electric-blue-rgb),.25);
}
.mbs-suite-tab:focus-visible{
  outline:3px solid rgba(var(--mbs-electric-blue-rgb),.35);
  outline-offset:2px;
}
.mbs-suite-tab:active{
  transform:translateY(1px);
}
@media (max-width:640px){
  .mbs-suite{
    padding:2.4rem 1rem 2.6rem;
  }
  .mbs-suite-nav{
    margin:1.6rem auto 1.8rem;
  }
  .mbs-suite-tab{width:100%; text-align:center;}
}

.mbs-suite-header{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:stretch;
  gap:1.6rem;
  padding:1.8rem 2rem;
  border-radius:28px;
  background:linear-gradient(140deg, rgba(var(--mbs-electric-blue-rgb),.1) 0%, rgba(255,255,255,.95) 55%, rgba(255,255,255,.8) 100%);
  border:1px solid rgba(148,163,184,.28);
  box-shadow:0 38px 64px rgba(15,23,42,.14);
  position:relative;
  overflow:hidden;
}
.mbs-suite-header::before{
  content:"";
  position:absolute;
  inset:auto -40% -60% auto;
  width:440px;
  height:440px;
  border-radius:50%;
  background:radial-gradient(circle at center, rgba(var(--mbs-electric-blue-rgb),.12), transparent 60%);
  pointer-events:none;
}
.mbs-suite-brand{
  flex:1 1 320px;
  display:flex;
  flex-direction:column;
  gap:.85rem;
  position:relative;
  z-index:1;
}
.mbs-suite-badge{
  display:inline-flex;
  align-items:center;
  gap:.45rem;
  padding:.4rem .85rem;
  border-radius:999px;
  background:rgba(var(--mbs-electric-blue-rgb),.12);
  color:var(--mbs-electric-blue-dark);
  font-weight:700;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-size:.7rem;
}
.mbs-suite-brand h1{
  margin:0;
  font-size:2.2rem;
  letter-spacing:-.02em;
  color:#0b1f33;
}
.mbs-suite-subtitle{
  margin:0;
  max-width:540px;
  font-size:1rem;
  line-height:1.55;
  color:#334155;
}
.mbs-suite-meta{
  display:flex;
  flex-wrap:wrap;
  gap:.85rem;
  font-size:.88rem;
  color:#4b5563;
}
.mbs-suite-meta span{
  display:inline-flex;
  align-items:center;
  gap:.35rem;
  padding:.35rem .7rem;
  border-radius:999px;
  border:1px solid rgba(148,163,184,.24);
  background:rgba(255,255,255,.85);
  font-weight:600;
}
.mbs-suite-glance{
  flex:1 1 260px;
  display:grid;
  gap:1rem;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  position:relative;
  z-index:1;
}
.mbs-suite-glance-card{
  padding:1.1rem 1.2rem 1.3rem;
  border-radius:20px;
  background:linear-gradient(160deg,#ffffff 0%,rgba(var(--mbs-electric-blue-rgb),.08) 110%);
  border:1px solid rgba(148,163,184,.28);
  box-shadow:0 24px 48px rgba(15,23,42,.12);
  display:flex;
  flex-direction:column;
  gap:.55rem;
  min-height:156px;
}
.mbs-suite-glance-card h2{
  margin:0;
  font-size:1.12rem;
  color:#0b1f33;
  letter-spacing:.01em;
  display:flex;
  align-items:center;
  gap:.5rem;
}
.mbs-suite-glance-card h2 svg{width:22px;height:22px;color:var(--mbs-electric-blue-dark);}
.mbs-suite-glance-card p{
  margin:0;
  font-size:.9rem;
  color:#475569;
  line-height:1.5;
}
.mbs-suite-glance-card strong{
  font-size:1.45rem;
  font-weight:800;
  letter-spacing:-.02em;
  color:var(--mbs-electric-blue-dark);
}
.mbs-suite-glance-card.is-updated{
  transform:translateY(-2px);
  box-shadow:0 32px 64px rgba(var(--mbs-electric-blue-rgb),.2);
}
.mbs-suite-glance-card.is-updated strong{
  color:var(--mbs-electric-blue);
}
@keyframes mbsGlancePulse{
  0%{box-shadow:0 24px 48px rgba(15,23,42,.12);}
  50%{box-shadow:0 36px 72px rgba(var(--mbs-electric-blue-rgb),.28);}
  100%{box-shadow:0 24px 48px rgba(15,23,42,.12);}
}
.mbs-suite-glance-card.is-updated{
  animation:mbsGlancePulse 1.1s ease;
}
@media (max-width:720px){
  .mbs-suite-header{
    padding:1.6rem 1.4rem;
  }
  .mbs-suite-glance{grid-template-columns:1fr;}
}
.mbs-suite-panel{display:none;}
.mbs-suite-panel.is-active{display:block;animation:mbsFadeIn .32s ease both;}
@keyframes mbsFadeIn{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:translateY(0);}}
/* ========== Design tokens (namespaced) ========== */
.mbs-payroll-widget{
  --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --fg:#0b1f33;
  --muted:#687588;

  --surface:#ffffff;
  --surface-2:#f8fbff;
  --surface-3:#f4f8ff;
  --border:#d9e6f3;

  --blue-25:#f5f8ff;
  --blue-50:#eef5ff;
  --blue-100:#e4eeff;
  --blue-200:#d2e4ff;
  --blue-500:var(--mbs-electric-blue);
  --blue-600:var(--mbs-electric-blue-dark);
  --blue-rgb:var(--mbs-electric-blue-rgb);
  --teal-500:#14b8a6;
  --indigo-500:#6366f1;
  --amber-500:#f59e0b;
  --rose-500:#f43f5e;
  --emerald-500:#10b981;

  /* Chart palette */
  --chart-1:#2563eb;
  --chart-2:#0ea5e9;
  --chart-3:#7c3aed;
  --chart-4:#f59e0b;
  --chart-5:#ef4444;
  --chart-6:#22c55e;
  --chart-7:#14b8a6;
  --chart-8:#4338ca;

  --row-even:#fafcff;
  --row-hover:#eef6ff;
  --total-bg:#f2f7ff;

  --shadow-1: 0 10px 28px rgba(var(--blue-rgb),.11), 0 2px 8px rgba(var(--blue-rgb),.07);
  --shadow-2: 0 16px 42px rgba(20,184,166,.12), 0 4px 14px rgba(20,184,166,.07);

  font-family:var(--font);
  color:var(--fg);
  max-width:1000px;
  margin:1rem auto 1.25rem;
  font-variant-numeric: tabular-nums;
}

/* ---------- Headings ---------- */
.mbs-h3{
  margin:0 0 .9rem;
  font-size:1.85rem;
  letter-spacing:-.02em;
  display:flex; align-items:center; gap:.6rem;
}
.mbs-h3 svg{width:30px;height:30px;color:var(--blue-600)}
.mbs-h4{ margin:.45rem 0 .8rem; font-size:1.16rem; letter-spacing:.2px }

/* ---------- Toolbar / inputs / buttons ---------- */
.mbs-toolbar{
  display:flex; gap:16px; flex-wrap:wrap; align-items:flex-end;
  margin:.75rem 0 1.05rem; position:sticky; top:8px; z-index:20;
  background:linear-gradient(180deg,#fff 0%,#f9fbff 100%);
  border:1px solid var(--border); border-radius:14px; padding:12px 14px;
  box-shadow: 0 6px 22px rgba(37,99,235,.06);
  backdrop-filter:saturate(1.1);
}
.mbs-help{font-size:.9rem; color:var(--muted)}
.mbs-row{display:flex; gap:.85rem; flex-wrap:wrap; align-items:center}
.mbs-chip{
  display:inline-flex; align-items:center; gap:.45rem; padding:.35rem .65rem; border-radius:999px;
  border:1px solid #cfe3ff; background:linear-gradient(180deg,#f3f8ff 0%,#eaf4ff 100%); color:#0b3a63; font-size:.8rem;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.6);
}

.mbs-input,.mbs-select, .mbs-payroll-widget textarea{
  width:100%; min-width:220px; max-width:300px;
  padding:.64rem .78rem; border:1px solid var(--border); border-radius:12px; background:#fff; color:#0b1f33;
  transition:border .15s ease, box-shadow .15s ease, background .15s ease, transform .06s ease;
  font-family: var(--font);
}
.mbs-input[type="number"]{min-width:96px; text-align:right}
.mbs-input[data-seguros]{
  min-width:60px;
  max-width:80px;
  text-align:center;
  background:#0b1320;
  color:#eaf2ff;
  border-color:#1f2a44;
  font-size:.85rem;
  padding:.3rem .4rem;
  width:60px;
}
.mbs-input[data-seguros]:focus{
  border-color:var(--mbs-electric-blue);
  box-shadow:0 0 0 3px rgba(var(--mbs-electric-blue-rgb),.25);
}
.mbs-input[data-prim],
.mbs-input[data-suc]{
  max-width:96px;
  background:var(--surface-2);
  border-color:var(--border);
  color:var(--fg);
  border-radius:10px;
  font-weight:600;
  transition:border .15s ease, box-shadow .15s ease, background .15s ease;
}
.mbs-input[data-prim]:focus,
.mbs-input[data-suc]:focus{
  border-color:var(--blue-500);
  box-shadow:0 0 0 3px rgba(var(--mbs-electric-blue-rgb),.18);
  background:#fff;
}
.mbs-input[data-rent-topd]{
  min-width:80px;
  max-width:100px;
  text-align:center;
  background:#fff; 
  color:#0b1f33; 
  border-color:var(--border);
  font-size:.85rem;
  padding:.3rem .4rem;
  width:80px;
}
.mbs-input[data-rent-topd]:focus{
  border-color:#3b82f6; 
  box-shadow:0 0 0 3px rgba(59,130,246,.25);
}
.mbs-input[data-rent-sem]{
  min-width:60px; 
  max-width:80px;
  text-align:center;
  background:#fff; 
  color:#0b1f33; 
  border-color:var(--border);
  font-size:.85rem;
  padding:.3rem .4rem;
  width:60px;
}
.mbs-input[data-rent-sem]:focus{
  border-color:var(--mbs-electric-blue);
  box-shadow:0 0 0 3px rgba(var(--mbs-electric-blue-rgb),.25);
}
.mbs-input:focus,.mbs-select:focus,.mbs-payroll-widget textarea:focus{
  outline:none; border-color:#7fb6ff; box-shadow:0 0 0 4px rgba(var(--mbs-electric-blue-rgb),.18)
}
.mbs-payroll-widget input[type="checkbox"]{accent-color: var(--blue-600);}

.mbs-btn{
  appearance:none; border:1px solid var(--border); background:linear-gradient(180deg,#fff 0%,#f7fbff 100%); color:#0b1f33;
  padding:.64rem 1.05rem; border-radius:12px; font-weight:800; letter-spacing:.15px;
  transition:transform .12s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease;
  box-shadow:0 1px 0 rgba(15,23,42,.04), 0 1px 10px rgba(59,130,246,.06);
  cursor:pointer; display:inline-flex; align-items:center; gap:.5rem;
}
.mbs-btn:hover{border-color:#8dbdff; box-shadow:0 8px 24px rgba(var(--mbs-electric-blue-rgb),.16)}
.mbs-btn:active{transform:translateY(1px)}
.mbs-btn[disabled]{opacity:.55; cursor:not-allowed; box-shadow:none}
.mbs-btn.primary{
  background:linear-gradient(180deg, var(--blue-500) 0%, var(--blue-600) 100%);
  border-color:var(--blue-600); color:#fff;
  box-shadow:0 12px 28px rgba(var(--mbs-electric-blue-rgb),.28);
}

/* ---------- Cards ---------- */
.mbs-card{
  background:var(--surface-2);
  border:1px solid var(--border);
  border-radius:16px;
  box-shadow:var(--shadow-1);
  padding:16px 18px;
}
.mbs-card-rail{position:relative; overflow:hidden}
.mbs-card-rail::before{
  content:""; position:absolute; inset:0 auto auto 0; height:6px; width:100%;
  background:linear-gradient(90deg, var(--teal-500) 0%, var(--blue-500) 50%, var(--blue-600) 100%);
  border-radius:16px 16px 0 0;
  box-shadow:0 6px 14px rgba(37,99,235,.18);
}

/* ---------- KPI cards ---------- */
.mbs-kpis{display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; margin:.95rem 0 1.15rem}
.mbs-kpi{
  background:#fff; border:1px solid var(--border); border-radius:14px; padding:14px 16px; box-shadow:var(--shadow-1);
  transition:transform .12s ease, box-shadow .18s ease;
}
.mbs-kpi:hover{transform:translateY(-1px); box-shadow:0 14px 28px rgba(37,99,235,.12)}
.mbs-kpi .k-label{font-size:.78rem; color:var(--muted); letter-spacing:.2px}
.mbs-kpi .k-value{
  font-size:1.42rem; font-weight:900; margin-top:.28rem;
  background:linear-gradient(90deg,var(--blue-600) 0%, var(--indigo-500) 60%, var(--teal-500) 100%);
  -webkit-background-clip:text; background-clip:text; color:transparent;
}
.mbs-payroll-widget.pdf-export .mbs-kpi .k-value{
  background:none !important;
  -webkit-background-clip:initial !important;
  background-clip:initial !important;
  color:#0b1f33 !important;
}

/* ---------- Tables ---------- */
.mbs-tablewrap{
  overflow:auto; border:1px solid var(--border); border-radius:14px; background:#fff;
  box-shadow:var(--shadow-1);
}
.mbs-table{width:100%; border-collapse:separate; border-spacing:0; font-size:.98rem}
.mbs-table th,.mbs-table td{padding:.88rem .95rem; border-bottom:1px solid #e7eff7}
.mbs-table th{
  position:sticky; top:0; text-align:left; font-weight:900;
  color:#06243f;
  background:
    linear-gradient(180deg, #f7fbff 0%, #edf5ff 100%),
    linear-gradient(#eaf2ff,#eaf2ff);
}
.mbs-table thead th:first-child{border-top-left-radius:12px}
.mbs-table thead th:last-child{border-top-right-radius:12px}
.mbs-table td:nth-child(n+2), .mbs-table th:nth-child(n+2){text-align:right}
.mbs-table tbody tr:nth-child(even){background:var(--row-even)}
.mbs-table tbody tr:hover{background:var(--row-hover)}
.mbs-foot td{font-weight:900; background:var(--total-bg)}
.mbs-table tfoot td:first-child{border-bottom-left-radius:12px}
.mbs-table tfoot td:last-child{border-bottom-right-radius:12px}

/* ---------- Totals strip ---------- */
.mbs-totals{
  display:flex; gap:1rem; align-items:center; flex-wrap:wrap;
  font-size:.96rem; margin-top:.9rem; padding:.78rem 1.05rem;
  background:linear-gradient(180deg, #f0fffc 0%, #edf7ff 100%);
  border:1px solid var(--border); border-radius:12px;
  box-shadow:var(--shadow-2);
}
.mbs-totals b{font-weight:900}

/* ---------- Charts ---------- */
.mbs-chartgrid{
  display:grid;
  grid-template-columns:1fr;
  gap:20px;
  margin:1.05rem 0
}
.mbs-evo-controls{
  display:grid;
  gap:1.2rem;
  grid-template-columns:minmax(320px,1.4fr) minmax(220px,1fr);
  align-items:flex-start;
  margin-bottom:1.2rem;
}
@media (max-width:1024px){
  .mbs-evo-controls{grid-template-columns:1fr;}
}
.mbs-evo-compare{
  border:1px solid rgba(var(--mbs-electric-blue-rgb),.18);
  border-radius:16px;
  background:linear-gradient(180deg,#ffffff 0%,#f4f8ff 100%);
  box-shadow:0 16px 36px rgba(var(--mbs-electric-blue-rgb),.12);
  padding:1.15rem 1.25rem 1.3rem;
  display:flex;
  flex-direction:column;
  gap:1rem;
}
.mbs-evo-compare-head p{margin:.35rem 0 0;}
.mbs-evo-compare-ranges{
  display:grid;
  gap:1rem;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
}
.mbs-evo-range{
  display:flex;
  flex-direction:column;
  gap:.65rem;
}
.mbs-evo-range-label{
  font-size:.82rem;
  text-transform:uppercase;
  letter-spacing:.14em;
  font-weight:800;
  color:#0f2a4a;
}
.mbs-evo-range-inputs{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
  gap:.75rem;
}
.mbs-evo-range-inputs label{
  display:flex;
  flex-direction:column;
  gap:.35rem;
  font-size:.85rem;
  color:#0f2542;
}
.mbs-evo-compare-toggle{
  display:flex;
  align-items:center;
  gap:.55rem;
  font-size:.9rem;
  font-weight:600;
  color:#0f2542;
}
.mbs-evo-compare-toggle input{width:1.1rem; height:1.1rem; accent-color:var(--mbs-electric-blue);}
.mbs-evo-range-meta{font-size:.82rem; color:#465772;}
.mbs-evo-compare-actions{display:flex; justify-content:flex-end;}
.mbs-evo-compare-summary{
  display:grid;
  gap:.85rem;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
}
.mbs-evo-compare-metric{
  border:1px solid rgba(15,23,42,.08);
  border-radius:14px;
  background:rgba(255,255,255,.9);
  box-shadow:0 12px 28px rgba(15,23,42,.08);
  padding:.9rem 1rem;
  display:flex;
  flex-direction:column;
  gap:.4rem;
}
.mbs-evo-metric-label{
  font-size:.85rem;
  font-weight:600;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:#465772;
}
.mbs-evo-metric-values{display:flex; flex-direction:column; gap:.25rem;}
.mbs-evo-metric-values strong{font-size:1.45rem; font-weight:800; color:#0f172a;}
.mbs-evo-metric-values span{font-size:.85rem; color:#52607a;}
.mbs-evo-metric-diff{font-size:.9rem; font-weight:700; display:flex; align-items:center; gap:.35rem;}
.mbs-evo-metric-diff[data-trend="up"]{color:var(--emerald-500);}
.mbs-evo-metric-diff[data-trend="down"]{color:var(--rose-500);}
.mbs-evo-metric-diff[data-trend="flat"]{color:#475569;}
.mbs-evo-manage{display:grid; gap:1rem;}
.mbs-evo-manage-block{
  border:1px solid var(--border);
  border-radius:14px;
  background:var(--surface-2);
  box-shadow:var(--shadow-1);
  padding:1rem 1.1rem;
  display:flex;
  flex-direction:column;
  gap:.6rem;
}
.mbs-evo-manage-block .mbs-help{margin-top:-.2rem;}
.mbs-evo-manage-block .mbs-btn{align-self:flex-start;}
.mbs-evo-manage-block .mbs-evo-active{
  min-height:48px;
  border:1px dashed rgba(15,23,42,.12);
  border-radius:12px;
  padding:.6rem;
  background:rgba(244,247,255,.6);
}
@media (max-width:720px){
  .mbs-evo-compare-actions{justify-content:flex-start;}
  .mbs-evo-metric-values strong{font-size:1.25rem;}
}
.mbs-evo-active{
  display:flex;
  flex-wrap:wrap;
  gap:.45rem;
  min-height:42px;
  align-items:flex-start;
}
.mbs-evo-chip{
  display:inline-flex;
  align-items:center;
  gap:.35rem;
  padding:.35rem .75rem;
  border-radius:999px;
  border:1px solid var(--border);
  background:var(--surface-2);
  font-size:.85rem;
  font-weight:600;
  color:var(--fg);
  box-shadow:0 6px 14px rgba(var(--mbs-electric-blue-rgb),.12);
}
.mbs-evo-chip button{
  border:0;
  background:transparent;
  color:var(--muted);
  cursor:pointer;
  font-size:1rem;
  line-height:1;
  padding:0;
}
.mbs-evo-chip button:hover{color:var(--mbs-electric-blue-dark);}
.mbs-evo-empty{
  border:1px dashed var(--border);
  border-radius:12px;
  padding:1.2rem;
  text-align:center;
  color:var(--muted);
  font-size:.95rem;
  margin-top:.6rem;
}
.mbs-evo-kpis{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:16px;
  margin:1rem 0 1.2rem;
}
.mbs-evo-kpi{
  position:relative;
  padding:1rem 1.15rem;
  border-radius:14px;
  border:1px solid rgba(37,99,235,.12);
  background:linear-gradient(180deg,#ffffff 0%,#f6f9ff 100%);
  box-shadow:0 12px 28px rgba(15,23,42,.08);
  display:flex;
  flex-direction:column;
  gap:.45rem;
}
.mbs-evo-kpi::after{
  content:"";
  position:absolute;
  inset:0;
  border-radius:inherit;
  pointer-events:none;
  background:radial-gradient(120% 140% at 0% 0%,rgba(59,130,246,.18),transparent 60%);
  opacity:.65;
}
.mbs-evo-kpi-label{font-size:.85rem; font-weight:600; color:var(--muted); letter-spacing:.2px; text-transform:uppercase;}
.mbs-evo-kpi-value{font-size:1.65rem; font-weight:800; letter-spacing:-.02em; color:#0f172a;}
.mbs-evo-kpi-hint{font-size:.85rem; color:var(--muted); display:flex; gap:.35rem; align-items:center;}
.mbs-evo-kpi[data-trend="up"] .mbs-evo-kpi-value{color:var(--emerald-500);}
.mbs-evo-kpi[data-trend="down"] .mbs-evo-kpi-value{color:var(--rose-500);}
.mbs-evo-kpi[data-trend="flat"] .mbs-evo-kpi-value{color:var(--indigo-500);}
.mbs-evo-kpi .badge{
  display:inline-flex;
  align-items:center;
  gap:.35rem;
  padding:.2rem .55rem;
  font-size:.75rem;
  font-weight:600;
  border-radius:999px;
  background:rgba(37,99,235,.1);
  color:#1d4ed8;
}
.mbs-chartwrap{
  position:relative;
  overflow:hidden;
  background:linear-gradient(180deg,#ffffff 0%,#f7faff 100%);
  border:1px solid rgba(37,99,235,.12);
  border-radius:16px;
  padding:20px 22px 18px;
  box-shadow:var(--shadow-1);
  transition:transform .12s ease, box-shadow .18s ease;
}
.mbs-chartwrap::before{
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(circle at top right, rgba(37,99,235,.14), transparent 55%);
  opacity:0;
  pointer-events:none;
  transition:opacity .18s ease;
}
.mbs-chartwrap:hover{transform:translateY(-2px); box-shadow:0 18px 36px rgba(15,118,110,.16)}
.mbs-chartwrap:hover::before{opacity:1}
.mbs-chartwrap h5{
  position:relative;
  z-index:1;
  margin:.12rem 0 .35rem;
  font-size:1.06rem;
  color:#0b2542;
  font-weight:700;
  letter-spacing:.01em;
  display:flex;
  align-items:center;
  gap:.45rem;
}
.mbs-chartwrap h5::before{
  content:"";
  width:8px;
  height:8px;
  border-radius:999px;
  background:var(--chart-1);
  box-shadow:0 0 0 4px rgba(37,99,235,.18);
}
.mbs-charthead{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:1rem;
  margin-bottom:.75rem;
}
.mbs-charttitle{
  display:flex;
  flex-direction:column;
  gap:.1rem;
  min-width:0;
}
.mbs-chartnote{
  font-size:.82rem;
  color:var(--muted);
  font-weight:600;
  letter-spacing:.01em;
  display:block;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.mbs-chartactions{
  display:flex;
  flex-wrap:wrap;
  gap:.45rem;
  justify-content:flex-end;
}
.mbs-chartbtn{
  border:1px solid rgba(15,23,42,.12);
  background:rgba(59,130,246,.08);
  color:#0b2542;
  font-weight:600;
  letter-spacing:.01em;
  font-size:.78rem;
  border-radius:999px;
  padding:.32rem .75rem;
  cursor:pointer;
  transition:all .18s ease;
}
.mbs-chartbtn:hover{
  background:rgba(59,130,246,.14);
  border-color:rgba(59,130,246,.32);
  color:#0f1f3a;
}
.mbs-chartbtn.is-active{
  background:linear-gradient(90deg,#2563eb,#0ea5e9);
  color:#fff;
  border-color:rgba(37,99,235,.45);
  box-shadow:0 8px 18px rgba(37,99,235,.25);
}
.mbs-chartbtn[data-variant="ghost"]{
  background:rgba(15,23,42,.04);
  border-color:rgba(15,23,42,.12);
}
.mbs-chartbtn[data-variant="ghost"]:hover{
  background:rgba(15,23,42,.08);
  border-color:rgba(15,23,42,.24);
}
.mbs-chartbtn svg{
  width:14px;
  height:14px;
}
.mbs-chartbtn span{display:inline-flex; align-items:center; gap:.3rem;}
.mbs-chartwrap .chart-area{position:relative; width:100%; min-height:320px}
.mbs-chartwrap .chart-area.chart-area--origen{min-height:420px}
.mbs-mini-donuts{display:flex; justify-content:center; align-items:center; gap:28px; flex-wrap:wrap; padding:12px 10px;}
.mbs-mini-donut{display:flex; flex-direction:column; align-items:center; gap:.45rem; color:var(--fg); font-weight:600;}
.mbs-mini-donut canvas{width:160px !important; height:160px !important;}
.mbs-mini-donut span{font-size:.95rem; letter-spacing:.01em;}

/* Calendar heatmap mejorado */
.mbs-cal-wrapper{
  display:flex;
  flex-direction:column;
  gap:.45rem;
}
.mbs-cal-header{
  font-weight:700;
  font-size:1rem;
  color:var(--fg);
  text-transform:capitalize;
}
.mbs-cal-weekdays{
  display:grid;
  grid-template-columns:repeat(7,minmax(0,1fr));
  gap:6px;
  padding:0 4px;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.02em;
  color:var(--muted);
  text-transform:uppercase;
}
.mbs-cal-grid{
  display:grid;
  grid-template-columns:repeat(7,minmax(0,1fr));
  gap:6px;
  padding:8px;
  background:var(--surface-2);
  border:1px solid var(--border);
  border-radius:16px;
  box-shadow:var(--shadow-1);
  min-height:320px;
}
.mbs-cal-grid .day{
  min-height:64px;
  padding:6px 8px;
  border-radius:12px;
  border:1px solid rgba(37,99,235,.18);
  background:rgba(219,234,254,.55);
  color:#0b2542;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  gap:2px;
  transition:transform .12s ease, box-shadow .18s ease;
}
.mbs-cal-grid .day:hover{
  transform:translateY(-2px);
  box-shadow:0 6px 18px rgba(37,99,235,.16);
}
.mbs-occupancy-widget{
  --primary: var(--mbs-electric-blue);
  --primary-dark: var(--mbs-electric-blue-dark);
  --primary-rgb: var(--mbs-electric-blue-rgb);
  margin-top:1.2rem;
  background:linear-gradient(145deg, rgba(255,255,255,.96), rgba(226,239,255,.9));
  border-radius:20px;
  border:1px solid rgba(var(--primary-rgb),.22);
  box-shadow:0 32px 68px rgba(15,23,42,.14);
  padding:1.6rem 1.75rem 1.9rem;
  position:relative;
  overflow:hidden;
  backdrop-filter:blur(8px);
}
.mbs-occupancy-widget::before{
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(130% 140% at 12% 0%, rgba(var(--primary-rgb),.18), transparent 62%);
  pointer-events:none;
}
.mbs-occupancy-widget::after{
  content:"";
  position:absolute;
  inset:auto 0 0 0;
  height:46%;
  background:linear-gradient(180deg, rgba(var(--primary-rgb),.14), rgba(255,255,255,0));
  pointer-events:none;
}
.mbs-occupancy-head{display:flex; flex-direction:column; gap:.35rem; margin-bottom:1rem; position:relative; z-index:1;}
.mbs-occupancy-head .mbs-h3{color:var(--primary-dark); text-shadow:0 6px 18px rgba(var(--primary-rgb),.22);}
.mbs-occupancy-head .mbs-h3 svg{color:var(--primary);}
.mbs-occupancy-head p{margin:0; color:#11263f; font-size:.95rem; max-width:620px;}
.mbs-occupancy-layout{position:relative; z-index:1; display:flex; flex-direction:column; gap:1.4rem;}
.mbs-occupancy-footer{position:relative; z-index:1; display:grid; gap:1.1rem; margin-top:.4rem;}
.mbs-occupancy-schedule{background:rgba(var(--primary-rgb),.06); border:1px solid rgba(var(--primary-rgb),.18); border-radius:14px; padding:1rem 1.2rem; display:flex; flex-direction:column; gap:.65rem;}
.mbs-occupancy-schedule-grid{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.75rem;}
.mbs-occupancy-schedule-grid label{display:flex; flex-direction:column; gap:.35rem; font-size:.85rem; color:#11345f;}
.mbs-occupancy-schedule-grid input{width:100%;}
.mbs-occupancy-days{display:flex; flex-direction:column; gap:.45rem; font-size:.85rem; color:#11345f;}
.mbs-occupancy-daylist{display:flex; flex-direction:column; gap:.4rem;}
.mbs-occupancy-dayrow{display:flex; align-items:center; gap:.45rem; flex-wrap:wrap;}
.mbs-daytoggle{border-radius:999px; border:1px solid rgba(var(--primary-rgb),.25); background:rgba(var(--primary-rgb),.1); color:#0b2542; font-weight:700; padding:.18rem .65rem; cursor:pointer; transition:background .15s ease, color .15s ease, border-color .15s ease;}
.mbs-daytoggle:hover{background:rgba(var(--primary-rgb),.18);}
.mbs-daytoggle.is-active{background:var(--primary); border-color:var(--primary); color:#ffffff;}
.mbs-daytoggle:focus-visible{outline:2px solid var(--primary); outline-offset:2px;}
.mbs-occupancy-shift{display:inline-flex; align-items:center; gap:.35rem; background:rgba(15,23,42,0.06); border-radius:12px; padding:.18rem .55rem; font-weight:600; color:#0b2542;}
.mbs-occupancy-shift input{margin:0; accent-color:var(--primary);}
.mbs-occupancy-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:18px;}
.mbs-room-card{
  position:relative;
  padding:1.15rem 1.2rem 1.35rem;
  border-radius:20px;
  border:1px solid rgba(148,163,184,.22);
  background:linear-gradient(160deg, rgba(255,255,255,.94), rgba(235,242,255,.92));
  box-shadow:0 24px 52px rgba(15,23,42,.12);
  display:flex;
  flex-direction:column;
  gap:.85rem;
  min-height:230px;
  overflow:hidden;
  cursor:pointer;
  transition:transform .22s ease, box-shadow .22s ease, border-color .22s ease, background .22s ease;
  outline:none;
  --room-accent:#2563eb;
  --room-color:var(--room-accent);
  isolation:isolate;
}
.mbs-room-card::before{
  content:"";
  position:absolute;
  inset:-2px;
  border-radius:inherit;
  background:radial-gradient(140% 150% at 50% -20%, var(--room-accent,#2563eb) 0%, transparent 72%);
  opacity:.2;
  transition:opacity .25s ease;
  z-index:0;
}
.mbs-room-card::after{
  content:"";
  position:absolute;
  inset:0;
  border-radius:inherit;
  background:linear-gradient(180deg, rgba(255,255,255,.8), transparent 58%);
  pointer-events:none;
  z-index:0;
}
.mbs-room-card > *{
  position:relative;
  z-index:1;
}
.mbs-room-card[data-density="low"]{
  --room-accent:#38bdf8;
  border-color:rgba(56,189,248,.38);
  box-shadow:0 24px 48px rgba(56,189,248,.18);
}
.mbs-room-card[data-density="mid"]{
  --room-accent:#60a5fa;
  border-color:rgba(96,165,250,.4);
  box-shadow:0 26px 52px rgba(96,165,250,.2);
}
.mbs-room-card[data-density="high"]{
  --room-accent:#4f46e5;
  border-color:rgba(79,70,229,.42);
  box-shadow:0 28px 56px rgba(79,70,229,.22);
}
.mbs-room-card[data-density="full"]{
  --room-accent:#1d4ed8;
  border-color:rgba(37,99,235,.55);
  box-shadow:0 32px 64px rgba(37,99,235,.26);
}
.mbs-room-card.is-closed{
  background:linear-gradient(160deg, rgba(248,250,252,.94), rgba(226,232,240,.9));
  border-color:rgba(148,163,184,.45);
  box-shadow:0 16px 34px rgba(148,163,184,.22);
  --room-accent:#64748b;
  --room-color:#64748b;
}
.mbs-room-card:hover,
.mbs-room-card:focus-visible{
  transform:translateY(-6px);
  box-shadow:0 32px 68px rgba(37,99,235,.24);
}
.mbs-room-card:hover::before,
.mbs-room-card:focus-visible::before,
.mbs-room-card.is-editing::before{
  opacity:.34;
}
.mbs-room-card.is-editing{
  box-shadow:0 36px 72px rgba(37,99,235,.3), 0 0 0 2px rgba(59,130,246,.4);
  transform:translateY(-6px);
}
.mbs-room-card:focus-visible{outline:3px solid rgba(59,130,246,.35); outline-offset:3px;}
.mbs-room-visual{
  position:relative;
  flex:1;
  min-height:140px;
  background:linear-gradient(180deg, rgba(15,23,42,.06), rgba(15,23,42,.02));
  border-radius:16px;
  overflow:hidden;
  border:1px solid rgba(148,163,184,.25);
}
.mbs-room-visual::after{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(180deg, rgba(255,255,255,.35), transparent 55%);
  pointer-events:none;
}
.mbs-room-fill{
  position:absolute;
  inset:2px;
  inset-block-end:2px;
  height:calc(var(--fill,0) * 100%);
  background:linear-gradient(180deg, var(--room-color,#2563eb) 0%, rgba(37,99,235,.28) 100%);
  border-radius:14px;
  border:1px solid rgba(255,255,255,.45);
  box-shadow:0 14px 26px rgba(37,99,235,.2);
  transition:height .28s ease;
  transform-origin:bottom;
}
.mbs-room-marker{
  position:absolute;
  top:14px;
  right:14px;
  padding:.2rem .65rem;
  font-size:.76rem;
  font-weight:700;
  border-radius:999px;
  background:rgba(255,255,255,.92);
  color:var(--room-accent,#0b2542);
  box-shadow:0 10px 24px rgba(15,23,42,.16);
  border:1px solid rgba(148,163,184,.25);
  letter-spacing:.05em;
  text-transform:uppercase;
}
.mbs-room-card.is-closed .mbs-room-fill{display:none;}
.mbs-room-card.is-closed .mbs-room-marker{background:rgba(226,232,240,.9); color:#1e293b; border-color:rgba(148,163,184,.45);}
.mbs-room-info{display:flex; flex-direction:column; gap:.22rem;}
.mbs-room-name{font-size:1.08rem; font-weight:700; color:#0b2542; letter-spacing:-.01em;}
.mbs-room-status{font-size:.9rem; color:#40506b; font-weight:600;}
.mbs-room-rate{font-size:1.55rem; font-weight:800; letter-spacing:-.03em; color:var(--room-accent,#2563eb);}
.mbs-room-card.is-closed .mbs-room-rate{color:#475569;}
.mbs-room-edit-hint{
  font-size:.7rem;
  font-weight:700;
  letter-spacing:.16em;
  text-transform:uppercase;
  color:var(--room-accent,#2563eb);
  background:rgba(59,130,246,.14);
  border-radius:999px;
  align-self:flex-start;
  padding:.22rem .7rem;
  box-shadow:0 10px 24px rgba(37,99,235,.14);
}
.mbs-room-editor-backdrop{
  position:fixed;
  inset:0;
  background:rgba(15,23,42,.35);
  backdrop-filter:blur(4px);
  opacity:0;
  visibility:hidden;
  transition:opacity .24s ease;
  pointer-events:none;
  z-index:70;
}
.mbs-room-editor-backdrop.is-visible{
  opacity:1;
  visibility:visible;
  pointer-events:auto;
}
.mbs-room-editor{
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-46%);
  width:min(420px,calc(100% - 32px));
  z-index:80;
  opacity:0;
  visibility:hidden;
  pointer-events:none;
  transition:opacity .24s ease, transform .24s ease;
}
.mbs-room-editor.is-open{
  opacity:1;
  visibility:visible;
  pointer-events:auto;
  transform:translate(-50%,-50%);
}
.mbs-room-editor-scroll{
  max-height:calc(100vh - 160px);
  overflow:auto;
}
.mbs-room-editor-head{display:flex; align-items:center; justify-content:space-between; gap:.65rem; padding-bottom:.75rem; border-bottom:1px solid rgba(15,23,42,.12);}
.mbs-room-editor-title{margin:0; font-size:1.1rem; font-weight:700; color:#0b2542; display:flex; align-items:center; gap:.55rem; letter-spacing:-.01em;}
.mbs-room-editor-close{
  border:none;
  background:rgba(var(--mbs-electric-blue-rgb),.12);
  color:var(--mbs-electric-blue-dark);
  font-weight:700;
  font-size:.8rem;
  padding:.35rem .7rem;
  border-radius:999px;
  cursor:pointer;
  transition:background .18s ease, transform .18s ease;
}
.mbs-room-editor-close:hover{background:rgba(var(--mbs-electric-blue-rgb),.2); transform:translateY(-1px);}
.mbs-room-editor-close:focus-visible{outline:2px solid rgba(var(--mbs-electric-blue-rgb),.45); outline-offset:2px;}
.mbs-room-control .badge{background:rgba(15,23,42,.06); color:var(--room-accent,#1d4ed8); border:1px solid rgba(15,23,42,.08); font-weight:700;}
.mbs-occupancy-summary{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(170px,1fr));
  gap:16px;
  margin-bottom:1.1rem;
}
.mbs-occupancy-summary-card{
  padding:1.1rem 1.3rem;
  border-radius:18px;
  border:1px solid rgba(148,163,184,.28);
  background:linear-gradient(145deg,#ffffff 0%,#f1f6ff 100%);
  box-shadow:0 24px 52px rgba(15,23,42,.12);
  display:flex;
  flex-direction:column;
  gap:.3rem;
  line-height:1.35;
  position:relative;
  overflow:hidden;
  isolation:isolate;
}
.mbs-occupancy-summary-card::before{
  content:"";
  position:absolute;
  inset:-30% -12% auto -22%;
  height:130%;
  background:radial-gradient(140% 140% at 28% 18%, rgba(var(--mbs-electric-blue-rgb),.2), transparent 70%);
  pointer-events:none;
  z-index:0;
}
.mbs-occupancy-summary-card::after{
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(160% 120% at 0% 0%, rgba(var(--mbs-electric-blue-rgb),.14), transparent 60%);
  pointer-events:none;
  z-index:0;
}
.mbs-occupancy-summary-card span:first-child{font-size:.82rem; text-transform:uppercase; font-weight:700; color:#1f2937; letter-spacing:.12em; position:relative; z-index:1;}
.mbs-occupancy-summary-card strong{font-size:1.5rem; font-weight:800; letter-spacing:-.02em; color:#0f172a; position:relative; z-index:1;}
.mbs-occupancy-summary-card .mbs-occupancy-note{position:relative; z-index:1; color:#475569;}
.mbs-occupancy-summary-card > *{position:relative; z-index:1;}
.mbs-room-control{
  border:1px solid rgba(148,163,184,.28);
  border-radius:18px;
  background:linear-gradient(180deg,#ffffff 0%,#f2f7ff 100%);
  box-shadow:0 16px 34px rgba(15,23,42,.14);
  padding:1.15rem 1.25rem;
  display:grid;
  gap:.75rem;
}
.mbs-room-control h4{margin:0; font-size:1.05rem; font-weight:700; color:#0b2542; display:flex; align-items:center; justify-content:space-between; gap:.55rem; letter-spacing:-.01em;}
.mbs-room-control label{display:flex; flex-direction:column; gap:.25rem; font-size:.85rem; font-weight:600; color:#1f2937;}
.mbs-room-control input[type="number"]{width:100%; min-width:0;}
.mbs-room-control .inline{display:flex; align-items:center; gap:.45rem; font-weight:600; color:#1f2937;}
.mbs-room-control .inline input[type="checkbox"]{transform:scale(1.05);}
.mbs-room-periods{display:flex; flex-direction:column; gap:.45rem; padding-top:.55rem; border-top:1px solid rgba(148,163,184,.28);}
.mbs-room-period-row{display:flex; align-items:center; justify-content:space-between; gap:.45rem;}
.mbs-room-period-row .day{font-weight:700; font-size:.82rem; color:#0b2542; min-width:2.2rem; text-transform:uppercase;}
.mbs-room-period-row .periods{display:flex; flex-wrap:wrap; gap:.35rem; justify-content:flex-end;}
.mbs-room-period-btn{border:1px solid rgba(37,99,235,.28); background:#f1f5ff; color:#0b2542; border-radius:10px; padding:.25rem .65rem; font-size:.75rem; font-weight:600; cursor:pointer; transition:all .15s ease;}
.mbs-room-period-btn:hover{background:#e0e9ff; border-color:rgba(37,99,235,.45);}
.mbs-room-period-btn.is-active{background:linear-gradient(135deg,#2563eb 0%,#4338ca 100%); border-color:rgba(37,99,235,.6); color:#ffffff; box-shadow:0 8px 18px rgba(37,99,235,.18);}
.mbs-room-period-summary{font-size:.78rem; color:#334155; display:grid; gap:.18rem; margin-top:.55rem;}
.mbs-room-period-summary.is-card{margin-top:.35rem;}
.mbs-room-period-summary span{display:flex; gap:.25rem; align-items:baseline;}
.mbs-room-period-summary strong{color:#0b2542; font-weight:700;}
.mbs-occupancy-note{font-size:.8rem; color:#475569;}
.mbs-occupancy-legend{display:flex; flex-wrap:wrap; gap:.45rem; font-size:.8rem; color:#223252; margin-top:1rem;}
.mbs-occupancy-legend span{display:inline-flex; align-items:center; gap:.35rem; padding:.28rem .6rem; border-radius:999px; background:rgba(var(--primary-rgb),.14); font-weight:600;}
.mbs-occupancy-legend span::before{content:""; width:10px; height:10px; border-radius:50%; display:inline-block; box-shadow:0 0 0 2px rgba(255,255,255,.6);}
.mbs-occupancy-legend span[data-density="low"]::before{background:#38bdf8;}
.mbs-occupancy-legend span[data-density="mid"]::before{background:#60a5fa;}
.mbs-occupancy-legend span[data-density="high"]::before{background:#4f46e5;}
.mbs-occupancy-legend span[data-density="full"]::before{background:#1d4ed8;}
.mbs-occupancy-legend span[data-density="off"]::before{background:#94a3b8; box-shadow:none;}
.mbs-occupancy-actions{display:flex; flex-wrap:wrap; gap:.6rem; margin-top:.6rem;}
.mbs-occupancy-actions .mbs-btn{min-width:0;}
.mbs-cal-grid .day .date{font-weight:700; font-size:.75rem; line-height:1}
.mbs-cal-grid .day .amount{font-size:.58rem; opacity:.85; letter-spacing:.01em}
.mbs-cal-grid .day.muted{opacity:0; visibility:hidden;}
.mbs-cal-grid .day.has-data{border-color:rgba(37,99,235,.55);}
.mbs-cal-legend{display:flex; gap:8px; align-items:center; margin-top:8px; font-size:.85rem; color:#4b5563}

@media (max-width:960px){
  .mbs-charthead{flex-direction:column; align-items:flex-start; gap:.6rem;}
  .mbs-chartactions{justify-content:flex-start;}
  .mbs-chartnote{white-space:normal;}
  .mbs-occupancy-layout{gap:1.1rem;}
  .mbs-occupancy-grid{grid-template-columns:repeat(auto-fit,minmax(160px,1fr));}
  .mbs-occupancy-footer{gap:1rem;}
  .mbs-room-card{min-height:210px;}
}

/* Small screens */
@media (max-width:920px){
  .mbs-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:720px){
  .mbs-input,.mbs-select{min-width:160px}
  .mbs-chartwrap .chart-area{min-height:300px}
  .mbs-chartwrap .chart-area.chart-area--origen{min-height:520px}
  .mbs-occupancy-widget{padding:1.2rem;}
  .mbs-room-card{padding:1rem 1rem 1.1rem; border-radius:18px;}
  .mbs-room-marker{top:10px; right:10px;}
}

/* ---------- Dark mode (optional) ---------- */
@media (prefers-color-scheme: dark){
  .mbs-payroll-widget{
    --fg:#e7eef7;
    --muted:#9eb0c6;
    --surface:#0b1320;
    --surface-2:#0f172a;
    --surface-3:#111827;
    --border:#1f2a44;
    --row-even:#0e1a2e;
    --row-hover:#0f2240;
    --total-bg:#0e243c;
    --shadow-1: 0 8px 24px rgba(0,0,0,.35);
    --shadow-2: 0 12px 36px rgba(0,0,0,.45);
  }
  .mbs-toolbar{background:linear-gradient(180deg,#0e1626 0%,#0b1320 100%); box-shadow:0 10px 28px rgba(0,0,0,.35)}
  .mbs-card{background:var(--surface-2)}
  .mbs-tablewrap{background:#0b1320}
  .mbs-btn{background:linear-gradient(180deg,#0d1729 0%,#0a1322 100%); color:#e7eef7}
  .mbs-kpi{background:#0b1320}
  .mbs-chartwrap{background:linear-gradient(180deg,#0f172a 0%,#0b1320 100%); border-color:rgba(148,163,184,.22)}
  .mbs-chartwrap::before{background:radial-gradient(circle at top right, rgba(14,165,233,.22), transparent 55%)}
  .mbs-chartwrap h5{ color:#eaf2ff }
  .mbs-chartwrap h5::before{background:var(--chart-2); box-shadow:0 0 0 4px rgba(14,165,233,.28)}
  .mbs-chartbtn{background:rgba(148,163,184,.16); border-color:rgba(148,163,184,.3); color:#eaf2ff;}
  .mbs-chartbtn:hover{background:rgba(148,163,184,.24); border-color:rgba(148,163,184,.45); color:#fff;}
  .mbs-chartbtn[data-variant="ghost"]{background:rgba(15,23,42,.45); border-color:rgba(148,163,184,.28); color:#cbd5f5;}
  .mbs-chartbtn[data-variant="ghost"]:hover{background:rgba(var(--mbs-electric-blue-rgb),.35); border-color:rgba(var(--mbs-electric-blue-rgb),.6); color:#fff;}
  .mbs-cal-weekdays{color:#9eb0c6}
  .mbs-cal-grid{background:#0d1930; border-color:#1f2a44}
  .mbs-cal-grid .day{background:#0d1930; color:#eaf2ff; border-color:#1f2a44}
  .mbs-cal-legend{color:#9eb0c6}
  .mbs-occupancy-head p{color:#e3ecff;}
  .mbs-occupancy-widget{background:linear-gradient(150deg, rgba(15,26,48,.95), rgba(9,18,36,.96)); border-color:#1c2d4f; box-shadow:0 32px 68px rgba(2,6,23,.7);}
  .mbs-occupancy-widget::before{background:radial-gradient(130% 150% at 14% -10%, rgba(var(--mbs-electric-blue-rgb),.38), transparent 65%);}
  .mbs-occupancy-widget::after{background:linear-gradient(180deg, rgba(var(--mbs-electric-blue-rgb),.32), transparent 70%);}
  .mbs-occupancy-schedule{background:rgba(20,32,58,.72); border-color:#1c2d4f;}
  .mbs-occupancy-schedule-grid label{color:#e2e8ff;}
  .mbs-occupancy-days{color:#e2e8ff;}
  .mbs-room-card{background:linear-gradient(160deg, rgba(22,34,59,.96), rgba(13,24,44,.94)); border-color:#1c2d4f; box-shadow:0 30px 60px rgba(2,6,23,.68);}
  .mbs-room-card::before{opacity:.38;}
  .mbs-room-card::after{background:linear-gradient(180deg,rgba(var(--mbs-electric-blue-rgb),.28),transparent 55%);}
  .mbs-room-name{color:#f8fbff;}
  .mbs-room-status{color:#cbd5f5;}
  .mbs-room-edit-hint{background:rgba(var(--mbs-electric-blue-rgb),.32); color:#cbd5f5; box-shadow:0 14px 30px rgba(2,6,23,.55);}
  .mbs-occupancy-summary-card{background:linear-gradient(155deg, rgba(35,50,81,.96), rgba(20,33,57,.94)); border-color:#2c3f66; color:#f8fbff; box-shadow:0 32px 64px rgba(2,6,23,.72);}
  .mbs-occupancy-summary-card::before{opacity:.6;}
  .mbs-occupancy-summary-card::after{background:radial-gradient(160% 120% at 0% 0%, rgba(var(--mbs-electric-blue-rgb),.42), transparent 62%);}
  .mbs-occupancy-summary-card span:first-child{color:#cbd5f5;}
  .mbs-occupancy-summary-card strong{color:#ffffff;}
  .mbs-occupancy-summary-card .mbs-occupancy-note{color:#e0e7ff;}
  .mbs-room-editor-backdrop{background:rgba(2,6,23,.7);}
  .mbs-room-editor{transform:translate(-50%,-46%);}
  .mbs-room-editor.is-open{transform:translate(-50%,-50%);}
  .mbs-room-editor-close{background:rgba(var(--mbs-electric-blue-rgb),.32); color:#e0e7ff;}
  .mbs-room-editor-close:hover{background:rgba(var(--mbs-electric-blue-rgb),.4);}
  .mbs-room-control{background:linear-gradient(180deg,#172647 0%,#0f1b33 100%); border-color:#1c2d4f; color:#f8fbff; box-shadow:0 16px 34px rgba(0,0,0,.46);}
  .mbs-room-editor-head{border-bottom-color:rgba(34,51,82,.72);}
  .mbs-room-editor-title{color:#f8fbff;}
  .mbs-room-control .badge{background:rgba(var(--mbs-electric-blue-rgb),.28); color:#e3ecff; border-color:rgba(var(--mbs-electric-blue-rgb),.38);}
  .mbs-room-control label{color:#dbeafe;}
  .mbs-room-control .inline{color:#f1f5ff;}
  .mbs-room-periods{border-color:#223352;}
  .mbs-room-period-row .day{color:#e2e8ff;}
  .mbs-room-period-btn{background:rgba(var(--mbs-electric-blue-rgb),.24); border-color:#2c3f66; color:#e3ecff;}
  .mbs-room-period-btn:hover{background:rgba(var(--mbs-electric-blue-rgb),.32); border-color:rgba(var(--mbs-electric-blue-rgb),.55);}
  .mbs-room-period-btn.is-active{background:linear-gradient(135deg,var(--mbs-electric-blue-dark) 0%,var(--mbs-electric-blue) 100%); border-color:#93c5fd; color:#ffffff; box-shadow:0 12px 28px rgba(var(--mbs-electric-blue-rgb),.4);}
  .mbs-room-period-summary{color:#cbd5f5;}
  .mbs-room-period-summary strong{color:#f8fafc;}
  .mbs-occupancy-note{color:#cbd5f5;}
  .mbs-occupancy-legend span{background:rgba(var(--mbs-electric-blue-rgb),.32); color:#f8fbff;}
  .mbs-room-marker{background:rgba(24,35,59,.92); color:#f8fbff; border-color:rgba(var(--mbs-electric-blue-rgb),.5); box-shadow:0 16px 32px rgba(2,6,23,.65);}
}

/* ---------- Dark-styled payout sections (always dark) ---------- */
.mbs-card.pay-dark{ background:#0f172a; }
.pay-dark .mbs-h4{ color:#eaf2ff; } /* títulos blancos */
.pay-dark .mbs-help{ color:#9eb0c6; }
.pay-dark .mbs-tablewrap{ background:#0b1320; border-color:#1f2a44; }
.pay-dark .mbs-table th,.pay-dark .mbs-table td{ color:#eaf2ff; border-bottom:1px solid #1f2a44; }
.pay-dark .mbs-table thead th{
  color:#9ec5ff;
  background:
    linear-gradient(180deg,#0d1b2f 0%, #0b1526 100%),
    linear-gradient(#1f2a44,#1f2a44);
}
.pay-dark .mbs-table tbody tr:nth-child(even){ background:#0e1a2e; }
.pay-dark .mbs-table tbody tr:hover{ background:#0f2240; }
.pay-dark .mbs-foot td{ background:#0e243c; color:#eaf2ff; }
.pay-dark .mbs-input{
  background:#0b1320; color:#eaf2ff; border-color:#1f2a44;
}
.pay-dark .mbs-input:focus{
  border-color:#3b82f6; box-shadow:0 0 0 3px rgba(59,130,246,.25);
}
.pay-dark .mbs-totals{
  background: linear-gradient(180deg,#0d1b2f 0%,#0b1526 100%);
  border-color:#1f2a44; color:#eaf2ff;
}
.pay-dark .mbs-totals b{ color:#9ec5ff; }
</style>

<div class="mbs-suite">
  <header class="mbs-suite-header" role="presentation">
    <div class="mbs-suite-brand">
      <span class="mbs-suite-badge">MBS Finance</span>
      <h1>Suite financiera médica premium</h1>
      <p class="mbs-suite-subtitle">Un panel integral para anticipar escenarios, proteger la liquidez y tomar decisiones estratégicas en tu centro de salud.</p>
      <div class="mbs-suite-meta" role="list">
        <span role="listitem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="16" height="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Consolidación automática de KPIs
        </span>
        <span role="listitem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="16" height="16"><path d="M4 21v-7"/><path d="M9 21V9"/><path d="M15 21V3"/><path d="M20 21v-5"/></svg>
          Forecast de caja en tiempo real
        </span>
        <span role="listitem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="16" height="16"><path d="M20.24 12.24a9 9 0 1 1-8.48-8.48"/><path d="M12 6v6l4 2"/><path d="M20 4v5h-5"/></svg>
          Seguimiento operativo inteligente
        </span>
      </div>
    </div>
    <div class="mbs-suite-glance" aria-label="Resumen ejecutivo">
      <article class="mbs-suite-glance-card">
        <h2>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4Z"/></svg>
          Liquidez disponible
        </h2>
        <strong data-mbs-glance="liquidez">€0,00</strong>
        <p>Ajusta tasas, honorarios y pólizas para equilibrar tu flujo de caja sin perder capacidad operativa.</p>
      </article>
      <article class="mbs-suite-glance-card">
        <h2>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 5-5"/></svg>
          Margen de servicios
        </h2>
        <strong data-mbs-glance="margen">0%</strong>
        <p>Visualiza inmediatamente el impacto de tus especialidades en la rentabilidad consolidada.</p>
      </article>
      <article class="mbs-suite-glance-card">
        <h2>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4a2 2 0 0 1 2-2h3.17a2 2 0 0 1 1.41.59L12 4h7a2 2 0 0 1 2 2v3"/><path d="M21 14H3"/><path d="M10 19h4"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/></svg>
          Ocupación proyectada
        </h2>
        <strong data-mbs-glance="ocupacion">0%</strong>
        <p>Concilia el calendario clínico con la disponibilidad de salas y personal en un mismo tablero.</p>
      </article>
    </div>
  </header>
  <div class="mbs-suite-nav" role="tablist" aria-label="Herramientas MBS">
    <button type="button" class="mbs-suite-tab is-active" data-suite-tab="resumen" id="tab-resumen" role="tab" aria-selected="true" aria-controls="panel-resumen">Caja & Pagos</button>
    <button type="button" class="mbs-suite-tab" data-suite-tab="variables" id="tab-variables" role="tab" aria-selected="false" aria-controls="panel-variables">Variables profesionales</button>
    <button type="button" class="mbs-suite-tab" data-suite-tab="evolucion" id="tab-evolucion" role="tab" aria-selected="false" aria-controls="panel-evolucion">Evolución del centro</button>
    <button type="button" class="mbs-suite-tab" data-suite-tab="ocupacion" id="tab-ocupacion" role="tab" aria-selected="false" aria-controls="panel-ocupacion">Ocupación salas</button>
  </div>
  <script>
  (function(){
    const STORAGE_KEY = 'mbs-suite-active-tab';

    function setActive(target){
      const tabs = Array.from(document.querySelectorAll('[data-suite-tab]'));
      const panels = Array.from(document.querySelectorAll('.mbs-suite-panel'));

      tabs.forEach((btn)=>{
        const isActive = btn.dataset.suiteTab === target;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        const controlled = btn.getAttribute('aria-controls');
        if (controlled){
          const panel = document.getElementById(controlled);
          if (panel){
            panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
          }
        }
      });

      panels.forEach((panel)=>{
        const isActive = panel.dataset.panel === target;
        panel.classList.toggle('is-active', isActive);
        panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      });
    }

    document.addEventListener('DOMContentLoaded', ()=>{
      const tabs = Array.from(document.querySelectorAll('[data-suite-tab]'));
      if (!tabs.length) return;

      let preferred = null;
      try {
        preferred = localStorage.getItem(STORAGE_KEY);
      } catch(_){ preferred = null; }

      const initial = tabs.some((btn)=>btn.dataset.suiteTab === preferred) ? preferred : tabs[0].dataset.suiteTab;
      setActive(initial);

      tabs.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
          const target = btn.dataset.suiteTab;
          setActive(target);
          try {
            localStorage.setItem(STORAGE_KEY, target);
          } catch(_){ }
        });
      });
    });
  })();
  </script>

  <div class="mbs-suite-panel is-active" data-panel="resumen" id="panel-resumen" role="tabpanel" aria-labelledby="tab-resumen" aria-hidden="false">
    <div class="mbs-payroll-widget" data-widget>
      <h3 class="mbs-h3">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 7h14a4 4 0 0 1 4 4v4a2 2 0 0 1-2 2h-1"></path>
      <rect x="3" y="5" width="14" height="14" rx="3"></rect>
      <path d="M7 9h6M7 13h4"></path>
    </svg>
    Resumen de facturación por especialista (Clinic Cloud Caja)
  </h3>

  <div class="mbs-toolbar">
    <div>
      <label style="font-weight:900">CSV de Caja</label><br>
      <input type="file" accept=".csv,text/csv" data-ref="csvFile" class="mbs-input" aria-label="Subir CSV de caja">
      <div class="mbs-help">Cabeceras: <code>Fecha; Tipo; Forma; Nº Fac.; Nº Rec.; Agenda; Detalles; Importe</code></div>
    </div>

    <label class="mbs-help" style="display:flex;align-items:center;gap:.45rem;margin-top:.35rem">
      <input type="checkbox" checked data-ref="excludeNeg" aria-label="Excluir abonos/negativos"> Excluir abonos/negativos
    </label>

    <button data-ref="downloadBtn" class="mbs-btn" disabled title="Descargar informe PDF con todo el panel">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Descargar PDF completo
    </button>

    <button data-ref="saveEvolutionBtn" class="mbs-btn" title="Guardar los datos actuales como un periodo para el panel de evolución" disabled>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v9"/><path d="M9 8h6"/><path d="M5 12.5V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6.5"/><path d="M17 5h1a2 2 0 0 1 2 2v3"/><path d="M3 10V7a2 2 0 0 1 2-2h1"/></svg>
      Guardar periodo evolución
    </button>

    <button data-ref="resetBtn" class="mbs-btn" title="Borrar ajustes guardados (porcentajes/retenciones)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10M1 14l5.36 4.36A9 9 0 0 0 20.49 15"/></svg>
      Resetear ajustes
    </button>
  </div>

  <div data-ref="stats" class="mbs-help" style="margin:.2rem 0 .8rem"></div>

  <div class="mbs-kpis">
  <div class="mbs-kpi"><div class="k-label">Facturado total</div><div class="k-value" data-ref="kpiTotal">0,00 €</div></div>
  <div class="mbs-kpi"><div class="k-label">Especialistas</div><div class="k-value" data-ref="kpiCount">0</div></div>
  <div class="mbs-kpi"><div class="k-label">% Primeras</div><div class="k-value" data-ref="kpiPrimPct">0%</div></div>
  <div class="mbs-kpi"><div class="k-label">Ticket medio por especialista</div><div class="k-value" data-ref="kpiAvg">0,00 €</div></div>
</div>

<div class="mbs-kpis">
  <div class="mbs-kpi"><div class="k-label">Facturación Seguros</div><div class="k-value" data-ref="kpiSeguros">0,00 €</div></div>
  <div class="mbs-kpi"><div class="k-label">Facturación Privados</div><div class="k-value" data-ref="kpiPrivados">0,00 €</div></div>
</div>

  <div class="mbs-tablewrap">
    <table class="mbs-table" aria-label="Resumen por especialista">
      <thead>
        <tr>
          <th>Especialista</th>
          <th>Primeras (€)</th>
          <th>Sucesivas (€)</th>
          <th>Otros Conceptos (€)</th>
          <th>Seguros (€)</th>
          <th>Facturado total (€)</th>
        </tr>
      </thead>
      <tbody data-ref="resultsBody"></tbody>
      <tfoot class="mbs-foot">
        <tr>
          <td>TOTAL</td>
          <td data-ref="totPrim">0,00</td>
          <td data-ref="totSuc">0,00</td>
          <td data-ref="totOtros">0,00</td>
          <td data-ref="totSeguros">0,00</td>
          <td data-ref="totBruto">0,00</td>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="mbs-help" style="margin-top:.75rem">
    Reglas extra:
    <span class="mbs-chip">Nutrición + "entrevista" ⇒ Primera</span>
    <span class="mbs-chip">Psicología "pareja": 35 € ⇒ Primera</span>
    <span class="mbs-chip">60 € ⇒ Sucesiva</span>
  </div>

  <div style="margin-top:1.2rem">
    <h4 class="mbs-h4" style="margin-top:0">Bonos facturados por especialista</h4>
    <div class="mbs-tablewrap">
      <table class="mbs-table" aria-label="Bonos facturados por especialista">
        <thead>
          <tr>
            <th>Especialista</th>
            <th>Especialidad</th>
            <th>Bonos (uds)</th>
            <th>Importe bonos (€)</th>
          </tr>
        </thead>
        <tbody data-ref="bonosBody"></tbody>
        <tfoot class="mbs-foot">
          <tr>
            <td>TOTAL</td>
            <td>—</td>
            <td data-ref="bonosTotCount">0</td>
            <td data-ref="bonosTotImporte">0,00</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="mbs-help" style="margin-top:.5rem">
      Solo se incluyen Nutrición, Logopedia y Psicología.
    </div>
  </div>
    <!-- ================== Pagos Nutris ================== -->
  <div class="mbs-card mbs-card-rail pay-dark" style="margin-top:1.2rem">
    <h4 class="mbs-h4">Pagos Nutris (colaboradoras)</h4>

    <div class="mbs-row" style="margin:.25rem 0 .7rem">
      <div class="mbs-help">
        Se calculan automáticamente para <b>María Pazos</b> y <b>Sheila</b>. Base = <i>Facturado total</i>.
      </div>
      <div>
        <label style="font-weight:900">% Retención IRPF (global)</label><br>
        <input type="number" step="1" min="0" max="100" value="15" data-ref="nutriRet" class="mbs-input" style="min-width:96px" aria-label="Retención IRPF Nutris">
      </div>
      <button data-ref="nutriCSV" class="mbs-btn" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Descargar CSV pagos
      </button>
      <button data-ref="nutriPDF" class="mbs-btn" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="16" y1="13" x2="15" y2="13"/></svg>
        Descargar PDF pagos
      </button>
    </div>

    <div class="mbs-tablewrap">
      <table class="mbs-table" aria-label="Pagos Nutris">
        <thead>
          <tr>
            <th>Nutri</th>
            <th>Base reparto (€)</th>
            <th>% Nutri</th>
            <th>Bruto Nutri (€)</th>
            <th>Retención (%)</th>
            <th>Retención (€)</th>
            <th>Pago neto (€)</th>
            <th>% Centro</th>
            <th>Para Centro (€)</th>
          </tr>
        </thead>
        <tbody data-ref="nutriBody"></tbody>
        <tfoot class="mbs-foot">
          <tr>
            <td>TOTAL</td>
            <td data-ref="nutriTotBase">0,00</td>
            <td>—</td>
            <td data-ref="nutriTotGross">0,00</td>
            <td>—</td>
            <td data-ref="nutriTotRet">0,00</td>
            <td data-ref="nutriTotNet">0,00</td>
            <td>—</td>
            <td data-ref="nutriTotCenter">0,00</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="mbs-totals">
      <b>Total a transferir a Nutris (neto): <span data-ref="nutriSumNet">0,00 €</span></b>
      <span class="mbs-help">Retenciones a ingresar: <span data-ref="nutriSumRet">0,00 €</span></span>
    </div>
  </div>
  <!-- ================ FIN Pagos Nutris ================ -->

  <!-- ================== Pagos Logopedas (colaboradoras) ================== -->
  <div class="mbs-card mbs-card-rail pay-dark" style="margin-top:1.2rem">
    <h4 class="mbs-h4">Pagos Logopedas (colaboradoras)</h4>

    <div class="mbs-row" style="margin:.25rem 0 .7rem">
      <div class="mbs-help" style="flex:1;">
        Se calculan automáticamente para <b>María Rico</b> y <b>Tamara Martín</b> (Hugo <u>no</u> entra). Base = <i>Facturado total</i>. <b>IRPF editable por persona</b>.
      </div>
      <div>
        <label style="font-weight:900">% Retención IRPF (por defecto)</label><br>
        <input type="number" step="1" min="0" max="100" value="15" data-ref="logoRet" class="mbs-input" style="min-width:96px" aria-label="Retención IRPF Logopedas por defecto">
      </div>
      <button data-ref="logoCSV" class="mbs-btn" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Descargar CSV pagos
      </button>
      <button data-ref="logoPDF" class="mbs-btn" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="16" y1="13" x2="15" y2="13"/></svg>
        Descargar PDF pagos
      </button>
    </div>

    <div class="mbs-tablewrap">
      <table class="mbs-table" aria-label="Pagos Logopedas">
        <thead>
          <tr>
            <th>Logopeda</th>
            <th>Base reparto (€)</th>
            <th>% Pro</th>
            <th>Bruto Pro (€)</th>
            <th>Retención (%)</th>
            <th>Retención (€)</th>
            <th>Pago neto (€)</th>
            <th>% Centro</th>
            <th>Para Centro (€)</th>
          </tr>
        </thead>
        <tbody data-ref="logoBody"></tbody>
        <tfoot class="mbs-foot">
          <tr>
            <td>TOTAL</td>
            <td data-ref="logoTotBase">0,00</td>
            <td>—</td>
            <td data-ref="logoTotGross">0,00</td>
            <td>—</td>
            <td data-ref="logoTotRet">0,00</td>
            <td data-ref="logoTotNet">0,00</td>
            <td>—</td>
            <td data-ref="logoTotCenter">0,00</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="mbs-totals">
      <b>Total a transferir a Logopedas (neto): <span data-ref="logoSumNet">0,00 €</span></b>
      <span class="mbs-help">Retenciones a ingresar: <span data-ref="logoSumRet">0,00 €</span></span>
    </div>
  </div>
  <!-- ============== FIN Pagos Logopedas (colaboradoras) ============== -->

  <!-- ================== Pagos Nekane (colaboradora) ================== -->
  <div class="mbs-card mbs-card-rail pay-dark" style="margin-top:1.2rem">
    <h4 class="mbs-h4">Pagos Nekane (colaboradora)</h4>

    <div class="mbs-help" style="margin:.25rem 0 .7rem">
      Reparto <b>70/30</b> con deducción fija de <b>175 €</b> para el centro y retención IRPF del <b>15%</b> sobre la parte de
      Nekane tras aplicar el fijo.
    </div>

    <div class="mbs-row" style="margin:.25rem 0 .7rem; justify-content:flex-end;">
      <button data-ref="nekanePDF" class="mbs-btn" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="16" y1="13" x2="15" y2="13"/></svg>
        Descargar PDF pagos
      </button>
    </div>

    <div class="mbs-tablewrap">
      <table class="mbs-table" aria-label="Pagos Nekane">
        <thead>
          <tr>
            <th>Colaboradora</th>
            <th>Facturado (€)</th>
            <th>Parte 70% (€)</th>
            <th>70% - Fijo (€)</th>
            <th>Pago neto 15% (€)</th>
            <th>% Centro</th>
            <th>Para Centro (€)</th>
          </tr>
        </thead>
        <tbody data-ref="nekaneBody"></tbody>
        <tfoot class="mbs-foot">
          <tr>
            <td>TOTAL</td>
            <td data-ref="nekaneTotBase">0,00</td>
            <td data-ref="nekaneTotShare">0,00</td>
            <td data-ref="nekaneTotAfter">0,00</td>
            <td data-ref="nekaneTotNet">0,00</td>
            <td>—</td>
            <td data-ref="nekaneTotCenter">0,00</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="mbs-totals">
      <b>Total a transferir a Nekane (neto): <span data-ref="nekaneSumNet">0,00 €</span></b>
      <span class="mbs-help">Retención 15% a ingresar: <span data-ref="nekaneSumRet">0,00 €</span></span>
    </div>
  </div>
  <!-- ============== FIN Pagos Nekane (colaboradora) ============== -->

  <!-- ================== Charts ================== -->
  <div class="mbs-card mbs-card-rail" style="margin-top:1.2rem">
    <h4 class="mbs-h4">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:20px;height:20px;margin-right:8px">
        <path d="M3 3v18h18"/>
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
      </svg>
      Análisis de Facturación - Gráficos
    </h4>

    <div class="mbs-chartgrid">
      <div class="mbs-chartwrap">
        <div class="mbs-charthead">
          <div class="mbs-charttitle">
            <h5>Facturación por especialista</h5>
            <span class="mbs-chartnote" data-chart-summary="spec"></span>
          </div>
          <div class="mbs-chartactions" aria-label="Opciones facturación por especialista">
            <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="spec" data-mode="top">Top 8</button>
            <button type="button" class="mbs-chartbtn" data-chart-toggle="spec" data-mode="all">Todo</button>
            <button type="button" class="mbs-chartbtn" data-chart-download="chartSpec" data-variant="ghost">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
                PNG
              </span>
            </button>
          </div>
        </div>
        <div class="chart-area">
          <canvas data-ref="chartSpec"></canvas>
        </div>
      </div>
      <div class="mbs-chartwrap">
        <div class="mbs-charthead">
          <div class="mbs-charttitle">
            <h5>Mix por tipo (Primeras / Sucesivas / Bonos / Otros)</h5>
            <span class="mbs-chartnote" data-chart-summary="mix"></span>
          </div>
          <div class="mbs-chartactions" aria-label="Opciones mix por tipo">
            <button type="button" class="mbs-chartbtn" data-chart-download="chartMix" data-variant="ghost">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
                PNG
              </span>
            </button>
          </div>
        </div>
        <div class="chart-area">
          <canvas data-ref="chartMix"></canvas>
        </div>
      </div>
      <div class="mbs-chartwrap">
        <div class="mbs-charthead">
          <div class="mbs-charttitle">
            <h5>Bonos por especialista</h5>
            <span class="mbs-chartnote" data-chart-summary="bonos"></span>
          </div>
          <div class="mbs-chartactions" aria-label="Opciones bonos por especialista">
            <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="bonos" data-mode="top">Top 8</button>
            <button type="button" class="mbs-chartbtn" data-chart-toggle="bonos" data-mode="all">Todo</button>
            <button type="button" class="mbs-chartbtn" data-chart-download="chartBonos" data-variant="ghost">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
                PNG
              </span>
            </button>
          </div>
        </div>
        <div class="chart-area">
          <canvas data-ref="chartBonos"></canvas>
        </div>
      </div>
      <div class="mbs-chartwrap">
        <div class="mbs-charthead">
          <div class="mbs-charttitle">
            <h5>Facturación por especialidad</h5>
            <span class="mbs-chartnote" data-chart-summary="esp"></span>
          </div>
          <div class="mbs-chartactions" aria-label="Opciones facturación por especialidad">
            <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="esp" data-mode="top">Top 8</button>
            <button type="button" class="mbs-chartbtn" data-chart-toggle="esp" data-mode="all">Todo</button>
            <button type="button" class="mbs-chartbtn" data-chart-download="chartEsp" data-variant="ghost">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
                PNG
              </span>
            </button>
          </div>
        </div>
        <div class="chart-area">
          <canvas data-ref="chartEsp"></canvas>
        </div>
      </div>
      <div class="mbs-chartwrap">
        <div class="mbs-charthead">
          <div class="mbs-charttitle">
            <h5>Origen de facturación por especialista</h5>
            <span class="mbs-chartnote" data-chart-summary="origen"></span>
          </div>
          <div class="mbs-chartactions" aria-label="Opciones origen de facturación por especialista">
            <button type="button" class="mbs-chartbtn" data-chart-toggle="origen" data-mode="top">Top 8</button>
            <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="origen" data-mode="all">Todo</button>
            <button type="button" class="mbs-chartbtn" data-chart-download="chartOrigen" data-variant="ghost">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
                PNG
              </span>
            </button>
          </div>
        </div>
        <div class="chart-area chart-area--origen">
          <canvas data-ref="chartOrigen"></canvas>
        </div>
      </div>
      <div class="mbs-chartwrap">
        <div class="mbs-charthead">
          <div class="mbs-charttitle">
            <h5>Total por día</h5>
            <span class="mbs-chartnote" data-chart-summary="dia"></span>
          </div>
          <div class="mbs-chartactions" aria-label="Opciones total por día">
            <button type="button" class="mbs-chartbtn" data-chart-download="chartDia" data-variant="ghost">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
                PNG
              </span>
            </button>
          </div>
        </div>
        <div class="chart-area">
          <canvas data-ref="chartDia"></canvas>
        </div>
      </div>
      <div class="mbs-chartwrap">
        <div class="mbs-charthead">
          <div class="mbs-charttitle">
            <h5>Por forma de pago</h5>
            <span class="mbs-chartnote" data-chart-summary="forma"></span>
          </div>
          <div class="mbs-chartactions" aria-label="Opciones por forma de pago">
            <button type="button" class="mbs-chartbtn" data-chart-download="chartForma" data-variant="ghost">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
                PNG
              </span>
            </button>
          </div>
        </div>
        <div class="chart-area">
          <canvas data-ref="chartForma"></canvas>
        </div>
      </div>
      <div class="mbs-chartwrap">
        <div class="mbs-charthead">
          <div class="mbs-charttitle">
            <h5>Run-rate del mes (acumulado)</h5>
            <span class="mbs-chartnote"><span data-ref="runrateTitle" style="font-weight:600; font-size:.88em"></span></span>
          </div>
          <div class="mbs-chartactions" aria-label="Opciones run-rate del mes">
            <button type="button" class="mbs-chartbtn" data-chart-download="chartRun" data-variant="ghost">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
                PNG
              </span>
            </button>
          </div>
        </div>
        <div class="chart-area">
          <canvas data-ref="chartRun"></canvas>
        </div>
      </div>
      <div class="mbs-chartwrap">
        <div class="mbs-charthead">
          <div class="mbs-charttitle">
            <h5>Calendario de facturación</h5>
            <span class="mbs-chartnote" data-chart-summary="calendar"></span>
          </div>
          <div class="mbs-chartactions" aria-hidden="true"></div>
        </div>
        <div class="chart-area" style="height:auto; min-height:400px">
          <div data-ref="calGrid" class="mbs-cal-wrapper"></div>
          <div class="mbs-cal-legend">
            <span style="width:16px;height:16px;border-radius:5px;background:#dbeafe;border:1px solid #c7d2fe"></span> Bajo
            <span style="width:16px;height:16px;border-radius:5px;background:#60a5fa;margin-left:8px;border:1px solid #2563eb"></span> Alto
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ============== FIN Charts ============== -->

  <!-- ================== Análisis de Rentabilidad ================== -->
  <div class="mbs-card mbs-card-rail pay-dark" style="margin-top:1.2rem">
    <h4 class="mbs-h4">Análisis de Rentabilidad</h4>
    
    <div class="mbs-kpis" style="margin-bottom:1rem">
  <div class="mbs-kpi">
    <div class="k-label">Facturado Total (€)</div>
    <div class="k-value" data-ref="rentKpiTotal">0,00 €</div>
  </div>
  <div class="mbs-kpi">
    <div class="k-label">Gastos Totales (€)</div>
    <div class="k-value" data-ref="rentKpiExpenses">0,00 €</div>
  </div>
  <div class="mbs-kpi">
    <div class="k-label">Beneficio Neto (€)</div>
    <div class="k-value" data-ref="rentKpiProfit">0,00 €</div>
  </div>
  <div class="mbs-kpi">
    <div class="k-label">Margen (%)</div>
    <div class="k-value" data-ref="rentKpiMargin">0%</div>
  </div>
</div>

<div class="mbs-kpis" style="margin-bottom:1rem">
  <div class="mbs-kpi" style="cursor:pointer">
    <div class="k-label">Sueldos (€)</div>
    <div class="k-value" data-ref="rentKpiSueldos">0,00 €</div>
  </div>
  <div class="mbs-kpi" style="cursor:pointer">
    <div class="k-label">SEM (€)</div>
    <div class="k-value" data-ref="rentKpiSem">0,00 €</div>
  </div>
  <div class="mbs-kpi" style="cursor:pointer">
    <div class="k-label">Doctoralia (€)</div>
    <div class="k-value" data-ref="rentKpiDoctoralia">-318,48 €</div>
  </div>
  <div class="mbs-kpi" style="cursor:pointer">
    <div class="k-label">Top Doctors (€)</div>
    <div class="k-value" data-ref="rentKpiTopD">-156,09 €</div>
  </div>
  <div class="mbs-kpi" style="cursor:pointer">
    <div class="k-label">Recepción (€)</div>
    <div class="k-value" data-ref="rentKpiRecepcion">-1.500,00 €</div>
  </div>
</div>

    <div class="mbs-tablewrap">
      <table class="mbs-table" aria-label="Análisis de rentabilidad por especialista">
        <thead>
          <tr>
            <th>Especialista</th>
            <th>Facturado (€)</th>
            <th>Sueldos (€)</th>
            <th>TopD Doct (€)</th>
            <th>SEM (€)</th>
            <th>Recepción (€)</th>
            <th>Beneficio (€)</th>
            <th>Margen (%)</th>
          </tr>
        </thead>
        <tbody data-ref="rentBody"></tbody>
        <tfoot class="mbs-foot">
          <tr>
            <td>TOTAL</td>
            <td data-ref="rentTotFacturado">0,00</td>
            <td data-ref="rentTotCostes">0,00</td>
            <td data-ref="rentTotTopD">0,00</td>
            <td data-ref="rentTotSem">0,00</td>
            <td data-ref="rentTotRecepcion">0,00</td>
            <td data-ref="rentTotBeneficio">0,00</td>
            <td data-ref="rentTotMargen">0%</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Gráfico de distribución de gastos -->
    <div class="mbs-chartwrap" style="margin-top:1rem">
      <div class="mbs-charthead">
        <div class="mbs-charttitle">
          <h5>Distribución de gastos</h5>
          <span class="mbs-chartnote" data-chart-summary="gastos"></span>
        </div>
        <div class="mbs-chartactions" aria-label="Opciones distribución de gastos">
          <button type="button" class="mbs-chartbtn" data-chart-download="chartGastos" data-variant="ghost">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
              PNG
            </span>
          </button>
        </div>
      </div>
      <div class="chart-area">
        <canvas data-ref="chartGastos"></canvas>
      </div>
    </div>
    <!-- Gráfico de beneficio neto por especialista -->
    <div class="mbs-chartwrap" style="margin-top:1rem">
      <div class="mbs-charthead">
        <div class="mbs-charttitle">
          <h5>Beneficio neto por especialista</h5>
          <span class="mbs-chartnote" data-chart-summary="beneficio"></span>
        </div>
        <div class="mbs-chartactions" aria-label="Opciones beneficio por especialista">
          <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="beneficio" data-mode="top">Top 8</button>
          <button type="button" class="mbs-chartbtn" data-chart-toggle="beneficio" data-mode="all">Todo</button>
          <button type="button" class="mbs-chartbtn" data-chart-download="chartBeneficio" data-variant="ghost">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
              PNG
            </span>
          </button>
        </div>
      </div>
      <div class="chart-area">
        <canvas data-ref="chartBeneficio"></canvas>
      </div>
    </div>

    <!-- Gráfico de margen por especialista -->
    <div class="mbs-chartwrap" style="margin-top:1rem">
      <div class="mbs-charthead">
        <div class="mbs-charttitle">
          <h5>Margen (%) por especialista</h5>
          <span class="mbs-chartnote" data-chart-summary="margen"></span>
        </div>
        <div class="mbs-chartactions" aria-label="Opciones margen por especialista">
          <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="margen" data-mode="top">Top 8</button>
          <button type="button" class="mbs-chartbtn" data-chart-toggle="margen" data-mode="all">Todo</button>
          <button type="button" class="mbs-chartbtn" data-chart-download="chartMargen" data-variant="ghost">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
              PNG
            </span>
          </button>
        </div>
      </div>
      <div class="chart-area">
        <canvas data-ref="chartMargen"></canvas>
      </div>
    </div>

    <!-- Gráfico de beneficio total por especialidad -->
    <div class="mbs-chartwrap" style="margin-top:1rem">
      <div class="mbs-charthead">
        <div class="mbs-charttitle">
          <h5>Beneficio total por especialidad</h5>
          <span class="mbs-chartnote" data-chart-summary="beneficioEsp"></span>
        </div>
        <div class="mbs-chartactions" aria-label="Opciones beneficio por especialidad">
          <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="beneficioEsp" data-mode="top">Top 8</button>
          <button type="button" class="mbs-chartbtn" data-chart-toggle="beneficioEsp" data-mode="all">Todo</button>
          <button type="button" class="mbs-chartbtn" data-chart-download="chartBeneficioEspecialidad" data-variant="ghost">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
              PNG
            </span>
          </button>
        </div>
      </div>
      <div class="chart-area">
        <canvas data-ref="chartBeneficioEspecialidad"></canvas>
      </div>
    </div>

    <!-- Gráfico de margen por especialidad -->
    <div class="mbs-chartwrap" style="margin-top:1rem">
      <div class="mbs-charthead">
        <div class="mbs-charttitle">
          <h5>Margen (%) por especialidad</h5>
          <span class="mbs-chartnote" data-chart-summary="margenEsp"></span>
        </div>
        <div class="mbs-chartactions" aria-label="Opciones margen por especialidad">
          <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="margenEsp" data-mode="top">Top 8</button>
          <button type="button" class="mbs-chartbtn" data-chart-toggle="margenEsp" data-mode="all">Todo</button>
          <button type="button" class="mbs-chartbtn" data-chart-download="chartMargenEspecialidad" data-variant="ghost">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
              PNG
            </span>
          </button>
        </div>
      </div>
      <div class="chart-area">
        <canvas data-ref="chartMargenEspecialidad"></canvas>
      </div>
    </div>

    <!-- Stacked Bar Chart: Facturación vs Costes vs Beneficio -->
    <div class="mbs-chartwrap" style="margin-top:1rem">
      <div class="mbs-charthead">
        <div class="mbs-charttitle">
          <h5>Análisis por especialista (Facturación vs Costes vs Beneficio)</h5>
          <span class="mbs-chartnote" data-chart-summary="stacked"></span>
        </div>
        <div class="mbs-chartactions" aria-label="Opciones stacked por especialista">
          <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="stacked" data-mode="top">Top 8</button>
          <button type="button" class="mbs-chartbtn" data-chart-toggle="stacked" data-mode="all">Todo</button>
          <button type="button" class="mbs-chartbtn" data-chart-download="chartStacked" data-variant="ghost">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
              PNG
            </span>
          </button>
        </div>
      </div>
      <div class="chart-area">
        <canvas data-ref="chartStacked"></canvas>
      </div>
    </div>
    <!-- Stacked Bar Chart por especialidad -->
    <div class="mbs-chartwrap" style="margin-top:1rem">
      <div class="mbs-charthead">
        <div class="mbs-charttitle">
          <h5>Análisis por especialidad (Facturación vs Costes vs Beneficio)</h5>
          <span class="mbs-chartnote" data-chart-summary="stackedEsp"></span>
        </div>
        <div class="mbs-chartactions" aria-label="Opciones stacked por especialidad">
          <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="stackedEsp" data-mode="top">Top 8</button>
          <button type="button" class="mbs-chartbtn" data-chart-toggle="stackedEsp" data-mode="all">Todo</button>
          <button type="button" class="mbs-chartbtn" data-chart-download="chartStackedEspecialidad" data-variant="ghost">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
              PNG
            </span>
          </button>
        </div>
      </div>
      <div class="chart-area">
        <canvas data-ref="chartStackedEspecialidad"></canvas>
      </div>
    </div>

    <!-- Chart de gastos por especialista -->
    <div class="mbs-chartwrap" style="margin-top:1rem">
      <div class="mbs-charthead">
        <div class="mbs-charttitle">
          <h5>Gastos por especialista</h5>
          <span class="mbs-chartnote" data-chart-summary="gastosEsp"></span>
        </div>
        <div class="mbs-chartactions" aria-label="Opciones gastos por especialista">
          <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="gastosEsp" data-mode="top">Top 8</button>
          <button type="button" class="mbs-chartbtn" data-chart-toggle="gastosEsp" data-mode="all">Todo</button>
          <button type="button" class="mbs-chartbtn" data-chart-download="chartGastosEspecialista" data-variant="ghost">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
              PNG
            </span>
          </button>
        </div>
      </div>
      <div class="chart-area">
        <canvas data-ref="chartGastosEspecialista"></canvas>
      </div>
    </div>

    <!-- Chart de gastos por especialidad -->
    <div class="mbs-chartwrap" style="margin-top:1rem">
      <div class="mbs-charthead">
        <div class="mbs-charttitle">
          <h5>Gastos por especialidad</h5>
          <span class="mbs-chartnote" data-chart-summary="gastosEspecialidad"></span>
        </div>
        <div class="mbs-chartactions" aria-label="Opciones gastos por especialidad">
          <button type="button" class="mbs-chartbtn is-active" data-chart-toggle="gastosEspecialidad" data-mode="top">Top 8</button>
          <button type="button" class="mbs-chartbtn" data-chart-toggle="gastosEspecialidad" data-mode="all">Todo</button>
          <button type="button" class="mbs-chartbtn" data-chart-download="chartGastosEspecialidad" data-variant="ghost">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
              PNG
            </span>
          </button>
        </div>
      </div>
      <div class="chart-area">
        <canvas data-ref="chartGastosEspecialidad"></canvas>
      </div>
    </div>
  </div>
  <!-- ============== FIN Análisis de Rentabilidad ============== -->
</div>

<!-- CDNs requeridos (carga por orden). -->
<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.3.0/dist/chart.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"></script>

<script>
(function(global){
  if(global.MBSPayroll) return;

  const DEFAULT_DAYS_PER_MONTH = 30;
  const MONTH_LABEL = new Intl.DateTimeFormat('es-ES', {
    month: 'long',
    timeZone: 'Europe/Madrid'
  });

  function toNumber(value){
    const num = Number(value);
    return Number.isFinite(num) ? num : 0;
  }

  function round2(value){
    return Math.round(toNumber(value) * 100) / 100;
  }

  function formatEUR(value){
    const number = round2(value);
    return number.toLocaleString('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + ' €';
  }

  function getDaysInMonth(year, monthIndex){
    const now = new Date();
    const y = Number.isInteger(year) ? year : now.getFullYear();
    const m = Number.isInteger(monthIndex) ? monthIndex : now.getMonth();
    const days = new Date(y, m + 1, 0).getDate();
    return Number.isFinite(days) && days > 0 ? days : DEFAULT_DAYS_PER_MONTH;
  }

  function getCurrentPayrollMonth(){
    const now = new Date();
    return {
      year: now.getFullYear(),
      monthIndex: now.getMonth(),
      monthLabelES: MONTH_LABEL.format(now)
    };
  }

  function createConcept(amount, days){
    const monthly = round2(amount);
    const baseDays = Number.isFinite(days) && days > 0 ? days : DEFAULT_DAYS_PER_MONTH;
    const daily = baseDays ? round2(monthly / DEFAULT_DAYS_PER_MONTH) : 0;
    const devengado = round2(daily * baseDays);
    return {
      unidades: `${baseDays} días`,
      importeDiario: daily,
      devengado
    };
  }

  function clampBase(base, min, max){
    let value = round2(base);
    const minNum = Number(min);
    const maxNum = Number(max);
    if(Number.isFinite(minNum) && minNum > 0){
      value = Math.max(value, minNum);
    }
    if(Number.isFinite(maxNum) && maxNum > 0){
      value = Math.min(value, maxNum);
    }
    return round2(value);
  }

  function computeWorkerContributions(base, rates){
    const cc = round2(base * (toNumber(rates?.contingenciasComunes) / 100));
    const mei = round2(base * (toNumber(rates?.mei) / 100));
    const desempleo = round2(base * (toNumber(rates?.desempleo) / 100));
    const fp = round2(base * (toNumber(rates?.formacionProfesional) / 100));
    const total = round2(cc + mei + desempleo + fp);
    return {
      baseCotizacion: round2(base),
      cc,
      mei,
      desempleo,
      fp,
      total
    };
  }

  function computeEmployerContributions(base, rates){
    if(!rates) return null;
    const cc = round2(base * (toNumber(rates.contingenciasComunes) / 100));
    const mei = round2(base * (toNumber(rates.mei) / 100));
    const desempleo = round2(base * (toNumber(rates.desempleo) / 100));
    const fogasa = round2(base * (toNumber(rates.fogasa) / 100));
    const fp = round2(base * (toNumber(rates.formacionProfesional) / 100));
    const itIms = round2(base * (toNumber(rates.itIms) / 100));
    const total = round2(cc + mei + desempleo + fogasa + fp + itIms);
    const hasData = base > 0 || [cc, mei, desempleo, fogasa, fp, itIms].some(val => val !== 0);
    if(!hasData) return null;
    return {
      baseCotizacion: round2(base),
      cuotas: {
        cc,
        mei,
        desempleo,
        fogasa,
        fp,
        itIms,
        total
      }
    };
  }

  function calculatePayroll(config){
    config = config || {};

    const salarioBase = toNumber(config.salarioBaseMensual);
    const plusEmpresa = toNumber(config.plusEmpresaMensual);
    const mejoraVol = toNumber(config.mejoraVolAbsMensual);
    const pagasExtra = toNumber(config.pagasExtra);
    const importePagaExtra = toNumber(config.importePagaExtra);
    const prorrataActiva = Boolean(config.pagasProrrateadas);
    const daysInMonth = getDaysInMonth(config.year, config.monthIndex);

    const prorrataMensual = round2((importePagaExtra * pagasExtra) / 12);

    const conceptos = {
      salarioBase: createConcept(salarioBase, daysInMonth),
      plusEmpresa: createConcept(plusEmpresa, daysInMonth),
      mejoraVolAbs: createConcept(mejoraVol, daysInMonth)
    };

    const devengadoTotal = round2(
      conceptos.salarioBase.devengado +
      conceptos.plusEmpresa.devengado +
      conceptos.mejoraVolAbs.devengado
    );

    const prorrataPagas = prorrataActiva ? prorrataMensual : 0;

    const totalDevengadoMasProrrata = round2(devengadoTotal + prorrataPagas);

    const baseCotizacionObjetivo = totalDevengadoMasProrrata;
    const baseMinima = config.baseCotizacionMin != null
      ? Number(config.baseCotizacionMin)
      : baseCotizacionObjetivo;

    const baseParaCuotasTrabajador = clampBase(
      baseCotizacionObjetivo,
      baseMinima,
      config.baseCotizacionMax
    );

    const baseParaCuotasEmpresa = clampBase(
      baseCotizacionObjetivo,
      baseMinima,
      config.baseCotizacionMax
    );

    const ssTrabajador = computeWorkerContributions(baseParaCuotasTrabajador, config.ssTrabajador || {});
    const tipoIRPF = toNumber(config.tipoIRPF) / 100;
    const baseIrpf = totalDevengadoMasProrrata;
    const irpf = round2(baseIrpf * tipoIRPF);
    const aplicaSsTrabajador = false;
    const totalDeducciones = round2(irpf + (aplicaSsTrabajador ? ssTrabajador.total : 0));
    const liquido = round2(totalDevengadoMasProrrata - totalDeducciones);

    const employer = computeEmployerContributions(baseParaCuotasEmpresa, config.ssEmpresa);
    const costeEmpresa = employer
      ? {
          baseCotizacion: employer.baseCotizacion,
          cuotas: employer.cuotas,
          prorrataMensual,
          costeDevengado: round2(devengadoTotal + prorrataPagas),
          costeTotal: round2(devengadoTotal + prorrataPagas + employer.cuotas.total)
        }
      : null;

    return {
      conceptos,
      devengadoTotal,
      prorrataPagas,
      prorrataMensualCotizacion: prorrataMensual,
      totalDevengadoMasProrrata,
      baseIrpf,
      deducciones: {
        irpf,
        ssTrabajador,
        totalDeducciones,
        aplicaSsTrabajador
      },
      liquido,
      daysInMonth,
      costeEmpresa
    };
  }

  global.MBSPayroll = {
    getCurrentPayrollMonth,
    calculatePayroll,
    formatEUR,
    round2,
    getDaysInMonth
  };
})(window);
</script>

<script>
(function(){
  const initAllWidgets = ()=>{
    document.querySelectorAll('.mbs-payroll-widget[data-widget]').forEach(initWidget);
  };

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initAllWidgets, { once: true });
  } else {
    initAllWidgets();
  }

  let evolutionPanelInitialized = false;

  function initWidget(root){
    const $ = (name)=>root.querySelector(`[data-ref="${name}"]`);

    const glanceTargets = {
      liquidez: Array.from(document.querySelectorAll('[data-mbs-glance="liquidez"]')),
      margen: Array.from(document.querySelectorAll('[data-mbs-glance="margen"]')),
      ocupacion: Array.from(document.querySelectorAll('[data-mbs-glance="ocupacion"]'))
    };

    const updateGlance = (key, value) => {
      const targets = glanceTargets[key] || [];
      if (!targets.length) return;
      targets.forEach((node)=>{
        if (value != null) {
          node.textContent = value;
        }
        const card = node.closest('.mbs-suite-glance-card');
        if (!card) return;
        if (card.dataset.highlightTimer){
          window.clearTimeout(Number(card.dataset.highlightTimer));
        }
        card.classList.remove('is-updated');
        void card.offsetWidth;
        card.classList.add('is-updated');
        const timer = window.setTimeout(()=>{
          card.classList.remove('is-updated');
          delete card.dataset.highlightTimer;
        }, 1200);
        card.dataset.highlightTimer = String(timer);
      });
    };

    const csvFile     = $('csvFile');
    const excludeNeg  = $('excludeNeg');
    const resultsBody = $('resultsBody');
    const totPrim     = $('totPrim');
    const totSuc      = $('totSuc');
    const totOtros    = $('totOtros');
    const totBruto    = $('totBruto');
    const totSeguros = $('totSeguros');
    const downloadBtn = $('downloadBtn');
    const saveEvolutionBtn = $('saveEvolutionBtn');
    const stats       = $('stats');
    const bonosBody   = $('bonosBody');
    const bonosTotCount = $('bonosTotCount');
    const bonosTotImporte = $('bonosTotImporte');

    const evoSavedSelect = document.querySelector('[data-evo-saved]');
    const evoUploadInput = document.querySelector('[data-evo-upload]');
    const evoClearBtn = document.querySelector('[data-evo-clear]');
    const evoDeleteBtn = document.querySelector('[data-evo-delete]');
    const evoActiveContainer = document.querySelector('[data-evo-active]');
    const evoEmptyState = document.querySelector('[data-evo-empty]');
    const evoChartsContainer = document.querySelector('[data-evo-charts]');
    const evoChartBaseCanvas = document.getElementById('evoChartBase');
    const evoChartMixCanvas = document.getElementById('evoChartMix');
    const evoChartDeltaCanvas = document.getElementById('evoChartDelta');
    const evoChartSpecialistsCanvas = document.getElementById('evoChartSpecialists');
    const evoChartBonosCanvas = document.getElementById('evoChartBonos');
    const evoDownloadButtons = document.querySelectorAll('[data-evo-download]');
    const evoKpiContainer = document.querySelector('[data-evo-kpis]');
    const evoKpiValues = {
      total: document.querySelector('[data-evo-kpi-value="total"]'),
      average: document.querySelector('[data-evo-kpi-value="average"]'),
      trend: document.querySelector('[data-evo-kpi-value="trend"]'),
      best: document.querySelector('[data-evo-kpi-value="best"]')
    };
    const evoKpiHints = {
      total: document.querySelector('[data-evo-kpi-hint="total"]'),
      average: document.querySelector('[data-evo-kpi-hint="average"]'),
      trend: document.querySelector('[data-evo-kpi-hint="trend"]'),
      best: document.querySelector('[data-evo-kpi-hint="best"]')
    };
    const evoKpiTextBest = document.querySelector('[data-evo-kpi-text="best"]');
    const evoKpiBadgeBest = document.querySelector('[data-evo-kpi-badge="best"]');
    const evoTrendCard = document.querySelector('.mbs-evo-kpi[data-kpi="trend"]');
    const evoPrimaryStart = document.querySelector('[data-evo-primary-start]');
    const evoPrimaryEnd = document.querySelector('[data-evo-primary-end]');
    const evoSecondaryStart = document.querySelector('[data-evo-secondary-start]');
    const evoSecondaryEnd = document.querySelector('[data-evo-secondary-end]');
    const evoCompareToggle = document.querySelector('[data-evo-compare-toggle]');
    const evoCompareInputs = document.querySelector('[data-evo-compare-inputs]');
    const evoPrimaryLabel = document.querySelector('[data-evo-primary-label]');
    const evoSecondaryLabel = document.querySelector('[data-evo-secondary-label]');
    const evoApplyBtn = document.querySelector('[data-evo-apply]');
    const evoCompareSummary = document.querySelector('[data-evo-compare-summary]');
    const evoMetricPrimaryValues = {
      revenue: document.querySelector('[data-evo-primary-value="revenue"]'),
      privados: document.querySelector('[data-evo-primary-value="privados"]'),
      count: document.querySelector('[data-evo-primary-value="count"]')
    };
    const evoMetricSecondaryValues = {
      revenue: document.querySelector('[data-evo-secondary-value="revenue"]'),
      privados: document.querySelector('[data-evo-secondary-value="privados"]'),
      count: document.querySelector('[data-evo-secondary-value="count"]')
    };
    const evoMetricDiffs = {
      revenue: document.querySelector('[data-evo-diff="revenue"]'),
      privados: document.querySelector('[data-evo-diff="privados"]'),
      count: document.querySelector('[data-evo-diff="count"]')
    };
    let evoRangeSnapshots = { primary: null, comparison: null };
    let evoDateBounds = { min: null, max: null };

        /* KPI refs */
    const kpiTotal = $('kpiTotal');
    const kpiCount = $('kpiCount');
    const kpiPrimPct = $('kpiPrimPct');
    const kpiAvg = $('kpiAvg');
    const kpiSeguros = $('kpiSeguros');
    const kpiPrivados = $('kpiPrivados');

    const resetBtn = $('resetBtn');

    const occupancyRoot = document.querySelector('[data-occupancy]');
    const occupancyGrid = occupancyRoot?.querySelector('[data-occupancy-grid]') || null;
    const occupancyEditorBackdrop = occupancyRoot?.querySelector('[data-room-editor-backdrop]') || null;
    const occupancyEditorContainer = occupancyRoot?.querySelector('[data-room-editor]') || null;
    const occupancyResetBtn = occupancyRoot?.querySelector('[data-occupancy-reset]') || null;
    const occupancyFillBtn = occupancyRoot?.querySelector('[data-occupancy-fill]') || null;
    const occupancyAvgEl = occupancyRoot?.querySelector('[data-occupancy-avg]') || null;
    const occupancyAvgNote = occupancyRoot?.querySelector('[data-occupancy-avg-note]') || null;
    const occupancyActiveEl = occupancyRoot?.querySelector('[data-occupancy-active]') || null;
    const occupancyActiveNote = occupancyRoot?.querySelector('[data-occupancy-active-note]') || null;
    const occupancyFullEl = occupancyRoot?.querySelector('[data-occupancy-full]') || null;
    const occupancyFullNote = occupancyRoot?.querySelector('[data-occupancy-full-note]') || null;
    const occupancyFreeEl = occupancyRoot?.querySelector('[data-occupancy-free]') || null;
    const occupancyFreeNote = occupancyRoot?.querySelector('[data-occupancy-free-note]') || null;
    const occupancyScheduleContainer = occupancyRoot?.querySelector('[data-occupancy-schedule]') || null;
    const occupancySessionsInput = occupancyScheduleContainer?.querySelector('[data-occupancy-sessions]') || null;
    const occupancySessionHoursInput = occupancyScheduleContainer?.querySelector('[data-occupancy-session-hours]') || null;
    const occupancyScheduleNote = occupancyScheduleContainer?.querySelector('[data-occupancy-schedule-note]') || null;
    const occupancySchedulePeriodInputs = occupancyScheduleContainer
      ? Array.from(occupancyScheduleContainer.querySelectorAll('[data-occupancy-period]'))
      : [];
    const occupancyScheduleDayToggles = occupancyScheduleContainer
      ? Array.from(occupancyScheduleContainer.querySelectorAll('[data-occupancy-day-toggle]'))
      : [];
    const occupancyApplyScheduleBtn = occupancyScheduleContainer?.querySelector('[data-occupancy-apply-schedule]') || null;

    const evoPercentFormatter = new Intl.NumberFormat('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    const occupancyPercentFormatter = new Intl.NumberFormat('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
    const occupancyHoursFormatter = new Intl.NumberFormat('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 1 });

    /* ========= Nutris ========= */
    const NUTRIS = ["Maria Pazos","Sheila"]; // fijas
    const nutriRet      = $('nutriRet');
    const nutriBody     = $('nutriBody');
    const nutriCSV      = $('nutriCSV');
    const nutriPDF      = $('nutriPDF');
    const nutriTotBase  = $('nutriTotBase');
    const nutriTotGross = $('nutriTotGross');
    const nutriTotRet   = $('nutriTotRet');
    const nutriTotNet   = $('nutriTotNet');
    const nutriTotCenter= $('nutriTotCenter');
    const nutriSumNet   = $('nutriSumNet');
    const nutriSumRet   = $('nutriSumRet');

    /* ========= Logopedas ========= */
    const LOGOPEDAS = ["Maria Rico","Tamara Martin"]; // fijas (Hugo fuera)
    const logoRet       = $('logoRet'); // default IRPF
    const logoBody      = $('logoBody');
    const logoCSV       = $('logoCSV');
    const logoPDF       = $('logoPDF');
    const logoTotBase   = $('logoTotBase');
    const logoTotGross  = $('logoTotGross');
    const logoTotRet    = $('logoTotRet');
    const logoTotNet    = $('logoTotNet');
    const logoTotCenter = $('logoTotCenter');
    const logoSumNet    = $('logoSumNet');
    const logoSumRet    = $('logoSumRet');

    /* ========= Nekane ========= */
    const NEKANE_CFG = [{name:"Nekane", pct:70, ret:15, fijo:175}];
    const nekaneBody      = $('nekaneBody');
    const nekaneTotBase   = $('nekaneTotBase');
    const nekaneTotShare  = $('nekaneTotShare');
    const nekaneTotAfter  = $('nekaneTotAfter');
    const nekaneTotNet    = $('nekaneTotNet');
    const nekaneTotCenter = $('nekaneTotCenter');
    const nekaneSumNet    = $('nekaneSumNet');
    const nekaneSumRet    = $('nekaneSumRet');
    const nekanePDF       = $('nekanePDF');

    const BONO_SPECIALTIES = ['nutricion','logopedia','psicologia'];

    /* ========= Rentabilidad refs ========= */
    const rentBody = $('rentBody');
    const rentTotFacturado = $('rentTotFacturado');
    const rentTotCostes = $('rentTotCostes');
    const rentTotBeneficio = $('rentTotBeneficio');
    const rentTotMargen = $('rentTotMargen');
    const rentTotTopD = $('rentTotTopD');
    const rentKpiDoctoralia = $('rentKpiDoctoralia');
    const rentKpiTopD = $('rentKpiTopD');
    const rentTotSem = $('rentTotSem');
    const rentKpiRecepcion = $('rentKpiRecepcion');
    const rentTotRecepcion = $('rentTotRecepcion');
    const rentKpiTotal = $('rentKpiTotal');
const rentKpiExpenses = $('rentKpiExpenses');
const rentKpiProfit = $('rentKpiProfit');
const rentKpiMargin = $('rentKpiMargin');
const rentKpiSueldos = $('rentKpiSueldos');
const rentKpiSem = $('rentKpiSem');

    /* ========= LS keys ========= */
    const LS_PCTS_NUTRI='mbs-nutri-pcts-v3';
    const LS_RET_NUTRI ='mbs-nutri-ret-v1';
    const LS_LOGO_PCTS ='mbs-logo-pcts-v2';
    const LS_LOGO_RET  ='mbs-logo-ret-v1';
    const LS_LOGO_RET_MAP='mbs-logo-ret-map-v1'; // per-person IRPF
    const LS_SEM_VALUES = 'mbs-sem-values-v1';
    const LS_TOPD_VALUES = 'mbs-topd-values-v1';
    const LS_RECEPCION_VALUE = 'mbs-recepcion-value-v1';
    const LS_EVO_SNAPSHOTS = 'mbs-evo-snapshots-v1';
    const LS_OCCUPANCY_STATE = 'mbs-occupancy-v2';
    const OCCUPANCY_DAY_ORDER = ['mon','tue','wed','thu','fri','sat','sun'];
    const OCCUPANCY_DAY_LABELS = {
      mon: 'L',
      tue: 'M',
      wed: 'X',
      thu: 'J',
      fri: 'V',
      sat: 'S',
      sun: 'D'
    };
    const OCCUPANCY_PERIODS = [
      { key: 'am', label: 'Mañana' },
      { key: 'pm', label: 'Tarde' }
    ];
    const OCCUPANCY_PERIOD_KEYS = OCCUPANCY_PERIODS.map(period => period.key);
    const OCCUPANCY_PERIOD_LABELS = OCCUPANCY_PERIODS.reduce((acc, period)=>{
      acc[period.key] = period.label;
      return acc;
    }, {});
    const DEFAULT_OCCUPANCY_SCHEDULE = {
      sessionsPerDay: 2,
      sessionHours: 4,
      activeDays: ['mon','tue','wed','thu','fri'],
      dayPeriods: OCCUPANCY_DAY_ORDER.reduce((acc, day)=>{
        acc[day] = ['mon','tue','wed','thu','fri'].includes(day)
          ? [...OCCUPANCY_PERIOD_KEYS]
          : [];
        return acc;
      }, {})
    };
    const DEFAULT_OCCUPANCY_ROOMS = [
      { id: 'sala-1', name: 'Sala 1', capacity: 8, occupied: 6, color: 'var(--chart-1)' },
      { id: 'sala-2', name: 'Sala 2', capacity: 8, occupied: 5, color: 'var(--chart-2)' },
      { id: 'sala-3', name: 'Sala 3', capacity: 8, occupied: 4, color: 'var(--chart-3)' },
      { id: 'sala-4', name: 'Sala 4', capacity: 8, occupied: 7, color: 'var(--chart-4)' },
      { id: 'sala-5', name: 'Sala 5', capacity: 8, occupied: 3, color: 'var(--chart-5)' },
      { id: 'sala-6', name: 'Sala 6', capacity: 8, occupied: 8, color: 'var(--chart-6)' },
      { id: 'sala-7', name: 'Sala 7', capacity: 8, occupied: 2, color: 'var(--chart-7)' }
    ];

    let parsedRows = [];
    let summary    = {};
    let nutriPctMap= {};
    let logoPctMap = {};
    let logoRetMap = {}; // { normName: percent }
    let semValues = {};
    let topdValues = {};
    let recepcionValue = 0; // Se calculará automáticamente
    let currentTotals = { prim: 0, suc: 0, otros: 0, seguros: 0, bruto: 0 };
    let currentBonosTotals = { count: 0, importe: 0 };
    let currentStats = { processed: 0, used: 0, noAmount: 0 };
    let currentRentabilidadTotals = null;
    let currentEvolutionSnapshot = null;
    let evolutionSnapshots = [];
    let evoActiveSnapshots = [];
    let occupancyState = null;

    let occupancyScheduleReady = false;
    const OCCUPANCY_DENSITY_ACCENTS = {
      low: '#38bdf8',
      mid: '#60a5fa',
      high: '#4f46e5',
      full: '#1d4ed8',
      off: '#64748b'
    };
    let occupancyEditorRefs = null;
    let occupancyEditorRoomId = null;
    let occupancyEditorKeyHandler = null;

    const payrollCostCache = {
      hugo: null,
      june: null,
      recepcion: null
    };

    function extractPayrollCost(roleData){
      if (!roleData) return null;
      const source = roleData.breakdown ? roleData.breakdown : roleData;
      if (!source) return null;
      const total = source?.costeEmpresa?.costeTotal;
      if (typeof total === 'number' && Number.isFinite(total)) return total;
      const numeric = Number(total);
      return Number.isFinite(numeric) ? numeric : null;
    }

    function updatePayrollCosts(payload){
      const source = (payload && payload.roles) || payload || (typeof window !== 'undefined' ? window.MBSPayrollResults : null);
      if (!source) return false;
      const mappings = [
        { keys: ['logopedia', 'hugo'], cacheKey: 'hugo' },
        { keys: ['psicologia', 'june'], cacheKey: 'june' },
        { keys: ['administracion', 'recepcion'], cacheKey: 'recepcion' }
      ];
      let changed = false;
      mappings.forEach(map => {
        let roleData = null;
        for (const key of map.keys){
          if (source && source[key]){
            roleData = source[key];
            break;
          }
        }
        const value = extractPayrollCost(roleData);
        if (value != null){
          if (!Number.isFinite(payrollCostCache[map.cacheKey]) || Math.abs(payrollCostCache[map.cacheKey] - value) > 0.01){
            payrollCostCache[map.cacheKey] = value;
            changed = true;
          }
        }
      });
      const recepcionCost = Number(payrollCostCache.recepcion);
      if (Number.isFinite(recepcionCost) && recepcionCost > 0){
        if (Math.abs(recepcionValue - recepcionCost) > 0.01){
          recepcionValue = recepcionCost;
          if (rentKpiRecepcion){
            rentKpiRecepcion.textContent = '-' + fmtEUR(recepcionValue) + ' €';
          }
          saveRecepcionCfg();
          changed = true;
        }
      }
      return changed;
    }

    function payrollCostForEspecialista(normName){
      if (!normName) return null;
      if (/hugo|zichner|logoped/.test(normName)) return payrollCostCache.hugo;
      if (/june|amores|psico/.test(normName)) return payrollCostCache.june;
      return null;
    }

    /* ========= Charts ========= */
    let chartSpec = null, chartMix = null, chartEsp = null, chartBonos = null, chartOrigen = null;
let chartDia = null, chartForma = null, chartRun = null;
let chartGastos = null;
let chartBeneficio = null;
let chartMargen = null;
let chartBeneficioEspecialidad = null;
let chartMargenEspecialidad = null;
let chartStacked = null;
let chartStackedEspecialidad = null;
let chartGastosEspecialista = null;
let chartGastosEspecialidad = null;
let chartOccBar = null, chartOccHugo = null, chartOccJune = null;
let evoChartBase = null, evoChartMix = null, evoChartDelta = null, evoChartSpecialists = null, evoChartBonos = null;
let lastRenderedPeriod = null;

    const CHART_DEFAULT_LIMIT = 8;
    const chartViewState = {
      spec: 'top',
      bonos: 'top',
      esp: 'top',
      origen: 'all',
      beneficio: 'top',
      margen: 'top',
      beneficioEsp: 'top',
      margenEsp: 'top',
      stacked: 'top',
      stackedEsp: 'top',
      gastosEsp: 'top',
      gastosEspecialidad: 'top',
      forma: 'top'
    };
    let chartControlsReady = false;

    function limitRecords(records = [], chartKey, { allowOthers = true, label = 'Otros', limit = CHART_DEFAULT_LIMIT } = {}){
      if (!Array.isArray(records)) return [];
      const mode = chartViewState[chartKey] || 'top';
      const effectiveLimit = Math.max(1, limit);
      if (mode === 'all' || records.length <= effectiveLimit){
        return records.map(item => ({ ...item }));
      }
      if (!allowOthers){
        return records.slice(0, effectiveLimit).map(item => ({ ...item }));
      }
      const cutoff = Math.max(1, effectiveLimit - 1);
      const primary = records.slice(0, cutoff).map(item => ({ ...item }));
      const others = records.slice(cutoff);
      const othersValue = others.reduce((sum, item)=>sum + (Number(item?.value) || 0), 0);
      const othersCount = others.reduce((sum, item)=>sum + (Number(item?.count) || 0), 0);
      if (othersValue > 0.0001 || othersCount > 0.0001){
        const aggregate = { label, value: Number(othersValue.toFixed(2)), isOther: true };
        if (othersCount > 0) aggregate.count = Math.round(othersCount);
        primary.push(aggregate);
      }
      return primary;
    }

    function limitCompositeRecords(records = [], chartKey, { label = 'Otros', limit = CHART_DEFAULT_LIMIT } = {}){
      if (!Array.isArray(records)) return [];
      const mode = chartViewState[chartKey] || 'top';
      const effectiveLimit = Math.max(1, limit);
      if (mode === 'all' || records.length <= effectiveLimit){
        return records.map(item => ({ ...item }));
      }
      const cutoff = Math.max(1, effectiveLimit - 1);
      const primary = records.slice(0, cutoff).map(item => ({ ...item }));
      const others = records.slice(cutoff);
      const aggregate = { label };
      others.forEach(item => {
        if (!item || typeof item !== 'object') return;
        Object.keys(item).forEach(key => {
          if (key === 'label') return;
          const value = Number(item[key]);
          if (!Number.isFinite(value)) return;
          aggregate[key] = (aggregate[key] || 0) + value;
        });
      });
      if (Object.keys(aggregate).length > 1){
        primary.push(aggregate);
      }
      return primary;
    }

    function updateChartToggleButtons(chartKey){
      const buttons = document.querySelectorAll(`[data-chart-toggle="${chartKey}"]`);
      buttons.forEach(btn => {
        const mode = btn.getAttribute('data-mode') || 'top';
        btn.classList.toggle('is-active', chartViewState[chartKey] === mode);
      });
    }

    function setChartSummary(key, text){
      const el = key ? document.querySelector(`[data-chart-summary="${key}"]`) : null;
      if (el){
        el.textContent = text || '';
        el.setAttribute('title', text || '');
      }
    }

    const numberFormatter = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 1, minimumFractionDigits: 1 });

    function describeTopShare(records, total, { fallback = 'Sin datos', formatter = fmtEUR, percent = true } = {}){
      if (!Array.isArray(records) || !records.length){
        return fallback;
      }
      const top = records[0];
      const value = Number(top?.value) || 0;
      const label = top?.label || fallback;
      if (percent && total > 0){
        const pct = (value / total) * 100;
        return `${label}: ${formatter(value)} (${numberFormatter.format(pct)}%)`;
      }
      return `${label}: ${formatter(value)}`;
    }

    function describePeak(values, labels){
      if (!Array.isArray(values) || !values.length){
        return null;
      }
      let maxValue = -Infinity;
      let maxIndex = -1;
      values.forEach((val, idx)=>{
        const numeric = Number(val) || 0;
        if (numeric > maxValue){
          maxValue = numeric;
          maxIndex = idx;
        }
      });
      if (maxIndex < 0){
        return null;
      }
      const label = Array.isArray(labels) ? labels[maxIndex] : '';
      return { index: maxIndex, value: Number(maxValue), label };
    }

    function computePrivadosFromSummary(map){
      if (!map || typeof map !== 'object') return 0;
      return Object.entries(map).reduce((acc, [name, data])=>{
        if (!data || typeof data !== 'object') return acc;
        if (String(name || '').toLowerCase().includes('neurofisio')) return acc;
        const prim = Number(data.prim) || 0;
        const suc = Number(data.suc) || 0;
        const otros = Number(data.otros) || 0;
        return acc + prim + suc + otros;
      }, 0);
    }

    function aggregateEspecialidadesFromSummary(map){
      const aggregation = {};
      Object.entries(map || {}).forEach(([name, data])=>{
        if (!data || typeof data !== 'object') return;
        const especialidad = (data.especialidad || getEspecialidadFromEspecialista(name) || 'Otros').trim() || 'Otros';
        if (!aggregation[especialidad]){
          aggregation[especialidad] = { prim: 0, suc: 0, otros: 0, seguros: 0, bruto: 0 };
        }
        aggregation[especialidad].prim += Number(data.prim) || 0;
        aggregation[especialidad].suc += Number(data.suc) || 0;
        aggregation[especialidad].otros += Number(data.otros) || 0;
        aggregation[especialidad].seguros += Number(data.seguros) || 0;
        aggregation[especialidad].bruto += Number(data.bruto) || 0;
      });
      return Object.entries(aggregation)
        .map(([label, values])=>({ label, ...values }))
        .sort((a,b)=> (b.bruto || 0) - (a.bruto || 0));
    }

    function buildSnapshotFromSummary(sourceSummary, context = {}){
      if (!sourceSummary || typeof sourceSummary !== 'object') return null;
      const entries = Object.entries(sourceSummary);
      if (!entries.length) return null;

      const computedTotals = entries.reduce((acc, [, data])=>{
        if (!data || typeof data !== 'object') return acc;
        acc.prim += Number(data.prim) || 0;
        acc.suc += Number(data.suc) || 0;
        acc.otros += Number(data.otros) || 0;
        acc.seguros += Number(data.seguros) || 0;
        acc.bruto += Number(data.bruto) || 0;
        return acc;
      }, { prim: 0, suc: 0, otros: 0, seguros: 0, bruto: 0 });

      const totals = {
        prim: Number(context?.totals?.prim) || computedTotals.prim,
        suc: Number(context?.totals?.suc) || computedTotals.suc,
        otros: Number(context?.totals?.otros) || computedTotals.otros,
        seguros: Number(context?.totals?.seguros) || computedTotals.seguros,
        bruto: Number(context?.totals?.bruto) || computedTotals.bruto
      };

      const privados = computePrivadosFromSummary(sourceSummary);
      const summaryList = entries.map(([name, data])=>{
        const prim = Number(data?.prim) || 0;
        const suc = Number(data?.suc) || 0;
        const otros = Number(data?.otros) || 0;
        const seguros = Number(data?.seguros) || 0;
        const bruto = Number(data?.bruto) || 0;
        const bonosImporte = Number(data?.bonosImporte) || 0;
        const bonosCount = Number(data?.bonosCount) || 0;
        const especialidad = data?.especialidad || getEspecialidadFromEspecialista(name) || 'Otros';
        return { name, prim, suc, otros, seguros, bruto, bonosImporte, bonosCount, especialidad };
      }).sort((a,b)=> (b.bruto || 0) - (a.bruto || 0));

      const snapshot = {
        version: 1,
        id: context.id || null,
        label: context.label || '',
        createdAt: context.createdAt || new Date().toISOString(),
        source: context.source || 'snapshot',
        totals: { ...totals, privados, count: summaryList.length },
        bonos: {
          count: Number(context?.bonos?.count) || 0,
          importe: Number(context?.bonos?.importe) || 0
        },
        stats: context.stats ? { ...context.stats } : null,
        rentabilidad: context.rent ? { ...context.rent } : null,
        especialidades: aggregateEspecialidadesFromSummary(sourceSummary),
        summary: summaryList
      };

      return snapshot;
    }

    function computeBonosTotalsFromSummary(map){
      return Object.values(map || {}).reduce((acc, data)=>{
        if (!data || typeof data !== 'object') return acc;
        acc.count += Number(data.bonosCount) || 0;
        acc.importe += Number(data.bonosImporte) || 0;
        return acc;
      }, { count: 0, importe: 0 });
    }

    function aggregateRowsToSummary(rows, { dropNeg = true } = {}){
      const summaryLocal = {};
      let processed = 0, used = 0, noAmount = 0;
      (rows || []).forEach(r => {
        processed++;
        if (!r || typeof r !== 'object') return;
        const importe = Number(r.importe);
        if (!isFinite(importe)){
          noAmount++;
          return;
        }
        if (dropNeg && importe < 0) return;

        const esp = extractEspecialista(r.agenda) || '(sin especialista)';
        const cat = clasificar(r.agenda, r.detalles, importe);
        const especialidadDet = getEspecialidadFromEspecialista(esp) || extractEspecialidad(r.agenda);
        if (!summaryLocal[esp]){
          summaryLocal[esp] = { prim:0, suc:0, otros:0, seguros:0, bruto:0, bonosImporte:0, bonosCount:0, especialidad: especialidadDet || 'Otros' };
        } else if (!summaryLocal[esp].especialidad && especialidadDet){
          summaryLocal[esp].especialidad = especialidadDet;
        }
        const entry = summaryLocal[esp];
        if (!entry.especialidad) entry.especialidad = especialidadDet || 'Otros';

        if (cat === 'Primeras') entry.prim += importe;
        else if (cat === 'Sucesivas') entry.suc += importe;
        else entry.otros += importe;

        const especialidadKey = String(entry.especialidad || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
        const esBono = esOperacionBono(r.agenda, r.detalles);
        if (esBono && BONO_SPECIALTIES.includes(especialidadKey) && importe > 0){
          entry.bonosImporte += importe;
          entry.bonosCount += 1;
        }

        entry.bruto += importe;
        used++;
      });

      if (!summaryLocal['Nekane']){
        summaryLocal['Nekane'] = { prim:0, suc:0, otros:0, seguros:0, bruto:0, bonosImporte:0, bonosCount:0, especialidad:'Logopedia' };
      }

      if (summaryLocal['Neurofisio']){
        summaryLocal['Neurofisio'].prim = 0;
        summaryLocal['Neurofisio'].suc = 0;
        summaryLocal['Neurofisio'].otros = 980;
        summaryLocal['Neurofisio'].seguros = 0;
        summaryLocal['Neurofisio'].bruto = 980;
      }

      return { summary: summaryLocal, stats: { processed, used, noAmount } };
    }

    function createSnapshotFromRows(rows, context = {}){
      if (!Array.isArray(rows) || !rows.length) return null;
      const { summary: summaryLocal, stats } = aggregateRowsToSummary(rows, { dropNeg: context.dropNeg !== false });
      if (!summaryLocal || !Object.keys(summaryLocal).length) return null;
      const bonosTotals = computeBonosTotalsFromSummary(summaryLocal);
      const snapshot = buildSnapshotFromSummary(summaryLocal, {
        label: context.label,
        source: context.source || 'csv',
        stats,
        bonos: bonosTotals,
        createdAt: context.createdAt
      });
      if (snapshot){
        snapshot.id = context.id || snapshot.id || `snap-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`;
        snapshot.createdAt = context.createdAt || snapshot.createdAt || new Date().toISOString();
      }
      return snapshot;
    }

    function slugifyForDownload(text){
      if (!text) return 'chart';
      const normalized = text.normalize('NFD').replace(/[^\p{Letter}\p{Number}]+/gu, '-');
      return normalized.replace(/^-+|-+$/g, '').toLowerCase() || 'chart';
    }

    function computeHeadroom(values, options = {}){
      const { ratio = 0.18, minLift = 0 } = options;
      if (!Array.isArray(values) || !values.length) return undefined;
      const numeric = values
        .map(value => Number(value))
        .filter(value => Number.isFinite(value));
      if (!numeric.length) return undefined;
      const max = Math.max(...numeric);
      if (max <= 0) return undefined;
      const padded = max * (1 + Math.max(0, ratio));
      const lifted = max + Math.max(0, minLift);
      const suggestion = Math.max(padded, lifted);
      return Number.isFinite(suggestion) ? suggestion : undefined;
    }

    function applyHeadroom(scaleConfig, values, options){
      if (!scaleConfig) return;
      const suggestion = computeHeadroom(values, options);
      if (Number.isFinite(suggestion)){
        scaleConfig.suggestedMax = suggestion;
      }
    }

    function initChartControls(){
      if (chartControlsReady) return;
      chartControlsReady = true;

      document.querySelectorAll('[data-chart-toggle]').forEach(btn => {
        btn.addEventListener('click', ()=>{
          const chartKey = btn.getAttribute('data-chart-toggle');
          const mode = btn.getAttribute('data-mode') || 'top';
          if (!chartKey) return;
          chartViewState[chartKey] = mode;
          updateChartToggleButtons(chartKey);
          renderCharts();
        });
      });

      document.querySelectorAll('[data-chart-download]').forEach(btn => {
        btn.addEventListener('click', ()=>{
          const ref = btn.getAttribute('data-chart-download');
          if (!ref) return;
          const canvas = document.querySelector(`canvas[data-ref="${ref}"]`);
          if (!canvas || typeof canvas.toDataURL !== 'function') return;
          const wrap = btn.closest('.mbs-chartwrap');
          const title = wrap?.querySelector('h5')?.textContent?.trim();
          const filename = `${slugifyForDownload(title)}.png`;
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png', 1.0);
          link.download = filename;
          link.click();
        });
      });
    }

    const centerTextPlugin = {
      id:'mbsCenterText',
      afterDatasetsDraw(chart, args, opts = {}){
        const type = chart.config?.type;
        if (type !== 'doughnut' && type !== 'pie') return;
        const meta = chart.getDatasetMeta(0);
        if (!meta || !meta.data || !meta.data.length) return;
        const arc = meta.data[0];
        const linesConfig = typeof opts.lines === 'function' ? opts.lines(chart) : opts.lines;
        if (!Array.isArray(linesConfig) || !linesConfig.length) return;
        const lines = linesConfig
          .map(line => typeof line === 'string' ? { text: line } : line)
          .filter(line => line && typeof line.text === 'string' && line.text.trim().length);
        if (!lines.length) return;
        const lineHeight = opts.lineHeight || 18;
        const {ctx} = chart;
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const centerX = arc.x;
        const centerY = arc.y;
        const totalHeight = lineHeight * lines.length;
        lines.forEach((line, index) => {
          const font = line.font || {};
          const style = font.style || 'normal';
          const weight = font.weight || '600';
          const size = font.size || 14;
          const family = font.family || opts.fontFamily || chart.options.font?.family || 'system-ui';
          ctx.font = `${style} ${weight} ${size}px ${family}`.trim();
          ctx.fillStyle = line.color || opts.color || '#0b2542';
          ctx.globalAlpha = line.alpha ?? 1;
          const y = centerY - totalHeight / 2 + index * lineHeight + lineHeight / 2;
          ctx.fillText(line.text, centerX, y);
        });
        ctx.globalAlpha = 1;
        ctx.restore();
      }
    };

    const dataLabelsPlugin = {
      id:'mbsDataLabels',
      afterDatasetsDraw(chart, args, opts = {}){
        if (!opts || opts.enabled === false) return;
        const metas = chart.getSortedVisibleDatasetMetas ? chart.getSortedVisibleDatasetMetas() : [];
        if (!metas.length) return;
        const ctx = chart.ctx;
        const fontFamily = opts.family || chart.options.font?.family || 'system-ui';
        const defaultWeight = opts.weight || '700';
        const defaultSize = opts.size || 12;
        const showZero = opts.showZero !== false;
        metas.forEach(meta => {
          if (!meta || meta.hidden) return;
          if (meta.type !== 'bar' && chart.config?.type !== 'bar') return;
          const dataset = chart.data?.datasets?.[meta.index] || {};
          meta.data.forEach((element, index) => {
            if (!element) return;
            const parsed = meta.controller?.getParsed(index);
            const value = parsed && typeof parsed.y === 'number' ? parsed.y : (typeof parsed === 'number' ? parsed : element.$context?.raw);
            const numericValue = Number(value);
            if (!Number.isFinite(numericValue)) return;
            if (!showZero && Math.abs(numericValue) < 0.0001) return;
            const formatter = typeof opts.formatter === 'function'
              ? opts.formatter
              : (val)=>String(val);
            const label = formatter(numericValue, {
              chart,
              dataset,
              datasetIndex: meta.index,
              dataIndex: index,
              parsed
            });
            if (!label) return;
            const position = element.tooltipPosition ? element.tooltipPosition() : {x: element.x, y: element.y};
            const align = opts.align || 'top';
            const offset = typeof opts.offset === 'number' ? opts.offset : 12;
            let x = position.x;
            let y = position.y;
            ctx.save();
            ctx.font = `${defaultWeight} ${defaultSize}px ${fontFamily}`.trim();
            ctx.fillStyle = opts.color || dataset.borderColor || '#0f172a';
            ctx.textAlign = 'center';
            if (align === 'bottom'){
              ctx.textBaseline = 'top';
              y += offset;
            } else if (align === 'middle'){
              ctx.textBaseline = 'middle';
            } else {
              ctx.textBaseline = 'bottom';
              y -= offset;
            }
            ctx.fillText(label, x, y);
            ctx.restore();
          });
        });
      }
    };

    function drawRoundedRect(ctx, x, y, width, height, radius){
      const r = Math.max(0, Math.min(radius, width / 2, height / 2));
      if (typeof ctx.roundRect === 'function'){
        ctx.beginPath();
        ctx.roundRect(x, y, width, height, r);
        ctx.fill();
        return;
      }
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + width - r, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + r);
      ctx.lineTo(x + width, y + height - r);
      ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
      ctx.lineTo(x + r, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
      ctx.fill();
    }

    const lineCalloutPlugin = {
      id:'mbsLineCallout',
      afterDatasetsDraw(chart, args, opts = {}){
        const configs = Array.isArray(opts.points) ? opts.points : [];
        if (!configs.length) return;
        const ctx = chart.ctx;
        const fallbackFont = opts.fontFamily || chart.options.font?.family || 'system-ui';
        ctx.save();
        configs.forEach(config => {
          if (!config) return;
          const datasetIndex = Number.isInteger(config.datasetIndex) ? config.datasetIndex : 0;
          const meta = chart.getDatasetMeta(datasetIndex);
          if (!meta || !meta.data || !meta.data.length) return;
          const defaultIndex = meta.data.length - 1;
          const resolvedIndex = Number.isInteger(config.dataIndex) ? config.dataIndex : defaultIndex;
          if (resolvedIndex < 0 || resolvedIndex >= meta.data.length) return;
          const element = meta.data[resolvedIndex];
          if (!element) return;
          const position = element.tooltipPosition ? element.tooltipPosition() : { x: element.x, y: element.y };
          const dataset = chart.data?.datasets?.[datasetIndex];
          const raw = dataset?.data ? dataset.data[resolvedIndex] : null;
          const label = typeof config.formatter === 'function'
            ? config.formatter({ chart, dataset, datasetIndex, dataIndex: resolvedIndex, value: raw })
            : config.text;
          if (!label) return;
          const fontSize = config.fontSize || 11;
          const fontWeight = config.fontWeight || '700';
          const fontFamily = config.fontFamily || fallbackFont;
          const paddingX = config.paddingX ?? 8;
          const paddingY = config.paddingY ?? 4;
          ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`.trim();
          const metrics = ctx.measureText(label);
          const textWidth = metrics.width;
          const boxWidth = textWidth + paddingX * 2;
          const boxHeight = fontSize + paddingY * 2;
          const offsetY = config.offsetY ?? 10;
          const align = config.align || 'right';
          let boxX = position.x + 10;
          if (align === 'left'){
            boxX = position.x - boxWidth - 10;
          } else if (align === 'center'){
            boxX = position.x - boxWidth / 2;
          }
          let boxY = position.y - boxHeight - offsetY;
          const backgroundColor = config.backgroundColor || withAlpha(config.color || '#0f172a', 0.9);
          ctx.fillStyle = backgroundColor;
          drawRoundedRect(ctx, boxX, boxY, boxWidth, boxHeight, 6);
          ctx.fillStyle = config.color || '#ffffff';
          ctx.textBaseline = 'middle';
          ctx.textAlign = 'left';
          ctx.fillText(label, boxX + paddingX, boxY + boxHeight / 2);
          if (config.dot !== false){
            const radius = config.dotRadius || 4;
            ctx.beginPath();
            ctx.fillStyle = config.dotColor || config.color || '#2563eb';
            ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
            ctx.fill();
            if (config.dotStroke !== false){
              ctx.lineWidth = config.dotStrokeWidth || 2;
              ctx.strokeStyle = config.dotStrokeColor || '#ffffff';
              ctx.stroke();
            }
          }
        });
        ctx.restore();
      }
    };

    try { Chart.register(centerTextPlugin); } catch(e) { /* noop duplicate registration */ }
    try { Chart.register(dataLabelsPlugin); } catch(e) { /* noop duplicate registration */ }
    try { Chart.register(lineCalloutPlugin); } catch(e) { /* noop duplicate registration */ }

// Colores de charts desde CSS variables
    const cssVars = getComputedStyle(root);
    const CHART_COLORS = [
      cssVars.getPropertyValue('--chart-1').trim(),
      cssVars.getPropertyValue('--chart-2').trim(),
      cssVars.getPropertyValue('--chart-3').trim(),
      cssVars.getPropertyValue('--chart-4').trim(),
      cssVars.getPropertyValue('--chart-5').trim(),
      cssVars.getPropertyValue('--chart-6').trim(),
      cssVars.getPropertyValue('--chart-7').trim(),
      cssVars.getPropertyValue('--chart-8').trim(),
    ].filter(Boolean);

    function hexToRgba(color, alpha){
      if (!color){
        return `rgba(37, 99, 235, ${alpha ?? 1})`;
      }
      let clean = String(color).trim();
      if (clean.startsWith('rgba') || clean.startsWith('rgb')){
        if (typeof alpha === 'number'){
          try {
            const parts = clean.replace(/[rgba()\s]/g, '').split(',');
            const [r,g,b] = parts.map(Number);
            if ([r,g,b].every(n => Number.isFinite(n))){
              return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, alpha))})`;
            }
          } catch(_){ /* noop */ }
        }
        return clean;
      }
      clean = clean.replace('#','');
      if (clean.length === 3){
        clean = clean.split('').map(ch => ch + ch).join('');
      }
      const num = parseInt(clean, 16);
      if (!Number.isFinite(num)){
        return `rgba(37, 99, 235, ${alpha ?? 1})`;
      }
      const r = (num >> 16) & 255;
      const g = (num >> 8) & 255;
      const b = num & 255;
      const a = Math.max(0, Math.min(1, alpha ?? 1));
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    const withAlpha = (color, alpha = 0.22) => hexToRgba(color, alpha);

    /* ---------- Utils ---------- */
    const normHeader = h => (h||'').replace(/\s+/g,' ').trim().toLowerCase();
    const normTxt    = x => String(x||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    const nameKey    = s => String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();

    function fmtEUR(x){
      var n = isFinite(x) ? Number(x) : 0;
      var s = (Math.round(n*100)/100).toFixed(2);
      var parts = s.split('.');
      var ent = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return ent + ',' + parts[1];
    }
    const integerFormatter = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 });
    function fmtInt(value){
      const numeric = Number.isFinite(Number(value)) ? Number(value) : 0;
      return integerFormatter.format(Math.max(0, Math.round(numeric)));
    }
    function fmtPct01(f){ if(!isFinite(f)||f<0) return '0,0%'; return (f*100).toFixed(1).replace('.',',')+'%'; }

    function buildAreaGradient(ctx, color){
      if (!ctx) return withAlpha(color, 0.2);
      const canvas = ctx.canvas;
      const height = canvas?.height || canvas?.parentNode?.clientHeight || 320;
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, withAlpha(color, 0.4));
      gradient.addColorStop(1, withAlpha(color, 0.05));
      return gradient;
    }

    function detectDelimiter(line){
      const c=(line.match(/,/g)||[]).length, s=(line.match(/;/g)||[]).length, t=(line.match(/\t/g)||[]).length;
      if (s>=c && s>=t) return ';'; if (t>=c && t>=s) return '\t'; return ',';
    }
    function parseCSVSmart(text, delim){
      const rows=[], N=text.length; let row=[], cur='', i=0, q=false;
      while(i<N){
        const ch=text[i];
        if (ch === '"'){ if(q && text[i+1]==='"'){cur+='"'; i+=2; continue;} q=!q; i++; continue; }
        if (!q && ch===delim){ row.push(cur); cur=''; i++; continue; }
        if (!q && (ch==='\n'||ch==='\r')){ if(ch==='\r'&&text[i+1]==='\n') i++; row.push(cur); rows.push(row); row=[]; cur=''; i++; continue; }
        cur+=ch; i++;
      }
      if (cur.length || row.length){ row.push(cur); rows.push(row); }
      return rows;
    }
    function parseEuroOrInt(str){
      if (str == null) return NaN;
      let s = String(str).trim(); if(!s) return NaN;
      let neg=false;
      if (/^\(.*\)$/.test(s)){ neg=true; s=s.slice(1,-1); }
      if (/^-/.test(s)){ neg=true; s=s.replace(/^-+/, ''); }
      s = s.replace(/[€\s]/g,'');
      if (/^-?\d+(\.\d+)?$/.test(s)) return (neg?-1:1)*parseFloat(s);
      if (/,/.test(s)){
        if (/\d,\d{2}$/.test(s)) s = s.replace(/\./g,'').replace(',', '.');
        else if (/^-?\d+$/.test(s.replace(',',''))) s = s.replace(',','.');
      }
      const v = parseFloat(s);
      return isNaN(v) ? NaN : (neg?-v:v);
    }

    function parseFecha(str){
      const s = String(str||'').trim();
      if(!s) return null;
      
      // Extraer solo la parte de fecha si hay fecha y hora (ej: "19/09/2025 17:34")
      const fechaPart = s.split(' ')[0];
      
      // dd/mm/yyyy or dd-mm-yyyy
      let m = fechaPart.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
      if (m){
        let d=+m[1], mo=+m[2]-1, y=+m[3]; 
        if(y<100) y+=2000;
        
        // Verificar que los valores son válidos
        if (mo < 0 || mo > 11 || d < 1 || d > 31) return null;
        
        const dt = new Date(Date.UTC(y,mo,d));
        return (dt && !isNaN(dt.getTime())) ? dt : null;
      }
      
      // yyyy-mm-dd
      m = fechaPart.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
      if (m){
        const dt = new Date(Date.UTC(+m[1], +m[2]-1, +m[3]));
        return (dt && !isNaN(dt.getTime())) ? dt : null;
      }
      
      return null;
    }
    function toKey(d){ return d ? d.toISOString().slice(0,10) : ''; }

    function numbersWithContext(text){
      const s = String(text||''); const out=[];
      const reNum = /-?\d{1,3}(?:\.\d{3})*,\d{2}|-?\d+,\d{2}|-?\d+(?:\.\d+)?/g;
      for (const m of s.matchAll(reNum)){
        const val = parseEuroOrInt(m[0]);
        const start = m.index, end = m.index + m[0].length;
        const ctx = s.slice(Math.max(0,start-20), Math.min(s.length,end+20)).toLowerCase();
        const isTotal = /\b(total|importe\s*total|sumatorio|resumen)\b/.test(ctx);
        out.push({value: val, start, end, isTotal});
      }
      return out;
    }

    function buildCajaRows(table){
      if (!Array.isArray(table) || !table.length) return [];
      const headers = table[0].map(normHeader);
      const idx = {
        fecha:    headers.findIndex(h=>/\bfecha\b/.test(h)),
        agenda:   headers.findIndex(h=>/\bagenda\b/.test(h)),
        detalles: headers.findIndex(h=>/\bdetalles?\b/.test(h)),
        importe:  headers.findIndex(h=>/\bimporte\b/.test(h)),
        tipo:     headers.findIndex(h=>/\btipo\b/.test(h)),
        forma:    headers.findIndex(h=>/\bforma\b/.test(h)),
      };
      if (idx.agenda === -1) throw new Error('No se encuentra la columna "Agenda".');
      const out = [];
      for (let i=1;i<table.length;i++){
        const r = table[i];
        if (!Array.isArray(r) || r.length === 0) continue;
        const fechaS   = idx.fecha>-1    ? (r[idx.fecha]||'').trim()    : '';
        const agenda   = idx.agenda>-1   ? (r[idx.agenda]||'').trim()   : '';
        const detalles = idx.detalles>-1 ? (r[idx.detalles]||'').trim() : '';
        const importeS = idx.importe>-1  ? (r[idx.importe]||'').trim()  : '';
        const tipo     = idx.tipo>-1     ? (r[idx.tipo]||'').trim()     : '';
        const forma    = idx.forma>-1    ? (r[idx.forma]||'').trim()    : '';
        if (isSummaryRow(agenda, detalles, tipo, forma)) continue;
        let importe = parseEuroOrInt(importeS);
        if (!isFinite(importe)){
          const claseHint = clasificar(agenda, detalles, NaN);
          if (claseHint === 'Primeras'){
            importe = getAmountNearKeyword(detalles, ['primera','1a','1ª','1era','alta','entrevista']);
          } else if (claseHint === 'Sucesivas'){
            importe = getAmountNearKeyword(detalles, ['sucesiv','seguim','revision','revisión','control']);
          } else {
            importe = getAmountNearKeyword(detalles, ['bono','pack','vale','anticipo','anulaci','abono','tarjeta regalo','material','curso','certific','emg']);
          }
          if (!isFinite(importe)){
            const toks = numbersWithContext(detalles).filter(t=>!t.isTotal);
            if (toks.length) importe = toks[0].value;
          }
        }
        const fecha = parseFecha(fechaS);
        out.push({ fecha, agenda, detalles, tipo, forma, importe });
      }
      return out;
    }

    function parseCajaRowsFromText(text){
      const firstLine = (text.split(/\r?\n/)[0] || ',');
      const delim = detectDelimiter(firstLine);
      const table = parseCSVSmart(text, delim);
      return buildCajaRows(table);
    }
    function getAmountNearKeyword(text, keywords){
      const s = String(text||'');
      const toks = numbersWithContext(s).filter(t=>!t.isTotal);
      if (!toks.length) return NaN;
      const reKW = new RegExp(keywords.join('|'), 'i');
      let best = NaN, bestDist = Infinity;
      for (const m of s.matchAll(reKW)){
        const pos = m.index + m[0].length;
        for (const t of toks){
          const dist = Math.min(Math.abs(t.start - pos), Math.abs(t.end - pos));
          if (dist <= 30 && dist < bestDist){ bestDist = dist; best = t.value; }
        }
      }
      return best;
    }
    function extractEspecialista(agenda){
  const a = String(agenda||'');
  const ps = [...a.matchAll(/\(([^()]{2,})\)/g)];
  if (ps.length){
    const cand = ps[ps.length-1][1].trim();
    return /[A-ZÁÉÍÓÚÜÑ ]{3,}/.test(cand) ? titleCase(cand) : cand;
  }
  const m = a.match(/^\s*\d+\.\s*([^\[\:]{3,}?)\s*(?:\[[^\]]*\])?\s*:/);
  if (m){ const cand = m[1].replace(/\s{2,}/g,' ').trim(); return /[A-ZÁÉÍÓÚÜÑ ]{3,}/.test(cand)?titleCase(cand):cand; }
  const m2 = a.match(/([A-ZÁÉÍÓÚÜÑ]{2,}(?:\s+[A-ZÁÉÍÓÚÜÑ]{2,}){1,3})\s*(?=\[|:|$)/);
  if (m2) return titleCase(m2[1]);
  const m3 = a.match(/([A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+(?:\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+){1,3})/);
  if (m3) return m3[1];

  if (/nekane/i.test(a)) return 'Nekane';
  
  // Detectar Neurofisiología específicamente
  if (/neurofisio/i.test(a)) return 'Neurofisiología Clínica';

  return '';
}
    function extractEspecialidad(agenda){
      const a = String(agenda||'').toLowerCase();
      
      // Detectar por nombres de especialistas conocidos
      if (/maria\s*pazos|sheila/i.test(a)) return 'Nutrición';
      if (/maria\s*rico|tamara\s*martin|hugo\s*zichner/i.test(a)) return 'Logopedia';
      if (/nekane/i.test(a)) return 'Logopedia';
      if (/june\s*amores|gotxi\s*otorrino/i.test(a)) return 'Psicología';
      
      // Detectar por palabras clave de especialidades
      if (/nutri/i.test(a)) return 'Nutrición';
      if (/logop/i.test(a)) return 'Logopedia';
      if (/psico|psiq/i.test(a)) return 'Psicología';
      if (/fisio/i.test(a)) return 'Fisioterapia';
      if (/podol/i.test(a)) return 'Podología';
      if (/optom/i.test(a)) return 'Optometría';
      if (/osteo/i.test(a)) return 'Osteopatía';
      if (/otorrino/i.test(a)) return 'Otorrinolaringología';
      if (/tienda|pack|material|curso|varios/i.test(a)) return 'Tienda/Otros';
      
      // Extraer la primera parte antes de paréntesis o dos puntos para casos no detectados
      let s = a.split('(')[0].split(':')[0];
      s = s.replace(/^\s*\d+\.\s*/,'').trim();
      
      // Si es muy corto o genérico, devolver "Otros"
      if (!s || s.length < 3) return 'Otros';
      
      // Capitalizar y devolver
      return titleCase(s);
    }
    function titleCase(n){return String(n||'').trim().split(/\s+/).map(w=>{const lo=w.toLowerCase();return ['de','del','la','las','los','y'].includes(lo)?lo:lo.charAt(0).toUpperCase()+lo.slice(1)}).join(' ')}
    function isSummaryRow(agenda, detalles, tipo, forma){
      const re = /\b(total|importe\s*total|resumen|sumatorio)\b/i;
      return re.test(agenda||'') || re.test(detalles||'') || re.test(tipo||'') || re.test(forma||'');
    }
    function clasificar(agenda, detalles, importe){
      const s = normTxt((agenda||'') + ' ' + (detalles||''));
      const servicioNutri = /\bnutri/.test(s);
      const esParejaPsico = /\bpsico/.test(s) && /\bpareja\b/.test(s);

      if (/\bbono|pack|vale|anticipo|anulaci|abono|gift|tarjeta regalo|material|curso|certific|emg\b/.test(s))
        return 'Otros Conceptos';

      if (servicioNutri && /\bentrevista\b/.test(s)) return 'Primeras';
      if (esParejaPsico && isFinite(importe)){
        if (importe >= 34.5 && importe <= 36.5) return 'Primeras';
        if (importe >= 58   && importe <= 62)   return 'Sucesivas';
      }
      if (/\bprimera|1a|1ª|1era|alta\b/.test(s)) return 'Primeras';
      if (/\bsucesiv|seguim|revision|revisión|control\b/.test(s)) return 'Sucesivas';
      return 'Otros Conceptos';
    }

    function esOperacionBono(agenda, detalles){
      const s = normTxt((agenda||'') + ' ' + (detalles||''));
      return /\bbonos?\b/.test(s);
    }

    function updateKpis(count, totals){
  const totalConSeguros = totals.bruto + totals.seguros;
  kpiTotal.textContent = fmtEUR(totalConSeguros) + ' €';
  kpiCount.textContent = String(count);
  const primPct = totalConSeguros>0 ? totals.prim/totalConSeguros : 0;
  kpiPrimPct.textContent = fmtPct01(primPct);
  const avg = count>0 ? (totalConSeguros/count) : 0;
  kpiAvg.textContent = fmtEUR(avg) + ' €';
  
  // ✅ NUEVOS KPIs
  kpiSeguros.textContent = fmtEUR(totals.seguros) + ' €';
  
  // Facturación privados = primeras + sucesivas + otros (excluyendo Neurofisio)
  const privados = Object.entries(summary)
    .filter(([name]) => !name.toLowerCase().includes('neurofisio'))
    .reduce((acc, [_, data]) => acc + (data.prim + data.suc + data.otros), 0);
  kpiPrivados.textContent = fmtEUR(privados) + ' €';
}

// Actualizar KPI de facturado total desde la fila TOTAL de la tabla
function updateKpiFromTable() {
  const totalCell = totBruto; // Elemento que contiene el total
  if (totalCell && totalCell.textContent) {
    const totalValue = parseEuroOrInt(totalCell.textContent) || 0;
    kpiTotal.textContent = fmtEUR(totalValue) + ' €';
  }
  
  // ✅ ACTUALIZAR NUEVOS KPIs
  const segurosCell = totSeguros;
  if (segurosCell && segurosCell.textContent) {
    const segurosValue = parseEuroOrInt(segurosCell.textContent) || 0;
    kpiSeguros.textContent = fmtEUR(segurosValue) + ' €';
  }
  
  // Facturación privados (excluyendo Neurofisio)
  const privados = Object.entries(summary)
    .filter(([name]) => !name.toLowerCase().includes('neurofisio'))
    .reduce((acc, [_, data]) => acc + (data.prim + data.suc + data.otros), 0);
  kpiPrivados.textContent = fmtEUR(privados) + ' €';
}

    function buildSummary(rows){
  summary = {};
  const dropNeg = excludeNeg.checked;
  let processed=0, used=0, noAmount=0;

  rows.forEach(r=>{
    processed++;
    if (!isFinite(r.importe)){ noAmount++; return; }
    if (dropNeg && r.importe < 0) return;

    const esp = extractEspecialista(r.agenda) || '(sin especialista)';
    const cat = clasificar(r.agenda, r.detalles, r.importe);

    const especialidadDet = getEspecialidadFromEspecialista(esp) || extractEspecialidad(r.agenda);
    const especialidadKey = String(especialidadDet || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    if (!summary[esp]) {
      summary[esp] = { prim:0, suc:0, otros:0, seguros:0, bruto:0, bonosImporte:0, bonosCount:0, especialidad: especialidadDet || 'Otros' };
    } else {
      if (!Object.prototype.hasOwnProperty.call(summary[esp], 'bonosImporte')) summary[esp].bonosImporte = 0;
      if (!Object.prototype.hasOwnProperty.call(summary[esp], 'bonosCount')) summary[esp].bonosCount = 0;
      if (!summary[esp].especialidad && especialidadDet) summary[esp].especialidad = especialidadDet;
    }
    const entry = summary[esp];
    if (!entry.especialidad) entry.especialidad = especialidadDet || 'Otros';

    if (cat === 'Primeras')       entry.prim  += r.importe;
    else if (cat === 'Sucesivas') entry.suc   += r.importe;
    else                          entry.otros += r.importe;

    const esBono = esOperacionBono(r.agenda, r.detalles);
    if (esBono && BONO_SPECIALTIES.includes(especialidadKey) && r.importe > 0){
      entry.bonosImporte += r.importe;
      entry.bonosCount += 1;
    }

    entry.bruto += r.importe;
    used++;
  });

  if (!summary['Nekane']) {
    summary['Nekane'] = {prim:0, suc:0, otros:0, seguros:0, bruto:0, bonosImporte:0, bonosCount:0, especialidad:'Logopedia'};
  }

  stats.textContent = `Filas procesadas: ${processed} · Utilizadas: ${used} · Sin importe: ${noAmount}`;
  currentStats = { processed, used, noAmount };
  const totals = renderTable();
  currentTotals = totals;
  const bonosTotals = renderBonosTable();
  buildNutriPayouts();
  buildLogoPayouts();
  buildNekanePayouts();
  buildRentabilidad();

  const entries = Object.entries(summary).sort((a,b)=>b[1].bruto - a[1].bruto);
  updateKpis(entries.length, totals);
  updateKpiFromTable();

  syncDateInputsBounds(rows);

  currentEvolutionSnapshot = buildSnapshotFromSummary(summary, {
    totals,
    bonos: bonosTotals,
    stats: currentStats,
    rent: currentRentabilidadTotals,
    source: 'widget'
  });

  if (saveEvolutionBtn){
    const hasData = currentEvolutionSnapshot && currentEvolutionSnapshot.totals?.bruto > 0;
    saveEvolutionBtn.disabled = !hasData;
    saveEvolutionBtn.classList.toggle('primary', !!hasData);
  }
}

function renderTable(){
  const entries = Object.entries(summary).sort((a,b)=>{
    return b[1].bruto - a[1].bruto;
  });

  resultsBody.innerHTML = '';
  let tPrim=0, tSuc=0, tOtros=0, tSeguros=0, tBru=0;

  entries.forEach(([name,g])=>{
    // FORZAR DISTRIBUCIÓN ESPECÍFICA PARA NEUROFISIO
    let prim = g.prim;
    let suc = g.suc;
    let otros = g.otros;
    let seguros = g.seguros || 0;
    let bruto = g.bruto;
    
    if (name.toLowerCase().includes('neurofisio')) {
      prim = 0;      // Forzar Primera: 0€
      suc = 0;       // Forzar Sucesiva: 0€
      otros = 980;    // Forzar Otros Conceptos: 980€
      seguros = 0;    // Forzar Seguros: 0€
      bruto = 980;    // Forzar Total: 980€
    }
    
    // ✅ CAMPOS EDITABLES PARA DRA. ARIAS
    const lowerName = name.toLowerCase();
    const isEditableEspecialista = /dra\.?\s*arias|nekane/i.test(lowerName);
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="text-align:left">${name}</td>
      <td>${isEditableEspecialista ? `<input type="number" data-prim="${nameKey(name)}" value="${prim}" min="0" step="0.01" class="mbs-input" style="min-width:72px;text-align:right;">` : fmtEUR(prim)}</td>
      <td>${isEditableEspecialista ? `<input type="number" data-suc="${nameKey(name)}" value="${suc}" min="0" step="0.01" class="mbs-input" style="min-width:72px;text-align:right;">` : fmtEUR(suc)}</td>
      <td>${fmtEUR(otros)}</td>
      <td><input type="number" data-seguros="${nameKey(name)}" value="${seguros}" min="0" step="0.01" class="mbs-input" style="min-width:72px;text-align:right;"></td>
      <td>${fmtEUR(bruto)}</td>
    `;
    resultsBody.appendChild(tr);
    tPrim += prim; tSuc += suc; tOtros += otros; tSeguros += seguros; tBru += bruto;
  });

  // ✅ SOLO UNA VEZ - SIN DUPLICADOS
  totPrim.textContent  = fmtEUR(tPrim);
  totSuc.textContent   = fmtEUR(tSuc);
  totOtros.textContent = fmtEUR(tOtros);
  totSeguros.textContent = fmtEUR(tSeguros);
  totBruto.textContent = fmtEUR(tBru);

  const has = entries.length>0;
  downloadBtn.disabled = !has;
  downloadBtn.classList.toggle('primary', has);

  return {prim:tPrim, suc:tSuc, otros:tOtros, seguros:tSeguros, bruto:tBru};
}

function renderBonosTable(){
  if (!bonosBody || !bonosTotCount || !bonosTotImporte){
    currentBonosTotals = { count: 0, importe: 0 };
    return currentBonosTotals;
  }

  bonosBody.innerHTML = '';
  let totalCount = 0;
  let totalImporte = 0;

  const bonoRows = Object.entries(summary)
    .map(([name, data]) => {
      const count = Math.max(0, Number(data?.bonosCount) || 0);
      const importe = Math.max(0, Number(data?.bonosImporte) || 0);
      const especialidad = data?.especialidad || getEspecialidadFromEspecialista(name) || 'Otros';
      return { name, count, importe, especialidad };
    })
    .filter(item => item.count > 0 || item.importe > 0)
    .sort((a, b) => b.importe - a.importe);

  if (!bonoRows.length){
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="4" style="text-align:center; padding:.75rem; color:var(--muted);">Sin bonos registrados</td>`;
    bonosBody.appendChild(tr);
    bonosTotCount.textContent = '0';
    bonosTotImporte.textContent = fmtEUR(0);
    currentBonosTotals = { count: 0, importe: 0 };
    return currentBonosTotals;
  }

  bonoRows.forEach(({ name, count, importe, especialidad }) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="text-align:left">${name}</td>
      <td>${especialidad}</td>
      <td>${fmtInt(count)}</td>
      <td>${fmtEUR(importe)}</td>
    `;
    bonosBody.appendChild(tr);
    totalCount += count;
    totalImporte += importe;
  });

  bonosTotCount.textContent = fmtInt(totalCount);
  bonosTotImporte.textContent = fmtEUR(totalImporte);
  currentBonosTotals = { count: totalCount, importe: totalImporte };
  return currentBonosTotals;
}
        /* ---------- Nutri helpers ---------- */
    function loadNutriCfg(){
      try{ nutriPctMap = JSON.parse(localStorage.getItem(LS_PCTS_NUTRI)||'{}') || {}; }catch(_){ nutriPctMap={}; }
      try{ const v = JSON.parse(localStorage.getItem(LS_RET_NUTRI)||''); if(v!=null) nutriRet.value=String(v);}catch(_){}
    }
    function saveNutriCfg(){
      try{ localStorage.setItem(LS_PCTS_NUTRI, JSON.stringify(nutriPctMap)); }catch(_){ }
      try{ localStorage.setItem(LS_RET_NUTRI, JSON.stringify(parseFloat(nutriRet.value)||15)); }catch(_){ }
    }
    function findKeyLike(map, wanted){
      const keys = Object.keys(map||{}); const W = nameKey(wanted);
      return keys.find(k=>nameKey(k)===W) || keys.find(k=>nameKey(k).includes(W)) || null;
    }
    function pctForNutri(n){ const def=60; const v=nutriPctMap[nameKey(n)]; return (v==null||!isFinite(+v))?def:+v; }

    function computeNutriRows(){
      const ret = parseFloat(nutriRet && nutriRet.value || '15') || 15;
      const rows = NUTRIS.map(n=>{
        const key  = findKeyLike(summary, n);
        const base = key ? (summary[key].bruto||0) : 0;
        const pct  = pctForNutri(n);
        const gross= base * (pct/100);
        const reten= gross * (ret/100);
        const net  = gross - reten;
        const cent = base - gross;
        return {nameDisp: key || n, norm:nameKey(n), base, pct, ret, gross, reten, net, cent};
      });
      const totals = rows.reduce((a,r)=>({ base:a.base+r.base, gross:a.gross+r.gross, reten:a.reten+r.reten, net:a.net+r.net, cent:a.cent+r.cent }), {base:0,gross:0,reten:0,net:0,cent:0});
      return {rows, totals};
    }

    function buildNutriPayouts(){
      const {rows, totals} = computeNutriRows();
      nutriBody.innerHTML='';

      rows.forEach(r=>{
        const tr=document.createElement('tr');
        tr.innerHTML = `
          <td style="text-align:left">${r.nameDisp}</td>
          <td>${fmtEUR(r.base)}</td>
          <td><input type="number" data-nutri="${r.norm}" value="${r.pct}" min="0" max="100" step="1" class="mbs-input" style="min-width:72px;text-align:right;"></td>
          <td>${fmtEUR(r.gross)}</td>
          <td>${r.ret}%</td>
          <td>${fmtEUR(r.reten)}</td>
          <td><b>${fmtEUR(r.net)}</b></td>
          <td>${100-r.pct}%</td>
          <td>${fmtEUR(r.cent)}</td>
        `;
        nutriBody.appendChild(tr);
      });

      nutriTotBase.textContent   = fmtEUR(totals.base);
      nutriTotGross.textContent  = fmtEUR(totals.gross);
      nutriTotRet.textContent    = fmtEUR(totals.reten);
      nutriTotNet.textContent    = fmtEUR(totals.net);
      nutriTotCenter.textContent = fmtEUR(totals.cent);
      nutriSumNet.textContent    = fmtEUR(totals.net) + ' €';
      nutriSumRet.textContent    = fmtEUR(totals.reten) + ' €';

      const hasNutriData = rows.some(r=>
        Math.abs(r.base) > 0 || Math.abs(r.gross) > 0 || Math.abs(r.net) > 0 || Math.abs(r.reten) > 0
      );
      if (nutriCSV) {
        nutriCSV.disabled = !hasNutriData;
        nutriCSV.classList.toggle('primary', hasNutriData);
      }
      if (nutriPDF) {
        nutriPDF.disabled = !hasNutriData;
        nutriPDF.classList.toggle('primary', hasNutriData);
      }
    }

    /* ---------- Logopedas helpers ---------- */
    function loadLogoCfg(){
      try{ logoPctMap = JSON.parse(localStorage.getItem(LS_LOGO_PCTS)||'{}') || {}; }catch(_){ logoPctMap={}; }
      try{ const v = JSON.parse(localStorage.getItem(LS_LOGO_RET)||''); if(v!=null) logoRet.value=String(v);}catch(_){}
      try{ logoRetMap = JSON.parse(localStorage.getItem(LS_LOGO_RET_MAP)||'{}') || {}; }catch(_){ logoRetMap={}; }
      const mr = nameKey('Maria Rico');
      if (logoRetMap[mr] == null) logoRetMap[mr] = 7;
    }
    function loadSemTopdCfg(){
      try{ 
        semValues = JSON.parse(localStorage.getItem(LS_SEM_VALUES)||'{}') || {};
        topdValues = JSON.parse(localStorage.getItem(LS_TOPD_VALUES)||'{}') || {};
      }catch(_){ 
        semValues={}; 
        topdValues={}; 
      }
    }

    function saveSemTopdCfg(){
      try{ 
        localStorage.setItem(LS_SEM_VALUES, JSON.stringify(semValues)); 
        localStorage.setItem(LS_TOPD_VALUES, JSON.stringify(topdValues)); 
      }catch(_){ }
    }
    function loadRecepcionCfg(){
      try{ 
        const saved = localStorage.getItem(LS_RECEPCION_VALUE);
        if (saved !== null) {
          recepcionValue = parseFloat(saved) || 1500;
        }
      }catch(_){ 
        recepcionValue = 1500; 
      }
    }

    function saveRecepcionCfg(){
      try{
        localStorage.setItem(LS_RECEPCION_VALUE, JSON.stringify(recepcionValue));
      }catch(_){ }
    }

    function loadEvolutionSnapshots(){
      try{
        const stored = JSON.parse(localStorage.getItem(LS_EVO_SNAPSHOTS) || '[]');
        const asArray = Array.isArray(stored) ? stored : [];
        evolutionSnapshots = asArray
          .map(item => {
            if (!item || typeof item !== 'object') return null;
            const clone = { ...item };
            if (!clone.id) clone.id = `snap-${Math.random().toString(36).slice(2)}`;
            if (!clone.label) clone.label = 'Periodo guardado';
            return clone;
          })
          .filter(Boolean)
          .sort((a,b)=>{
            const da = new Date(a?.createdAt || 0).getTime();
            const db = new Date(b?.createdAt || 0).getTime();
            return da - db;
          });
      }catch(_){
        evolutionSnapshots = [];
      }
    }

    function saveEvolutionSnapshots(){
      try{
        localStorage.setItem(LS_EVO_SNAPSHOTS, JSON.stringify(evolutionSnapshots));
      }catch(_){ }
    }
    function saveLogoCfg(){
      try{ localStorage.setItem(LS_LOGO_PCTS, JSON.stringify(logoPctMap)); }catch(_){}
      try{ localStorage.setItem(LS_LOGO_RET, JSON.stringify(parseFloat(logoRet.value)||15)); }catch(_){}
      try{ localStorage.setItem(LS_LOGO_RET_MAP, JSON.stringify(logoRetMap)); }catch(_){}
    }
    function pctForLogo(n){ const def=60; const v=logoPctMap[nameKey(n)]; return (v==null||!isFinite(+v))?def:+v; }
    function retForLogo(n){
      const k = nameKey(n);
      const def = parseFloat(logoRet && logoRet.value || '15') || 15;
      const v = logoRetMap[k];
      return (v==null || !isFinite(+v)) ? def : +v;
    }

    function computeLogoRows(){
      const rows = LOGOPEDAS.map(n=>{
        const key  = findKeyLike(summary, n);
        const base = key ? (summary[key].bruto||0) : 0;
        const pct  = pctForLogo(n);
        const rowRet = retForLogo(n);
        const gross= base * (pct/100);
        const reten= gross * (rowRet/100);
        const net  = gross - reten;
        const cent = base - gross;
        return {nameDisp: key || n, norm:nameKey(n), base, pct, ret: rowRet, gross, reten, net, cent};
      });
      const totals = rows.reduce((a,r)=>({ base:a.base+r.base, gross:a.gross+r.gross, reten:a.reten+r.reten, net:a.net+r.net, cent:a.cent+r.cent }), {base:0,gross:0,reten:0,net:0,cent:0});
      return {rows, totals};
    }

    function buildLogoPayouts(){
      const {rows, totals} = computeLogoRows();
      logoBody.innerHTML='';

      rows.forEach(r=>{
        const tr=document.createElement('tr');
        tr.innerHTML = `
          <td style="text-align:left">${r.nameDisp}</td>
          <td>${fmtEUR(r.base)}</td>
          <td><input type="number" data-logo="${r.norm}" value="${r.pct}" min="0" max="100" step="1" class="mbs-input" style="min-width:72px;text-align:right;"></td>
          <td>${fmtEUR(r.gross)}</td>
          <td><input type="number" data-logo-ret="${r.norm}" value="${r.ret}" min="0" max="100" step="1" class="mbs-input" style="min-width:72px;text-align:right;"></td>
          <td>${fmtEUR(r.reten)}</td>
          <td><b>${fmtEUR(r.net)}</b></td>
          <td>${100-r.pct}%</td>
          <td>${fmtEUR(r.cent)}</td>
        `;
        logoBody.appendChild(tr);
      });

      logoTotBase.textContent   = fmtEUR(totals.base);
      logoTotGross.textContent  = fmtEUR(totals.gross);
      logoTotRet.textContent    = fmtEUR(totals.reten);
      logoTotNet.textContent    = fmtEUR(totals.net);
      logoTotCenter.textContent = fmtEUR(totals.cent);
      logoSumNet.textContent    = fmtEUR(totals.net) + ' €';
      logoSumRet.textContent    = fmtEUR(totals.reten) + ' €';

      const hasLogoData = rows.some(r=>
        Math.abs(r.base) > 0 || Math.abs(r.gross) > 0 || Math.abs(r.net) > 0 || Math.abs(r.reten) > 0
      );
      if (logoCSV) {
        logoCSV.disabled = !hasLogoData;
        logoCSV.classList.toggle('primary', hasLogoData);
      }
      if (logoPDF) {
        logoPDF.disabled = !hasLogoData;
        logoPDF.classList.toggle('primary', hasLogoData);
      }
    }

    function computeNekaneRows(){
      if (!nekaneBody) {
        return {rows:[], totals:{base:0,share:0,after:0,reten:0,net:0,cent:0}};
      }

      const rows = NEKANE_CFG.map(cfg=>{
        const key = findKeyLike(summary, cfg.name) || cfg.name;
        const base = summary[key]?.bruto || 0;
        const share = base * (cfg.pct/100);
        const fixed = cfg.fijo || 0;
        const appliedFixed = Math.min(share, fixed);
        const after = Math.max(0, share - appliedFixed);
        const reten = after * (cfg.ret/100);
        const net = after - reten;
        const center = base - after;
        const centerPct = base > 0 ? center / base : 0;
        return {
          nameDisp: key,
          cfg,
          base,
          share,
          after,
          reten,
          net,
          center,
          centerPct,
          fixed: appliedFixed
        };
      });

      const totals = rows.reduce((acc,row)=>({
        base: acc.base + row.base,
        share: acc.share + row.share,
        after: acc.after + row.after,
        reten: acc.reten + row.reten,
        net: acc.net + row.net,
        cent: acc.cent + row.center
      }), {base:0,share:0,after:0,reten:0,net:0,cent:0});

      return {rows, totals};
    }

    function buildNekanePayouts(){
      if (!nekaneBody) return;

      const {rows, totals} = computeNekaneRows();
      nekaneBody.innerHTML = '';

      rows.forEach(row=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td style="text-align:left">${row.nameDisp}</td>
          <td>${fmtEUR(row.base)}</td>
          <td>${fmtEUR(row.share)}</td>
          <td>${fmtEUR(row.after)}</td>
          <td><b>${fmtEUR(row.net)}</b></td>
          <td>${fmtPct01(row.centerPct)}</td>
          <td>${fmtEUR(row.center)}</td>
        `;
        nekaneBody.appendChild(tr);
      });

      nekaneTotBase && (nekaneTotBase.textContent = fmtEUR(totals.base));
      nekaneTotShare && (nekaneTotShare.textContent = fmtEUR(totals.share));
      nekaneTotAfter && (nekaneTotAfter.textContent = fmtEUR(totals.after));
      nekaneTotNet && (nekaneTotNet.textContent = fmtEUR(totals.net));
      nekaneTotCenter && (nekaneTotCenter.textContent = fmtEUR(totals.cent));
      nekaneSumNet && (nekaneSumNet.textContent = fmtEUR(totals.net) + ' €');
      nekaneSumRet && (nekaneSumRet.textContent = fmtEUR(totals.reten) + ' €');

      if (nekanePDF) {
        const hasNekaneData = rows.some(row =>
          Math.abs(row.base) > 0 || Math.abs(row.after) > 0 || Math.abs(row.net) > 0 || Math.abs(row.reten) > 0
        );
        nekanePDF.disabled = !hasNekaneData;
        nekanePDF.classList.toggle('primary', hasNekaneData);
      }
    }

    function getPeriodMeta(){
      const baseDate = lastRenderedPeriod
        ? new Date(lastRenderedPeriod.year, lastRenderedPeriod.month, 1)
        : new Date();
      const key = `${baseDate.getFullYear()}-${String(baseDate.getMonth()+1).padStart(2,'0')}`;
      let label = '';
      try {
        label = new Intl.DateTimeFormat('es-ES', { month:'long', year:'numeric' }).format(baseDate);
      } catch(_){
        const MONTHS = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
        label = `${MONTHS[baseDate.getMonth()]} ${baseDate.getFullYear()}`;
      }
      if (label) label = label.charAt(0).toUpperCase() + label.slice(1);
      return { date: baseDate, key, label };
    }

    function generatePayoutPdf({ title, subtitle, columns, rows, totals, fileBase }){
      if (!window.jspdf) throw new Error('Biblioteca jsPDF no disponible.');
      if (!Array.isArray(columns) || !columns.length) throw new Error('No hay columnas para exportar.');
      if (!Array.isArray(rows) || !rows.length) throw new Error('No hay datos para exportar.');

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('p','mm','a4');
      const periodInfo = getPeriodMeta();
      const safeTitle = title || 'Pagos a colaboradoras';
      const safeSubtitle = subtitle || '';
      const safeBase = (fileBase || 'pagos-colaboradoras').toLowerCase().replace(/[^a-z0-9\-_.]+/g,'-') || 'pagos-colaboradoras';

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const marginX = 16;
      const headerBandHeight = 34;
      const marginTop = headerBandHeight + 18;
      const marginBottom = 26;
      const tableWidth = pageWidth - marginX * 2;
      const rowHeight = 6.8;

      let currentPage = 0;
      let y = marginTop;
      let summaryRendered = false;

      const drawPageHeader = ()=>{
        currentPage += 1;
        pdf.setFillColor(37,99,235);
        pdf.setDrawColor(37,99,235);
        pdf.rect(0, 0, pageWidth, headerBandHeight, 'F');

        pdf.setTextColor(255,255,255);
        pdf.setFont('helvetica','bold');
        pdf.setFontSize(16);
        pdf.text(safeTitle, marginX, 16);

        if (safeSubtitle){
          pdf.setFont('helvetica','normal');
          pdf.setFontSize(11);
          pdf.text(safeSubtitle, marginX, 24);
        }

        pdf.setFont('helvetica','normal');
        pdf.setFontSize(9.5);
        pdf.setTextColor(209,225,255);
        const periodLabel = `Periodo: ${periodInfo.label}`;
        pdf.text(periodLabel, marginX, headerBandHeight - 6);
        const pageLabel = `Página ${currentPage}`;
        pdf.text(pageLabel, pageWidth - marginX, headerBandHeight - 6, { align:'right' });

        pdf.setTextColor(0,0,0);
        pdf.setDrawColor(220,230,245);
        y = marginTop;
      };

      const drawSummaryChip = ()=>{
        if (summaryRendered) return;
        const netValue = totals && typeof totals.net === 'number' && isFinite(totals.net) ? totals.net : null;
        if (netValue == null) {
          summaryRendered = true;
          return;
        }

        const summaryText = `Total neto a pagar: ${fmtEUR(netValue)}`;
        pdf.setFont('helvetica','bold');
        pdf.setFontSize(11);
        const textWidth = pdf.getTextWidth(summaryText);
        const chipPadding = 8;
        const chipHeight = 12.5;
        const chipWidth = Math.min(Math.max(textWidth + chipPadding * 2, 80), tableWidth);
        const chipTop = y - 4;

        pdf.setFillColor(228,244,255);
        pdf.setDrawColor(188,216,245);
        pdf.roundedRect(marginX, chipTop, chipWidth, chipHeight, 3, 3, 'FD');
        pdf.setTextColor(28,73,140);
        pdf.text(summaryText, marginX + chipPadding, chipTop + chipHeight - 4);
        pdf.setTextColor(0,0,0);
        pdf.setDrawColor(220,230,245);
        pdf.setFont('helvetica','normal');
        summaryRendered = true;
        y = chipTop + chipHeight + 8;
      };


      const normalizedColumns = columns.map(col=>({
        key: col.key,
        label: col.label || '',
        align: col.align === 'right' ? 'right' : 'left',
        width: (col.width != null && isFinite(col.width) && col.width > 0) ? col.width : 1,
        format: typeof col.format === 'function' ? col.format : null
      }));
      const totalUnits = normalizedColumns.reduce((sum,col)=>sum + col.width, 0);
      const columnLayout = normalizedColumns.map((col, idx)=>{
        const prevUnits = normalizedColumns.slice(0, idx).reduce((sum,c)=>sum + c.width, 0);
        const width = tableWidth * (col.width / totalUnits);
        const x = marginX + tableWidth * (prevUnits / totalUnits);
        return Object.assign({}, col, { x, width });
      });

      const drawHeader = ()=>{
        const headerTop = y - rowHeight + 1.2;
        const headerHeight = rowHeight + 1.6;
        pdf.setFillColor(233,242,255);
        pdf.setDrawColor(198,215,238);
        pdf.roundedRect(marginX - 1.4, headerTop, tableWidth + 2.8, headerHeight, 1.8, 1.8, 'F');
        pdf.setTextColor(28,73,140);
        pdf.setFont('helvetica','bold');
        pdf.setFontSize(10);
        columnLayout.forEach(col=>{
          const textX = col.align === 'right' ? col.x + col.width - 2 : col.x + 2;
          pdf.text(col.label, textX, y, { align: col.align === 'right' ? 'right' : 'left' });
        });
        y += rowHeight;
        pdf.setTextColor(0,0,0);
        pdf.setFont('helvetica','normal');
      };

      const startPage = ()=>{
        drawPageHeader();
        drawSummaryChip();
        y += 4;
        drawHeader();
      };

      const ensureSpace = ()=>{
        if (y > pageHeight - marginBottom){
          pdf.addPage();
          startPage();
        }
      };

      startPage();

      let bodyRowIndex = 0;

      const defaultFormatter = (value)=>{
        if (value == null || value === '') return '—';
        if (typeof value === 'number' && isFinite(value)) return fmtEUR(value);
        return String(value);
      };

      rows.forEach(row=>{
        ensureSpace();
        const rowTop = y - rowHeight + 1.1;
        const rowHeightAdjusted = rowHeight + 0.6;
        if (bodyRowIndex % 2 === 0){
          pdf.setFillColor(248,251,255);
          pdf.setDrawColor(230,238,249);
          pdf.rect(marginX - 1.2, rowTop, tableWidth + 2.4, rowHeightAdjusted, 'F');
        }
        columnLayout.forEach(col=>{
          const raw = row[col.key];
          const text = col.format ? col.format(raw, row, col) : defaultFormatter(raw);
          const textX = col.align === 'right' ? col.x + col.width - 2 : col.x + 2;
          pdf.text(text, textX, y, { align: col.align === 'right' ? 'right' : 'left' });
        });
        pdf.setDrawColor(220,230,245);
        y += rowHeight;
        bodyRowIndex += 1;
      });

      if (totals !== false && totals != null){
        ensureSpace();
        const totalTop = y - rowHeight + 1.1;
        const totalHeight = rowHeight + 0.8;
        pdf.setFillColor(224,238,255);
        pdf.setDrawColor(192,214,241);
        pdf.roundedRect(marginX - 1.2, totalTop, tableWidth + 2.4, totalHeight, 1.6, 1.6, 'F');
        pdf.setFont('helvetica','bold');
        pdf.setTextColor(18,55,110);
        const totalRow = Object.assign({}, totals || {});
        if (columnLayout.length){
          totalRow[columnLayout[0].key] = 'TOTAL';
        }
        columnLayout.forEach(col=>{
          const raw = totalRow[col.key];
          const text = col.format ? col.format(raw, totalRow, col) : defaultFormatter(raw);
          const textX = col.align === 'right' ? col.x + col.width - 2 : col.x + 2;
          pdf.text(text, textX, y, { align: col.align === 'right' ? 'right' : 'left' });
        });
        y += rowHeight;
        pdf.setTextColor(0,0,0);
        pdf.setDrawColor(220,230,245);

        if (y > pageHeight - marginBottom + 4){
          pdf.addPage();
          startPage();
        }
      }
      pdf.setFont('helvetica','italic');
      pdf.setFontSize(9);
      pdf.setTextColor(120,130,150);
      pdf.text('Generado automáticamente desde el panel de MBS.', marginX, y + 2);
      pdf.setTextColor(0,0,0);

      const fileName = `${safeBase}-${periodInfo.key}.pdf`;
      pdf.save(fileName);
      return fileName;
    }

    function handlePayoutPdf(button, builder){
      if (!button || button.disabled) return;
      const originalHtml = button.innerHTML;
      const hadPrimary = button.classList.contains('primary');
      button.disabled = true;
      button.classList.remove('primary');
      button.innerHTML = '<span style="font-weight:700;">Generando PDF…</span>';

      try {
        const data = builder();
        if (!data || !Array.isArray(data.rows) || !data.rows.length){
          alert('No hay datos para exportar.');
          return;
        }
        if (!Array.isArray(data.columns) || !data.columns.length){
          alert('No hay columnas para exportar.');
          return;
        }

        const hasValues = data.rows.some(row =>
          data.columns.some(col => {
            if (!col || !col.key) return false;
            if (col.key === data.columns[0].key) return false;
            const v = row[col.key];
            if (typeof v === 'number' && isFinite(v)) return Math.abs(v) > 0.0001;
            return v != null && String(v).trim() !== '';
          })
        );

        if (!hasValues){
          alert('No hay importes disponibles para exportar.');
          return;
        }

        const columns = Array.isArray(data.columns) ? data.columns : [];
        const rows = Array.isArray(data.rows) ? data.rows : [];

        const slugify = (value)=>{
          const base = value == null ? '' : String(value);
          let normalized = base;
          try {
            normalized = normalized.normalize('NFD');
          } catch(_){
            // ignore normalization errors in older environments
          }
          return normalized
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/[^a-z0-9\-_.]+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
        };

        const exportPdf = (payload)=>{
          generatePayoutPdf(payload);
        };

        if (data.individualRows){
          const nameKey = data.rowTitleKey || (columns[0] && columns[0].key) || 'name';
          const resolveRowName = typeof data.resolveRowName === 'function'
            ? data.resolveRowName
            : (row)=>{
                const source = row && (row[nameKey] != null ? row[nameKey] : (columns[0] && row ? row[columns[0].key] : ''));
                const str = source == null ? '' : String(source);
                return str.trim();
              };
          const buildTotals = typeof data.individualTotals === 'function'
            ? data.individualTotals
            : (row)=>row;
          const baseFile = data.fileBase || 'pagos-colaboradoras';

          rows.forEach(row=>{
            const resolvedName = resolveRowName(row) || '';
            const displayName = resolvedName || 'Colaboradora';
            const titleSuffix = displayName && (data.title || '') ? ` · ${displayName}` : '';
            const nameSlug = slugify(displayName) || slugify(resolvedName) || 'colaboradora';
            const totalsForRow = buildTotals ? buildTotals(row, data) : null;
            const baseTitle = data.title || '';
            const finalTitle = baseTitle
              ? `${baseTitle}${titleSuffix}`
              : (displayName || baseTitle || 'Pagos a colaboradoras');
            exportPdf({
              title: finalTitle,
              subtitle: data.subtitle,
              columns,
              rows: [row],
              totals: totalsForRow,
              fileBase: `${baseFile}-${nameSlug}`
            });
          });
        } else {
          exportPdf(data);
        }
      } catch(err){
        console.error('Error generando PDF de pagos:', err);
        alert('No se pudo generar el PDF: ' + (err?.message || err));
      } finally {
        button.innerHTML = originalHtml;
        button.disabled = false;
        if (hadPrimary) button.classList.add('primary');
      }
    }

    /* ---------- Rentabilidad helpers ---------- */
    function calcularCostes(especialista, facturado) {
  const esp = String(especialista||'').toLowerCase();

  const payrollOverride = payrollCostForEspecialista(esp);
  if (payrollOverride != null){
    return {
      fijo: payrollOverride,
      variable: 0,
      estructura: 0,
      total: payrollOverride
    };
  }

  // Costes fijos por especialista
  const costesFijos = {
    'maria pazos': 0,    // Se calculará desde tabla Nutris
    'sheila': 0,         // Se calculará desde tabla Nutris
    'maria rico': 0,     // Se calculará desde tabla Logopedas
    'tamara martin': 0,  // Se calculará desde tabla Logopedas
    'hugo zichner': 0,   // Se obtiene del widget de nómina
    'june amores': 0,    // Se obtiene del widget de nómina
    'gotxi': 0,         // Sin coste fijo
    'nekane': 0,        // Se calculará desde tabla Nekane
    'neurofisio': 0     // Sin coste fijo
  };
  
  // Buscar coste desde tablas de pagos si es Nutri o Logopeda
  if (/maria\s*pazos|sheila/i.test(esp)) {
    const nutriData = computeNutriRows();
    const nutriRow = nutriData.rows.find(r => 
      r.nameDisp.toLowerCase().includes(esp) || esp.includes(r.nameDisp.toLowerCase())
    );
    if (nutriRow) {
      return {
        fijo: nutriRow.gross,
        variable: 0,
        estructura: 0,
        total: nutriRow.gross
      };
    }
  }
  
  if (/maria\s*rico|tamara\s*martin/i.test(esp)) {
    const logoData = computeLogoRows();
    const logoRow = logoData.rows.find(r =>
      r.nameDisp.toLowerCase().includes(esp) || esp.includes(r.nameDisp.toLowerCase())
    );
    if (logoRow) {
      return {
        fijo: logoRow.gross,
        variable: 0,
        estructura: 0,
        total: logoRow.gross
      };
    }
  }

  if (/nekane/i.test(esp)) {
    const nekaneData = computeNekaneRows();
    const nekaneRow = nekaneData.rows.find(r => nameKey(r.nameDisp) === nameKey(especialista));
    if (nekaneRow) {
      return {
        fijo: nekaneRow.after,
        variable: 0,
        estructura: 0,
        total: nekaneRow.after
      };
    }
  }

  // Para el resto, usar costes fijos
  const costeFijo = costesFijos[esp] || 0;
  
  return {
    fijo: costeFijo,
    variable: 0,
    estructura: 0,
    total: costeFijo
  };
}

    function buildRentabilidad() {
      // LIMPIAR COMPLETAMENTE EL CONTENIDO
      rentBody.innerHTML = '';
      currentRentabilidadTotals = {
        facturado: 0,
        costes: 0,
        topDoctors: 0,
        sem: 0,
        recepcion: 0,
        beneficio: 0,
        margen: 0
      };

      const entries = Object.entries(summary).sort((a,b)=>b[1].bruto - a[1].bruto);

      let totFacturado = 0, totCostes = 0, totTopD = 0, totSem = 0, totRecepcion = 0, totBeneficio = 0;
      
      // Calcular costes adicionales según especificaciones
      const costesAdicionales = {
        'Maria Pazos': 35.09,    // First Class dietista
        'June Amores': 83.49     // First Class psicóloga
      };
      // Facturación fija para casos especiales
const facturacionFija = {
  'Neurofisio': 980  // Facturación fija de 980€
};

// Distribución fija para casos especiales
const distribucionFija = {
  'Neurofisio': {
    prim: 0,      // Primera: 0€
    suc: 0,       // Sucesiva: 0€
    otros: 980,   // Otros Conceptos: 980€
    seguros: 0,   // Seguros: 0€
    bruto: 980    // Total: 980€
  }
};
      
      // Coste total a repartir entre todos
      const costeTotalRepartir = 199.90; // 57.48 + 142.42
      const costePorEspecialista = costeTotalRepartir / entries.length;
      
      // Coste extra para GOTXI (Top Doctors ORL)
      const costeExtraGotxi = 156.09; // 129 + 21% IVA
      
      // Calcular recepción automáticamente
      let recepcionTotal = Number.isFinite(recepcionValue) && recepcionValue > 0 ? recepcionValue : 0;
      if (!(recepcionTotal > 0)){
        const now = new Date();
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        const sueldoBruto = 42.5207 * daysInMonth;
        const prorrateoPagas = 195.52;
        const cotizaciones = (sueldoBruto + prorrateoPagas) * 0.3208;
        recepcionTotal = sueldoBruto + prorrateoPagas + cotizaciones;
        recepcionValue = recepcionTotal;
      } else {
        recepcionValue = recepcionTotal;
      }

      const recepcionPorEspecialista = entries.length ? recepcionTotal / entries.length : 0;

      rentKpiRecepcion.textContent = '-' + fmtEUR(recepcionValue) + ' €';
      
      entries.forEach(([name, data]) => {
        // Aplicar facturación fija si existe
let facturado = data.bruto || 0;
if (facturacionFija[name]) {
  facturado = facturacionFija[name];
  console.log('✅ Facturación fija aplicada para', name, ':', facturado);
}

// FORZAR Neurofisio a 980€ independientemente del CSV
if (name.toLowerCase().includes('neurofisio')) {
  facturado = 980;
  console.log('✅ Neurofisio forzado a 980€');
}
        const costes = calcularCostes(name, facturado);
        
        // Aplicar costes adicionales
        let costeAdicional = 0;
        if (costesAdicionales[name]) {
          costeAdicional = costesAdicionales[name];
        }
        
        // Aplicar coste repartido entre todos
        costeAdicional += costePorEspecialista;
        
        // Aplicar coste extra a GOTXI
        if (name.toLowerCase().includes('gotxi')) {
          costeAdicional += costeExtraGotxi;
        }
        
        // DISTRIBUCIÓN AUTOMÁTICA DE TOP DOCTORS
        let topd = 0;
        const esp = name.toLowerCase();

        // Coste base para todos (24,99 €)
        const costeBase = 24.99;

        if (/maria\s*pazos/i.test(esp)) {
          topd = 35.09 + costeBase; // María Pazos First Class + base
        } else if (/sheila/i.test(esp)) {
          topd = costeBase; // Sheila solo base
        } else if (/june\s*amores/i.test(esp)) {
          topd = 83.49 + costeBase; // Psico First Class + base
        } else if (/gotxi/i.test(esp)) {
          topd = 156.09 + costeBase; // 129 + 21% IVA + base
        } else {
          // Solo el coste base para el resto
          topd = costeBase;
        }
        
        const costeTotal = costes.total + costeAdicional;
const beneficio = facturado - costeTotal - topd - (data.sem || 0) - 
  (data.bruto > 0 ? recepcionPorEspecialista : 0);

// ACTUALIZAR EL SUMMARY PARA REFLEJAR LA FACTURACIÓN CORRECTA
if (facturacionFija[name] || name.toLowerCase().includes('neurofisio')) {
  // Actualizar el summary con la facturación correcta
  const entry = Object.entries(summary).find(([n]) => n === name);
  if (entry) {
    entry[1].bruto = facturado;
    console.log('✅ Summary actualizado para', name, ':', facturado);
  }
}

// FORZAR DISTRIBUCIÓN ESPECÍFICA PARA NEUROFISIO
if (name.toLowerCase().includes('neurofisio')) {
  const entry = Object.entries(summary).find(([n]) => n === name);
  if (entry) {
    entry[1].prim = 0;      // Forzar Primera: 0€
    entry[1].suc = 0;      // Forzar Sucesiva: 0€
    entry[1].otros = 980;   // Forzar Otros Conceptos: 980€
    entry[1].seguros = 0;   // Forzar Seguros: 0€
    entry[1].bruto = 980;   // Forzar Total: 980€
    console.log('✅ Distribución forzada para Neurofisio:', entry[1]);
  }
}
        const margen = facturado > 0 ? (beneficio / facturado) : 0;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td style="text-align:left">${name}</td>
          <td>${fmtEUR(facturado)}</td>
          <td>-${fmtEUR(costes.total)}</td>
          <td><input type="number" data-rent-topd="${nameKey(name)}" value="${topdValues[nameKey(name)] || topd}" min="0" step="0.01" class="mbs-input"></td>
          <td><input type="number" data-rent-sem="${nameKey(name)}" value="${semValues[nameKey(name)] || 0}" min="0" step="0.01" class="mbs-input"></td>
          <td>-${fmtEUR(recepcionPorEspecialista)}</td>
          <td>${fmtEUR(beneficio)}</td>
          <td>${fmtPct01(margen)}</td>
        `;
        rentBody.appendChild(tr);
        
        totFacturado += facturado;
        totCostes += costeTotal;
        totTopD += topd;
        totSem += (data.sem || 0);
        totBeneficio += beneficio;
        totRecepcion += recepcionPorEspecialista;
      });
      
      // Añadir fila de totales
      const trTotales = document.createElement('tr');
      trTotales.className = 'mbs-foot';
      trTotales.innerHTML = `
        <td style="text-align:left; font-weight: 700">TOTAL</td>
        <td style="font-weight: 700">${fmtEUR(totFacturado)}</td>
        <td style="font-weight: 700">-${fmtEUR(totCostes)}</td>
        <td style="font-weight: 700">-${fmtEUR(totTopD)}</td>
        <td style="font-weight: 700">-${fmtEUR(totSem)}</td>
        <td style="font-weight: 700">-${fmtEUR(totRecepcion)}</td>
        <td style="font-weight: 700">${fmtEUR(totBeneficio)}</td>
        <td style="font-weight: 700">${fmtPct01(totFacturado > 0 ? totBeneficio / totFacturado : 0)}</td>
      `;
      rentBody.appendChild(trTotales);
      
      const margenTotal = totFacturado > 0 ? (totBeneficio / totFacturado) : 0;
      
      rentTotFacturado.textContent = fmtEUR(totFacturado);
      rentTotCostes.textContent = '-' + fmtEUR(totCostes);
      rentTotTopD.textContent = '-' + fmtEUR(totTopD);
      rentTotSem.textContent = '-' + fmtEUR(totSem);
      rentTotRecepcion.textContent = '-' + fmtEUR(totRecepcion);
      rentTotBeneficio.textContent = fmtEUR(totBeneficio);
      rentTotMargen.textContent = fmtPct01(margenTotal);
      updateGlance('liquidez', fmtEUR(totBeneficio) + ' €');
      updateGlance('margen', fmtPct01(margenTotal));
      // Actualizar KPIs
rentKpiTotal.textContent = fmtEUR(totFacturado) + ' €';
rentKpiSueldos.textContent = '-' + fmtEUR(totCostes) + ' €';
rentKpiSem.textContent = '-' + fmtEUR(totSem) + ' €';
rentKpiExpenses.textContent = '-' + fmtEUR(totCostes + totTopD + totSem + totRecepcion) + ' €';
rentKpiProfit.textContent = fmtEUR(totBeneficio) + ' €';
rentKpiMargin.textContent = fmtPct01(margenTotal);

      currentRentabilidadTotals = {
        facturado: totFacturado,
        costes: totCostes,
        topDoctors: totTopD,
        sem: totSem,
        recepcion: totRecepcion,
        beneficio: totBeneficio,
        margen: margenTotal
      };

setTimeout(() => {
  renderCharts();
}, 50);
    }

    // Función para mapear especialista a especialidad
    function getEspecialidadFromEspecialista(especialista) {
  const esp = String(especialista||'').toLowerCase();
  
  if (/maria\s*pazos|sheila/i.test(esp)) return 'Nutrición';
  if (/maria\s*rico|tamara\s*martin|hugo\s*zichner/i.test(esp)) return 'Logopedia';
  if (/june\s*amores/i.test(esp)) return 'Psicología';
  if (/gotxi/i.test(esp)) return 'Otorrinolaringología';
  // ✅ DETECTAR DRA. ARIAS
  if (/dra\.?\s*arias|arias/i.test(esp)) return 'Otorrinolaringología';
  if (/varios|tienda/i.test(esp)) return 'Tienda/Otros';
  if (/neurofisio/i.test(esp)) return 'Neurofisiología';
  
  return 'Otros';
}
        /* ---------- Charts ---------- */
    function renderCharts(){
  try{
    initChartControls();
    Object.keys(chartViewState).forEach(updateChartToggleButtons);
    const entries = Object.entries(summary).sort((a,b)=>b[1].bruto - a[1].bruto);
    const totals = entries.reduce((acc, [name, data]) => {
      acc.prim += data.prim || 0;
      acc.suc += data.suc || 0;
      acc.otros += data.otros || 0;
      acc.bonos += data.bonosImporte || 0;
      acc.bruto += data.bruto || 0;
      return acc;
    }, {prim: 0, suc: 0, otros: 0, bonos: 0, bruto: 0});
    
    // Agrupar por especialidad - versión corregida
    const byEspecialidad = {};
    parsedRows.forEach(r => {
      if (!isFinite(r.importe)) return;
      const excludeNegative = excludeNeg && excludeNeg.checked;
      if (excludeNegative && r.importe < 0) return;
      
      const especialidad = extractEspecialidad(r.agenda);
      byEspecialidad[especialidad] = (byEspecialidad[especialidad] || 0) + r.importe;
    });
    
    // Obtener contextos de canvas
    const ctx1 = $('chartSpec')?.getContext('2d');
    const ctx2 = $('chartMix')?.getContext('2d');
    const ctx3 = $('chartEsp')?.getContext('2d');
    const ctxBonos = $('chartBonos')?.getContext('2d');
    const ctxOrigen = $('chartOrigen')?.getContext('2d');
    const ctxDia = $('chartDia')?.getContext('2d');
    const ctxForma = $('chartForma')?.getContext('2d');
    const ctxRun = $('chartRun')?.getContext('2d');
    const ctxGastos = $('chartGastos')?.getContext('2d');
    const ctxBeneficio = $('chartBeneficio')?.getContext('2d');
    const ctxMargen = $('chartMargen')?.getContext('2d');
    const ctxBeneficioEspecialidad = $('chartBeneficioEspecialidad')?.getContext('2d');
    const ctxMargenEspecialidad = $('chartMargenEspecialidad')?.getContext('2d');
    const ctxStacked = $('chartStacked')?.getContext('2d');
    calRoot = $('calGrid');

   // Destruir charts existentes de forma segura
const chartsToDestroy = [
  chartSpec, chartMix, chartEsp, chartBonos, chartOrigen, chartDia, chartForma, chartRun,
  chartGastos, chartBeneficio, chartMargen, chartBeneficioEspecialidad, 
  chartMargenEspecialidad, chartStacked, chartStackedEspecialidad, 
  chartGastosEspecialista, chartGastosEspecialidad
];

chartsToDestroy.forEach(chart => {
  try {
    if (chart && typeof chart.destroy === 'function') {
      chart.destroy();
    }
  } catch (e) {
    console.warn('Error destroying chart:', e);
  }
});

    // Configuración común mejorada
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const textColor = isDark ? '#eaf2ff' : '#0b2542';
    const legendColor = textColor;
    const gridColor = isDark ? 'rgba(234,242,255,0.14)' : 'rgba(2,6,23,0.08)';
    const fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font') || 'system-ui, -apple-system, sans-serif';
    const commonFont = {
      size: 12,
      family: fontFamily,
      weight: 500
    };

    const tooltipBackground = isDark ? '#111827' : '#0b1f33';
    const tooltipBorder = isDark ? 'rgba(148,163,184,.35)' : 'rgba(15,23,42,.12)';

    if (Chart && Chart.defaults) {
      Chart.defaults.color = textColor;
      Chart.defaults.font.family = fontFamily;
      Chart.defaults.font.size = 12;
      Chart.defaults.font.weight = '500';
      Chart.defaults.plugins.tooltip.titleColor = '#fff';
      Chart.defaults.plugins.tooltip.titleFont = { family: fontFamily, size: 12, weight: '600' };
      Chart.defaults.plugins.tooltip.bodyFont = { family: fontFamily, size: 12 };
      Chart.defaults.plugins.tooltip.borderWidth = 0;
      Chart.defaults.elements.bar.borderSkipped = false;
      Chart.defaults.elements.bar.borderRadius = 8;
    }

    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 520, easing: 'easeOutQuart' },
      layout: { padding: { top: 36, right: 18, bottom: 12, left: 18 } },
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          labels: {
            color: legendColor,
            font: { ...commonFont, weight: 600 },
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 16
          }
        },
        tooltip: {
          backgroundColor: tooltipBackground,
          borderColor: tooltipBorder,
          borderWidth: 1,
          titleColor: '#fff',
          bodyColor: '#fff',
          titleFont: { ...commonFont, weight: 600 },
          bodyFont: commonFont,
          padding: 12,
          cornerRadius: 10,
          displayColors: true
        },
        mbsCenterText: {
          fontFamily,
          lineHeight: 18
        },
        mbsDataLabels: {
          enabled: false,
          family: fontFamily,
          color: legendColor,
          size: 12,
          weight: '700'
        },
        mbsLineCallout: {}
      }
    };

    // 1. Facturación por especialista
    const specRecordsAll = entries.map(([name, data])=>({
      label: name,
      value: Number((data.bruto || 0).toFixed(2))
    }));
    const totalSpec = specRecordsAll.reduce((sum, item)=>sum + (item.value || 0), 0);
    const specRecords = limitRecords(specRecordsAll, 'spec', { label: 'Otros especialistas' });
    const labels = specRecords.map(item=>item.label);
    const values = specRecords.map(item=>item.value);
    const barColors = values.map((_,i)=>CHART_COLORS[i % CHART_COLORS.length]);

    setChartSummary('spec', describeTopShare(specRecordsAll, totalSpec, { fallback: 'Sin datos' }));

    if (ctx1) {
      const specYAxis = {
        beginAtZero:true,
        grid:{ color:gridColor, borderDash:[4,4], drawBorder:false },
        ticks:{
          font: commonFont,
          color: textColor,
          callback: function(value) {
            return fmtEUR(value) + ' €';
          }
        }
      };
      applyHeadroom(specYAxis, values, { ratio: 0.22 });

      chartSpec = new Chart(ctx1, {
        type:'bar',
        data:{
          labels,
          datasets:[{
            label:'Facturado (€)',
            data: values,
            backgroundColor: barColors.map(c=>withAlpha(c, 0.28)),
            hoverBackgroundColor: barColors.map(c=>withAlpha(c, 0.42)),
            borderColor: barColors,
            borderWidth:1.6,
            borderRadius:10,
            maxBarThickness:46,
            barPercentage:0.6,
            categoryPercentage:0.6
          }]
        },
        options:{
          ...commonOptions,
          plugins:{
            ...commonOptions.plugins,
            legend:{ display:false },
            mbsDataLabels:{
              ...commonOptions.plugins.mbsDataLabels,
              enabled:true,
              formatter: (value)=>fmtEUR(value)+' €',
              color: withAlpha(textColor, 0.85),
              offset: 10
            },
            tooltip:{
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const raw = context.parsed.y || 0;
                  const pct = totalSpec > 0 ? (raw / totalSpec) * 100 : 0;
                  return `${context.dataset.label}: ${fmtEUR(raw)} € (${numberFormatter.format(pct)}%)`;
                }
              }
            }
          },
          scales:{
            x:{
              grid:{ display:false, drawBorder:false },
              ticks:{
                autoSkip:false,
                callback:(val, idx)=>wrapLabel(labels[idx], 14),
                maxRotation:0,
                font: commonFont,
                color: textColor
              }
            },
            y: specYAxis
          }
        }
      });
    } else {
      chartSpec = null;
    }

    // 2. Mix por tipo
    const otrosNet = Math.max(0, (totals.otros || 0) - (totals.bonos || 0));
    const mixData = [
      { label: 'Primeras', value: totals.prim || 0 },
      { label: 'Sucesivas', value: totals.suc || 0 },
      { label: 'Bonos', value: totals.bonos || 0 },
      { label: 'Otros', value: otrosNet }
    ];
    const totalMix = mixData.reduce((sum, item)=>sum + (item.value || 0), 0);
    const orderedMix = mixData.slice().sort((a,b)=>b.value - a.value);
    const mixSummary = describeTopShare(orderedMix, totalMix, { fallback: 'Sin datos' });
    setChartSummary('mix', mixSummary);

    if (ctx2) {
      const topMix = orderedMix[0];
      const topMixLabel = topMix && totalMix > 0
        ? `Top: ${topMix.label} · ${numberFormatter.format((topMix.value / totalMix) * 100)}%`
        : 'Distribución uniforme';
      const mixLines = totalMix > 0
        ? [
            { text: 'Total', color: withAlpha(textColor, 0.72), font: { family: fontFamily, size: 12, weight: '500' } },
            { text: fmtEUR(totalMix) + ' €', color: CHART_COLORS[0], font: { family: fontFamily, size: 20, weight: '700' } },
            { text: topMixLabel, color: withAlpha(textColor, 0.7), font: { family: fontFamily, size: 11, weight: '600' } }
          ]
        : [
            { text: 'Sin datos', color: withAlpha(textColor, 0.65), font: { family: fontFamily, size: 14, weight: '600' } }
          ];

      chartMix = new Chart(ctx2, {
        type:'doughnut',
        data:{
          labels: mixData.map(item=>item.label),
          datasets:[{
            data: mixData.map(item=>item.value),
            backgroundColor:[CHART_COLORS[0], CHART_COLORS[1], CHART_COLORS[2], CHART_COLORS[3]].map(c=>withAlpha(c, isDark ? 0.8 : 0.9)),
            borderColor: isDark ? '#0f172a' : '#ffffff',
            borderWidth:1,
            hoverOffset:10,
            spacing: totalMix ? 2 : 0
          }]
        },
        options:{
          ...commonOptions,
          plugins:{
            ...commonOptions.plugins,
            legend:{
              ...commonOptions.plugins.legend,
              position:'bottom'
            },
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = total ? ((context.parsed / total) * 100).toFixed(1) : '0.0';
                  return `${context.label}: ${fmtEUR(context.parsed)} € (${percentage}%)`;
                }
              }
            },
            mbsCenterText: {
              ...commonOptions.plugins.mbsCenterText,
              lines: mixLines
            }
          },
          cutout:'64%'
        }
      });
    } else {
      chartMix = null;
    }

    // 3. Bonos por especialista
    const bonosRecordsAll = entries
      .map(([name, data]) => {
        const value = Math.max(0, Number(data?.bonosImporte) || 0);
        const count = Math.max(0, Number(data?.bonosCount) || 0);
        const especialidad = data?.especialidad || getEspecialidadFromEspecialista(name);
        return { label: name, value, count, especialidad };
      })
      .filter(item => item.value > 0 || item.count > 0)
      .sort((a, b) => b.value - a.value);

    const totalBonos = bonosRecordsAll.reduce((sum, item) => sum + (item.value || 0), 0);
    if (bonosRecordsAll.length) {
      setChartSummary('bonos', describeTopShare(bonosRecordsAll, totalBonos, { fallback: 'Sin datos' }));
    } else {
      setChartSummary('bonos', 'Sin datos');
    }

    const bonosRecords = limitRecords(bonosRecordsAll, 'bonos', { label: 'Otros especialistas' });

    if (ctxBonos && bonosRecords.length) {
      const bonosLabels = bonosRecords.map(item => item.label);
      const bonosValues = bonosRecords.map(item => item.value);
      const bonosCounts = bonosRecords.map(item => Math.max(0, Math.round(item.count || 0)));
      const bonosPalette = bonosLabels.map((_, idx) => {
        const base = CHART_COLORS[(idx + 2) % CHART_COLORS.length] || '#6366f1';
        return {
          fill: withAlpha(base, 0.3),
          hover: withAlpha(base, 0.5),
          border: base
        };
      });
      const bonosYAxis = {
        beginAtZero:true,
        grid:{ color:gridColor, borderDash:[4,4], drawBorder:false },
        ticks:{
          font: commonFont,
          color: textColor,
          callback:value => fmtEUR(value) + ' €'
        }
      };
      applyHeadroom(bonosYAxis, bonosValues, { ratio: 0.22 });
      chartBonos = new Chart(ctxBonos, {
        type:'bar',
        data:{
          labels: bonosLabels,
          datasets:[{
            label:'Importe bonos (€)',
            data: bonosValues,
            bonosCounts,
            backgroundColor: bonosPalette.map(color => color.fill),
            hoverBackgroundColor: bonosPalette.map(color => color.hover),
            borderColor: bonosPalette.map(color => color.border),
            borderWidth:1.6,
            borderRadius:10,
            maxBarThickness:46,
            barPercentage:0.6,
            categoryPercentage:0.6
          }]
        },
        options:{
          ...commonOptions,
          plugins:{
            ...commonOptions.plugins,
            legend:{ display:false },
            tooltip:{
              ...commonOptions.plugins.tooltip,
              callbacks:{
                label:(context)=>{
                  const raw = context.parsed.y || 0;
                  const count = context.dataset.bonosCounts?.[context.dataIndex] || 0;
                  const countLabel = count ? ` · ${fmtInt(count)} bonos` : '';
                  return `${context.label}: ${fmtEUR(raw)} €${countLabel}`;
                }
              }
            },
            mbsDataLabels:{
              ...commonOptions.plugins.mbsDataLabels,
              enabled:true,
              formatter:(value, ctx)=>{
                const count = ctx?.dataset?.bonosCounts?.[ctx.dataIndex] || 0;
                const countLabel = count ? ` · ${fmtInt(count)} bonos` : '';
                return `${fmtEUR(value)} €${countLabel}`;
              },
              color: withAlpha(textColor, 0.85),
              offset: 10
            }
          },
          scales:{
            x:{
              grid:{ display:false, drawBorder:false },
              ticks:{
                autoSkip:false,
                callback:(val, idx)=>wrapLabel(bonosLabels[idx], 14),
                maxRotation:0,
                font: commonFont,
                color: textColor
              }
            },
            y: bonosYAxis
          }
        }
      });
    } else if (chartBonos) {
      if (typeof chartBonos.destroy === 'function') {
        try { chartBonos.destroy(); } catch(_) {}
      }
      chartBonos = null;
    }

    // 4. Origen de facturación por especialista
    const origenRecordsAll = entries
      .map(([name, data]) => {
        const prim = Math.max(0, Number(data?.prim) || 0);
        const suc = Math.max(0, Number(data?.suc) || 0);
        const bonos = Math.max(0, Number(data?.bonosImporte) || 0);
        const seguros = Math.max(0, Number(data?.seguros) || 0);
        const otrosBase = Math.max(0, Number(data?.otros) || 0);
        const otros = Math.max(0, otrosBase - bonos - seguros);
        const especialidad = data?.especialidad || getEspecialidadFromEspecialista(name);
        return { label: name, prim, suc, bonos, seguros, otros, especialidad };
      })
      .filter(item => (item.prim + item.suc + item.bonos + item.seguros + item.otros) > 0)
      .sort((a, b) => (b.prim + b.suc + b.bonos + b.seguros + b.otros) - (a.prim + a.suc + a.bonos + a.seguros + a.otros));

    const origenShareRecords = origenRecordsAll.map(item => ({ label: item.label, value: item.prim + item.suc + item.bonos + item.seguros + item.otros }));
    const totalOrigen = origenShareRecords.reduce((sum, item) => sum + (item.value || 0), 0);
    if (origenShareRecords.length) {
      setChartSummary('origen', describeTopShare(origenShareRecords, totalOrigen, { fallback: 'Sin datos' }));
    } else {
      setChartSummary('origen', 'Sin datos');
    }

    const origenRecords = limitCompositeRecords(origenRecordsAll, 'origen', { label: 'Otros especialistas' });

    if (ctxOrigen && origenRecords.length){
      const origenLabels = origenRecords.map(item => item.label);
      const datasetPrim = origenRecords.map(item => item.prim || 0);
      const datasetSuc = origenRecords.map(item => item.suc || 0);
      const datasetBonos = origenRecords.map(item => item.bonos || 0);
      const datasetSeguros = origenRecords.map(item => item.seguros || 0);
      const datasetOtros = origenRecords.map(item => item.otros || 0);
      const origenPalette = (idx)=> CHART_COLORS[idx % CHART_COLORS.length] || '#64748b';
      chartOrigen = new Chart(ctxOrigen, {
        type:'bar',
        data:{
          labels: origenLabels,
          datasets:[
            {
              label:'Primeras',
              data: datasetPrim,
              backgroundColor: withAlpha(origenPalette(0), 0.65),
              borderColor: origenPalette(0),
              borderWidth:1.2,
              borderRadius:6
            },
            {
              label:'Sucesivas',
              data: datasetSuc,
              backgroundColor: withAlpha(origenPalette(1), 0.65),
              borderColor: origenPalette(1),
              borderWidth:1.2,
              borderRadius:6
            },
            {
              label:'Bonos',
              data: datasetBonos,
              backgroundColor: withAlpha(origenPalette(2), 0.65),
              borderColor: origenPalette(2),
              borderWidth:1.2,
              borderRadius:6
            },
            {
              label:'Seguros',
              data: datasetSeguros,
              backgroundColor: withAlpha(origenPalette(3), 0.55),
              borderColor: origenPalette(3),
              borderWidth:1.2,
              borderRadius:6
            },
            {
              label:'Otros',
              data: datasetOtros,
              backgroundColor: withAlpha(origenPalette(4), 0.45),
              borderColor: origenPalette(4),
              borderWidth:1.2,
              borderRadius:6
            }
          ]
        },
        options:{
          ...commonOptions,
          indexAxis:'y',
          plugins:{
            ...commonOptions.plugins,
            legend:{
              ...commonOptions.plugins.legend,
              position:'bottom'
            },
            tooltip:{
              ...commonOptions.plugins.tooltip,
              callbacks:{
                label:(context)=>{
                  const raw = context.parsed.x || 0;
                  const total = (datasetPrim[context.dataIndex] || 0)
                    + (datasetSuc[context.dataIndex] || 0)
                    + (datasetBonos[context.dataIndex] || 0)
                    + (datasetSeguros[context.dataIndex] || 0)
                    + (datasetOtros[context.dataIndex] || 0);
                  const pct = total > 0 ? ` (${fmtPct01(raw / total)})` : '';
                  return `${context.dataset.label}: ${fmtEUR(raw)} €${pct}`;
                }
              }
            },
            mbsDataLabels:{
              ...commonOptions.plugins.mbsDataLabels,
              enabled:false
            }
          },
          scales:{
            x:{
              stacked:true,
              beginAtZero:true,
              grid:{ color:gridColor, borderDash:[4,4], drawBorder:false },
              ticks:{
                color:textColor,
                font: commonFont,
                callback:value => fmtEUR(value) + ' €'
              }
            },
            y:{
              stacked:true,
              grid:{ display:false, drawBorder:false },
              ticks:{
                color:textColor,
                font: commonFont,
                callback:(val, idx)=>wrapLabel(origenLabels[idx], 16)
              }
            }
          }
        }
      });
    } else if (chartOrigen) {
      if (typeof chartOrigen.destroy === 'function') {
        try { chartOrigen.destroy(); } catch(_) {}
      }
      chartOrigen = null;
    }

    // 5. Facturación por especialidad
    const especialidadMap = {};
    Object.entries(summary).forEach(([especialista, data]) => {
      const especialidad = getEspecialidadFromEspecialista(especialista);
      if (!especialidadMap[especialidad]) {
        especialidadMap[especialidad] = 0;
      }
      especialidadMap[especialidad] += data.bruto;
    });
    
    const entriesEsp = Object.entries(especialidadMap).sort((a,b)=>b[1] - a[1]);
    const espRecordsAll = entriesEsp.map(([label, value])=>({
      label,
      value: Number((value || 0).toFixed(2))
    }));
    const totalEsp = espRecordsAll.reduce((sum, item)=>sum + (item.value || 0), 0);
    const espRecords = limitRecords(espRecordsAll, 'esp', { label: 'Otras especialidades' });
    const labelsEsp = espRecords.map(item=>item.label);
    const valuesEsp = espRecords.map(item=>item.value);
    const espColors = valuesEsp.map((_,i)=>CHART_COLORS[i % CHART_COLORS.length]);

    setChartSummary('esp', describeTopShare(espRecordsAll, totalEsp, { fallback: 'Sin datos' }));

    if (ctx3) {
      const espYAxis = {
        beginAtZero:true,
        grid:{ color:gridColor, borderDash:[4,4], drawBorder:false },
        ticks:{
          font: commonFont,
          color: textColor,
          callback: function(value) {
            return fmtEUR(value) + ' €';
          }
        }
      };
      applyHeadroom(espYAxis, valuesEsp, { ratio: 0.22 });
      chartEsp = new Chart(ctx3, {
        type:'bar',
        data:{
          labels: labelsEsp,
          datasets:[{
            label:'Facturado (€)',
            data: valuesEsp,
            backgroundColor: espColors.map(c=>withAlpha(c, 0.26)),
            hoverBackgroundColor: espColors.map(c=>withAlpha(c, 0.4)),
            borderColor: espColors,
            borderWidth:1.6,
            borderRadius:10,
            maxBarThickness:56
          }]
        },
        options:{
          ...commonOptions,
          plugins:{
            ...commonOptions.plugins,
            legend:{ display:false },
            mbsDataLabels:{
              ...commonOptions.plugins.mbsDataLabels,
              enabled:true,
              formatter: (value)=>fmtEUR(value)+' €',
              color: withAlpha(textColor, 0.85),
              offset: 10
            },
            tooltip:{
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const raw = context.parsed.y || 0;
                  const pct = totalEsp > 0 ? (raw / totalEsp) * 100 : 0;
                  return `${context.dataset.label}: ${fmtEUR(raw)} € (${numberFormatter.format(pct)}%)`;
                }
              }
            }
          },
          scales:{
            x:{
              grid:{ display:false, drawBorder:false },
              ticks:{
                autoSkip:false,
                maxRotation:0,
                font: commonFont,
                color: textColor
              }
            },
            y: espYAxis
          }
        }
      });
    } else {
      chartEsp = null;
    }

    // 6. Total por día
    const byDay = new Map();
    parsedRows.forEach(r=>{
      if (!r.fecha) return;
      const excludeNegative = excludeNeg && excludeNeg.checked;
      if (excludeNegative && r.importe < 0) return;
      
      const k = toKey(r.fecha);
      byDay.set(k, (byDay.get(k)||0) + r.importe);
    });
    
    const dayKeys = Array.from(byDay.keys()).sort();
    const dayVals = dayKeys.map(k=>+(byDay.get(k)||0).toFixed(2));
    const formattedLabels = dayKeys.map(k => {
      const [year, month, day] = k.split('-');
      return `${day}/${month}`;
    });

    const positiveDayValues = dayVals.filter(val => val > 0);
    const avgDailyValue = positiveDayValues.length
      ? positiveDayValues.reduce((sum, val)=>sum + val, 0) / positiveDayValues.length
      : 0;
    const avgDailyRounded = Number(avgDailyValue.toFixed(2));
    const avgDataset = dayVals.map(()=>avgDailyRounded);
    const peakDay = describePeak(dayVals, formattedLabels);
    const diaSummary = dayVals.length
      ? `Media: ${fmtEUR(avgDailyRounded)} € · Pico ${peakDay?.label || '--'}: ${fmtEUR((peakDay?.value) || 0)} €`
      : 'Sin datos';
    setChartSummary('dia', diaSummary);

    if (ctxDia) {
      const diaGradient = buildAreaGradient(ctxDia, CHART_COLORS[0]);

      chartDia = new Chart(ctxDia, {
        type:'line',
        data:{
          labels: formattedLabels,
          datasets:[
            {
              label:'Total diario (€)',
              data: dayVals,
              borderColor: CHART_COLORS[0],
              backgroundColor: diaGradient,
              borderWidth:2.4,
              tension:.28,
              fill:true,
              pointRadius:3,
              pointHoverRadius:5,
              pointBackgroundColor: '#ffffff',
              pointBorderColor: CHART_COLORS[0],
              pointBorderWidth: 2
            },
            {
              label:'Media diaria',
              data: avgDataset,
              borderColor: withAlpha(CHART_COLORS[4], isDark ? 0.85 : 0.75),
              borderWidth:1.4,
              borderDash:[6,6],
              pointRadius:0,
              fill:false,
              tension:0
            }
          ]
        },
        options:{
          ...commonOptions,
          plugins:{
            ...commonOptions.plugins,
            legend:{display:false},
            tooltip:{
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  return context.dataset.label + ': ' + fmtEUR(context.parsed.y) + ' €';
                }
              }
            },
            mbsLineCallout:{
              points: [
                peakDay && Number.isFinite(peakDay.value) ? {
                  datasetIndex: 0,
                  dataIndex: peakDay.index,
                  color: CHART_COLORS[0],
                  dotColor: CHART_COLORS[0],
                  backgroundColor: withAlpha(CHART_COLORS[0], isDark ? 0.3 : 0.18),
                  formatter: () => `${peakDay.label}: ${fmtEUR(peakDay.value)} €`
                } : null
              ].filter(Boolean)
            }
          },
          scales:{
            x:{
              ticks:{
                color:textColor,
                font:commonFont,
                maxRotation:45,
                maxTicksLimit: 10
              },
              grid:{ display:false, drawBorder:false }
            },
            y:{
              beginAtZero:true,
              ticks:{
                color:textColor,
                font:commonFont,
                callback: function(value) {
                  return fmtEUR(value) + ' €';
                }
              },
              grid:{ color:gridColor, borderDash:[4,4], drawBorder:false }
            }
          }
        }
      });
    } else {
      chartDia = null;
    }

    // 7. Por forma de pago
    const byForma = new Map();
    parsedRows.forEach(r=>{
      const f = r.forma || 'N/D';
      byForma.set(f, (byForma.get(f)||0) + r.importe);
    });
    
    const formaEntries = Array.from(byForma.entries()).sort((a,b)=>b[1]-a[1]);
    const formaRecordsAll = formaEntries.map(([label, value])=>({
      label,
      value: +(Number(value||0).toFixed(2))
    }));
    const totalForma = formaRecordsAll.reduce((sum, item)=>sum + (item.value || 0), 0);
    const formaRecords = limitRecords(formaRecordsAll, 'forma', { allowOthers: true, label: 'Otros métodos' });
    const formaLabels = formaRecords.map(item=>item.label);
    const formaVals = formaRecords.map(item=>item.value);
    const formaColors = formaVals.map((_,i)=>CHART_COLORS[i % CHART_COLORS.length]);
    const formaOrdered = formaRecordsAll.slice().sort((a,b)=>b.value - a.value);

    setChartSummary('forma', describeTopShare(formaRecordsAll, totalForma, { fallback: 'Sin datos' }));

    if (ctxForma) {
      const formaLines = totalForma > 0
        ? [
            { text: 'Cobros', color: withAlpha(textColor, 0.72), font: { family: fontFamily, size: 12, weight: '500' } },
            { text: fmtEUR(totalForma) + ' €', color: CHART_COLORS[2], font: { family: fontFamily, size: 20, weight: '700' } },
            { text: formaOrdered[0] && totalForma > 0 ? `Top: ${formaOrdered[0].label} · ${numberFormatter.format((formaOrdered[0].value / totalForma) * 100)}%` : 'Distribución uniforme', color: withAlpha(textColor, 0.7), font: { family: fontFamily, size: 11, weight: '600' } }
          ]
        : [
            { text: 'Sin datos', color: withAlpha(textColor, 0.65), font: { family: fontFamily, size: 14, weight: '600' } }
          ];

      chartForma = new Chart(ctxForma, {
        type:'doughnut',
        data:{
          labels: formaLabels,
          datasets:[{
            data: formaVals,
            backgroundColor: formaColors.map(c=>withAlpha(c, isDark ? 0.82 : 0.92)),
            borderColor: isDark ? '#0f172a' : '#ffffff',
            borderWidth:1,
            hoverOffset:10,
            spacing: totalForma ? 2 : 0
          }]
        },
        options:{
          ...commonOptions,
          plugins:{
            ...commonOptions.plugins,
            legend:{
              ...commonOptions.plugins.legend,
              position:'bottom'
            },
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = total ? ((context.parsed / total) * 100).toFixed(1) : '0.0';
                  return `${context.label}: ${fmtEUR(context.parsed)} € (${percentage}%)`;
                }
              }
            },
            mbsCenterText: {
              ...commonOptions.plugins.mbsCenterText,
              lines: formaLines
            }
          },
          cutout:'64%'
        }
      });
    } else {
      chartForma = null;
    }

    // 8. Run-rate del mes
const today = new Date();
const dropNeg = excludeNeg && excludeNeg.checked;
const validDates = parsedRows
  .filter(r => r.fecha instanceof Date && !isNaN(r.fecha.getTime()) && (!dropNeg || r.importe >= 0))
  .map(r => r.fecha);

const latestDate = validDates.length ? new Date(Math.max(...validDates.map(d => d.getTime()))) : null;
const targetYear = latestDate ? latestDate.getFullYear() : today.getFullYear();
const targetMonth = latestDate ? latestDate.getMonth() : today.getMonth();
const daysInMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
const daily = Array(daysInMonth).fill(0);
let lastDataDay = 0;

parsedRows.forEach(r=>{
  if (!r.fecha || !(r.fecha instanceof Date) || isNaN(r.fecha.getTime())) return;
  if (dropNeg && r.importe < 0) return;
  if (r.fecha.getFullYear() === targetYear && r.fecha.getMonth() === targetMonth){
    const d = r.fecha.getDate();
    if (d >= 1 && d <= daysInMonth){
      daily[d-1] += (r.importe || 0);
      if (d > lastDataDay) lastDataDay = d;
    }
  }
});

const isCurrentMonth = targetYear === today.getFullYear() && targetMonth === today.getMonth();
const effectiveDay = Math.max(1, Math.min(daysInMonth, isCurrentMonth ? today.getDate() : (lastDataDay || daysInMonth)));
const cum = daily.map((_,i)=>{
  const sum = daily.slice(0, i+1).reduce((a,b)=>a+b,0);
  return +sum.toFixed(2);
});
const mtd = cum[effectiveDay-1] || 0;
const avgDaily = effectiveDay > 0 ? mtd / effectiveDay : 0;
const projFinal = +(avgDaily * daysInMonth).toFixed(2);

const proj = Array.from({length:daysInMonth}, (_,i)=>{
  const dayIndex = i + 1;
  if (dayIndex <= effectiveDay) {
    return cum[i];
  }
  return +(mtd + avgDaily * (dayIndex - effectiveDay)).toFixed(2);
});

const monthFormatter = new Intl.DateTimeFormat('es-ES', {month:'long', year:'numeric'});
const monthLabelRaw = monthFormatter.format(new Date(targetYear, targetMonth, 1));
const monthLabelClean = monthLabelRaw.replace(/\sde\s/gi, ' ');
const monthLabel = monthLabelClean.charAt(0).toUpperCase() + monthLabelClean.slice(1);
lastRenderedPeriod = {year: targetYear, month: targetMonth};

const runrateTitle = $('runrateTitle');
if (runrateTitle) {
  const baseTitleColor = isDark ? '#e2e8f0' : '#0b2542';
  const accentTitleColor = isDark ? '#38bdf8' : (CHART_COLORS[1] || '#3b82f6');
  runrateTitle.innerHTML = `<span style="color:${baseTitleColor}; font-weight:600;">${monthLabel}</span> · <span style="color:${accentTitleColor}; font-weight:600;">MTD ${fmtEUR(mtd)} €</span> · <span style="color:${accentTitleColor}; font-weight:600;">Proyección ${fmtEUR(projFinal)} €</span>`;
}

    if (ctxRun) {
      const runGradient = buildAreaGradient(ctxRun, CHART_COLORS[2]);

      chartRun = new Chart(ctxRun, {
        type:'line',
        data:{
          labels: Array.from({length:daysInMonth},(_,i)=>String(i+1)),
          datasets:[
            {
              label:'Acumulado',
              data:cum,
              borderColor:CHART_COLORS[2],
              backgroundColor: runGradient,
              borderWidth:2.4,
              fill:true,
              tension:.28,
              pointRadius:2,
              pointHoverRadius:4,
              pointBackgroundColor:'#ffffff',
              pointBorderColor:CHART_COLORS[2],
              pointBorderWidth:2
            },
            {
              label:'Proyección',
              data:proj,
              borderColor:CHART_COLORS[3],
              borderWidth:2,
              borderDash:[6,6],
              fill:false,
              tension:.28,
              pointRadius:0,
              pointHoverRadius:2
            }
          ]
        },
        options:{
          ...commonOptions,
          plugins:{
            ...commonOptions.plugins,
            legend:{
              ...commonOptions.plugins.legend,
              position:'bottom'
            },
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  return context.dataset.label + ': ' + fmtEUR(context.parsed.y) + ' €';
                }
              }
            },
            mbsLineCallout:{
              points: [
                {
                  datasetIndex: 0,
                  dataIndex: Math.max(0, Math.min(daysInMonth - 1, effectiveDay - 1)),
                  color: CHART_COLORS[2],
                  dotColor: CHART_COLORS[2],
                  backgroundColor: withAlpha(CHART_COLORS[2], isDark ? 0.32 : 0.2),
                  formatter: () => `MTD ${fmtEUR(mtd)} €`
                },
                {
                  datasetIndex: 1,
                  dataIndex: daysInMonth - 1,
                  color: CHART_COLORS[3],
                  dot: false,
                  backgroundColor: withAlpha(CHART_COLORS[3], isDark ? 0.28 : 0.18),
                  align: 'left',
                  formatter: () => `Proy. ${fmtEUR(projFinal)} €`
                }
              ]
            }
          },
          scales:{
            x:{
              ticks:{
                color:textColor,
                font:commonFont
              },
              grid:{ display:false, drawBorder:false }
            },
            y:{
              beginAtZero:true,
              ticks:{
                color:textColor,
                font:commonFont,
                callback: function(value) {
                  return fmtEUR(value) + ' €';
                }
              },
              grid:{ color:gridColor, borderDash:[4,4], drawBorder:false }
            }
          }
        }
      });
    } else {
      chartRun = null;
    }

    // 9. Calendario de facturación
const calContainer = $('calGrid');
if (calContainer) {
  renderCalendarHeatmap(calContainer, targetYear, targetMonth, daily, monthLabel);
  const calendarPeak = describePeak(daily, daily.map((_, idx)=>idx + 1));
  if (calendarPeak && Number.isFinite(calendarPeak.value) && calendarPeak.value > 0){
    const peakDate = new Date(targetYear, targetMonth, calendarPeak.index + 1);
    const formatted = peakDate.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });
    setChartSummary('calendar', `${formatted}: ${fmtEUR(calendarPeak.value)} €`);
  } else {
    setChartSummary('calendar', 'Sin datos');
  }
}

    // 10. Distribución de gastos
    const gastosData = {
      'Sueldos': 0,
      'Top Doctors': 0,
      'SEM': 0,
      'Recepción': 0,
      'Doctoralia': 0
    };

    function parseNumberFromKPI(text) {
      const clean = text.replace(/[^\d,.-]/g, '');
      
      if (clean.includes('.') && clean.includes(',')) {
        return parseFloat(clean.replace(/\./g, '').replace(',', '.'));
      }
      
      if (clean.includes(',') && !clean.includes('.')) {
        return parseFloat(clean.replace(',', '.'));
      }
      
      if (clean.includes('.') && !clean.includes(',')) {
        const parts = clean.split('.');
        if (parts.length === 2 && parts[1].length <= 2) {
          return parseFloat(clean);
        } else {
          return parseFloat(clean.replace(/\./g, ''));
        }
      }
      
      return parseFloat(clean);
    }

    const sueldosKpi = rentKpiSueldos.textContent;
    const sueldosVal = Math.abs(parseNumberFromKPI(sueldosKpi) || 0);
    gastosData['Sueldos'] = sueldosVal;

    const topDKpi = rentKpiTopD.textContent;
    const topDVal = Math.abs(parseNumberFromKPI(topDKpi) || 0);
    gastosData['Top Doctors'] = topDVal;

    const semKpi = rentKpiSem.textContent;
    const semVal = Math.abs(parseNumberFromKPI(semKpi) || 0);
    gastosData['SEM'] = semVal;

    const recepcionKpi = rentKpiRecepcion.textContent;
    const recepcionVal = Math.abs(parseNumberFromKPI(recepcionKpi) || 0);
    gastosData['Recepción'] = recepcionVal;

    const doctoraliaKpi = rentKpiDoctoralia.textContent;
    const doctoraliaVal = Math.abs(parseNumberFromKPI(doctoraliaKpi) || 0);
    gastosData['Doctoralia'] = doctoraliaVal;

    const gastosEntries = Object.entries(gastosData).filter(([_, value]) => value > 0);
    const gastosLabels = gastosEntries.map(e => e[0]);
    const gastosValues = gastosEntries.map(e => Number(e[1].toFixed(2)));
    const gastosColors = gastosValues.map((_, i) => CHART_COLORS[i % CHART_COLORS.length]);

    if (ctxGastos) {
      const totalGastos = gastosValues.reduce((acc, val) => acc + val, 0);

      chartGastos = new Chart(ctxGastos, {
        type: 'doughnut',
        data: {
          labels: gastosLabels,
          datasets: [{
            data: gastosValues,
            backgroundColor: gastosColors.map(c=>withAlpha(c, isDark ? 0.8 : 0.9)),
            borderColor: isDark ? '#0f172a' : '#ffffff',
            borderWidth: 1,
            hoverOffset: 10
          }]
        },
        options: {
          ...commonOptions,
          plugins: {
            ...commonOptions.plugins,
            legend: {
              ...commonOptions.plugins.legend,
              position: 'bottom'
            },
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = total ? ((context.parsed / total) * 100).toFixed(1) : '0.0';
                  return `${context.label}: ${fmtEUR(context.parsed)} € (${percentage}%)`;
                }
              }
            },
            mbsCenterText: {
              ...commonOptions.plugins.mbsCenterText,
              lines: [
                { text: 'Gastos', color: withAlpha(textColor, 0.72), font: { family: fontFamily, size: 12, weight: '500' } },
                { text: fmtEUR(totalGastos) + ' €', color: CHART_COLORS[5], font: { family: fontFamily, size: 20, weight: '700' } }
              ]
            }
          },
          cutout: '64%'
        }
      });
    } else {
      chartGastos = null;
    }

    // 11. Beneficio neto por especialista
    if (ctxBeneficio) {
      const beneficioData = [];
      const rentRows = rentBody.querySelectorAll('tbody tr');
      
      rentRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 8) {
          const especialista = cells[0].textContent.trim();
          const beneficio = parseEuroOrInt(cells[6].textContent) || 0;
          const margen = cells[7].textContent.trim();
          
          if (especialista && especialista !== 'TOTAL') {
            beneficioData.push({ 
              especialista: `${especialista} (${margen})`,
              beneficio 
            });
          }
        }
      });
      
      beneficioData.sort((a, b) => b.beneficio - a.beneficio);

      const beneficioRecordsAll = beneficioData.map(d => ({
        label: d.especialista,
        value: Number(d.beneficio.toFixed(2))
      }));
      const totalBeneficio = beneficioRecordsAll.reduce((sum, item)=>sum + (item.value || 0), 0);
      const beneficioRecords = limitRecords(beneficioRecordsAll, 'beneficio', { label: 'Otros especialistas' });
      const beneficioLabels = beneficioRecords.map(d => d.label);
      const beneficioValues = beneficioRecords.map(d => d.value);
      const beneficioColors = beneficioValues.map((_, i) => CHART_COLORS[i % CHART_COLORS.length]);

      setChartSummary('beneficio', describeTopShare(beneficioRecordsAll, totalBeneficio, { fallback: 'Sin datos' }));

      if (chartBeneficio) chartBeneficio.destroy();

      const beneficioYAxis = {
        beginAtZero: true,
        grid: { color: gridColor, borderDash: [4, 4], drawBorder: false },
        ticks: {
          font: commonFont,
          color: textColor,
          callback: function(value) {
            return fmtEUR(value) + ' €';
          }
        }
      };
      applyHeadroom(beneficioYAxis, beneficioValues, { ratio: 0.22 });

      chartBeneficio = new Chart(ctxBeneficio, {
        type: 'bar',
        data: {
          labels: beneficioLabels,
          datasets: [{
            label: 'Beneficio Neto (€)',
            data: beneficioValues,
            backgroundColor: beneficioColors.map(c => withAlpha(c, 0.28)),
            hoverBackgroundColor: beneficioColors.map(c => withAlpha(c, 0.42)),
            borderColor: beneficioColors,
            borderWidth: 1.6,
            borderRadius: 10,
            maxBarThickness: 56
          }]
        },
        options: {
          ...commonOptions,
          plugins: {
            ...commonOptions.plugins,
            legend: { display: false },
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const raw = context.parsed.y || 0;
                  const pct = totalBeneficio > 0 ? (raw / totalBeneficio) * 100 : 0;
                  return `${context.dataset.label}: ${fmtEUR(raw)} € (${numberFormatter.format(pct)}%)`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                font: commonFont,
                color: textColor
              }
            },
            y: beneficioYAxis
          }
        }
      });
    } else if (chartBeneficio) {
      chartBeneficio.destroy?.();
      chartBeneficio = null;
    }

    // 12. Margen por especialista
    if (ctxMargen) {
      const margenData = [];
      const rentRows = rentBody.querySelectorAll('tbody tr');
      
      rentRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 8) {
          const especialista = cells[0].textContent.trim();
          const margen = parseEuroOrInt(cells[7].textContent) || 0;
          
          if (especialista && especialista !== 'TOTAL') {
            margenData.push({ 
              especialista, 
              margen 
            });
          }
        }
      });
      
      margenData.sort((a, b) => b.margen - a.margen);
      
      const margenRecordsAll = margenData.map(d => ({
        label: d.especialista,
        value: Number(d.margen.toFixed(1))
      }));
      const margenRecords = limitRecords(margenRecordsAll, 'margen', { allowOthers: false });
      const margenLabels = margenRecords.map(d => d.label);
      const margenValues = margenRecords.map(d => d.value);
      const margenColors = margenValues.map((_, i) => CHART_COLORS[i % CHART_COLORS.length]);

      setChartSummary('margen', describeTopShare(margenRecordsAll, 1, {
        fallback: 'Sin datos',
        formatter: value => numberFormatter.format(value) + '%',
        percent: false
      }));

      if (chartMargen) chartMargen.destroy();

      const margenYAxis = {
        beginAtZero: true,
        grid: { color: gridColor, borderDash: [4, 4], drawBorder: false },
        ticks: {
          font: commonFont,
          color: textColor,
          callback: function(value) {
            return value.toFixed(1) + '%';
          }
        }
      };
      applyHeadroom(margenYAxis, margenValues, { ratio: 0.2, minLift: 5 });

      chartMargen = new Chart(ctxMargen, {
        type: 'bar',
        data: {
          labels: margenLabels,
          datasets: [{
            label: 'Margen (%)',
            data: margenValues,
            backgroundColor: margenColors.map(c => withAlpha(c, 0.28)),
            hoverBackgroundColor: margenColors.map(c => withAlpha(c, 0.42)),
            borderColor: margenColors,
            borderWidth: 1.6,
            borderRadius: 10,
            maxBarThickness: 56
          }]
        },
        options: {
          ...commonOptions,
          plugins: {
            ...commonOptions.plugins,
            legend: { display: false },
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                font: commonFont,
                color: textColor
              }
            },
            y: margenYAxis
          }
        }
      });
    } else if (chartMargen) {
      chartMargen.destroy?.();
      chartMargen = null;
    }

    // 13. Beneficio total por especialidad
    if (ctxBeneficioEspecialidad) {
      const beneficioEspecialidad = {};
      const rentRows = rentBody.querySelectorAll('tbody tr');
      
      rentRows.forEach((row, index) => {
        const cells = row.querySelectorAll('td');
        
        if (cells.length >= 8) {
          const especialista = cells[0].textContent.trim();
          const beneficio = parseEuroOrInt(cells[6].textContent) || 0;
          
          if (especialista && especialista !== 'TOTAL') {
            const especialidad = getEspecialidadFromEspecialista(especialista);
            
            if (!beneficioEspecialidad[especialidad]) {
              beneficioEspecialidad[especialidad] = 0;
            }
            beneficioEspecialidad[especialidad] += beneficio;
          }
        }
      });
      
      const entriesBeneficioEsp = Object.entries(beneficioEspecialidad).sort((a,b)=>b[1] - a[1]);
      const beneficioEspRecordsAll = entriesBeneficioEsp.map(([label, value])=>({
        label,
        value: Number((value || 0).toFixed(2))
      }));
      const totalBeneficioEsp = beneficioEspRecordsAll.reduce((sum, item)=>sum + (item.value || 0), 0);
      const beneficioEspRecords = limitRecords(beneficioEspRecordsAll, 'beneficioEsp', { label: 'Otras especialidades' });
      const labelsBeneficioEsp = beneficioEspRecords.map(item=>item.label);
      const valuesBeneficioEsp = beneficioEspRecords.map(item=>item.value);
      const colorsBeneficioEsp = valuesBeneficioEsp.map((_,i)=>CHART_COLORS[i % CHART_COLORS.length]);

      setChartSummary('beneficioEsp', describeTopShare(beneficioEspRecordsAll, totalBeneficioEsp, { fallback: 'Sin datos' }));

      if (chartBeneficioEspecialidad) chartBeneficioEspecialidad.destroy();

      const beneficioEspYAxis = {
        beginAtZero: true,
        grid: { color: gridColor, borderDash: [4, 4], drawBorder: false },
        ticks: {
          font: commonFont,
          color: textColor,
          callback: function(value) {
            return fmtEUR(value) + ' €';
          }
        }
      };
      applyHeadroom(beneficioEspYAxis, valuesBeneficioEsp, { ratio: 0.22 });

      chartBeneficioEspecialidad = new Chart(ctxBeneficioEspecialidad, {
        type: 'bar',
        data: {
          labels: labelsBeneficioEsp,
          datasets: [{
            label: 'Beneficio Total (€)',
            data: valuesBeneficioEsp,
            backgroundColor: colorsBeneficioEsp.map(c => withAlpha(c, 0.28)),
            hoverBackgroundColor: colorsBeneficioEsp.map(c => withAlpha(c, 0.42)),
            borderColor: colorsBeneficioEsp,
            borderWidth: 1.6,
            borderRadius: 10,
            maxBarThickness: 56
          }]
        },
        options: {
          ...commonOptions,
          plugins: {
            ...commonOptions.plugins,
            legend: { display: false },
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const raw = context.parsed.y || 0;
                  const pct = totalBeneficioEsp > 0 ? (raw / totalBeneficioEsp) * 100 : 0;
                  return `${context.dataset.label}: ${fmtEUR(raw)} € (${numberFormatter.format(pct)}%)`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                font: commonFont,
                color: textColor
              }
            },
            y: beneficioEspYAxis
          }
        }
      });
    } else if (chartBeneficioEspecialidad) {
      chartBeneficioEspecialidad.destroy?.();
      chartBeneficioEspecialidad = null;
    }

    // 14. Margen por especialidad
    if (ctxMargenEspecialidad) {
      const margenEspecialidad = {};
      const rentRows = rentBody.querySelectorAll('tbody tr');
      
      rentRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 8) {
          const especialista = cells[0].textContent.trim();
          const facturado = parseEuroOrInt(cells[1].textContent) || 0;
          const beneficio = parseEuroOrInt(cells[6].textContent) || 0;
          
          if (especialista && especialista !== 'TOTAL' && facturado > 0) {
            const especialidad = getEspecialidadFromEspecialista(especialista);
            const margen = (beneficio / facturado) * 100;
            
            if (!margenEspecialidad[especialidad]) {
              margenEspecialidad[especialidad] = { totalBeneficio: 0, totalFacturado: 0 };
            }
            margenEspecialidad[especialidad].totalBeneficio += beneficio;
            margenEspecialidad[especialidad].totalFacturado += facturado;
          }
        }
      });
      
      const entriesMargenEsp = Object.entries(margenEspecialidad).map(([esp, data]) => ({
        especialidad: esp,
        margen: data.totalFacturado > 0 ? (data.totalBeneficio / data.totalFacturado) * 100 : 0
      })).sort((a,b)=>b.margen - a.margen);

      const margenEspRecordsAll = entriesMargenEsp.map(item => ({
        label: item.especialidad,
        value: Number(item.margen.toFixed(1))
      }));
      const margenEspRecords = limitRecords(margenEspRecordsAll, 'margenEsp', { allowOthers: false });
      const labelsMargenEsp = margenEspRecords.map(item=>item.label);
      const valuesMargenEsp = margenEspRecords.map(item=>item.value);
      const colorsMargenEsp = valuesMargenEsp.map((_,i)=>CHART_COLORS[i % CHART_COLORS.length]);

      setChartSummary('margenEsp', describeTopShare(margenEspRecordsAll, 1, {
        fallback: 'Sin datos',
        formatter: value => numberFormatter.format(value) + '%',
        percent: false
      }));

      if (chartMargenEspecialidad) chartMargenEspecialidad.destroy();

      const margenEspYAxis = {
        beginAtZero: true,
        grid: { color: gridColor, borderDash: [4, 4], drawBorder: false },
        ticks: {
          font: commonFont,
          color: textColor,
          callback: function(value) {
            return value.toFixed(1) + '%';
          }
        }
      };
      applyHeadroom(margenEspYAxis, valuesMargenEsp, { ratio: 0.2, minLift: 5 });

      chartMargenEspecialidad = new Chart(ctxMargenEspecialidad, {
        type: 'bar',
        data: {
          labels: labelsMargenEsp,
          datasets: [{
            label: 'Margen (%)',
            data: valuesMargenEsp,
            backgroundColor: colorsMargenEsp.map(c => withAlpha(c, 0.28)),
            hoverBackgroundColor: colorsMargenEsp.map(c => withAlpha(c, 0.42)),
            borderColor: colorsMargenEsp,
            borderWidth: 1.6,
            borderRadius: 10,
            maxBarThickness: 56
          }]
        },
        options: {
          ...commonOptions,
          plugins: {
            ...commonOptions.plugins,
            legend: { display: false },
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                font: commonFont,
                color: textColor
              }
            },
            y: margenEspYAxis
          }
        }
      });
    } else if (chartMargenEspecialidad) {
      chartMargenEspecialidad.destroy?.();
      chartMargenEspecialidad = null;
    }

    // 15. Stacked Bar Chart: Facturación vs Costes vs Beneficio
    if (ctxStacked) {
      const stackedData = [];
      const rentRows = rentBody.querySelectorAll('tbody tr');
      
      rentRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 8) {
          const especialista = cells[0].textContent.trim();
          const facturado = parseEuroOrInt(cells[1].textContent) || 0;
          const costes = Math.abs(parseEuroOrInt(cells[2].textContent) || 0);
          const topd = Math.abs(parseEuroOrInt(cells[3].textContent) || 0);
          const sem = Math.abs(parseEuroOrInt(cells[4].textContent) || 0);
          const recepcion = Math.abs(parseEuroOrInt(cells[5].textContent) || 0);
          const beneficio = parseEuroOrInt(cells[6].textContent) || 0;
          
          if (especialista && especialista !== 'TOTAL') {
            const costesTotal = costes + topd + sem + recepcion;
            stackedData.push({
              especialista,
              facturado,
              costes: costesTotal,
              beneficio: Math.max(0, beneficio)
            });
          }
        }
      });
      
      stackedData.sort((a,b)=>b.facturado - a.facturado);

      const stackedRecordsAll = stackedData.map(d => ({
        label: d.especialista,
        value: Number(d.facturado.toFixed(2)),
        facturado: Number(d.facturado.toFixed(2)),
        costes: Number(d.costes.toFixed(2)),
        beneficio: Number(d.beneficio.toFixed(2))
      }));
      const totalStacked = stackedRecordsAll.reduce((sum, item)=>sum + (item.value || 0), 0);
      const stackedRecords = limitCompositeRecords(stackedRecordsAll, 'stacked', { label: 'Otros especialistas' });
      const stackedLabels = stackedRecords.map(d => d.label);
      const facturadoValues = stackedRecords.map(d => {
        const val = d.facturado != null ? d.facturado : d.value;
        const numeric = Number.isFinite(val) ? Number(val) : 0;
        return Number(numeric.toFixed(2));
      });
      const costesValues = stackedRecords.map(d => {
        const numeric = Number.isFinite(d.costes) ? Number(d.costes) : 0;
        return Number(numeric.toFixed(2));
      });
      const beneficioValues = stackedRecords.map(d => {
        const numeric = Number.isFinite(d.beneficio) ? Number(d.beneficio) : 0;
        return Number(numeric.toFixed(2));
      });

      setChartSummary('stacked', describeTopShare(stackedRecordsAll, totalStacked, { fallback: 'Sin datos' }));

      if (chartStacked) chartStacked.destroy();

      const stackedAllValues = [...facturadoValues, ...costesValues, ...beneficioValues];
      const stackedYAxis = {
        beginAtZero: true,
        grid: { color: gridColor, borderDash: [4, 4], drawBorder: false },
        ticks: {
          font: commonFont,
          color: textColor,
          callback: function(value) {
            return fmtEUR(value) + ' €';
          }
        }
      };
      applyHeadroom(stackedYAxis, stackedAllValues, { ratio: 0.22 });

      chartStacked = new Chart(ctxStacked, {
        type: 'bar',
        data: {
          labels: stackedLabels,
          datasets: [
            {
              label: 'Facturación (€)',
              data: facturadoValues,
              backgroundColor: withAlpha(CHART_COLORS[0], 0.35),
              borderColor: CHART_COLORS[0],
              borderWidth: 1.6,
              borderRadius: 8,
              maxBarThickness: 56
            },
            {
              label: 'Costes (€)',
              data: costesValues,
              backgroundColor: withAlpha(CHART_COLORS[4], 0.35),
              borderColor: CHART_COLORS[4],
              borderWidth: 1.6,
              borderRadius: 8,
              maxBarThickness: 56
            },
            {
              label: 'Beneficio (€)',
              data: beneficioValues,
              backgroundColor: withAlpha(CHART_COLORS[5], 0.35),
              borderColor: CHART_COLORS[5],
              borderWidth: 1.6,
              borderRadius: 8,
              maxBarThickness: 56
            }
          ]
        },
        options: {
          ...commonOptions,
          plugins: {
            ...commonOptions.plugins,
            legend: {
              ...commonOptions.plugins.legend,
              position: 'bottom'
            },
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const raw = context.parsed.y || 0;
                  if (context.datasetIndex === 0){
                    const pct = totalStacked > 0 ? (raw / totalStacked) * 100 : 0;
                    return `${context.dataset.label}: ${fmtEUR(raw)} € (${numberFormatter.format(pct)}%)`;
                  }
                  return context.dataset.label + ': ' + fmtEUR(raw) + ' €';
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                font: commonFont,
                color: textColor
              }
            },
            y: stackedYAxis
          }
        }
      });
    } else if (chartStacked) {
      chartStacked.destroy?.();
      chartStacked = null;
    }

      // 16. Stacked Bar Chart por especialidad
const ctxStackedEspecialidad = $('chartStackedEspecialidad')?.getContext('2d');
if (ctxStackedEspecialidad) {
  const stackedEspecialidadData = {};
  const rentRows = rentBody.querySelectorAll('tbody tr');
  
  rentRows.forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length >= 8) {
      const especialista = cells[0].textContent.trim();
      const facturado = parseEuroOrInt(cells[1].textContent) || 0;
      const costes = Math.abs(parseEuroOrInt(cells[2].textContent) || 0);
      const topd = Math.abs(parseEuroOrInt(cells[3].textContent) || 0);
      const sem = Math.abs(parseEuroOrInt(cells[4].textContent) || 0);
      const recepcion = Math.abs(parseEuroOrInt(cells[5].textContent) || 0);
      const beneficio = parseEuroOrInt(cells[6].textContent) || 0;
      
      if (especialista && especialista !== 'TOTAL') {
        const especialidad = getEspecialidadFromEspecialista(especialista);
        const costesTotal = costes + topd + sem + recepcion;
        
        if (!stackedEspecialidadData[especialidad]) {
          stackedEspecialidadData[especialidad] = {
            facturado: 0,
            costes: 0,
            beneficio: 0
          };
        }
        
        stackedEspecialidadData[especialidad].facturado += facturado;
        stackedEspecialidadData[especialidad].costes += costesTotal;
        stackedEspecialidadData[especialidad].beneficio += Math.max(0, beneficio);
      }
    }
  });
  
  const entriesStackedEsp = Object.entries(stackedEspecialidadData).sort((a,b)=>b[1].facturado - a[1].facturado);
  const stackedEspRecordsAll = entriesStackedEsp.map(([label, values])=>({
    label,
    value: Number(values.facturado.toFixed(2)),
    facturado: Number(values.facturado.toFixed(2)),
    costes: Number(values.costes.toFixed(2)),
    beneficio: Number(values.beneficio.toFixed(2))
  }));
  const totalStackedEsp = stackedEspRecordsAll.reduce((sum, item)=>sum + (item.value || 0), 0);
  const stackedEspRecords = limitCompositeRecords(stackedEspRecordsAll, 'stackedEsp', { label: 'Otras especialidades' });
  const labelsStackedEsp = stackedEspRecords.map(item=>item.label);
  const facturadoValuesEsp = stackedEspRecords.map(item => {
    const val = item.facturado != null ? item.facturado : item.value;
    const numeric = Number.isFinite(val) ? Number(val) : 0;
    return Number(numeric.toFixed(2));
  });
  const costesValuesEsp = stackedEspRecords.map(item => {
    const numeric = Number.isFinite(item.costes) ? Number(item.costes) : 0;
    return Number(numeric.toFixed(2));
  });
  const beneficioValuesEsp = stackedEspRecords.map(item => {
    const numeric = Number.isFinite(item.beneficio) ? Number(item.beneficio) : 0;
    return Number(numeric.toFixed(2));
  });

  setChartSummary('stackedEsp', describeTopShare(stackedEspRecordsAll, totalStackedEsp, { fallback: 'Sin datos' }));

  if (chartStackedEspecialidad) chartStackedEspecialidad.destroy();

  const stackedEspAllValues = [...facturadoValuesEsp, ...costesValuesEsp, ...beneficioValuesEsp];
  const stackedEspYAxis = {
    beginAtZero: true,
    grid: { color: gridColor, borderDash: [4, 4], drawBorder: false },
    ticks: {
      font: commonFont,
      color: textColor,
      callback: function(value) {
        return fmtEUR(value) + ' €';
      }
    }
  };
  applyHeadroom(stackedEspYAxis, stackedEspAllValues, { ratio: 0.22 });

  chartStackedEspecialidad = new Chart(ctxStackedEspecialidad, {
    type: 'bar',
    data: {
      labels: labelsStackedEsp,
      datasets: [
        {
          label: 'Facturación (€)',
          data: facturadoValuesEsp,
          backgroundColor: withAlpha(CHART_COLORS[0], 0.35),
          borderColor: CHART_COLORS[0],
          borderWidth: 1.6,
          borderRadius: 8,
          maxBarThickness: 56
        },
        {
          label: 'Costes (€)',
          data: costesValuesEsp,
          backgroundColor: withAlpha(CHART_COLORS[4], 0.35),
          borderColor: CHART_COLORS[4],
          borderWidth: 1.6,
          borderRadius: 8,
          maxBarThickness: 56
        },
        {
          label: 'Beneficio (€)',
          data: beneficioValuesEsp,
          backgroundColor: withAlpha(CHART_COLORS[5], 0.35),
          borderColor: CHART_COLORS[5],
          borderWidth: 1.6,
          borderRadius: 8,
          maxBarThickness: 56
        }
      ]
    },
    options: {
      ...commonOptions,
      plugins: {
        ...commonOptions.plugins,
        legend: {
          ...commonOptions.plugins.legend,
          position: 'bottom'
        },
        tooltip: {
          ...commonOptions.plugins.tooltip,
          callbacks: {
            label: function(context) {
              const raw = context.parsed.y || 0;
              if (context.datasetIndex === 0){
                const pct = totalStackedEsp > 0 ? (raw / totalStackedEsp) * 100 : 0;
                return `${context.dataset.label}: ${fmtEUR(raw)} € (${numberFormatter.format(pct)}%)`;
              }
              return context.dataset.label + ': ' + fmtEUR(raw) + ' €';
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false, drawBorder: false },
          ticks: {
            autoSkip: false,
            maxRotation: 45,
            font: commonFont,
            color: textColor
          }
        },
        y: stackedEspYAxis
      }
    }
  });
} else if (chartStackedEspecialidad) {
  chartStackedEspecialidad.destroy?.();
  chartStackedEspecialidad = null;
}

    // 17. Gastos por especialista
    const ctxGastosEspecialista = $('chartGastosEspecialista')?.getContext('2d');
    if (ctxGastosEspecialista) {
      const gastosEspecialistaData = [];
      const rentRows = rentBody.querySelectorAll('tbody tr');
      
      rentRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 8) {
          const especialista = cells[0].textContent.trim();
          const costes = Math.abs(parseEuroOrInt(cells[2].textContent) || 0);
          const topd = Math.abs(parseEuroOrInt(cells[3].textContent) || 0);
          const sem = Math.abs(parseEuroOrInt(cells[4].textContent) || 0);
          const recepcion = Math.abs(parseEuroOrInt(cells[5].textContent) || 0);
          
          if (especialista && especialista !== 'TOTAL') {
            const gastosTotal = costes + topd + sem + recepcion;
            gastosEspecialistaData.push({
              especialista,
              gastos: gastosTotal
            });
          }
        }
      });
      
      gastosEspecialistaData.sort((a,b)=>b.gastos - a.gastos);

      const gastosEspRecordsAll = gastosEspecialistaData.map(d => ({
        label: d.especialista,
        value: Number(d.gastos.toFixed(2))
      }));
      const totalGastosEsp = gastosEspRecordsAll.reduce((sum, item)=>sum + (item.value || 0), 0);
      const gastosEspRecords = limitRecords(gastosEspRecordsAll, 'gastosEsp', { label: 'Otros especialistas' });
      const gastosEspLabels = gastosEspRecords.map(d => d.label);
      const gastosEspValues = gastosEspRecords.map(d => d.value);
      const gastosEspColors = gastosEspValues.map((_,i)=>CHART_COLORS[i % CHART_COLORS.length]);

      setChartSummary('gastosEsp', describeTopShare(gastosEspRecordsAll, totalGastosEsp, { fallback: 'Sin datos' }));
      
      if (chartGastosEspecialista) chartGastosEspecialista.destroy();

      const gastosEspYAxis = {
        beginAtZero: true,
        grid: { color: gridColor, borderDash: [4, 4], drawBorder: false },
        ticks: {
          font: commonFont,
          color: textColor,
          callback: function(value) {
            return fmtEUR(value) + ' €';
          }
        }
      };
      applyHeadroom(gastosEspYAxis, gastosEspValues, { ratio: 0.22 });

      chartGastosEspecialista = new Chart(ctxGastosEspecialista, {
        type: 'bar',
        data: {
          labels: gastosEspLabels,
          datasets: [{
            label: 'Gastos (€)',
            data: gastosEspValues,
            backgroundColor: gastosEspColors.map(c => withAlpha(c, 0.28)),
            hoverBackgroundColor: gastosEspColors.map(c => withAlpha(c, 0.42)),
            borderColor: gastosEspColors,
            borderWidth: 1.6,
            borderRadius: 10,
            maxBarThickness: 56
          }]
        },
        options: {
          ...commonOptions,
          plugins: {
            ...commonOptions.plugins,
            legend: { display: false },
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const raw = context.parsed.y || 0;
                  const pct = totalGastosEsp > 0 ? (raw / totalGastosEsp) * 100 : 0;
                  return `${context.dataset.label}: ${fmtEUR(raw)} € (${numberFormatter.format(pct)}%)`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                font: commonFont,
                color: textColor
              }
            },
            y: gastosEspYAxis
          }
        }
      });
    } else if (chartGastosEspecialista) {
      chartGastosEspecialista.destroy?.();
      chartGastosEspecialista = null;
    }

    // 18. Gastos por especialidad
    const ctxGastosEspecialidad = $('chartGastosEspecialidad')?.getContext('2d');
    if (ctxGastosEspecialidad) {
      const gastosEspecialidadData = {};
      const rentRows = rentBody.querySelectorAll('tbody tr');
      
      rentRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 8) {
          const especialista = cells[0].textContent.trim();
          const costes = Math.abs(parseEuroOrInt(cells[2].textContent) || 0);
          const topd = Math.abs(parseEuroOrInt(cells[3].textContent) || 0);
          const sem = Math.abs(parseEuroOrInt(cells[4].textContent) || 0);
          const recepcion = Math.abs(parseEuroOrInt(cells[5].textContent) || 0);
          
          if (especialista && especialista !== 'TOTAL') {
            const especialidad = getEspecialidadFromEspecialista(especialista);
            const gastosTotal = costes + topd + sem + recepcion;
            
            if (!gastosEspecialidadData[especialidad]) {
              gastosEspecialidadData[especialidad] = 0;
            }
            gastosEspecialidadData[especialidad] += gastosTotal;
          }
        }
      });
      
      const entriesGastosEsp = Object.entries(gastosEspecialidadData).sort((a,b)=>b[1] - a[1]);
      const gastosEspecialidadRecordsAll = entriesGastosEsp.map(([label, value])=>({
        label,
        value: Number((value || 0).toFixed(2))
      }));
      const totalGastosEspecialidad = gastosEspecialidadRecordsAll.reduce((sum, item)=>sum + (item.value || 0), 0);
      const gastosEspecialidadRecords = limitRecords(gastosEspecialidadRecordsAll, 'gastosEspecialidad', { label: 'Otras especialidades' });
      const labelsGastosEsp = gastosEspecialidadRecords.map(item=>item.label);
      const valuesGastosEsp = gastosEspecialidadRecords.map(item=>item.value);
      const colorsGastosEsp = valuesGastosEsp.map((_,i)=>CHART_COLORS[i % CHART_COLORS.length]);

      setChartSummary('gastosEspecialidad', describeTopShare(gastosEspecialidadRecordsAll, totalGastosEspecialidad, { fallback: 'Sin datos' }));
      
      if (chartGastosEspecialidad) chartGastosEspecialidad.destroy();
      
      chartGastosEspecialidad = new Chart(ctxGastosEspecialidad, {
        type: 'bar',
        data: {
          labels: labelsGastosEsp,
          datasets: [{
            label: 'Gastos (€)',
            data: valuesGastosEsp,
            backgroundColor: colorsGastosEsp.map(c => withAlpha(c, 0.28)),
            hoverBackgroundColor: colorsGastosEsp.map(c => withAlpha(c, 0.42)),
            borderColor: colorsGastosEsp,
            borderWidth: 1.6,
            borderRadius: 10,
            maxBarThickness: 56
          }]
        },
        options: {
          ...commonOptions,
          plugins: {
            ...commonOptions.plugins,
            legend: { display: false },
            tooltip: {
              ...commonOptions.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const raw = context.parsed.y || 0;
                  const pct = totalGastosEspecialidad > 0 ? (raw / totalGastosEspecialidad) * 100 : 0;
                  return `${context.dataset.label}: ${fmtEUR(raw)} € (${numberFormatter.format(pct)}%)`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                font: commonFont,
                color: textColor
              }
            },
            y: {
              beginAtZero: true,
              grid: { color: gridColor, borderDash: [4, 4], drawBorder: false },
              ticks: {
                font: commonFont,
                color: textColor,
                callback: function(value) {
                  return fmtEUR(value) + ' €';
                }
              }
            }
          }
        }
      });
    } else if (chartGastosEspecialidad) {
      chartGastosEspecialidad.destroy?.();
      chartGastosEspecialidad = null;
    }

  } catch(e){
    console.error('Error rendering charts:', e);
  }
}

    // Función para etiquetas multilínea
    function wrapLabel(str, maxLen){
      const s = String(str||''); 
      const m = maxLen || 14;
      if (s.length <= m) return s;
      const out=[]; 
      let i=0;
      while(i<s.length){ 
        out.push(s.slice(i, i+m)); 
        i+=m; 
      }
      return out;
    }

    // Función para el calendario
function renderCalendarHeatmap(container, year, monthIndex, dailyValues, monthLabel){
  if (!container) return;
  container.innerHTML='';
  container.classList.add('mbs-cal-wrapper');

  const header = document.createElement('div');
  header.className = 'mbs-cal-header';
  const label = monthLabel || new Intl.DateTimeFormat('es-ES', {month:'long', year:'numeric'}).format(new Date(year, monthIndex, 1));
  header.textContent = label.charAt(0).toUpperCase() + label.slice(1);
  container.appendChild(header);

  const weekdays = ['L','M','X','J','V','S','D'];
  const weekdaysRow = document.createElement('div');
  weekdaysRow.className = 'mbs-cal-weekdays';
  weekdays.forEach(dow=>{
    const cell = document.createElement('div');
    cell.textContent = dow;
    weekdaysRow.appendChild(cell);
  });
  container.appendChild(weekdaysRow);

  const first = new Date(year, monthIndex, 1);
  const startDow = (first.getDay()+6)%7; // 0=Mon
  const daysInMonth = new Date(year, monthIndex+1, 0).getDate();
  const maxVal = Math.max(1, ...dailyValues);
  const topValue = Math.max(...dailyValues, 0);

  function colorFor(v){
    if (v <= 0) return 'rgba(238,245,255,0.35)';
    const t = Math.min(1, v/maxVal);
    const r = 59, g = 130, b = 246;
    const a = 0.25 + 0.65*t;
    return `rgba(${r},${g},${b},${a})`;
  }

  const grid = document.createElement('div');
  grid.className = 'mbs-cal-grid';

  for (let i = 0; i < 42; i++) {
    const dayIndex = i - startDow + 1;
    const cell = document.createElement('div');
    cell.className = 'day';

    if (dayIndex >= 1 && dayIndex <= daysInMonth) {
      const v = dailyValues[dayIndex-1] || 0;
      cell.innerHTML = `
        <div class="date">${dayIndex}</div>
        <div class="amount">${fmtEUR(v)}€</div>
      `;
      cell.style.background = colorFor(v);
      cell.style.borderColor = v > 0 ? 'rgba(37,99,235,.55)' : 'rgba(37,99,235,.18)';
      cell.title = `${String(dayIndex).padStart(2,'0')}/${String(monthIndex+1).padStart(2,'0')}/${year}: ${fmtEUR(v)} €`;
      if (v > 0) cell.classList.add('has-data');
      if (v === topValue && v > 0) cell.style.boxShadow = '0 0 0 2px rgba(37,99,235,0.45)';
    } else {
      cell.classList.add('muted');
    }

    grid.appendChild(cell);
  }

  container.appendChild(grid);
}

    function formatSnapshotLabel(snapshot){
      if (!snapshot || typeof snapshot !== 'object') return 'Periodo';
      if (snapshot.label && snapshot.label.trim()) return snapshot.label.trim();
      const date = snapshot.createdAt ? new Date(snapshot.createdAt) : null;
      if (date && !isNaN(date.getTime())){
        const formatter = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' });
        const raw = formatter.format(date).replace(/\sde\s/gi, ' ');
        return raw.charAt(0).toUpperCase() + raw.slice(1);
      }
      return 'Periodo';
    }

    function updateEvolutionEmptyState(){
      if (!evoEmptyState || !evoChartsContainer) return;
      const hasData = Array.isArray(evoActiveSnapshots) && evoActiveSnapshots.length > 0;
      evoEmptyState.style.display = hasData ? 'none' : '';
      evoChartsContainer.style.display = hasData ? '' : 'none';
      if (evoKpiContainer && !hasData){
        evoKpiContainer.style.display = 'none';
      }
    }

    function destroyEvolutionCharts(){
      [evoChartBase, evoChartMix, evoChartDelta, evoChartSpecialists, evoChartBonos].forEach(chart => {
        if (chart && typeof chart.destroy === 'function'){
          try { chart.destroy(); } catch(_){ }
        }
      });
      evoChartBase = null;
      evoChartMix = null;
      evoChartDelta = null;
      evoChartSpecialists = null;
      evoChartBonos = null;
    }

    function renderEvolutionSavedOptions(){
      if (!evoSavedSelect) return;
      const selectedIds = new Set((evoActiveSnapshots || []).map(item => item && item.id).filter(Boolean));
      evoSavedSelect.innerHTML = '';
      evolutionSnapshots.forEach(snapshot => {
        if (!snapshot) return;
        const option = document.createElement('option');
        option.value = snapshot.id;
        option.textContent = formatSnapshotLabel(snapshot);
        option.selected = selectedIds.has(snapshot.id);
        evoSavedSelect.appendChild(option);
      });
    }

    function renderEvolutionActiveChips(){
      if (!evoActiveContainer) return;
      evoActiveContainer.innerHTML = '';
      if (!Array.isArray(evoActiveSnapshots) || !evoActiveSnapshots.length){
        const placeholder = document.createElement('span');
        placeholder.className = 'mbs-help';
        placeholder.textContent = 'Sin periodos seleccionados.';
        evoActiveContainer.appendChild(placeholder);
        return;
      }
      evoActiveSnapshots.forEach(snapshot => {
        if (!snapshot) return;
        const chip = document.createElement('span');
        chip.className = 'mbs-evo-chip';
        const label = document.createElement('span');
        label.textContent = formatSnapshotLabel(snapshot);
        const value = document.createElement('span');
        value.style.fontWeight = '700';
        value.textContent = fmtEUR(Number(snapshot?.totals?.bruto) || 0) + ' €';
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.innerHTML = '&times;';
        remove.setAttribute('aria-label', `Quitar ${label.textContent}`);
        remove.addEventListener('click', ()=>{
          removeEvolutionSnapshot(snapshot.id);
        });
        chip.appendChild(label);
        chip.appendChild(value);
        chip.appendChild(remove);
        evoActiveContainer.appendChild(chip);
      });
    }

    function updateEvolutionKpis(snapshots){
      if (!evoKpiContainer) return;
      if (!Array.isArray(snapshots) || !snapshots.length){
        evoKpiContainer.style.display = 'none';
        return;
      }

      const sorted = [...snapshots].sort((a, b)=>{
        const da = new Date(a?.createdAt || 0).getTime();
        const db = new Date(b?.createdAt || 0).getTime();
        return da - db;
      });

      const totals = sorted.map(item => Number(item?.totals?.bruto) || 0);
      const count = totals.length;
      const sum = totals.reduce((acc, value)=> acc + value, 0);

      const formatSignedPercent = (value)=>{
        const numeric = Number(value) || 0;
        const formatted = evoPercentFormatter.format(Math.abs(numeric));
        const sign = numeric > 0 ? '+' : numeric < 0 ? '−' : '';
        return `${sign}${formatted} %`;
      };

      if (evoKpiValues.total) evoKpiValues.total.textContent = fmtEUR(sum) + ' €';
      if (evoKpiHints.total) evoKpiHints.total.textContent = count === 1 ? '1 periodo activo' : `${count} periodos activos`;

      const average = count ? sum / count : 0;
      if (evoKpiValues.average) evoKpiValues.average.textContent = fmtEUR(average) + ' €';
      if (evoKpiHints.average) evoKpiHints.average.textContent = 'Promedio simple de los periodos seleccionados.';

      const firstValue = totals[0] || 0;
      const lastValue = totals[totals.length - 1] || 0;
      const growthValue = lastValue - firstValue;
      let growthPct = 0;
      if (Math.abs(firstValue) > 1e-6){
        growthPct = (growthValue / firstValue) * 100;
      } else if (Math.abs(lastValue) > 1e-6){
        growthPct = growthValue > 0 ? 100 : (growthValue < 0 ? -100 : 0);
      }

      if (evoKpiValues.trend) evoKpiValues.trend.textContent = formatSignedPercent(growthPct);
      if (evoTrendCard){
        const trendState = growthValue > 1 ? 'up' : growthValue < -1 ? 'down' : 'flat';
        evoTrendCard.dataset.trend = trendState;
      }
      if (evoKpiHints.trend){
        const firstLabel = formatSnapshotLabel(sorted[0]);
        const lastLabel = formatSnapshotLabel(sorted[sorted.length - 1]);
        const diffLabel = fmtEUR(growthValue) + ' €';
        evoKpiHints.trend.textContent = `${diffLabel} de ${firstLabel} a ${lastLabel}.`;
      }

      let bestIndex = 0;
      let bestValue = totals[0];
      totals.forEach((value, index)=>{
        if (index === 0){
          bestValue = value;
          bestIndex = 0;
          return;
        }
        if (value > bestValue){
          bestValue = value;
          bestIndex = index;
        }
      });

      const bestSnapshot = sorted[bestIndex];
      if (evoKpiValues.best) evoKpiValues.best.textContent = formatSnapshotLabel(bestSnapshot);
      if (evoKpiBadgeBest) evoKpiBadgeBest.textContent = fmtEUR(bestValue) + ' €';
      if (evoKpiTextBest){
        if (average > 0){
          const diffVsAvg = ((bestValue - average) / average) * 100;
          evoKpiTextBest.textContent = `${formatSignedPercent(diffVsAvg)} vs. media`;
        } else {
          evoKpiTextBest.textContent = 'Mayor facturación';
        }
      }

      evoKpiContainer.style.display = '';
    }

    function removeEvolutionSnapshot(id){
      if (!id) return;
      const remaining = (evoActiveSnapshots || []).filter(item => item && item.id !== id);
      setActiveEvolutionSnapshots(remaining);
    }

    function syncEvolutionSelection(){
      if (!evoSavedSelect) return;
      const activeIds = new Set((evoActiveSnapshots || []).filter(item => item && item.source !== 'csv-upload').map(item => item.id));
      Array.from(evoSavedSelect.options).forEach(option => {
        option.selected = activeIds.has(option.value);
      });
    }

    function setActiveEvolutionSnapshots(list){
      const unique = [];
      const seen = new Set();
      (list || []).forEach(item => {
        if (!item || !item.id) return;
        if (seen.has(item.id)) return;
        seen.add(item.id);
        unique.push(item);
      });
      evoActiveSnapshots = unique.slice(0, 6);
      renderEvolutionActiveChips();
      renderEvolutionSavedOptions();
      renderEvolutionCharts();
      updateEvolutionEmptyState();
      const activeIds = new Set((evoActiveSnapshots || []).map(item => item && item.id).filter(Boolean));
      if (evoRangeSnapshots.primary && !activeIds.has(evoRangeSnapshots.primary.id)){
        evoRangeSnapshots.primary = null;
      }
      if (evoRangeSnapshots.comparison && !activeIds.has(evoRangeSnapshots.comparison.id)){
        evoRangeSnapshots.comparison = null;
      }
      updateComparisonSummary(evoRangeSnapshots.primary, evoRangeSnapshots.comparison);
    }

    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    const evoDateFormatter = new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });
    const evoMonthFormatter = new Intl.DateTimeFormat('es-ES', { month: 'short', year: 'numeric', timeZone: 'UTC' });

    function formatDateForInput(date){
      if (!date || !(date instanceof Date) || isNaN(date.getTime())) return '';
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, '0');
      const day = String(date.getUTCDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    function parseInputDay(value){
      if (!value) return null;
      const parts = value.split('-').map(Number);
      if (parts.length !== 3) return null;
      const [year, month, day] = parts;
      if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) return null;
      if (month < 1 || month > 12 || day < 1 || day > 31) return null;
      return new Date(Date.UTC(year, month - 1, day));
    }

    function formatDateDisplay(date){
      if (!date) return '';
      const raw = evoDateFormatter.format(date).replace(/\sde\s/gi, ' ');
      return raw.charAt(0).toUpperCase() + raw.slice(1);
    }

    function formatRangeLabelFromDays(startDay, endDay){
      if (startDay && endDay){
        const sameYear = startDay.getUTCFullYear() === endDay.getUTCFullYear();
        const sameMonth = sameYear && startDay.getUTCMonth() === endDay.getUTCMonth();
        if (sameMonth){
          const monthRaw = evoMonthFormatter.format(endDay).replace(/\sde\s/gi, ' ');
          const monthLabel = monthRaw.charAt(0).toUpperCase() + monthRaw.slice(1);
          const startDayStr = String(startDay.getUTCDate()).padStart(2, '0');
          const endDayStr = String(endDay.getUTCDate()).padStart(2, '0');
          return `${startDayStr}–${endDayStr} ${monthLabel}`;
        }
        return `${formatDateDisplay(startDay)} · ${formatDateDisplay(endDay)}`;
      }
      if (startDay) return `Desde ${formatDateDisplay(startDay)}`;
      if (endDay) return `Hasta ${formatDateDisplay(endDay)}`;
      return 'Periodo personalizado';
    }

    function buildRangeMeta(range){
      if (!range || !range.startDay || !range.endDay) return '';
      const days = Math.max(1, range.days || Math.floor((range.endDay - range.startDay) / MS_PER_DAY) + 1);
      const label = range.label || formatRangeLabelFromDays(range.startDay, range.endDay);
      const dayLabel = days === 1 ? 'día' : 'días';
      return `${label} · ${days} ${dayLabel}`;
    }

    function resolveRangeInputs(startInput, endInput, { requireComplete = true, silent = false } = {}){
      const startValue = startInput?.value?.trim() || '';
      const endValue = endInput?.value?.trim() || '';
      const startDay = parseInputDay(startValue);
      const endDay = parseInputDay(endValue);
      if (requireComplete && (!startDay || !endDay)){
        if (!silent) alert('Selecciona fecha de inicio y fin para el periodo.');
        return null;
      }
      if (startDay && endDay && startDay.getTime() > endDay.getTime()){
        if (!silent) alert('La fecha inicial debe ser anterior o igual a la final.');
        return null;
      }
      const range = {
        startDay: startDay || null,
        endDay: endDay || null,
        start: startDay ? startDay : null,
        end: endDay ? new Date(endDay.getTime() + MS_PER_DAY - 1) : null,
        days: (startDay && endDay) ? Math.floor((endDay - startDay) / MS_PER_DAY) + 1 : 0
      };
      range.label = formatRangeLabelFromDays(range.startDay, range.endDay);
      return range;
    }

    function updatePrimaryLabel(range){
      if (!evoPrimaryLabel) return;
      evoPrimaryLabel.textContent = range && range.startDay && range.endDay ? buildRangeMeta(range) : '';
    }

    function updateSecondaryLabel(range){
      if (!evoSecondaryLabel) return;
      if (!evoCompareToggle || !evoCompareToggle.checked){
        evoSecondaryLabel.textContent = '';
        return;
      }
      evoSecondaryLabel.textContent = range && range.startDay && range.endDay
        ? buildRangeMeta(range)
        : 'Selecciona el rango a comparar.';
    }

    function extractSnapshotMetrics(snapshot){
      if (!snapshot) return { revenue: 0, privados: 0, count: 0, label: '' };
      const totals = snapshot.totals || {};
      const revenue = Number(totals.bruto) || 0;
      const privados = (Number(totals.prim) || 0) + (Number(totals.suc) || 0) + (Number(totals.otros) || 0);
      const count = Number(snapshot?.stats?.used) || 0;
      const label = snapshot?.range?.label || formatSnapshotLabel(snapshot);
      return { revenue, privados, count, label };
    }

    function formatMetricValue(key, value){
      if (key === 'count') return fmtInt(value);
      return fmtEUR(value) + ' €';
    }

    function renderMetric(key, primaryMetrics, comparisonMetrics){
      const primaryValue = primaryMetrics?.[key] || 0;
      const primaryEl = evoMetricPrimaryValues[key];
      if (primaryEl) primaryEl.textContent = formatMetricValue(key, primaryValue);
      const secondaryEl = evoMetricSecondaryValues[key];
      const diffEl = evoMetricDiffs[key];
      if (!comparisonMetrics){
        if (secondaryEl) secondaryEl.textContent = '';
        if (diffEl){
          diffEl.dataset.trend = 'flat';
          diffEl.textContent = 'Sin comparativa';
        }
        return;
      }
      const secondaryValue = comparisonMetrics[key] || 0;
      if (secondaryEl){
        const labelSuffix = comparisonMetrics.label ? ` · ${comparisonMetrics.label}` : '';
        secondaryEl.textContent = `vs ${formatMetricValue(key, secondaryValue)}${labelSuffix}`;
      }
      if (diffEl){
        const delta = primaryValue - secondaryValue;
        if (Math.abs(delta) < 1e-6){
          diffEl.dataset.trend = 'flat';
          diffEl.textContent = 'Sin variación';
        } else {
          const trend = delta > 0 ? 'up' : 'down';
          diffEl.dataset.trend = trend;
          const sign = delta > 0 ? '+' : '−';
          let text = `${sign}${formatMetricValue(key, Math.abs(delta))}`;
          if (Math.abs(secondaryValue) > 1e-6){
            const percent = (delta / secondaryValue) * 100;
            const percentText = evoPercentFormatter.format(Math.abs(percent));
            text += ` (${sign}${percentText} %)`;
          }
          diffEl.textContent = text;
        }
      }
    }

    function updateComparisonSummary(primarySnapshot, comparisonSnapshot){
      if (!evoCompareSummary) return;
      if (!primarySnapshot){
        evoCompareSummary.hidden = true;
        return;
      }
      const primaryMetrics = extractSnapshotMetrics(primarySnapshot);
      const comparisonMetrics = comparisonSnapshot ? extractSnapshotMetrics(comparisonSnapshot) : null;
      evoCompareSummary.hidden = false;
      renderMetric('revenue', primaryMetrics, comparisonMetrics);
      renderMetric('privados', primaryMetrics, comparisonMetrics);
      renderMetric('count', primaryMetrics, comparisonMetrics);
    }

    function buildRangeSnapshot(range, id){
      if (!range || !range.startDay || !range.endDay) return null;
      const dropNeg = !!(excludeNeg && excludeNeg.checked);
      const filtered = (parsedRows || []).filter(row => {
        if (!row || !(row.fecha instanceof Date) || isNaN(row.fecha.getTime())) return false;
        if (dropNeg && row.importe < 0) return false;
        if (range.start && row.fecha < range.start) return false;
        if (range.end && row.fecha > range.end) return false;
        return true;
      });
      if (!filtered.length) return null;
      const { summary: summaryMap, stats } = aggregateRowsToSummary(filtered, { dropNeg });
      const snapshot = buildSnapshotFromSummary(summaryMap, {
        label: range.label,
        source: 'date-range',
        stats,
        bonos: computeBonosTotalsFromSummary(summaryMap),
        createdAt: range.end ? new Date(range.end.getTime()).toISOString() : new Date().toISOString()
      });
      if (!snapshot) return null;
      snapshot.id = id;
      snapshot.range = {
        label: range.label,
        startISO: range.startDay ? range.startDay.toISOString() : null,
        endISO: range.endDay ? range.endDay.toISOString() : null,
        days: range.days || Math.floor((range.endDay - range.startDay) / MS_PER_DAY) + 1
      };
      return snapshot;
    }

    function computeComparisonRange(range){
      if (!range || !range.startDay || !range.endDay) return null;
      const length = Math.max(1, range.days || Math.floor((range.endDay - range.startDay) / MS_PER_DAY) + 1);
      let proposedEnd = new Date(range.startDay.getTime() - MS_PER_DAY);
      if (evoDateBounds.min && proposedEnd < evoDateBounds.min) return null;
      let proposedStart = new Date(proposedEnd.getTime() - (length - 1) * MS_PER_DAY);
      if (evoDateBounds.min && proposedStart < evoDateBounds.min){
        proposedStart = new Date(evoDateBounds.min.getTime());
      }
      if (proposedStart > proposedEnd){
        proposedEnd = new Date(proposedStart.getTime());
      }
      return { startDay: proposedStart, endDay: proposedEnd };
    }

    function applySuggestedComparison(range, { force = false } = {}){
      if (!evoSecondaryStart || !evoSecondaryEnd) return;
      if (!range || !range.startDay || !range.endDay) return;
      if (!force){
        const userEdited = (!evoSecondaryStart.dataset.auto && evoSecondaryStart.value) || (!evoSecondaryEnd.dataset.auto && evoSecondaryEnd.value);
        if (userEdited) return;
      }
      const suggestion = computeComparisonRange(range);
      if (!suggestion) return;
      evoSecondaryStart.value = formatDateForInput(suggestion.startDay);
      evoSecondaryEnd.value = formatDateForInput(suggestion.endDay);
      evoSecondaryStart.dataset.auto = 'true';
      evoSecondaryEnd.dataset.auto = 'true';
      updateSecondaryLabel(resolveRangeInputs(evoSecondaryStart, evoSecondaryEnd, { requireComplete:false, silent:true }));
    }

    function toggleComparisonInputs(){
      const enabled = !!(evoCompareToggle && evoCompareToggle.checked);
      if (evoCompareInputs){
        evoCompareInputs.hidden = !enabled;
      }
      if (!enabled){
        updateSecondaryLabel(null);
      } else {
        const range = resolveRangeInputs(evoPrimaryStart, evoPrimaryEnd, { requireComplete:false, silent:true });
        if (range && range.startDay && range.endDay){
          applySuggestedComparison(range, { force: true });
        } else {
          updateSecondaryLabel(null);
        }
      }
    }

    function syncDateInputsBounds(rows){
      if (!Array.isArray(rows) || !rows.length){
        evoDateBounds = { min: null, max: null };
        [evoPrimaryStart, evoPrimaryEnd, evoSecondaryStart, evoSecondaryEnd].forEach(input => {
          if (!input) return;
          input.min = '';
          input.max = '';
          if (input.dataset.auto){
            input.value = '';
          }
        });
        updatePrimaryLabel(null);
        updateSecondaryLabel(null);
        evoCompareSummary && (evoCompareSummary.hidden = true);
        if (Array.isArray(evoActiveSnapshots) && evoActiveSnapshots.some(item => item && item.source === 'date-range')){
          const others = evoActiveSnapshots.filter(item => item && item.source !== 'date-range');
          evoRangeSnapshots = { primary: null, comparison: null };
          setActiveEvolutionSnapshots(others);
        } else {
          evoRangeSnapshots = { primary: null, comparison: null };
          updateComparisonSummary(null, null);
        }
        return;
      }
      const validDates = rows
        .map(row => row && row.fecha instanceof Date && !isNaN(row.fecha.getTime()) ? row.fecha : null)
        .filter(Boolean);
      if (!validDates.length) return;
      if (Array.isArray(evoActiveSnapshots) && evoActiveSnapshots.some(item => item && item.source === 'date-range')){
        const others = evoActiveSnapshots.filter(item => item && item.source !== 'date-range');
        evoRangeSnapshots = { primary: null, comparison: null };
        setActiveEvolutionSnapshots(others);
      } else {
        evoRangeSnapshots = { primary: null, comparison: null };
        updateComparisonSummary(null, null);
      }
      let minTime = validDates[0].getTime();
      let maxTime = validDates[0].getTime();
      for (const date of validDates){
        const time = date.getTime();
        if (time < minTime) minTime = time;
        if (time > maxTime) maxTime = time;
      }
      const minDay = new Date(minTime);
      const maxDay = new Date(maxTime);
      evoDateBounds = { min: new Date(minDay.getTime()), max: new Date(maxDay.getTime()) };
      const minValue = formatDateForInput(evoDateBounds.min);
      const maxValue = formatDateForInput(evoDateBounds.max);
      [evoPrimaryStart, evoPrimaryEnd, evoSecondaryStart, evoSecondaryEnd].forEach(input => {
        if (!input) return;
        input.min = minValue;
        input.max = maxValue;
      });
      const shouldSetStart = evoPrimaryStart && (!evoPrimaryStart.value || evoPrimaryStart.dataset.auto === 'true');
      const shouldSetEnd = evoPrimaryEnd && (!evoPrimaryEnd.value || evoPrimaryEnd.dataset.auto === 'true');
      if (shouldSetStart || shouldSetEnd){
        const endDay = new Date(evoDateBounds.max.getTime());
        let startDay = new Date(endDay.getTime() - 6 * MS_PER_DAY);
        if (startDay < evoDateBounds.min){
          startDay = new Date(evoDateBounds.min.getTime());
        }
        if (evoPrimaryStart){
          evoPrimaryStart.value = formatDateForInput(startDay);
          evoPrimaryStart.dataset.auto = 'true';
        }
        if (evoPrimaryEnd){
          evoPrimaryEnd.value = formatDateForInput(evoDateBounds.max);
          evoPrimaryEnd.dataset.auto = 'true';
        }
      }
      updatePrimaryRangeState();
      if (evoCompareToggle && evoCompareToggle.checked){
        const range = resolveRangeInputs(evoPrimaryStart, evoPrimaryEnd, { requireComplete:false, silent:true });
        if (range && range.startDay && range.endDay){
          applySuggestedComparison(range, { force: true });
        }
      }
    }

    function updatePrimaryRangeState(){
      const range = resolveRangeInputs(evoPrimaryStart, evoPrimaryEnd, { requireComplete:false, silent:true });
      updatePrimaryLabel(range);
    }

    function updateSecondaryRangeState(){
      const range = resolveRangeInputs(evoSecondaryStart, evoSecondaryEnd, { requireComplete:false, silent:true });
      updateSecondaryLabel(range);
    }

    function applyComparisonFromInputs(){
      if (!parsedRows || !parsedRows.length){
        alert('Carga primero datos de facturación para generar la comparación.');
        return;
      }
      const primaryRange = resolveRangeInputs(evoPrimaryStart, evoPrimaryEnd, { requireComplete:true, silent:false });
      if (!primaryRange) return;
      const primarySnapshot = buildRangeSnapshot(primaryRange, 'range-primary');
      if (!primarySnapshot){
        alert('No hay datos dentro del periodo principal seleccionado.');
        return;
      }
      updatePrimaryLabel(primaryRange);
      let comparisonSnapshot = null;
      if (evoCompareToggle && evoCompareToggle.checked){
        const comparisonRange = resolveRangeInputs(evoSecondaryStart, evoSecondaryEnd, { requireComplete:true, silent:false });
        if (!comparisonRange) return;
        comparisonSnapshot = buildRangeSnapshot(comparisonRange, 'range-comparison');
        if (!comparisonSnapshot){
          alert('No hay datos dentro del periodo de comparación seleccionado.');
          return;
        }
        updateSecondaryLabel(comparisonRange);
      } else {
        updateSecondaryLabel(null);
      }
      evoRangeSnapshots = { primary: primarySnapshot, comparison: comparisonSnapshot };
      const others = (evoActiveSnapshots || []).filter(item => item && item.source !== 'date-range');
      const next = [primarySnapshot];
      if (comparisonSnapshot) next.push(comparisonSnapshot);
      next.push(...others);
      setActiveEvolutionSnapshots(next);
      syncEvolutionSelection();
      updateComparisonSummary(primarySnapshot, comparisonSnapshot);
    }

    function renderEvolutionCharts(){
      destroyEvolutionCharts();
      if (!Array.isArray(evoActiveSnapshots) || !evoActiveSnapshots.length){
        updateEvolutionKpis([]);
        return;
      }

      const sorted = [...evoActiveSnapshots].sort((a,b)=>{
        const da = new Date(a?.createdAt || 0).getTime();
        const db = new Date(b?.createdAt || 0).getTime();
        return da - db;
      });

      updateEvolutionKpis(sorted);

      const ctxBase = evoChartBaseCanvas ? evoChartBaseCanvas.getContext('2d') : null;
      const ctxMix = evoChartMixCanvas ? evoChartMixCanvas.getContext('2d') : null;
      const ctxDelta = evoChartDeltaCanvas ? evoChartDeltaCanvas.getContext('2d') : null;
      const ctxSpecialists = evoChartSpecialistsCanvas ? evoChartSpecialistsCanvas.getContext('2d') : null;
      const ctxBonos = evoChartBonosCanvas ? evoChartBonosCanvas.getContext('2d') : null;
      if (!ctxBase && !ctxMix && !ctxDelta && !ctxSpecialists && !ctxBonos) return;

      const labels = sorted.map(item => formatSnapshotLabel(item));
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const textColor = isDark ? '#eaf2ff' : '#0b2542';
      const gridColor = isDark ? 'rgba(234,242,255,0.14)' : 'rgba(2,6,23,0.08)';
      const fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font') || 'system-ui, -apple-system, sans-serif';

      const summaryMaps = sorted.map(item => {
        const map = new Map();
        (item?.summary || []).forEach(entry => {
          if (!entry || typeof entry !== 'object' || !entry.name) return;
          map.set(entry.name, entry);
        });
        return map;
      });

      const aggregatedSpecialists = new Map();
      summaryMaps.forEach(map => {
        map.forEach((entry, name) => {
          if (!aggregatedSpecialists.has(name)){
            aggregatedSpecialists.set(name, { facturacion: 0, bonos: 0, bonosCount: 0 });
          }
          const aggregate = aggregatedSpecialists.get(name);
          aggregate.facturacion += Number(entry?.bruto) || 0;
          aggregate.bonos += Number(entry?.bonosImporte) || 0;
          aggregate.bonosCount += Number(entry?.bonosCount) || 0;
        });
      });

      const topSpecialists = Array.from(aggregatedSpecialists.entries())
        .filter(([, stats]) => (stats.facturacion || 0) > 0 || (stats.bonos || 0) > 0)
        .sort((a, b) => (b[1].facturacion || 0) - (a[1].facturacion || 0))
        .slice(0, 8)
        .map(([name]) => name);

      if (ctxBase){
        const metrics = [
          { key:'bruto', label:'Facturación total', color: CHART_COLORS[0] || '#2563eb' },
          { key:'prim', label:'Primeras', color: CHART_COLORS[1] || '#0ea5e9' },
          { key:'suc', label:'Sucesivas', color: CHART_COLORS[2] || '#7c3aed' },
          { key:'otros', label:'Otros conceptos', color: CHART_COLORS[3] || '#f59e0b' }
        ];
        const datasets = metrics.map((metric)=>{
          const values = sorted.map(item => Number(item?.totals?.[metric.key]) || 0);
          const base = values.find(val => val > 0);
          if (!base || base === 0) return null;
          const data = values.map(val => {
            if (!isFinite(val) || base === 0) return null;
            return +( (val / base) * 100 ).toFixed(1);
          });
          if (!data.some(v => Number.isFinite(v))) return null;
          return {
            label: metric.label,
            data,
            borderColor: metric.color,
            backgroundColor: withAlpha(metric.color, 0.16),
            borderWidth: 2.4,
            fill: false,
            tension: 0.32,
            pointRadius: 3,
            pointHoverRadius: 5,
            pointBackgroundColor: isDark ? '#0f172a' : '#ffffff',
            metaKey: metric.key,
            rawValues: values
          };
        }).filter(Boolean);

        if (datasets.length){
          evoChartBase = new Chart(ctxBase, {
            type: 'line',
            data: { labels, datasets },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: { mode: 'index', intersect: false },
              layout: { padding: { top: 24, right: 18, left: 18, bottom: 12 } },
              scales: {
                x: {
                  ticks: { color: textColor, maxRotation: 0, autoSkip: false, font: { family: fontFamily, size: 12 } },
                  grid: { display: false, drawBorder: false }
                },
                y: {
                  beginAtZero: false,
                  grid: { color: gridColor, borderDash: [4,4], drawBorder: false },
                  ticks: {
                    color: textColor,
                    font: { family: fontFamily, size: 12 },
                    callback: value => `${Number(value).toFixed(0)} pts`
                  }
                }
              },
              plugins: {
                legend: { position: 'bottom', labels: { color: textColor, font: { family: fontFamily, size: 12, weight: 600 }, usePointStyle: true } },
                tooltip: {
                  backgroundColor: isDark ? '#111827' : '#0b1f33',
                  titleColor: '#fff',
                  bodyColor: '#fff',
                  callbacks: {
                    label: context => {
                      const label = context.dataset?.label || '';
                      const rawKey = context.dataset?.metaKey;
                      const rawValue = rawKey ? (sorted[context.dataIndex]?.totals?.[rawKey] || 0) : context.parsed.y;
                      return `${label}: ${context.formattedValue} · ${fmtEUR(rawValue)} €`;
                    }
                  }
                },
                mbsDataLabels: {
                  enabled: true,
                  color: withAlpha(textColor, 0.85),
                  family: fontFamily,
                  size: 11,
                  weight: '600',
                  offset: 8,
                  formatter: value => value != null ? Number(value).toFixed(1) : ''
                }
              }
            }
          });
        }
      }

      if (ctxMix){
        const categories = [
          { key:'prim', label:'Primeras', color: CHART_COLORS[0] || '#2563eb' },
          { key:'suc', label:'Sucesivas', color: CHART_COLORS[1] || '#0ea5e9' },
          { key:'otros', label:'Otros', color: CHART_COLORS[3] || '#f59e0b' },
          { key:'seguros', label:'Seguros', color: CHART_COLORS[4] || '#ef4444' }
        ];
        const datasets = categories.map(cat => ({
          label: cat.label,
          data: sorted.map(item => Number(item?.totals?.[cat.key]) || 0),
          backgroundColor: withAlpha(cat.color, 0.32),
          borderColor: cat.color,
          borderWidth: 1.5,
          maxBarThickness: 48,
          stack: 'mix'
        }));
        const maxMix = Math.max(...sorted.map(item => {
          const totals = item?.totals;
          return Number(totals?.prim || 0) + Number(totals?.suc || 0) + Number(totals?.otros || 0) + Number(totals?.seguros || 0);
        }), 0);

        evoChartMix = new Chart(ctxMix, {
          type: 'bar',
          data: { labels, datasets },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { top: 42, right: 18, left: 18, bottom: 12 } },
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { position: 'bottom', labels: { color: textColor, font: { family: fontFamily, size: 12, weight: 600 }, usePointStyle: true } },
              tooltip: {
                backgroundColor: isDark ? '#111827' : '#0b1f33',
                titleColor: '#fff',
                bodyColor: '#fff',
                callbacks: {
                  label: context => `${context.dataset.label}: ${fmtEUR(context.parsed.y)} €`
                }
              },
              mbsDataLabels: {
                enabled: true,
                color: withAlpha(textColor, 0.9),
                family: fontFamily,
                size: 11,
                weight: '600',
                align: 'top',
                offset: 10,
                formatter: value => value > 0 ? `${fmtEUR(value)} €` : ''
              }
            },
            scales: {
              x: {
                stacked: true,
                ticks: { color: textColor, font: { family: fontFamily, size: 12 }, maxRotation: 0, autoSkip: false },
                grid: { display: false, drawBorder: false }
              },
              y: {
                stacked: true,
                beginAtZero: true,
                grid: { color: gridColor, borderDash: [4,4], drawBorder: false },
                ticks: {
                  color: textColor,
                  font: { family: fontFamily, size: 12 },
                  callback: value => fmtEUR(value) + ' €'
                },
                suggestedMax: maxMix > 0 ? maxMix * 1.18 : undefined
              }
            }
          }
        });
      }

      if (ctxDelta){
        const positiveColor = CHART_COLORS[5] || '#22c55e';
        const negativeColor = CHART_COLORS[4] || '#ef4444';
        const deltas = sorted.map((item, idx) => {
          const current = Number(item?.totals?.bruto) || 0;
          if (idx === 0) return 0;
          const prev = Number(sorted[idx - 1]?.totals?.bruto) || 0;
          return current - prev;
        });
        const maxAbs = Math.max(...deltas.map(val => Math.abs(val)), 0);
        const backgrounds = deltas.map(val => withAlpha(val >= 0 ? positiveColor : negativeColor, 0.35));
        const borders = deltas.map(val => val >= 0 ? positiveColor : negativeColor);

        evoChartDelta = new Chart(ctxDelta, {
          type: 'bar',
          data: {
            labels,
            datasets: [{
              label: 'Δ Facturación vs periodo anterior',
              data: deltas,
              backgroundColor: backgrounds,
              borderColor: borders,
              borderWidth: 1.4,
              maxBarThickness: 48,
              borderRadius: 10
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { top: 42, right: 18, left: 18, bottom: 12 } },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: isDark ? '#111827' : '#0b1f33',
                titleColor: '#fff',
                bodyColor: '#fff',
                callbacks: {
                  label: context => `${context.dataset.label}: ${fmtEUR(context.parsed.y)} €`
                }
              },
              mbsDataLabels: {
                enabled: true,
                color: withAlpha(textColor, 0.9),
                family: fontFamily,
                size: 11,
                weight: '700',
                formatter: value => {
                  const numeric = Number(value) || 0;
                  const sign = numeric > 0 ? '+' : '';
                  return `${sign}${fmtEUR(numeric)} €`;
                }
              }
            },
            scales: {
              x: {
                ticks: { color: textColor, font: { family: fontFamily, size: 12 }, maxRotation: 0, autoSkip: false },
                grid: { display: false, drawBorder: false }
              },
              y: {
                grid: { color: gridColor, borderDash: [4,4], drawBorder: false },
                ticks: {
                  color: textColor,
                  font: { family: fontFamily, size: 12 },
                  callback: value => fmtEUR(value) + ' €'
                },
                suggestedMax: maxAbs ? maxAbs * 1.25 : undefined,
                suggestedMin: maxAbs ? -maxAbs * 1.25 : undefined
              }
            }
          }
        });
      }

      if (ctxSpecialists && topSpecialists.length){
        const specialistDatasets = sorted.map((snapshot, index)=>{
          const map = summaryMaps[index] || new Map();
          const color = CHART_COLORS[index % CHART_COLORS.length] || '#2563eb';
          const data = topSpecialists.map(name => Number(map.get(name)?.bruto) || 0);
          return {
            label: formatSnapshotLabel(snapshot),
            data,
            backgroundColor: withAlpha(color, 0.28),
            borderColor: color,
            borderWidth: 1.4,
            maxBarThickness: 42
          };
        }).filter(dataset => dataset.data.some(value => Math.abs(value) > 0.5));

        if (specialistDatasets.length){
          const factValues = specialistDatasets.flatMap(dataset => dataset.data);
          const yScale = {
            beginAtZero: true,
            grid: { color: gridColor, borderDash: [4,4], drawBorder: false },
            ticks: {
              color: textColor,
              font: { family: fontFamily, size: 12 },
              callback: value => fmtEUR(value) + ' €'
            }
          };
          applyHeadroom(yScale, factValues, { ratio: 0.24, minLift: 120 });

          evoChartSpecialists = new Chart(ctxSpecialists, {
            type: 'bar',
            data: { labels: topSpecialists, datasets: specialistDatasets },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: { mode: 'index', intersect: false },
              layout: { padding: { top: 36, right: 18, left: 18, bottom: 18 } },
              plugins: {
                legend: { position: 'bottom', labels: { color: textColor, font: { family: fontFamily, size: 12, weight: 600 }, usePointStyle: true } },
                tooltip: {
                  backgroundColor: isDark ? '#111827' : '#0b1f33',
                  titleColor: '#fff',
                  bodyColor: '#fff',
                  callbacks: {
                    label: context => `${context.dataset.label}: ${fmtEUR(context.parsed.y)} €`
                  }
                },
                mbsDataLabels: {
                  enabled: true,
                  color: withAlpha(textColor, 0.92),
                  family: fontFamily,
                  size: 11,
                  weight: '600',
                  formatter: value => value > 0 ? `${fmtEUR(value)} €` : ''
                }
              },
              scales: {
                x: {
                  ticks: { color: textColor, font: { family: fontFamily, size: 11, weight: 600 }, maxRotation: 0, autoSkip: false },
                  grid: { display: false, drawBorder: false }
                },
                y: yScale
              }
            }
          });
        }
      }

      if (ctxBonos && topSpecialists.length){
        const bonosDatasets = sorted.map((snapshot, index)=>{
          const map = summaryMaps[index] || new Map();
          const color = CHART_COLORS[(index + 2) % CHART_COLORS.length] || '#7c3aed';
          const data = topSpecialists.map(name => Number(map.get(name)?.bonosImporte) || 0);
          const counts = topSpecialists.map(name => Number(map.get(name)?.bonosCount) || 0);
          return {
            label: formatSnapshotLabel(snapshot),
            data,
            backgroundColor: withAlpha(color, 0.26),
            borderColor: color,
            borderWidth: 1.3,
            maxBarThickness: 40,
            metaCounts: counts
          };
        }).filter(dataset => dataset.data.some(value => Math.abs(value) > 0.1) || dataset.metaCounts.some(count => count > 0));

        if (bonosDatasets.length){
          const bonosValues = bonosDatasets.flatMap(dataset => dataset.data);
          const xScale = {
            beginAtZero: true,
            grid: { color: gridColor, borderDash: [4,4], drawBorder: false },
            ticks: {
              color: textColor,
              font: { family: fontFamily, size: 12 },
              callback: value => fmtEUR(value) + ' €'
            }
          };
          applyHeadroom(xScale, bonosValues, { ratio: 0.25, minLift: 40 });

          evoChartBonos = new Chart(ctxBonos, {
            type: 'bar',
            data: { labels: topSpecialists, datasets: bonosDatasets },
            options: {
              indexAxis: 'y',
              responsive: true,
              maintainAspectRatio: false,
              interaction: { mode: 'index', intersect: false },
              layout: { padding: { top: 32, right: 24, left: 18, bottom: 18 } },
              plugins: {
                legend: { position: 'bottom', labels: { color: textColor, font: { family: fontFamily, size: 12, weight: 600 }, usePointStyle: true } },
                tooltip: {
                  backgroundColor: isDark ? '#111827' : '#0b1f33',
                  titleColor: '#fff',
                  bodyColor: '#fff',
                  callbacks: {
                    label: context => {
                      const count = context.dataset.metaCounts?.[context.dataIndex] || 0;
                      const countLabel = count === 1 ? '1 bono' : `${fmtInt(count)} bonos`;
                      return `${context.dataset.label}: ${fmtEUR(context.parsed.x)} € · ${countLabel}`;
                    }
                  }
                },
                mbsDataLabels: {
                  enabled: true,
                  anchor: 'end',
                  align: 'right',
                  offset: 10,
                  color: withAlpha(textColor, 0.9),
                  family: fontFamily,
                  size: 11,
                  weight: '600',
                  formatter: (value, context) => {
                    const amount = Number(value) || 0;
                    const count = context?.dataset?.metaCounts?.[context.dataIndex] || 0;
                    const parts = [];
                    if (amount > 0) parts.push(`${fmtEUR(amount)} €`);
                    if (count > 0) parts.push(`${fmtInt(count)}u`);
                    return parts.join(' · ');
                  }
                }
              },
              scales: {
                x: xScale,
                y: {
                  ticks: { color: textColor, font: { family: fontFamily, size: 11, weight: 600 } },
                  grid: { display: false, drawBorder: false }
                }
              }
            }
          });
        }
      }
    }

    function handleSavedSelectionChange(){
      if (!evoSavedSelect) return;
      const selectedIds = Array.from(evoSavedSelect.selectedOptions || []).map(opt => opt.value);
      const tempSnapshots = (evoActiveSnapshots || []).filter(item => item && (item.source === 'csv-upload' || item.source === 'date-range'));
      const savedSelected = evolutionSnapshots.filter(item => item && selectedIds.includes(item.id));
      setActiveEvolutionSnapshots([...tempSnapshots, ...savedSelected]);
    }

    async function handleEvolutionFiles(files){
      if (!files || !files.length) return;
      for (const file of files){
        try{
          const text = await new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ev => resolve(ev.target?.result || '');
            reader.onerror = () => reject(new Error('No se pudo leer el fichero.'));
            reader.readAsText(file, 'utf-8');
          });
          const rows = parseCajaRowsFromText(text);
          const label = file.name.replace(/\.[^.]+$/, '') || file.name;
          const snapshot = createSnapshotFromRows(rows, { label, source: 'csv-upload' });
          if (!snapshot){
            alert(`No se pudieron generar datos para "${file.name}".`);
            continue;
          }
          setActiveEvolutionSnapshots([...(evoActiveSnapshots || []), snapshot]);
        }catch(err){
          console.error('Error procesando CSV para evolución:', err);
          alert(`Error procesando "${file.name}": ${err?.message || err}`);
        }
      }
      if (evoUploadInput) evoUploadInput.value = '';
    }

    /* ---------- Occupancy widget ---------- */

    function createDefaultDayPeriods(activeDays = DEFAULT_OCCUPANCY_SCHEDULE.activeDays){
      const normalizedDays = Array.isArray(activeDays)
        ? activeDays
          .map(day => String(day).toLowerCase())
          .filter(day => OCCUPANCY_DAY_ORDER.includes(day))
        : [];
      const activeSet = new Set(normalizedDays);
      const map = {};
      OCCUPANCY_DAY_ORDER.forEach(day => {
        map[day] = activeSet.has(day) ? [...OCCUPANCY_PERIOD_KEYS] : [];
      });
      return map;
    }

    function sanitizeRoomPeriodList(value){
      if (Array.isArray(value)){
        return Array.from(new Set(value
          .map(period => String(period).toLowerCase())
          .filter(period => OCCUPANCY_PERIOD_KEYS.includes(period))
        ));
      }
      if (value && typeof value === 'object'){
        const list = [];
        OCCUPANCY_PERIOD_KEYS.forEach(period => {
          const raw = value[period];
          if (raw === true){
            list.push(period);
            return;
          }
          if (typeof raw === 'number' && Number.isFinite(raw) && raw > 0){
            list.push(period);
            return;
          }
          if (typeof raw === 'string'){
            const normalized = raw.trim().toLowerCase();
            if (!normalized) return;
            if (['1','true','sí','si','x','on'].includes(normalized)){
              list.push(period);
            }
          }
        });
        return Array.from(new Set(list));
      }
      if (typeof value === 'string'){
        return sanitizeRoomPeriodList(value.split(/[,;\s]+/g));
      }
      return [];
    }

    function normalizeRoomPeriods(source, fallback){
      const fallbackSource = (fallback && typeof fallback === 'object')
        ? fallback
        : createDefaultDayPeriods(DEFAULT_OCCUPANCY_SCHEDULE.activeDays);
      const rawSource = source && typeof source === 'object' ? source : {};
      const result = {};
      OCCUPANCY_DAY_ORDER.forEach(day => {
        const hasOwn = Object.prototype.hasOwnProperty.call(rawSource, day);
        let list = hasOwn ? sanitizeRoomPeriodList(rawSource[day]) : null;
        const fallbackList = sanitizeRoomPeriodList(fallbackSource[day]);
        if (!list || !list.length){
          if (hasOwn){
            list = [];
          } else {
            list = fallbackList.length ? fallbackList : [];
          }
        }
        result[day] = list;
      });
      return result;
    }

    function getRoomPeriods(room){
      if (!room) return normalizeRoomPeriods({}, createDefaultDayPeriods(DEFAULT_OCCUPANCY_SCHEDULE.activeDays));
      return normalizeRoomPeriods(room.periods || {}, createDefaultDayPeriods(DEFAULT_OCCUPANCY_SCHEDULE.activeDays));
    }

    function summarizeRoomPeriods(periods){
      const normalized = normalizeRoomPeriods(periods || {}, {});
      return OCCUPANCY_PERIOD_KEYS.map(key => {
        const days = [];
        OCCUPANCY_DAY_ORDER.forEach(day => {
          if (Array.isArray(normalized[day]) && normalized[day].includes(key)){
            days.push(OCCUPANCY_DAY_LABELS[day] || day.toUpperCase());
          }
        });
        return {
          key,
          label: OCCUPANCY_PERIOD_LABELS[key] || key.toUpperCase(),
          days
        };
      });
    }

    function updateRoomPeriodSummaryElement(element, periods){
      if (!element) return;
      const summary = summarizeRoomPeriods(periods);
      element.innerHTML = '';
      summary.forEach(item => {
        const row = document.createElement('span');
        row.innerHTML = `<strong>${item.label}:</strong> ${item.days.length ? item.days.join(', ') : '—'}`;
        element.appendChild(row);
      });
    }

    function normalizeOccupancySchedule(source){
      const base = {
        sessionsPerDay: DEFAULT_OCCUPANCY_SCHEDULE.sessionsPerDay,
        sessionHours: DEFAULT_OCCUPANCY_SCHEDULE.sessionHours,
        activeDays: [...DEFAULT_OCCUPANCY_SCHEDULE.activeDays],
        dayPeriods: createDefaultDayPeriods(DEFAULT_OCCUPANCY_SCHEDULE.activeDays)
      };
      if (source && typeof source === 'object'){
        if (source.sessionsPerDay != null){
          const sessions = Number(source.sessionsPerDay);
          if (Number.isFinite(sessions) && sessions > 0){
            base.sessionsPerDay = Math.max(1, Math.round(sessions));
          }
        }
        if (source.sessionHours != null){
          const hours = Number(source.sessionHours);
          if (Number.isFinite(hours) && hours > 0){
            base.sessionHours = Math.max(0.25, roundOccupancy(hours));
          }
        }
        let sanitizedActive = null;
        if (Array.isArray(source.activeDays)){
          const filtered = source.activeDays
            .map(day => String(day).toLowerCase())
            .filter(day => OCCUPANCY_DAY_ORDER.includes(day));
          sanitizedActive = filtered.length
            ? OCCUPANCY_DAY_ORDER.filter(day => new Set(filtered).has(day))
            : [];
        }
        let sanitizedDayPeriods = null;
        if (source.dayPeriods && typeof source.dayPeriods === 'object'){
          sanitizedDayPeriods = {};
          OCCUPANCY_DAY_ORDER.forEach(day => {
            const raw = source.dayPeriods[day];
            if (Array.isArray(raw)){
              const filtered = raw
                .map(period => String(period).toLowerCase())
                .filter(period => OCCUPANCY_PERIOD_KEYS.includes(period));
              sanitizedDayPeriods[day] = Array.from(new Set(filtered));
            }
          });
        }
        if (sanitizedActive){
          base.activeDays = sanitizedActive;
        }
        if (sanitizedDayPeriods){
          base.dayPeriods = {};
          OCCUPANCY_DAY_ORDER.forEach(day => {
            base.dayPeriods[day] = Array.isArray(sanitizedDayPeriods[day]) ? sanitizedDayPeriods[day] : [];
          });
        } else {
          base.dayPeriods = createDefaultDayPeriods(base.activeDays);
        }
      }
      const derivedActive = OCCUPANCY_DAY_ORDER.filter(day => Array.isArray(base.dayPeriods[day]) && base.dayPeriods[day].length);
      base.activeDays = derivedActive;
      return base;
    }

    function cloneDefaultOccupancy(){
      return {
        schedule: normalizeOccupancySchedule(DEFAULT_OCCUPANCY_SCHEDULE),
        rooms: DEFAULT_OCCUPANCY_ROOMS.map(room => ({
          id: room.id,
          name: room.name,
          capacity: Math.max(1, Number(room.capacity) || 1),
          occupied: Math.min(Math.max(0, Number(room.occupied) || 0), Math.max(1, Number(room.capacity) || 1)),
          color: room.color || 'var(--chart-1)',
          closed: Boolean(room.closed),
          periods: normalizeRoomPeriods(room.periods || {}, createDefaultDayPeriods(DEFAULT_OCCUPANCY_SCHEDULE.activeDays))
        }))
      };
    }

    function normalizeOccupancyRoom(source, fallback){
      const base = Object.assign({}, fallback);
      base.periods = normalizeRoomPeriods(base.periods || {}, createDefaultDayPeriods(DEFAULT_OCCUPANCY_SCHEDULE.activeDays));
      if (source && typeof source === 'object'){
        if (typeof source.name === 'string' && source.name.trim()) base.name = source.name.trim();
        if (source.color) base.color = source.color;
        if (source.closed != null) base.closed = Boolean(source.closed);
        if (source.capacity != null){
          const capacity = Number(source.capacity);
          if (Number.isFinite(capacity) && capacity > 0) base.capacity = capacity;
        }
        if (source.occupied != null){
          const occupied = Number(source.occupied);
          if (Number.isFinite(occupied) && occupied >= 0) base.occupied = occupied;
        }
        if (source.periods){
          base.periods = normalizeRoomPeriods(source.periods, base.periods);
        }
      }
      base.capacity = Math.max(1, Number(base.capacity) || 1);
      base.occupied = Math.min(Math.max(0, Number(base.occupied) || 0), base.capacity);
      if (!base.color) base.color = 'var(--chart-1)';
      return base;
    }

    function loadOccupancyState(){
      let stored = null;
      try{
        const raw = localStorage.getItem(LS_OCCUPANCY_STATE);
        if (raw){
          stored = JSON.parse(raw);
        } else {
          const legacyRaw = localStorage.getItem('mbs-occupancy-v1');
          if (legacyRaw) stored = JSON.parse(legacyRaw);
        }
      }catch(err){
        console.warn('No se pudo cargar la ocupación guardada', err);
      }
      const defaults = cloneDefaultOccupancy();
      if (!stored || typeof stored !== 'object') return defaults;
      if (Array.isArray(stored.rooms)){
        const storedById = new Map();
        stored.rooms.forEach(item => {
          if (item && item.id) storedById.set(item.id, item);
        });
        defaults.rooms = defaults.rooms.map(room => {
          const match = storedById.get(room.id) || null;
          return normalizeOccupancyRoom(match, room);
        });
      }
      if (stored.schedule){
        defaults.schedule = normalizeOccupancySchedule(stored.schedule);
      }
      return defaults;
    }

    function saveOccupancyState(){
      if (!occupancyState) return;
      try{
        localStorage.setItem(LS_OCCUPANCY_STATE, JSON.stringify(occupancyState));
        localStorage.removeItem('mbs-occupancy-v1');
      }catch(err){
        console.warn('No se pudo guardar la ocupación', err);
      }
    }

    function roundOccupancy(value){
      const numeric = Number(value);
      if (!Number.isFinite(numeric)) return 0;
      return Math.round(numeric * 100) / 100;
    }

    function getActiveScheduleDays(schedule){
      if (schedule && typeof schedule.dayPeriods === 'object'){
        const active = OCCUPANCY_DAY_ORDER.filter(day => Array.isArray(schedule.dayPeriods[day]) && schedule.dayPeriods[day].length);
        if (active.length || Object.keys(schedule.dayPeriods).length){
          return active;
        }
      }
      const days = Array.isArray(schedule?.activeDays) ? schedule.activeDays : DEFAULT_OCCUPANCY_SCHEDULE.activeDays;
      const normalized = days
        .map(day => String(day).toLowerCase())
        .filter(day => OCCUPANCY_DAY_ORDER.includes(day));
      if (normalized.length) return Array.from(new Set(normalized));
      return [...DEFAULT_OCCUPANCY_SCHEDULE.activeDays];
    }

    function getScheduleDayPeriods(schedule){
      if (schedule && typeof schedule.dayPeriods === 'object'){
        const map = {};
        OCCUPANCY_DAY_ORDER.forEach(day => {
          const raw = schedule.dayPeriods[day];
          if (Array.isArray(raw)){
            const filtered = raw
              .map(period => String(period).toLowerCase())
              .filter(period => OCCUPANCY_PERIOD_KEYS.includes(period));
            map[day] = Array.from(new Set(filtered));
          } else {
            map[day] = [];
          }
        });
        return map;
      }
      const activeDays = getActiveScheduleDays(schedule);
      return createDefaultDayPeriods(activeDays);
    }

    function resolveScheduleDetails(schedule){
      const normalized = normalizeOccupancySchedule(schedule);
      const dayPeriods = getScheduleDayPeriods(normalized);
      const activeDays = OCCUPANCY_DAY_ORDER.filter(day => Array.isArray(dayPeriods[day]) && dayPeriods[day].length);
      const basePeriodsPerDay = OCCUPANCY_PERIOD_KEYS.length || 1;
      const sessions = Math.max(1, Number(normalized.sessionsPerDay) || DEFAULT_OCCUPANCY_SCHEDULE.sessionsPerDay);
      const hours = Math.max(0.25, Number(normalized.sessionHours) || DEFAULT_OCCUPANCY_SCHEDULE.sessionHours);
      const totals = activeDays.reduce((acc, day)=>{
        const count = Array.isArray(dayPeriods[day]) ? dayPeriods[day].length : 0;
        if (!count) return acc;
        const fraction = count / basePeriodsPerDay;
        acc.dayEquivalents += fraction;
        acc.sessions += sessions * fraction;
        return acc;
      }, { dayEquivalents: 0, sessions: 0 });
      const totalHours = totals.sessions * hours;
      return {
        normalized,
        activeDays,
        dayPeriods,
        basePeriodsPerDay,
        sessionsPerDay: sessions,
        sessionHours: hours,
        totalSessions: totals.sessions,
        totalHours,
        dayEquivalents: totals.dayEquivalents
      };
    }

    function collectSchedulePeriodSelections(){
      const selections = {};
      OCCUPANCY_DAY_ORDER.forEach(day => {
        selections[day] = [];
      });
      occupancySchedulePeriodInputs.forEach(input => {
        const day = String(input.getAttribute('data-day') || '').toLowerCase();
        const period = String(input.value || '').toLowerCase();
        if (!OCCUPANCY_DAY_ORDER.includes(day) || !OCCUPANCY_PERIOD_KEYS.includes(period)) return;
        if (input.checked){
          selections[day].push(period);
        }
      });
      return selections;
    }

    function computeScheduleDailyCapacity(schedule){
      const details = resolveScheduleDetails(schedule);
      if (!details.activeDays.length){
        return roundOccupancy(0);
      }
      const daily = details.totalHours / details.activeDays.length;
      return roundOccupancy(daily);
    }

    function computeScheduleWeeklyCapacity(schedule){
      const details = resolveScheduleDetails(schedule);
      return roundOccupancy(details.totalHours);
    }

    function resolveRoomDensity(room, capacityOverride, occupiedOverride){
      if (!room) return 'off';
      const capacity = Math.max(1, Number(capacityOverride != null ? capacityOverride : room.capacity) || 1);
      const rawOccupied = occupiedOverride != null ? Number(occupiedOverride) : Number(room.occupied);
      const occupied = Math.min(Math.max(0, Number.isFinite(rawOccupied) ? rawOccupied : 0), capacity);
      if (room.closed) return 'off';
      const ratio = capacity > 0 ? occupied / capacity : 0;
      if (ratio >= 0.999) return 'full';
      if (ratio >= 0.81) return 'high';
      if (ratio >= 0.51) return 'mid';
      return 'low';
    }

    function applyScheduleCapacityToRooms(){
      if (!occupancyState || !Array.isArray(occupancyState.rooms)) return;
      occupancyState.schedule = occupancyState.schedule
        ? normalizeOccupancySchedule(occupancyState.schedule)
        : normalizeOccupancySchedule({});
      const dailyCapacity = computeScheduleDailyCapacity(occupancyState.schedule);
      occupancyState.rooms.forEach(room => {
        const capacity = Math.max(1, dailyCapacity);
        room.capacity = capacity;
        if (room.occupied > capacity){
          room.occupied = capacity;
        }
      });
      saveOccupancyState();
      renderOccupancy();
    }

    function ensureRoomEditor(){
      if (!occupancyEditorContainer) return null;
      if (occupancyEditorRefs) return occupancyEditorRefs;

      occupancyEditorContainer.innerHTML = '';
      occupancyEditorContainer.setAttribute('role', 'dialog');
      occupancyEditorContainer.setAttribute('aria-modal', 'true');

      const scroll = document.createElement('div');
      scroll.className = 'mbs-room-editor-scroll';

      const panel = document.createElement('div');
      panel.className = 'mbs-room-control';

      const head = document.createElement('div');
      head.className = 'mbs-room-editor-head';
      const title = document.createElement('h4');
      title.className = 'mbs-room-editor-title';
      const titleLabel = document.createElement('span');
      const ratioBadge = document.createElement('span');
      ratioBadge.className = 'badge';
      title.appendChild(titleLabel);
      title.appendChild(ratioBadge);
      head.appendChild(title);

      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'mbs-room-editor-close';
      closeBtn.textContent = 'Cerrar';
      closeBtn.addEventListener('click', closeRoomEditor);
      head.appendChild(closeBtn);
      panel.appendChild(head);

      const capacityLabel = document.createElement('label');
      capacityLabel.textContent = 'Capacidad diaria (horas)';
      const capacityInput = document.createElement('input');
      capacityInput.type = 'number';
      capacityInput.min = '1';
      capacityInput.step = '0.5';
      capacityLabel.appendChild(capacityInput);
      panel.appendChild(capacityLabel);

      const occupiedLabel = document.createElement('label');
      occupiedLabel.textContent = 'Horas ocupadas';
      const occupiedInput = document.createElement('input');
      occupiedInput.type = 'number';
      occupiedInput.min = '0';
      occupiedInput.step = '0.5';
      occupiedLabel.appendChild(occupiedInput);
      panel.appendChild(occupiedLabel);

      const toggle = document.createElement('label');
      toggle.className = 'inline';
      const toggleInput = document.createElement('input');
      toggleInput.type = 'checkbox';
      toggle.appendChild(toggleInput);
      toggle.appendChild(document.createTextNode('Fuera de servicio'));
      panel.appendChild(toggle);

      const periodsWrapper = document.createElement('div');
      periodsWrapper.className = 'mbs-room-periods';
      const periodButtons = new Map();
      OCCUPANCY_DAY_ORDER.forEach(day => {
        const row = document.createElement('div');
        row.className = 'mbs-room-period-row';
        const dayLabelEl = document.createElement('span');
        dayLabelEl.className = 'day';
        dayLabelEl.textContent = OCCUPANCY_DAY_LABELS[day] || day.toUpperCase();
        row.appendChild(dayLabelEl);
        const group = document.createElement('div');
        group.className = 'periods';
        OCCUPANCY_PERIODS.forEach(period => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'mbs-room-period-btn';
          btn.textContent = period.label;
          btn.setAttribute('data-day', day);
          btn.setAttribute('data-period', period.key);
          btn.setAttribute('aria-pressed', 'false');
          btn.addEventListener('click', ()=> {
            if (!occupancyEditorRoomId) return;
            setRoomPeriod(occupancyEditorRoomId, day, period.key);
          });
          group.appendChild(btn);
          periodButtons.set(`${day}:${period.key}`, btn);
        });
        row.appendChild(group);
        periodsWrapper.appendChild(row);
      });
      panel.appendChild(periodsWrapper);

      const periodSummary = document.createElement('div');
      periodSummary.className = 'mbs-room-period-summary';
      panel.appendChild(periodSummary);

      scroll.appendChild(panel);
      occupancyEditorContainer.appendChild(scroll);

      if (occupancyEditorBackdrop && !occupancyEditorBackdrop.dataset.bound){
        occupancyEditorBackdrop.addEventListener('click', closeRoomEditor);
        occupancyEditorBackdrop.dataset.bound = 'true';
      }

      occupancyEditorRefs = {
        panel,
        scroll,
        titleLabel,
        ratioBadge,
        capacityInput,
        occupiedInput,
        toggleInput,
        periodButtons,
        periodSummary
      };

      capacityInput.addEventListener('input', handleRoomEditorCapacityChange);
      occupiedInput.addEventListener('input', handleRoomEditorOccupiedChange);
      toggleInput.addEventListener('change', handleRoomEditorToggleChange);

      return occupancyEditorRefs;
    }

    function handleRoomEditorCapacityChange(){
      if (!occupancyEditorRoomId || !occupancyEditorRefs) return;
      updateOccupancyRoomById(occupancyEditorRoomId, { capacity: occupancyEditorRefs.capacityInput.value });
    }

    function handleRoomEditorOccupiedChange(){
      if (!occupancyEditorRoomId || !occupancyEditorRefs) return;
      updateOccupancyRoomById(occupancyEditorRoomId, { occupied: occupancyEditorRefs.occupiedInput.value });
    }

    function handleRoomEditorToggleChange(){
      if (!occupancyEditorRoomId || !occupancyEditorRefs) return;
      updateOccupancyRoomById(occupancyEditorRoomId, { closed: occupancyEditorRefs.toggleInput.checked });
    }

    function updateRoomEditorValues(){
      if (!occupancyEditorRefs || !occupancyState || !occupancyEditorRoomId) return;
      const index = getOccupancyRoomIndexById(occupancyEditorRoomId);
      if (index < 0){
        closeRoomEditor();
        return;
      }
      const room = occupancyState.rooms[index];
      const capacity = Math.max(1, Number(room.capacity) || 1);
      const occupied = Math.min(Math.max(0, Number(room.occupied) || 0), capacity);
      const ratio = room.closed ? 0 : capacity > 0 ? (occupied / capacity) * 100 : 0;
      const density = resolveRoomDensity(room, capacity, occupied);
      const accent = room.closed ? OCCUPANCY_DENSITY_ACCENTS.off : OCCUPANCY_DENSITY_ACCENTS[density] || '#2563eb';
      const periods = getRoomPeriods(room);

      occupancyEditorRefs.titleLabel.textContent = room.name;
      occupancyEditorRefs.ratioBadge.textContent = room.closed
        ? 'OFF'
        : `${occupancyPercentFormatter.format(ratio)} %`;
      occupancyEditorRefs.ratioBadge.style.color = accent;
      occupancyEditorRefs.capacityInput.value = String(roundOccupancy(capacity));
      occupancyEditorRefs.occupiedInput.value = String(roundOccupancy(room.closed ? 0 : occupied));
      occupancyEditorRefs.occupiedInput.disabled = Boolean(room.closed);
      occupancyEditorRefs.occupiedInput.max = String(roundOccupancy(capacity));
      occupancyEditorRefs.toggleInput.checked = Boolean(room.closed);
      occupancyEditorRefs.panel.style.setProperty('--room-accent', accent);
      occupancyEditorRefs.panel.style.setProperty('--room-color', accent);

      if (occupancyEditorRefs.periodButtons instanceof Map){
        OCCUPANCY_DAY_ORDER.forEach(day => {
          OCCUPANCY_PERIOD_KEYS.forEach(periodKey => {
            const btn = occupancyEditorRefs.periodButtons.get(`${day}:${periodKey}`);
            if (!btn) return;
            const isActive = Array.isArray(periods[day]) && periods[day].includes(periodKey);
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
          });
        });
      }
      if (occupancyEditorRefs.periodSummary){
        updateRoomPeriodSummaryElement(occupancyEditorRefs.periodSummary, periods);
      }

      if (occupancyEditorContainer){
        occupancyEditorContainer.setAttribute('aria-label', `Editar ${room.name}`);
      }
    }

    function handleRoomEditorKeydown(event){
      if (event.key === 'Escape'){ 
        event.preventDefault();
        closeRoomEditor();
      }
    }

    function openRoomEditor(roomId){
      if (!occupancyState || !occupancyEditorContainer) return;
      const index = getOccupancyRoomIndexById(roomId);
      if (index < 0) return;
      const refs = ensureRoomEditor();
      if (!refs) return;
      if (occupancyEditorRoomId === roomId && occupancyEditorContainer.classList.contains('is-open')){
        closeRoomEditor();
        return;
      }
      occupancyEditorRoomId = roomId;
      updateRoomEditorValues();
      occupancyEditorContainer.classList.add('is-open');
      occupancyEditorContainer.setAttribute('aria-hidden', 'false');
      occupancyEditorContainer.setAttribute('data-room-id', roomId);
      if (occupancyEditorBackdrop){
        occupancyEditorBackdrop.classList.add('is-visible');
        occupancyEditorBackdrop.setAttribute('aria-hidden', 'false');
      }
      highlightActiveRoomCard();
      if (!occupancyEditorKeyHandler){
        occupancyEditorKeyHandler = handleRoomEditorKeydown;
        document.addEventListener('keydown', occupancyEditorKeyHandler);
      }
      if (refs.capacityInput){
        requestAnimationFrame(()=>{
          refs.capacityInput.focus();
          refs.capacityInput.select();
        });
      }
    }

    function closeRoomEditor(){
      if (occupancyEditorContainer){
        occupancyEditorContainer.classList.remove('is-open');
        occupancyEditorContainer.setAttribute('aria-hidden', 'true');
        occupancyEditorContainer.removeAttribute('data-room-id');
      }
      if (occupancyEditorBackdrop){
        occupancyEditorBackdrop.classList.remove('is-visible');
        occupancyEditorBackdrop.setAttribute('aria-hidden', 'true');
      }
      if (occupancyEditorKeyHandler){
        document.removeEventListener('keydown', occupancyEditorKeyHandler);
        occupancyEditorKeyHandler = null;
      }
      occupancyEditorRoomId = null;
      highlightActiveRoomCard();
    }

    function highlightActiveRoomCard(){
      if (!occupancyGrid) return;
      const cards = occupancyGrid.querySelectorAll('.mbs-room-card');
      cards.forEach(card => {
        const cardRoomId = card.getAttribute('data-room-id');
        const isActive = Boolean(occupancyEditorRoomId && cardRoomId === occupancyEditorRoomId);
        card.classList.toggle('is-editing', isActive);
        card.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    }

    function syncRoomEditor(){
      if (!occupancyEditorRoomId){
        highlightActiveRoomCard();
        return;
      }
      const refs = ensureRoomEditor();
      if (!refs){
        closeRoomEditor();
        return;
      }
      updateRoomEditorValues();
      highlightActiveRoomCard();
    }

    function scheduleSignature(schedule){
      const details = resolveScheduleDetails(schedule);
      const periods = {};
      OCCUPANCY_DAY_ORDER.forEach(day => {
        const list = Array.isArray(details.dayPeriods[day]) ? details.dayPeriods[day] : [];
        if (list.length){
          periods[day] = list.slice().sort();
        }
      });
      return JSON.stringify({
        sessionsPerDay: details.normalized.sessionsPerDay,
        sessionHours: details.normalized.sessionHours,
        activeDays: details.activeDays,
        dayPeriods: periods
      });
    }

    function updateOccupancySchedule(changes){
      if (!occupancyState) return;
      const current = occupancyState.schedule ? normalizeOccupancySchedule(occupancyState.schedule) : normalizeOccupancySchedule({});
      const next = normalizeOccupancySchedule({ ...current, ...changes });
      if (scheduleSignature(current) === scheduleSignature(next)) return;
      occupancyState.schedule = next;
      saveOccupancyState();
      renderOccupancy();
    }

    function ensureOccupancyScheduleControls(){
      if (!occupancyScheduleContainer || !occupancyState || occupancyScheduleReady) return;
      occupancyScheduleReady = true;

      if (occupancySessionsInput){
        occupancySessionsInput.addEventListener('input', ()=>{
          const value = Math.max(1, Math.round(Number(occupancySessionsInput.value) || 0));
          occupancySessionsInput.value = String(value);
          updateOccupancySchedule({ sessionsPerDay: value });
        });
      }

      if (occupancySessionHoursInput){
        occupancySessionHoursInput.addEventListener('input', ()=>{
          const raw = Math.max(0.25, Number(occupancySessionHoursInput.value) || 0);
          const sanitized = roundOccupancy(raw);
          occupancySessionHoursInput.value = String(sanitized);
          updateOccupancySchedule({ sessionHours: sanitized });
        });
      }

      occupancySchedulePeriodInputs.forEach(input => {
        input.addEventListener('change', ()=>{
          updateOccupancySchedule({ dayPeriods: collectSchedulePeriodSelections() });
        });
      });

      occupancyScheduleDayToggles.forEach(button => {
        button.addEventListener('click', ()=>{
          const day = String(button.getAttribute('data-occupancy-day-toggle') || '').toLowerCase();
          if (!day || !OCCUPANCY_DAY_ORDER.includes(day)) return;
          const related = occupancySchedulePeriodInputs.filter(input => {
            return String(input.getAttribute('data-day') || '').toLowerCase() === day;
          });
          if (!related.length) return;
          const shouldActivate = !related.every(input => input.checked);
          related.forEach(input => {
            input.checked = shouldActivate;
          });
          updateOccupancySchedule({ dayPeriods: collectSchedulePeriodSelections() });
        });
      });

      if (occupancyApplyScheduleBtn){
        occupancyApplyScheduleBtn.addEventListener('click', applyScheduleCapacityToRooms);
      }
    }

    function renderOccupancyGrid(){
      if (!occupancyGrid || !occupancyState) return;
      occupancyGrid.innerHTML = '';

      occupancyState.rooms.forEach((room)=>{
        const card = document.createElement('div');
        card.className = 'mbs-room-card';
        const capacity = Math.max(1, Number(room.capacity) || 1);
        const occupied = Math.min(Math.max(0, Number(room.occupied) || 0), capacity);
        const ratio = room.closed ? 0 : occupied / capacity;
        const percentValue = ratio * 100;
        const density = resolveRoomDensity(room, capacity, occupied);
        const accent = room.closed
          ? OCCUPANCY_DENSITY_ACCENTS.off
          : OCCUPANCY_DENSITY_ACCENTS[density] || '#2563eb';

        card.dataset.density = density;
        card.dataset.roomId = room.id;
        card.setAttribute('data-room-id', room.id);
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.classList.toggle('is-closed', Boolean(room.closed));
        card.style.setProperty('--room-color', accent);
        card.style.setProperty('--room-accent', accent);
        card.setAttribute('aria-pressed', occupancyEditorRoomId === room.id ? 'true' : 'false');
        const statusLabel = room.closed
          ? `${room.name} fuera de servicio`
          : `${room.name} ${occupancyHoursFormatter.format(occupied)}h ocupadas de ${occupancyHoursFormatter.format(capacity)}h`;
        card.setAttribute('aria-label', `${statusLabel}. Pulsa para editar.`);
        if (occupancyEditorRoomId === room.id){
          card.classList.add('is-editing');
        }

        card.addEventListener('click', (event)=>{
          event.preventDefault();
          openRoomEditor(room.id);
        });
        card.addEventListener('keydown', (event)=>{
          if (event.key === 'Enter' || event.key === ' '){
            event.preventDefault();
            openRoomEditor(room.id);
          }
        });

        const visual = document.createElement('div');
        visual.className = 'mbs-room-visual';
        const fill = document.createElement('div');
        fill.className = 'mbs-room-fill';
        fill.style.setProperty('--fill', String(Math.max(0, Math.min(1, ratio))));
        visual.appendChild(fill);
        const marker = document.createElement('span');
        marker.className = 'mbs-room-marker';
        marker.textContent = room.closed ? 'OFF' : `${occupancyPercentFormatter.format(percentValue)} %`;
        visual.appendChild(marker);
        card.appendChild(visual);

        const info = document.createElement('div');
        info.className = 'mbs-room-info';
        const name = document.createElement('span');
        name.className = 'mbs-room-name';
        name.textContent = room.name;
        const status = document.createElement('span');
        status.className = 'mbs-room-status';
        status.textContent = room.closed
          ? 'Fuera de servicio'
          : `${occupancyHoursFormatter.format(occupied)}h ocupadas · ${occupancyHoursFormatter.format(Math.max(0, capacity - occupied))}h libres`;
        const rate = document.createElement('span');
        rate.className = 'mbs-room-rate';
        rate.textContent = room.closed ? '—' : `${occupancyPercentFormatter.format(percentValue)} %`;
        info.appendChild(name);
        info.appendChild(status);
        info.appendChild(rate);
        card.appendChild(info);

        const periodSummary = document.createElement('div');
        periodSummary.className = 'mbs-room-period-summary is-card';
        updateRoomPeriodSummaryElement(periodSummary, getRoomPeriods(room));
        card.appendChild(periodSummary);

        const hint = document.createElement('span');
        hint.className = 'mbs-room-edit-hint';
        hint.textContent = 'Pulsa para editar';
        card.appendChild(hint);

        occupancyGrid.appendChild(card);
      });
      highlightActiveRoomCard();
    }

    function renderOccupancySchedule(){
      if (!occupancyScheduleContainer || !occupancyState) return;
      ensureOccupancyScheduleControls();

      const schedule = occupancyState.schedule
        ? normalizeOccupancySchedule(occupancyState.schedule)
        : normalizeOccupancySchedule({});
      occupancyState.schedule = schedule;

      const details = resolveScheduleDetails(schedule);

      if (occupancySessionsInput){
        occupancySessionsInput.value = String(schedule.sessionsPerDay);
      }
      if (occupancySessionHoursInput){
        occupancySessionHoursInput.value = String(schedule.sessionHours);
      }

      occupancySchedulePeriodInputs.forEach(input => {
        const day = String(input.getAttribute('data-day') || '').toLowerCase();
        const period = String(input.value || '').toLowerCase();
        const isActiveDay = details.activeDays.includes(day);
        const periods = Array.isArray(details.dayPeriods[day]) ? details.dayPeriods[day] : [];
        input.checked = isActiveDay && periods.includes(period);
      });

      occupancyScheduleDayToggles.forEach(button => {
        const day = String(button.getAttribute('data-occupancy-day-toggle') || '').toLowerCase();
        const isActive = details.activeDays.includes(day);
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      if (occupancyScheduleNote){
        const dayEquivalentFormatter = new Intl.NumberFormat('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
        const daySummaries = details.activeDays.map(day => {
          const label = OCCUPANCY_DAY_LABELS[day] || day.toUpperCase();
          const periods = (details.dayPeriods[day] || [])
            .map(period => OCCUPANCY_PERIOD_LABELS[period] || period.toUpperCase())
            .join(', ');
          return periods ? `${label} (${periods})` : label;
        });
        const activeCount = details.activeDays.length;
        const dailyHours = activeCount
          ? occupancyHoursFormatter.format(roundOccupancy(details.totalHours / activeCount))
          : occupancyHoursFormatter.format(0);
        const weeklyHours = occupancyHoursFormatter.format(roundOccupancy(details.totalHours));
        const dayEquivalents = dayEquivalentFormatter.format(roundOccupancy(details.dayEquivalents));
        occupancyScheduleNote.textContent = `${details.sessionsPerDay} sesiones/día completo · ${occupancyHoursFormatter.format(details.sessionHours)}h por sesión · ${activeCount} días (${daySummaries.join(', ') || 'sin franjas activas'}) → ${dailyHours}h/día · ${weeklyHours}h/semana (equivalente a ${dayEquivalents} días completos).`;
      }
    }

    function renderOccupancySummary(){
      if (!occupancyState) return;
      const rooms = occupancyState.rooms || [];
      const activeRooms = rooms.filter(room => !room.closed && (Number(room.capacity) || 0) > 0);
      const totalCapacity = activeRooms.reduce((acc, room)=> acc + Math.max(1, Number(room.capacity) || 0), 0);
      const totalOccupied = activeRooms.reduce((acc, room)=>{
        const capacity = Math.max(1, Number(room.capacity) || 0);
        const occupied = Math.min(Math.max(0, Number(room.occupied) || 0), capacity);
        return acc + occupied;
      }, 0);
      const avgPercent = totalCapacity > 0 ? (totalOccupied / totalCapacity) * 100 : 0;
      const closedCount = rooms.filter(room => room.closed).length;
      const fullCount = activeRooms.filter(room => {
        const capacity = Math.max(1, Number(room.capacity) || 0);
        const occupied = Math.min(Math.max(0, Number(room.occupied) || 0), capacity);
        return capacity > 0 && occupied >= capacity - 0.01;
      }).length;
      const freeSlots = activeRooms.reduce((acc, room)=>{
        const capacity = Math.max(1, Number(room.capacity) || 0);
        const occupied = Math.min(Math.max(0, Number(room.occupied) || 0), capacity);
        return acc + Math.max(0, capacity - occupied);
      }, 0);

      const schedule = occupancyState.schedule
        ? normalizeOccupancySchedule(occupancyState.schedule)
        : normalizeOccupancySchedule({});
      const scheduleDetails = resolveScheduleDetails(schedule);
      const dayEquivalents = roundOccupancy(scheduleDetails.dayEquivalents || 0);
      const weeklyCapacity = roundOccupancy(totalCapacity * Math.max(0, dayEquivalents));
      const dayEquivalentFormatter = new Intl.NumberFormat('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
      const periodCoverage = {};
      OCCUPANCY_PERIOD_KEYS.forEach(periodKey => {
        periodCoverage[periodKey] = new Set();
      });
      activeRooms.forEach(room => {
        const periods = getRoomPeriods(room);
        OCCUPANCY_DAY_ORDER.forEach(day => {
          const list = Array.isArray(periods[day]) ? periods[day] : [];
          list.forEach(period => {
            if (periodCoverage[period]){
              periodCoverage[period].add(day);
            }
          });
        });
      });
      const coverageSummary = OCCUPANCY_PERIOD_KEYS.map(periodKey => {
        const days = Array.from(periodCoverage[periodKey]);
        const labels = days.map(day => OCCUPANCY_DAY_LABELS[day] || day.toUpperCase());
        const label = OCCUPANCY_PERIOD_LABELS[periodKey] || periodKey.toUpperCase();
        return `${label}: ${labels.length ? labels.join(', ') : '—'}`;
      }).join(' · ');

      if (occupancyAvgEl) occupancyAvgEl.textContent = `${occupancyPercentFormatter.format(avgPercent)} %`;
      if (occupancyAvgNote) occupancyAvgNote.textContent = totalCapacity > 0
        ? `Sobre ${occupancyHoursFormatter.format(totalCapacity)}h por día (${occupancyHoursFormatter.format(weeklyCapacity)}h en ${dayEquivalentFormatter.format(dayEquivalents || 0)} días equivalentes).`
        : 'Añade capacidad para empezar a medir.';
      if (occupancyActiveEl) occupancyActiveEl.textContent = String(activeRooms.length);
      if (occupancyActiveNote) occupancyActiveNote.textContent = `${rooms.length} totales (${closedCount} fuera de servicio). ${coverageSummary}`;
      if (occupancyFullEl) occupancyFullEl.textContent = String(fullCount);
      if (occupancyFullNote) occupancyFullNote.textContent = fullCount
        ? 'Revisa rotaciones o slots extra.'
        : 'Aún queda margen disponible.';
      if (occupancyFreeEl) occupancyFreeEl.textContent = occupancyHoursFormatter.format(freeSlots);
      if (occupancyFreeNote) occupancyFreeNote.textContent = totalCapacity > 0
        ? `de ${occupancyHoursFormatter.format(totalCapacity)}h totales`
        : '';
    }

    function renderOccupancy(){
      if (!occupancyRoot || !occupancyState) return;
      renderOccupancyGrid();
      renderOccupancySchedule();
      renderOccupancySummary();
      syncRoomEditor();
    }

    function updateOccupancyRoom(index, changes){
      if (!occupancyState || !Array.isArray(occupancyState.rooms)) return;
      const room = occupancyState.rooms[index];
      if (!room) return;

      let changed = false;

      if (changes.capacity != null){
        const capacity = Math.max(1, roundOccupancy(changes.capacity));
        if (capacity !== room.capacity){
          room.capacity = capacity;
          changed = true;
        }
        if (room.occupied > room.capacity){
          room.occupied = room.capacity;
          changed = true;
        }
      }

      if (changes.occupied != null){
        const occupied = Math.max(0, roundOccupancy(changes.occupied));
        const sanitized = Math.min(occupied, room.capacity);
        if (sanitized !== room.occupied){
          room.occupied = sanitized;
          changed = true;
        }
      }

      if (changes.closed != null){
        const closed = Boolean(changes.closed);
        if (closed !== room.closed){
          room.closed = closed;
          changed = true;
        }
      }

      if (changed) saveOccupancyState();
      renderOccupancy();
    }

    function getOccupancyRoomIndexById(roomId){
      if (!occupancyState || !Array.isArray(occupancyState.rooms)) return -1;
      return occupancyState.rooms.findIndex(room => room && room.id === roomId);
    }

    function updateOccupancyRoomById(roomId, changes){
      const index = getOccupancyRoomIndexById(roomId);
      if (index < 0) return;
      updateOccupancyRoom(index, changes);
    }

    function setRoomPeriod(roomId, day, periodKey, explicit){
      if (!occupancyState || !Array.isArray(occupancyState.rooms)) return;
      const dayKey = String(day).toLowerCase();
      const period = String(periodKey).toLowerCase();
      if (!OCCUPANCY_DAY_ORDER.includes(dayKey) || !OCCUPANCY_PERIOD_KEYS.includes(period)) return;
      const index = getOccupancyRoomIndexById(roomId);
      if (index < 0) return;
      const room = occupancyState.rooms[index];
      const current = getRoomPeriods(room);
      const set = new Set(current[dayKey] || []);
      const shouldActivate = explicit == null ? !set.has(period) : Boolean(explicit);
      let changed = false;
      if (shouldActivate){
        if (!set.has(period)){
          set.add(period);
          changed = true;
        }
      } else if (set.has(period)){
        set.delete(period);
        changed = true;
      }
      if (!changed) return;
      current[dayKey] = Array.from(set);
      room.periods = current;
      saveOccupancyState();
      renderOccupancy();
    }

    function handleOccupancyReset(){
      if (!occupancyRoot) return;
      if (!confirm('¿Restablecer la ocupación a los valores iniciales?')) return;
      closeRoomEditor();
      occupancyState = cloneDefaultOccupancy();
      saveOccupancyState();
      renderOccupancy();
    }

    function handleOccupancyFill(){
      if (!occupancyState || !Array.isArray(occupancyState.rooms)) return;
      closeRoomEditor();
      occupancyState.rooms = occupancyState.rooms.map(room => Object.assign({}, room, {
        closed: false,
        occupied: Math.max(1, Number(room.capacity) || 1)
      }));
      saveOccupancyState();
      renderOccupancy();
    }

    /* ---------- Eventos ---------- */

    function initEvolutionPanelOnce(){
      if (evolutionPanelInitialized) return;
      evolutionPanelInitialized = true;
      renderEvolutionSavedOptions();
      updateEvolutionEmptyState();

      if (evoSavedSelect){
        evoSavedSelect.addEventListener('change', handleSavedSelectionChange);
      }

      if (evoUploadInput){
        evoUploadInput.addEventListener('change', (event)=>{
          const files = Array.from(event.target?.files || []);
          handleEvolutionFiles(files);
        });
      }

      if (evoClearBtn){
        evoClearBtn.addEventListener('click', ()=>{
          if (evoSavedSelect){
            Array.from(evoSavedSelect.options || []).forEach(option => { option.selected = false; });
          }
          setActiveEvolutionSnapshots([]);
          evoRangeSnapshots = { primary: null, comparison: null };
          if (evoCompareSummary) evoCompareSummary.hidden = true;
          if (evoCompareToggle){
            evoCompareToggle.checked = false;
            toggleComparisonInputs();
          }
          [evoSecondaryStart, evoSecondaryEnd].forEach(input => {
            if (!input) return;
            input.value = '';
            delete input.dataset.auto;
          });
        });
      }

      if (evoDeleteBtn){
        evoDeleteBtn.addEventListener('click', ()=>{
          if (!evoSavedSelect) return;
          const selectedIds = Array.from(evoSavedSelect.selectedOptions || []).map(opt => opt.value).filter(Boolean);
          if (!selectedIds.length){
            alert('Selecciona al menos un periodo guardado para eliminar.');
            return;
          }
          if (!confirm('¿Eliminar los periodos seleccionados de la evolución?')) return;
          evolutionSnapshots = evolutionSnapshots.filter(item => item && !selectedIds.includes(item.id));
          saveEvolutionSnapshots();
          const remaining = (evoActiveSnapshots || []).filter(item => !selectedIds.includes(item.id) || item.source === 'csv-upload');
          setActiveEvolutionSnapshots(remaining);
        });
      }

      evoDownloadButtons.forEach(btn => {
        btn.addEventListener('click', ()=>{
          const ref = btn.getAttribute('data-evo-download');
          let canvas = null;
          if (ref === 'base') canvas = evoChartBaseCanvas;
          else if (ref === 'mix') canvas = evoChartMixCanvas;
          else if (ref === 'delta') canvas = evoChartDeltaCanvas;
          else if (ref === 'specialists') canvas = evoChartSpecialistsCanvas;
          else if (ref === 'bonos') canvas = evoChartBonosCanvas;
          if (!canvas) return;
          const wrap = btn.closest('.mbs-chartwrap');
          const title = wrap?.querySelector('h5')?.textContent?.trim() || ref || 'chart';
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png', 1.0);
          link.download = `${slugifyForDownload(title)}.png`;
          link.click();
        });
      });

      renderEvolutionActiveChips();
    }

    if (typeof window !== 'undefined'){
      window.addEventListener('mbs:payroll-update', (event)=>{
        const changed = updatePayrollCosts(event?.detail);
        if (changed && summary && Object.keys(summary).length){
          buildRentabilidad();
        }
      });
      updatePayrollCosts();
    }

    initEvolutionPanelOnce();

    if (occupancyRoot){
      occupancyState = loadOccupancyState();
      renderOccupancy();
      if (occupancyResetBtn){
        occupancyResetBtn.addEventListener('click', handleOccupancyReset);
      }
      if (occupancyFillBtn){
        occupancyFillBtn.addEventListener('click', handleOccupancyFill);
      }
      if (typeof window !== 'undefined' && !occupancyRoot.dataset.persistBound){
        window.addEventListener('beforeunload', saveOccupancyState);
        if (typeof document !== 'undefined'){
          document.addEventListener('visibilitychange', ()=>{
            if (document.visibilityState === 'hidden'){
              saveOccupancyState();
            }
          });
        }
        occupancyRoot.dataset.persistBound = 'true';
      }
    }

    csvFile.addEventListener('change', (e)=>{
      const f = e.target.files && e.target.files[0];
      if(!f) return;
      const reader = new FileReader();
      reader.onload = (ev)=>{
        try{
          const text = ev.target.result;
          parsedRows = parseCajaRowsFromText(text);
          console.log('Fechas detectadas en CSV:', parsedRows.map(r => r.fecha ? toKey(r.fecha) : 'sin fecha'));
          console.log('Número total de filas procesadas:', parsedRows.length);
          console.log('Primeras 5 filas del CSV:', parsedRows.slice(0, 5));
          buildSummary(parsedRows);
        }catch(err){
          stats.textContent = 'Error leyendo CSV de Caja: ' + err.message;
          console.error(err);
        }
      };
      reader.readAsText(f, 'utf-8');
    });

    excludeNeg.addEventListener('change', ()=> parsedRows.length && buildSummary(parsedRows));

    downloadBtn.addEventListener('click', async ()=>{
      if(downloadBtn.disabled) return;
      if (typeof window.html2canvas !== 'function' || !window.jspdf) {
        alert('No se pudieron cargar las bibliotecas para generar el PDF. Revisa la conexión e inténtalo de nuevo.');
        return;
      }

      const originalHtml = downloadBtn.innerHTML;
      const hadPrimary = downloadBtn.classList.contains('primary');
      downloadBtn.disabled = true;
      downloadBtn.classList.remove('primary');
      downloadBtn.innerHTML = '<span style="font-weight:700;">Generando PDF…</span>';

      try {
        root.classList.add('pdf-export');
        await new Promise(resolve=>setTimeout(resolve, 80));
        const canvas = await window.html2canvas(root, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
          scrollY: -window.scrollY
        });

        const imgData = canvas.toDataURL('image/png', 1.0);
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p','mm','a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pageWidth;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        let position = 0;
        let heightLeft = pdfHeight;

        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position = heightLeft - pdfHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
          heightLeft -= pageHeight;
        }

        const periodDate = lastRenderedPeriod
          ? new Date(lastRenderedPeriod.year, lastRenderedPeriod.month, 1)
          : new Date();
        const fileName = `mbs-reporte-${periodDate.getFullYear()}-${String(periodDate.getMonth()+1).padStart(2,'0')}.pdf`;
        pdf.save(fileName);
      } catch(err) {
        console.error('Error generando PDF:', err);
        alert('No se pudo generar el PDF: ' + (err?.message || err));
      } finally {
        root.classList.remove('pdf-export');
        downloadBtn.innerHTML = originalHtml;
        downloadBtn.disabled = false;
        if (hadPrimary) downloadBtn.classList.add('primary');
      }
    });

    if (saveEvolutionBtn){
      saveEvolutionBtn.addEventListener('click', ()=>{
        if (!currentEvolutionSnapshot){
          alert('Carga un CSV de caja y procesa los datos antes de guardar un periodo.');
          return;
        }
        const baseDate = lastRenderedPeriod
          ? new Date(lastRenderedPeriod.year, lastRenderedPeriod.month, 1)
          : new Date();
        const formatter = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' });
        const defaultLabelRaw = formatter.format(baseDate).replace(/\sde\s/gi, ' ');
        const defaultLabel = defaultLabelRaw.charAt(0).toUpperCase() + defaultLabelRaw.slice(1);
        const proposed = currentEvolutionSnapshot.label && currentEvolutionSnapshot.label.trim()
          ? currentEvolutionSnapshot.label.trim()
          : defaultLabel;
        const label = prompt('Nombre del periodo (ej. "Marzo 2025")', proposed);
        if (label == null) return;
        const trimmed = label.trim();
        if (!trimmed){
          alert('El nombre del periodo no puede estar vacío.');
          return;
        }

        let snapshot;
        try {
          snapshot = JSON.parse(JSON.stringify(currentEvolutionSnapshot));
        } catch(_){
          snapshot = { ...currentEvolutionSnapshot };
        }

        snapshot.id = snapshot.id || `snap-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`;
        snapshot.label = trimmed;
        snapshot.source = 'widget';
        snapshot.createdAt = snapshot.createdAt || new Date().toISOString();

        const existingIndex = evolutionSnapshots.findIndex(item => item && (item.id === snapshot.id));
        if (existingIndex >= 0){
          evolutionSnapshots[existingIndex] = snapshot;
        } else {
          evolutionSnapshots.push(snapshot);
        }
        evolutionSnapshots.sort((a,b)=>{
          const da = new Date(a?.createdAt || 0).getTime();
          const db = new Date(b?.createdAt || 0).getTime();
          return da - db;
        });
        saveEvolutionSnapshots();
        const tempSnapshots = (evoActiveSnapshots || []).filter(item => item && item.source === 'csv-upload');
        setActiveEvolutionSnapshots([...tempSnapshots, snapshot]);
        syncEvolutionSelection();
        alert('Periodo guardado correctamente en la evolución.');
      });
    }

    resetBtn.addEventListener('click', ()=>{
      if (!confirm('¿Resetear porcentajes y retenciones guardados?')) return;
      try{
        localStorage.removeItem(LS_PCTS_NUTRI);
        localStorage.removeItem(LS_RET_NUTRI);
        localStorage.removeItem(LS_LOGO_PCTS);
        localStorage.removeItem(LS_LOGO_RET);
        localStorage.removeItem(LS_LOGO_RET_MAP);
        localStorage.removeItem(LS_SEM_VALUES);
        localStorage.removeItem(LS_TOPD_VALUES);
        localStorage.removeItem(LS_RECEPCION_VALUE);
      }catch(_){}
      loadNutriCfg();
      loadLogoCfg();
      loadSemTopdCfg();
      loadRecepcionCfg();
      loadEvolutionSnapshots();
      renderEvolutionSavedOptions();
      handleSavedSelectionChange();
      buildNutriPayouts();
      buildLogoPayouts();
      buildNekanePayouts();
    });

    /* Nutri events */
    loadNutriCfg();
    nutriRet && nutriRet.addEventListener('input', ()=>{ saveNutriCfg(); buildNutriPayouts(); });
    nutriBody.addEventListener('input', (e)=>{
      const t=e.target;
      if (t && t.matches('input[data-nutri]')){
        const key=t.getAttribute('data-nutri');
        const v=Math.max(0,Math.min(100, parseFloat(t.value)||0));
        t.value = v; nutriPctMap[key]=v; saveNutriCfg(); buildNutriPayouts();
      }
    });
    nutriCSV && nutriCSV.addEventListener('click', ()=>{
      if (nutriCSV.disabled) return;
      const {rows} = computeNutriRows();
      const csvRows = [['nutri','base (€)','% nutri','bruto nutri (€)','% retencion','retencion (€)','pago neto (€)','% centro','centro (€)']];
      rows.forEach(r=>{
        csvRows.push([r.nameDisp, fmtEUR(r.base), r.pct+'%', fmtEUR(r.gross), r.ret+'%', fmtEUR(r.reten), fmtEUR(r.net), (100-r.pct)+'%', fmtEUR(r.cent)]);
      });
      const csv = csvRows.map(r=>r.join(';')).join('\n');
      const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');
      a.href=url; a.download='pagos_nutris.csv';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(()=>URL.revokeObjectURL(url),500);
    });
    nutriPDF && nutriPDF.addEventListener('click', ()=>{
      handlePayoutPdf(nutriPDF, ()=>{
        const {rows, totals} = computeNutriRows();
        const euro = (value)=> (typeof value === 'number' && isFinite(value)) ? fmtEUR(value) + ' €' : (value == null || value === '' ? '—' : String(value));
        return {
          title: 'Pagos Nutris',
          subtitle: 'Importes a transferir a las nutricionistas colaboradoras.',
          fileBase: 'pagos-nutris',
          individualRows: true,
          rowTitleKey: 'name',
          individualTotals: (row)=>({ before: row.before, retention: row.retention, net: row.net }),
          columns: [
            { key: 'name', label: 'Colaboradora', align: 'left', width: 1.8 },
            { key: 'before', label: 'Antes de retención (€)', align: 'right', width: 1.2, format: euro },
            { key: 'retention', label: 'Retención (€)', align: 'right', width: 1, format: euro },
            { key: 'net', label: 'Pago neto (€)', align: 'right', width: 1, format: euro }
          ],
          rows: rows.map(r=>({ name: r.nameDisp, before: r.gross, retention: r.reten, net: r.net })),
          totals: { before: totals.gross, retention: totals.reten, net: totals.net }
        };
      });
    });

    /* Logopedas events */
    loadLogoCfg();
    logoRet && logoRet.addEventListener('input', ()=>{ saveLogoCfg(); buildLogoPayouts(); });
    logoBody.addEventListener('input', (e)=>{
      const t=e.target;
      if (!t) return;
      if (t.matches('input[data-logo]')){
        const key=t.getAttribute('data-logo');
        const v=Math.max(0,Math.min(100, parseFloat(t.value)||0));
        t.value = v; logoPctMap[key]=v; saveLogoCfg(); buildLogoPayouts();
      } else if (t.matches('input[data-logo-ret]')){
        const key=t.getAttribute('data-logo-ret');
        const v=Math.max(0,Math.min(100, parseFloat(t.value)||0));
        t.value = v; logoRetMap[key]=v; saveLogoCfg(); buildLogoPayouts();
      }
    });
    logoCSV && logoCSV.addEventListener('click', ()=>{
      if (logoCSV.disabled) return;
      const {rows} = computeLogoRows();
      const csvRows = [['logopeda','base (€)','% pro','bruto pro (€)','% retencion','retencion (€)','pago neto (€)','% centro','centro (€)']];
      rows.forEach(r=>{
        csvRows.push([r.nameDisp, fmtEUR(r.base), r.pct+'%', fmtEUR(r.gross), r.ret+'%', fmtEUR(r.reten), fmtEUR(r.net), (100-r.pct)+'%', fmtEUR(r.cent)]);
      });
      const csv = csvRows.map(r=>r.join(';')).join('\n');
      const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');
      a.href=url; a.download='pagos_logopedas.csv';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(()=>URL.revokeObjectURL(url),500);
    });
    logoPDF && logoPDF.addEventListener('click', ()=>{
      handlePayoutPdf(logoPDF, ()=>{
        const {rows, totals} = computeLogoRows();
        const euro = (value)=> (typeof value === 'number' && isFinite(value)) ? fmtEUR(value) + ' €' : (value == null || value === '' ? '—' : String(value));
        return {
          title: 'Pagos Logopedas',
          subtitle: 'Detalle de importes para logopedas antes de la retención y pago neto.',
          fileBase: 'pagos-logopedas',
          individualRows: true,
          rowTitleKey: 'name',
          individualTotals: (row)=>({ before: row.before, retention: row.retention, net: row.net }),
          columns: [
            { key: 'name', label: 'Colaboradora', align: 'left', width: 1.8 },
            { key: 'before', label: 'Antes de retención (€)', align: 'right', width: 1.2, format: euro },
            { key: 'retention', label: 'Retención (€)', align: 'right', width: 1, format: euro },
            { key: 'net', label: 'Pago neto (€)', align: 'right', width: 1, format: euro }
          ],
          rows: rows.map(r=>({ name: r.nameDisp, before: r.gross, retention: r.reten, net: r.net })),
          totals: { before: totals.gross, retention: totals.reten, net: totals.net }
        };
      });
    });
    nekanePDF && nekanePDF.addEventListener('click', ()=>{
      handlePayoutPdf(nekanePDF, ()=>{
        const {rows, totals} = computeNekaneRows();
        const euro = (value)=> (typeof value === 'number' && isFinite(value)) ? fmtEUR(value) + ' €' : (value == null || value === '' ? '—' : String(value));
        return {
          title: 'Pagos Nekane',
          subtitle: 'Detalle del pago bruto antes de retención y el neto a transferir.',
          fileBase: 'pagos-nekane',
          individualRows: true,
          rowTitleKey: 'name',
          individualTotals: (row)=>({ before: row.before, retention: row.retention, net: row.net }),
          columns: [
            { key: 'name', label: 'Colaboradora', align: 'left', width: 1.8 },
            { key: 'before', label: 'Antes de retención (€)', align: 'right', width: 1.2, format: euro },
            { key: 'retention', label: 'Retención (€)', align: 'right', width: 1, format: euro },
            { key: 'net', label: 'Pago neto (€)', align: 'right', width: 1, format: euro }
          ],
          rows: rows.map(r=>({ name: r.nameDisp, before: r.after, retention: r.reten, net: r.net })),
          totals: { before: totals.after, retention: totals.reten, net: totals.net }
        };
      });
    });

    // Solo mostrar mensaje si no hay datos
    if (parsedRows.length === 0) {
      stats.textContent = 'No hay datos cargados. Sube un archivo CSV.';
    }

   // Función centralizada para actualizar datos
function updateSummaryAndRefresh(key, field, value) {
  const entry = Object.entries(summary).find(([name]) => nameKey(name) === key);
  if (entry) {
    entry[1][field] = value;
    entry[1].bruto = entry[1].prim + entry[1].suc + entry[1].otros + (entry[1].seguros || 0);
    
    // Actualizar solo lo necesario
    renderTable();
    buildNutriPayouts();
    buildLogoPayouts();
    buildNekanePayouts();
    buildRentabilidad();
    updateKpiFromTable();
  }
}

// Event listener optimizado
resultsBody.addEventListener('input', (e)=>{
  const t = e.target;
  if (!t) return;
  
  const key = t.getAttribute('data-seguros') || t.getAttribute('data-prim') || t.getAttribute('data-suc');
  const field = t.getAttribute('data-seguros') ? 'seguros' : 
                t.getAttribute('data-prim') ? 'prim' : 'suc';
  
  if (key && field) {
    const v = Math.max(0, parseFloat(t.value) || 0);
    t.value = v;
    updateSummaryAndRefresh(key, field, v);
  }
});

    // Eventos para KPIs editables
    rentKpiDoctoralia.addEventListener('click', ()=>{
      const newVal = prompt('Nuevo valor Doctoralia (€):', '-318,48');
      if (newVal !== null) {
        const numVal = parseFloat(newVal.replace(',', '.'));
        if (!isNaN(numVal)) {
          rentKpiDoctoralia.textContent = fmtEUR(numVal) + ' €';
        }
      }
    });

    rentKpiTopD.addEventListener('click', ()=>{
      const newVal = prompt('Nuevo valor Top Doctors (€):', '-156,09');
      if (newVal !== null) {
        const numVal = parseFloat(newVal.replace(',', '.'));
        if (!isNaN(numVal)) {
          rentKpiTopD.textContent = fmtEUR(numVal) + ' €';
        }
      }
    });

    rentKpiRecepcion.addEventListener('click', ()=>{
      const defaultValue = fmtEUR(recepcionValue > 0 ? recepcionValue : 0);
      const newVal = prompt('Nuevo valor Recepción (€):', defaultValue);
      if (newVal !== null) {
        const numVal = parseFloat(newVal.replace(',', '.'));
        if (!isNaN(numVal)) {
          recepcionValue = Math.abs(numVal);
          rentKpiRecepcion.textContent = '-' + fmtEUR(recepcionValue) + ' €';
          saveRecepcionCfg();
          buildRentabilidad();
        }
      }
    });

    // Evento para inputs SEM y TopD en rentabilidad
    rentBody.addEventListener('input', (e)=>{
      const t=e.target;
      if (t && t.matches('input[data-rent-sem]')){
        const key=t.getAttribute('data-rent-sem');
        const v=Math.max(0, parseFloat(t.value)||0);
        t.value = v;
        
        // Guardar en map y localStorage
        semValues[key] = v;
        saveSemTopdCfg();
        
        // Actualizar summary
        const entry = Object.entries(summary).find(([name]) => nameKey(name) === key);
        if (entry) {
          entry[1].sem = v;
        }
        
        buildRentabilidad();
      }
      
      if (t && t.matches('input[data-rent-topd]')){
        const key=t.getAttribute('data-rent-topd');
        const v=Math.max(0, parseFloat(t.value)||0);
        t.value = v;
        
        // Guardar en map y localStorage
        topdValues[key] = v;
        saveSemTopdCfg();
        
        // Actualizar summary
        const entry = Object.entries(summary).find(([name]) => nameKey(name) === key);
        if (entry) {
          entry[1].topd = v;
        }
        
        buildRentabilidad();
      }
    });

    // Cargar configuraciones al inicializar
    loadSemTopdCfg();
    loadRecepcionCfg();

  } // end initWidget
})();
    </script>
  </div>

  <div class="mbs-suite-panel" data-panel="variables" id="panel-variables" role="tabpanel" aria-labelledby="tab-variables" aria-hidden="true">
<!-- ============= MBS · Variables Logopedia & Psicología ============= --><style>
  /* ========== Design tokens (namespaced) ========== */
  .mbs-variables-widget{
  --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --fg:#0b1f33;
  --muted:#687588;
  --surface:#ffffff;
  --surface-2:#f8fbff;
  --surface-3:#f4f8ff;
  --border:#d9e6f3;
  --blue-25:#f5f9ff;
  --blue-50:#eff6ff;
  --blue-100:#e6f1ff;
  --blue-200:#d5e6ff;
  --blue-500:#3b82f6;
  --blue-600:#2563eb;
  --teal-500:#14b8a6;
  --indigo-500:#6366f1;
  --amber-500:#f59e0b;
  --rose-500:#f43f5e;
  --emerald-500:#10b981;
  /* Chart palette */
  --chart-1:#3b82f6;
  --chart-2:#14b8a6;
  --chart-3:#6366f1;
  --chart-4:#f59e0b;
  --chart-5:#f43f5e;
  --chart-6:#10b981;
  --chart-7:#06b6d4;
  --chart-8:#a855f7;
  --row-even:#fafcff;
  --row-hover:#eef6ff;
  --total-bg:#f2f7ff;
  --shadow-1: 0 10px 28px rgba(37,99,235,.09), 0 2px 8px rgba(37,99,235,.05);
  --shadow-2: 0 16px 42px rgba(20,184,166,.12), 0 4px 14px rgba(20,184,166,.07);
  font-family:var(--font);
  color:var(--fg);
  max-width:1200px;
  margin:1rem auto 1.25rem;
  font-variant-numeric: tabular-nums;
  /* ✅ AISLAR COMPLETAMENTE */
  position: relative;
  z-index: 1;
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

  /* ---------- Headings ---------- */
  .mbs-variables-widget .mbs-h3{
    margin:0 0 .9rem;
    font-size:1.85rem;
    letter-spacing:-.02em;
    display:flex;
    align-items:center;
    gap:.6rem;
  }

  .mbs-variables-widget .mbs-widget-header{
    display:flex;
    align-items:center;
    gap:1.2rem;
    margin-bottom:1.8rem;
    padding-bottom:1.1rem;
    border-bottom:1px solid rgba(15,23,42,.08);
  }

  .mbs-variables-widget .mbs-widget-header-icon{
    width:60px;
    height:60px;
    border-radius:18px;
    background:linear-gradient(135deg,#2563eb 0%,#0ea5e9 100%);
    box-shadow:0 12px 28px rgba(37,99,235,.18);
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
  }

  .mbs-variables-widget .mbs-widget-title{
    display:flex;
    flex-direction:column;
    gap:.4rem;
  }

  .mbs-variables-widget .mbs-widget-eyebrow{
    text-transform:uppercase;
    font-size:.75rem;
    letter-spacing:.2em;
    font-weight:700;
    color:rgba(15,23,42,.55);
  }

  .mbs-variables-widget .mbs-widget-title h3{
    margin:0;
    font-size:1.95rem;
    letter-spacing:-.02em;
    color:#0f172a;
  }

  .mbs-variables-widget .mbs-widget-subtitle{
    margin:0;
    font-size:.92rem;
    color:#475569;
    max-width:42ch;
  }
  .mbs-variables-widget .mbs-h3 svg{width:30px;height:30px;color:var(--blue-600)}
  .mbs-variables-widget .mbs-h4{
    margin:.45rem 0 .8rem;
    font-size:1.16rem;
    letter-spacing:.2px
  }

  /* ---------- Toolbar / inputs / buttons ---------- */
  .mbs-variables-widget .mbs-toolbar{
    display:flex;
    gap:16px;
    flex-wrap:wrap;
    align-items:flex-end;
    margin:.75rem 0 1.05rem;
    position:sticky;
    top:8px;
    z-index:20;
    background:linear-gradient(180deg,#fff 0%,#f9fbff 100%);
    border:1px solid var(--border);
    border-radius:14px;
    padding:12px 14px;
    box-shadow: 0 6px 22px rgba(37,99,235,.06);
    backdrop-filter:saturate(1.1);
  }
  .mbs-variables-widget .mbs-help{font-size:.9rem; color:var(--muted)}
  .mbs-variables-widget .mbs-row{display:flex; gap:.85rem; flex-wrap:wrap; align-items:center}
  .mbs-variables-widget .mbs-chip{
    display:inline-flex;
    align-items:center;
    gap:.45rem;
    padding:.35rem .65rem;
    border-radius:999px;
    border:1px solid #cfe3ff;
    background:linear-gradient(180deg,#f3f8ff 0%,#eaf4ff 100%);
    color:#0b3a63;
    font-size:.8rem;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.6);
  }
  .mbs-variables-widget .mbs-input,.mbs-variables-widget .mbs-select, .mbs-variables-widget textarea{
    width:100%;
    min-width:220px;
    max-width:300px;
    padding:.64rem .78rem;
    border:1px solid var(--border);
    border-radius:12px;
    background:#fff;
    color:#0b1f33;
    transition:border .15s ease, box-shadow .15s ease, background .15s ease, transform .06s ease;
    font-family: var(--font);
  }
  .mbs-variables-widget .mbs-input[type="number"]{min-width:96px; text-align:right}
  .mbs-variables-widget .mbs-input:focus,.mbs-variables-widget .mbs-select:focus,.mbs-variables-widget textarea:focus{
    outline:none;
    border-color:#97c2ff;
    box-shadow:0 0 0 4px rgba(59,130,246,.18)
  }
  .mbs-variables-widget input[type="checkbox"]{accent-color: var(--blue-600);}
  .mbs-variables-widget .mbs-btn{
    appearance:none;
    border:1px solid var(--border);
    background:linear-gradient(180deg,#fff 0%,#f7fbff 100%);
    color:#0b1f33;
    padding:.64rem 1.05rem;
    border-radius:12px;
    font-weight:800;
    letter-spacing:.15px;
    transition:transform .12s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease;
    box-shadow:0 1px 0 rgba(15,23,42,.04), 0 1px 10px rgba(59,130,246,.06);
    cursor:pointer;
    display:inline-flex;
    align-items:center;
    gap:.5rem;
  }
  .mbs-variables-widget .mbs-btn:hover{border-color:#9ec5ff; box-shadow:0 8px 24px rgba(59,130,246,.14)}
  .mbs-variables-widget .mbs-btn:active{transform:translateY(1px)}
  .mbs-variables-widget .mbs-btn[disabled]{opacity:.55; cursor:not-allowed; box-shadow:none}
  .mbs-variables-widget .mbs-btn.primary{
    background:linear-gradient(180deg, var(--blue-500) 0%, var(--blue-600) 100%);
    border-color:var(--blue-600);
    color:#fff;
    box-shadow:0 10px 24px rgba(37,99,235,.22);
  }

  /* ---------- KPI cards ---------- */
  .mbs-variables-widget .mbs-kpis{display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; margin:.95rem 0 1.15rem}
  .mbs-variables-widget .mbs-kpi{
    background:#fff;
    border:1px solid var(--border);
    border-radius:14px;
    padding:14px 16px;
    box-shadow:var(--shadow-1);
    transition:transform .12s ease, box-shadow .18s ease;
  }
  .mbs-variables-widget .mbs-kpi:hover{transform:translateY(-1px); box-shadow:0 14px 28px rgba(37,99,235,.12)}
  .mbs-variables-widget .mbs-kpi .k-label{font-size:.78rem; color:var(--muted); letter-spacing:.2px}
  .mbs-variables-widget .mbs-kpi .k-value{
    font-size:1.42rem;
    font-weight:900;
    margin-top:.28rem;
    background:linear-gradient(90deg,var(--blue-600) 0%, var(--indigo-500) 60%, var(--teal-500) 100%);
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
  }

  /* ---------- Tables ---------- */
  .mbs-variables-widget .mbs-tablewrap{
    overflow:auto;
    border:1px solid var(--border);
    border-radius:14px;
    background:#fff;
    box-shadow:var(--shadow-1);
  }
  .mbs-variables-widget .mbs-table{width:100%; border-collapse:separate; border-spacing:0; font-size:.98rem}
  .mbs-variables-widget .mbs-table th,.mbs-variables-widget .mbs-table td{padding:.88rem .9rem; border-bottom:1px solid #f1f5f9; vertical-align:middle}
  .mbs-variables-widget .mbs-table th{
    background:linear-gradient(180deg,#f8fbff 0%,#f1f5f9 100%);
    font-weight:700;
    font-size:.85rem;
    letter-spacing:.3px;
    color:#475569;
    text-align:left;
    position:sticky;
    top:0;
    z-index:10;
  }
  .mbs-variables-widget .mbs-table tbody tr:nth-child(even){background:var(--row-even)}
  .mbs-variables-widget .mbs-table tbody tr:hover{background:var(--row-hover)}
  .mbs-variables-widget .mbs-table tfoot{
    background:var(--total-bg);
    border-top:2px solid var(--blue-200);
  }
  .mbs-variables-widget .mbs-table tfoot td{
    font-weight:800;
    color:#1e293b;
    border-bottom:none;
  }

  /* ---------- Payroll sections ---------- */
  .mbs-variables-widget .mbs-payroll{
    margin-top:1.5rem;
    border:1px solid var(--border);
    border-radius:16px;
    background:var(--surface-2);
    padding:1.2rem;
    box-shadow:var(--shadow-1);
  }
  .mbs-variables-widget .mbs-payroll h4{
    margin:0 0 1rem;
    font-size:1.1rem;
    color:#1e293b;
    display:flex;
    align-items:center;
    gap:.5rem;
  }
  .mbs-variables-widget .mbs-payroll h4 svg{width:20px;height:20px;color:var(--blue-600)}
  .mbs-variables-widget .mbs-payroll-grid{
  display:grid;
  grid-template-columns:repeat(6,minmax(200px,1fr)); /* ✅ MÁS ANCHO */
  gap:2rem; /* ✅ MÁS ESPACIO */
  margin-bottom:1rem;
  row-gap:2rem; /* ✅ MÁS ESPACIO VERTICAL */
}
.mbs-variables-widget .mbs-payroll-grid .span-2{grid-column:span 2}
.mbs-variables-widget .mbs-payroll-grid .span-3{grid-column:span 3}
  .mbs-variables-widget .mbs-payroll-settings{
    margin-top:1rem;
    border:1px solid var(--border);
    border-radius:12px;
    background:var(--surface);
    padding:.55rem .9rem .95rem;
    box-shadow:0 6px 18px rgba(15,23,42,.05);
  }
  .mbs-variables-widget .mbs-payroll-settings summary{
    cursor:pointer;
    font-weight:600;
    display:flex;
    align-items:center;
    gap:.45rem;
    list-style:none;
    color:#1e293b;
    position:relative;
  }
  .mbs-variables-widget .mbs-payroll-settings summary::-webkit-details-marker{display:none;}
  .mbs-variables-widget .mbs-payroll-settings summary::after{
    content:'';
    width:10px;
    height:10px;
    border-right:2px solid currentColor;
    border-bottom:2px solid currentColor;
    transform:rotate(45deg);
    transition:transform .18s ease;
    margin-left:auto;
  }
  .mbs-variables-widget .mbs-payroll-settings[open] summary::after{
    transform:rotate(-135deg);
  }
  .mbs-variables-widget .mbs-payroll-settings-content{
    margin-top:.75rem;
    border-top:1px dashed var(--border);
    padding-top:.85rem;
  }
.mbs-variables-widget .mbs-payroll-v2{
  margin-top:1.5rem;
  border:1px solid var(--border);
  border-radius:16px;
  padding:1.4rem 1.6rem;
  background:var(--surface);
  box-shadow:var(--shadow-1);
  display:grid;
  gap:1.6rem;
}
.mbs-variables-widget .mbs-payroll-v2-header{
  display:flex;
  flex-wrap:wrap;
  gap:1rem;
  align-items:flex-end;
  justify-content:space-between;
}
.mbs-variables-widget .mbs-payroll-v2-month{display:flex;flex-direction:column;gap:.35rem;}
.mbs-variables-widget .mbs-payroll-v2-month label{font-weight:600;}
.mbs-variables-widget .mbs-payroll-v2-chip{
  display:inline-flex;
  align-items:center;
  gap:.45rem;
  padding:.5rem .85rem;
  border-radius:999px;
  background:var(--surface-2);
  border:1px solid var(--border);
  font-size:.85rem;
  color:var(--muted);
}
.mbs-variables-widget .mbs-payroll-v2-roles{display:grid; gap:1.5rem;}
.mbs-variables-widget .mbs-payroll-v2-role{
  border:1px solid var(--border);
  border-radius:16px;
  background:var(--surface-2);
  box-shadow:var(--shadow-1);
  padding:1.2rem 1.4rem;
  display:grid;
  gap:1.2rem;
}
.mbs-variables-widget .mbs-payroll-v2-role h5{
  margin:0;
  font-size:1.05rem;
  color:#1e293b;
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.mbs-variables-widget .mbs-payroll-v2-role h5 span{font-size:.8rem; font-weight:500; color:var(--muted);}
.mbs-variables-widget .mbs-payroll-v2-subtabs{display:inline-flex;gap:.5rem;background:var(--surface);padding:.25rem;border-radius:999px;border:1px solid var(--border);}
.mbs-variables-widget .mbs-payroll-v2-subtabs button{border:0;background:transparent;padding:.45rem .9rem;border-radius:999px;font-weight:600;font-size:.85rem;color:var(--muted);cursor:pointer;transition:all .2s;}
.mbs-variables-widget .mbs-payroll-v2-subtabs button.is-active{background:linear-gradient(135deg,#2563eb 0%,#4338ca 100%);color:#fff;box-shadow:0 8px 18px rgba(37,99,235,.25);}
.mbs-variables-widget .mbs-payroll-v2-subtabs button:focus-visible{outline:2px solid rgba(37,99,235,.65);outline-offset:2px;}
.mbs-variables-widget .mbs-payroll-v2-subpanels{margin-top:.8rem;}
.mbs-variables-widget .mbs-payroll-v2-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1rem;}
.mbs-variables-widget .mbs-payroll-v2-panel{display:none;}
.mbs-variables-widget .mbs-payroll-v2-panel.is-active{display:grid;}
.mbs-variables-widget .mbs-payroll-v2-grid .full{grid-column:1/-1;}
.mbs-variables-widget .mbs-payroll-v2-grid label{font-weight:600; display:block; margin-bottom:.35rem;}
.mbs-variables-widget .mbs-payroll-v2-toggle{display:flex;align-items:center;gap:.5rem;font-weight:600;}
.mbs-variables-widget .mbs-payroll-v2-table{width:100%; border-collapse:separate; border-spacing:0; font-size:.95rem;}
.mbs-variables-widget .mbs-payroll-v2-table th,
.mbs-variables-widget .mbs-payroll-v2-table td{padding:.6rem .7rem; border-bottom:1px solid #e2e8f0; text-align:right;}
.mbs-variables-widget .mbs-payroll-v2-table th:first-child,
.mbs-variables-widget .mbs-payroll-v2-table td:first-child{text-align:left;}
  .mbs-variables-widget .mbs-payroll-v2-highlight{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:1.2rem;
    margin:1.2rem 0 1.4rem;
  }
  .mbs-variables-widget .mbs-payroll-v2-highlight-card{
    position:relative;
    display:flex;
    gap:1rem;
    align-items:flex-start;
    padding:1.25rem 1.35rem;
    border:1px solid #dfe7f3;
    border-radius:18px;
    background:linear-gradient(180deg,#f9fbff 0%,#ffffff 100%);
    box-shadow:0 12px 30px rgba(15,23,42,.08);
  }
  .mbs-variables-widget .mbs-payroll-v2-highlight-card::after{
    content:'';
    position:absolute;
    inset:0;
    border-radius:18px;
    pointer-events:none;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.9);
  }
  .mbs-variables-widget .mbs-payroll-v2-highlight-card .icon{
    flex:0 0 44px;
    width:44px;
    height:44px;
    border-radius:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(37,99,235,.12);
    color:#1d4ed8;
  }
  .mbs-variables-widget .mbs-payroll-v2-highlight-card.is-accent .icon{
    background:linear-gradient(135deg,#2563eb 0%,#4338ca 100%);
    color:#fff;
  }
  .mbs-variables-widget .mbs-payroll-v2-highlight-card .content{
    display:flex;
    flex-direction:column;
    gap:.45rem;
  }
  .mbs-variables-widget .mbs-payroll-v2-highlight-card .label{
    text-transform:uppercase;
    font-size:.74rem;
    letter-spacing:.16em;
    color:#64748b;
    font-weight:700;
  }
  .mbs-variables-widget .mbs-payroll-v2-highlight-card .value{
    font-size:1.5rem;
    font-weight:700;
    color:#0f172a;
  }
  .mbs-variables-widget .mbs-payroll-v2-highlight-card .hint{
    font-size:.8rem;
    color:#475569;
    line-height:1.4;
  }
  .mbs-variables-widget .mbs-payroll-v2-highlight-card.mbs-payroll-v2-highlight-muted{
    background:#f8fafc;
    box-shadow:none;
    opacity:.75;
  }
  .mbs-variables-widget .mbs-payroll-v2-highlight-card.mbs-payroll-v2-highlight-muted .icon{
    background:rgba(148,163,184,.18);
    color:#475569;
  }
  .mbs-variables-widget .mbs-payroll-v2-highlight-card.mbs-payroll-v2-highlight-muted .value{
    color:#475569;
    font-size:1.1rem;
    font-weight:600;
  }
  .mbs-variables-widget .mbs-payroll-v2-summary{display:grid; gap:.55rem; font-size:.95rem;}
  .mbs-variables-widget .mbs-payroll-v2-summary strong{font-size:1.05rem;}
  .mbs-variables-widget .mbs-payroll-v2-summary-row{display:flex; justify-content:space-between; align-items:center; gap:1rem;}
  .mbs-variables-widget .mbs-payroll-v2-summary-row span:first-child{color:#475569; font-weight:600;}
  .mbs-variables-widget .mbs-payroll-v2-summary-row span:last-child{font-weight:700; color:#0f172a; font-variant-numeric:tabular-nums;}
  .mbs-variables-widget .mbs-payroll-v2-summary-row[data-coste="total"]{padding:.55rem .75rem; background:var(--total-bg); border-radius:10px;}
  .mbs-variables-widget .mbs-payroll-v2-summary-row[data-total]{padding:.55rem .75rem; background:var(--total-bg); border-radius:10px;}
.mbs-variables-widget .mbs-payroll-v2-details details{border:1px solid var(--border); border-radius:10px; padding:.75rem .9rem; background:#fff;}
.mbs-variables-widget .mbs-payroll-v2-details summary{cursor:pointer; font-weight:600; margin-bottom:.45rem;}
.mbs-variables-widget .mbs-payroll-v2-details table{width:100%; font-size:.9rem; border-collapse:collapse;}
.mbs-variables-widget .mbs-payroll-v2-details td{padding:.4rem .3rem; border-bottom:1px solid #e2e8f0;}
.mbs-variables-widget .mbs-payroll-v2-details td:last-child{text-align:right;}
.mbs-variables-widget .mbs-payroll-v2-note{font-size:.8rem; color:var(--muted);}
@media (max-width:720px){
  .mbs-variables-widget .mbs-payroll-v2{padding:1.2rem;}
}
  .mbs-variables-widget .mbs-payroll-table{
    width:100%;
    border-collapse:collapse;
    margin-top:1rem;
    border:1px solid var(--border);
    border-radius:12px;
    overflow:hidden;
  }
  .mbs-variables-widget .mbs-payroll-table th,.mbs-variables-widget .mbs-payroll-table td{
    padding:.75rem;
    border-bottom:1px solid #f1f5f9;
    text-align:right;
  }
  .mbs-variables-widget .mbs-payroll-table th:first-child,.mbs-variables-widget .mbs-payroll-table td:first-child{text-align:left}
  .mbs-variables-widget .mbs-payroll-table th{
    background:linear-gradient(180deg,#f8fbff 0%,#f1f5f9 100%);
    font-weight:700;
    font-size:.85rem;
    color:#475569;
  }
  .mbs-variables-widget .mbs-payroll-block{
    border:1px solid var(--border);
    border-radius:12px;
    padding:1rem;
    margin-top:1rem;
    background:#fff;
  }
  .mbs-variables-widget .mbs-payroll-summary{
    margin-top:1rem;
    background:var(--surface-2);
    border:1px solid var(--border);
    border-radius:12px;
    padding:.75rem 1rem;
    font-size:.9rem;
    line-height:1.45;
  }
  .mbs-variables-widget .mbs-payroll-summary strong{
    display:block;
    margin-bottom:.35rem;
    color:#0b1f33;
  }
  .mbs-variables-widget .mbs-payroll-summary span{
    font-variant-numeric: tabular-nums;
  }
  .mbs-variables-widget .mbs-muted{opacity:.7; color:var(--muted)}

  /* ---------- Config panel ---------- */
  .mbs-variables-widget .mbs-config{
    display:none;
    margin:1rem 0;
    border:1px dashed var(--border);
    border-radius:12px;
    padding:1rem;
    background:var(--surface-3);
  }
  .mbs-variables-widget .mbs-config h4{
    margin:.2rem 0 .6rem;
    font-size:1rem;
    color:#1e293b;
  }
  .mbs-variables-widget .mbs-config-grid{
    display:grid;
    grid-template-columns:repeat(4,minmax(180px,1fr));
    gap:1rem;
  }
  .mbs-variables-widget .mbs-config-grid label{
    font-size:.85rem;
    color:#334155;
    font-weight:600;
  }
  .mbs-variables-widget .mbs-tiny{font-size:.75rem; color:var(--muted); margin-top:.25rem}
  .mbs-variables-widget .mbs-pill{
    display:inline-block;
    padding:.2rem .5rem;
    border:1px solid var(--border);
    border-radius:6px;
    background:var(--surface-2);
    margin:.1rem;
    font-size:.75rem;
    color:var(--muted);
  }
  .mbs-variables-widget .mbs-debug{
    margin-top:1rem;
    border-top:1px dashed var(--border);
    padding-top:1rem;
  }
  .mbs-variables-widget .mbs-debug pre{
    max-height:200px;
    overflow:auto;
    background:#0b1022;
    color:#d5f2ff;
    border-radius:8px;
    padding:.75rem;
    font-size:.75rem;
    margin-top:.5rem;
  }

  /* ---------- Error states ---------- */
  .mbs-variables-widget .mbs-err{
    padding:.75rem 1rem;
    margin:.75rem 0;
    border:1px solid #fca5a5;
    background:#fef2f2;
    color:#991b1b;
    border-radius:8px;
    display:none;
  }
  .mbs-variables-widget .mbs-ok{color:#059669}
  .mbs-variables-widget .mbs-note{
    font-size:.85rem;
    color:var(--muted);
    margin-top:.75rem;
    padding:.75rem;
    background:var(--surface-3);
    border-radius:8px;
    border-left:4px solid var(--blue-500);
  }

  /* ---------- Responsive ---------- */
  @media (max-width:900px){
    .mbs-variables-widget .mbs-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}
    .mbs-variables-widget .mbs-payroll-grid{grid-template-columns:repeat(2,minmax(150px,1fr))}
    .mbs-variables-widget .mbs-config-grid{grid-template-columns:repeat(2,minmax(160px,1fr))}
    .mbs-variables-widget .mbs-payroll-v2-highlight{grid-template-columns:repeat(2,minmax(0,1fr));}
  }
  @media (max-width:560px){
    .mbs-variables-widget .mbs-kpis{grid-template-columns:1fr}
    .mbs-variables-widget .mbs-payroll-grid{grid-template-columns:1fr}
    .mbs-variables-widget .mbs-config-grid{grid-template-columns:1fr}
    .mbs-variables-widget .mbs-payroll-v2-highlight{grid-template-columns:1fr;}
  }
</style>
<div class="mbs-variables-widget" data-mbs style="position: relative; z-index: 1; background: #fff; border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
  <header class="mbs-widget-header">
    <div class="mbs-widget-header-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2"></rect>
        <path d="M7 4V2M17 4V2"></path>
        <path d="M7 10h5"></path>
        <path d="M7 14h10"></path>
      </svg>
    </div>
    <div class="mbs-widget-title">
      <span class="mbs-widget-eyebrow">Suite MBS</span>
      <h3>Recursos Humanos</h3>
      <p class="mbs-widget-subtitle">Simulador integral de nómina y cobros profesionales.</p>
    </div>
  </header>

  <div class="mbs-toolbar">
  <div class="mbs-row">
    <div>
      <label style="font-weight:600; display:block; margin-bottom:.5rem">Listado de Citas (XLSX/CSV)</label>
      <input type="file"
             accept=".xlsx,.xls,.xlsm,.xlsb,.ods,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv,application/vnd.ms-excel,application/octet-stream"
             data-ref="file1" multiple class="mbs-input">
      <div class="mbs-tiny">Archivo 1: Listado de citas</div>

      <input type="file"
             accept=".xlsx,.xls,.xlsm,.xlsb,.ods,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv,application/vnd.ms-excel,application/octet-stream"
             data-ref="file2" multiple class="mbs-input" style="margin-top:.5rem">
      <div class="mbs-tiny">Archivo 2: Listado adicional (opcional)</div>
    </div>

    <div>
      <label style="font-weight:600; display:block; margin-bottom:.5rem">Mes</label>
      <input type="month" data-ref="month" class="mbs-input" aria-label="Mes de cálculo">
      <div class="mbs-tiny">Auto-selecciona el mes actual. Filtra variable y ocupación.</div>
    </div>

    <div class="mbs-row">
      <button data-ref="dl" class="mbs-btn" disabled>Descargar CSV resumen</button>
      <button data-ref="toggleCfg" class="mbs-btn enabled">Diagnóstico y reglas</button>
    </div>
  </div>

  <!-- ✅ OCULTAR LAS REGLAS POR DEFECTO -->
  <div class="mbs-help" style="display:none;" data-ref="helpText">
    <strong>Cabeceras:</strong> <code>Fecha</code>, <code>Profesional/Agenda</code>, <code>Asunto</code> (o Tipo/Servicio), <code>Importe</code><br>
    <strong>Logopedia (Hugo)</strong> por <u>Asunto</u>: Privado Primera ⇒ no · Privado Sucesiva ⇒ sí · Bono ⇒ sucesiva ·
    Primera IMQ ⇒ no · Segunda IMQ ⇒ sucesiva (si Importe=0 se valora a <strong>35,40 €</strong>).<br>
    <strong>Psicología (June)</strong> por <u>importe</u>: <strong>60/50 € = Sucesiva</strong>, <strong>35 € = Primera</strong>.
  </div>
</div>

  <div data-ref="msg" class="mbs-err"></div>
  <div data-ref="stats" class="mbs-stats"></div>

  <!-- ===== KPI Cards ===== -->
  <div class="mbs-kpis">
    <div class="mbs-kpi">
      <div class="k-label">Total Citas</div>
      <div class="k-value" data-ref="kpiTotal">0</div>
    </div>
    <div class="mbs-kpi">
      <div class="k-label">Ocupación Media</div>
      <div class="k-value" data-ref="kpiOcupacion">0%</div>
    </div>
    <div class="mbs-kpi">
      <div class="k-label">% Sucesivas</div>
      <div class="k-value" data-ref="kpiSucesivas">0%</div>
    </div>
    <div class="mbs-kpi">
      <div class="k-label">Variable Total</div>
      <div class="k-value" data-ref="kpiVariable">0,00 €</div>
    </div>
  </div>

  <!-- ===== Panel de reglas y diagnóstico ===== -->
  <div class="mbs-config" data-ref="cfg">
    <h4>Reglas & mapeo (Logopedia desde "Asunto"; Psicología por importes)</h4>
    <div class="mbs-config-grid">
      <div>
        <label>Columna Aseguradora / Compañía</label>
        <select data-ref="colIns" class="mbs-select"></select>
        <div class="mbs-tiny">Elige la columna donde ves <i>IMQ</i> si existe.</div>
      </div>
      <div>
        <label>Columna <strong>Asunto</strong> (prioritaria)</label>
        <select data-ref="colAsunto" class="mbs-select"></select>
      </div>
      <div>
        <label>Columna Importe</label>
        <select data-ref="colImp" class="mbs-select"></select>
      </div>
      <div>
        <label>Columna Observaciones / Detalles</label>
        <select data-ref="colDet" class="mbs-select"></select>
      </div>

      <div>
        <label>Palabras IMQ</label>
        <input data-ref="kwIMQ" class="mbs-input" placeholder="imq; seguros imq; imq s.coop; mutua imq">
        <div class="mbs-tiny">Separadas por ";". Coincidencia flexible.</div>
      </div>
      <div>
        <label>Palabras Sucesiva extra</label>
        <input data-ref="kwSuc" class="mbs-input" placeholder="sucesiva; seguimiento; revision; control; segunda; 2ª; consulta 2; bono">
      </div>
      <div>
        <label>Palabras Primera extra</label>
        <input data-ref="kwPri" class="mbs-input" placeholder="primera; inicial; entrevista">
      </div>
      <div>
        <label>Regla extra</label><br>
        <label class="mbs-tiny"><input type="checkbox" data-ref="ruleZeroHugo"> Contar <strong>sucesiva</strong> con <strong>importe=0</strong> de Hugo como <strong>IMQ</strong>.</label>
      </div>
    </div>
    <div style="margin-top:1rem;display:flex;gap:.5rem;flex-wrap:wrap">
      <button class="mbs-btn enabled" data-ref="applyCfg">Aplicar reglas</button>
      <span class="mbs-tiny">Revisa "sospechosas" para ajustar palabras/columnas si hiciera falta.</span>
    </div>

    <div class="mbs-debug">
      <div class="mbs-tiny"><strong>Filas <i>sospechosas</i> (sucesivas con importe 0 no IMQ; sólo Hugo):</strong></div>
      <div data-ref="dbgPills" style="margin:.3rem 0;"></div>
      <pre data-ref="dbg" aria-label="Listado de ejemplos para depurar"></pre>
    </div>
  </div>
  <!-- ===== fin panel ===== -->

  <div class="mbs-tablewrap">
    <table class="mbs-table">
      <thead>
        <tr>
          <th>Profesional</th>
          <th style="text-align:right">Capacidad (huecos)</th>
          <th style="text-align:right">Citas totales</th>
          <th style="text-align:right">Ocupación (%)</th>
          <th style="text-align:right">% Sucesivas</th>
          <th style="text-align:right">Sucesivas IMQ (uds)</th>
          <th style="text-align:right">Fact. Sucesivas (€)</th>
          <th style="text-align:right">% Variable</th>
          <th style="text-align:right">Variable (€)</th>
        </tr>
      </thead>
      <tbody data-ref="tbody"></tbody>
      <tfoot>
        <tr>
          <td style="font-weight:700">TOTAL</td>
          <td data-ref="tCap"   style="text-align:right;font-weight:700">0</td>
          <td data-ref="tCit"   style="text-align:right;font-weight:700">0</td>
          <td data-ref="tOcc"   style="text-align:right;font-weight:700">0,00</td>
          <td data-ref="tPctS"  style="text-align:right;font-weight:700">0,00</td>
          <td data-ref="tIMQ"   style="text-align:right;font-weight:700">0</td>
          <td data-ref="tSucE"  style="text-align:right;font-weight:700">0,00</td>
          <td style="text-align:right;font-weight:700">—</td>
          <td data-ref="tVarE"  style="text-align:right;font-weight:700">0,00</td>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="mbs-chartgrid" style="margin-top:1.1rem">
    <div class="mbs-chartwrap">
      <div class="mbs-charthead">
        <div class="mbs-charttitle">
          <h5>Ocupación por profesional</h5>
          <span class="mbs-chartnote" data-ref="occSummary"></span>
        </div>
        <div class="mbs-chartactions" aria-label="Opciones ocupación por profesional">
          <button type="button" class="mbs-chartbtn" data-ref="downloadOccBar" data-title="Ocupación por profesional" disabled>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
              PNG
            </span>
          </button>
        </div>
      </div>
      <div class="chart-area" style="min-height:280px">
        <canvas data-ref="chartOccBar"></canvas>
      </div>
    </div>
    <div class="mbs-chartwrap">
      <div class="mbs-charthead">
        <div class="mbs-charttitle">
          <h5>Detalle de ocupación (ocupado vs libre)</h5>
          <span class="mbs-chartnote" data-ref="occDetailSummary"></span>
        </div>
        <div class="mbs-chartactions" aria-label="Opciones detalle de ocupación">
          <button type="button" class="mbs-chartbtn" data-ref="downloadOccDetail" data-title="Detalle de ocupación" disabled>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 20h12"></path><path d="M12 4v12"></path><path d="M8 12l4 4 4-4"></path></svg>
              PNG
            </span>
          </button>
        </div>
      </div>
      <div class="chart-area mbs-mini-donuts" data-ref="occDonutWrap" style="min-height:220px">
        <div class="mbs-mini-donut">
          <canvas data-ref="chartOccHugo"></canvas>
          <span>Hugo Zichner</span>
        </div>
        <div class="mbs-mini-donut">
          <canvas data-ref="chartOccJune"></canvas>
          <span>June Amores</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ====== Nómina mensual (Hugo + June) ====== -->
  <div class="mbs-payroll">
    <h4>
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      Simulador de nómina · mensual automático (ambos profesionales)
    </h4>

    <div data-legacy-payroll style="display:none">
    <!-- BLOQUE JUNE -->
    <div class="mbs-payroll-block" aria-label="Nómina Psicología">
      <h5 style="margin:.1rem 0 .6rem; color:#1e293b; font-size:1rem">Psicología — <strong>June Amores</strong></h5>
      <div class="mbs-payroll-grid">
  <div class="span-2">
    <label>Bruto fijo mensual (€)</label>
    <input type="number" step="0.01" min="0" class="mbs-input" data-ref="pyJBaseMes" value="900">
    <div class="mbs-tiny">Sueldo mensual (sin variable ni prorrata).</div>
  </div>
  <div>
    <label>Nº pagas extra al año</label>
    <select class="mbs-select" data-ref="pyJPagasExtra">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2" selected>2</option>
    </select>
    <div class="mbs-tiny">Prorrata mensual = <span data-ref="pyJProrrataInfo" class="mbs-muted">0,00 €</span></div>
  </div>
  <div>
    <label>Tipo de contrato</label>
    <select class="mbs-select" data-ref="pyJContrato">
      <option value="indefinido" selected>Indefinido (Desempleo 5,50%)</option>
      <option value="temporal">Temporal (Desempleo 6,70%)</option>
    </select>
  </div>
              </div>
      
      <!-- ✅ Panel plegable -->
      <details class="mbs-payroll-settings" data-ref="pyJSettings">
        <summary>Cotizaciones empresa (%)</summary>
        <div class="mbs-payroll-settings-content">
          <div class="mbs-payroll-grid">
            <div class="span-3"><label>Cuotas Empresa (%)</label></div>
            <div><label>CC</label><input type="number" step="0.01" class="mbs-input" data-ref="pyJCcEmp" value="23.60"></div>
            <div><label>Desempleo</label><input type="number" step="0.01" class="mbs-input" data-ref="pyJDesEmp" value="5.50"></div>
            <div><label>Formación</label><input type="number" step="0.01" class="mbs-input" data-ref="pyJFormEmp" value="0.60"></div>
            <div><label>FOGASA</label><input type="number" step="0.01" class="mbs-input" data-ref="pyJFogasa" value="0.20"></div>
            <div><label>MEI</label><input type="number" step="0.01" class="mbs-input" data-ref="pyJMeiEmp" value="0.67"></div>
            <div><label>AT/EP</label><input type="number" step="0.01" class="mbs-input" data-ref="pyJAt" value="1.50"></div>
          </div>
        </div>
      </details>

      <div class="mbs-payroll-summary">
        <strong>Cobro mensual estimado</strong>
        <div>Sin prorrata: <span data-ref="pyJMonthlyA">0,00 €</span></div>
        <div>Con prorrata: <span data-ref="pyJMonthlyB">0,00 €</span></div>
      </div>

      <table class="mbs-payroll-table" aria-label="Coste empresa June">
        <thead>
          <tr>
            <th>Escenario</th><th>Bruto fijo</th><th>Variable</th><th>Prorrata extra</th><th>Cotizaciones empresa</th><th>Coste total empresa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sin prorrata</strong></td>
            <td data-ref="pyJOutBrutoA">0,00 €</td>
            <td data-ref="pyJOutVarA">0,00 €</td>
            <td data-ref="pyJOutProrrA">0,00 €</td>
            <td data-ref="pyJOutCuotaEmpA">0,00 €</td>
            <td data-ref="pyJOutCosteA"><strong>0,00 €</strong></td>
          </tr>
          <tr>
            <td><strong>Con prorrata extra</strong></td>
            <td data-ref="pyJOutBrutoB">0,00 €</td>
            <td data-ref="pyJOutVarB">0,00 €</td>
            <td data-ref="pyJOutProrrB">0,00 €</td>
            <td data-ref="pyJOutCuotaEmpB">0,00 €</td>
            <td data-ref="pyJOutCosteB"><strong>0,00 €</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- BLOQUE HUGO -->
    <div class="mbs-payroll-block" aria-label="Nómina Logopedia">
      <h5 style="margin:.1rem 0 .6rem; color:#1e293b; font-size:1rem">Logopedia — <strong>Hugo Zichner</strong></h5>
     <div class="mbs-payroll-grid">
  <div class="span-2">
    <label>Bruto fijo mensual (€)</label>
    <input type="number" step="0.01" min="0" class="mbs-input" data-ref="pyHBaseMes" value="1398.03">
    <div class="mbs-tiny">Introduce el sueldo mensual (sin variable ni prorrata).</div>
  </div>
  <div>
    <label>Nº pagas extra al año</label>
    <select class="mbs-select" data-ref="pyHPagasExtra">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2" selected>2</option>
    </select>
    <div class="mbs-tiny">Prorrata mensual = <span data-ref="pyHProrrataInfo" class="mbs-muted">0,00 €</span></div>
  </div>
  <div>
    <label>Tipo de contrato</label>
    <select class="mbs-select" data-ref="pyHContrato">
      <option value="indefinido" selected>Indefinido (Desempleo 5,50%)</option>
      <option value="temporal">Temporal (Desempleo 6,70%)</option>
    </select>
  </div>
              </div>
      
      <!-- ✅ Panel plegable -->
      <details class="mbs-payroll-settings" data-ref="pyHSettings">
        <summary>Cotizaciones empresa (%)</summary>
        <div class="mbs-payroll-settings-content">
          <div class="mbs-payroll-grid">
            <div class="span-3"><label>Cuotas Empresa (%)</label></div>
            <div><label>CC</label><input type="number" step="0.01" class="mbs-input" data-ref="pyHCcEmp" value="23.60"></div>
            <div><label>Desempleo</label><input type="number" step="0.01" class="mbs-input" data-ref="pyHDesEmp" value="5.50"></div>
            <div><label>Formación</label><input type="number" step="0.01" class="mbs-input" data-ref="pyHFormEmp" value="0.60"></div>
            <div><label>FOGASA</label><input type="number" step="0.01" class="mbs-input" data-ref="pyHFogasa" value="0.20"></div>
            <div><label>MEI</label><input type="number" step="0.01" class="mbs-input" data-ref="pyHMeiEmp" value="0.67"></div>
            <div><label>AT/EP</label><input type="number" step="0.01" class="mbs-input" data-ref="pyHAt" value="1.50"></div>
          </div>
        </div>
      </details>

      <div class="mbs-payroll-summary">
        <strong>Cobro mensual estimado</strong>
        <div>Sin prorrata: <span data-ref="pyHMonthlyA">0,00 €</span></div>
        <div>Con prorrata: <span data-ref="pyHMonthlyB">0,00 €</span></div>
      </div>

      <table class="mbs-payroll-table" aria-label="Coste empresa Hugo">
        <thead>
          <tr>
            <th>Escenario</th><th>Bruto fijo</th><th>Variable</th><th>Prorrata extra</th><th>Cotizaciones empresa</th><th>Coste total empresa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sin prorrata</strong></td>
            <td data-ref="pyHOutBrutoA">0,00 €</td>
            <td data-ref="pyHOutVarA">0,00 €</td>
            <td data-ref="pyHOutProrrA">0,00 €</td>
            <td data-ref="pyHOutCuotaEmpA">0,00 €</td>
            <td data-ref="pyHOutCosteA"><strong>0,00 €</strong></td>
          </tr>
          <tr>
            <td><strong>Con prorrata extra</strong></td>
            <td data-ref="pyHOutBrutoB">0,00 €</td>
            <td data-ref="pyHOutVarB">0,00 €</td>
            <td data-ref="pyHOutProrrB">0,00 €</td>
            <td data-ref="pyHOutCuotaEmpB">0,00 €</td>
            <td data-ref="pyHOutCosteB"><strong>0,00 €</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mbs-tiny" style="margin-top:.4rem">
      Se suman: <i>Bruto fijo + Variable + (Prorrata extra si aplica) + Cotizaciones empresa</i>. Esta simulación es orientativa.
    </div>
    </div>

    <div class="mbs-payroll-v2" data-ref="payrollV2"></div>
  </div>
  <!-- ====== FIN NÓMINA ====== -->

  <div class="mbs-note">
    La variable aplica a <strong>Hugo Zichner (Logopeda)</strong> y <strong>June Amores (Psicóloga)</strong>. Ocupación según capacidad indicada arriba.<br>
    <span class="mbs-ok">Los datos NO salen de tu navegador.</span>
  </div>
</div>
<!-- CDNs (orden importante); el script trae fallback si tu tema difiere la carga -->
<script data-no-defer data-cfasync="false" src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>
<script data-no-defer data-cfasync="false" src="https://cdn.jsdelivr.net/npm/xlsx@0.20.2/dist/xlsx.full.min.js"></script>
<script src="src/payroll/esPayroll.js"></script>

<script>
(function(){
  "use strict";

  window.addEventListener('load', function(){
    document.querySelectorAll('[data-mbs]').forEach(initWidget);
  });

  function initWidget(root){
    const $ = (ref)=>root.querySelector(`[data-ref="${ref}"]`);
    const inp1=$('file1'), inp2=$('file2'), month=$('month'), tbody=$('tbody'), stats=$('stats'), dl=$('dl'), msg=$('msg');
    const tCap=$('tCap'), tCit=$('tCit'), tOcc=$('tOcc'), tPctS=$('tPctS'), tSucE=$('tSucE'), tVarE=$('tVarE'), tIMQ=$('tIMQ');
    const cfg=$('cfg'), toggleCfg=$('toggleCfg'), dbg=$('dbg'), dbgPills=$('dbgPills');
    const colIns=$('colIns'), colAsunto=$('colAsunto'), colDet=$('colDet'), colImp=$('colImp');
    const kwIMQ=$('kwIMQ'), kwSuc=$('kwSuc'), kwPri=$('kwPri'), applyCfg=$('applyCfg'), ruleZeroHugo=$('ruleZeroHugo');

    // KPI refs
    const kpiTotal = $('kpiTotal');
    const kpiOcupacion = $('kpiOcupacion');
    const kpiSucesivas = $('kpiSucesivas');
    const kpiVariable = $('kpiVariable');

    const occSummary = $('occSummary');
    const occDetailSummary = $('occDetailSummary');
    const downloadOccBar = $('downloadOccBar');
    const downloadOccDetail = $('downloadOccDetail');
    const occDonutWrap = $('occDonutWrap');
    const canvasOccBar = $('chartOccBar');
    const canvasOccHugo = $('chartOccHugo');
    const canvasOccJune = $('chartOccJune');

    // --- Nómina (controllers June + Hugo)
    const payJ = makePayrollController('pyJ', {
      baseMes:900, pagasExtra:2, contrato:'indefinido',
      ccEmp:23.60, desempleoEmp:5.50, formEmp:0.60, fogasa:0.20, meiEmp:0.67, at:1.50
    });
    const payH = makePayrollController('pyH', {
      baseMes:1398.03, pagasExtra:2, contrato:'indefinido',
      ccEmp:23.60, desempleoEmp:5.50, formEmp:0.60, fogasa:0.20, meiEmp:0.67, at:1.50
    });

    // === IMQ valor ===
    const IMQ_UNIT = 11.80, IMQ_MULT = 3, IMQ_VAL  = +(IMQ_UNIT*IMQ_MULT).toFixed(2); // 35,40 €

    // === Aliases de profesionales ===
    const ALIASES = {
      hugo: ['hugo','zichner','hz','h.zichner','(hz)','-hz','[hz]'],
      june: ['june','amores','ja','j.amores','(ja)','-ja','[ja]']
    };

    // === Paleta de colores para charts ===
    const chartFallbacks = ['#2563eb','#0ea5e9','#7c3aed','#f59e0b','#ef4444','#22c55e','#14b8a6','#4338ca'];
    const cssVars = getComputedStyle(root);
    const CHART_COLORS = chartFallbacks.map((fallback, idx) => {
      const value = cssVars.getPropertyValue(`--chart-${idx + 1}`);
      return (value && value.trim()) || fallback;
    });

    function hexToRgba(color, alpha){
      if (!color){
        return `rgba(37, 99, 235, ${alpha ?? 1})`;
      }
      let clean = String(color).trim();
      if (clean.startsWith('rgba') || clean.startsWith('rgb')){
        if (typeof alpha === 'number'){
          try {
            const parts = clean.replace(/[rgba()\s]/g, '').split(',');
            const [r,g,b] = parts.map(Number);
            if ([r,g,b].every(n => Number.isFinite(n))){
              return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, alpha))})`;
            }
          } catch(_){ /* noop */ }
        }
        return clean;
      }
      clean = clean.replace('#','');
      if (clean.length === 3){
        clean = clean.split('').map(ch => ch + ch).join('');
      }
      const num = parseInt(clean, 16);
      if (!Number.isFinite(num)){
        return `rgba(37, 99, 235, ${alpha ?? 1})`;
      }
      const r = (num >> 16) & 255;
      const g = (num >> 8) & 255;
      const b = num & 255;
      const a = Math.max(0, Math.min(1, alpha ?? 1));
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    const withAlpha = (color, alpha = 0.22) => hexToRgba(color, alpha);

    const slugifyDownload = (text)=>{
      if (!text) return 'grafico';
      return text
        .toString()
        .normalize('NFD')
        .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
        .replace(/^-+|-+$/g, '')
        .toLowerCase() || 'grafico';
    };

    function triggerDownload(dataUrl, title){
      if (!dataUrl) return false;
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${slugifyDownload(title)}.png`;
      link.click();
      return true;
    }

    function downloadCanvasImage(canvas, title){
      if (!canvas || typeof canvas.toDataURL !== 'function') return false;
      try {
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        return triggerDownload(dataUrl, title || 'grafico');
      } catch (ex) {
        console.error('Error exportando canvas', ex);
        return false;
      }
    }

    async function downloadNodeImage(node, title){
      if (!node) return false;
      if (typeof window.html2canvas !== 'function'){
        console.warn('html2canvas no disponible para exportar el nodo');
        return false;
      }
      try {
        const canvas = await window.html2canvas(node, {
          backgroundColor:'#ffffff',
          scale:2,
          useCORS:true,
          logging:false
        });
        return downloadCanvasImage(canvas, title);
      } catch (ex) {
        console.error('Error exportando nodo', ex);
        return false;
      }
    }

    // === Estado
    let rawRows=[], rows=[], byPro=null, headers=[];
    let chartOccBar = null;
    let chartOccHugo = null;
    let chartOccJune = null;
    const LSKEY='mbs-vars-config-v12';
    let CONFIG = loadConfig() || {
      colIns:'', colAsunto:'', colDet:'', colImp:'',
      kwIMQ:'imq; seguros imq; seguro imq; mutua imq; imq s.coop',
      kwSuc:'privado sucesiva; sucesiva; seguimiento; revision; revisión; control; segunda; 2a; 2ª; consulta 2; visita 2; sesion 2; sesión 2; bono',
      kwPri:'privado primera; primera; inicial; entrevista',
      ruleZeroHugo:false,
      payroll:{
        june: {...payJ.defaults},
        hugo: {...payH.defaults}
      }
    };

    if (downloadOccBar){
      downloadOccBar.addEventListener('click', ()=>{
        if (downloadOccBar.disabled) return;
        const title = downloadOccBar.getAttribute('data-title') || 'Ocupación por profesional';
        const ok = downloadCanvasImage(canvasOccBar, title);
        if (!ok){
          showMsg('No se ha podido exportar el gráfico de ocupación. Vuelve a intentarlo tras generar datos.');
        }
      });
    }

    if (downloadOccDetail){
      downloadOccDetail.addEventListener('click', async ()=>{
        if (downloadOccDetail.disabled) return;
        if (!occDonutWrap){
          showMsg('No hay detalle de ocupación disponible para exportar.');
          downloadOccDetail.disabled = true;
          return;
        }
        const title = downloadOccDetail.getAttribute('data-title') || 'Detalle de ocupación';
        downloadOccDetail.disabled = true;
        try {
          const ok = await downloadNodeImage(occDonutWrap, title);
          if (!ok){
            showMsg('No se ha podido exportar el detalle de ocupación. Comprueba que html2canvas está cargado.');
          }
        } finally {
          downloadOccDetail.disabled = false;
        }
      });
    }

    // ======= Multi-CDN loader =======
    ensureLibs().catch(function(e){ showMsg(e.message); });
    async function ensureLibs(){
      const ok0 = await waitFor(()=>window.Papa && window.XLSX, 2000);
      if (ok0) return;
      const urlsPapa = [
        'https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js',
        'https://unpkg.com/papaparse@5.4.1/papaparse.min.js'
      ];
      const urlsXlsx = [
        'https://cdn.jsdelivr.net/npm/xlsx@0.20.2/dist/xlsx.full.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
        'https://unpkg.com/xlsx@0.20.2/dist/xlsx.full.min.js'
      ];
      if (!window.Papa) await loadOne(urlsPapa);
      if (!window.XLSX) await loadOne(urlsXlsx);
      if (!(window.Papa && window.XLSX)) throw new Error('No se han podido cargar las librerías necesarias (XLSX/PapaParse).');
      function loadOne(list){
        return new Promise(async (resolve,reject)=>{
          for (const u of list){ try{ await loadScript(u); return resolve(); }catch(e){} }
          reject();
        });
      }

      if (evoApplyBtn){
        evoApplyBtn.addEventListener('click', applyComparisonFromInputs);
      }

      [evoPrimaryStart, evoPrimaryEnd].forEach(input => {
        if (!input) return;
        input.addEventListener('input', ()=>{
          delete input.dataset.auto;
          updatePrimaryRangeState();
          if (evoCompareToggle && evoCompareToggle.checked){
            const range = resolveRangeInputs(evoPrimaryStart, evoPrimaryEnd, { requireComplete:false, silent:true });
            if (range && range.startDay && range.endDay){
              applySuggestedComparison(range);
            }
            updateSecondaryRangeState();
          }
        });
      });

      [evoSecondaryStart, evoSecondaryEnd].forEach(input => {
        if (!input) return;
        input.addEventListener('input', ()=>{
          delete input.dataset.auto;
          updateSecondaryRangeState();
        });
      });

      if (evoCompareToggle){
        evoCompareToggle.addEventListener('change', ()=>{
          const previousComparison = evoRangeSnapshots.comparison;
          toggleComparisonInputs();
          if (!evoCompareToggle.checked){
            if (previousComparison){
              const remaining = (evoActiveSnapshots || []).filter(item => item && item.id !== previousComparison.id);
              evoRangeSnapshots.comparison = null;
              setActiveEvolutionSnapshots(remaining);
            } else {
              evoRangeSnapshots.comparison = null;
              updateComparisonSummary(evoRangeSnapshots.primary, null);
            }
            updateSecondaryLabel(null);
          } else {
            updateSecondaryRangeState();
          }
        });
        toggleComparisonInputs();
      }

      if (Array.isArray(parsedRows) && parsedRows.length){
        syncDateInputsBounds(parsedRows);
      }
    }
    function loadScript(src){
      return new Promise((resolve,reject)=>{
        const s=document.createElement('script');
        s.src=src; s.async=false; s.defer=false; s.crossOrigin='anonymous';
        s.setAttribute('data-no-defer',''); s.setAttribute('data-cfasync','false');
        s.onload=()=>resolve(); s.onerror=()=>reject(new Error('Fallo cargando '+src));
        document.head.appendChild(s);
      });
    }
    function waitFor(testFn, ms){
      return new Promise((resolve)=>{ const t0=Date.now(); (function tick(){
        if (testFn()) return resolve(true);
        if (Date.now()-t0>=ms) return resolve(false);
        setTimeout(tick,100);
      })(); });
    }

    // ===== Utils =====
    const norm = s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
    const ntok = s=>norm(s).replace(/[^a-z0-9]+/g,' ').replace(/\s+/g,' ').trim();
    function hasToken(haystack, token){ const S=' '+ntok(haystack)+' '; const T=' '+ntok(token)+' '; return S.indexOf(T)!==-1; }
    function anyKeyword(text, kwList){ const s=' '+ntok(text)+' '; return kwList.some(k=>s.indexOf(' '+ntok(k)+' ')>-1); }

    function fmtEUR(x){ x=isFinite(x)?+x:0; const s=(Math.round(x*100)/100).toFixed(2); const p=s.split('.'); p[0]=p[0].replace(/\B(?=(\d{3})+(?!\d))/g,'.'); return p[0]+','+p[1]; }
    function euro(x){
      if (x==null) return NaN;
      if (typeof x==='number' && isFinite(x)) return x;
      let s=String(x).trim();
      let neg=false; if(/^\(.*\)$/.test(s)){neg=true; s=s.slice(1,-1);} if(/^-\s*/.test(s)){neg=true; s=s.replace(/^-+\s*/,'');}
      s=s.replace(/[€\s]/g,'');
      if (/\d,\d{2}$/.test(s)) s=s.replace(/\./g,'').replace(',', '.');
      else if (/\d\.\d{2}$/.test(s) && s.indexOf(',')>-1) s=s.replace(/,/g,'');
      const v=parseFloat(s); return isNaN(v)?NaN:(neg?-v:v);
    }

    function parseFecha(v){
      if (v instanceof Date && !isNaN(v)) return v;
      if (typeof v==='number'){ try{ const o=XLSX.SSF.parse_date_code(v); if(o) return new Date(o.y,(o.m||1)-1,o.d||1,o.H||0,o.M||0,o.S||0);}catch(_){ } }
      const s=String(v||'').trim();
      let m=s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})(?:\s+(\d{1,2}):(\d{2}))?$/);
      if (m){ const y=m[3].length===2?('20'+m[3]):m[3]; return new Date(+y,+m[2]-1,+m[1], +(m[4]||0), +(m[5]||0)); }
      m=s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
      if (m){ return new Date(+m[1],+m[2]-1,+m[3]); }
      const dt=new Date(s); return isNaN(dt)?null:dt;
    }

    // === Capacidad por mes
    function capMonthJune(y,m0){ let c=0,last=new Date(y,m0+1,0).getDate(); for(let d=1; d<=last; d++){ const dow=new Date(y,m0,d).getDay(); c += (dow===1||dow===2||dow===4)?4:(dow===3?8:0);} return c; }
    function capMonthHugo(y,m0){ let c=0,last=new Date(y,m0+1,0).getDate(); for(let d=1; d<=last; d++){ const dow=new Date(y,m0,d).getDay(); if (dow>=1 && dow<=5) c+=12; } return c; }
    function rate(occ){ if(!(occ>0)) return 0.05; if(occ<0.6) return 0.05; if(occ<0.8) return 0.10; return 0.15; }

    // ===== Helpers columnas =====
    function pick(obj, list){
      const keys = Object.keys(obj||{});
      const nKeys = keys.map(k=>({k, n:ntok(k)}));
      for (const label of list){ const exact = nKeys.find(o=>o.n===ntok(label)); if (exact) return obj[exact.k]; }
      for (const label of list){ const fuzzy = nKeys.find(o=>o.n.includes(ntok(label))); if (fuzzy) return obj[fuzzy.k]; }
      return '';
    }
    function valFrom(raw, chosen, fallbacks){
      if (chosen && raw.hasOwnProperty(chosen)) return raw[chosen];
      return pick(raw, fallbacks);
    }

    // === Clasificación (Hugo por Asunto; June por importes) ===
    function mapRow(raw){
      const fechaVal = valFrom(raw, '', ['Fecha','Fecha cita','Fecha y hora','Cuando','Día','Dia','Start']);
      const profVal  = valFrom(raw, '', ['Profesional','Agenda','Doctor','Especialista','Calendario','Recurso','Provider']);
      const asuntoVal= valFrom(raw, CONFIG.colAsunto, ['Asunto','Asunto cita','Asunto/Subject','Subject','Titulo','Título','Motivo','Servicio','Concepto','Tipo']);
      const detVal   = valFrom(raw, CONFIG.colDet,   ['Detalles','Descripción','Observaciones','Notas','Comentario','Notes']);
      const impVal   = valFrom(raw, CONFIG.colImp,   ['Importe','Precio','Total','Cantidad','Amount','Coste','Paid','Price']);
      const insVal   = valFrom(raw, CONFIG.colIns,   ['Aseguradora','Compañía','Compania','Mutua','Seguro','Company','Insurer','Payor','Payer','Convenio']);

      const fecha   = parseFecha(fechaVal);
      const importe = euro(impVal);

      const sAsunto = (asuntoVal||'').toString().toLowerCase();
      const sDet    = (detVal||'').toString().toLowerCase();
      const sIns    = (insVal||'').toString().toLowerCase();

      const kwsIMQ = (CONFIG.kwIMQ||'').split(';').map(s=>s.trim()).filter(Boolean);
      const kwsSuc = (CONFIG.kwSuc||'').split(';').map(s=>s.trim()).filter(Boolean);
      const kwsPri = (CONFIG.kwPri||'').split(';').map(s=>s.trim()).filter(Boolean);

      const isIMQ = /\bimq\b/.test(sAsunto) || kwsIMQ.some(k=>sIns.includes(k.toLowerCase()));
      const hasPrivado = /privad/.test(sAsunto);

      const isPrivPrim = hasPrivado && (/\bprimera|inicial|entrevista\b/.test(sAsunto));
      const isPrivSuc  = hasPrivado && (/\bsucesiva|seguimiento|revision|revisión|control|segunda|2a|2ª|bono\b/.test(sAsunto) || kwsSuc.some(k=>sAsunto.includes(k.toLowerCase())));
      const isBono     = /\bbono\b/.test(sAsunto);

      const isIMQPrim  = isIMQ && (/\bprimera|inicial\b/.test(sAsunto+sDet));
      const isIMQSeg   = isIMQ && (/\bsegunda|2a|2ª|consulta 2\b/.test(sAsunto+sDet) || kwsSuc.some(k=>(sAsunto+sDet).includes(k.toLowerCase())));

      let tipo = 'Desconocido';
      if (isPrivPrim) tipo='Primera';
      else if (isPrivSuc || isBono) tipo='Sucesiva';
      else if (isIMQPrim) tipo='Primera';
      else if (isIMQSeg)  tipo='Sucesiva';
      else if (kwsPri.some(k=>(sAsunto+sDet).includes(k.toLowerCase()))) tipo='Primera';
      else if (kwsSuc.some(k=>(sAsunto+sDet).includes(k.toLowerCase()))) tipo='Sucesiva';

      const isSucesivaPrivadaFact = (isPrivSuc || isBono) && (importe>0);
      const imqSuccUnits = isIMQSeg ? 1 : 0;

      return {
        raw, fecha,
        profesional:String(profVal||'').trim(),
        asunto:asuntoVal, tipo, importe,
        flags:{ isIMQ, isPrivado:hasPrivado, isIMQSeg, isSucesivaPrivadaFact, imqSuccUnits },
        det:detVal, ins:insVal
      };
    }

    function who(s){
      if (!s) return null;
      const t = (s||'').toString().toLowerCase();
      if (ALIASES.hugo.some(a=>t.includes(a))) return 'hugo';
      if (ALIASES.june.some(a=>t.includes(a))) return 'june';
      if (t.includes('hugo') || t.includes('zichner')) return 'hugo';
      if (t.includes('june') || t.includes('amores'))  return 'june';
      return null;
    }

    const approx=(x, t, tol=2)=>isFinite(x)&&Math.abs(x-t)<=tol;
    function classifyJuneByAmount(imp){
      if (approx(imp,35,2)) return 'Primera';
      if (approx(imp,50,2) || approx(imp,60,2)) return 'Sucesiva';
      return 'Desconocido';
    }

    // ===== Lectura múltiple de archivos =====
    async function loadMultipleFiles(files1, files2) {
      let allRows = [];
      
      // Procesar archivos del input 1
      if (files1 && files1.length > 0) {
        for (let i = 0; i < files1.length; i++) {
          try {
            const file = files1[i];
            const name = (file.name || '').toLowerCase();
            const isCSV = /\.csv$/i.test(name);
            const rows = isCSV ? await readCSV(file) : await readExcelFlexible(file);
            allRows = allRows.concat(rows);
          } catch (ex) {
            console.warn('Error procesando archivo 1:', ex);
          }
        }
      }
      
      // Procesar archivos del input 2
      if (files2 && files2.length > 0) {
        for (let i = 0; i < files2.length; i++) {
          try {
            const file = files2[i];
            const name = (file.name || '').toLowerCase();
            const isCSV = /\.csv$/i.test(name);
            const rows = isCSV ? await readCSV(file) : await readExcelFlexible(file);
            allRows = allRows.concat(rows);
          } catch (ex) {
            console.warn('Error procesando archivo 2:', ex);
          }
        }
      }
      
      return allRows;
    }

    // ===== Recalcular todo
    function recompute(){
      let y, m0;
      if (month.value){ const [yy,mm]=month.value.split('-').map(Number); y=yy; m0=mm-1; }
      else { const now=new Date(); y=now.getFullYear(); m0=now.getMonth(); month.value=y+'-'+String(m0+1).padStart(2,'0'); }

      const start=new Date(y,m0,1), end=new Date(y,m0+1,0,23,59,59);

      byPro = { 
        hugo:{label:'Hugo Zichner · Logopeda', cap:capMonthHugo(y,m0), citas:0, sucC:0, sucEPriv:0, sucIMQ:0, sucE:0},
        june:{label:'June Amores · Psicóloga',  cap:capMonthJune(y,m0), citas:0, sucC:0, sucEPriv:0, sucIMQ:0, sucE:0}
      };

      const suspicious=[];

      (rows||[]).forEach(r=>{
        if(!r.fecha || r.fecha<start || r.fecha>end) return;
        const id=who(r.profesional); if(!id) return;

        byPro[id].citas++;

        if (id==='hugo'){
          const isFollowUp = r.flags.isIMQSeg || r.flags.isSucesivaPrivadaFact || r.tipo==='Sucesiva';
          if (isFollowUp) byPro.hugo.sucC++;
          if (r.flags.isSucesivaPrivadaFact) byPro.hugo.sucEPriv += (isFinite(r.importe)?r.importe:0);
          if (r.flags.imqSuccUnits>0) byPro.hugo.sucIMQ += r.flags.imqSuccUnits;

          if (!r.flags.isIMQSeg && (r.tipo==='Sucesiva') && !(r.importe>0) && r.flags.isPrivado){
            suspicious.push({Profesional:r.profesional, Asunto:r.asunto, Detalles:r.det, Importe:r.importe, Aseguradora:r.ins});
          }
        } else if (id==='june'){
          const jt = classifyJuneByAmount(r.importe);
          if (jt==='Sucesiva'){
            byPro.june.sucC++;
            if (r.importe>0) byPro.june.sucEPriv += r.importe;
          }
        }
      });

      // Totales €
      byPro.hugo.sucE = byPro.hugo.sucEPriv + byPro.hugo.sucIMQ * IMQ_VAL;
      byPro.june.sucE = byPro.june.sucEPriv + byPro.june.sucIMQ * IMQ_VAL;

      render(y, m0, suspicious);
    }

    function render(y, m0, suspicious){
      const E=[byPro.hugo, byPro.june];
      tbody.innerHTML='';
      let Tcap=0, Tc=0, Tocc=0, TsPct=0, TsE=0, TvE=0, TIMQ=0, n=0;

      E.forEach(g=>{
        const occ = g.cap? g.citas/g.cap : 0;
        const r   = rate(occ);
        const sPct= g.citas? g.sucC/g.citas : 0;
        const vE  = r * g.sucE;

        const tr=document.createElement('tr');
        tr.innerHTML = `
          <td>${g.label}</td>
          <td style="text-align:right">${g.cap}</td>
          <td style="text-align:right">${g.citas}</td>
          <td style="text-align:right">${(occ*100).toFixed(2).replace('.',',')}</td>
          <td style="text-align:right">${(sPct*100).toFixed(2).replace('.',',')}</td>
          <td style="text-align:right">${g.sucIMQ}</td>
          <td style="text-align:right">${fmtEUR(g.sucE)}</td>
          <td style="text-align:right">${(r*100).toFixed(0)}%</td>
          <td style="text-align:right">${fmtEUR(vE)}</td>`;
        tbody.appendChild(tr);

        Tcap+=g.cap; Tc+=g.citas; TsE+=g.sucE; TvE+=vE; TIMQ+=g.sucIMQ; n++;
        Tocc += occ; TsPct += sPct;
      });

      // Totales tabla
      tCap.textContent=Tcap;
      tCit.textContent=Tc;
      tIMQ.textContent=TIMQ;
      tOcc.textContent=(n?(Tocc/n*100):0).toFixed(2).replace('.',',');
      tPctS.textContent=(n?(TsPct/n*100):0).toFixed(2).replace('.',',');
      tSucE.textContent=fmtEUR(TsE);
      tVarE.textContent=fmtEUR(TvE);

      // Actualizar KPIs
      kpiTotal.textContent = Tc;
      kpiOcupacion.textContent = (n?(Tocc/n*100):0).toFixed(1) + '%';
      updateGlance('ocupacion', kpiOcupacion.textContent);
      kpiSucesivas.textContent = (n?(TsPct/n*100):0).toFixed(1) + '%';
      kpiVariable.textContent = fmtEUR(TvE) + ' €';

      stats.innerHTML =
        `Mes: ${String(m0+1).padStart(2,'0')}/${y} · Capacidad — Hugo: ${byPro.hugo.cap} · June: ${byPro.june.cap} · ` +
        `Regla variable: <0,6 ⇒ 5% · <0,8 ⇒ 10% · ≥0,8 ⇒ 15% · ` +
        `Citas — Hugo: ${byPro.hugo.citas}, June: ${byPro.june.citas} · ` +
        `Sucesivas (€priv/IMQ uds→€) — `+
        `Hugo: ${fmtEUR(byPro.hugo.sucEPriv)} / ${byPro.hugo.sucIMQ}→${fmtEUR(byPro.hugo.sucIMQ*IMQ_VAL)}, `+
        `June: ${fmtEUR(byPro.june.sucEPriv)} / ${byPro.june.sucIMQ}→${fmtEUR(byPro.june.sucIMQ*IMQ_VAL)} · `+
        `Filas: ${rows.length}`;

      // Diagnóstico
      dbg.textContent = suspicious.slice(0,30).map((r,i)=>`${i+1}. ${r.Profesional} | Asunto: ${r.Asunto} | Det: ${r.Detalles} | Importe: ${r.Importe} | Aseg.: ${r.Aseguradora}`).join('\n') || '— Sin sospechosas —';
      dbgPills.innerHTML = '';
      suspicious.slice(0,12).forEach(s=>{
        const pill = document.createElement('span');
        pill.className='mbs-pill';
        pill.textContent = (s.Asunto||'').toString().slice(0,48);
        dbgPills.appendChild(pill);
      });

      // Actualizar simuladores de nómina (ambos)
      const occH = byPro.hugo.cap ? byPro.hugo.citas/byPro.hugo.cap : 0;
      const occJ = byPro.june.cap ? byPro.june.citas/byPro.june.cap : 0;
      renderOccupancyCharts({
        hugo: { label: 'Hugo Zichner', ratio: occH, citas: byPro.hugo.citas, capacidad: byPro.hugo.cap },
        june: { label: 'June Amores', ratio: occJ, citas: byPro.june.citas, capacidad: byPro.june.cap }
      });
      payH.update( rate(occH) * byPro.hugo.sucE ); // variable €
      payJ.update( rate(occJ) * byPro.june.sucE );

      const has = (byPro.hugo.citas + byPro.june.citas) > 0;
      dl.disabled = !has;
      dl.classList.toggle('enabled', has);
    }

    function renderOccupancyCharts(data){
      if (!data || typeof window.Chart === 'undefined') return;
      if (!canvasOccBar && !canvasOccHugo && !canvasOccJune) return;

      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const textColor = isDark ? '#eaf2ff' : '#0b2542';
      const gridColor = isDark ? 'rgba(234,242,255,0.14)' : 'rgba(2,6,23,0.08)';
      const fontFamily = (getComputedStyle(document.documentElement).getPropertyValue('--font') || 'system-ui, -apple-system, sans-serif').trim();
      const tooltipBackground = isDark ? '#111827' : '#0b1f33';
      const tooltipBorder = isDark ? 'rgba(148,163,184,.35)' : 'rgba(15,23,42,.12)';

      const occSeries = [
        {
          key: 'hugo',
          label: data?.hugo?.label || 'Hugo',
          percent: Number.isFinite(data?.hugo?.ratio) ? Math.max(0, Math.min(100, data.hugo.ratio * 100)) : 0,
          citas: Number.isFinite(data?.hugo?.citas) ? data.hugo.citas : null,
          capacidad: Number.isFinite(data?.hugo?.capacidad) ? data.hugo.capacidad : null,
          color: CHART_COLORS[0] || '#2563eb'
        },
        {
          key: 'june',
          label: data?.june?.label || 'June',
          percent: Number.isFinite(data?.june?.ratio) ? Math.max(0, Math.min(100, data.june.ratio * 100)) : 0,
          citas: Number.isFinite(data?.june?.citas) ? data.june.citas : null,
          capacidad: Number.isFinite(data?.june?.capacidad) ? data.june.capacidad : null,
          color: CHART_COLORS[2] || '#6366f1'
        }
      ];

      const hasData = occSeries.some(item => (Number.isFinite(item.citas) && item.citas > 0) || (Number.isFinite(item.capacidad) && item.capacidad > 0));

      if (occSummary){
        if (!hasData){
          occSummary.textContent = 'Sin datos';
          occSummary.removeAttribute('title');
        } else {
          const sorted = occSeries.slice().sort((a,b)=>b.percent - a.percent);
          const top = sorted[0];
          const parts = [];
          if (Number.isFinite(top?.citas) && Number.isFinite(top?.capacidad) && top.capacidad > 0){
            parts.push(`${top.citas}/${top.capacidad} citas`);
          }
          const summaryText = `${top.label}: ${top.percent.toFixed(1).replace('.',',')}%${parts.length ? ' · ' + parts.join(' · ') : ''}`;
          occSummary.textContent = summaryText;
          occSummary.setAttribute('title', summaryText);
        }
      }

      if (occDetailSummary){
        if (!hasData){
          occDetailSummary.textContent = 'Sin datos';
          occDetailSummary.removeAttribute('title');
        } else {
          const detailText = occSeries.map(item => {
            const shortLabel = (item.label || '').split(' ')[0] || item.label || '';
            const pct = item.percent.toFixed(1).replace('.',',');
            if (Number.isFinite(item.citas) && Number.isFinite(item.capacidad) && item.capacidad > 0){
              return `${shortLabel} ${pct}% (${item.citas}/${item.capacidad})`;
            }
            return `${shortLabel} ${pct}%`;
          }).join(' · ');
          occDetailSummary.textContent = detailText;
          occDetailSummary.setAttribute('title', detailText);
        }
      }

      if (downloadOccBar){
        downloadOccBar.disabled = !hasData;
      }
      if (downloadOccDetail){
        const ready = hasData && !!occDonutWrap;
        downloadOccDetail.disabled = !ready;
      }

      const ctxBar = canvasOccBar ? canvasOccBar.getContext('2d') : null;
      if (ctxBar){
        if (chartOccBar) chartOccBar.destroy();
        chartOccBar = new Chart(ctxBar, {
          type:'bar',
          data:{
            labels: occSeries.map(item => item.label),
            datasets:[{
              label:'Ocupación (%)',
              data: occSeries.map(item => Number(item.percent.toFixed(1))),
              backgroundColor: occSeries.map(item => withAlpha(item.color, 0.28)),
              hoverBackgroundColor: occSeries.map(item => withAlpha(item.color, 0.45)),
              borderColor: occSeries.map(item => item.color),
              borderWidth:1.4,
              borderRadius:10,
              maxBarThickness:42,
              categoryPercentage:0.7,
              barPercentage:0.7
            }]
          },
          options:{
            indexAxis:'y',
            responsive:true,
            maintainAspectRatio:false,
            layout:{ padding:{ top:30, right:18, bottom:14, left:18 } },
            scales:{
              x:{
                beginAtZero:true,
                max:100,
                grid:{ color:gridColor, borderDash:[4,4], drawBorder:false },
                ticks:{
                  color:textColor,
                  font:{ family:fontFamily, size:12, weight:'500' },
                  callback:value => value.toFixed ? value.toFixed(0)+'%' : value + '%'
                }
              },
              y:{
                grid:{ display:false, drawBorder:false },
                ticks:{
                  color:textColor,
                  font:{ family:fontFamily, size:12, weight:'600' }
                }
              }
            },
            plugins:{
              legend:{ display:false },
              tooltip:{
                backgroundColor: tooltipBackground,
                borderColor: tooltipBorder,
                borderWidth:1,
                titleFont:{ family:fontFamily, size:12, weight:'600' },
                bodyFont:{ family:fontFamily, size:12 },
                callbacks:{
                  label:(context)=>{
                    const item = occSeries[context.dataIndex];
                    const base = `Ocupado: ${context.parsed.x.toFixed(1).replace('.',',')}%`;
                    if (item && Number.isFinite(item.citas) && Number.isFinite(item.capacidad) && item.capacidad > 0){
                      return `${base} (${item.citas}/${item.capacidad} citas)`;
                    }
                    return base;
                  }
                }
              },
              mbsDataLabels:{
                enabled:true,
                family:fontFamily,
                color: withAlpha(textColor, 0.85),
                formatter:(value)=>value.toFixed(1).replace('.',',')+'%',
                align:'middle',
                offset:0
              }
            }
          }
        });
      }

      function createDonut(canvas, value){
        if (!canvas) return null;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
        const percent = Number.isFinite(value?.percent) ? Math.max(0, Math.min(100, value.percent)) : 0;
        const free = Math.max(0, 100 - percent);
        const detailText = Number.isFinite(value?.citas) && Number.isFinite(value?.capacidad) && value.capacidad > 0
          ? `${value.citas}/${value.capacidad} citas`
          : null;
        const chart = new Chart(ctx, {
          type:'doughnut',
          data:{
            labels:['Ocupado','Libre'],
            datasets:[{
              data:[Number(percent.toFixed(1)), Number(free.toFixed(1))],
              backgroundColor:[withAlpha(value.color, 0.82), withAlpha(value.color, 0.15)],
              borderWidth:0
            }]
          },
          options:{
            responsive:true,
            maintainAspectRatio:false,
            cutout:'68%',
            plugins:{
              legend:{ display:false },
              tooltip:{
                backgroundColor: tooltipBackground,
                borderColor: tooltipBorder,
                borderWidth:1,
                titleFont:{ family:fontFamily, size:12, weight:'600' },
                bodyFont:{ family:fontFamily, size:12 },
                callbacks:{
                  label:(context)=>{
                    const label = context.label === 'Libre' ? 'Libre' : 'Ocupado';
                    const base = `${label}: ${context.parsed.toFixed(1).replace('.',',')}%`;
                    if (label === 'Ocupado' && detailText){
                      return `${base} (${detailText})`;
                    }
                    return base;
                  }
                }
              },
              mbsCenterText:{
                fontFamily,
                lines:[
                  { text: percent.toFixed(1).replace('.',',')+'%', font:{ size:22, weight:'700' }, color:value.color },
                  { text: detailText || 'Ocupado', font:{ size:12, weight:'500' }, color: withAlpha(textColor, 0.75) }
                ]
              }
            }
          }
        });
        const labelEl = canvas.parentElement?.querySelector('span');
        if (labelEl && value?.color){
          labelEl.style.color = value.color;
        }
        return chart;
      }

      if (canvasOccHugo){
        if (chartOccHugo) chartOccHugo.destroy();
        chartOccHugo = createDonut(canvasOccHugo, occSeries[0]);
      }
      if (canvasOccJune){
        if (chartOccJune) chartOccJune.destroy();
        chartOccJune = createDonut(canvasOccJune, occSeries[1]);
      }
    }

    // ===== Eventos de archivos =====
    // ✅ CORRECCIÓN: Event listeners mejorados con mejor manejo de errores
// ✅ CORRECCIÓN: Event listeners mejorados con mejor manejo de errores
inp1.addEventListener('change', async (e)=>{
  console.log('📁 Archivo 1 seleccionado:', e.target.files);
  
  const f1 = e.target.files;
  const f2 = inp2.files;
  
  // ✅ Mejor validación
  if (!f1 || f1.length === 0) {
    console.log('❌ No hay archivos en input 1');
    return;
  }
  
  hideMsg();
  showMsg('Cargando archivos...', 'info');
  
  try {
    console.log('🔄 Iniciando carga de archivos...');
    rawRows = await loadMultipleFiles(f1, f2);
    console.log('✅ Archivos cargados:', rawRows.length, 'filas');
    
    if (rawRows.length === 0) {
      showMsg('No se encontraron datos en los archivos');
      return;
    }
    
    headers = Object.keys(rawRows[0] || {});
    console.log('📋 Headers encontrados:', headers);
    
    initMappingOptions(headers);
    rows = rawRows.map(mapRow);
    console.log('🔄 Filas procesadas:', rows.length);
    
    recompute();
    hideMsg();
  } catch (ex) {
    console.error('❌ Error cargando archivos:', ex);
    showMsg('Error leyendo archivos: ' + (ex && ex.message ? ex.message : ex));
  }
});

    inp2.addEventListener('change', async (e)=>{
      const f1 = inp1.files;
      const f2 = e.target.files;
      if (!f1 || f1.length === 0) return;
      
      hideMsg();
      try {
        rawRows = await loadMultipleFiles(f1, f2);
        if (rawRows.length === 0) {
          showMsg('No se encontraron datos en los archivos');
          return;
        }
        
        headers = Object.keys(rawRows[0] || {});
        initMappingOptions(headers);
        rows = rawRows.map(mapRow);
        recompute();
      } catch (ex) {
        showMsg('Error leyendo archivos: ' + (ex && ex.message ? ex.message : ex));
      }
    });

    month.addEventListener('change', recompute);
    (function(){ const now=new Date(); month.value = now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0'); })();

    // ===== Export CSV resumen =====
    dl.addEventListener('click', ()=>{
      if (dl.disabled) return;
      const [yy,mm]=(month.value||'').split('-');
      const list=[byPro.hugo, byPro.june].map(g=>{
        const occ=g.cap? g.citas/g.cap : 0, r=rate(occ), sPct=g.citas? g.sucC/g.citas : 0, vE=r*g.sucE;
        return {
          Profesional:g.label,
          'Capacidad (huecos)':g.cap,
          'Citas totales':g.citas,
          'Ocupación (%)':(occ*100).toFixed(2).replace('.',','),
          '% Sucesivas':(sPct*100).toFixed(2).replace('.',','),
          'Sucesivas IMQ (uds)':g.sucIMQ,
          'IMQ valor (€)':fmtEUR(g.sucIMQ*IMQ_VAL),
          'Facturación Sucesivas (total €)':fmtEUR(g.sucE),
          '% Variable':(r*100).toFixed(0)+'%',
          'Variable (€)':fmtEUR(vE)
        };
      });
      const headers=Object.keys(list[0]||{}); const data=[headers].concat(list.map(o=>headers.map(h=>o[h])));
      const csv=data.map(r=>r.join(';')).join('\n');
      const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
      const url=URL.createObjectURL(blob); const a=document.createElement('a');
      a.href=url; a.download=`variables_${mm}-${yy}.csv`; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(()=>URL.revokeObjectURL(url),500);
    });

    // ===== Panel config / diagnóstico =====
toggleCfg.addEventListener('click', ()=>{ 
  cfg.style.display = cfg.style.display==='none' ? 'block':'none'; 
  // ✅ MOSTRAR/OCULTAR LAS REGLAS
  const helpText = $('helpText');
  if (helpText) {
    helpText.style.display = cfg.style.display === 'block' ? 'block' : 'none';
  }
});
    applyCfg.addEventListener('click', ()=>{
      CONFIG.colIns   = colIns.value||'';
      CONFIG.colAsunto= colAsunto.value||'';
      CONFIG.colDet   = colDet.value||'';
      CONFIG.colImp   = colImp.value||'';
      CONFIG.kwIMQ    = kwIMQ.value||'';
      CONFIG.kwSuc    = kwSuc.value||'';
      CONFIG.kwPri    = kwPri.value||'';
      CONFIG.ruleZeroHugo = !!ruleZeroHugo.checked;
      saveConfig(CONFIG);
      if (rawRows.length){ rows = rawRows.map(mapRow); recompute(); }
    });

    function initMappingOptions(hdrs){
  const opts = (sel, prefer)=>{ 
    sel.innerHTML = `<option value="">— auto —</option>` + hdrs.map(h=>`<option value="${h}">${h}</option>`).join('');
    if (prefer && hdrs.includes(prefer)) sel.value = prefer; 
  };
  
  const findLike = (regexArr)=> hdrs.find(h=>regexArr.some(r=>r.test(norm(h))));
  CONFIG.colIns    = CONFIG.colIns    || findLike([/asegur|mutua|compani|seguro|payor|payer|insur|convenio/]) || '';
  CONFIG.colAsunto = CONFIG.colAsunto || findLike([/asunto|subject|servic|concept|tipo|titulo|t[ií]tulo|motivo/]) || '';
  CONFIG.colDet    = CONFIG.colDet    || findLike([/detalle|observa|descri|nota|coment/]) || '';
  CONFIG.colImp    = CONFIG.colImp    || findLike([/importe|precio|total|amount|coste|paid|price/]) || '';

  opts(colIns, CONFIG.colIns); 
  opts(colAsunto, CONFIG.colAsunto);
  opts(colDet, CONFIG.colDet); 
  opts(colImp, CONFIG.colImp);

  // ✅ Verificar que los controladores existen antes de aplicar configuración
  if (payJ && payJ.applyConfig) {
    const PJ = (CONFIG.payroll && CONFIG.payroll.june) || payJ.defaults;
    payJ.applyConfig(PJ);
  }
  if (payH && payH.applyConfig) {
    const PH = (CONFIG.payroll && CONFIG.payroll.hugo) || payH.defaults;
    payH.applyConfig(PH);
  }
} // ✅ FUNCIÓN CERRADA CORRECTAMENTE

    function readCSV(file){
      return new Promise((resolve,reject)=>{
        Papa.parse(file, {
          header:true, skipEmptyLines:'greedy', delimiter:'', transformHeader:h=>h.trim(),
          complete: res=>{ try{ resolve(res.data||[]); }catch(e){ reject(e); } },
          error: err=>reject(err)
        });
      });
    }
    async function readExcelFlexible(file){
      const ab = await file.arrayBuffer();
      const wb = XLSX.read(ab, {type:'array', cellDates:false, cellNF:false, cellText:false});
      let chosen=null, meta=null;
      for (const name of wb.SheetNames){
        const ws = wb.Sheets[name];
        const {headerRow, headers} = detectHeader(ws);
        if (headers.length>=2){ chosen=ws; meta={name, headerRow, headers}; break; }
      }
      if (!chosen){ throw new Error('No se encontró una hoja con cabeceras reconocibles.'); }
      const json = XLSX.utils.sheet_to_json(chosen, {defval:'', raw:true, header:meta.headers, range:meta.headerRow+1});
      return json;
    }
    function detectHeader(ws){
      const ref = XLSX.utils.decode_range(ws['!ref'] || 'A1:A1');
      const maxRow = Math.min(ref.e.r, 20);
      let bestRow = 0, bestHeaders=[];
      for (let r = ref.s.r; r <= maxRow; r++){
        let headers=[];
        for (let c = ref.s.c; c <= Math.min(ref.e.c, 50); c++){
          const cell = ws[XLSX.utils.encode_cell({r,c})];
          const v = cell && cell.v != null ? String(cell.v).trim() : '';
          if (v) headers.push(v);
        }
        if (headers.length && headers.length>bestHeaders.length){ bestHeaders=headers; bestRow=r; }
      }
      return {headerRow: bestRow, headers: bestHeaders};
    }

    function saveConfig(c){ try{ localStorage.setItem(LSKEY, JSON.stringify(c)); }catch(_){ } }
    function loadConfig(){ try{ return JSON.parse(localStorage.getItem(LSKEY)||''); }catch(_){ return null; } }
    function showMsg(text, type = 'error'){ 
  if (!msg) {
    console.error('❌ Elemento msg no encontrado');
    return;
  }
  
  msg.textContent = text;
  msg.style.display = 'block';
  
  // ✅ Diferentes estilos según tipo
  if (type === 'info') {
    msg.style.background = '#e6f3ff';
    msg.style.borderColor = '#3b82f6';
    msg.style.color = '#1e40af';
  } else {
    msg.style.background = '#fef2f2';
    msg.style.borderColor = '#fca5a5';
    msg.style.color = '#991b1b';
  }
  
  console.log(`💬 Mensaje: ${text}`);
}
    function hideMsg(){ msg.style.display='none'; }

    // ====== Payroll controller (reutilizable para June/Hugo) ======
   function makePayrollController(prefix, defaults){
  const refs = {
    baseMes: $(prefix+'BaseMes'),
    pagasExtra: $(prefix+'PagasExtra'),
    prorrInfo: $(prefix+'ProrrataInfo'),
    contrato: $(prefix+'Contrato'),
    // ✅ ELIMINADOS elementos que no existen
    cc: $(prefix+'CcEmp'),
    des: $(prefix+'DesEmp'), 
    form: $(prefix+'FormEmp'),
    fogasa: $(prefix+'Fogasa'), 
    mei: $(prefix+'MeiEmp'),
    at: $(prefix+'At'),
    monthlyA: $(prefix+'MonthlyA'),
    monthlyB: $(prefix+'MonthlyB'),
    outA:{br:$(prefix+'OutBrutoA'), va:$(prefix+'OutVarA'), pr:$(prefix+'OutProrrA'), cu:$(prefix+'OutCuotaEmpA'), co:$(prefix+'OutCosteA')},
    outB:{br:$(prefix+'OutBrutoB'), va:$(prefix+'OutVarB'), pr:$(prefix+'OutProrrB'), cu:$(prefix+'OutCuotaEmpB'), co:$(prefix+'OutCosteB')}
  };

  const fmtE = (x)=>fmtEUR(x);
  const num = (el)=>parseFloat(String(el?.value||'0').replace(',','.'))||0;
  let lastVar = 0;

  function employerRate(){
    return (num(refs.cc)+num(refs.des)+num(refs.form)+num(refs.fogasa)+num(refs.mei)+num(refs.at))/100;
  }
  
  function recalcProrrInfo(){
    const pr= (num(refs.baseMes) * (parseInt(refs.pagasExtra?.value||'0',10)/12));
    if (refs.prorrInfo) refs.prorrInfo.textContent = fmtE(pr);
  }
  
  function applyConfig(cfg){
    if (refs.baseMes) refs.baseMes.value = cfg.baseMes ?? defaults.baseMes;
    if (refs.pagasExtra) refs.pagasExtra.value = String(cfg.pagasExtra ?? defaults.pagasExtra);
    if (refs.contrato) refs.contrato.value = cfg.contrato || defaults.contrato || 'indefinido';
    if (refs.cc) refs.cc.value = (cfg.ccEmp ?? defaults.ccEmp).toString();
    if (refs.des) refs.des.value = (cfg.desempleoEmp ?? defaults.desempleoEmp).toString();
    if (refs.form) refs.form.value = (cfg.formEmp ?? defaults.formEmp).toString();
    if (refs.fogasa) refs.fogasa.value = (cfg.fogasa ?? defaults.fogasa).toString();
    if (refs.mei) refs.mei.value = (cfg.meiEmp ?? defaults.meiEmp).toString();
    if (refs.at) refs.at.value = (cfg.at ?? defaults.at).toString();
    recalcProrrInfo(); 
    render(0);
  }
  
  function readConfig(){
    return {
      baseMes: num(refs.baseMes), 
      pagasExtra: parseInt(refs.pagasExtra?.value||'0',10),
      contrato: refs.contrato?.value,
      ccEmp: num(refs.cc), 
      desempleoEmp: num(refs.des), 
      formEmp: num(refs.form),
      fogasa: num(refs.fogasa), 
      meiEmp: num(refs.mei), 
      at: num(refs.at)
    };
  }
  
  function render(varAuto){
    if (typeof varAuto === 'number' && !Number.isNaN(varAuto)){
      lastVar = varAuto;
    }
    const base = num(refs.baseMes);
    recalcProrrInfo();
    const prorr = base * (parseInt(refs.pagasExtra?.value||'0',10)/12);
    const includeVar = lastVar || 0;
    const rateEmp = employerRate();

    // Cálculo correcto: cotizaciones sobre bruto anual / 12
    const brutoAnual = base * 12 + (base * parseInt(refs.pagasExtra?.value||'0',10));
    const cuotaMensual = (brutoAnual * rateEmp) / 12;

    const baseA = base + includeVar;
    const costeA = baseA + cuotaMensual;

    const baseB = base + includeVar + prorr;
    const costeB = baseB + cuotaMensual;

    // ✅ Actualización de elementos que SÍ existen
    if (refs.outA.br) refs.outA.br.textContent = fmtE(base);
    if (refs.outA.va) refs.outA.va.textContent = fmtE(includeVar);
    if (refs.outA.pr) refs.outA.pr.textContent = fmtE(0);
    if (refs.outA.cu) refs.outA.cu.textContent = fmtE(cuotaMensual);
    if (refs.outA.co) refs.outA.co.textContent = fmtE(costeA);

    if (refs.outB.br) refs.outB.br.textContent = fmtE(base);
    if (refs.outB.va) refs.outB.va.textContent = fmtE(includeVar);
    if (refs.outB.pr) refs.outB.pr.textContent = fmtE(prorr);
    if (refs.outB.cu) refs.outB.cu.textContent = fmtE(cuotaMensual);
    if (refs.outB.co) refs.outB.co.textContent = fmtE(costeB);

    if (refs.monthlyA) refs.monthlyA.textContent = fmtE(baseA);
    if (refs.monthlyB) refs.monthlyB.textContent = fmtE(baseB);
  }

  function update(varAuto){
    render(varAuto);
    // persist
    CONFIG.payroll = CONFIG.payroll || {};
    const key = (prefix==='pyJ'?'june':'hugo');
    CONFIG.payroll[key] = readConfig();
    // % desempleo según contrato
    if (refs.contrato?.value==='temporal' && num(refs.des)!==6.70){ 
      if (refs.des) refs.des.value='6.70'; 
    }
    if (refs.contrato?.value==='indefinido' && num(refs.des)!==5.50){ 
      if (refs.des) refs.des.value='5.50'; 
    }
    saveConfig(CONFIG);
  }

  // ✅ Eventos con verificación de existencia
  const elementsToWatch = [refs.baseMes, refs.pagasExtra, refs.cc, refs.des, refs.form, refs.fogasa, refs.mei, refs.at];
  elementsToWatch.forEach(el => {
    if (el) {
      el.addEventListener('input', () => {
        update();
      });
    }
  });

  if (refs.contrato) {
    refs.contrato.addEventListener('change', () => {
      update();
    });
  }

  // ✅ RETURN AL FINAL DE LA FUNCIÓN
  return {defaults, applyConfig, update};
}

    // ===== Start (sin fichero) =====
    initMappingOptions([]);
  }
})();
</script>

<script>
(function(){
  const payrollLib = window.MBSPayroll;
  if (!payrollLib) {
    console.warn('ℹ️ MBSPayroll no disponible.');
    return;
  }

  const host = document.querySelector('[data-ref="payrollV2"]');
  if (!host) return;

  const payrollResults = (typeof window !== 'undefined' && window.MBSPayrollResults && typeof window.MBSPayrollResults === 'object')
    ? window.MBSPayrollResults
    : {};
  if (typeof window !== 'undefined') {
    window.MBSPayrollResults = payrollResults;
  }
  let payrollStateRef = null;
  let payrollBroadcastTimer = null;

  function schedulePayrollBroadcast(){
    if (typeof window === 'undefined') return;
    if (payrollBroadcastTimer) clearTimeout(payrollBroadcastTimer);
    payrollBroadcastTimer = setTimeout(()=>{
      const rolesDetail = {};
      Object.entries(payrollResults).forEach(([key, value]) => {
        if (!value) return;
        rolesDetail[key] = {
          key: value.key || key,
          nombre: value.nombre,
          titular: value.titular,
          breakdown: value.breakdown,
          config: value.config,
          month: value.month
        };
      });
      window.MBSPayrollResults = payrollResults;
      window.dispatchEvent(new CustomEvent('mbs:payroll-update', {
        detail: {
          month: payrollStateRef?.month || null,
          roles: rolesDetail
        }
      }));
    }, 0);
  }

  const ROLE_DEFS = [
    { key: 'psicologia', nombre: 'Psicología', titular: 'June Amores' },
    { key: 'logopedia', nombre: 'Logopedia', titular: 'Hugo Zichner' },
    { key: 'administracion', nombre: 'Recepción', titular: 'Mari Carmen' }
  ];

  const LEGACY_BASES = [1164.8, 1878];

  const computeAutoBaseCotizacion = (cfg, monthData)=>{
    const sim = Object.assign({}, cfg, {
      baseCotizacionMin: undefined,
      baseCotizacionMax: undefined,
      year: monthData?.year,
      monthIndex: monthData?.monthIndex
    });
    try{
      const breakdown = payrollLib.calculatePayroll(sim);
      return payrollLib.round2(breakdown.totalDevengadoMasProrrata);
    }catch(err){
      console.warn('No se pudo calcular la base de cotización automática', err);
      const salario = Number(cfg.salarioBaseMensual) || 0;
      const plus = Number(cfg.plusEmpresaMensual) || 0;
      const mejora = Number(cfg.mejoraVolAbsMensual) || 0;
      const pagasExtra = Number(cfg.pagasExtra) || 0;
      const importePagaExtra = Number(cfg.importePagaExtra) || 0;
      const prorrata = cfg.pagasProrrateadas ? (importePagaExtra * pagasExtra) / 12 : 0;
      return payrollLib.round2(salario + plus + mejora + prorrata);
    }
  };

  const DEFAULT_CONFIG = {
    month: null,
    roles: {
      psicologia: {
        nombre: 'Psicología',
        salarioBaseMensual: 592,
        plusEmpresaMensual: 308,
        mejoraVolAbsMensual: 112.9,
        pagasExtra: 2,
        pagasProrrateadas: true,
        importePagaExtra: 900,
        tipoIRPF: 2,
        ssTrabajador: {
          contingenciasComunes: 4.7,
          mei: 0.12,
          desempleo: 1.55,
          formacionProfesional: 0.1
        },
        ssEmpresa: {
          contingenciasComunes: 23.6,
          mei: 0.67,
          desempleo: 5.5,
          fogasa: 0.2,
          formacionProfesional: 0.6,
          itIms: 1.5
        }
      },
      logopedia: {
        nombre: 'Logopedia',
        salarioBaseMensual: 1398.03,
        plusEmpresaMensual: 0,
        mejoraVolAbsMensual: 0,
        pagasExtra: 2,
        pagasProrrateadas: true,
        importePagaExtra: 1398.03,
        tipoIRPF: 2,
        ssTrabajador: {
          contingenciasComunes: 4.7,
          mei: 0.12,
          desempleo: 1.55,
          formacionProfesional: 0.1
        },
        ssEmpresa: {
          contingenciasComunes: 23.6,
          mei: 0.67,
          desempleo: 5.5,
          fogasa: 0.2,
          formacionProfesional: 0.6,
          itIms: 1.5
        }
      },
      administracion: {
        nombre: 'Recepción',
        salarioBaseMensual: 888, // 29,60 €/día × 30 días
        plusEmpresaMensual: 387.62, // 12,9207 €/día × 30 días
        mejoraVolAbsMensual: 0,
        pagasExtra: 2,
        pagasProrrateadas: true,
        importePagaExtra: 1275.62,
        tipoIRPF: 7,
        ssTrabajador: {
          contingenciasComunes: 4.7,
          mei: 0.12,
          desempleo: 1.55,
          formacionProfesional: 0.1
        },
        ssEmpresa: {
          contingenciasComunes: 23.6,
          mei: 0.67,
          desempleo: 5.5,
          fogasa: 0.2,
          formacionProfesional: 0.6,
          itIms: 1.5
        }
      }
    }
  };

  const STORAGE_KEY = 'mbs-payroll-v2';

  function clone(value){
    return JSON.parse(JSON.stringify(value));
  }

  function loadState(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return clone(DEFAULT_CONFIG);
      const parsed = JSON.parse(raw);
      const state = clone(DEFAULT_CONFIG);
      if(parsed && typeof parsed === 'object'){
        if(parsed.month) state.month = parsed.month;
        if(parsed.roles){
          for(const key of Object.keys(parsed.roles)){
            if(state.roles[key]){
              state.roles[key] = Object.assign({}, state.roles[key], parsed.roles[key] || {});
            }
          }
        }
      }
      return state;
    }catch(err){
      console.warn('No se pudo cargar la configuración de nómina', err);
      return clone(DEFAULT_CONFIG);
    }
  }

  function saveState(state){
    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }catch(err){
      console.warn('No se pudo guardar la configuración de nómina', err);
    }
  }

  const state = loadState();
  payrollStateRef = state;
  const currentMonth = payrollLib.getCurrentPayrollMonth();
  if(!state.month){
    state.month = formatMonthValue(currentMonth.year, currentMonth.monthIndex);
  }
  const storedMonthData = (()=>{
    if(state.month && /^\d{4}-\d{2}$/.test(state.month)){
      const parts = state.month.split('-');
      const year = parseInt(parts[0], 10);
      const monthIndex = parseInt(parts[1], 10) - 1;
      if(Number.isInteger(year) && Number.isInteger(monthIndex)){
        return {year, monthIndex};
      }
    }
    return {year: currentMonth.year, monthIndex: currentMonth.monthIndex};
  })();

  ROLE_DEFS.forEach(def => {
    state.roles[def.key] = Object.assign({}, DEFAULT_CONFIG.roles[def.key], state.roles[def.key] || {});
    const roleState = state.roles[def.key];
    const defaults = DEFAULT_CONFIG.roles[def.key] || {};
    const salarioBase = Number(roleState.salarioBaseMensual) || 0;
    const plusEmpresa = Number(roleState.plusEmpresaMensual) || 0;
    const mejoraVol = Number(roleState.mejoraVolAbsMensual) || 0;
    if (salarioBase <= 0 && plusEmpresa <= 0 && mejoraVol <= 0){
      if (Number.isFinite(defaults.salarioBaseMensual) && defaults.salarioBaseMensual > 0){
        roleState.salarioBaseMensual = defaults.salarioBaseMensual;
      }
      if (Number.isFinite(defaults.plusEmpresaMensual)){
        roleState.plusEmpresaMensual = defaults.plusEmpresaMensual;
      }
      if (Number.isFinite(defaults.mejoraVolAbsMensual)){
        roleState.mejoraVolAbsMensual = defaults.mejoraVolAbsMensual;
      }
      if (Number.isFinite(defaults.importePagaExtra) && (!Number.isFinite(Number(roleState.importePagaExtra)) || Number(roleState.importePagaExtra) <= 0)){
        roleState.importePagaExtra = defaults.importePagaExtra;
      }
    }
    if (!Number.isFinite(Number(roleState.pagasExtra)) || Number(roleState.pagasExtra) <= 0){
      roleState.pagasExtra = defaults.pagasExtra;
    }
    roleState.ssTrabajador = Object.assign({}, defaults.ssTrabajador, roleState.ssTrabajador || {});
    roleState.ssEmpresa = roleState.ssEmpresa ? Object.assign({}, defaults.ssEmpresa, roleState.ssEmpresa) : (defaults.ssEmpresa ? clone(defaults.ssEmpresa) : undefined);
    if(def.key === 'administracion'){
      const tipoIrpfActual = Number(roleState.tipoIRPF);
      if(!Number.isFinite(tipoIrpfActual) || tipoIrpfActual <= 0){
        roleState.tipoIRPF = defaults.tipoIRPF;
      }else if(Number.isFinite(defaults.tipoIRPF) && Math.abs(tipoIrpfActual - 2) < 0.001){
        roleState.tipoIRPF = defaults.tipoIRPF;
      }
    }
    const baseValue = Number(roleState.baseCotizacionMin);
    const isLegacyBase = LEGACY_BASES.some(val => Math.abs(val - baseValue) < 0.6);
    if(!Number.isFinite(baseValue) || baseValue <= 0 || isLegacyBase){
      roleState.baseCotizacionMin = computeAutoBaseCotizacion(roleState, storedMonthData);
    }
  });

  const header = document.createElement('div');
  header.className = 'mbs-payroll-v2-header';
  const monthBox = document.createElement('div');
  monthBox.className = 'mbs-payroll-v2-month';
  const monthLabel = document.createElement('label');
  monthLabel.textContent = 'Mes simulado';
  const monthInput = document.createElement('input');
  monthInput.type = 'month';
  monthInput.className = 'mbs-input';
  monthInput.value = state.month || formatMonthValue(currentMonth.year, currentMonth.monthIndex);
  monthBox.appendChild(monthLabel);
  monthBox.appendChild(monthInput);
  const monthChip = document.createElement('div');
  monthChip.className = 'mbs-payroll-v2-chip';
  monthChip.setAttribute('title', 'Puedes cambiar el mes para simular nóminas futuras.');
  header.appendChild(monthBox);
  header.appendChild(monthChip);
  host.appendChild(header);

  const rolesWrapper = document.createElement('div');
  rolesWrapper.className = 'mbs-payroll-v2-roles';
  host.appendChild(rolesWrapper);

  const roleViews = ROLE_DEFS.map(def => {
    const view = createRoleView(def, state.roles[def.key]);
    rolesWrapper.appendChild(view.element);
    return view;
  });

  function resolveMonth(){
    const value = monthInput.value || state.month;
    if(value && /^\d{4}-\d{2}$/.test(value)){
      const parts = value.split('-');
      const year = parseInt(parts[0],10);
      const monthIndex = parseInt(parts[1],10)-1;
      const label = new Intl.DateTimeFormat('es-ES',{month:'long',timeZone:'Europe/Madrid'})
        .format(new Date(Date.UTC(year, monthIndex, 1)));
      return {year, monthIndex, monthLabelES: label};
    }
    return payrollLib.getCurrentPayrollMonth();
  }

  function renderAll(){
    const monthData = resolveMonth();
    monthChip.textContent = `${capitalize(monthData.monthLabelES)} ${monthData.year}`;
    state.month = formatMonthValue(monthData.year, monthData.monthIndex);
    roleViews.forEach(view => view.render(monthData));
    saveState(state);
  }

  monthInput.addEventListener('change', renderAll);
  renderAll();

  function createRoleView(def, config){
    const section = document.createElement('section');
    section.className = 'mbs-payroll-v2-role';
    const heading = document.createElement('h5');
    heading.innerHTML = `${def.nombre}${def.titular ? ' — <strong>' + def.titular + '</strong>' : ''} <span data-month-label></span>`;
    section.appendChild(heading);
    const subTabs = document.createElement('div');
    subTabs.className = 'mbs-payroll-v2-subtabs';
    subTabs.setAttribute('role', 'tablist');
    const panelsWrapper = document.createElement('div');
    panelsWrapper.className = 'mbs-payroll-v2-subpanels';
    const conceptPanel = document.createElement('div');
    conceptPanel.className = 'mbs-payroll-v2-panel mbs-payroll-v2-grid is-active';
    const quotasPanel = document.createElement('div');
    quotasPanel.className = 'mbs-payroll-v2-panel mbs-payroll-v2-grid';
    conceptPanel.setAttribute('data-subpanel', 'conceptos');
    quotasPanel.setAttribute('data-subpanel', 'cuotas');
    panelsWrapper.appendChild(conceptPanel);
    panelsWrapper.appendChild(quotasPanel);

    const subTabDefs = [
      {key: 'conceptos', label: 'Conceptos fijos', panel: conceptPanel},
      {key: 'cuotas', label: 'Cuotas & cotizaciones', panel: quotasPanel}
    ];
    const subTabButtons = new Map();
    const panelIds = new Map();
    subTabDefs.forEach(def => {
      const panelId = `${def.key}-panel-${Math.random().toString(36).slice(2,7)}`;
      def.panel.id = panelId;
      def.panel.setAttribute('role', 'tabpanel');
      panelIds.set(def.key, panelId);
    });
    function activateSubTab(key){
      subTabDefs.forEach(def => {
        const isActive = def.key === key;
        def.panel.classList.toggle('is-active', isActive);
        def.panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        const btn = subTabButtons.get(def.key);
        if(btn){
          btn.classList.toggle('is-active', isActive);
          btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
          btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        }
      });
    }
    subTabDefs.forEach(def => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = def.label;
      btn.className = def.key === 'conceptos' ? 'is-active' : '';
      btn.setAttribute('role', 'tab');
      const btnId = `${def.key}-tab-${Math.random().toString(36).slice(2,7)}`;
      btn.id = btnId;
      btn.setAttribute('data-subtab', def.key);
      btn.setAttribute('aria-pressed', def.key === 'conceptos' ? 'true' : 'false');
      btn.setAttribute('aria-selected', def.key === 'conceptos' ? 'true' : 'false');
      const panelId = panelIds.get(def.key);
      if(panelId){
        btn.setAttribute('aria-controls', panelId);
        def.panel.setAttribute('aria-labelledby', btnId);
      }
      btn.addEventListener('click', () => activateSubTab(def.key));
      subTabButtons.set(def.key, btn);
      subTabs.appendChild(btn);
    });
    section.appendChild(subTabs);
    section.appendChild(panelsWrapper);
    const fields = {};
    const fieldNotes = {};

    function createNumberField(opts){
      const wrapper = document.createElement('div');
      if(opts.full) wrapper.classList.add('full');
      const label = document.createElement('label');
      label.textContent = opts.label;
      const input = document.createElement('input');
      input.type = 'number';
      input.step = opts.step || '0.01';
      if(typeof opts.min !== 'undefined') input.min = String(opts.min);
      input.className = 'mbs-input';
      input.value = config[opts.field] != null ? config[opts.field] : '';
      if(opts.disabled) input.disabled = true;
      wrapper.appendChild(label);
      wrapper.appendChild(input);
      if(opts.note){
        const note = document.createElement('div');
        note.className = 'mbs-payroll-v2-note';
        note.textContent = opts.note;
        wrapper.appendChild(note);
        const noteKey = opts.noteKey || opts.field;
        if(noteKey){
          fieldNotes[noteKey] = note;
        }
      }
      const target = opts.container || conceptPanel;
      target.appendChild(wrapper);
      fields[opts.field] = input;
      if(typeof opts.onCreate === 'function'){
        opts.onCreate(input, wrapper);
      }
    }

    createNumberField({field:'salarioBaseMensual', label:'Salario base mensual (€)', note:'Concepto mensual. Se prorratea según el mes elegido.'});
    createNumberField({field:'plusEmpresaMensual', label:'Plus de empresa mensual (€)', note:'Incluye complementos fijos.'});
    createNumberField({field:'mejoraVolAbsMensual', label:'Mejora voluntaria absorbible (€)', note:'0 si no aplica.'});
    createNumberField({field:'importePagaExtra', label:'Importe paga extra (€)', note:'Bruto de una paga extra.'});
    createNumberField({field:'pagasExtra', label:'Pagas extra al año', note:'Generalmente 2 pagas (julio y diciembre).', step:'1', min:0});
    fields.pagasExtra.value = Number(config.pagasExtra || 0);

    const prorrataWrapper = document.createElement('div');
    prorrataWrapper.className = 'full';
    const prorrataLabel = document.createElement('label');
    prorrataLabel.className = 'mbs-payroll-v2-toggle';
    const prorrataCheckbox = document.createElement('input');
    prorrataCheckbox.type = 'checkbox';
    prorrataCheckbox.checked = !!config.pagasProrrateadas;
    prorrataLabel.appendChild(prorrataCheckbox);
    prorrataLabel.appendChild(document.createTextNode('Pagas prorrateadas (12 mensualidades)'));
    prorrataWrapper.appendChild(prorrataLabel);
    const prorrataNote = document.createElement('div');
    prorrataNote.className = 'mbs-payroll-v2-note';
    prorrataNote.textContent = 'Si desactivas la prorrata, las pagas extra se abonan completas en julio y diciembre.';
    prorrataWrapper.appendChild(prorrataNote);
    conceptPanel.appendChild(prorrataWrapper);

    createNumberField({field:'tipoIRPF', label:'Tipo IRPF (%)', note:'Retención aplicada sobre devengos fijos.'});

    const ssTrabajadorBlock = document.createElement('div');
    ssTrabajadorBlock.className = 'full';
    const ssTrabajadorLabel = document.createElement('label');
    ssTrabajadorLabel.textContent = 'Cuotas Seguridad Social trabajador (%)';
    ssTrabajadorBlock.appendChild(ssTrabajadorLabel);
    const ssTrabajadorGrid = document.createElement('div');
    ssTrabajadorGrid.className = 'mbs-payroll-v2-grid';
    const ssTrabajadorFields = ['contingenciasComunes','mei','desempleo','formacionProfesional'];
    const ssTrabajadorNames = {
      contingenciasComunes: 'Contingencias comunes',
      mei: 'MEI',
      desempleo: 'Desempleo',
      formacionProfesional: 'Formación profesional'
    };
    ssTrabajadorFields.forEach(key => {
      const wrap = document.createElement('div');
      const lab = document.createElement('label');
      lab.textContent = ssTrabajadorNames[key];
      const input = document.createElement('input');
      input.type = 'number';
      input.step = '0.01';
      input.className = 'mbs-input';
      input.value = config.ssTrabajador?.[key] != null ? config.ssTrabajador[key] : '';
      wrap.appendChild(lab);
      wrap.appendChild(input);
      ssTrabajadorGrid.appendChild(wrap);
      fields['ssTrabajador.' + key] = input;
    });
    ssTrabajadorBlock.appendChild(ssTrabajadorGrid);
    quotasPanel.appendChild(ssTrabajadorBlock);

    const ssEmpresaBlock = document.createElement('div');
    ssEmpresaBlock.className = 'full';
    const ssEmpresaLabel = document.createElement('label');
    ssEmpresaLabel.textContent = 'Cuotas Seguridad Social empresa (%)';
    ssEmpresaBlock.appendChild(ssEmpresaLabel);
    const ssEmpresaGrid = document.createElement('div');
    ssEmpresaGrid.className = 'mbs-payroll-v2-grid';
    const ssEmpresaFields = ['contingenciasComunes','mei','desempleo','fogasa','formacionProfesional','itIms'];
    const ssEmpresaNames = {
      contingenciasComunes: 'Contingencias comunes',
      mei: 'MEI',
      desempleo: 'Desempleo',
      fogasa: 'FOGASA',
      formacionProfesional: 'Formación',
      itIms: 'AT/EP (IT/IMS)'
    };
    ssEmpresaFields.forEach(key => {
      const wrap = document.createElement('div');
      const lab = document.createElement('label');
      lab.textContent = ssEmpresaNames[key];
      const input = document.createElement('input');
      input.type = 'number';
      input.step = '0.01';
      input.className = 'mbs-input';
      input.value = config.ssEmpresa?.[key] != null ? config.ssEmpresa[key] : '';
      wrap.appendChild(lab);
      wrap.appendChild(input);
      ssEmpresaGrid.appendChild(wrap);
      fields['ssEmpresa.' + key] = input;
    });
    const ssEmpresaNote = document.createElement('div');
    ssEmpresaNote.className = 'mbs-payroll-v2-note';
    ssEmpresaNote.textContent = 'Rellena estos campos para obtener el coste empresa (opcional).';
    ssEmpresaBlock.appendChild(ssEmpresaGrid);
    ssEmpresaBlock.appendChild(ssEmpresaNote);
    quotasPanel.appendChild(ssEmpresaBlock);

    createNumberField({
      field:'baseCotizacionMin',
      label:'Base cotización mínima (€)',
      note:'Aplicada sólo a cuotas si procede.',
      full:true,
      container: quotasPanel,
      onCreate:(input)=>{
        if(config.baseCotizacionMin == null){
          input.dataset.auto = 'true';
        }
        input.addEventListener('input', ()=>{
          delete input.dataset.auto;
        });
      }
    });
    createNumberField({
      field:'baseCotizacionMax',
      label:'Base cotización máxima (€)',
      note:'Opcional. Dejar vacío si no aplica.',
      full:true,
      container: quotasPanel
    });

    activateSubTab('conceptos');

    const table = document.createElement('table');
    table.className = 'mbs-payroll-v2-table';
    table.title = 'En nómina mensual los conceptos se prorratean según el mes elegido.';
    table.innerHTML = `
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Unidades</th>
          <th>Importe</th>
          <th>Devengado</th>
          <th>A deducir</th>
        </tr>
      </thead>
      <tbody>
        <tr data-row="salario">
          <td>Salario base</td><td data-unidades></td><td data-importe></td><td data-devengado></td><td></td>
        </tr>
        <tr data-row="plus">
          <td>Plus de empresa</td><td data-unidades></td><td data-importe></td><td data-devengado></td><td></td>
        </tr>
        <tr data-row="mejora">
          <td>Mejora voluntaria</td><td data-unidades></td><td data-importe></td><td data-devengado></td><td></td>
        </tr>
        <tr data-row="irpf">
          <td>Retención IRPF</td><td>—</td><td data-rate></td><td>—</td><td data-deduce></td>
        </tr>
        <tr data-row="ss">
          <td>Descuentos SS trabajador</td><td>—</td><td data-base></td><td>—</td><td data-deduce></td>
        </tr>
      </tbody>
    `;
    section.appendChild(table);

    const highlight = document.createElement('div');
    highlight.className = 'mbs-payroll-v2-highlight';
    highlight.innerHTML = `
      <div class="mbs-payroll-v2-highlight-card is-accent" data-highlight-card="liquido">
        <span class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3v18"></path>
            <path d="M17 8.5a3.5 3.5 0 0 0-7 0h3"></path>
            <path d="M7 15.5a3.5 3.5 0 0 0 7 0h-3"></path>
          </svg>
        </span>
        <div class="content">
          <span class="label">Líquido a percibir</span>
          <span class="value" data-highlight-value="liquido"></span>
          <span class="hint">Sin prorrata ni bases de cotización.</span>
        </div>
      </div>
      <div class="mbs-payroll-v2-highlight-card" data-highlight-card="variable">
        <span class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 16 8 10 12 14 16 7 20 17"></polyline>
            <circle cx="8" cy="10" r=".5"></circle>
            <circle cx="12" cy="14" r=".5"></circle>
            <circle cx="16" cy="7" r=".5"></circle>
          </svg>
        </span>
        <div class="content">
          <span class="label">Variable mensual</span>
          <span class="value" data-highlight-value="variable"></span>
          <span class="hint">Mejora voluntaria estimada.</span>
        </div>
      </div>
      <div class="mbs-payroll-v2-highlight-card" data-highlight-card="coste">
        <span class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19h16"></path>
            <path d="M6 19V7l6-4 6 4v12"></path>
            <path d="M10 19v-4h4v4"></path>
          </svg>
        </span>
        <div class="content">
          <span class="label">Coste total empresa</span>
          <span class="value" data-highlight-value="coste"></span>
          <span class="hint">Incluye cuotas empresariales configuradas.</span>
        </div>
      </div>
    `;
    section.appendChild(highlight);

    const summary = document.createElement('div');
    summary.className = 'mbs-payroll-v2-summary';
    summary.innerHTML = `
      <div class="mbs-payroll-v2-summary-row"><span data-summary-label="devengado">Devengo mensual</span><span data-summary="devengado"></span></div>
      <div class="mbs-payroll-v2-summary-row"><span>Prorrata pagas extra</span><span data-summary="prorrata"></span></div>
      <div class="mbs-payroll-v2-summary-row"><span>Total devengado (con prorrata)</span><span data-summary="totalDev"></span></div>
      <div class="mbs-payroll-v2-summary-row"><span>Base IRPF (sin prorrata)</span><span data-summary="baseIrpf"></span></div>
      <div class="mbs-payroll-v2-summary-row"><span data-summary-label="deducciones">Total deducciones</span><span data-summary="deducciones"></span></div>
      <div class="mbs-payroll-v2-summary-row" data-coste="cuotas" style="display:none;"><span>Cuotas empresa</span><span data-summary="cuotasEmpresa"></span></div>
      <div class="mbs-payroll-v2-summary-row" data-coste="total" style="display:none;"><span>Coste total empresa</span><span data-summary="costeTotal"></span></div>
      <div class="mbs-payroll-v2-summary-row" data-total><span>Líquido a percibir</span><span data-summary="liquido"></span></div>
    `;
    section.appendChild(summary);

    const details = document.createElement('div');
    details.className = 'mbs-payroll-v2-details';
    details.innerHTML = `
      <details>
        <summary>Aportación del trabajador</summary>
        <div class="mbs-payroll-v2-note" data-worker-base></div>
        <table>
          <tbody>
            <tr data-worker="cc"><td>Contingencias comunes</td><td data-rate></td><td data-cuota></td></tr>
            <tr data-worker="mei"><td>MEI</td><td data-rate></td><td data-cuota></td></tr>
            <tr data-worker="desempleo"><td>Desempleo</td><td data-rate></td><td data-cuota></td></tr>
            <tr data-worker="formacion"><td>Formación profesional</td><td data-rate></td><td data-cuota></td></tr>
            <tr data-worker="total"><td><strong>Total trabajador</strong></td><td></td><td data-cuota></td></tr>
          </tbody>
        </table>
      </details>
      <details data-company style="display:none;">
        <summary>Aportación de la empresa</summary>
        <div class="mbs-payroll-v2-note" data-company-base></div>
        <table>
          <tbody>
            <tr data-company="cc"><td>Contingencias comunes</td><td data-rate></td><td data-cuota></td></tr>
            <tr data-company="mei"><td>MEI</td><td data-rate></td><td data-cuota></td></tr>
            <tr data-company="desempleo"><td>Desempleo</td><td data-rate></td><td data-cuota></td></tr>
            <tr data-company="fogasa"><td>FOGASA</td><td data-rate></td><td data-cuota></td></tr>
            <tr data-company="formacion"><td>Formación profesional</td><td data-rate></td><td data-cuota></td></tr>
            <tr data-company="itIms"><td>AT/EP (IT/IMS)</td><td data-rate></td><td data-cuota></td></tr>
            <tr data-company="total"><td><strong>Total empresa</strong></td><td></td><td data-cuota></td></tr>
          </tbody>
        </table>
      </details>
    `;
    section.appendChild(details);

    const note = document.createElement('div');
    note.className = 'mbs-payroll-v2-note';
    note.textContent = 'Los importes se prorratean según el mes seleccionado. Las cuotas del trabajador se muestran solo como referencia y no se descuentan del líquido.';
    section.appendChild(note);

    const refs = {
      section,
      headingMonth: heading.querySelector('[data-month-label]'),
      prorrataCheckbox,
      conceptRows: {
        salario: getConceptRow('salario'),
        plus: getConceptRow('plus'),
        mejora: getConceptRow('mejora')
      },
      irpfRow: {
        rate: table.querySelector('tr[data-row="irpf"] [data-rate]'),
        deduce: table.querySelector('tr[data-row="irpf"] [data-deduce]')
      },
      ssRow: {
        base: table.querySelector('tr[data-row="ss"] [data-base]'),
        deduce: table.querySelector('tr[data-row="ss"] [data-deduce]')
      },
      highlight: {
        liquido: highlight.querySelector('[data-highlight-value="liquido"]'),
        variable: highlight.querySelector('[data-highlight-value="variable"]'),
        coste: highlight.querySelector('[data-highlight-value="coste"]'),
        costeCard: highlight.querySelector('[data-highlight-card="coste"]')
      },
      summary: {
        devengado: summary.querySelector('[data-summary="devengado"]'),
        prorrata: summary.querySelector('[data-summary="prorrata"]'),
        totalDev: summary.querySelector('[data-summary="totalDev"]'),
        baseIrpf: summary.querySelector('[data-summary="baseIrpf"]'),
        deducciones: summary.querySelector('[data-summary="deducciones"]'),
        liquido: summary.querySelector('[data-summary="liquido"]'),
        cuotasEmpresa: summary.querySelector('[data-summary="cuotasEmpresa"]'),
        costeTotal: summary.querySelector('[data-summary="costeTotal"]'),
        rowsCoste: summary.querySelectorAll('[data-coste]'),
        labelDevengado: summary.querySelector('[data-summary-label="devengado"]'),
        labelDeducciones: summary.querySelector('[data-summary-label="deducciones"]')
      },
      table,
      notes: fieldNotes,
      footerNote: note,
      workerDetails: {
        base: details.querySelector('[data-worker-base]'),
        rows: {
          cc: getWorkerRow('cc'),
          mei: getWorkerRow('mei'),
          desempleo: getWorkerRow('desempleo'),
          formacion: getWorkerRow('formacion'),
          total: getWorkerRow('total')
        }
      },
      companyDetails: {
        container: details.querySelector('[data-company]'),
        base: details.querySelector('[data-company-base]'),
        rows: {
          cc: getCompanyRow('cc'),
          mei: getCompanyRow('mei'),
          desempleo: getCompanyRow('desempleo'),
          fogasa: getCompanyRow('fogasa'),
          formacion: getCompanyRow('formacion'),
          itIms: getCompanyRow('itIms'),
          total: getCompanyRow('total')
        }
      }
    };

    function getConceptRow(name){
      const row = table.querySelector(`tr[data-row="${name}"]`);
      return row ? {
        unidades: row.querySelector('[data-unidades]'),
        importe: row.querySelector('[data-importe]'),
        devengado: row.querySelector('[data-devengado]')
      } : {};
    }

    function getWorkerRow(name){
      const row = details.querySelector(`tr[data-worker="${name}"]`);
      return row ? {
        rate: row.querySelector('[data-rate]'),
        cuota: row.querySelector('[data-cuota]')
      } : {};
    }

    function getCompanyRow(name){
      const row = details.querySelector(`tr[data-company="${name}"]`);
      return row ? {
        rate: row.querySelector('[data-rate]'),
        cuota: row.querySelector('[data-cuota]')
      } : {};
    }

    function parseNumber(value){
      if(value === '' || value == null) return NaN;
      const normalized = String(value).replace(/,/g,'.');
      const num = Number(normalized);
      return Number.isFinite(num) ? num : NaN;
    }

    function readConfig(){
      const result = Object.assign({}, config);
      ['salarioBaseMensual','plusEmpresaMensual','mejoraVolAbsMensual','importePagaExtra','tipoIRPF','baseCotizacionMin','baseCotizacionMax'].forEach(key => {
        if(fields[key]){
          const val = parseNumber(fields[key].value);
          result[key] = Number.isNaN(val) ? 0 : val;
        }
      });
      if(fields.pagasExtra){
        const val = parseInt(fields.pagasExtra.value || '0', 10);
        result.pagasExtra = Number.isNaN(val) ? 0 : val;
      }
      result.pagasProrrateadas = prorrataCheckbox.checked;

      result.ssTrabajador = result.ssTrabajador || {};
      ['contingenciasComunes','mei','desempleo','formacionProfesional'].forEach(key => {
        const field = fields['ssTrabajador.' + key];
        if(field){
          const val = parseNumber(field.value);
          result.ssTrabajador[key] = Number.isNaN(val) ? 0 : val;
        }
      });

      const empresaData = {};
      let hasEmpresa = false;
      ['contingenciasComunes','mei','desempleo','fogasa','formacionProfesional','itIms'].forEach(key => {
        const field = fields['ssEmpresa.' + key];
        if(field){
          const val = parseNumber(field.value);
          if(!Number.isNaN(val) && val !== 0){
            hasEmpresa = true;
          }
          empresaData[key] = Number.isNaN(val) ? 0 : val;
        }
      });
      result.ssEmpresa = hasEmpresa ? empresaData : undefined;

      if(fields.baseCotizacionMin && fields.baseCotizacionMin.dataset.auto === 'true'){
        result.baseCotizacionMin = undefined;
      }
      result.baseCotizacionMin = normalizeOptional(result.baseCotizacionMin);
      result.baseCotizacionMax = normalizeOptional(result.baseCotizacionMax);

      return result;
    }

    function normalizeOptional(val){
      if(val == null) return undefined;
      const num = Number(val);
      return Number.isFinite(num) && num > 0 ? num : undefined;
    }

    function render(monthData){
      const cfg = readConfig();
      if(cfg.baseCotizacionMin == null){
        const autoBase = computeAutoBaseCotizacion(cfg, monthData);
        cfg.baseCotizacionMin = autoBase;
        if(fields.baseCotizacionMin){
          fields.baseCotizacionMin.value = autoBase;
          fields.baseCotizacionMin.dataset.auto = 'true';
        }
      }
      cfg.nombre = def.nombre;
      const nextStateCfg = Object.assign({}, cfg);
      if(fields.baseCotizacionMin?.dataset.auto === 'true'){
        nextStateCfg.baseCotizacionMin = undefined;
      }
      state.roles[def.key] = nextStateCfg;

      const breakdown = payrollLib.calculatePayroll(Object.assign({}, cfg, {
        year: monthData.year,
        monthIndex: monthData.monthIndex
      }));

      const daysInMonth = breakdown.daysInMonth || payrollLib.getDaysInMonth(monthData.year, monthData.monthIndex);

      if(refs.table) refs.table.title = `En nómina mensual los conceptos se prorratean a ${daysInMonth} días.`;
      if(refs.summary.labelDevengado) refs.summary.labelDevengado.textContent = `Devengo mensual (${daysInMonth} días)`;
      if(refs.notes?.salarioBaseMensual) refs.notes.salarioBaseMensual.textContent = `Concepto mensual. Se prorratea a ${daysInMonth} días.`;
      if(refs.footerNote) refs.footerNote.textContent = `Importes prorrateados a ${daysInMonth} días (${capitalize(monthData.monthLabelES)} ${monthData.year}).`;

      refs.headingMonth.textContent = `${capitalize(monthData.monthLabelES)} ${monthData.year}`;

      updateConcept(refs.conceptRows.salario, breakdown.conceptos.salarioBase);
      updateConcept(refs.conceptRows.plus, breakdown.conceptos.plusEmpresa);
      updateConcept(refs.conceptRows.mejora, breakdown.conceptos.mejoraVolAbs);

      if(refs.irpfRow.rate) refs.irpfRow.rate.textContent = formatPercent(cfg.tipoIRPF || 0);
      if(refs.irpfRow.deduce) refs.irpfRow.deduce.textContent = payrollLib.formatEUR(breakdown.deducciones.irpf);

      const workerContributionApplied = breakdown.deducciones?.aplicaSsTrabajador !== false;

      if(refs.ssRow.base) refs.ssRow.base.textContent = 'Base: ' + payrollLib.formatEUR(breakdown.deducciones.ssTrabajador.baseCotizacion);
      if(refs.ssRow.deduce){
        if(workerContributionApplied){
          refs.ssRow.deduce.textContent = payrollLib.formatEUR(breakdown.deducciones.ssTrabajador.total);
        }else{
          refs.ssRow.deduce.textContent = 'No se descuenta';
        }
      }

      const variableImporte = breakdown.conceptos?.mejoraVolAbs?.devengado || 0;
      if(refs.highlight.liquido) refs.highlight.liquido.textContent = payrollLib.formatEUR(breakdown.liquido);
      if(refs.highlight.variable) refs.highlight.variable.textContent = payrollLib.formatEUR(variableImporte);
      if(refs.highlight.coste){
        if(breakdown.costeEmpresa){
          refs.highlight.coste.textContent = payrollLib.formatEUR(breakdown.costeEmpresa.costeTotal);
          refs.highlight.costeCard?.classList.remove('mbs-payroll-v2-highlight-muted');
        }else{
          refs.highlight.coste.textContent = 'Configura las cuotas';
          refs.highlight.costeCard?.classList.add('mbs-payroll-v2-highlight-muted');
        }
      }

      refs.summary.devengado.textContent = payrollLib.formatEUR(breakdown.devengadoTotal);
      const prorrataResumen = cfg.pagasProrrateadas
        ? breakdown.prorrataPagas
        : (breakdown.prorrataMensualCotizacion ?? breakdown.prorrataPagas);
      refs.summary.prorrata.textContent = payrollLib.formatEUR(prorrataResumen);
      refs.summary.totalDev.textContent = payrollLib.formatEUR(breakdown.totalDevengadoMasProrrata);
      refs.summary.baseIrpf.textContent = payrollLib.formatEUR(breakdown.baseIrpf);
      refs.summary.deducciones.textContent = payrollLib.formatEUR(breakdown.deducciones.totalDeducciones);
      if(refs.summary.labelDeducciones){
        refs.summary.labelDeducciones.textContent = workerContributionApplied
          ? 'Total deducciones'
          : 'Total deducciones (solo IRPF)';
      }
      refs.summary.liquido.textContent = payrollLib.formatEUR(breakdown.liquido);

      if(breakdown.costeEmpresa){
        refs.summary.cuotasEmpresa.textContent = payrollLib.formatEUR(breakdown.costeEmpresa.cuotas.total);
        refs.summary.costeTotal.textContent = payrollLib.formatEUR(breakdown.costeEmpresa.costeTotal);
        refs.summary.rowsCoste.forEach(row => row.style.display = '');
      }else{
        refs.summary.rowsCoste.forEach(row => row.style.display = 'none');
      }

      if(refs.workerDetails.base){
        const baseText = 'Base de cotización: ' + payrollLib.formatEUR(breakdown.deducciones.ssTrabajador.baseCotizacion);
        refs.workerDetails.base.textContent = workerContributionApplied
          ? baseText
          : baseText + ' · Cuotas no descontadas del líquido.';
      }
      updateWorkerRow('cc', config.ssTrabajador?.contingenciasComunes, breakdown.deducciones.ssTrabajador.cc);
      updateWorkerRow('mei', config.ssTrabajador?.mei, breakdown.deducciones.ssTrabajador.mei);
      updateWorkerRow('desempleo', config.ssTrabajador?.desempleo, breakdown.deducciones.ssTrabajador.desempleo);
      updateWorkerRow('formacion', config.ssTrabajador?.formacionProfesional, breakdown.deducciones.ssTrabajador.fp);
      updateWorkerRow('total', null, breakdown.deducciones.ssTrabajador.total);

      if(breakdown.costeEmpresa){
        refs.companyDetails.container.style.display = '';
        refs.companyDetails.base.textContent = 'Base de cotización (12 mensualidades): ' + payrollLib.formatEUR(breakdown.costeEmpresa.baseCotizacion);
        updateCompanyRow('cc', config.ssEmpresa?.contingenciasComunes, breakdown.costeEmpresa.cuotas.cc);
        updateCompanyRow('mei', config.ssEmpresa?.mei, breakdown.costeEmpresa.cuotas.mei);
        updateCompanyRow('desempleo', config.ssEmpresa?.desempleo, breakdown.costeEmpresa.cuotas.desempleo);
        updateCompanyRow('fogasa', config.ssEmpresa?.fogasa, breakdown.costeEmpresa.cuotas.fogasa);
        updateCompanyRow('formacion', config.ssEmpresa?.formacionProfesional, breakdown.costeEmpresa.cuotas.fp);
        updateCompanyRow('itIms', config.ssEmpresa?.itIms, breakdown.costeEmpresa.cuotas.itIms);
        updateCompanyRow('total', null, breakdown.costeEmpresa.cuotas.total);
      }else{
        refs.companyDetails.container.style.display = 'none';
      }

      payrollResults[def.key] = {
        key: def.key,
        nombre: def.nombre,
        titular: def.titular,
        breakdown,
        config: nextStateCfg,
        month: monthData
      };
      schedulePayrollBroadcast();
    }

    function updateConcept(target, concept){
      if(!target) return;
      if(target.unidades) target.unidades.textContent = concept.unidades;
      if(target.importe) target.importe.textContent = `${payrollLib.formatEUR(concept.importeDiario)}/día`;
      if(target.devengado) target.devengado.textContent = payrollLib.formatEUR(concept.devengado);
    }

    function updateWorkerRow(name, rate, cuota){
      const row = refs.workerDetails.rows[name];
      if(!row) return;
      if(row.rate) row.rate.textContent = rate != null ? formatPercent(rate) : '';
      if(row.cuota) row.cuota.textContent = payrollLib.formatEUR(cuota || 0);
    }

    function updateCompanyRow(name, rate, cuota){
      const row = refs.companyDetails.rows[name];
      if(!row) return;
      if(row.rate) row.rate.textContent = rate != null ? formatPercent(rate) : '';
      if(row.cuota) row.cuota.textContent = payrollLib.formatEUR(cuota || 0);
    }

    Object.values(fields).forEach(input => {
      input?.addEventListener('input', () => render(resolveMonth()));
    });
    prorrataCheckbox.addEventListener('change', () => render(resolveMonth()));

    return {
      element: section,
      render
    };
  }

  function formatPercent(value){
    const number = Number(value) || 0;
    return payrollLib.round2(number).toFixed(2).replace('.', ',') + ' %';
  }

  function formatMonthValue(year, monthIndex){
    return `${year}-${String(monthIndex + 1).padStart(2, '0')}`;
  }

  function capitalize(text){
    if(!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
})();

</script>
  </div>

  <div class="mbs-suite-panel" data-panel="evolucion" id="panel-evolucion" role="tabpanel" aria-labelledby="tab-evolucion" aria-hidden="true">
    <div class="mbs-card mbs-card-rail" style="margin-top:1.2rem">
      <h3 class="mbs-h3" style="margin-bottom:.35rem">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 3v18h18"/>
          <path d="M7 14l4-4 3 3 5-7"/>
        </svg>
        Evolución del centro
      </h3>
      <p class="mbs-help" style="margin:0 0 1.2rem 0">Guarda periodos desde el primer widget, sube CSVs puntuales o compara rangos personalizados para seguir la evolución del centro.</p>

      <div class="mbs-evo-controls">
        <div class="mbs-evo-compare">
          <div class="mbs-evo-compare-head">
            <h4 class="mbs-h4" style="margin-top:0">Comparador de periodos</h4>
            <p class="mbs-help">Elige rangos personalizados para contrastar la evolución como en Google Ads.</p>
          </div>
          <div class="mbs-evo-compare-ranges">
            <div class="mbs-evo-range">
              <span class="mbs-evo-range-label">Periodo principal</span>
              <div class="mbs-evo-range-inputs">
                <label>Desde
                  <input type="date" class="mbs-input" data-evo-primary-start>
                </label>
                <label>Hasta
                  <input type="date" class="mbs-input" data-evo-primary-end>
                </label>
              </div>
              <div class="mbs-evo-range-meta" data-evo-primary-label></div>
            </div>
            <div class="mbs-evo-range is-secondary">
              <label class="mbs-evo-compare-toggle">
                <input type="checkbox" data-evo-compare-toggle>
                <span>Comparar con otro periodo</span>
              </label>
              <div class="mbs-evo-range-inputs" data-evo-compare-inputs hidden>
                <label>Desde
                  <input type="date" class="mbs-input" data-evo-secondary-start>
                </label>
                <label>Hasta
                  <input type="date" class="mbs-input" data-evo-secondary-end>
                </label>
              </div>
              <div class="mbs-evo-range-meta" data-evo-secondary-label></div>
            </div>
          </div>
          <div class="mbs-evo-compare-actions">
            <button type="button" class="mbs-btn primary" data-evo-apply>Actualizar comparativa</button>
          </div>
          <div class="mbs-evo-compare-summary" data-evo-compare-summary hidden>
            <div class="mbs-evo-compare-metric" data-metric="revenue">
              <span class="mbs-evo-metric-label">Facturación total</span>
              <div class="mbs-evo-metric-values">
                <strong data-evo-primary-value="revenue">0,00&nbsp;€</strong>
                <span data-evo-secondary-value="revenue"></span>
              </div>
              <div class="mbs-evo-metric-diff" data-evo-diff="revenue"></div>
            </div>
            <div class="mbs-evo-compare-metric" data-metric="privados">
              <span class="mbs-evo-metric-label">Ingresos privados</span>
              <div class="mbs-evo-metric-values">
                <strong data-evo-primary-value="privados">0,00&nbsp;€</strong>
                <span data-evo-secondary-value="privados"></span>
              </div>
              <div class="mbs-evo-metric-diff" data-evo-diff="privados"></div>
            </div>
            <div class="mbs-evo-compare-metric" data-metric="count">
              <span class="mbs-evo-metric-label">Citas contabilizadas</span>
              <div class="mbs-evo-metric-values">
                <strong data-evo-primary-value="count">0</strong>
                <span data-evo-secondary-value="count"></span>
              </div>
              <div class="mbs-evo-metric-diff" data-evo-diff="count"></div>
            </div>
          </div>
        </div>
        <div class="mbs-evo-manage">
          <div class="mbs-evo-manage-block">
            <h4 class="mbs-h4" style="margin-top:0">Periodos guardados</h4>
            <select data-evo-saved multiple size="6" class="mbs-select" aria-label="Seleccionar periodos guardados"></select>
            <div class="mbs-help">Selecciona hasta 6 periodos guardados desde el widget de resumen. Pulsa <b>Ctrl/Cmd</b> para seleccionar varios.</div>
            <button type="button" class="mbs-btn" data-evo-delete>Eliminar seleccionado</button>
          </div>
          <div class="mbs-evo-manage-block">
            <h4 class="mbs-h4" style="margin-top:0">Añadir periodos desde CSV</h4>
            <input type="file" accept=".csv,text/csv" data-evo-upload class="mbs-input" aria-label="Subir CSV para evolución" multiple>
            <div class="mbs-help">El mismo formato de Clinic Cloud Caja. Los archivos añadidos solo viven en esta sesión.</div>
          </div>
          <div class="mbs-evo-manage-block">
            <h4 class="mbs-h4" style="margin-top:0">Comparativa activa</h4>
            <div class="mbs-evo-active" data-evo-active></div>
            <button type="button" class="mbs-btn" data-evo-clear>Limpiar comparativa</button>
          </div>
        </div>
      </div>

      <div class="mbs-evo-empty" data-evo-empty>
        Selecciona al menos un periodo guardado, importa un CSV o aplica el comparador para generar los gráficos de evolución.
      </div>

      <div class="mbs-evo-kpis" data-evo-kpis style="display:none">
        <div class="mbs-evo-kpi" data-kpi="total">
          <span class="mbs-evo-kpi-label">Facturación combinada</span>
          <span class="mbs-evo-kpi-value" data-evo-kpi-value="total">0,00&nbsp;€</span>
          <span class="mbs-evo-kpi-hint" data-evo-kpi-hint="total"></span>
        </div>
        <div class="mbs-evo-kpi" data-kpi="average">
          <span class="mbs-evo-kpi-label">Ticket medio por periodo</span>
          <span class="mbs-evo-kpi-value" data-evo-kpi-value="average">0,00&nbsp;€</span>
          <span class="mbs-evo-kpi-hint" data-evo-kpi-hint="average"></span>
        </div>
        <div class="mbs-evo-kpi" data-kpi="trend" data-trend="flat">
          <span class="mbs-evo-kpi-label">Crecimiento acumulado</span>
          <span class="mbs-evo-kpi-value" data-evo-kpi-value="trend">0&nbsp;%</span>
          <span class="mbs-evo-kpi-hint" data-evo-kpi-hint="trend"></span>
        </div>
        <div class="mbs-evo-kpi" data-kpi="best">
          <span class="mbs-evo-kpi-label">Periodo destacado</span>
          <span class="mbs-evo-kpi-value" data-evo-kpi-value="best">—</span>
          <span class="mbs-evo-kpi-hint" data-evo-kpi-hint="best"><span data-evo-kpi-text="best"></span><span class="badge" data-evo-kpi-badge="best">0,00&nbsp;€</span></span>
        </div>
      </div>

      <div class="mbs-chartgrid" data-evo-charts style="display:none">
        <div class="mbs-chartwrap">
          <div class="mbs-charthead">
            <div class="mbs-charttitle">
              <h5>Índice base 100 por periodo</h5>
              <span class="mbs-chartnote" data-evo-note="base">Normaliza cada métrica al primer periodo seleccionado (100).</span>
            </div>
            <div class="mbs-chartactions" aria-label="Opciones índice base 100">
              <button type="button" class="mbs-chartbtn" data-evo-download="base">PNG</button>
            </div>
          </div>
          <div class="chart-area">
            <canvas id="evoChartBase"></canvas>
          </div>
        </div>

        <div class="mbs-chartwrap">
          <div class="mbs-charthead">
            <div class="mbs-charttitle">
              <h5>Mix mensual por tipo de ingreso</h5>
              <span class="mbs-chartnote" data-evo-note="mix">Stacked bars: primeras, sucesivas, otros y seguros.</span>
            </div>
            <div class="mbs-chartactions" aria-label="Opciones mix mensual">
              <button type="button" class="mbs-chartbtn" data-evo-download="mix">PNG</button>
            </div>
          </div>
          <div class="chart-area">
            <canvas id="evoChartMix"></canvas>
          </div>
        </div>

        <div class="mbs-chartwrap">
          <div class="mbs-charthead">
            <div class="mbs-charttitle">
              <h5>Variación frente al periodo anterior</h5>
              <span class="mbs-chartnote" data-evo-note="delta">Diferencia absoluta de facturación (€) por periodo.</span>
            </div>
            <div class="mbs-chartactions" aria-label="Opciones variación mensual">
              <button type="button" class="mbs-chartbtn" data-evo-download="delta">PNG</button>
            </div>
          </div>
          <div class="chart-area">
            <canvas id="evoChartDelta"></canvas>
          </div>
        </div>

        <div class="mbs-chartwrap">
          <div class="mbs-charthead">
            <div class="mbs-charttitle">
              <h5>Facturación por especialista</h5>
              <span class="mbs-chartnote" data-evo-note="specialists">Top especialistas comparados por periodo seleccionado.</span>
            </div>
            <div class="mbs-chartactions" aria-label="Opciones facturación por especialista">
              <button type="button" class="mbs-chartbtn" data-evo-download="specialists">PNG</button>
            </div>
          </div>
          <div class="chart-area">
            <canvas id="evoChartSpecialists"></canvas>
          </div>
        </div>

        <div class="mbs-chartwrap">
          <div class="mbs-charthead">
            <div class="mbs-charttitle">
              <h5>Bonos vendidos por especialista</h5>
              <span class="mbs-chartnote" data-evo-note="bonos">Importe y volumen de bonos asociados a cada especialista.</span>
            </div>
            <div class="mbs-chartactions" aria-label="Opciones bonos por especialista">
              <button type="button" class="mbs-chartbtn" data-evo-download="bonos">PNG</button>
            </div>
          </div>
          <div class="chart-area">
            <canvas id="evoChartBonos"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mbs-suite-panel" data-panel="ocupacion" id="panel-ocupacion" role="tabpanel" aria-labelledby="tab-ocupacion" aria-hidden="true">
    <div class="mbs-occupancy-widget" data-occupancy>
      <div class="mbs-occupancy-head">
        <h3 class="mbs-h3" style="margin-bottom:.1rem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 9.5L12 4l9 5.5v9.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19V9.5z" />
            <path d="M9 21V12h6v9" />
          </svg>
          Ocupación de salas
        </h3>
        <p>Gestiona visualmente el uso de las siete salas del centro. Ajusta las horas ocupadas y la capacidad diaria para detectar cuellos de botella o disponibilidad inmediata.</p>
      </div>

      <div class="mbs-occupancy-summary" data-occupancy-summary>
        <div class="mbs-occupancy-summary-card">
          <span>Ocupación media</span>
          <strong data-occupancy-avg>0&nbsp;%</strong>
          <span class="mbs-occupancy-note" data-occupancy-avg-note></span>
        </div>
        <div class="mbs-occupancy-summary-card">
          <span>Salas activas</span>
          <strong data-occupancy-active>0</strong>
          <span class="mbs-occupancy-note" data-occupancy-active-note></span>
        </div>
        <div class="mbs-occupancy-summary-card">
          <span>Salas al 100%</span>
          <strong data-occupancy-full>0</strong>
          <span class="mbs-occupancy-note" data-occupancy-full-note></span>
        </div>
        <div class="mbs-occupancy-summary-card">
          <span>Huecos libres</span>
          <strong data-occupancy-free>0</strong>
          <span class="mbs-occupancy-note" data-occupancy-free-note></span>
        </div>
      </div>

      <div class="mbs-occupancy-layout">
        <div class="mbs-occupancy-grid" data-occupancy-grid></div>
      </div>
      <div class="mbs-occupancy-footer">
        <div class="mbs-occupancy-actions">
          <button type="button" class="mbs-btn" data-occupancy-reset>Reiniciar valores</button>
          <button type="button" class="mbs-btn primary" data-occupancy-fill>Marcar todas llenas</button>
        </div>
        <div class="mbs-occupancy-legend">
          <span data-density="low">Hasta 50&nbsp;%</span>
          <span data-density="mid">51&nbsp;% – 80&nbsp;%</span>
          <span data-density="high">81&nbsp;% – 95&nbsp;%</span>
          <span data-density="full">100&nbsp;% ocupada</span>
          <span data-density="off">Fuera de servicio</span>
        </div>
        <p class="mbs-occupancy-note" style="margin-top:.2rem;">Los ajustes se guardan en este navegador para que puedas actualizar la ocupación a lo largo del día.</p>
        <div class="mbs-occupancy-schedule" data-occupancy-schedule>
          <h4 class="mbs-h4" style="margin-bottom:.4rem;">Agenda base</h4>
          <div class="mbs-occupancy-schedule-grid">
            <label>Sesiones por día completo
              <input type="number" min="1" step="1" value="2" class="mbs-input" data-occupancy-sessions>
            </label>
            <label>Horas por sesión
              <input type="number" min="0.25" step="0.25" value="4" class="mbs-input" data-occupancy-session-hours>
            </label>
          </div>
          <div class="mbs-occupancy-days">
            <span>Turnos activos</span>
            <div class="mbs-occupancy-daylist">
              <div class="mbs-occupancy-dayrow" data-day-row="mon">
                <button type="button" class="mbs-daytoggle" data-occupancy-day-toggle="mon" aria-pressed="false" title="Activar o desactivar Lunes">L</button>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="mon" value="am">Mañana</label>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="mon" value="pm">Tarde</label>
              </div>
              <div class="mbs-occupancy-dayrow" data-day-row="tue">
                <button type="button" class="mbs-daytoggle" data-occupancy-day-toggle="tue" aria-pressed="false" title="Activar o desactivar Martes">M</button>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="tue" value="am">Mañana</label>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="tue" value="pm">Tarde</label>
              </div>
              <div class="mbs-occupancy-dayrow" data-day-row="wed">
                <button type="button" class="mbs-daytoggle" data-occupancy-day-toggle="wed" aria-pressed="false" title="Activar o desactivar Miércoles">X</button>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="wed" value="am">Mañana</label>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="wed" value="pm">Tarde</label>
              </div>
              <div class="mbs-occupancy-dayrow" data-day-row="thu">
                <button type="button" class="mbs-daytoggle" data-occupancy-day-toggle="thu" aria-pressed="false" title="Activar o desactivar Jueves">J</button>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="thu" value="am">Mañana</label>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="thu" value="pm">Tarde</label>
              </div>
              <div class="mbs-occupancy-dayrow" data-day-row="fri">
                <button type="button" class="mbs-daytoggle" data-occupancy-day-toggle="fri" aria-pressed="false" title="Activar o desactivar Viernes">V</button>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="fri" value="am">Mañana</label>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="fri" value="pm">Tarde</label>
              </div>
              <div class="mbs-occupancy-dayrow" data-day-row="sat">
                <button type="button" class="mbs-daytoggle" data-occupancy-day-toggle="sat" aria-pressed="false" title="Activar o desactivar Sábado">S</button>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="sat" value="am">Mañana</label>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="sat" value="pm">Tarde</label>
              </div>
              <div class="mbs-occupancy-dayrow" data-day-row="sun">
                <button type="button" class="mbs-daytoggle" data-occupancy-day-toggle="sun" aria-pressed="false" title="Activar o desactivar Domingo">D</button>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="sun" value="am">Mañana</label>
                <label class="mbs-occupancy-shift"><input type="checkbox" data-occupancy-period data-day="sun" value="pm">Tarde</label>
              </div>
            </div>
          </div>
          <p class="mbs-occupancy-note" data-occupancy-schedule-note style="margin:.4rem 0 .6rem;">Configura la agenda semanal para ajustar la capacidad total y los turnos activos.</p>
          <button type="button" class="mbs-btn" data-occupancy-apply-schedule>Ajustar capacidad diaria</button>
        </div>
      </div>
      <div class="mbs-room-editor-backdrop" data-room-editor-backdrop aria-hidden="true"></div>
      <div class="mbs-room-editor" data-room-editor aria-hidden="true"></div>
    </div>
  </div>
</div>
