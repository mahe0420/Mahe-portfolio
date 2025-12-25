
import React, { useState, useRef, useEffect } from 'react';
import { chatWithResume } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Mahendra's AI assistant. Want to know about his projects or skills?" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await chatWithResume(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response || '' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="glass w-[320px] sm:w-[380px] h-[500px] rounded-none border border-white/20 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-4 bg-blue-600 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-white/20 flex items-center justify-center border border-white/10 rounded-square">
                <i className="fas fa-robot text-sm"></i>
              </div>
              <div>
                <p className="font-black text-xs uppercase tracking-widest">Resume Assistant</p>
                <p className="text-[9px] opacity-70 uppercase tracking-tighter">Gemini Intelligence</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 w-8 h-8 rounded-none transition-all">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-none text-sm font-medium ${
                  m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-200 border border-white/10'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-square text-gray-400 text-xs flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 animate-pulse delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 animate-pulse delay-200"></div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="ASK ABOUT HIS CAREER..."
              className="flex-1 bg-white/5 border border-white/10 rounded-square px-4 py-3 text-xs focus:outline-none focus:border-blue-500 transition-all text-white uppercase tracking-widest"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white w-12 h-12 rounded-square flex items-center justify-center transition-all rounded-square"
            >
              <i className="fas fa-paper-plane text-sm"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-square shadow-lg shadow-blue-500/40 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group border border-blue-400/20 rounded-square"
        >
          <i className="fas fa-robot text-xl"></i>
          <span className="absolute right-full mr-4 bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-square opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap uppercase tracking-[0.2em] border border-blue-400/20 rounded-square">
            Chat with Resume
          </span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
