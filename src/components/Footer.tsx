import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, CreditCard, Shield, Truck, RotateCcw } from 'lucide-react';

const footerLinks = {
  'اعرف المزيد عنا': [
    'معلومات عن ShopMart',
    'وظائف',
    'الاستدامة',
    'العلاقات مع المستثمرين',
    'الصحافة',
  ],
  'الدعم': [
    'مركز المساعدة',
    'سياسة الإرجاع',
    'تتبع الطلب',
    'الشحن والتوصيل',
    'الدفع',
  ],
  'الحساب': [
    'تسجيل الدخول',
    'إنشاء حساب',
    'طلباتي',
    'قائمة المفضلة',
    'الإشعارات',
  ],
};

const features = [
  {
    icon: Truck,
    title: 'شحن مجاني',
    description: 'على الطلبات فوق 500 ريال',
  },
  {
    icon: Shield,
    title: 'دفع آمن',
    description: '100% حماية مشترياتك',
  },
  {
    icon: RotateCcw,
    title: 'إرجاع سهل',
    description: 'خلال 30 يوم',
  },
  {
    icon: CreditCard,
    title: 'دفع متعدد',
    description: 'طرق دفع متنوعة',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a0a2e] text-white">
      {/* Features Bar */}
      <div className="border-b border-purple-800/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{feature.title}</h4>
                    <p className="text-xs text-purple-300">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-[#1a0a2e] font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400">ShopMart</h3>
                <p className="text-xs text-purple-300 -mt-1">تسوق بذكاء</p>
              </div>
            </div>
            <p className="text-sm text-purple-200 mb-4">
              وجهتك المثالية للتسوق الإلكتروني. نقدم لك تجربة تسوق فريدة مع أفضل المنتجات والعروض.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-purple-200">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>9200XXXXX</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <Mail className="h-4 w-4 text-amber-400" />
                <span>support@shopmart.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-amber-400 mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-purple-200 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-purple-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-lg mb-1">اشترك في نشرتنا الإخبارية</h4>
              <p className="text-sm text-purple-200">احصل على أحدث العروض والخصومات مباشرة إلى بريدك</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-700 text-white placeholder:text-purple-400 focus:outline-none focus:border-amber-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-[#1a0a2e] font-bold rounded-lg hover:from-amber-500 hover:to-amber-600 transition-colors">
                اشترك
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-purple-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 bg-purple-800/50 rounded-lg flex items-center justify-center hover:bg-amber-400 hover:text-[#1a0a2e] transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-purple-300">طرق الدفع:</span>
            <div className="flex gap-2">
              {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((method) => (
                <div
                  key={method}
                  className="px-3 py-1 bg-purple-800/50 rounded text-xs text-purple-200"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-purple-300">
            © 2025 ShopMart. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
