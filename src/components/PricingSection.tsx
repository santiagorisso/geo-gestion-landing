import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { buildWhatsAppHref, guardWhatsAppNavigation, whatsAppPresets } from '../lib/whatsapp';
import { AnimatedContent } from './ui/AnimatedContent';

const PricingCard = ({
  plan,
  features,
  isPopular = false,
}: {
  plan: 'Starter' | 'Estudio';
  features: string[];
  isPopular?: boolean;
}) => (
  <motion.div
    whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
    className={`h-full flex flex-col bg-white p-6 md:p-8 rounded-3xl border ${isPopular ? 'border-green-600 shadow-xl' : 'border-gray-200 shadow-sm'}`}
  >
    {isPopular && <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Popular</span>}
    <h3 className="text-2xl font-bold text-gray-900 mb-6">{plan}</h3>
    <ul className="flex-1 space-y-4 mb-8 min-h-0">
      {features.map((feature: string, idx: number) => (
        <li key={idx} className="flex items-center text-gray-600">
          <Check className="w-5 h-5 text-green-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <a
      href={buildWhatsAppHref(whatsAppPresets.plan(plan))}
      onClick={guardWhatsAppNavigation}
      target="_blank"
      rel="noopener noreferrer"
      className={`self-start py-2 px-4 text-sm font-semibold rounded-lg transition-colors ${isPopular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
    >
      consultar
    </a>
  </motion.div>
);

export const PricingSection = () => {
  return (
    <section id="planes" className="py-20 md:py-32 bg-[#F7F7F7]" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 20%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedContent>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">Planes</h2>
        </AnimatedContent>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <AnimatedContent delay={0.2} className="h-full">
            <PricingCard
              plan="Starter"
              features={[
                'Único usuario',
                'Listado de clientes',
                'Reportes y estadísticas',
                'Mensajes automáticos',
                'Backups automáticos',
              ]}
            />
          </AnimatedContent>
          <AnimatedContent delay={0.3} className="h-full">
            <PricingCard
              plan="Estudio"
              isPopular
              features={[
                'Hasta 6 usuarios',
                'Listado de clientes',
                'Reportes y estadísticas',
                'Mensajes automáticos',
                'Backups automáticos',
                'Soporte prioritario',
                'Calendario de visitas',
                'Roles personalizados',
                'Prioridad a features beta a integrar',
              ]}
            />
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
