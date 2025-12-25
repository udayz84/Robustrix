import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView.js';

const intro1 = `As one of the leading manufacture of advanced hardware platform for network computing and security solutions, Robustrix's full range of network appliances empowers SD-WAN, SDN, NFV, Wireless Gateway, NGFW, Intrusion Detection/Prevention, WAN Optimization, Network Access Control, Load Balancing, Web Content Filtering, Unified Threat Management, and Wireless Network Security for the most versatile and cost-effective networking solution on the market.`;
const intro2 = `Offering x86-based platforms from Intel® Atom™ all the way to Intel® Xeon processors, and in desktop, 1U and 2U form factors, Robustrix's team of experienced network engineers have helped dozens of companies deploy reliable network appliances around the globe with faster time-to-market and lower development costs based on state-of-the-art hardware platforms, unmatched service quality and long-term support.`;

const tiles = [
  { id: 'desktop', title: 'Desktop Network Appliance', to: '/network/desktop', img: '/products/networksolutions.png' },
  { id: 'rack', title: 'Rackmount Network Appliance', to: '/network/rackmount', img: '/products/networksolutions.png' },
  { id: 'industrial', title: 'Industrial Cyber Security Appliance', to: '/network/industrial-security', img: '/products/networksolutions.png' },
  { id: 'modules', title: 'Network Interface Module', to: '/network/modules', img: '/products/networksolutions.png' },
];

export default function NetworkSolutions() {
  const heroRef = useInView({ threshold: 0.1 });
  const gridRef = useInView({ threshold: 0.1 });
  
  function onImgError(e) {
    e.currentTarget.src = '/products/networksolutions.png';
  }
  return (
    <main>
      <section ref={heroRef} className="ai-hero fade-in-up">
        <div className="container">
          <h1 className="ai-title">Network Appliance</h1>
          <p className="ai-sub">{intro1}</p>
          <p className="ai-sub">{intro2}</p>
          <p className="ai-sub"><a className="link" href="#" target="_blank" rel="noreferrer">Click to Download or View the latest Network Appliances brochure</a></p>
        </div>
      </section>

      <section className="container section-spacing">
        <div ref={gridRef} className="eb-grid fade-in-up-stagger">
          {tiles.map(t => (
            <Link to={t.to} className="card eb-card" key={t.id}>
              <div className="eb-thumb">
                <img src={t.img} alt={t.title} loading="lazy" decoding="async" onError={onImgError} />
              </div>
              <h3 className="eb-title">{t.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .ai-hero {
          background: linear-gradient(180deg, #f4f7ff 0%, #ffffff 100%);
          border-bottom: 1px solid var(--color-ink-100);
          padding-block: clamp(28px, 6vw, 48px);
        }
        .ai-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 900;
          line-height: 1.1;
        }
        .ai-sub {
          margin-top: 10px;
          color: var(--color-ink-600, #3d4656);
          max-width: 900px;
        }
        .eb-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (min-width: 1024px) {
          .eb-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .eb-card {
          text-decoration: none;
          color: inherit;
          display: grid;
          justify-items: center;
          gap: 12px;
          padding: 14px 8px 18px 8px;
          border-radius: var(--radius-sm);
          transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
        }
        .eb-card:hover { transform: translateY(-2px); background: #fff; box-shadow: var(--shadow-sm); }
        .eb-thumb {
          display: grid;
          place-items: center;
          width: 100%;
          height: 120px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
          overflow: hidden;
        }
        .eb-thumb img {
          max-width: 160px;
          max-height: 110px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        .eb-title {
          text-align: center;
          font-weight: 800;
          color: var(--color-ink-700);
        }
      `}</style>
    </main>
  );
}


