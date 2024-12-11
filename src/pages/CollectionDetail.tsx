import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import { collections } from '../data/collections';
import { products } from '../data/products';

export const CollectionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const collection = collections.find(c => c.id === id);
  
  if (!collection) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-gray-600">Collection not found</p>
      </div>
    );
  }

  const collectionProducts = products.filter(product => 
    collection.productIds.includes(product.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{collection.name}</h1>
        <p className="text-gray-600 mt-2">{collection.description}</p>
      </div>
      <ProductGrid products={collectionProducts} />
    </div>
  );
};