export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  featured: boolean;
  productIds: string[];
}

export interface CollectionWithProducts extends Collection {
  productIds: string[];
}