// Shared UI primitives — Button & Icon
// Kept tiny on purpose — these are cosmetic recreations.

function Button({ variant = 'primary', size = 'md', children, onClick, as: As = 'button', href, ...rest }) {
  const cls = `btn btn-${variant} btn-${size}`;
  if (As === 'a' || href) {
    return <a className={cls} href={href || '#'} onClick={onClick} {...rest}>{children}</a>;
  }
  return <button className={cls} onClick={onClick} {...rest}>{children}</button>;
}

// Minimal inline SVG icons drawn with 1.75px strokes — lucide-style.
// Each icon is 24x24 and inherits `currentColor`.
function Icon({ name, size = 24, className = '' }) {
  const common = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round',
    className: `icon ${className}`,
    'aria-hidden': true,
  };
  switch (name) {
    case 'shield':
      return (<svg {...common}><path d="M12 2 L20 5 V11 C20 16 16.5 20 12 22 C7.5 20 4 16 4 11 V5 Z"/></svg>);
    case 'compass':
      return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M16 8 L13.5 13 L8 16 L10.5 11 Z" fill="currentColor" stroke="none"/></svg>);
    case 'book':
      return (<svg {...common}><path d="M4 4 H10 C11.1 4 12 4.9 12 6 V20 H6 C4.9 20 4 19.1 4 18 Z"/><path d="M20 4 H14 C12.9 4 12 4.9 12 6 V20 H18 C19.1 20 20 19.1 20 18 Z"/></svg>);
    case 'phone':
      return (<svg {...common}><path d="M5 4 L9 4 L10.5 8 L8.5 9.5 C9.5 12 12 14.5 14.5 15.5 L16 13.5 L20 15 L20 19 C20 19.6 19.6 20 19 20 C11.3 20 4 12.7 4 5 C4 4.4 4.4 4 5 4 Z"/></svg>);
    case 'mail':
      return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 7 L12 13 L21 7"/></svg>);
    case 'menu':
      return (<svg {...common}><path d="M4 7 H20 M4 12 H20 M4 17 H20"/></svg>);
    case 'close':
      return (<svg {...common}><path d="M6 6 L18 18 M18 6 L6 18"/></svg>);
    case 'arrow-right':
      return (<svg {...common}><path d="M5 12 H19 M13 6 L19 12 L13 18"/></svg>);
    case 'arrow-up-right':
      return (<svg {...common}><path d="M7 17 L17 7 M9 7 H17 V15"/></svg>);
    case 'download':
      return (<svg {...common}><path d="M12 4 V15 M7 11 L12 16 L17 11 M5 19 H19"/></svg>);
    case 'logo-shield':
      // Brand shield + sword, no stroke — filled.
      return (
        <svg width={size} height={size * 1.2} viewBox="0 0 100 120" className={`icon ${className}`} aria-hidden="true">
          <path d="M50 5 L90 15 L90 55 C90 82 72 105 50 115 C28 105 10 82 10 55 L10 15 Z" fill="var(--gold-500)"/>
          <g fill="var(--marine-700)">
            <path d="M49 25 L51 25 L51 72 L49 72 Z"/>
            <path d="M50 20 L52 25 L48 25 Z"/>
            <rect x="38" y="72" width="24" height="5" rx="1"/>
            <rect x="48.5" y="77" width="3" height="14"/>
            <circle cx="50" cy="94" r="3.5"/>
          </g>
        </svg>
      );
    default:
      return null;
  }
}

Object.assign(window, { Button, Icon });
