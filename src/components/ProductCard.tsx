import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/types';
import { useCartStore } from '@/store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover-lift">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badge */}
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-amber-500 text-[#1a0a2e] font-bold">
            {product.badge}
          </Badge>
        )}
        
        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            onClick={() => addItem(product)}
            className="w-full bg-white text-[#4c1d95] hover:bg-purple-50 font-semibold"
          >
            <ShoppingCart className="h-4 w-4 ml-2" />
            أضف للسلة
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-purple-600 font-medium mb-1">{product.category}</p>
        
        {/* Title */}
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm min-h-[40px]">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#4c1d95]">
            {product.price} ريال
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.originalPrice} ريال
            </span>
          )}
        </div>
        
        {/* Add to Cart Button (Mobile) */}
        <Button
          onClick={() => addItem(product)}
          className="w-full mt-3 bg-gradient-to-r from-[#4c1d95] to-[#6b21a8] hover:from-[#581c87] hover:to-[#7c3aed] text-white"
        >
          <ShoppingCart className="h-4 w-4 ml-2" />
          أضف للسلة
        </Button>
      </div>
    </div>
  );
}
