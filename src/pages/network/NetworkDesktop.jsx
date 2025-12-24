const rawItems = [
  { title: 'FWS-2292 | Intel® Processor N-series', model: 'FWS-2292', sub: 'FWS-2292 | Network Appliance with Intel® Processor N-series' },
  { title: 'FWS-2291 | Intel® Alder lake N / Amston lake', model: 'FWS-2291', sub: 'FWS-2291 | Network Appliance with Intel® Alder lake N / Amston lake SoC Processor' },
  { title: 'FWS-2370 | Intel Atom® Processor C Series', model: 'FWS-2370', sub: 'Network Appliance with Intel Atom® Processor C Series/Intel Atom® Processor P Series' },
  { title: 'FWS-2290 | Intel® Processor N-series SoC', model: 'FWS-2290', sub: 'FWS-2290 | Network Appliance with Intel® Processor N-series' },
  { title: 'Desktop Network Appliance with Intel Apollo Lake', model: 'FWS-2277', sub: 'Compact Desktop Network Appliance with Intel® Apollo Lake Processor | Robustrix FWS-2277' },
  { title: 'Intel Elkhart lake Desktop Network Appliance', model: 'FWS-2280', sub: 'Flexiwan Certified | Intel Elkhart lake | Desktop Network Appliance with Atom x6000E | FWS-2280 | SD-WAN suitable' },
  { title: 'FWS-2365 | Desktop Network Appliance', model: 'FWS-2365', sub: 'FlexiWan certified | Desktop Network Appliance with Intel® Atom® Processor C3000 series | Robustrix SD-WAN FWS-2365' },
  { title: 'Desktop 3 LAN Ports Network Appliance', model: 'FWS-2275', sub: 'FWS-2275 | Desktop 3 LAN Ports Network Appliance with Intel Celeron Processor N3350' },
  { title: 'Desktop 4 LAN Ports Network Appliance', model: 'FWS-2276', sub: 'Desktop 4 LAN Ports Network Appliance with Intel® Celeron® Processor N3350' },
  { title: 'Desktop Network Appliance with Intel® Atom™ Proc', model: 'FWS-2360', sub: 'FWS-2360 - Network Appliances' },
  { title: 'Desktop 6 LAN Ports Network Appliance with Intel', model: 'FWS-2273', sub: 'Desktop 6 LAN Ports Network Appliance with Intel® Celeron® N3350 | FWS-2273' },
  { title: 'Desktop 4 LAN Ports Network Appliance with Intel', model: 'FWS-2272', sub: 'FWS-2272, Desktop Network Security Appliance' },
  { title: 'Desktop 6 LAN Ports Network Appliance Intel® Ato', model: 'FWS-2271', sub: 'FWS-2271 - Network Appliances' },
];

export default function NetworkDesktop() {
  const items = rawItems.map((it, idx) => ({
    ...it,
    modelView: it.model.replace(/^FWS/gi, 'ROBO'),
    image: `https://source.unsplash.com/600x340/?network,desktop,appliance&sig=${idx}`,
  }));
  function onImgError(e) {
    e.currentTarget.src = '/products/networksolutions.png';
  }
  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title ai-blue">Desktop Network Appliance</h1>
          <p className="ai-sub">x86 platforms from Intel® Atom™ to Intel® Xeon in compact desktop chassis, ideal for SD-WAN, NGFW, and UTM.</p>
        </div>
      </section>
      <section className="container section-spacing">
        <div className="ai-grid">
          {items.map(it => (
            <article key={it.model} className="card ai-card">
              <div className="ai-thumb">
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={onImgError}
                />
              </div>
              <div className="ai-card-body">
                <h3 className="ai-card-title">{it.title}</h3>
                <p className="ai-card-sub">{it.sub}</p>
                <p className="ai-card-model">{it.modelView}</p>
              </div>
              <div className="ai-card-actions">
                <a href="#" className="btn btn-primary">Details</a>
                <a href="https://drive.google.com/file/d/1V2lWp_aqRs0okhO3mNIL0uzBgqL3GxUZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Datasheet</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .ai-blue { color: var(--color-brand-primary); }
        .ai-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 1023px) {
          .ai-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 719px) {
          .ai-grid { grid-template-columns: 1fr; }
        }
        .ai-thumb {
          width: 100%;
          height: 150px;
          display: grid;
          place-items: center;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
          overflow: hidden;
        }
        .ai-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .ai-card-title { font-weight: 800; }
        .ai-card-sub { color: var(--color-ink-600, #3d4656); }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `}</style>
    </main>
  );
}


