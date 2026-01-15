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
      className="group relative bg-card border border-border rounded-xl p-6 md:p-8 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block overflow-hidden"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container with Enhanced Design */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 mb-5">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl group-hover:from-secondary group-hover:to-secondary/80 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
          <div className="absolute inset-0 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
            <Icon 
              size={28} 
              className="text-secondary group-hover:text-secondary-foreground transition-all duration-300 group-hover:scale-110 relative z-10" 
            />
          </div>
        </div>
        
        {/* Title with Enhanced Typography */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground mb-5 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
        
        {/* CTA with Enhanced Design */}
        <div className="inline-flex items-center text-secondary font-semibold group-hover:gap-2 transition-all duration-300">
          <span className="relative">
            Saiba mais
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
          </span>
          <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
        </div>
      </div>
      
      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
    </Link>
  );
};

export default ProductCard;
