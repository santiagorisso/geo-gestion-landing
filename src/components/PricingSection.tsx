import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { AnimatedContent } from './ui/AnimatedContent';

const PricingCard = ({ title, price, features, isPopular = false }: { title: string, price: number, features: string[], isPopular?: boolean }) => (
  <motion.div
    whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
    className={`bg-white p-6 md:p-8 rounded-3xl border ${isPopular ? 'border-green-600 shadow-xl' : 'border-gray-200 shadow-sm'}`}
  >
    {isPopular && <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Popular</span>}
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <div className="text-4xl font-bold text-gray-900 mb-6">${price}<span className="text-base font-normal text-gray-500">/mes</span></div>
    <ul className="space-y-4 mb-8">
      {features.map((feature: string, idx: number) => (
        <li key={idx} className="flex items-center text-gray-600">
          <Check className="w-5 h-5 text-green-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${isPopular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
      Elegir Plan
    </button>
  </motion.div>
);

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="planes" className="py-20 md:py-32 bg-[#F7F7F7]" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 20%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedContent>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8">Planes de precios</h2>
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={!isAnnual ? "font-bold" : "text-gray-500"}>Mensual</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-gray-300 rounded-full p-1 transition-colors relative"
            >
              <motion.div 
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 24 : 0 }}
              />
            </button>
            <span className={isAnnual ? "font-bold" : "text-gray-500"}>Anual <span className="text-green-600 text-xs font-bold ml-1">-20%</span></span>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedContent delay={0.2}>
            <PricingCard title="Starter" price={isAnnual ? 19 : 25} features={['Gestión básica', 'Hasta 5 usuarios', 'Soporte vía email']} />
          </AnimatedContent>
          <AnimatedContent delay={0.3}>
            <PricingCard title="Pro" price={isAnnual ? 49 : 60} isPopular features={['Todo lo de Starter', 'Usuarios ilimitados', 'Reportes avanzados', 'Soporte prioritario']} />
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <PricingCard title="Enterprise" price={isAnnual ? 99 : 120} features={['Todo lo de Pro', 'API dedicada', 'Soporte 24/7', 'Gestor de cuenta personal']} />
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
