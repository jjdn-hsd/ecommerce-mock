import { useMemo } from 'react';
import { products } from '../data/products';
import { getUniqueCategories } from '../utils/productUtils';

export const useProducts = (searchQuery: string, category: string) => {
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !category || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, category]);

  const categories = useMemo(() => getUniqueCategories(products), []);

  return { filteredProducts, categories };
};