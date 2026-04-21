function DreiTueren({ onOpen }) {
  const tueren = [
    { id: 'sofortzugang', icon: 'shield',  title: 'Sofortzugang',        text: 'Werkzeuge für den Moment, in dem keine Zeit ist.' },
    { id: 'verstehen',    icon: 'compass', title: 'Verstehen & Einordnen', text: 'Woran erkenne ich, was hier passiert?' },
    { id: 'buch',         icon: 'book',    title: 'Das Buch',            text: '32 Kapitel. Praxisnah. Sofort anwendbar.' },
  ];
  return (
    <section className="tueren" id="tueren">
      <div className="container">
        <p className="eyebrow">Drei Türen</p>
        <h2 className="section-title">Wo möchtest Du anfangen?</h2>
        <div className="tueren__grid">
          {tueren.map(t => (
            <button key={t.id} className="tuer" onClick={() => onOpen?.(t.id)}>
              <Icon name={t.icon} size={40} className="tuer__icon" />
              <h3 className="tuer__title">{t.title}</h3>
              <p className="tuer__text">{t.text}</p>
              <span className="tuer__go">
                Öffnen <Icon name="arrow-right" size={16} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { DreiTueren });
