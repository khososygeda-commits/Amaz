import { useState } from 'react';
import { Search, ShoppingCart, Menu, User, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/store/cartStore';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { toggleCart, getTotalItems } = useCartStore();
  const cartItemCount = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#1a0a2e] text-white py-1 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-purple-200">شحن مجاني على الطلبات فوق 500 ريال</span>
          <div className="flex gap-4">
            <span className="hover:text-purple-300 cursor-pointer">المساعدة</span>
            <span className="hover:text-purple-300 cursor-pointer">اللغة: العربية</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gradient-to-r from-[#312e81] via-[#4c1d95] to-[#6b21a8] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/20"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-[#1a0a2e]" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-amber-400">ShopMart</h1>
                <p className="text-xs text-purple-200 -mt-1">تسوق بذكاء</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center gap-1 text-sm hover:opacity-80 cursor-pointer">
            <MapPin className="h-4 w-4" />
            <div>
              <p className="text-xs text-purple-200">التوصيل إلى</p>
              <p className="font-semibold">الرياض</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="flex">
              <select className="hidden sm:block bg-gray-100 text-gray-700 px-3 py-2.5 rounded-r-none border-r border-gray-300 text-sm focus:outline-none">
                <option>الكل</option>
                <option>إلكترونيات</option>
                <option>أزياء</option>
                <option>منزل</option>
                <option>جمال</option>
              </select>
              <Input
                type="text"
                placeholder="ابحث عن منتجات، ماركات، فئات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-none border-0 bg-white text-gray-800 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-l-none bg-amber-500 hover:bg-amber-600 text-[#1a0a2e] px-6">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Account */}
            <div className="hidden md:flex items-center gap-1 hover:opacity-80 cursor-pointer">
              <User className="h-5 w-5" />
              <div className="text-sm">
                <p className="text-xs text-purple-200">مرحباً، تسجيل</p>
                <p className="font-semibold">الحساب</p>
              </div>
            </div>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white hover:bg-white/20 relative"
            >
              <Heart className="h-6 w-6" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-white hover:bg-white/20 relative"
              onClick={toggleCart}
            >
              <div className="relative">
                <ShoppingCart className="h-7 w-7" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-amber-500 text-[#1a0a2e] text-xs font-bold">
                    {cartItemCount}
                  </Badge>
                )}
              </div>
              <div className="hidden sm:block text-sm">
                <p className="text-xs text-purple-200">السلة</p>
                <p className="font-semibold">تسوق</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
