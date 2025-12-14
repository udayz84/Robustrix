export default function UpEdgeAIToolkit() {
  const first = [
    { h: 'One-Click Runtime Environment Setup', p: 'A unified bundle across Intel, NVIDIA, and Hailo platforms gives you a platform-agnostic runtime in one click.' },
    { h: 'Accessible, Embedded Performance Benchmarking', p: 'Evaluate models on the same hardware, measuring latency, throughput, power, and thermals across platforms.' },
    { h: 'Unified, Cross-Platform Model Conversion', p: 'Convert pre-trained models optimized for UP hardware with OpenVINO, HailoRT, and CUDA toolkits.' },
    { h: 'Integrated Edge AI Sizing Tool', p: 'Simulate workloads with zero-code configuration to determine scalability before committing resources.' },
  ];
  function onImgError(e) { e.currentTarget.src = '/products/upboards.png'; }
  return (
    <main>
      <section className="ai-hero">
        <div className="container">
          <h1 className="ai-title">UP Edge AI Toolkit</h1>
          <h2 className="ai-kicker">First Step: What You Can Do with the UP Edge AI Toolkit</h2>
        </div>
      </section>

      <section className="container section-spacing">
        <div className="about-grid">
          {first.map((f, i) => (
            <article className="about-card" key={f.h}>
              <img src={`https://source.unsplash.com/640x360/?ai,toolkit,edge&sig=${i}`} alt={f.h} onError={onImgError} loading="lazy" decoding="async" />
              <h4>{f.h}</h4>
              <p>{f.p}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-spacing">
        <h3 className="h2">Next Step: Select the Hardware Platform for Your Project</h3>
        <p className="ai-sub">With the UP Edge AI Toolkit, all of the pain points are gone. Build, experiment, and get creative across Intel, NVIDIA, and Hailo platforms with just a few clicks to establish proof of concept faster, whatever your project.</p>
        <div className="ai-grid">
          <article className="card ai-card">
            <div className="ai-thumb"><img src="https://source.unsplash.com/640x360/?hailo,intel,edge&sig=101" alt="Intel + Hailo" onError={onImgError} loading="lazy" decoding="async" /></div>
            <div className="ai-card-body">
              <h3 className="ai-card-title">Intel + Hailo</h3>
              <p className="ai-card-sub">UP Squared Pro 710H Edge with Hailo-8™ for efficient AI inference.</p>
            </div>
          </article>
          <article className="card ai-card">
            <div className="ai-thumb"><img src="https://source.unsplash.com/640x360/?arrow,lake,intel,edge&sig=102" alt="Arrow Lake" onError={onImgError} loading="lazy" decoding="async" /></div>
            <div className="ai-card-body">
              <h3 className="ai-card-title">Arrow Lake</h3>
              <p className="ai-card-sub">UP Xtreme ARL with Intel® Core™ Ultra 200H, up to 97 TOPS of AI.</p>
            </div>
          </article>
          <article className="card ai-card">
            <div className="ai-thumb"><img src="https://source.unsplash.com/640x360/?intel,nvidia,rtx,edge&sig=103" alt="Intel + Nvidia" onError={onImgError} loading="lazy" decoding="async" /></div>
            <div className="ai-card-body">
              <h3 className="ai-card-title">Intel + Nvidia</h3>
              <p className="ai-card-sub">Intelli i14 Edge with 14th Gen Intel® Core™ + NVIDIA® RTX™ MXM.</p>
            </div>
          </article>
        </div>
      </section>

      <style>{`
        .ai-hero { background: linear-gradient(180deg,#f4f7ff,#fff); border-bottom: 1px solid var(--color-ink-100); padding-block: clamp(28px,6vw,48px); }
        .ai-title { font-size: clamp(28px,5vw,42px); font-weight: 900; }
        .ai-kicker { color: var(--color-brand-primary); margin-top: 8px; }
        .about-grid { display: grid; gap: 16px; grid-template-columns: repeat(1,1fr); }
        @media (min-width:1024px){ .about-grid { grid-template-columns: repeat(2,1fr); } }
        .about-card { background: #fff; border-radius: 12px; box-shadow: var(--shadow-sm); padding: 14px; display: grid; gap: 8px; }
        .about-card img { width: 100%; height: 160px; object-fit: cover; border-radius: 8px; }
        .ai-grid { display: grid; gap: 16px; grid-template-columns: repeat(3,1fr); }
        @media (max-width:1023px){ .ai-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width:719px){ .ai-grid { grid-template-columns: 1fr; } }
        .ai-thumb { width: 100%; height: 160px; display: grid; place-items: center; background: #fff; border-radius: 10px; box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 8px 20px rgba(18,28,45,.06); overflow: hidden; }
        .ai-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .ai-card-title { font-weight: 800; }
        .ai-card-sub { color: var(--color-ink-600,#3d4656); }
      `}</style>
    </main>
  );
}





