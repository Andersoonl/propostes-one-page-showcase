import { Award, CheckCircle2, Shield, ThumbsUp } from "lucide-react";

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
    <section id="qualidade" className="py-20 md:py-28 bg-navy-gradient text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-secondary font-medium mb-3">Certificação</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Qualidade Certificada
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              A Propostes possui certificação ISO 9001, garantindo que todos os 
              nossos produtos e processos seguem os mais rigorosos padrões de 
              qualidade do mercado. Nosso compromisso é entregar excelência em 
              cada produto.
            </p>

            {/* Certifications List */}
            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title} 
                  className="flex items-start gap-4 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <cert.icon size={20} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                    <p className="text-white/60">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - ISO Badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full" />
              
              {/* Badge Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-10 md:p-14 text-center hover:border-secondary/50 transition-all duration-500 hover:scale-105">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={48} className="text-secondary-foreground md:w-16 md:h-16" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2">ISO 9001</h3>
                <p className="text-secondary font-medium text-lg mb-4">Certificado de Qualidade</p>
                <p className="text-white/60 max-w-xs mx-auto">
                  Sistema de Gestão da Qualidade certificado e auditado periodicamente.
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
