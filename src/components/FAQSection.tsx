import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { buildWhatsAppHref, whatsAppPresets } from '../lib/whatsapp';

const faqs = [
  {
    q: "¿Qué es Geo Gestión?",
    a: "Es una plataforma digital diseñada para que estudios profesionales centralicen la gestión de expedientes, clientes y pagos, eliminando el uso de papel y optimizando la productividad diaria."
  },
  {
    q: "¿A quién está dirigida la plataforma?",
    a: "A estudios profesionales como agrimensores, arquitectos y gestores que necesitan un control riguroso, trazabilidad de sus trámites y una comunicación profesional con sus clientes."
  },
  {
    q: "¿Cómo funciona la integración con ARBA?",
    a: "La plataforma permite consultar y obtener datos catastrales directamente desde el servidor de ARBA, permitiéndote autocompletar expedientes en segundos y eliminando errores de carga manual."
  },
  {
    q: "¿Qué beneficios aporta el Portal de Clientes?",
    a: "Brinda transparencia total. Tus clientes pueden consultar el estado de sus trámites en cualquier momento desde un portal exclusivo, reduciendo la necesidad de que te contacten para pedir actualizaciones."
  },
  {
    q: "¿Puedo usar la plataforma con mi equipo de trabajo?",
    a: "Sí. El plan Estudio permite gestionar hasta 6 usuarios, asignando roles personalizados para controlar el acceso a la información según la jerarquía de cada miembro del equipo."
  },
  {
    q: "¿Qué herramientas de análisis incluye el sistema?",
    a: "Incluye un dashboard interactivo que centraliza reportes y estadísticas, permitiéndote medir el rendimiento de tu estudio y tomar decisiones basadas en datos reales."
  },
  {
    q: "¿Es seguro almacenar mis expedientes en la nube?",
    a: "Totalmente. Tu información está protegida con backups automáticos constantes, garantizando que todos tus datos estén resguardados, organizados y disponibles únicamente para ti."
  },
  {
    q: "¿Cómo se notifican los cambios en los trámites a los clientes?",
    a: "El sistema automatiza el envío de mensajes a través de WhatsApp en momentos clave, asegurando que tus clientes siempre estén informados sin que tengas que redactar mensajes manualmente."
  },
  {
    q: "¿Cómo puedo solicitar una prueba o comenzar a usar Geo Gestión?",
    a: (
      <>
        Es muy simple: puedes solicitar una demo personalizada o consultar por nuestros planes directamente a través del botón de WhatsApp que encontrarás en toda nuestra plataforma, o{' '}
        <a 
          href={buildWhatsAppHref(whatsAppPresets.demo)} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 font-semibold hover:underline"
        >
          haciendo clic acá
        </a>{' '}
        podés pedir la demo.
      </>
    )
  }
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
