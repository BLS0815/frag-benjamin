function BuchSection() {
  return (
    <section className="buch" id="buch">
      <div className="container buch__grid">
        <div className="buch__cover">
          <img src="assets/book-cover-front.png" alt="Buchcover: Narzissmus verstehen — Schild statt Schwert" />
        </div>
        <div className="buch__meta">
          <p className="eyebrow">Das Buch</p>
          <h2 className="section-title">Narzissmus verstehen — Schild statt Schwert</h2>
          <p className="buch__lead">
            Kein Theoriewerk, sondern ein praktischer Leitfaden.
            Du lernst, Dich zu schützen, Ruhe in den Alltag zu bringen und
            Entscheidungen klar zu treffen — auch dann, wenn das Gegenüber
            keine Verantwortung übernimmt.
          </p>
          <ul className="buch__facts">
            <li><span>32</span> Kapitel · Checklisten · Vorlagen</li>
            <li><span>286</span> Seiten · Klappenbroschur</li>
            <li><span>Verlag</span> Wombat · ISBN wird ergänzt</li>
          </ul>
          <div className="buch__ctas">
            <Button variant="primary">Zum Buch</Button>
            <Button variant="ghost" as="a" href="#">
              <Icon name="download" size={16} /> Leseprobe (PDF)
            </Button>
          </div>
          <p className="buch__note">
            Erhältlich im Buchhandel. Die Seite verkauft nicht direkt — wir verweisen an unabhängige Händler.
          </p>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { BuchSection });
