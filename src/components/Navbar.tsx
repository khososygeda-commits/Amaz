import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: 'الكل', hasDropdown: false },
  { name: 'عروض اليوم', hasDropdown: false },
  { name: 'خدمة العملاء', hasDropdown: false },
  { name: 'الإلكترونيات', hasDropdown: true },
  { name: 'الأزياء', hasDropdown: true },
  { name: 'المنزل والمطبخ', hasDropdown: true },
  { name: 'الجمال', hasDropdown: true },
  { name: 'الرياضة', hasDropdown: true },
  { name: 'الكتب', hasDropdown: false },
  { name: 'الألعاب', hasDropdown: true },
];

export default function Navbar({ isOpen, onClose }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block bg-[#4c1d95] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-amber-400 transition-colors py-1">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </button>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-50 border border-purple-100">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-semibold text-purple-700">تصفح حسب الفئة</h3>
                    </div>
                    <div className="py-2">
                      {['الأكثر مبيعاً', 'الجديد', 'العروض', 'العلامات التجارية'].map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      >
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sidebar Header */}
          <div className="bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-[#1a0a2e] font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-lg">ShopMart</span>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-white/20 rounded">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="p-4 overflow-y-auto h-[calc(100%-72px)]">
            <div className="mb-6">
              <h3 className="text-gray-500 text-sm font-semibold mb-3">التصفح الرئيسي</h3>
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href="#"
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-colors"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-gray-500 text-sm font-semibold mb-3">الحساب</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="block py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-colors">
                    تسجيل الدخول
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-colors">
                    إنشاء حساب جديد
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-colors">
                    طلباتي
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-colors">
                    قائمة المفضلة
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
