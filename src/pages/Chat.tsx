
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
        
        {/* Philosopher Image - Hero-sized */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img 
            src="/lovable-uploads/47b16868-3cf1-4fd3-8c4a-5e949e296fca.png"
            alt="Descartes Character" 
            className="max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
