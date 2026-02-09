import { useState } from 'react';
import { ChevronLeft, Flame, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const tabs = [
  { id: 'all', name: 'الكل', icon: Sparkles },
  { id: 'deals', name: 'العروض', icon: Flame },
  { id: 'trending', name: 'الأكثر مبيعاً', icon: TrendingUp },
];

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = products.filter((product) => {
    if (activeTab === 'deals') return product.badge?.includes('خصم');
    if (activeTab === 'trending') return product.badge === 'الأكثر مبيعاً';
    return true;
  });

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">منتجات مميزة</h2>
            <p className="text-gray-500 text-sm mt-1">اكتشف أفضل العروض والمنتجات المميزة</p>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-[#4c1d95] shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-[#4c1d95] text-[#4c1d95] hover:bg-purple-50 px-8"
          >
            عرض جميع المنتجات
            <ChevronLeft className="h-4 w-4 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
