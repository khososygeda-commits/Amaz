import { Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCartStore } from '@/store/cartStore';
import { Separator } from '@/components/ui/separator';

export default function Cart() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={setCartOpen}>
      <SheetContent side="left" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2 text-xl">
              <ShoppingBag className="h-6 w-6 text-[#4c1d95]" />
              سلة التسوق
              <span className="text-sm font-normal text-gray-500">
                ({items.length} منتج)
              </span>
            </SheetTitle>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-600 text-sm flex items-center gap-1"
              >
                <Trash2 className="h-4 w-4" />
                إفراغ
              </button>
            )}
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="h-12 w-12 text-[#4c1d95]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">سلة التسوق فارغة</h3>
            <p className="text-gray-500 mb-6">ابدأ التسوق واكتشف منتجات رائعة</p>
            <Button
              onClick={() => setCartOpen(false)}
              className="bg-gradient-to-r from-[#4c1d95] to-[#6b21a8] hover:from-[#581c87] hover:to-[#7c3aed]"
            >
              استمر بالتسوق
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 p-3 rounded-lg">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 line-clamp-2 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-[#4c1d95] font-bold mt-1">
                      {item.price} ريال
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-white rounded-lg border">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-r-lg"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-l-lg"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600 p-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="border-t pt-4 space-y-4">
              {/* Summary */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>المجموع الفرعي</span>
                  <span>{totalPrice} ريال</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>الشحن</span>
                  <span className="text-green-600">مجاني</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>الضريبة (15%)</span>
                  <span>{(totalPrice * 0.15).toFixed(2)} ريال</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>الإجمالي</span>
                  <span className="text-[#4c1d95]">
                    {(totalPrice * 1.15).toFixed(2)} ريال
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#1a0a2e] font-bold text-lg h-12"
              >
                إتمام الشراء
              </Button>
              
              <Button
                variant="outline"
                onClick={() => setCartOpen(false)}
                className="w-full border-[#4c1d95] text-[#4c1d95] hover:bg-purple-50"
              >
                مواصلة التسوق
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
