type size = 'Pequeno' | 'Médio' | 'Grande';

type dogData = {
  id: number;
  breed: string;
  image: string;
  size: size;
  countryOrigin: string;
  colors: string[];
  lifeExpectancy: string;
  adultWeightKg: string;
  classification: string[];
};

const data: dogData[] = [
  {
    id: 1,
    breed: 'Labrador Retriever',
    image: 'labrador_retriever.png',
    size: 'Médio',
    countryOrigin: 'Canadá',
    colors: ['Preto', 'Chocolate', 'Amarelo'],
    lifeExpectancy: '10 a 12 anos',
    adultWeightKg: '25 a 36 kg',
    classification: ['Companhia', 'Assistência'],
  },
  {
    id: 2,
    breed: 'Golden Retriever',
    image: 'golden_retriever.png',
    size: 'Médio',
    countryOrigin: 'Escócia',
    colors: ['Dourado claro', 'Dourado médio', 'Dourado escuro'],
    lifeExpectancy: '10 a 12 anos',
    adultWeightKg: '25 a 34 kg',
    classification: ['Companhia', 'Assistência'],
  },
  {
    id: 3,
    breed: 'Poodle',
    image: 'poodle.png',
    size: 'Pequeno',
    countryOrigin: 'Alemanha/França',
    colors: ['Branco', 'Preto', 'Marrom', 'Cinza', 'Dourado', 'Apricot'],
    lifeExpectancy: '12 a 15 anos',
    adultWeightKg: '6 a 12 kg',
    classification: ['Companhia', 'Competições de agilidade'],
  },
  {
    id: 4,
    breed: 'Bulldog Francês',
    image: 'bulldog_frances.png',
    size: 'Pequeno',
    countryOrigin: 'França',
    colors: ['Fulvo', 'Tigrado', 'Preto', 'Branco', 'Cinza'],
    lifeExpectancy: '10 a 12 anos',
    adultWeightKg: '8 a 14 kg',
    classification: ['Companhia'],
  },
  {
    id: 5,
    breed: 'Bulldog Inglês',
    image: 'bulldog_ingles.png',
    size: 'Médio',
    countryOrigin: 'Reino Unido',
    colors: ['Branco', 'Caramelo', 'Tigrado', 'Vermelho'],
    lifeExpectancy: '8 a 10 anos',
    adultWeightKg: '18 a 25 kg',
    classification: ['Companhia'],
  }
]