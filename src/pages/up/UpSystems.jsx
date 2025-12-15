export default function UpSystems() {
  function onImgError(e) { e.currentTarget.src = '/products/upboards.png'; }
  const items = [
    { t: 'UP Edge Industrial Computer', m: 'UP Edge System Product Line - Industrial Computer' },
    { t: 'UP Xtreme ARL Edge | Arrow Lake IPC with 97 TOPS', m: 'UP XTREME ARL EDGE' },
    { t: 'UP Xtreme ARL Edge | Industrial AI Edge System with Intel® Core™ Ultra 5/7 Processors', m: '' },
    { t: 'Intelli i14 Edge | Rugged AI Edge Computer with Intel® Core™ i9 & NVIDIA RTX™ MXM', m: 'INTELLI I14 EDGE' },
    { t: 'UP Squared Pro TWL Edge | AI-Ready Industrial System with Intel® N-series', m: 'UP SQUARED PRO TWL EDGE' },
    { t: 'UP Squared TWL Edge | AI-Ready System with Intel® N-series & Triple 4K Display', m: 'UP SQUARED TWL EDGE' },
    { t: 'UP TWLS Edge | Slim System with Wi-Fi, RS-232/422/485 & Intel® N-series SoC', m: 'UP TWLS EDGE' },
    { t: 'UP TWL Edge | Compact System with GPIO & Intel® Processor N-series for Edge IoT', m: 'UP TWL EDGE' },
    { t: 'UP Xtreme 7100 Edge | Fanless system powered by Intel® Processor N-series & Intel® Core™ i3-N305 Processor', m: 'UP XTREME 7100 EDGE' },
    { t: 'UP Xtreme i14 Edge | Industrial Mini AI PC with Intel® Core™ Ultra Processor', m: 'UP XTREME I14 EDGE' },
    { t: 'UP Xtreme i12 Edge | AI-ready system with 12th Gen Intel Core', m: 'UP XTREME I12 EDGE' },
    { t: 'UP Xtreme EDGE i11 Computing System', m: 'UP XTREME I11 EDGE' },
    { t: 'UP Squared Pro 710H Edge | Intel AI solution with Hailo module', m: 'UP SQUARED PRO 710H EDGE' },
    { t: 'UP Squared Pro 7000 Edge | Intel Atom® x7000E Series, Intel® Processor N-series, and Intel® Core™ i3-N305 Processor', m: 'UP SQUARED PRO 7000 EDGE' },
    { t: 'UPN-Edge Pro | UP Squared Pro Edge System with Intel® Pentium® N4200/ Celeron® N3350/ Atom™ E3950 Processor SoC', m: 'UPN-EDGE PRO' },
    { t: 'UP Squared 7100 Edge | Industrial Computer with Intel® Processor N-series SoC', m: 'UP SQUARED 7100 EDGE' },
    { t: 'UP Squared i12 Edge | UP system with 12th generation Intel® Core™ i7/i5/i3/Celeron® Processor SoC (Alder Lake-P)', m: 'UP SQUARED I12 EDGE' },
    { t: 'UP Squared V2 System with Intel® Pentium® Celeron® Processor SoC', m: 'UP SQUARED V2 EDGE' },
    { t: 'UPS-GWS01 | Tiny UP Squared IoT Gateway System', m: 'UPS-GWS01' },
    { t: 'UP 710S Edge | Smallest Mini PC with Intel® Processor N-series', m: 'UP 710S EDGE' },
    { t: 'UP 7000 Edge | Compact Alder Lake-N Computing Platform for Edge AI', m: 'UP 7000 EDGE' },
    { t: 'UP 4000 Edge | Compact Apollo Lake Computing Platform for Edge AI & Industrial IoT', m: 'UP 4000 EDGE' },
  ];
  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title">UP Systems</h1>
          <p className="ai-sub">
            All the strength and utility of the UP board range in a compact edge system form. UP systems offer an industrial computer solution that enables users to bring projects to market faster without sacrificing quality.
          </p>
          <p className="ai-sub">
            UP systems ensure the key facets of their board-level counterparts—such as the latest Intel® processors and inference modeling platforms—are easily harnessed via precisely designed hardware, allowing developers to concentrate on implementing their ideas more efficiently.
          </p>
          <p className="ai-sub"><b>Free Edge AI Toolkit</b> — streamline object detection, benchmarking, and model conversion to accelerate your AI projects on UP platforms.</p>
        </div>
      </section>
      <section className="container section-spacing">
        <div className="ai-grid">
          {items.map((it, idx) => (
            <article className="card ai-card" key={`${it.m}-${idx}`}>
              <div className="ai-thumb">
                <img src={`https://source.unsplash.com/640x360/?edge,mini,pc,intel&sig=${idx}`} alt={it.t} onError={onImgError} loading="lazy" decoding="async" />
              </div>
              <div className="ai-card-body">
                <h3 className="ai-card-title">{it.t}</h3>
                {it.m && <p className="ai-card-model">{it.m}</p>}
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






