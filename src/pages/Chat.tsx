
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Send, MessageSquare, Settings } from 'lucide-react';
import { getPhilosopherResponse, isApiKeySet, availableModels } from '../utils/openaiService';
import { toast } from '@/components/ui/sonner';
import NavBar from '../components/NavBar';
import ApiKeyModal from '../components/ApiKeyModal';

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
    image: '/lovable-uploads/47b16868-3cf1-4fd3-8c4a-5e949e296fca.png',  // Fixed Descartes image path
    initialMessage: 'Ik denk, dus ik besta. Maar wat denk jij? Laten we samen redeneren.'
  },
  {
    id: 1,
    name: 'Marcus Aurelius',
    image: '/lovable-uploads/ab1b800a-3ebf-41c9-95f9-ba92a147dd8a.png',  // Using the Marcus Aurelius image
    initialMessage: 'Het geluk van je leven hangt af van de kwaliteit van je gedachten. Waar denk jij vandaag aan?'
  },
  {
    id: 2,
    name: 'Nietzsche',
    image: '/lovable-uploads/550e137d-8a62-4794-8ba0-a9cce2be8fba.png',  // Using the Nietzsche image
    initialMessage: 'Hij die een waarom heeft om voor te leven kan bijna elk hoe verdragen. Wat is jouw waarom?'
  }
];

