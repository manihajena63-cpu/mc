import React from 'react';
import { ASSETS } from '../constants';
import { Sword } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 pointer-events-none">
        {/* Use pointer-events-auto on interactive elements so clicks pass through empty spaces if needed, 
            though usually a navbar captures events. Since it's transparent, we might want the area to be clickable if it contains buttons.
            I'll keep the wrapper standard but transparent.
        */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto">
            
            {/* Title Section */}
            <div className="flex items-center gap-4">
                <img src={ASSETS.sword} className="w-12 h-12 -scale-x-100 drop-shadow-lg" alt="sword" />
                <div className="flex flex-col items-center">
                    <img 
                        src={ASSETS.logoHeader} 
                        alt="Minecraft" 
                        className="h-10 md:h-12 w-auto object-contain drop-shadow-lg mb-1" 
                    />
                    <h2 
                        className="text-4xl md:text-5xl font-bold tracking-widest mt-1"
                        style={{
                            color: '#d1d1d1',
                            textShadow: '0px 4px 0px #505050, 0px 6px 0px #1a1a1a, 2px 2px 10px rgba(0,0,0,0.5)',
                            fontFamily: '"VT323", monospace'
                        }}
                    >
                        PUBLIC SERVERS
                    </h2>
                </div>
                <img src={ASSETS.sword} className="w-12 h-12 drop-shadow-lg" alt="sword" />
            </div>

            {/* Nav Buttons */}
            <div className="flex gap-2 flex-wrap justify-center">
                <button className="mc-btn-wood px-6 py-2 text-xl text-[#dedede] hover:brightness-110 active:translate-y-1 shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                    HOME
                </button>
                <button className="mc-btn-stone px-6 py-2 text-xl text-[#dedede] hover:brightness-110 active:translate-y-1 shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                    SERVER LIST
                </button>
                <button className="mc-btn-wood px-6 py-2 text-xl text-[#dedede] hover:brightness-110 active:translate-y-1 shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                    ADD SERVER
                </button>
                 <button className="mc-btn-stone px-6 py-2 text-xl text-[#dedede] hover:brightness-110 active:translate-y-1 shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                    API STATUS
                </button>
            </div>
        </div>
    </div>
  );
};

export default Navbar;