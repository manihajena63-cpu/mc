import React from 'react';
import { Search } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="mc-wood-bg p-4 border-4 border-black text-white h-fit">
        <h3 className="text-3xl text-[#fcd03f] pixel-text-shadow text-center mb-6 border-b-4 border-[#3e2b22] pb-2">
            FILTER SERVERS
        </h3>

        <div className="space-y-6">
            {/* Game Mode */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-green-600 border-2 border-black flex items-center justify-center">
                        <span className="text-xs">✓</span>
                    </div>
                    <span className="text-xl">Game Mode</span>
                </div>
            </div>

             {/* Version */}
             <div>
                <div className="flex items-center gap-2 mb-2 opacity-50">
                    <div className="w-6 h-6 bg-[#3e2b22] border-2 border-black"></div>
                    <span className="text-xl">Version</span>
                </div>
            </div>

            {/* Country */}
             <div>
                <div className="flex items-center gap-2 mb-2 opacity-50">
                    <div className="w-6 h-6 bg-[#3e2b22] border-2 border-black"></div>
                    <span className="text-xl">Country</span>
                </div>
            </div>

            {/* Search Inputs */}
            <div className="space-y-3 pt-4">
                <div className="mc-border-inset bg-black/30 p-2 flex items-center gap-2">
                    <input 
                        type="text" 
                        placeholder="Search Name..." 
                        className="bg-transparent w-full text-white placeholder-gray-400 outline-none font-mc text-lg"
                    />
                </div>
                 <div className="mc-border-inset bg-black/30 p-2 flex items-center gap-2">
                    <input 
                        type="text" 
                        placeholder="Search Tag..." 
                        className="bg-transparent w-full text-white placeholder-gray-400 outline-none font-mc text-lg"
                    />
                    <Search size={18} className="text-gray-400"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;