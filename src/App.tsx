import { useState } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Categories from '@/components/Categories';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header onMenuClick={() => setIsNavOpen(true)} />
      <Navbar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
      </main>
      
      <Footer />
      <Cart />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
