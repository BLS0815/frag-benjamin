function Hero({ onCTA }) {
  return (
    <section className="hero" id="top">
      <div className="hero__inner container">
        <p className="eyebrow eyebrow--gold">Betroffenen-Plattform</p>
        <h1 className="hero__title">
          Hier findest<br />Du Hilfe.
        </h1>
        <p className="hero__lead">
          Manche Beziehungen hinterlassen keine blauen Flecken –<br />
          aber tiefe Spuren.
        </p>
        <div className="hero__ctas">
          <Button variant="emergency" onClick={() => onCTA?.('sofortzugang')}>
            Ich bin gerade mittendrin
          </Button>
          <Button variant="primary" onClick={() => onCTA?.('verstehen')}>
            Ich will verstehen
          </Button>
          <Button variant="outline-light" onClick={() => onCTA?.('buch')}>
            Zum Buch
          </Button>
        </div>
        <p className="hero__note">
          Die Seite ist anonym nutzbar. Keine Anmeldung. Keine Cookies.
        </p>
      </div>
      <div className="hero__decoration" aria-hidden="true">
        <img src="assets/shield-labyrinth-logo.svg" alt="" />
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
