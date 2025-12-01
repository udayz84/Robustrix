import useInView from '../hooks/useInView.js';

// Seven categories using your local images in /public/products (Rugged Tablets removed)
const PRODUCTS = [
  { id: 'ai', title: 'AI Solutions', src: '/products/aisolutions.png', fallback: 'https://source.unsplash.com/400x240/?ai,edge' },
  { id: 'compute', title: 'Computing Systems', src: '/products/computingsystem.png', fallback: 'https://source.unsplash.com/400x240/?industrial,pc' },
  { id: 'embedded', title: 'Embedded Boards', src: '/products/embeddedboards.png', fallback: 'https://source.unsplash.com/400x240/?embedded,board,pcb' },
  { id: 'network', title: 'Network Solutions', src: '/products/networksolutions.png', fallback: 'https://source.unsplash.com/400x240/?network,appliance' },
  { id: 'up', title: 'UP Boards and UP Systems', src: '/products/upboards.png', fallback: 'https://source.unsplash.com/400x240/?single-board,computer' },
  { id: 'iot', title: 'IoT Gateways', src: '/products/iotsystems.png', fallback: 'https://source.unsplash.com/400x240/?iot,gateway' },
  { id: 'panel', title: 'Panel PCs', src: '/products/panelpc.png', fallback: 'https://source.unsplash.com/400x240/?panel,pc,touch' },
];

export default function ProductGrid() {
  const ref = useInView({ threshold: 0.2 });
  function onImgError(e, id) {
    const item = PRODUCTS.find(x => x.id === id);
    if (item?.fallback) e.currentTarget.src = item.fallback;
  }
  return (
    <div ref={ref} className="grid fade-in-up">
      {PRODUCTS.map((p) => (
        <a href="#" key={p.id} className="product">
          <div className="thumb">
            <img
              src={p.src}
              alt={p.title}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(ev) => onImgError(ev, p.id)}
            />
          </div>
          <div className="label">{p.title}</div>
        </a>
      ))}

      <style>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px 24px;
          margin-top: 10px;
          align-items: start;
        }
        .product {
          text-decoration: none;
          color: inherit;
          display: grid;
          justify-items: center;
          gap: 12px;
          padding: 14px 8px 18px 8px;
          border-radius: var(--radius-sm);
          transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
        }
        .product:hover { transform: translateY(-2px); background: #fff; box-shadow: var(--shadow-sm); }
        .thumb {
          display: grid;
          place-items: center;
          width: 100%;
          height: 120px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(18,28,45,0.06);
        }
        .thumb img {
          max-width: 140px;
          max-height: 100px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 3px 10px rgba(18, 28, 45, 0.08));
        }
        .label { text-align: center; font-weight: 800; color: var(--color-ink-700); }

        @media (min-width: 1024px) {
          /* Force a single-row layout on desktop for 7 items */
          .grid { grid-template-columns: repeat(7, 1fr); }
        }
        @media (max-width: 1023px) {
          .grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 719px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
          .thumb { height: 110px; }
        }
      `}</style>
    </div>
  );
}


