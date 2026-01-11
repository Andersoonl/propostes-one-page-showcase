import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ProductCard = ({ title, description, Icon }: ProductCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon 
          size={28} 
          className="text-primary group-hover:text-primary-foreground transition-colors duration-300" 
        />
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-5 leading-relaxed">
        {description}
      </p>
      
      <a
        href="#qualidade"
        className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4 transition-all group-hover:gap-2"
      >
        Saiba mais
        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  );
};

export default ProductCard;
