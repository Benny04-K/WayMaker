import { useState } from 'react';
import logo from '../Images/logo.png'
interface NavProps {
  currentPage: 'home' | 'works';
  onNavigate: (page: 'home' | 'works') => void;
  scrollTo?: (id: string) => void;
}

export default function Nav({ currentPage, onNavigate, scrollTo }: NavProps) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Services', action: () => { onNavigate('home'); setTimeout(() => scrollTo?.('services'), 80); } },
    { label: 'Premium', action: () => { onNavigate('home'); setTimeout(() => scrollTo?.('premium'), 80); } },
    { label: 'Works', action: () => { onNavigate('works'); setOpen(false); } },
    { label: 'Pricing', action: () => { onNavigate('home'); setTimeout(() => scrollTo?.('pricing'), 80); } },
    { label: 'Contact', action: () => { onNavigate('home'); setTimeout(() => scrollTo?.('contact'), 80); } },
  ];

  const go = (fn: () => void) => { setOpen(false); fn(); };

  return (
    <>
      <nav>
        <button
          className="logo"
          onClick={() => onNavigate('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: 0,
          }}
        >
          <img
            src={logo}
            alt="WayMaker Technologies"
            style={{ height: '100px', width: 'auto', display: 'block' }}
          />
        </button>

        <ul className="nav-links">
          {navLinks.map(l => (
            <li key={l.label}>
              <a
                href="#"
                onClick={e => { e.preventDefault(); l.action(); }}
                className={currentPage === 'works' && l.label === 'Works' ? 'active' : ''}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="nav-cta" onClick={() => { onNavigate('home'); setTimeout(() => scrollTo?.('contact'), 80); }}>
          Get a Quote
        </button>

        <button
          className={`nav-hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className="nav-drawer open">
          {navLinks.map(l => (
            <a key={l.label} href="#" onClick={e => { e.preventDefault(); go(l.action); }}>{l.label}</a>
          ))}
          <button className="drawer-cta" onClick={() => go(() => { onNavigate('home'); setTimeout(() => scrollTo?.('contact'), 80); })}>
            Get a Quote
          </button>
        </div>
      )}
    </>
  );
}