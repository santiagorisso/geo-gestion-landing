import dashboardImg from '../assets/dashboard.png';
import trabajosImg from '../assets/trabajos.png';
import clientesImg from '../assets/clientes.png';
import reportesClientesImg from '../assets/reportes_clientes.png';
import reporteFactImg from '../assets/reportes.png';
import calendarioImg from '../assets/calendario.png';

const Tick = () => (
  <span className="tick">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  </span>
);

export default function PillarsSection() {
  return (
    <>
      {/* ============== 1 — DASHBOARD ============== */}
      <section className="section">
        <div className="wrap">
          <div className="pillar">
            <div className="pillar-text">
              <span className="eyebrow">Dashboard</span>
              <h2 className="display h2">Todo en un mismo lugar.</h2>
              <p>
                Al entrar a Geo-Gestión, tu pantalla de inicio ya te dice todo:
                cuántos expedientes están sin actividad, cuáles están en proceso
                y cuántos se finalizaron. Sin navegar, sin buscar, sin preguntar.
              </p>
              <ul className="pillar-list">
                <li>
                  <Tick />
                  Panel centralizado con estado en tiempo real.
                </li>
                <li>
                  <Tick />
                  Acceso directo a los expedientes prioritarios.
                </li>
                <li>
                  <Tick />
                  Resumen de visitas y actividad del día.
                </li>
              </ul>
            </div>
            <div className="pillar-media reveal">
              <img
                src={dashboardImg}
                alt="Dashboard de Geo-Gestión: panel con expedientes Sin actividad, En proceso y Finalizados"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============== 2 — LISTADO DE TRABAJOS ============== */}
      <section className="section" style={{ paddingTop: "32px" }}>
        <div className="wrap">
          <div className="pillar reverse">
            <div className="pillar-text">
              <span className="eyebrow">Listado de trabajos</span>
              <h2 className="display h2">Tus trabajos, en un mismo lugar.</h2>
              <p>
                Todos los expedientes activos, ordenados y filtrables.
                Encontrá cualquier trámite por cliente, tipo, estado o partida
                catastral sin tener que revisar carpetas ni planillas.
              </p>
              <ul className="pillar-list">
                <li>
                  <Tick />
                  Listado completo con filtros por estado y tipo de trámite.
                </li>
                <li>
                  <Tick />
                  Búsqueda por partida inmobiliaria, cliente o número de expediente.
                </li>
                <li>
                  <Tick />
                  Vista rápida de datos catastrales sin abrir el expediente.
                </li>
              </ul>
            </div>
            <div className="pillar-media reveal">
              <img
                src={trabajosImg}
                alt="Listado de Trabajos Activos en Geo-Gestión con estados y detalle de expedientes"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============== 3 — NOMENCLATURAS SIN ERRORES ============== */}
      <section className="section" style={{ paddingTop: "32px" }}>
        <div className="wrap">
          <div className="pillar">
            <div className="pillar-text">
              <span className="eyebrow">Nomenclaturas sin errores</span>
              <h2 className="display h2">ARBA sin tipear dos veces.</h2>
              <p>
                Introducí la partida inmobiliaria y el sistema completa la nomenclatura catastral.
                Sin abrir otra pestaña, sin cargar el mismo dato dos veces, sin errores de transcripción que
                terminan en una observación.
              </p>
              <ul className="pillar-list">
                <li>
                  <Tick />
                  Autocompletado catastral por partida inmobiliaria.
                </li>
                <li>
                  <Tick />
                  Validación en tiempo real con la base ARBA.
                </li>
                <li>
                  <Tick />
                  Disponible en todos los planes, sin extra.
                </li>
              </ul>
            </div>
            <div className="pillar-media reveal" style={{ background: "var(--paper)", padding: "28px", boxShadow: "var(--shadow-soft)" }}>
              <div className="arba-card" style={{ boxShadow: "none" }}>
                <h4>Nomenclatura catastral</h4>
                <div className="arba-partida">
                  <div>
                    <small>Partida inmobiliaria</small><br />
                    <span>45 — 276546</span>
                  </div>
                  <span className="arba-pill">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    ARBA
                  </span>
                </div>
                <dl style={{ margin: 0 }}>
                  <div className="arba-row"><dt>Circ.</dt><dd>IV</dd></div>
                  <div className="arba-row"><dt>Sección</dt><dd>13</dd></div>
                  <div className="arba-row"><dt>Manzana</dt><dd>44A</dd></div>
                  <div className="arba-row"><dt>Parcela</dt><dd>7</dd></div>
                  <div className="arba-row"><dt>Tipo</dt><dd>Mensura Particular</dd></div>
                </dl>
              </div>
              <p className="small mono" style={{ margin: "16px 4px 0", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                → Mismo dato, una sola vez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 4 — FLUJOS DEL TRÁMITE ============== */}
      <section className="section" style={{ paddingTop: "32px" }}>
        <div className="wrap">
          <div className="section-head" style={{ maxWidth: "720px" }}>
            <span className="eyebrow">Flujos del trámite</span>
            <h2 className="display h2">Cinco estados. Cero ambigüedad.</h2>
            <p className="lead">"¿En qué estado está el trabajo de Carrasco?" deja de ser una pregunta. Cada expediente avanza por estados claros que todo el estudio entiende igual.</p>
          </div>

          <div className="flow" aria-label="Flujo de estados del expediente">
            <ol className="flow-track" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li className="flow-step">
                <span className="flow-num">1</span>
                <div>
                  <div className="flow-name">Solicitado</div>
                  <p className="flow-desc">Cliente da el alta. Partida y datos básicos.</p>
                </div>
              </li>
              <li className="flow-step">
                <span className="flow-num">2</span>
                <div>
                  <div className="flow-name">En Campo</div>
                  <p className="flow-desc">Mediciones, visita programada y registro en planilla.</p>
                </div>
              </li>
              <li className="flow-step is-current">
                <span className="flow-num">3</span>
                <div>
                  <div className="flow-name">Gabinete</div>
                  <p className="flow-desc">Procesamiento, cálculo y armado del expediente.</p>
                </div>
              </li>
              <li className="flow-step">
                <span className="flow-num">4</span>
                <div>
                  <div className="flow-name">Para Visar</div>
                  <p className="flow-desc">Listo para presentación y visado catastral.</p>
                </div>
              </li>
              <li className="flow-step">
                <span className="flow-num">5</span>
                <div>
                  <div className="flow-name">Finalizado</div>
                  <p className="flow-desc">Aprobado, entregado y notificado al cliente.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ============== 5 — CLIENTES Y SU LISTADO ============== */}
      <section className="section" style={{ paddingTop: "32px" }}>
        <div className="wrap">
          <div className="pillar reverse">
            <div className="pillar-text">
              <span className="eyebrow">Clientes y su listado</span>
              <h2 className="display h2">Cada cliente, todo su historial.</h2>
              <p>
                Persona física o empresa, con CUIT, contacto, último trabajo solicitado, notas y trabajos abiertos.
                Todo en un ficha unificada que no requiere buscar en otro lado.
              </p>
              <ul className="pillar-list">
                <li>
                  <Tick />
                  Listado con búsqueda por nombre, CUIT o email.
                </li>
                <li>
                  <Tick />
                  Historial completo de trámites por cliente.
                </li>
                <li>
                  <Tick />
                  Notas y estado del último trabajo en un vistazo.
                </li>
              </ul>
            </div>
            <div className="pillar-media reveal">
              <img
                src={clientesImg}
                alt="Listado de Clientes en Geo-Gestión con detalle de un cliente abierto: contacto, CUIT, último trabajo solicitado y notas"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============== 6 — REPORTES ============== */}
      <section className="section" style={{ paddingTop: "32px" }}>
        <div className="wrap">
          <div className="pillar">
            <div className="pillar-text">
              <span className="eyebrow">Reportes</span>
              <h2 className="display h2">Reportes financieros y de clientes.<br />Cada reporte, una decisión.</h2>
              <p>
                Sabés cuánto facturaste en el mes, quién es tu cliente más activo
                y qué tipos de trámite dominan tu cartera. Sin exportar planillas,
                sin cruzar datos a mano.
              </p>
              <ul className="pillar-list">
                <li>
                  <Tick />
                  Ranking de clientes por cantidad de trabajos.
                </li>
                <li>
                  <Tick />
                  Reportes de facturación por período.
                </li>
                <li>
                  <Tick />
                  Estadísticas de expedientes y tipos de trámite.
                </li>
              </ul>
            </div>
            <div className="pillar-media reveal" style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "20px", background: "var(--paper)" }}>
              <figure style={{ margin: 0, borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--hairline)" }}>
                <img
                  src={reportesClientesImg}
                  alt="Vista de Reportes con estadísticas de clientes: ranking de Más trabajos, Menos trabajos y tabla de Ranking de clientes"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", display: "block" }}
                />
              </figure>
              <figure style={{ margin: 0, borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--hairline)" }}>
                <img
                  src={reporteFactImg}
                  alt="Reporte de facturación en Geo-Gestión con estadísticas financieras por período"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", display: "block" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 7 — ORGANIZADOR DE VISITAS ============== */}
      <section className="section" style={{ paddingTop: "32px" }}>
        <div className="wrap">
          <div className="pillar reverse">
            <div className="pillar-text">
              <span className="eyebrow">Organizador de visitas</span>
              <h2 className="display h2">Visitas, sin pisarse.</h2>
              <p>
                Una vista por semana, con cada visita atada al expediente, el cliente
                y el tipo de trámite. Asignás horario en dos clicks, evitás superposiciones
                y mantenés al equipo de campo alineado.
              </p>
              <ul className="pillar-list">
                <li>
                  <Tick />
                  Calendario semanal con visitas asignadas por expediente.
                </li>
                <li>
                  <Tick />
                  Control de superposiciones de horarios en campo.
                </li>
                <li>
                  <Tick />
                  Vínculo directo entre la visita y el expediente catastral.
                </li>
              </ul>
            </div>
            <div className="pillar-media reveal">
              <img
                src={calendarioImg}
                alt="Calendario semanal de Geo-Gestión con visitas asignadas: Alberto Carrasco (Estado Parcelario, 10:00) y Desarrollos Sur SRL (Afectación PH, 11:00)"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
