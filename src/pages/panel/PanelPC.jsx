export default function PanelPC() {
  function onImgError(e) { e.currentTarget.src = '/products/panelpc.png'; }

  const aoiList = [
    { t: '10” WXGA Multi Touch Panel PC With Intel® Processor N-series Processors', m: 'ACP-2106' },
    { t: '7” WSVGA Multi Touch Panel PC With Intel® Processor N-series Processors', m: 'ACP-2076' },
    { t: '7” WSVGA Android Based Panel PC with Rockchip™ RK3568', m: 'ACP-1078' },
    { t: '10.1” WXGA Android Based Panel PC with Rockchip™ RK3568', m: 'ACP-1108' },
    { t: '7” WSVGA Open-frame Panel PC with PICO-APL3', m: 'ACP-1075' },
    { t: '10.1” WXGA Multi-Touch Panel PC With Intel® Pentium® N4200/ Celeron® N3350 Processor, 4 GB RAM', m: 'ACP-1106' },
    { t: '7” WSVGA Multi-Touch Panel PC With Intel® Pentium® N4200/ Celeron® N3350 Processor, 4 GB RAM', m: 'ACP-1076' },
    { t: '7” WSVGA Ultra-slim Fanless Multi Touch Panel PC with Intel® Celeron® J1900/ N2807 Processor, 2GB RAM', m: 'ACP-1074' },
    { t: '10.1” WXGA Ultra-slim Fanless Multi Touch Panel PC With Intel® Celeron® J1900/ N2807 Processor, 2GB RAM', m: 'ACP-1104' },
  ].map((it, idx) => ({ ...it, mv: it.m.replace(/^ACP/gi, 'ROBO'), img: `https://source.unsplash.com/640x360/?panel,pc,touch&sig=${idx}` }));

  const omniList1 = [
    { t: '21.5” Modular HMI Panel PC With Intel® Processor N-series Processors', m: 'OMNI-2215-ADN' },
    { t: '15.6” Modular HMI Panel PC With Intel® Processor N-series Processors', m: 'OMNI-2155-ADN' },
    { t: '15” Modular HMI Panel PC With Intel® Processor N-series Processors', m: 'OMNI-3155-ADN' },
    { t: '12.1” Modular HMI Panel PC With Intel® Processor N-series Processors', m: 'OMNI-3125-ADN' },
    { t: '10.4” Modular HMI Panel PC With Intel® Processor N-series Processors', m: 'OMNI-3105-ADN' },
    { t: 'OMNI Series Panel PC with Intel® Processor N-series Processors', m: 'OMNI-ADN_CPU-BOX_KIT' },
  ];
  const omniList2 = [
    { t: '27” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors', m: 'OMNI-2275-ADP' },
    { t: '23.8” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors', m: 'OMNI-2245-ADP' },
    { t: '21.5” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors', m: 'OMNI-2215-ADP' },
    { t: '15.6” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors', m: 'OMNI-2155-ADP' },
    { t: '19” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors', m: 'OMNI-3195-ADP' },
    { t: '17” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors', m: 'OMNI-3175-ADP' },
    { t: '15” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors', m: 'OMNI-3155-ADP' },
    { t: '12.1” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors', m: 'OMNI-3125-ADP' },
    { t: '10.4” Modular HMI Panel PC with 12th Generation Intel® Core™/Celeron® Processors', m: 'OMNI-3105-ADP' },
    { t: 'OMNI Series Panel PC with 12th Generation Intel® Core™/Celeron® Processors', m: 'OMNI-ADP CPU-BOX KIT' },
  ];
  const omniDisplays = [
    { t: '21.5” Touch Display, DC 12~30V', m: 'OMNI-221M' },
    { t: '15.6” Touch Display, DC 12~30V', m: 'OMNI-215M' },
    { t: '19” Touch Display, DC 12~30V', m: 'OMNI-319M' },
    { t: '17” Touch Display, DC 12~30V', m: 'OMNI-317M' },
    { t: '15” Touch Display, DC 12~30V', m: 'OMNI-315M' },
    { t: '12.1” Touch Display, DC 12~30V', m: 'OMNI-312M' },
    { t: '10.4” Touch Display, DC 12~30V', m: 'OMNI-310M' },
    { t: 'Display BOX Kit, DC 12~30V', m: 'OMNI MODULES- DISPLAY BOX KIT' },
    { t: 'OMNI Series Modules- CPU BOX Kit', m: 'OMNI SERIES MODULES- CPU BOX KIT' },
    { t: 'OMNI Series Modules- Panels', m: 'OMNI SERIES MODULES- PANELS' },
    { t: 'OMNI Series Modules- I/O Modules', m: 'OMNI SERIES MODULES- I/O MODULES' },
  ];
  const omniLegacy = [
    { t: '21.5” Modular HMI Panel PC with Intel® Skylake-U i5-6300U/C-3955U Processor', m: 'OMNI-2215-SKU' },
    { t: '19” Modular HMI Panel PC with Intel® Skylake-U i5-6300U/C-3955U Processor', m: 'OMNI-3195-SKU' },
    { t: '17” Modular HMI Panel PC with Intel® Skylake-U i5-6300U/C-3955U Processor', m: 'OMNI-3175-SKU' },
    { t: '15” Modular HMI Panel PC with Intel® Skylake-U i5-6300U/C-3955U Processor', m: 'OMNI-3155-SKU' },
    { t: '12.1” Modular HMI Panel PC with Intel® Skylake-U i5-6300U/C-3955U Processor', m: 'OMNI-3125-SKU' },
    { t: '15.6” Modular HMI Panel PC with Intel® Celeron® J1900/ N2807 Processor', m: 'OMNI-2155-BT' },
    { t: '19” Modular HMI Panel PC with Intel® Celeron® J1900/ N2807 Processor', m: 'OMNI-3195-BT' },
    { t: '15” Modular HMI Panel PC with Intel® Celeron® J1900/ N2807 Processor', m: 'OMNI-3155-BT' },
    { t: '12.1” Modular HMI Panel PC with Intel® Celeron® J1900/ N2807 Processor', m: 'OMNI-3125-BT' },
    { t: '10.4” Modular HMI Panel PC with Intel® Celeron® J1900/ N2807 Processor', m: 'OMNI-3105-BT' },
  ];
  const omniAll = [...omniList1, ...omniList2, ...omniDisplays, ...omniLegacy]
    .map((it, idx) => ({ ...it, mv: it.m.replace(/^OMNI/gi, 'ROBO'), img: `https://source.unsplash.com/640x360/?hmi,panel,pc&sig=${idx}` }));

  const aiPanelList = [
    { t: '15.6”Full HD 1920 x 1080 AI Panel PC with NVIDIA® Jetson Orin™ NX', m: 'NIKY-2155-NX' },
  ].map((it, idx) => ({ ...it, mv: it.m.replace(/^NIKY/gi, 'ROBO'), img: `https://source.unsplash.com/640x360/?ai,panel,pc&sig=${idx}` }));

  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title">Panel PC</h1>
        </div>
      </section>

      <section className="container section-spacing">
        <h2 className="h2">All in One Panel PC</h2>
        <p className="ai-sub">
          AAEON's All in One Panel PCs are designed to seamlessly integrate into various industrial environments, offering a robust and versatile solution across energy, manufacturing, healthcare, and transportation sectors. IP65-rated aluminum front panel and latest Intel CPUs provide durability and performance with dynamic I/O options for connectivity and expandability.
        </p>
        <div className="ai-grid">
          {aoiList.map((it, idx) => (
            <article className="card ai-card" key={`aoi-${idx}`}>
              <div className="ai-thumb"><img src={it.img} alt={it.t} onError={onImgError} loading="lazy" decoding="async" /></div>
              <div className="ai-card-body">
                <h3 className="ai-card-title">{it.t}</h3>
                <p className="ai-card-model">{it.mv}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-spacing">
        <h2 className="h2">Modular HMI Panel PC / Display</h2>
        <p className="ai-sub">
          AAEON's Modular HMI Panel PCs, the OMNI series, are notable for modular design allowing integration of numerous modules to enhance capabilities. This adaptability ensures businesses can customize solutions to specific operational needs.
        </p>
        <div className="ai-grid">
          {omniAll.map((it, idx) => (
            <article className="card ai-card" key={`omni-${idx}`}>
              <div className="ai-thumb"><img src={it.img} alt={it.t} onError={onImgError} loading="lazy" decoding="async" /></div>
              <div className="ai-card-body">
                <h3 className="ai-card-title">{it.t}</h3>
                <p className="ai-card-model">{it.mv}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-spacing">
        <h2 className="h2">AI Panel PC Solutions</h2>
        <div className="ai-grid">
          {aiPanelList.map((it, idx) => (
            <article className="card ai-card" key={`ai-${idx}`}>
              <div className="ai-thumb"><img src={it.img} alt={it.t} onError={onImgError} loading="lazy" decoding="async" /></div>
              <div className="ai-card-body">
                <h3 className="ai-card-title">{it.t}</h3>
                <p className="ai-card-model">{it.mv}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .ai-hero { background: linear-gradient(180deg,#f4f7ff,#fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px,6vw,48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .ai-sub { margin-top: 10px; color: var(--color-ink-600,#3d4656); max-width: 920px; }
        .ai-grid { display: grid; gap: 16px; grid-template-columns: repeat(3,1fr); }
        @media (max-width:1023px){ .ai-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width:719px){ .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; height: 160px; display: grid; place-items: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); overflow: hidden; }
        .ai-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .ai-card-title { font-weight: 800; }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `}</style>
    </main>
  );
}






