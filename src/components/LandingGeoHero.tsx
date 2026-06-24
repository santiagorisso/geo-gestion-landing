import buscadorImg from '../assets/buscador_publico.png';
import { buildWhatsAppHref, guardWhatsAppNavigation, whatsAppPresets } from '../lib/whatsapp';

export default function LandingGeoHero() {
  const whatsappLink = buildWhatsAppHref(whatsAppPresets.demo);

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">para agrimensores, por agrimensores</span>
          <h1 className="display h1">
            El software para estudios de agrimensura,<br />
            <em>con ARBA integrado.</em>
          </h1>
          <p className="lead">
            Tus expedientes, clientes y visitas en una sola plataforma. Nomenclatura catastral autocompleta,
            estados del trámite claros y reportes que tu estudio ya entiende.
          </p>
          <div className="hero-actions">
            <a
              href={whatsappLink}
              className="btn btn-primary"
              onClick={guardWhatsAppNavigation}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedi la demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#planes" className="btn btn-ghost">Ver planes</a>
          </div>

          {/* <dl className="hero-meta">
            <div>
              <dt>Integración</dt>
              <dd>ARBA nativa</dd>
            </div>
            <div>
              <dt>Soportes</dt>
              <dd>6 tipos de trámite</dd>
            </div>
            <div>
              <dt>Estados</dt>
              <dd>5 del flujo catastral</dd>
            </div>
            <div>
              <dt>Equipo</dt>
              <dd>Hecho en Mar del Plata</dd>
            </div>
          </dl> */}
        </div>

        <div className="wrap">
          <figure className="hero-screenshot reveal">
            <img
              src={buscadorImg}
              alt="Buscador de Geo-Gestión: búsqueda de expedientes por partida, cliente o tipo de trámite"
              width="1240"
              height="780"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
          <p className="hero-caption reveal" style={{ animationDelay: '0.2s' }}>
            Basta de la fricción entre cliente y estudio por mensajes consultando el estado del trámite. Con un código único que le brindás al cliente, ¡él mismo puede corroborar cómo viene su trámite!
          </p>
        </div>
      </section>

      {/* ============== TRUST ============== */}
       <div className="trust">
        <div className="wrap trust-inner">
          {/*<span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Hecho en Mar del Plata
          </span>*/}
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            Integración con ARBA
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>
            Copias de seguridad diarias
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z"/></svg>
            Datos en servidores seguros
          </span>
        </div>
      </div>
    </>
  );
}
