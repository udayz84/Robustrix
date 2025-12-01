import useInView from '../hooks/useInView.js';
import { Link } from 'react-router-dom';

// Render Solutions as a single-row icon grid (like your screenshot)
const SOLUTIONS = [
  { id: 'ai', title: 'AI Solutions', src: '/products/aisolutions.png', fallback: 'https://source.unsplash.com/400x240/?ai,edge', link: '/ai-solutions' },
  { id: 'compute', title: 'Computing Systems', src: '/products/computingsystem.png', fallback: 'https://source.unsplash.com/400x240/?industrial,pc', link: '/computing-systems' },
  { id: 'embedded', title: 'Embedded Boards', src: '/products/embeddedboards.png', fallback: 'https://source.unsplash.com/400x240/?embedded,board,pcb', link: '/embedded-boards' },
  { id: 'network', title: 'Network Solutions', src: '/products/networksolutions.png', fallback: 'https://source.unsplash.com/400x240/?network,appliance', link: '/network' },
  { id: 'up', title: 'UP Boards and UP Systems', src: '/products/upboards.png', fallback: 'https://source.unsplash.com/400x240/?single-board,computer', link: '/up' },
  { id: 'iot', title: 'IoT Gateways', src: '/products/iotsystems.png', fallback: 'https://source.unsplash.com/400x240/?iot,gateway', link: '/iot-gateways' },
  { id: 'panel', title: 'Panel PCs', src: '/products/panelpc.png', fallback: 'https://source.unsplash.com/400x240/?panel,pc,touch', link: '/panel-pcs' },
];

export default function Solutions() {
  const ref = useInView({ threshold: 0.2 });
  function onImgError(e, id) {
    const item = SOLUTIONS.find(x => x.id === id);
    if (item?.fallback) e.currentTarget.src = item.fallback;
  }
  return (
    <div ref={ref} className="solutions fade-in-up">
      {SOLUTIONS.map(s => {
        const content = (
          <>
            <div className="thumb">
              <img
                src={s.src}
                alt={s.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(ev) => onImgError(ev, s.id)}
              />
            </div>
            <div className="label">{s.title}</div>
          </>
        );
        return s.link ? (
          <Link key={s.id} to={s.link} className="sol-item">
            {content}
          </Link>
        ) : (
          <a key={s.id} href="#" className="sol-item">
            {content}
          </a>
        );
      })}

      <style>{`
        .solutions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px 24px;
          margin-top: 10px;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .solutions { grid-template-columns: repeat(7, 1fr); }
        }
        .sol-item {
          text-decoration: none;
          color: inherit;
          display: grid;
          justify-items: center;
          gap: 12px;
          padding: 10px 6px 12px 6px;
          border-radius: var(--radius-sm);
          transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
        }
        .sol-item:hover { transform: translateY(-2px); background: #fff; box-shadow: var(--shadow-sm); }
        .thumb {
          display: grid;
          place-items: center;
          width: 100%;
          height: 110px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
        }
        .thumb img {
          max-width: 130px;
          max-height: 90px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 3px 10px rgba(18, 28, 45, 0.08));
        }
        .label { text-align: center; font-weight: 800; color: var(--color-ink-700); }
      `}</style>
    </div>
  );
}

