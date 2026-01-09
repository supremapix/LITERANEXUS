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
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    description: "Experimente uma jornada diária de intimidade com Deus. Este devocional best-seller oferece 365 mensagens inspiradoras que trarão paz, direção e renovação espiritual para cada manhã do seu ano de 2026.",
    benefits: [
      "365 mensagens inéditas para fortalecer sua fé diariamente",
      "Momentos de paz e clareza antes de começar a rotina",
      "Direcionamento espiritual para tomadas de decisão",
      "Formato digital prático para ler no celular ou tablet"
    ],
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
    description: "Uma obra-prima da sátira cristã. C.S. Lewis imagina a correspondência entre um diabo experiente e seu sobrinho aprendiz, revelando de forma brilhante as armadilhas sutis da tentação humana.",
    benefits: [
      "Entenda como vencer as batalhas espirituais da mente",
      "Identifique as armadilhas sutis do dia a dia",
      "Reflexões profundas com humor inteligente",
      "Um clássico indispensável da literatura cristã"
    ],
    image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'jesus-psicologo',
    title: 'Jesus, o Maior Psicólogo',
    author: 'Mark W. Baker',
    category: Category.CHRISTIAN,
    priceKZ: 3500,
    priceEUR: 6.50,
    description: "Descubra como os ensinamentos de Jesus se alinham profundamente com a psicologia moderna para curar a alma, superar traumas e encontrar equilíbrio emocional.",
    benefits: [
      "Cura interior através dos ensinamentos de Jesus",
      "Ferramentas para superar traumas e ansiedade",
      "União perfeita entre fé e ciência psicológica",
      "Melhore seus relacionamentos interpessoais"
    ],
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=800'
  },
  
  // PSYCHOLOGY
  {
    id: 'poder-habito',
    title: 'O Poder do Hábito',
    author: 'Charles Duhigg',
    category: Category.PSYCHOLOGY,
    priceKZ: 4000,
    priceEUR: 7.99,
    description: "Entenda a ciência por trás de como os hábitos funcionam. Aprenda a transformar sua vida, produtividade e resultados mudando padrões comportamentais fundamentais.",
    benefits: [
      "Descubra o 'Loop do Hábito' e como hackeá-lo",
      "Elimine vícios e construa rotinas produtivas",
      "Exemplos reais de transformação pessoal e empresarial",
      "Ciência comportamental aplicada de forma prática"
    ],
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5-feridas',
    title: 'As 5 Feridas Emocionais',
    author: 'Lise Bourbeau',
    category: Category.PSYCHOLOGY,
    priceKZ: 3800,
    priceEUR: 6.99,
    description: "Rejeição, abandono, humilhação, traição e injustiça. Identifique qual dessas feridas impede sua felicidade e aprenda o caminho prático para a cura interior.",
    benefits: [
      "Identifique a raiz dos seus sofrimentos emocionais",
      "Pare de repetir padrões destrutivos nos relacionamentos",
      "Aceitação e cura da criança interior",
      "Guia prático para libertação emocional"
    ],
    image: 'https://images.unsplash.com/photo-1499209974431-2761387a17ac?auto=format&fit=crop&q=80&w=800'
  },

  // ROMANCE
  {
    id: 'assim-acaba',
    title: 'É Assim Que Acaba',
    author: 'Colleen Hoover',
    category: Category.ROMANCE,
    priceKZ: 4200,
    priceEUR: 7.50,
    description: "Um romance poderoso e doloroso sobre força, escolhas difíceis e a coragem necessária para quebrar ciclos de violência. Um livro que toca a alma.",
    benefits: [
      "Uma história emocionante que prende do início ao fim",
      "Reflexão profunda sobre relacionamentos e autoestima",
      "Personagens complexos e realistas",
      "Fenômeno mundial de vendas"
    ],
    image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=800',
    bestseller: true
  },
  {
    id: 'verity',
    title: 'Verity',
    author: 'Colleen Hoover',
    category: Category.ROMANCE,
    priceKZ: 4200,
    priceEUR: 7.50,
    description: "Um thriller psicológico perturbador e viciante. Lowen Ashleigh é contratada para terminar os livros de uma autora famosa, mas descobre segredos que deveriam permanecer enterrados.",
    benefits: [
      "Suspense psicológico de tirar o fôlego",
      "Plot twists (reviravoltas) inesquecíveis",
      "Leitura viciante: impossível parar de ler",
      "O lado sombrio da mente humana revelado"
    ],
    image: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=800'
  },

  // FINANCE
  {
    id: 'pai-rico',
    title: 'Pai Rico, Pai Pobre',
    author: 'Robert Kiyosaki',
    category: Category.FINANCE,
    priceKZ: 4500,
    priceEUR: 8.50,
    description: "O livro #1 de finanças pessoais de todos os tempos. Destrua o mito de que você precisa ter uma renda alta para enriquecer e aprenda a fazer o dinheiro trabalhar para você.",
    benefits: [
      "Diferença fundamental entre ativos e passivos",
      "Como fazer o dinheiro trabalhar para você",
      "Mentalidade de investidor desde o zero",
      "Educação financeira que a escola não ensina"
    ],
    image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=800',
    bestseller: true
  },
  {
    id: 'mente-milionaria',
    title: 'Segredos da Mente Milionária',
    author: 'T. Harv Eker',
    category: Category.FINANCE,
    priceKZ: 4500,
    priceEUR: 8.50,
    description: "Aprenda a reprogramar seu modelo mental de dinheiro para o sucesso. Identifique e corrija os arquivos de riqueza em sua mente que determinam seu destino financeiro.",
    benefits: [
      "Reprograme suas crenças limitantes sobre dinheiro",
      "Os 17 arquivos de riqueza das pessoas prósperas",
      "Método prático de administração financeira",
      "A psicologia por trás da riqueza"
    ],
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800'
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