import useInView from '../hooks/useInView.js';

export default function SectionHeading({ overline, title, subtitle }) {
  const ref = useInView({ threshold: 0.1 });
  return (
    <header ref={ref} className="fade-in-up">
      {overline && <p className="overline">{overline}</p>}
      {title && <h2 className="h2">{title}</h2>}
      {subtitle && <p className="subtle">{subtitle}</p>}
    </header>
  );
}


