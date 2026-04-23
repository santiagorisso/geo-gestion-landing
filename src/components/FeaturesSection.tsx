import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  MessageSquareText, 
  CalendarDays, 
  BarChart3,
  User 
} from "lucide-react";
import { AnimatedContent } from './ui/AnimatedContent';

export default function FeaturesSection() {
  const iconBoxShadow = "shadow-[0_1px_1px_-0.5px_rgba(23,23,23,0.06),0_0_0_1px_rgba(23,23,23,0.08),0_1px_1px_-0.5px_rgba(23,23,23,0.04),0_3px_3px_-1.5px_rgba(23,23,23,0.04),0_6px_6px_-3px_rgba(23,23,23,0.04),0_10px_10px_-5px_rgba(23,23,23,0.04),0_20px_20px_-10px_rgba(23,23,23,0.04)]";

  const features = [
    { icon: LayoutDashboard, title: "Dashboard Interactivo", desc: "Obtené un resumen claro y en tiempo real de todos tus expedientes y el estado de tu gestión." },
    { icon: Users, title: "Roles Personalizados", desc: "Gestioná usuarios con accesos específicos para proteger la información sensible de tu estudio." },
    { icon: User, title: "Listado de Clientes", desc: "Accedé de forma rápida a toda la base de datos de tus clientes con sus detalles actualizados." },
    { icon: MessageSquareText, title: "Mensajes Automáticos", desc: "Notificá a tus clientes automáticamente apenas se finalice su trámite." },
    { icon: CalendarDays, title: "Calendario de Visitas", desc: "Coordiná visitas de forma eficiente con un calendario interactivo integrado." },
    { icon: BarChart3, title: "Reportes y Estadísticas", desc: "Analizá el rendimiento de tu estudio y seguí el comportamiento de tus clientes." }
  ];

  return (
    <section id="funcionalidades" className="w-full bg-white py-20 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #E8F5E9 0%, #FFFFFF 20%)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-12">
          <AnimatedContent delay={0.1}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-[8px] bg-[#F7F7F7] mb-6">
              <span className="text-[14px] font-medium text-[#5C5C5C]">Funcionalidades</span>
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.2}>
            <h2 className="text-[32px] md:text-[56px] leading-[1.1] font-medium text-[#171717] tracking-[-0.02em] max-w-[800px]">
              Todo lo que tu estudio necesita para gestionar mejor
            </h2>
          </AnimatedContent>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <AnimatedContent key={i} delay={0.3 + (i * 0.1)}>
                <motion.div
                  whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                  className="bg-[#F7F7F7] rounded-[24px] p-8 flex flex-col items-start gap-6 min-h-[280px] transition-shadow border border-transparent hover:border-[#EBEBEB]"
                >
                  <div className={`flex items-center justify-center p-[10px] rounded-[14px] bg-white shrink-0 ${iconBoxShadow}`}>
                    <f.icon size={28} className="text-green-600" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[20px] font-medium text-[#171717]">{f.title}</h3>
                    <p className="text-[16px] leading-[24px] text-[#5C5C5C]">{f.desc}</p>
                  </div>
                </motion.div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
