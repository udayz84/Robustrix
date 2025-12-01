export default function SectionHeading({ overline, title, subtitle }) {
  return (
    <header className="fade-in-up is-inview">
      {overline && <p className="overline">{overline}</p>}
      {title && <h2 className="h2">{title}</h2>}
      {subtitle && <p className="subtle">{subtitle}</p>}
    </header>
  );
}


