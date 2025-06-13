
import React from 'react';

interface ChatMessageProps {
  content: string;
  isPhilosopher: boolean;
  isLoading?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, isPhilosopher, isLoading = false }) => {
  return (
    <div 
      className={`p-4 rounded-lg ${
        isPhilosopher 
          ? "bg-[#121731]/90" 
          : "bg-[#232a43]/90 ml-auto"
      } ${isLoading ? "animate-pulse" : ""}`}
    >
      {isLoading ? (
        <div className="flex items-center space-x-1">
          <span>{content}</span>
          <div className="flex space-x-1 ml-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default ChatMessage;
