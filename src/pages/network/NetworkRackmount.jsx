const intro1 = `AAEON’s Rackmount Network Appliances come with enterprise-grade 1U and 2U rackmounts along with a diverse selection of processors. Designed for scalability and flexible configurations, the appliances are secure and reliable systems that will consolidate demanding network applications. All Rackmount Network Appliances come with various combinations of Ethernet modules, including GbE and SFP Fiber LAN, PCI-E Bus expansion slots, and LCM with keypad control.`;
const intro2 = `Built to streamline security management in unmanned and harsh environments, all Appliances provide secure deployment for mission-critical frameworks and are designed to supplement existing network platforms in industrial environments with minimal configuration.`;

const rawItems = [
  { title: 'FWS-7370 | Rackmount Network Appliance', model: 'FWS-7370', sub: 'FWS-7370 | Network Appliance with Intel Atom® Processor P5300 Series' },
  { title: 'FWS-7850 | 1U Rackmount Network Appliance', model: 'FWS-7850', sub: 'FWS-7850 | 1U Rackmount Network Appliance with 12th/13th Generation Intel® Core™ Processors' },
  { title: '1U Rackmount Network Appliance with 12th/13th Generation Intel® Core™ Processors', model: 'FWS-7851', sub: '1U Rackmount Network Appliance with 12th/13th Generation Intel® Core™ Processors' },
  { title: 'FWS-7541', model: 'FWS-7541', sub: 'FWS-7541 | 1U Rackmount Network Appliance with Intel® Xeon® D-1700 & D-1800 Processors' },
  { title: '1U Rackmount Comet Lake Platform Network Appliance', model: 'FWS-7840', sub: '1U Rackmount Comet Lake Platform Network Appliance' },
  { title: '2U Rackmount Network Appliance with Dual 2nd Gen Intel® Xeon® Scalable Processors', model: 'FWS-8600', sub: 'FWS-8600 | 2U Rackmount Network Appliance with Dual 2nd Gen Intel® Xeon® Scalable Processors' },
  { title: '1U Rackmount Intel® 8th Generation Platform Network Appliance | Robustrix FWS-7831', model: 'FWS-7831', sub: '1U Rackmount Intel® 8th Generation Platform Network Appliance | Robustrix FWS-7831' },
  { title: 'FWS-7830 | 1U Rackmount Intel® 8th Generation Platform Network Appliance', model: 'FWS-7830', sub: 'FWS-7830 | 1U Rackmount Intel® 8th Generation Platform Network Appliance' },
  { title: '1U Rackmount 7 LAN Network Appliance', model: 'FWS-7360', sub: '1U Rackmount 7 LAN Network Appliance with Intel® Atom™ C3758 SoC Processor' },
];

export default function NetworkRackmount() {
  const items = rawItems.map((it, idx) => ({
    ...it,
    modelView: it.model.replace(/^FWS/gi, 'ROBO'),
    image: `https://source.unsplash.com/600x340/?rackmount,network,appliance&sig=${idx}`,
  }));
  function onImgError(e) {
    e.currentTarget.src = '/products/networksolutions.png';
  }
  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title ai-blue">Rackmount Network Appliance</h1>
          <p className="ai-sub">{intro1}</p>
          <p className="ai-sub">{intro2}</p>
        </div>
      </section>
      <section className="container section-spacing">
        <div className="ai-grid">
          {items.map(it => (
            <article key={it.model} className="card ai-card">
              <div className="ai-thumb">
                <img src={it.image} alt={it.title} loading="lazy" decoding="async" onError={onImgError} referrerPolicy="no-referrer" />
              </div>
              <div className="ai-card-body">
                <h3 className="ai-card-title">{it.title}</h3>
                <p className="ai-card-sub">{it.sub}</p>
                <p className="ai-card-model">{it.modelView}</p>
              </div>
              <div className="ai-card-actions">
                <a href="#" className="btn btn-primary">Details</a>
                <a href="#" className="btn btn-outline">Datasheet</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .ai-blue { color: var(--color-brand-primary); }
        .ai-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 1023px) { .ai-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 719px) { .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; height: 150px; display: grid; place-items: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06); overflow: hidden; }
        .ai-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .ai-card-title { font-weight: 800; }
        .ai-card-sub { color: var(--color-ink-600, #3d4656); }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `}</style>
    </main>
  );
}


