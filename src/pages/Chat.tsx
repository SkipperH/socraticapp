
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([
    'Ik denk, dus ik besta. Maar wat denk jij? Laten we samen redeneren.'
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[#121731] text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-[#121731]">
        <div className="flex space-x-10">
          <Link to="/" className="text-white text-lg font-medium">ABOUT</Link>
          <span className="text-white text-lg font-medium">DONATE</span>
        </div>
        <Link to="/" className="bg-[#f1f0e8] px-6 py-3 rounded">
          <span className="font-serif text-socratic-darkest text-xl font-semibold tracking-wider">SOCRATIC</span>
        </Link>
      </nav>

      {/* Chat Interface */}
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row">
        {/* Chat Window */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="bg-[#1A1F2C] rounded-lg p-6 shadow-lg">
            <div className="space-y-4 mb-6 min-h-[400px]">
              {messages.map((msg, index) => (
                <div key={index} className="bg-[#121731] rounded-lg p-4">
                  {msg}
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  type="text"
                  placeholder="Wat bedoel je met ik denk dus ik besta?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#121731] text-white px-4 py-3 rounded-l-lg focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-[#121731] text-white px-4 py-3 rounded-r-lg"
                >
                  <span className="sr-only">Send</span>
                  <span>→</span>
                </button>
              </form>
              <div className="flex justify-between mt-4">
                <button className="text-white bg-[#121731] p-2 rounded-full">
                  <span className="sr-only">Voice</span>
                  🎤
                </button>
                <p className="text-sm text-gray-400">Stel een vraag Descartes...</p>
                <div className="flex space-x-2">
                  <button className="text-white bg-[#121731] p-2 rounded-full">
                    <span className="sr-only">Voice</span>
                    🎤
                  </button>
                  <button className="text-white bg-[#121731] p-2 rounded-full">
                    <span className="sr-only">Options</span>
                    ⋮
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Philosopher Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img 
            src="/lovable-uploads/e158125c-5626-487b-8c0e-fa532d079969.png"
            alt="Philosopher Character" 
            className="max-h-[70vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