const Chat: React.FC = () => {
  const [currentPhilosopherIndex, setCurrentPhilosopherIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [messagesMap, setMessagesMap] = useState<Record<number, string[]>>({
    0: ['Ik denk, dus ik besta. Maar wat denk jij? Laten we samen redeneren.'],
    1: ['Het geluk van je leven hangt af van de kwaliteit van je gedachten. Waar denk jij vandaag aan?'],
    2: ['Hij die een waarom heeft om voor te leven kan bijna elk hoe verdragen. Wat is jouw waarom?']
  });
  const [isLoading, setIsLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState(localStorage.getItem('openai_model') || 'gpt-3.5-turbo');

  const currentPhilosopher = philosophers[currentPhilosopherIndex];
  const currentMessages = messagesMap[currentPhilosopherIndex] || [currentPhilosopher.initialMessage];

  // Get the current model display name
  const getCurrentModelName = () => {
    const model = availableModels.find(m => m.id === currentModel);
    return model ? model.name : currentModel;
  };

  useEffect(() => {
    // Check if API key is set
    if (!isApiKeySet()) {
      // Show API key modal if not set
      setIsApiKeyModalOpen(true);
    }
    
    // Set initial fade-in
    setFadeIn(true);
    
    // Check for model changes
    const handleStorageChange = () => {
      const newModel = localStorage.getItem('openai_model') || 'gpt-3.5-turbo';
      if (newModel !== currentModel) {
        setCurrentModel(newModel);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [currentModel]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Check if API key is set
      if (!isApiKeySet()) {
        setIsApiKeyModalOpen(true);
        return;
      }
      
      // Add user message to conversation
      const updatedMessages = [...currentMessages, message];
      setMessagesMap({
        ...messagesMap,
        [currentPhilosopherIndex]: updatedMessages
      });
      
      // Clear the input
      setMessage('');
      
      try {
        // Show loading state
        setIsLoading(true);
        
        // Call OpenAI API to get philosopher's response
        const philosopherResponse = await getPhilosopherResponse(
          currentPhilosopher.name,
          message,
          currentMessages
        );
        
        // Add philosopher's response to conversation
        const conversationWithResponse = [...updatedMessages, philosopherResponse];
        setMessagesMap({
          ...messagesMap,
          [currentPhilosopherIndex]: conversationWithResponse
        });
      } catch (error) {
        console.error("Error in chat:", error);
        toast.error("Er was een probleem bij het communiceren met de filosoof.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const navigateToPhilosopher = (direction: 'next' | 'prev') => {
    setFadeIn(false);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentPhilosopherIndex((prev) => 
          prev === philosophers.length - 1 ? 0 : prev + 1
        );
      } else {
        setCurrentPhilosopherIndex((prev) => 
          prev === 0 ? philosophers.length - 1 : prev - 1
        );
      }
      
      // Trigger fade-in animation after changing philosopher
      setTimeout(() => setFadeIn(true), 50);
    }, 300); // Short delay before changing philosopher
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/lovable-uploads/4aab2216-fe2f-4c5e-a186-9648595ae9b8.png')" }}
    >
      {/* Updated Navigation */}
      <NavBar />

      {/* API Key Modal */}
      <ApiKeyModal 
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
      />

      {/* Chat Interface with Navigation Arrows */}
      <div className="container mx-auto px-6 py-12 flex items-center">
        {/* Left Arrow */}
        <div 
          onClick={() => navigateToPhilosopher('prev')}
          className="cursor-pointer p-4 bg-[#1B1F3B]/70 rounded-full hover:bg-[#1B1F3B]/90 transition-all"
        >
          <ChevronLeft size={32} />
        </div>
        
        {/* Chat Window */}
        <div className="flex-1 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="bg-[#1A1F2C]/80 backdrop-blur-sm rounded-lg p-6 shadow-lg h-[85vh] flex flex-col">
              <div className="text-center mb-4 flex justify-between items-center">
                <div className="text-xs bg-[#121731]/80 px-2 py-1 rounded-md">
                  <span className="text-gray-400">Model: </span>
                  <span className="text-gray-300">{getCurrentModelName()}</span>
                </div>
                <h2 className="text-xl font-semibold">{currentPhilosopher.name}</h2>
                <button
                  onClick={() => setIsApiKeyModalOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="API Instellingen"
                >
                  <Settings size={18} />
                </button>
              </div>
              
              <div className="flex-grow space-y-4 mb-6 overflow-y-auto">
                {currentMessages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg ${
                      index % 2 === 0 
                        ? "bg-[#121731]/90" 
                        : "bg-[#232a43]/90 ml-auto"
                    } ${
                      index === currentMessages.length - 1 && isLoading && index % 2 === 0
                        ? "animate-pulse"
                        : ""
                    }`}
                  >
                    {msg}
                  </div>
                ))}
                {isLoading && currentMessages.length % 2 !== 0 && (
                  <div className="bg-[#121731]/90 rounded-lg p-4 animate-pulse">
                    De filosoof denkt na...
                  </div>
                )}
              </div>
              
              <div className="mt-auto">
                <form onSubmit={handleSubmit} className="flex items-center">
                  <input
                    type="text"
                    placeholder={`Stel een vraag aan ${currentPhilosopher.name}...`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#121731]/90 text-white px-4 py-3 rounded-l-lg focus:outline-none"
                    disabled={isLoading}
                  />
                  <button 
                    type="submit" 
                    className="bg-[#121731]/90 text-white px-4 py-3 rounded-r-lg"
                    disabled={isLoading}
                  >
                    <Send size={18} className="text-gray-300" />
                  </button>
                </form>
                <div className="flex justify-between mt-4">
                  <button className="text-white bg-[#121731]/90 p-2 rounded-full" title="Voice input">
                    <MessageSquare size={18} />
                  </button>
                  <p className="text-sm text-gray-400">
                    {isLoading ? "De filosoof denkt na..." : `Stel een vraag aan ${currentPhilosopher.name}...`}
                  </p>
                  <div className="flex space-x-2">
                    <button className="text-white bg-[#121731]/90 p-2 rounded-full" title="Voice output">
                      <MessageSquare size={18} />
                    </button>
                    <button className="text-white bg-[#121731]/90 p-2 rounded-full" title="Options">
                      ⋮
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Philosopher Image with Fade-In Animation */}
          <div className="w-full lg:w-1/2 flex justify-center items-center pl-8">
            <div className={`transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
              <img 
                src={currentPhilosopher.image}
                alt={`${currentPhilosopher.name} Character`}
                className="max-h-[90vh] object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Right Arrow */}
        <div 
          onClick={() => navigateToPhilosopher('next')}
          className="cursor-pointer p-4 bg-[#1B1F3B]/70 rounded-full hover:bg-[#1B1F3B]/90 transition-all"
        >
          <ChevronRight size={32} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
