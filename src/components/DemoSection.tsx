export default function DemoSection() {
  const DEMO_URL = 'https://app.geogestion.online/auth/demo';

  return (
    <section className="section demo-section" id="demo">
      <div className="wrap">
        <div className="demo-card reveal">
          {/* Decorative glow */}
          <div className="demo-glow" aria-hidden="true" />

          <div className="demo-content">
            <span className="demo-badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              Explorar Sistema
            </span>

            <h2 className="display h3 demo-title">
              Conocé la plataforma<br />
              <em>sin registrarte.</em>
            </h2>

            <p className="demo-desc">
              ¿Querés conocer las herramientas de gestión? Probá nuestra Demo
              con un solo click, sin necesidad de registrarte. Accedé al
              dashboard completo y explorá expedientes, clientes y reportes en
              tiempo real.
            </p>

            <a
              href={DEMO_URL}
              className="btn demo-btn"
              id="demo-cta-btn"
            >
              {/* rocket_launch icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 15.2547C3.37 16.1847 2 17.5547 2 17.5547L4.62 20.1747C4.62 20.1747 5.96 18.7947 6.9 16.1347L6 15.2547Z" />
                <path d="M12.12 7.1C11.73 7.49 11.73 8.12 12.12 8.51C12.51 8.9 13.14 8.9 13.53 8.51C14.3 7.74 15.71 6.91 17.21 6.91C17.98 6.91 18.72 7.16 19.31 7.62C19.83 8.03 20.22 8.63 20.35 9.36C20.61 10.89 19.82 12.6 18.46 14.28C16.82 16.31 14.49 18.04 12.91 19.07C12.35 19.42 11.65 19.42 11.09 19.07C9.51 18.04 7.18 16.31 5.54 14.28C5.07 13.71 4.67 13.13 4.35 12.55L3.5 13.4C3.88 14.05 4.33 14.7 4.85 15.33C6.67 17.56 9.23 19.45 10.91 20.51C11.57 20.93 12.43 20.93 13.09 20.51C14.77 19.45 17.33 17.56 19.15 15.33C20.77 13.33 21.71 11.22 21.33 9.12C21.14 8.06 20.57 7.16 19.78 6.52C18.97 5.87 17.95 5.51 16.91 5.51C14.91 5.51 13.22 6.54 12.12 7.1Z" />
                <path d="M14.59 2.59C14.21 2.21 13.7 2 13.17 2H10.83C10.3 2 9.79 2.21 9.41 2.59L2 10V10.5L3.45 9.04C3.17 10.03 3.15 11.12 3.42 12.22L9.41 6.24C9.41 6.24 10.53 4 12 4C13.47 4 14.59 6.24 14.59 6.24L20.58 12.22C20.85 11.12 20.83 10.03 20.55 9.04L22 10.5V10L14.59 2.59Z" />
              </svg>
              Probar Demo
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>

            <p className="demo-footnote">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z" />
              </svg>
              Sin registro · Sin compromiso · Datos de ejemplo
            </p>
          </div>

          {/* Decorative terminal/app illustration */}
          <div className="demo-visual" aria-hidden="true">
            <div className="demo-terminal">
              <div className="demo-terminal-dots">
                <span /><span /><span />
              </div>
              <div className="demo-terminal-lines">
                <div className="demo-line demo-line-1" />
                <div className="demo-line demo-line-2" />
                <div className="demo-line demo-line-3" />
                <div className="demo-line demo-line-4" />
                <div className="demo-line demo-line-5" />
              </div>
              <div className="demo-terminal-cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
