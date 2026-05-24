export default function TramitesSection() {
  const tramites = [
    {
      name: "Estado Parcelario",
      desc: "Constancia con nomenclatura completa y visado."
    },
    {
      name: "Mensura Particular",
      desc: "Mensuras urbanas y rurales con expediente, gabinete y campo."
    },
    {
      name: "Actualización de Mensura",
      desc: "Vigencias, modificaciones y reaprobaciones, sin rearmar desde cero."
    },
    {
      name: "Afectación PH",
      desc: "Propiedad horizontal con unidades funcionales y polígonos."
    },
    {
      name: "Amojonamiento",
      desc: "Hitos de campo, fechas de visita y gabinete asociados al expediente."
    },
    {
      name: "Unificación de Parcelas",
      desc: "Más de una partida, una sola parcela, sin pegar Excel."
    }
  ];

  return (
    <section className="section tramites-band" id="tramites">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Tus trámites en un mismo lugar</span>
          <h2 className="display h2" style={{ margin: "0 0 16px" }}>Habla el idioma de tu estudio.</h2>
          <p className="lead">No es un CRM genérico adaptado a la fuerza. Cada trámite, con su flujo, sus campos catastrales y sus estados propios.</p>
        </div>
        <div className="tramites-grid">
          {tramites.map((tramite) => (
            <div key={tramite.code} className="tramite">
              <span className="tramite-code">{tramite.code}</span>
              <span className="tramite-name">{tramite.name}</span>
              <p className="tramite-desc">{tramite.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
