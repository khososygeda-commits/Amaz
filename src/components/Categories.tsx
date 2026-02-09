import { ArrowLeft } from 'lucide-react';
import { categories } from '@/data/products';

export default function Categories() {
  return (
    <section className="py-8 px-4 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">تصفح حسب الفئة</h2>
            <p className="text-gray-500 text-sm mt-1">اختر من بين مجموعة واسعة من الفئات</p>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-[#4c1d95] hover:text-[#6b21a8] font-medium text-sm"
          >
            عرض الكل
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/90 via-[#4c1d95]/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h3 className="font-bold text-lg mb-1 group-hover:text-amber-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-purple-200">
                  {category.itemCount.toLocaleString()} منتج
                </p>
              </div>
              
              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-xl transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
