function BigQuote() {
  return (
    <section className="bigquote">
      <div className="container-narrow">
        <p className="eyebrow eyebrow--gold">Zwischenwort</p>
        <blockquote className="bigquote__text">
          „Keine Treppe<br />ist unendlich."
        </blockquote>
        <cite className="bigquote__cite">Benjamin-Lucas Schmidt</cite>
      </div>
    </section>
  );
}
Object.assign(window, { BigQuote });
