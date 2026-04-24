import { Check } from 'lucide-react';
import { buildWhatsAppHref, guardWhatsAppNavigation, whatsAppPresets } from '../lib/whatsapp';
import { AnimatedContent } from './ui/AnimatedContent';

export const PricingSection = () => {
  return (
    <section id="planes" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[32px] md:text-[56px] font-medium text-[#171717] tracking-[-0.02em] text-center mb-16">
          Elegí el plan que se adapta a tu estudio
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#F7F7F7] rounded-[24px] p-8 border border-transparent hover:border-gray-200 transition-all flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-600 mb-6">Para profesionales independientes</p>
            <ul className="space-y-4 mb-8 flex-grow">
              {["1 usuario incluido", "Listado de clientes completo", "Reportes y estadísticas", "Mensajes automáticos a clientes", "Backups automáticos diarios"].map((f, i) => (
                <li key={i} className="flex items-center gap-3"><Check className="text-green-600" /> {f}</li>
              ))}
            </ul>
            <a href={buildWhatsAppHref(whatsAppPresets.plan('Starter'))} onClick={guardWhatsAppNavigation} className="block w-full text-center bg-gray-900 text-white py-3 rounded-xl font-bold">Elegir Starter</a>
          </div>
          <div className="bg-white rounded-[24px] p-8 border-2 border-green-600 shadow-lg flex flex-col">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block self-start">MÁS POPULAR</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Estudio</h3>
            <p className="text-gray-600 mb-6">Para equipos en crecimiento</p>
            <ul className="space-y-4 mb-8 flex-grow">
              {["Hasta 6 usuarios simultáneos", "Listado de clientes completo", "Reportes avanzados", "Mensajes automáticos", "Backups diarios", "Soporte prioritario", "Calendario de visitas", "Roles personalizados"].map((f, i) => (
                <li key={i} className="flex items-center gap-3"><Check className="text-green-600" /> {f}</li>
              ))}
            </ul>
            <a href={buildWhatsAppHref(whatsAppPresets.plan('Estudio'))} onClick={guardWhatsAppNavigation} className="block w-full text-center bg-green-600 text-white py-3 rounded-xl font-bold">Elegir Estudio</a>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-4 font-semibold text-gray-900">Funcionalidad</th>
                <th className="p-4 text-center text-gray-900">Starter</th>
                <th className="p-4 text-center text-gray-900">Estudio</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Expedientes Digitales", s: "✅", e: "✅" },
                { name: "Integración ARBA", s: "✅", e: "✅" },
                { name: "Portal de clientes", s: "✅", e: "✅" },
                { name: "Calendario de visitas", s: "❌", e: "✅" },
                { name: "Roles personalizados", s: "❌", e: "✅" },
                { name: "Soporte prioritario", s: "❌", e: "✅" }
              ].map((row, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="p-4 text-gray-600">{row.name}</td>
                  <td className="p-4 text-center">{row.s}</td>
                  <td className="p-4 text-center">{row.e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
