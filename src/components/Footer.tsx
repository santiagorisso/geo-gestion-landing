import { buildWhatsAppHref, guardWhatsAppNavigation, whatsAppPresets } from '../lib/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const demoLink = buildWhatsAppHref(whatsAppPresets.demo);
  const enterpriseLink = buildWhatsAppHref(whatsAppPresets.enterprise);

  return (
    <footer>
      <div className="wrap foot-grid">
        <div>
          <a href="#" className="brand" style={{ marginBottom: "12px" }} aria-label="Geo-Gestión, inicio">
            <span className="brand-mark" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 20l6-12 4 8 3-5 5 9"/>
              </svg>
            </span>
            Geo-Gestión
          </a>
          <p style={{ margin: 0, fontSize: "13.5px", maxWidth: "28ch", lineHeight: 1.5, color: "var(--muted)" }}>
            El gestor de trabajos diseñado para agrimensores y gestores en Buenos Aires.
          </p>
        </div>
        <div>
          <h5>Navegación</h5>
          <ul>
            <li><a href="#tramites">Trámites</a></li>
            <li><a href="#funcionalidades">Funcionalidades</a></li>
            <li><a href="#planes">Planes</a></li>
            <li><a href="#faq">Preguntas frecuentes</a></li>
          </ul>
        </div>
        <div>
          <h5>Contacto y Legales</h5>
          <ul>
            <li>
              <a
                href={demoLink}
                onClick={guardWhatsAppNavigation}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Demo
              </a>
            </li>
            <li>
              <a
                href={enterpriseLink}
                onClick={guardWhatsAppNavigation}
                target="_blank"
                rel="noopener noreferrer"
              >
                Soporte Corporativo
              </a>
            </li>
            <li><a href="mailto:soportegeogestion@gmail.com">Envianos un email</a></li>
            <li><span style={{ display: "inline-block", paddingTop: "4px" }}>Mar del Plata, Argentina</span></li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-base">
        <span>© <span id="year">{currentYear}</span> Geo-Gestión. Todos los derechos reservados.</span>
        <span>Hecho para agrimensores con criterio.</span>
      </div>
    </footer>
  );
}
