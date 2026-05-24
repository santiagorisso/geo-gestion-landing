import { useEffect, useState } from 'react';
import { buildWhatsAppHref, guardWhatsAppNavigation, whatsAppPresets } from '../lib/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = (open: boolean) => {
    setIsMenuOpen(open);
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        toggleMenu(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const whatsappLink = buildWhatsAppHref(whatsAppPresets.demo);

  return (
    <>
      <header className={`nav ${isScrolled ? 'scrolled' : ''}`} id="nav">
        <div className="wrap nav-inner">
          <a href="#" className="brand" aria-label="Geo-Gestión, inicio">
            <span className="brand-mark" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20l6-12 4 8 3-5 5 9"/></svg>
            </span>
            Geo-Gestión
          </a>
          <nav className="nav-links" aria-label="Principal">
            <a href="#tramites">Trámites</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#planes">Planes</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a
            href={whatsappLink}
            className="btn btn-primary btn-sm nav-cta"
            onClick={guardWhatsAppNavigation}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedi la demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <button
            className="nav-burger"
            aria-label="Abrir menú"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => toggleMenu(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menú">
        <button className="close" aria-label="Cerrar menú" onClick={() => toggleMenu(false)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </button>
        <a href="#tramites" onClick={() => toggleMenu(false)}>Trámites</a>
        <a href="#funcionalidades" onClick={() => toggleMenu(false)}>Funcionalidades</a>
        <a href="#planes" onClick={() => toggleMenu(false)}>Planes</a>
        <a href="#faq" onClick={() => toggleMenu(false)}>FAQ</a>
        <a
          href={whatsappLink}
          onClick={(e) => {
            toggleMenu(false);
            guardWhatsAppNavigation(e);
          }}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '20px', color: 'var(--accent)' }}
        >
          Pedi la demo →
        </a>
      </div>
    </>
  );
}
