const clients = [
  { name: "Construtora Alpha", initials: "CA" },
  { name: "Engenharia Beta", initials: "EB" },
  { name: "Gama", initials: "OG" },
  { name: "Projeto Delta", initials: "PD" },
  { name: "Construções Epsilon", initials: "CE" },
  { name: "Empreiteira Zeta", initials: "EZ" },
];

const ClientsSection = () => {
  return (
    <section id="clientes" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-secondary font-medium mb-3">Parcerias de Sucesso</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Clientes & Parceiros
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empresas que confiam na qualidade dos produtos Propostes 
            para suas construções e projetos.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col items-center justify-center hover:border-secondary/50 hover:shadow-md transition-all duration-300 opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors duration-300">
                <span className="text-xl md:text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                  {client.initials}
                </span>
              </div>
              <p className="text-sm text-muted-foreground text-center font-medium">
                {client.name}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <div className="mt-14 md:mt-20 text-center">
          <p className="text-muted-foreground text-lg">
            Mais de <span className="text-secondary font-bold">100+ projetos</span> realizados com sucesso em Fortaleza e região metropolitana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
