import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import { formatCurrency } from '../utils/formatCurrency';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cart } = useCart();
  const cartItem = cart.items.find(item => item.product.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mt-1 text-sm">{product.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">
              {formatCurrency(product.price)}
            </span>
            <button 
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-1"
            >
              <span>Add to Cart</span>
              {cartItem && (
                <span className="bg-blue-500 px-2 py-0.5 rounded-full text-sm ml-2">
                  {cartItem.quantity}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};