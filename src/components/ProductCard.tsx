import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
}

const ProductCard = ({ title, description, Icon, href, backgroundImage, backgroundPosition = "center", backgroundSize = "cover" }: ProductCardProps) => {
  return (
    <Link
      to={href}
      className="group relative bg-card border border-border rounded-xl p-4 sm:p-6 md:p-8 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-[0.98] block overflow-hidden min-h-[180px] sm:min-h-[240px] md:min-h-[320px] font-sans"
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize,
            backgroundPosition,
          }}
        />
      )}

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 rounded-xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/60 to-transparent group-hover:from-navy-900/90 group-hover:via-navy-900/50 transition-all duration-300 rounded-xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        {/* Icon Container */}
        <div className="relative w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 sm:mb-4">
          <div className="absolute inset-0 bg-secondary/20 backdrop-blur-sm rounded-lg sm:rounded-xl group-hover:bg-secondary group-hover:scale-110 transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon
              size={18}
              className="sm:w-6 sm:h-6 text-secondary group-hover:text-secondary-foreground transition-all duration-300 relative z-10"
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-base sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-3 group-hover:text-secondary transition-colors duration-300 leading-tight"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-white/90 mb-3 sm:mb-5 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 group-hover:text-white transition-colors duration-300"
          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
        >
          {description}
        </p>

        {/* CTA */}
        <div
          className="inline-flex items-center text-secondary font-semibold group-hover:gap-2 transition-all duration-300 text-xs sm:text-sm md:text-base"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
        >
          <span className="relative">
            Saiba mais
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
          </span>
          <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
