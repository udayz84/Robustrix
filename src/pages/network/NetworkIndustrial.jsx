const intro = `Built to protect the integrity and usability of industrial control systems and SCADA, Robustrix's Industrial Cyber Security (ICS) product series PC is designed for industrial resiliency, bringing superior reliability and supercomputing capabilities to harsh environments such as energy, manufacturing, and oil and gas industries. The ICS product series is reinforced by a tough steel casing and an aluminum heatsink to provide maximum thermal control, affording maximum reliability and interoperability within critical infrastructure and spaces. LAN bypass function is also supported, availing the user of a multitude of options such as cybersecurity, PLC protection and firewall management.`;

const items = [
  { title: 'DIN Rail Industrial-Grade Network Appliance with Intel Atom® Processor X Series', model: 'ICS-6280' },
  { title: 'Industrial-Grade Network Appliance', model: 'ICS-6270' },
];

export default function NetworkIndustrial() {
  function onImgError(e) {
    e.currentTarget.src = '/products/networksolutions.png';
  }
  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title ai-blue">Industrial Cyber Security Appliance</h1>
          <p className="ai-sub">{intro}</p>
        </div>
      </section>
      <section className="container section-spacing">
        <div className="ai-grid">
          {items.map((it, idx) => (
            <article key={it.model} className="card ai-card">
              <div className="ai-thumb">
                <img src={`https://source.unsplash.com/600x340/?industrial,security,ics&sig=${idx}`} alt={it.title} onError={onImgError} loading="lazy" decoding="async" />
              </div>
              <div className="ai-card-body">
                <h3 className="ai-card-title">{it.title}</h3>
                <p className="ai-card-model">{it.model}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="impact-grid" style={{marginTop: '18px'}}>
          <article>
            <h4>Applications</h4>
            <ul>
              <li>Industrial Cyber Security</li>
              <li>Critical Infrastructure Protection</li>
              <li>Industrial Control System Security</li>
            </ul>
          </article>
        </div>
      </section>

      <style>{`
        .ai-blue { color: var(--color-brand-primary); }
        .ai-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        @media (max-width: 719px) { .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; height: 150px; display: grid; place-items: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06); overflow: hidden; }
        .ai-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .ai-card-title { font-weight: 800; }
        .ai-card-model { color: var(--color-brand-primary); font-weight: 900; letter-spacing: .02em; }
      `}</style>
    </main>
  );
}


