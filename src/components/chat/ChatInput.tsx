
import React, { useState } from 'react';
import { MessageSquare, Send, Loader2 } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  philosopherName: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading, philosopherName }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="mt-auto">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder={`Stel een vraag aan ${philosopherName}...`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-[#121731]/90 text-white px-4 py-3 rounded-l-lg focus:outline-none"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="bg-[#121731]/90 text-white px-4 py-3 rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading || !message.trim()}
        >
          {isLoading ? (
            <Loader2 size={18} className="text-gray-300 animate-spin" />
          ) : (
            <Send size={18} className="text-gray-300" />
          )}
        </button>
      </form>
      <div className="flex justify-between mt-4">
        <button className="text-white bg-[#121731]/90 p-2 rounded-full" title="Voice input">
          <MessageSquare size={18} />
        </button>
        <p className="text-sm text-gray-400">
          {isLoading ? (
            <span className="flex items-center">
              <Loader2 size={14} className="animate-spin mr-2" />
              De filosoof denkt na...
            </span>
          ) : (
            `Stel een vraag aan ${philosopherName}...`
          )}
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
  );
};

export default ChatInput;
