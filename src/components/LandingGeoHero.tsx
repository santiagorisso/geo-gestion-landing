"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, FileText, MapPin, Menu, X } from "lucide-react";

export default function LandingGeoHero({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <section
        className={"w-full min-h-screen pt-8 pb-0 px-6 overflow-hidden font-sans " + (className || "")}
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #E8F5E9 100%)" }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Navigation Header */}
          <header className="flex justify-between md:justify-center items-center mb-16 md:mb-24">
            <div className="md:hidden font-bold text-xl text-green-700 z-50">Geo-Gestión</div>
            <div className="hidden bg-white/80 backdrop-blur-md border border-gray-100 rounded-full pl-8 pr-3 py-3 md:flex items-center gap-12 shadow-sm">
              <div className="flex items-center font-bold text-xl text-green-700">Geo-Gestión</div>
              <nav className="flex items-center gap-8 text-[15px] font-medium text-gray-600">
                <a href="#" className="hover:text-green-800 transition-colors">Inicio</a>
                <a href="#funcionalidades" className="hover:text-green-800 transition-colors">Funcionalidades</a>
                <a href="#planes" className="hover:text-green-800 transition-colors">Planes</a>
              </nav>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full text-[14px] font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20">
                Pedi una demo!
              </button>
            </div>
            <button className="md:hidden z-50 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </header>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
              >
                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Inicio</a>
                <a href="#funcionalidades" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Funcionalidades</a>
                <a href="#planes" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Planes</a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Content */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[40px] md:text-[72px] font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight"
            >
              El gestor de trabajos que<br className="hidden md:block" />tu estudio necesitaba
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-gray-500 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Expedientes, clientes y pagos en una sola plataforma, sin papeles de por medio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-green-600 text-white px-8 md:px-10 py-4 rounded-full font-bold text-[16px] md:text-[18px] hover:bg-green-700 transition-colors shadow-lg shadow-green-500/30">
                Solicita una demo gratis
              </button>
              <a href="#planes" className="bg-white text-gray-800 px-8 md:px-10 py-4 rounded-full font-bold text-[16px] md:text-[18px] hover:bg-gray-100 transition-colors border border-gray-200 text-center">
                Ver planes
              </a>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="flex flex-wrap justify-center gap-[20px] mt-16 md:mt-24">
            {[
              { icon: FileText, title: "Expedientes Digitales", desc: "Trazabilidad real de todos tus trabajos." },
              { icon: MapPin, title: "Integración ARBA", desc: "Consulta a catastro para autocompletar." },
              { icon: CheckCircle2, title: "Portal de Clientes", desc: "Tus clientes revisan el estado del tramite." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="w-full max-w-[350px] bg-white rounded-[24px] p-8 shadow-sm border border-gray-100"
              >
                <item.icon size={32} className="text-green-600 mb-6" />
                <h3 className="text-[20px] font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[15px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
