import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import dashboardImg from '../assets/dashboard.png';
import buscadorImg from '../assets/buscador.png';
import trabajosImg from '../assets/trabajos.png';
import clientesImg from '../assets/clientes.png';
import calendarioImg from '../assets/calendario.png';
import reportesClientesImg from '../assets/reportes - clientes.png';
import reportesFactImg from '../assets/reporte-fact.png';

const slides = [
  {
    title: "Dashboard Central",
    desc: "Visualizá todos tus expedientes y estados en un solo panel intuitivo.",
    image: dashboardImg
  },
  {
    title: "Buscador Inteligente",
    desc: "Encontrá rápidamente cualquier información con nuestro buscador avanzado.",
    image: buscadorImg
  },
  {
    title: "Gestión de Trabajos",
    desc: "Gestioná tus trabajos de forma eficiente desde la plataforma.",
    image: trabajosImg
  },
  {
    title: "Gestión de Clientes",
    desc: "Mantené toda la información de tus clientes organizada y accesible.",
    image: clientesImg
  },
  {
    title: "Calendario de Actividades",
    desc: "Coordiná visitas y plazos sin errores ni superposiciones.",
    image: calendarioImg
  },
  {
    title: "Reportes de Clientes",
    desc: "Accedé a reportes detallados de tus clientes en un instante.",
    image: reportesClientesImg
  },
  {
    title: "Reportes de Facturación",
    desc: "Controlá tu facturación y reportes financieros con total claridad.",
    image: reportesFactImg
  }
];

export default function AppScreenshotCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="w-full pt-20 pb-0 bg-transparent">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="relative flex items-center justify-center">
          <button onClick={prev} className="absolute left-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition">
            <ChevronLeft size={24} />
          </button>

          <div className="w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden relative shadow-2xl bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col items-center justify-center p-0"
              >
                <img 
                  src={slides[index].image} 
                  alt={slides[index].title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 pt-24 pb-8 px-8 bg-gradient-to-t from-black/95 via-black/20 to-transparent text-white text-center">
                  <h3 className="text-[24px] font-medium mb-2">{slides[index].title}</h3>
                  <p className="text-[16px] text-gray-200">{slides[index].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={next} className="absolute right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
