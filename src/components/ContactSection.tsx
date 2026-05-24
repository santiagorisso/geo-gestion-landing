import { buildWhatsAppHref, guardWhatsAppNavigation, whatsAppPresets } from '../lib/whatsapp';

export default function ContactSection() {
  const whatsappLink = buildWhatsAppHref(whatsAppPresets.demo);

  return (
    <section className="section" id="contacto">
      <div className="wrap">
        <div className="final-cta">
          <h2 className="display h2">Goberná tus expedientes hoy.</h2>
          <p>Consultá por migración de datos de tu estudio, demostraciones en vivo o dudas comerciales. Te contestamos en minutos.</p>
          <a
            href={whatsappLink}
            onClick={guardWhatsAppNavigation}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ marginRight: "2px" }}>
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
