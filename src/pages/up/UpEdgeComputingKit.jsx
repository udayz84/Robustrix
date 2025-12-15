export default function UpEdgeComputingKit() {
  function onImgError(e) { e.currentTarget.src = '/products/upboards.png'; }
  const intro1 = `Designed to provide a more streamlined development experience for customers, AAEON’s UP Edge Computing Kit range is comprised of Ubuntu certified industrial turnkey solutions geared towards making AI edge deployment more accessible and faster to market.`;
  const intro2 = `Bridging the gap between bespoke and universal, the UP Edge Computing Kit range features plug and play-ready kits which can be deployed across vertical markets. With all products in the range preinstalled with the Intel® OpenVINO™ toolkit, the UP Edge Computing Kit range provides a simplified platform for creativity to take over, making it easier to develop the ideal application for your business.`;
  const items = [
    { t: '11th Generation Intel® Core™ i7/i5 Processor SoC', m: 'UP XTREME I11 EDGE ENABLING KIT' },
    { t: '11th Generation Intel® Core™ i7/i5 Processor SoC (formerly Tiger Lake UP3)', m: 'UP XTREME I11 EDGE ENABLING KIT' },
  ];
  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title">UP Edge Computing Kit</h1>
          <p className="ai-sub">{intro1}</p>
          <p className="ai-sub">{intro2}</p>
        </div>
      </section>
      <section className="container section-spacing">
        <div className="ai-grid">
          {items.map((it, idx) => (
            <article key={`${it.m}-${idx}`} className="card ai-card">
              <div className="ai-thumb">
                <img src={`https://source.unsplash.com/640x360/?edge,kit,intel&sig=${idx}`} alt={it.t} onError={onImgError} loading="lazy" decoding="async" />
              </div>
              <div className="ai-card-body">
                <h3 className="ai-card-title">{it.t}</h3>
                <p className="ai-card-model">{it.m}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <style>{`
        .ai-hero { background: linear-gradient(180deg,#f4f7ff,#fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px,6vw,48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .ai-sub { margin-top: 10px; color: var(--color-ink-600,#3d4656); max-width: 920px; }
        .ai-grid { display: grid; gap: 16px; grid-template-columns: repeat(2,1fr); }
        @media (max-width:719px){ .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; height: 160px; display: grid; place-items: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); overflow: hidden; }
        .ai-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .ai-card-title { font-weight: 800; }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `}</style>
    </main>
  );
}






