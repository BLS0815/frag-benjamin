function AppTeaser() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); if (email.trim()) setSent(true); };
  return (
    <section className="app-teaser" id="app">
      <div className="container app-teaser__grid">
        <div className="app-teaser__copy">
          <p className="eyebrow eyebrow--gold">In Arbeit</p>
          <h2 className="section-title">Frag Benjamin</h2>
          <p className="app-teaser__lead">
            Eine ruhige App-Begleitung zum Buch. Du stellst eine Frage –
            und bekommst Kapitel, Werkzeuge und Übungen zurück, die zu Deiner Situation passen.
          </p>
          <p className="app-teaser__body">
            Noch nicht verfügbar. Wenn Du magst, sag uns Bescheid, sobald es losgeht.
            Keine Werbung, nur eine einzige Nachricht zum Start.
          </p>
          {sent ? (
            <div className="app-teaser__sent" role="status">
              Danke. Wir melden uns, sobald die App startet.
            </div>
          ) : (
            <form className="app-teaser__form" onSubmit={submit}>
              <input
                type="email"
                className="field"
                placeholder="Deine E-Mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <Button variant="primary" type="submit">Auf die Warteliste</Button>
            </form>
          )}
        </div>
        <div className="app-teaser__visual" aria-hidden="true">
          <div className="phone">
            <div className="phone__notch"></div>
            <div className="phone__screen">
              <div className="phone__eyebrow">Frag Benjamin</div>
              <div className="phone__q">Mein Partner dreht mir<br/>jedes Wort im Mund um.</div>
              <div className="phone__sep"></div>
              <div className="phone__label">Passende Kapitel</div>
              <div className="phone__row">
                <Icon name="book" size={16} /> Kap. 07 · Worte, die verletzen
              </div>
              <div className="phone__row">
                <Icon name="book" size={16} /> Kap. 12 · Ruhe im Gespräch
              </div>
              <div className="phone__row">
                <Icon name="shield" size={16} /> Werkzeug · Der Stopp-Satz
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { AppTeaser });
