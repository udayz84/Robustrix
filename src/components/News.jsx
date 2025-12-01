import useInView from '../hooks/useInView.js';

const NEWS = [
  {
    id: 'n1',
    title: 'Unlocking Smart Connectivity: SIM-Enabled Industrial PCs by Robustrix',
    date: 'May 8, 2025',
    meta: '0 Comments · admin',
    image: '/pictures/home1.png',
    excerpt:
      'In today’s fast-paced industrial world, smart connectivity isn’t just a luxury—it’s a necessity. With industries leaning heavily on real-time...',
  },
  {
    id: 'n2',
    title: 'Introduction to Fanless PCs: The Future of Industrial Computing',
    date: 'June 12, 2024',
    meta: '0 Comments · admin',
    image: '/pictures/fanlesscpu.png',
    excerpt:
      'In today’s rapidly evolving industrial landscape, computing solutions must meet the increasing demands of durability, efficiency, and reliability...',
  },
  {
    id: 'n3',
    title: 'Exploring the Power of All-in-One PCs with Robustrix IT Solutions',
    date: 'June 12, 2024',
    meta: '0 Comments · admin',
    image: '/pictures/aiplatforms.jpg',
    excerpt:
      'In today’s fast-paced digital world, businesses require solutions that are efficient, space‑saving, and powerful. All‑in‑One PCs...',
  },
  {
    id: 'n4',
    title: 'Why do we use Fanless PC Instead of Regular PC?',
    date: 'June 12, 2024',
    meta: '0 Comments · admin',
    image: '/pictures/intelprocrssros.png',
    excerpt:
      'In industrial and mission‑critical environments, choosing the right computing solution is essential for reliability, durability, and performance...',
  },
];

export default function News() {
  const ref = useInView({ threshold: 0.2 });
  function onImgError(e, id) {
    const map = {
      n1: '/pictures/home1.png',
      n2: '/pictures/fanlesscpu.png',
      n3: '/pictures/aiplatforms.jpg',
      n4: '/pictures/intelprocrssros.png',
    };
    e.currentTarget.src = map[id] || '/assets/news-1.svg';
  }
  return (
    <div ref={ref} className="news fade-in-up">
      {NEWS.map(n => (
        <a href="#" className="card news-card" key={n.id}>
          <img
            className="thumb"
            src={n.image}
            alt={n.title}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(ev) => onImgError(ev, n.id)}
          />
          <div className="body">
            <p className="date">{n.date}{n.meta ? ` · ${n.meta}` : ''}</p>
            <h3 className="title">{n.title}</h3>
            {n.excerpt && <p className="excerpt">{n.excerpt}</p>}
            <span className="link">Read More...</span>
          </div>
        </a>
      ))}

      <style>{`
        .news {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
        }
        .news-card { text-decoration: none; color: inherit; overflow: hidden; }
        .thumb { width: 100%; height: 160px; object-fit: cover; background: var(--color-bg-alt); }
        .body { padding: 14px 16px 16px 16px; display: grid; gap: 8px; }
        .date { font-size: 0.86rem; color: var(--color-ink-500); }
        .title { font-size: 1.02rem; line-height: 1.3; font-weight: 800; }
        .excerpt { color: var(--color-ink-700); }

        @media (max-width: 1023px) {
          .news { grid-template-columns: 1fr; }
          .thumb { height: 180px; }
        }
      `}</style>
    </div>
  );
}


