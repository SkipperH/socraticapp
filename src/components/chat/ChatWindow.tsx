
import React from 'react';
import { Settings } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface ChatWindowProps {
  philosopherName: string;
  messages: string[];
  isLoading: boolean;
  currentModel: string;
  onSendMessage: (message: string) => void;
  onOpenSettings: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ 
  philosopherName, 
  messages, 
  isLoading, 
  currentModel,
  onSendMessage, 
  onOpenSettings 
}) => {
  // Get the current model display name
  const getCurrentModelName = () => {
    const modelMap: Record<string, string> = {
      'gpt-3.5-turbo': 'GPT-3.5',
      'gpt-4o-mini': 'GPT-4o Mini',
      'gpt-4o': 'GPT-4o'
    };
    
    return modelMap[currentModel] || currentModel;
  };

  return (
    <div className="bg-[#1A1F2C]/80 backdrop-blur-sm rounded-lg p-6 shadow-lg h-[85vh] flex flex-col">
      <div className="text-center mb-4 flex justify-between items-center">
        <div className="text-xs bg-[#121731]/80 px-2 py-1 rounded-md">
          <span className="text-gray-400">Model: </span>
          <span className="text-gray-300">{getCurrentModelName()}</span>
        </div>
        <h2 className="text-xl font-semibold">{philosopherName}</h2>
        <button
          onClick={onOpenSettings}
          className="text-gray-400 hover:text-white transition-colors"
          title="API Instellingen"
        >
          <Settings size={18} />
        </button>
      </div>
      
      <div className="flex-grow space-y-4 mb-6 overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatMessage 
            key={index}
            content={msg}
            isPhilosopher={index % 2 === 0}
            isLoading={isLoading && index === messages.length - 1 && index % 2 === 0}
          />
        ))}
        {isLoading && messages.length % 2 !== 0 && (
          <ChatMessage 
            content="De filosoof denkt na..."
            isPhilosopher={true}
            isLoading={true}
          />
        )}
      </div>
      
      <ChatInput 
        onSendMessage={onSendMessage}
        isLoading={isLoading}
        philosopherName={philosopherName}
      />
    </div>
  );
};

export default ChatWindow;
