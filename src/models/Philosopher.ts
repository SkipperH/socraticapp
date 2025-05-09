
export interface Philosopher {
  id: number;
  name: string;
  image: string;
  initialMessage: string;
}

// Define our philosophers data
export const philosophers: Philosopher[] = [
  {
    id: 0,
    name: 'Descartes',
    image: '/lovable-uploads/47b16868-3cf1-4fd3-8c4a-5e949e296fca.png',
    initialMessage: 'Ik denk, dus ik besta. Maar wat denk jij? Laten we samen redeneren.'
  },
  {
    id: 1,
    name: 'Marcus Aurelius',
    image: '/lovable-uploads/ab1b800a-3ebf-41c9-95f9-ba92a147dd8a.png',
    initialMessage: 'Het geluk van je leven hangt af van de kwaliteit van je gedachten. Waar denk jij vandaag aan?'
  },
  {
    id: 2,
    name: 'Nietzsche',
    image: '/lovable-uploads/550e137d-8a62-4794-8ba0-a9cce2be8fba.png',
    initialMessage: 'Hij die een waarom heeft om voor te leven kan bijna elk hoe verdragen. Wat is jouw waarom?'
  }
];
