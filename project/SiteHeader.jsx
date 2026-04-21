function SiteHeader({ active = 'verstehen', onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [
    { id: 'sofortzugang', label: 'Sofortzugang' },
    { id: 'verstehen',    label: 'Verstehen' },
    { id: 'buch',         label: 'Buch' },
    { id: 'app',          label: 'App' },
    { id: 'kontakt',      label: 'Kontakt' },
  ];
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <a href="#top" className="brand" aria-label="Schild statt Schwert — Startseite">
          <Icon name="logo-shield" size={34} />
          <span className="brand__text">
            <span className="brand__wm">Schild statt Schwert</span>
            <span className="brand__sm">Hier findest Du Hilfe</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Hauptnavigation">
          <ul>
            {items.map(it => (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  className={active === it.id ? 'is-active' : ''}
                  onClick={(e) => { e.preventDefault(); onNavigate?.(it.id); setMenuOpen(false); }}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="site-nav__toggle" aria-label="Menü öffnen" onClick={() => setMenuOpen(o => !o)}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>
      </div>
      {menuOpen && (
        <div className="site-nav__mobile">
          <ul>
            {items.map(it => (
              <li key={it.id}><a href={`#${it.id}`} onClick={(e) => { e.preventDefault(); onNavigate?.(it.id); setMenuOpen(false); }}>{it.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
Object.assign(window, { SiteHeader });
