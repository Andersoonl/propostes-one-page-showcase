import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
}

const ProductCard = ({ title, description, Icon, href }: ProductCardProps) => {
  return (
    <Link
      to={href}
      className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
        <Icon 
          size={28} 
          className="text-secondary group-hover:text-secondary-foreground transition-colors duration-300" 
        />
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-5 leading-relaxed">
        {description}
      </p>
      
      <div className="inline-flex items-center text-secondary font-medium hover:underline underline-offset-4 transition-all group-hover:gap-2">
        Saiba mais
        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
};

export default ProductCard;
