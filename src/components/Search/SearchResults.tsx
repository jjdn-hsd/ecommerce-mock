import React from 'react';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard';

interface SearchResultsProps {
  results: Product[];
  query: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results, query }) => {
  if (query && results.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No products found matching "{query}"</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};