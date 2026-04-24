import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedContent } from './ui/AnimatedContent';

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Necesito instalar algo en mi computadora?",
      a: "No. Geo-Gestión es una plataforma 100% web. Solo necesitás un navegador y conexión a internet. Funciona desde cualquier dispositivo: computadora de escritorio, notebook, tablet o celular."
    },
    {
      q: "¿Mis datos están seguros?",
      a: "Sí. La plataforma cuenta con backups automáticos diarios y toda la información se almacena en servidores seguros. Tus datos y los de tus clientes están protegidos en todo momento."
    },
    {
      q: "¿Puedo migrar mi base de clientes existente?",
      a: "Sí. Al momento de dar de alta tu cuenta, el equipo de Geo-Gestión te acompaña en el proceso de migración de datos para que la transición sea ordenada y sin pérdida de información."
    },
    {
      q: "¿Qué pasa si necesito más de 6 usuarios?",
      a: "Si tu estudio supera los 6 usuarios del plan Estudio, podés consultar directamente con el equipo para explorar opciones personalizadas adaptadas al tamaño de tu organización."
    },
    {
      q: "¿Cómo funciona la integración con ARBA?",
      a: "La integración está activa por defecto en todos los planes. Al ingresar una partida catastral, el sistema consulta automáticamente a ARBA y completa los datos del inmueble sin intervención manual."
    },
    {
      q: "¿Puedo probar la plataforma antes de contratar?",
      a: "Sí. Podés solicitar una demo gratuita con el equipo de Geo-Gestión y conocer la plataforma en profundidad antes de tomar ninguna decisión. Sin compromisos."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedContent delay={0.2}>
          <h2 className="text-[32px] md:text-[56px] font-medium text-[#171717] tracking-[-0.02em] text-center mb-16">
            Preguntas frecuentes
          </h2>
        </AnimatedContent>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedContent key={index} delay={0.3 + (index * 0.1)}>
              <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-8 text-left flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{faq.q}</h3>
                  <ChevronDown className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="px-8 pb-8 text-gray-600 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};
