import React, { useState, useCallback } from 'react';
import { SearchInput } from './SearchInput';
import { CategoryFilter } from './CategoryFilter';
import { SearchResults } from './SearchResults';
import { useProducts } from '../../hooks/useProducts';

export const SearchContainer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { filteredProducts, categories } = useProducts(searchQuery, selectedCategory);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <SearchInput onSearch={handleSearch} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <SearchResults results={filteredProducts} query={searchQuery} />
    </div>
  );
};