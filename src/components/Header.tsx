import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from './CartIcon';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

export const Header: React.FC = () => {
  const { cart } = useCart();

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            HSD E-Commerce
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/products" className="text-gray-600 hover:text-gray-800">
              Products
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-gray-800 flex items-center">
              <CartIcon />
              {cart.total > 0 && (
                <span className="ml-2 text-sm font-medium">
                  {formatCurrency(cart.total)}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};