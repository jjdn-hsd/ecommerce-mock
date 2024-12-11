import React from 'react';
import { Link } from 'react-router-dom';
import { Collection } from '../../types/Collection';

interface CollectionCardProps {
  collection: Collection;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <Link to={`/collections/${collection.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{collection.name}</h3>
          <p className="text-gray-600 mt-1 text-sm">{collection.description}</p>
        </div>
      </div>
    </Link>
  );
};