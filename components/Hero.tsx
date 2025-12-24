import React, { useState } from 'react';
import { ASSETS, SERVER_IP } from '../constants';
import MCButton from './MCButton';
import { Copy, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ 
          backgroundImage: `url(${ASSETS.bg})`,
          imageRendering: 'pixelated' 
        }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-[#18181b]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Main Logo */}
        <div className="animate-bounce-slow mb-8">
            <img 
              src={ASSETS.logoMain} 
              alt="Server Logo" 
              className="w-64 md:w-96 h-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] mx-auto hover:scale-105 transition-transform duration-300" 
            />
        </div>

        <h1 className="text-5xl md:text-7xl mb-4 text-white pixel-text-shadow tracking-wider">
          BLOCK REALM
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-200 mb-10 max-w-2xl drop-shadow-md">
          Join the ultimate survival experience. Build, fight, and explore in a world without limits.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full">
          <MCButton 
            onClick={handleCopy} 
            className="flex items-center justify-center gap-3 min-w-[280px] bg-[#5d4037] hover:bg-[#704d42] border-mc-green"
          >
            {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
            <span>{SERVER_IP}</span>
          </MCButton>

          <MCButton variant="success" className="min-w-[280px] flex items-center justify-center gap-3">
             <span>PLAY NOW</span>
             <img src={ASSETS.sword} alt="sword" className="w-8 h-8 transform rotate-45" />
          </MCButton>
        </div>
        
        <div className="mt-8 text-mc-green text-xl md:text-2xl drop-shadow-md animate-pulse">
          ● 2,431 Players Online
        </div>

      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#18181b] to-transparent z-20 pointer-events-none"></div>
    </div>
  );
};

export default Hero;