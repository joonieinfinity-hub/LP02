
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Wine, Loader2 } from 'lucide-react';
import { getSommelierResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const SommelierBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Lenoir. I'm your Virtual Sommelier. How can I assist you with our menu or wine pairings today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const response = await getSommelierResponse(history, userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I'm finding it hard to focus on the cellar notes right now. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-body">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-lenoir-accent rotate-90' : 'bg-lenoir-primary hover:bg-lenoir-accent'
        } text-white`}
      >
        {isOpen ? <X size={28} /> : <Wine size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-lg shadow-2xl border border-lenoir-stone flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-lenoir-primary p-6 text-white">
            <h4 className="font-heading text-2xl">Virtual Sommelier</h4>
            <p className="text-xs uppercase tracking-widest opacity-70">Ask about pairings & ingredients</p>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-lenoir-bg/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-lenoir-accent text-white rounded-br-none' 
                      : 'bg-white text-lenoir-text border border-lenoir-stone rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-lenoir-stone p-3 rounded-lg rounded-bl-none flex items-center gap-2">
                  <Loader2 className="animate-spin text-lenoir-primary" size={16} />
                  <span className="text-xs text-lenoir-text/50 uppercase tracking-widest">Checking cellar...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-lenoir-stone flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about the wine or menu..."
              className="flex-grow text-sm bg-lenoir-stone/30 border-none px-4 py-3 focus:ring-1 focus:ring-lenoir-primary transition-all rounded-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-lenoir-primary text-white p-3 rounded-sm hover:bg-lenoir-accent disabled:opacity-50 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SommelierBot;
