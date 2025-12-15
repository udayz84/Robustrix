import { Link } from 'react-router-dom';
import { MAIN_PRODUCTS as products } from '../data/mainProducts.js';

export default function MainProducts() {
  const fallback = [
    {
      id: 'p1',
      name: 'Robo AI Industrial Pro',
      brand: 'Robustrix',
      series: 'EVS-3000',
      useCases: ['Autonomous Robotics', 'Public Security', 'Machine Vision'],
      highlights: [
        'Intel® Core 12th/13th/14th Gen (up to 65W) on Intel R680E chipset',
        'DDR5 SO‑DIMM up to 96GB (ECC/Non‑ECC), 2 slots',
        'Intel UHD 770/730 iGPU (Xe) with MXM support up to 115W',
        'Up to 7 independent displays (HDMI 2.1 x2, DP x1, + up to 4 via MXM)',
        'Storage: SATAIII x2 (RAID 0/1), 2x 2.5" front trays, rich M.2 (M/B/E)',
        'I/O: 2x COM RS‑232/422/485 (ESD 8kV), 4x USB 3.2 Gen2 Type‑A, 1x USB 3.2 Gen2x2 Type‑C',
        'Isolated DIO 32 (16DI/16DO), External SIM (5G/4G/LTE/GPRS/UMTS)',
        'Realtek ALC888S‑VD 7.1 HD Audio (Mic‑in, Line‑out)',
        'Networking: Intel I226 2.5GbE with TSN x2',
        'Power: DC 9–55V, 16‑mode ignition control, 200W budget for GPUs',
        'OOB: Nuvoton NUC980 MCU via RJ45 (10/100Mb) for remote Pwr/Reset/Cycle',
        'TPM 2.0 (Infineon SLB9670, SPI)',
        'Wide environmental tolerance (‑25°C to 55°C)* and MIL/IEC shock & vibration',
      ],
      models: [
        { model: 'EVS-3100', note: 'Fanless, compact; 280x90x215mm; 5.0kg' },
        { model: 'EVS-3200', note: 'Fanless; added PCIe x4 Gen4; 280x114x215mm; 5.6kg' },
        { model: 'EVS-3300', note: 'Fanless; 2x front M.2 trays; 280x130x215mm; 6.2kg' },
        { model: 'EVS-3400', note: 'Fanless; 3x PCIe x4 Gen4; 280x152x215mm; 6.8kg' },
        { model: 'EVS-3100F', note: 'With fan; MXM 60–115W; 280x97x215mm; 5.1kg' },
        { model: 'EVS-3200F', note: 'With fan; added PCIe; 280x121x215mm; 5.7kg' },
        { model: 'EVS-3300F', note: 'With fan; 2x M.2 trays; 280x137x215mm; 6.3kg' },
        { model: 'EVS-3400F', note: 'With fan; 3x PCIe; 280x159x215mm; 6.9kg' },
      ],
    },
    {
      id: 'p2',
      name: 'ROBO-AI-3000',
      brand: 'Robustrix',
      series: 'Small Form Factor Industrial PC',
      useCases: ['Edge AI', 'Factory Automation', 'Kiosk/Vision'],
      highlights: [
        'LGA1700 socket — Intel® Core 12th/13th/14th Gen support',
        'Compact, fanless industrial chassis with extruded fin heatsink',
        'EDGEBoost modular I/O bays; multiple add‑on options',
        'Rich I/O front/rear: USB 3.x, COM, Isolated DIO, DP/HDMI',
        'Multiple RJ45 LAN (incl. OOB) and optional PoE/10GbE modules',
        'M.2 expansion: Key M (NVMe x4), Key E, Key B options',
        'Wide‑range DC input with industrial protections',
      ],
      models: [
        { model: 'Base', note: 'Wall/Panel mount ready; configurable EDGEBoost bays' },
      ],
    },
    {
      id: 'p3',
      name: '21.5" Digital LCD Monitor',
      brand: 'Robustrix',
      series: 'CH-L215-TI',
      useCases: ['HMI', 'Control Room', 'Kiosk'],
      highlights: [
        '21.45" TFT LCD, 1920x1080, 17:9, 75Hz, 280 cd/m², 3000:1 contrast',
        '178°/178° viewing, 6.5ms response, 16.7M colors',
        'Inputs: VGA x1, HDMI x1, DP x1; Audio‑out + built‑in speaker',
        'VESA 75x75; Desktop base / Wall‑mount options',
        'Operating: 0~50°C; Storage: ‑20~60°C; Humidity: 5–90%',
        'Power: DC 12V; ≤20W (≤1W standby); External adapter',
        'Metal + ABS housing; 550x343x105mm; 2.9kg; Black',
        '3D comb filter & noise reduction; Low power design',
      ],
      models: [{ model: 'CH-L215-TI', note: 'All‑in‑one HMI display solution' }],
    },
  ];

  return (
    <section className="container section-spacing">
      <header>
        <p className="overline mp-overline">Our Main Products</p>
        <h2 className="h2">Featured Industrial Platforms</h2>
        <p className="subtle">Key platforms engineered for demanding edge AI and industrial applications.</p>
      </header>

      <div className="mp-grid">
        {(products || fallback).map((p) => (
          <article key={p.id} className="card mp-card">
            <span className="mp-badge">Main</span>
            {p.image ? (
              <div className="mp-media">
                <img src={p.image} alt={p.name} loading="lazy" decoding="async" />
              </div>
            ) : null}
            <div className="mp-head">
              <h3 className="mp-title">{p.name}</h3>
              <p className="mp-meta">{p.brand}{p.series ? ` · ${p.series}` : ''}</p>
              {p.useCases?.length ? (
                <p className="mp-tags">{p.useCases.join(' · ')}</p>
              ) : null}
            </div>
            <ul className="mp-highlights">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            {p.models?.length ? (
              <div className="mp-actions">
                <Link to={`/products?product=${p.id}`} className="btn btn-outline">Models & options</Link>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mp-hero">
        <img src="/pictures/pc.jpeg" alt="Robustrix industrial PC showcase" loading="lazy" decoding="async" />
        <div className="mp-hero-overlay" />
        <div className="mp-hero-copy">
          <p className="overline">Our Main Products</p>
          <h2 className="h2">Engineered for rugged, AI-ready deployments</h2>
        </div>
      </div>

      <style>{`
        .mp-hero {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          min-height: 150px;
          background: var(--color-bg-alt);
          margin-top: 20px;
        }
        .mp-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .mp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(0,0,0,0.55), rgba(0,0,0,0.25));
        }
        .mp-hero-copy {
          position: absolute;
          inset: 0;
          display: grid;
          align-content: center;
          padding: 24px;
          gap: 8px;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.45);
        }
        .mp-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 18px;
          margin-top: 20px;
          align-items: stretch;
          grid-auto-rows: 1fr;
        }
        @media (min-width: 1024px) {
          .mp-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .mp-card {
          position: relative;
          display: grid;
          gap: 10px;
          padding: 16px;
          height: 100%;
          grid-template-rows: auto auto 1fr auto;
        }
        .mp-overline {
          font-size: clamp(20px, 2.8vw, 32px);
          letter-spacing: .18em;
        }
        .mp-media { width: 100%; height: 200px; border-radius: 10px; overflow: hidden; background: var(--color-bg-alt); }
        .mp-media img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .mp-badge {
          position: absolute;
          top: 10px; left: 10px;
          background: var(--color-brand-primary-dark);
          color: var(--color-ink-900);
          border-radius: 999px;
          padding: 2px 8px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: .05em;
        }
        .mp-head { display: grid; gap: 4px; }
        .mp-title { font-weight: 900; font-size: 1.05rem; }
        .mp-meta { color: var(--color-ink-700); }
        .mp-tags { color: var(--color-brand-primary); font-weight: 700; }
        .mp-highlights {
          display: grid;
          gap: 6px;
          list-style: disc inside;
          color: var(--color-ink-900);
          overflow: auto;
          padding-right: 4px;
        }
        .mp-actions { margin-top: 6px; }
      `}</style>
    </section>
  );
}


