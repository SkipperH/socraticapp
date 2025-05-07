
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define our philosophers data
interface Philosopher {
  id: number;
  name: string;
  image: string;
  initialMessage: string;
}

const philosophers: Philosopher[] = [
  {
    id: 0,
    name: 'Descartes',
    image: '/lovable-uploads/47b16868-3cf1-4fd3-8c4a-5e949e296fca.png',
    initialMessage: 'Ik denk, dus ik besta. Maar wat denk jij? Laten we samen redeneren.'
  },
  {
    id: 1,
    name: 'Plato',
    image: '/lovable-uploads/47b16868-3cf1-4fd3-8c4a-5e949e296fca.png',
    initialMessage: 'Kennis is de herinnering van de ziel. Wat wil je verkennen?'
  },
  {
    id: 2,
    name: 'Nietzsche',
    image: '/lovable-uploads/47b16868-3cf1-4fd3-8c4a-5e949e296fca.png',
    initialMessage: 'Hij die een waarom heeft om voor te leven kan bijna elk hoe verdragen. Wat is jouw waarom?'
  }
];

const Chat: React.FC = () => {
  const [currentPhilosopherIndex, setCurrentPhilosopherIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [messagesMap, setMessagesMap] = useState<Record<number, string[]>>({
    0: ['Ik denk, dus ik besta. Maar wat denk jij? Laten we samen redeneren.'],
    1: ['Kennis is de herinnering van de ziel. Wat wil je verkennen?'],
    2: ['Hij die een waarom heeft om voor te leven kan bijna elk hoe verdragen. Wat is jouw waarom?']
  });

  const currentPhilosopher = philosophers[currentPhilosopherIndex];
  const currentMessages = messagesMap[currentPhilosopherIndex] || [currentPhilosopher.initialMessage];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const updatedMessages = [...currentMessages, message];
      setMessagesMap({
        ...messagesMap,
        [currentPhilosopherIndex]: updatedMessages
      });
      setMessage('');
    }
  };

  const navigateToPhilosopher = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentPhilosopherIndex((prev) => 
        prev === philosophers.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentPhilosopherIndex((prev) => 
        prev === 0 ? philosophers.length - 1 : prev - 1
      );
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/lovable-uploads/4aab2216-fe2f-4c5e-a186-9648595ae9b8.png')" }}
    >
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6" style={{ backgroundColor: '#1B1F3B' }}>
        <div className="flex space-x-10">
          <Link to="/" className="text-lg font-medium" style={{ color: '#F8F5EC' }}>ABOUT</Link>
          <span className="text-lg font-medium" style={{ color: '#F8F5EC' }}>DONATE</span>
        </div>
        <Link to="/" className="bg-[#f1f0e8] px-6 py-3 rounded">
          <span className="font-serif text-socratic-darkest text-xl font-semibold tracking-wider">SOCRATIC</span>
        </Link>
      </nav>

      {/* Chat Interface with Navigation Arrows */}
      <div className="container mx-auto px-6 py-12 flex items-center">
        {/* Left Arrow */}
        <div 
          onClick={() => navigateToPhilosopher('prev')}
          className="cursor-pointer p-4 bg-[#121731]/70 rounded-full hover:bg-[#121731]/90 transition-all"
        >
          <ChevronLeft size={32} />
        </div>
        
        {/* Chat Window - Now taller (85vh) with transparency */}
        <div className="flex-1 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="bg-[#1A1F2C]/80 backdrop-blur-sm rounded-lg p-6 shadow-lg h-[85vh] flex flex-col">
              <div className="text-center mb-4">
                <h2 className="text-xl font-semibold">{currentPhilosopher.name}</h2>
              </div>
              
              <div className="flex-grow space-y-4 mb-6 overflow-y-auto">
                {currentMessages.map((msg, index) => (
                  <div key={index} className="bg-[#121731]/90 rounded-lg p-4">
                    {msg}
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <form onSubmit={handleSubmit} className="flex items-center">
                  <input
                    type="text"
                    placeholder={`Stel een vraag aan ${currentPhilosopher.name}...`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#121731]/90 text-white px-4 py-3 rounded-l-lg focus:outline-none"
                  />
                  <button 
                    type="submit" 
                    className="bg-[#121731]/90 text-white px-4 py-3 rounded-r-lg"
                  >
                    <span className="sr-only">Send</span>
                    <span>→</span>
                  </button>
                </form>
                <div className="flex justify-between mt-4">
                  <button className="text-white bg-[#121731]/90 p-2 rounded-full">
                    <span className="sr-only">Voice</span>
                    🎤
                  </button>
                  <p className="text-sm text-gray-400">Stel een vraag {currentPhilosopher.name}...</p>
                  <div className="flex space-x-2">
                    <button className="text-white bg-[#121731]/90 p-2 rounded-full">
                      <span className="sr-only">Voice</span>
                      🎤
                    </button>
                    <button className="text-white bg-[#121731]/90 p-2 rounded-full">
                      <span className="sr-only">Options</span>
                      ⋮
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Philosopher Image - Larger with more padding */}
          <div className="w-full lg:w-1/2 flex justify-center items-center pl-8">
            <img 
              src={currentPhilosopher.image}
              alt={`${currentPhilosopher.name} Character`}
              className="max-h-[90vh] object-contain"
            />
          </div>
        </div>
        
        {/* Right Arrow */}
        <div 
          onClick={() => navigateToPhilosopher('next')}
          className="cursor-pointer p-4 bg-[#121731]/70 rounded-full hover:bg-[#121731]/90 transition-all"
        >
          <ChevronRight size={32} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
