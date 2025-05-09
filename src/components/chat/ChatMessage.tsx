
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
      {content}
    </div>
  );
};

export default ChatMessage;
