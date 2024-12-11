import { Collection } from '../types/Collection';

export const collections: Collection[] = [
  {
    id: 'summer-essentials',
    name: 'Summer Essentials',
    description: 'Everything you need for the perfect summer',
    image: 'https://picsum.photos/seed/summer/400/400',
    featured: true,
    productIds: ['3', '5', '9', '13']
  },
  {
    id: 'tech-favorites',
    name: 'Tech Favorites',
    description: 'Our most popular tech gadgets',
    image: 'https://picsum.photos/seed/tech/400/400',
    featured: true,
    productIds: ['1', '2', '4', '10']
  },
  {
    id: 'home-office',
    name: 'Home Office',
    description: 'Create the perfect workspace',
    image: 'https://picsum.photos/seed/office/400/400',
    featured: false,
    productIds: ['8', '4', '7', '12']
  }
];