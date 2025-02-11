export interface Product {
  id?: number; 
  name: string;
  categoryId: string;
  price: number;
  quantity: number;
  productCondition: 'New' | 'Used';
  description: string;
  imageUrl: string;
}
