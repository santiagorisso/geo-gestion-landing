import { useState, useRef } from "react";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Cómo funciona la integración con ARBA?",
      a: "Geo-Gestión se conecta directamente a los servicios web de ARBA. Cuando cargás una partida inmobiliaria, el sistema consulta los servidores catastrales oficiales en tiempo real y autocompleta los datos de nomenclatura (circunscripción, sección, manzana, parcela) en la ficha del expediente. Esto elimina el tipeo manual y previene observaciones en las presentaciones."
    },
    {
      q: "¿Tengo que instalar algún programa en mi computadora?",
      a: "No. Geo-Gestión es una plataforma 100% web. Podés acceder desde cualquier computadora, notebook, tablet o celular con conexión a internet y un navegador moderno (Chrome, Safari, Firefox, Edge). No requiere instalaciones, actualizaciones ni mantenimiento técnico de tu parte."
    },
    {
      q: "¿Mis datos están seguros y respaldados?",
      a: "Absolutamente. Toda la información viaja cifrada mediante protocolos SSL/TLS (HTTPS) de nivel bancario. Hospedamos la plataforma en servidores redundantes de alta seguridad y realizamos copias de respaldo (backups) automáticas completas cada 24 horas, garantizando que nunca pierdas tu historial de trabajos ni clientes."
    },
    {
      q: "¿Hay un límite de expedientes o clientes que puedo cargar?",
      a: "No. Todos nuestros planes permiten la carga ilimitada de expedientes, trámites catastrales, parcelas y clientes en la base de datos. La única diferencia entre el plan Starter y el plan Estudio es la cantidad de usuarios del equipo que pueden acceder a la plataforma y las funciones avanzadas de permisos y reportes."
    },
    {
      q: "¿Qué pasa si mi estudio tiene más de 6 usuarios?",
      a: "Ofrecemos planes a medida para estudios grandes y corporativos con requerimientos especiales de integración, volumen o cantidad de accesos. Escribinos por WhatsApp seleccionando la consulta corporativa y diseñamos un presupuesto personalizado adaptado a las necesidades de tu estructura."
    }
  ];

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="display h2">Todo lo que querés saber.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <FAQItem
                key={index}
                q={faq.q}
                a={faq.a}
                isOpen={isOpen}
                onClick={() => setActiveIndex(isOpen ? null : index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ q, a, isOpen, onClick }: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        className="faq-q"
        aria-expanded={isOpen}
        onClick={onClick}
      >
        {q}
        <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div
        className="faq-a"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px'
        }}
      >
        <div className="faq-a-inner" ref={contentRef}>
          <p style={{ margin: 0 }}>{a}</p>
        </div>
      </div>
    </div>
  );
}
