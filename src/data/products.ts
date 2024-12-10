import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    image: 'https://picsum.photos/seed/headphones/400/400',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 299.99,
    image: 'https://picsum.photos/seed/smartwatch/400/400',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Running Shoes',
    description: 'Comfortable running shoes for athletes',
    price: 89.99,
    image: 'https://picsum.photos/seed/shoes/400/400',
    category: 'Sports'
  }
];