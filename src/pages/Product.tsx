import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

export const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, cart } = useCart();
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-gray-600">Product not found</p>
      </div>
    );
  }

  const cartItem = cart.items.find(item => item.product.id === product.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-2xl font-bold text-gray-900">
            {formatCurrency(product.price)}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full md:w-auto"
          >
            Add to Cart
            {cartItem && (
              <span className="ml-2 bg-blue-500 px-2 py-0.5 rounded-full text-sm">
                {cartItem.quantity}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};