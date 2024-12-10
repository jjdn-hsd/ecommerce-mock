import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

export const CartIcon: React.FC = () => {
  const { cart } = useCart();
  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <ShoppingCartIcon className="h-6 w-6" />
      {itemCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {itemCount}
        </div>
      )}
    </div>
  );
};