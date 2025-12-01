export default function IotGateways() {
  const intro1 = `Robustrix is a trusted edge AI solution provider, dedicated to helping industry users build open, secure, and seamless IoT solutions. Robustrix’s series of IoT gateways are designed for users wishing to implement the IoT concept in various indoor and outdoor environments. From the inside of a control room to a moving vehicle, IoT can be made available to anyone, anywhere.`;
  const intro2 = `Based on Arm architecture, Robustrix’s AIOT gateways feature TI AM62x series, NXP i.MX9, and i.MX8M Plus series Arm CPUs and RISC processors, providing high performance and reliability.`;
  const intro3 = `With plug-and-play tools, development kits, and comprehensive systems, Robustrix enables developers to accelerate innovation, reduce time-to-market, and enhance IoT device management and security.`;

  const rawItems = [
    { title: 'Standard RISC Gateway Board With Broadcom BCM2711 Quad-Core Cortex-A72 SoC @ 1.5GHz', model: 'SRG-CM4' },
    { title: 'Standard RISC Gateway with TI AM62x Sitara™ Processors', model: 'SRG-AM62' },
    { title: 'Standard RISC Gateway with ARM i.MX8M Plus Quad-Core Cortex-A53 1.6GHz Processor', model: 'SRG-IMX8PL' },
    { title: 'Standard IoT Gateway with ARM i.MX8M Plus Quad-Core Cortex-A53 1.6GHz Processor', model: 'SRG-IMX8P' },
    { title: 'AI IoT Video Analysis Gateway | Intel movidius', model: 'AIOT-AIVD' },
    { title: 'Industrial Automation IoT Gateway', model: 'AIOT-IGWS01' },
  ];

  const items = rawItems.map((it, idx) => ({
    ...it,
    modelView: it.model.replace(/^AIOT/gi, 'ROBO'),
    image: `https://source.unsplash.com/640x360/?iot,gateway,edge&sig=${idx}`,
  }));

  function onImgError(e) {
    e.currentTarget.src = '/products/iotsystems.png';
  }

  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title">IoT Gateway & Protocol Expansion</h1>
          <p className="ai-sub">{intro1}</p>
          <p className="ai-sub">{intro2}</p>
          <p className="ai-sub">{intro3}</p>
        </div>
      </section>

      <section className="container section-spacing">
        <div className="ai-grid">
          {items.map((it) => (
            <article key={it.model} className="card ai-card">
              <div className="ai-thumb">
                <img src={it.image} alt={it.title} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={onImgError} />
              </div>
              <div className="ai-card-body">
                <h3 className="ai-card-title">{it.title}</h3>
                <p className="ai-card-model">{it.modelView}</p>
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


