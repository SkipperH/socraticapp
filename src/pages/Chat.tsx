
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getPhilosopherResponse, isApiKeySet } from '../utils/geminiService';
import { toast } from '@/components/ui/sonner';
import NavBar from '../components/NavBar';
import ApiKeyModal from '../components/ApiKeyModal';
import { philosophers } from '../models/Philosopher';
import ChatWindow from '../components/chat/ChatWindow';
import PhilosopherAvatar from '../components/chat/PhilosopherAvatar';
import NavigationButton from '../components/chat/NavigationButton';

const Chat: React.FC = () => {
  const [currentPhilosopherIndex, setCurrentPhilosopherIndex] = useState(0);
  const [messagesMap, setMessagesMap] = useState<Record<number, string[]>>({
    0: ['Ik denk, dus ik besta. Maar wat denk jij? Laten we samen redeneren.'],
    1: ['Het geluk van je leven hangt af van de kwaliteit van je gedachten. Waar denk jij vandaag aan?'],
    2: ['Hij die een waarom heeft om voor te leven kan bijna elk hoe verdragen. Wat is jouw waarom?']
  });
  const [isLoading, setIsLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState(localStorage.getItem('gemini_model') || 'gemini-2.0-flash-exp');

  const currentPhilosopher = philosophers[currentPhilosopherIndex];
  const currentMessages = messagesMap[currentPhilosopherIndex] || [currentPhilosopher.initialMessage];

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
      const newModel = localStorage.getItem('gemini_model') || 'gemini-2.0-flash-exp';
      if (newModel !== currentModel) {
        setCurrentModel(newModel);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [currentModel]);

  const handleSendMessage = async (message: string) => {
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
        <NavigationButton direction="prev" onClick={() => navigateToPhilosopher('prev')}>
          <ChevronLeft size={32} />
        </NavigationButton>
        
        {/* Chat Window */}
        <div className="flex-1 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <ChatWindow 
              philosopherName={currentPhilosopher.name}
              messages={currentMessages}
              isLoading={isLoading}
              currentModel={currentModel}
              onSendMessage={handleSendMessage}
              onOpenSettings={() => setIsApiKeyModalOpen(true)}
            />
          </div>
          
          {/* Philosopher Image with Fade-In Animation */}
          <div className="w-full lg:w-1/2 flex justify-center items-center pl-8">
            <PhilosopherAvatar 
              image={currentPhilosopher.image}
              name={currentPhilosopher.name}
              fadeIn={fadeIn}
            />
          </div>
        </div>
        
        {/* Right Arrow */}
        <NavigationButton direction="next" onClick={() => navigateToPhilosopher('next')}>
          <ChevronRight size={32} />
        </NavigationButton>
      </div>
    </div>
  );
};

export default Chat;
