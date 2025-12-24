import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { ASSETS } from '../constants';

const WikiBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello, traveler! I am the BlockRealm Guide. Ask me anything about our server rules, economy, or crafting recipes!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const systemInstruction = `
        You are the official AI guide for a Minecraft server called "BlockRealm". 
        Roleplay as a wise, friendly, slightly blocky librarian. 
        Use Minecraft terminology (blocks, chunks, mobs, crafting).
        
        Server Info:
        - IP: play.blockrealm.net
        - Version: 1.21.1
        - Modes: Survival (SMP), Skyblock, Creative Plots.
        - Rules: No griefing, no hacking (x-ray is banned), respect staff.
        - Economy: Gold Ingots are currency. Use /sell hand to sell items.
        - Staff: Owner: Notch_Fan, Admin: Herobrine_Hunter.
        
        Keep responses concise (under 80 words) and helpful.
        If asked about things unrelated to Minecraft or the server, politely steer back to the server.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            ...messages.filter(m => m.id !== 'welcome').map(m => ({
                role: m.role,
                parts: [{ text: m.text }]
            })),
            { role: 'user', parts: [{ text: userMsg.text }] }
        ],
        config: {
          systemInstruction,
        }
      });

      const text = response.text || "I seem to have lost my connection to the Redstone network...";

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: text
      };

      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "My communication circuits are fried (API Error). Please try again later!"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto mb-4 w-80 md:w-96 mc-panel bg-[#c6c6c6] flex flex-col shadow-2xl animate-fade-in-up">
          
          {/* Header */}
          <div className="bg-[#3e3e3e] p-2 flex justify-between items-center border-b-4 border-black text-white">
            <div className="flex items-center gap-2">
              <div className="bg-mc-green p-1 border-2 border-black">
                 <Bot size={20} />
              </div>
              <span className="text-xl">Server Guide</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-red-500 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-[#18181b] space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`
                    max-w-[85%] p-2 text-lg border-2 border-black shadow-[2px_2px_0_#000]
                    ${msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tl-lg rounded-bl-lg rounded-br-lg' 
                      : 'bg-white text-black rounded-tr-lg rounded-br-lg rounded-bl-lg'}
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white text-black p-2 border-2 border-black flex items-center gap-2">
                    <Loader2 className="animate-spin" size={16} />
                    <span>Thinking...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-2 bg-[#c6c6c6] border-t-4 border-black flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about rules, commands..."
              className="flex-1 bg-white border-2 border-[#555] p-2 text-black text-xl focus:outline-none focus:border-blue-600 placeholder-gray-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-mc-green p-2 border-2 border-black hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={24} color="white" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          pointer-events-auto
          mc-btn p-4 rounded-full transition-all duration-300
          ${isOpen ? 'bg-red-600 rotate-90' : 'bg-mc-green hover:-translate-y-1'}
        `}
      >
         {isOpen ? <X size={32} color="white" /> : <MessageSquare size={32} color="white" />}
      </button>

      {!isOpen && (
        <div className="pointer-events-auto mt-2 bg-black/80 text-white px-3 py-1 rounded border-2 border-white text-lg animate-bounce">
          Need help?
        </div>
      )}
    </div>
  );
};

export default WikiBot;