import React from 'react';
import { CollectionCard } from './CollectionCard';
import { collections } from '../../data/collections';

export const CollectionGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collections.map(collection => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
};