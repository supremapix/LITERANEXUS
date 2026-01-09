import { Book, Category, Testimonial } from './types';

// Used for "Someone just bought" notifications
export const RECENT_BUYERS = [
  "Ana M. de Luanda",
  "João P. de Lisboa",
  "Maria C. do Porto",
  "Carlos S. de Benguela",
  "Sofia R. de Coimbra"
];

export const BOOKS: Book[] = [
  // CHRISTIAN (Main Focus)
  {
    id: 'cafe-2026',
    title: 'Café com Deus Pai 2026',
    author: 'Junior Rostirola',
    category: Category.CHRISTIAN,
    priceKZ: 5000,
    priceEUR: 8.99,
    // Using a top-down coffee cup image to match the Hero emulation vibe
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    isNew: true,
    bestseller: true
  },
  {
    id: 'cs-lewis',
    title: 'Cartas de um diabo a seu aprendiz',
    author: 'C.S. Lewis',
    category: Category.CHRISTIAN,
    priceKZ: 3000,
    priceEUR: 5.99,
    image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=800' // Dark vintage vibe
  },
  {
    id: 'jesus-psicologo',
    title: 'Jesus, o Maior Psicólogo',
    author: 'Mark W. Baker',
    category: Category.CHRISTIAN,
    priceKZ: 3500,
    priceEUR: 6.50,
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=800' // Intellectual/Book
  },
  
  // PSYCHOLOGY
  {
    id: 'poder-habito',
    title: 'O Poder do Hábito',
    author: 'Charles Duhigg',
    category: Category.PSYCHOLOGY,
    priceKZ: 4000,
    priceEUR: 7.99,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800' // Brain/Focus
  },
  {
    id: '5-feridas',
    title: 'As 5 Feridas Emocionais',
    author: 'Lise Bourbeau',
    category: Category.PSYCHOLOGY,
    priceKZ: 3800,
    priceEUR: 6.99,
    image: 'https://images.unsplash.com/photo-1499209974431-2761387a17ac?auto=format&fit=crop&q=80&w=800' // Peaceful/Healing
  },

  // ROMANCE
  {
    id: 'assim-acaba',
    title: 'É Assim Que Acaba',
    author: 'Colleen Hoover',
    category: Category.ROMANCE,
    priceKZ: 4200,
    priceEUR: 7.50,
    image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=800', // Floral/Soft
    bestseller: true
  },
  {
    id: 'verity',
    title: 'Verity',
    author: 'Colleen Hoover',
    category: Category.ROMANCE,
    priceKZ: 4200,
    priceEUR: 7.50,
    image: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=800' // Dark/Mystery
  },

  // FINANCE
  {
    id: 'pai-rico',
    title: 'Pai Rico, Pai Pobre',
    author: 'Robert Kiyosaki',
    category: Category.FINANCE,
    priceKZ: 4500,
    priceEUR: 8.50,
    image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=800', // Business/Graph
    bestseller: true
  },
  {
    id: 'mente-milionaria',
    title: 'Segredos da Mente Milionária',
    author: 'T. Harv Eker',
    category: Category.FINANCE,
    priceKZ: 4500,
    priceEUR: 8.50,
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800' // Money/Growth
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mendonça',
    role: 'Leitora em Luanda',
    text: 'Começar o dia com o Café com Deus Pai mudou completamente minha perspectiva. A entrega do PDF foi imediata!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=150&h=150'
  },
  {
    id: '2',
    name: 'Miguel Torres',
    role: 'Cliente em Lisboa',
    text: 'A facilidade do pagamento via MB WAY e a qualidade do material são excelentes. A Literanexus é minha livraria de bolso.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150'
  },
  {
    id: '3',
    name: 'Joana Silva',
    role: 'Leitora de Devocionais',
    text: 'Encontrei paz e direção nas palavras deste livro. O suporte da equipe no WhatsApp foi super atencioso.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150'
  }
];

// Contact Info
export const WHATSAPP_NUMBER = "+258869605540";
export const EMAIL_ADDRESS = "mariamatezo636@gmail.com";
export const INSTAGRAM_HANDLE = "@literanexus";