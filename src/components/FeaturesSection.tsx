
export default function FeaturesSection() {
  return (
    <>
      {/* ============== FEATURES ============== */}
      <section className="section" id="funcionalidades" style={{ paddingTop: "64px" }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"> Que vas a ver en una demo?</span>
            <h2 className="display h2">Lo que usás todos los días.</h2>
          </div>

          <div className="features">
            <article className="feature">
              <span className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="7" height="9" rx="1.5"/>
                  <rect x="14" y="3" width="7" height="5" rx="1.5"/>
                  <rect x="14" y="12" width="7" height="9" rx="1.5"/>
                  <rect x="3" y="16" width="7" height="5" rx="1.5"/>
                </svg>
              </span>
              <h3>Dashboard interactivo</h3>
              <p>Expedientes sin actividad, en proceso y finalizados, todos en un panel. Priorizá sin tener que buscar.</p>
            </article>

            <article className="feature">
              <span className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </span>
              <h3>Roles personalizados</h3>
              <p>Permisos por integrante. Cada quien ve lo que tiene que ver, ni más ni menos.</p>
            </article>

            <article className="feature">
              <span className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </span>
              <h3>Mensajes automáticos</h3>
              <p>El cliente se entera cuando su trámite se finaliza. Bajan las consultas, sube la confianza.</p>
            </article>

            <article className="feature">
              <span className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
              </span>
              <h3>Calendario de visitas</h3>
              <p>Kanban + agenda semanal. Asignás hora, evitás superposiciones, mantenés al equipo alineado.</p>
            </article>

            <article className="feature">
              <span className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 3v18h18"/>
                  <path d="M7 14l4-4 4 4 5-7"/>
                </svg>
              </span>
              <h3>Reportes y estadísticas</h3>
              <p>Ranking de clientes, trabajos por período, facturación. Decisiones con datos reales.</p>
            </article>

            <article className="feature">
              <span className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  <path d="M3 12h18"/>
                  <path d="M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>
                </svg>
              </span>
              <h3>100% web</h3>
              <p>Funciona desde la oficina, el estudio o el campo. Solo necesitás navegador.</p>
            </article>
          </div>
        </div>
      </section>

    </>
  );
}
