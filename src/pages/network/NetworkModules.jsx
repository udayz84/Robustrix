const intro = `A major developer of Industry 4.0 computing solutions, AAEON launches the diverse Network Interface Module family, which feature PCI-Express host interfaces and offer a multitude of solutions tailored for virtual network deployment and management, supporting a wide range of virtual machine devices. Built to efficiently optimize the distribution and management of virtual workloads, the Network Interface Modules provide maximum scalability and reduce bottleneck impediments to the bare minimum. Configured for the deployment of virtual machine device queues, these modules are ideally suited for the consolidation of virtual network traffic, and are easily integrated into existing hardware and architecture.`;

const rawItems = [
  { title: 'NIM-S13E', model: 'NIM-S13E', sub: 'Intel® 82580EB (i350-AM4; Optional by request) PCI-Express 1G Copper Ethernet 4 Ports Module' },
  { title: 'NIM-C13D', model: 'NIM-C13D', sub: 'Intel® 82580EB (i350-AM4; Optional by request) PCI-Express 1G Copper Ethernet 4 Ports Module' },
  { title: 'NIM-S13D', model: 'NIM-S13D', sub: 'Intel® 82580EB (i350-AM4; Optional by request) PCI-Express 1G Copper Ethernet 4 Ports Module' },
  { title: 'NIM-S13B', model: 'NIM-S13B', sub: 'Intel® 82580EB (i350-AM4; Optional by request)' },
  { title: 'NIM-S26C', model: 'NIM-S26C', sub: 'Intel® Fortville XL710 PCI-Express 40G QSFP 2 Ports Module' },
  { title: 'NIM-S26B', model: 'NIM-S26B', sub: 'Intel® 82580EB (i350-AM4; Optional by request)' },
  { title: 'NIM-C13B', model: 'NIM-C13B', sub: 'Intel® 82580EB (i350-AM4; Optional by request)' },
];

export default function NetworkModules() {
  const items = rawItems.map((it, idx) => ({
    ...it,
    modelView: it.model.replace(/^NIM/gi, 'ROBO'),
    image: `https://source.unsplash.com/600x340/?nic,module,network&sig=${idx}`,
  }));
  function onImgError(e) {
    e.currentTarget.src = '/products/networksolutions.png';
  }
  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title ai-blue">Network Interface Module</h1>
          <p className="ai-sub">{intro}</p>
        </div>
      </section>
      <section className="container section-spacing">
        <div className="ai-grid">
          {items.map(it => (
            <article key={it.model} className="card ai-card">
              <div className="ai-thumb">
                <img src={it.image} alt={it.title} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={onImgError} />
              </div>
              <div className="ai-card-body">
                <h3 className="ai-card-title">{it.title}</h3>
                <p className="ai-card-sub">{it.sub}</p>
                <p className="ai-card-model">{it.modelView}</p>
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


