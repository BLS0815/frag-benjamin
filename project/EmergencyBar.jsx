function EmergencyBar({ onClose }) {
  const [closed, setClosed] = React.useState(false);
  if (closed) return null;
  return (
    <div className="emergency-bar" role="complementary" aria-label="Notfallkontakt">
      <div className="emergency-bar__inner">
        <span className="emergency-bar__dot" aria-hidden="true"></span>
        <p>
          <strong>Telefonseelsorge:</strong>{' '}
          <a href="tel:08001110111">0800 111 0 111</a>
          <span className="emergency-bar__sep">–</span>
          kostenlos, 24h
        </p>
        <button className="emergency-bar__close" aria-label="Leiste schließen" onClick={() => { setClosed(true); onClose?.(); }}>
          <Icon name="close" size={16} />
        </button>
      </div>
    </div>
  );
}
Object.assign(window, { EmergencyBar });
