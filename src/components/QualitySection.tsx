import { CheckCircle2, Shield, ThumbsUp } from "lucide-react";
import seloABCP from "@/assets/selo abcp.jpg";
import seloISO9001 from "@/assets/selo iso9001.png";

const certifications = [
  {
    icon: CheckCircle2,
    title: "Materiais Selecionados",
    description: "Utilizamos apenas matérias-primas de alta qualidade.",
  },
  {
    icon: Shield,
    title: "Processos Controlados",
    description: "Produção com rigoroso controle de qualidade.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfação Garantida",
    description: "Compromisso com a excelência e satisfação do cliente.",
  },
];

const QualitySection = () => {
  return (
    <section id="qualidade" className="py-16 md:py-24 lg:py-28 bg-navy-gradient text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-secondary font-medium mb-2 md:mb-3 text-sm md:text-base">Certificação</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6">
              Qualidade Certificada
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              A Propostes é uma empresa reconhecida e certificada por duas das mais 
              importantes instituições do setor: a certificação ISO 9001, que atesta 
              nosso Sistema de Gestão da Qualidade em conformidade com padrões 
              internacionais, e o Selo ABCP da Associação Brasileira de Cimento Portland, 
              que reconhece a excelência e conformidade dos nossos produtos de concreto. 
              Essas certificações reforçam nossa posição como referência em qualidade, 
              demonstrando nosso compromisso com processos rigorosos, melhoria contínua 
              e produtos que atendem aos mais altos padrões técnicos do mercado.
            </p>

            {/* Certifications List */}
            <ul className="space-y-4 md:space-y-5" aria-label="Diferenciais de qualidade">
              {certifications.map((cert, index) => (
                <li
                  key={cert.title}
                  className="flex items-start gap-3 md:gap-4 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <cert.icon size={20} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-1">{cert.title}</h4>
                    <p className="text-white/70 text-sm md:text-base">{cert.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Quality Seals */}
          <div className="flex flex-col gap-6 md:gap-8 items-center lg:items-end mt-8 lg:mt-0">
            {/* ISO 9001 Seal */}
            <div className="relative w-full max-w-sm">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full" />
              
              {/* Badge Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 text-center hover:border-secondary/50 transition-all duration-500 hover:scale-105">
                <div className="mb-4 flex justify-center">
                  <img 
                    src={seloISO9001} 
                    alt="Selo ISO 9001" 
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2">ISO 9001</h3>
                <p className="text-secondary font-medium text-base mb-3">Certificado de Qualidade</p>
                <p className="text-white/70 text-sm max-w-xs mx-auto">
                  Sistema de Gestão da Qualidade certificado e auditado periodicamente, garantindo processos padronizados e melhoria contínua.
                </p>
              </div>
            </div>

            {/* ABCP Seal */}
            <div className="relative w-full max-w-sm">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full" />
              
              {/* Badge Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 text-center hover:border-secondary/50 transition-all duration-500 hover:scale-105">
                <div className="mb-4 flex justify-center">
                  <img 
                    src={seloABCP} 
                    alt="Selo ABCP" 
                    className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg"
                  />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2">Selo ABCP</h3>
                <p className="text-secondary font-medium text-base mb-3">Certificação ABCP</p>
                <p className="text-white/70 text-sm max-w-xs mx-auto">
                  Certificação da Associação Brasileira de Cimento Portland, reconhecendo a qualidade e conformidade dos nossos produtos de concreto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
