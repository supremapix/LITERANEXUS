export enum Category {
  CHRISTIAN = 'Cristão',
  PSYCHOLOGY = 'Psicologia & Auto Ajuda',
  ROMANCE = 'Romance & Poemas',
  FINANCE = 'Finanças & Negócios'
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: Category;
  priceKZ: number; // Kwanza
  priceEUR: number; // Euro
  image: string;
  description: string; // New field for detailed view
  isNew?: boolean;
  bestseller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}