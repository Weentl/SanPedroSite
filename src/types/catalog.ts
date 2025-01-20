export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  dimensions: string;
  uses: string[];
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}