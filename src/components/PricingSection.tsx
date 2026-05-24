import { buildWhatsAppHref, guardWhatsAppNavigation, whatsAppPresets } from '../lib/whatsapp';

export const PricingSection = () => {
  const starterLink = buildWhatsAppHref(whatsAppPresets['plan-starter']);
  const estudioLink = buildWhatsAppHref(whatsAppPresets['plan-estudio']);

  return (
    <section className="section" id="planes">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Precios</span>
          <h2 className="display h2">Planes a la medida de tu estudio.</h2>
          <p className="lead">Goberná tus expedientes sin importar el tamaño de tu estructura. Podés empezar hoy mismo.</p>
        </div>

        <div className="pricing">
          <div className="plan">
            <h3 className="plan-name">Starter</h3>
            <p className="plan-tag">Ideal para agrimensores independientes.</p>
            <div className="plan-price-block">
              <span className="plan-price">$20.000</span>
              <span className="label">/ mes</span>
            </div>
            <ul>
              <li>
                <span className="tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                Hasta 2 usuarios activos
              </li>
              <li>
                <span className="tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                Trámites y clientes ilimitados
              </li>
              <li>
                <span className="tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                Integración ARBA nativa
              </li>
              <li>
                <span className="tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                Calendario de visitas semanal
              </li>
            </ul>
            <a
              href={starterLink}
              onClick={guardWhatsAppNavigation}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost plan-cta"
            >
              Elegir plan Starter
            </a>
          </div>

          <div className="plan featured">
            <span className="plan-badge">Recomendado</span>
            <h3 className="plan-name">Estudio</h3>
            <p className="plan-tag">Para estudios con equipos de trabajo de campo y gabinete.</p>
            <div className="plan-price-block">
              <span className="plan-price">$35.000</span>
              <span className="label">/ mes</span>
            </div>
            <ul>
              <li>
                <span className="tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                Hasta 6 usuarios con roles diferenciados
              </li>
              <li>
                <span className="tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                Trámites y clientes ilimitados
              </li>
              <li>
                <span className="tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                Integración ARBA nativa
              </li>
              <li>
                <span className="tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                Calendario de visitas semanal y Kanban
              </li>
              <li>
                <span className="tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
                Reportes avanzados de facturación y rendimiento
              </li>
            </ul>
            <a
              href={estudioLink}
              onClick={guardWhatsAppNavigation}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary plan-cta"
            >
              Elegir plan Estudio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
