function SiteFooter() {
  return (
    <footer className="site-footer" id="kontakt">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Icon name="logo-shield" size={40} />
          <div>
            <div className="site-footer__wm">Schild statt Schwert</div>
            <p className="site-footer__mission">
              Eine Anlaufstelle für Menschen in narzisstischen Beziehungsdynamiken.
              Unabhängig. Werbefrei. Anonym nutzbar.
            </p>
          </div>
        </div>
        <div className="site-footer__col">
          <p className="site-footer__label">Kontakt</p>
          <a href="mailto:b.lucas.s@web.de" className="site-footer__mail">
            <Icon name="mail" size={16} /> b.lucas.s@web.de
          </a>
          <p className="site-footer__author">
            Benjamin-Lucas Schmidt<br/>Hamburg · Verlag Wombat
          </p>
        </div>
        <div className="site-footer__col">
          <p className="site-footer__label">Rechtliches</p>
          <ul>
            <li><a href="#">Impressum</a></li>
            <li><a href="#">Datenschutz</a></li>
            <li><a href="#">Rechtlicher Hinweis</a></li>
          </ul>
        </div>
        <div className="site-footer__col">
          <p className="site-footer__label">Im Notfall</p>
          <p>Telefonseelsorge<br/><a href="tel:08001110111">0800 111 0 111</a></p>
          <p>Hilfetelefon Gewalt<br/><a href="tel:08000116016">08000 116 016</a></p>
        </div>
      </div>
      <div className="site-footer__bottom container">
        <p>© {new Date().getFullYear()} Schild statt Schwert. Diese Seite ersetzt keine Therapie.</p>
        <p className="site-footer__ds">Kein Tracking · Keine Cookies · Kein Google Analytics</p>
      </div>
    </footer>
  );
}
Object.assign(window, { SiteFooter });
