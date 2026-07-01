import { useEffect, useState } from 'react';
import BrandMark from './BrandMark';

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

  return (
    <>
      <header className={`nav ${isScrolled ? 'scrolled' : ''}`} id="nav">
        <div className="wrap nav-inner">
          <a href="#" className="brand" aria-label="Geo-Gestión, inicio">
            <span className="brand-mark" aria-hidden="true">
              <BrandMark />
            </span>
            Geo-Gestión
          </a>
          <nav className="nav-links" aria-label="Principal">
            <a href="#tramites">Trámites</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#planes">Planes</a>
            <a href="#faq">FAQ</a>
          </nav>
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
      </div>
    </>
  );
}
