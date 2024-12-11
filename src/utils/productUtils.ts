import { Product } from '../types/Product';

export const getUniqueCategories = (products: Product[]): string[] => {
  const categories = new Set(products.map((product) => product.category));
  return Array.from(categories).sort();
};