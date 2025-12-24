import React from 'react';
import { ServerItem } from '../types';

const FEATURED: ServerItem[] = [
    {
        id: 1,
        name: "BLOCKCRAFT SMP",
        ip: "play.blockcraft.net",
        players: 125,
        maxPlayers: 200,
        version: "1.21",
        mode: "Survival",
        tags: ["Survival", "Economy"],
        description: "Classic survival experience.",
        image: "https://picsum.photos/id/1040/200/200"
    },
    {
        id: 2,
        name: "GALAXY BUILDERS",
        ip: "build.galaxy.net",
        players: 890,
        maxPlayers: 1000,
        version: "1.20",
        mode: "Creative",
        tags: ["Creative", "Sci-Fi", "RP"],
        description: "Build in space.",
        image: "https://picsum.photos/id/1039/200/200"
    },
    {
        id: 3,
        name: "NATURE'S OASIS",
        ip: "oasis.mc.net",
        players: 56,
        maxPlayers: 100,
        version: "1.21",
        mode: "Adventure",
        tags: ["Adventure", "RPG"],
        description: "Custom RPG map.",
        image: "https://picsum.photos/id/1038/200/200"
    }
];

const Featured: React.FC = () => {
  return (
    <div 
        className="p-4 border-4 border-black relative overflow-hidden"
        style={{
            backgroundImage: "url('https://youke2.picui.cn/s1/2025/12/24/694bd22c5384b.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            imageRendering: 'pixelated'
        }}
    >
        {/* Background Grid Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20" 
             style={{backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)', backgroundSize: '40px 40px'}}>
        </div>

        <h3 className="text-3xl text-[#fcd03f] pixel-text-shadow text-center mb-6 relative z-10">
            FEATURED SERVERS
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative z-10">
            {FEATURED.map(server => (
                <div key={server.id} className="bg-[#a8a8a8] border-4 border-black p-2 flex flex-col items-center hover:-translate-y-1 transition-transform cursor-pointer shadow-xl">
                    <div className="w-full aspect-square bg-[#333] border-2 border-black mb-2 overflow-hidden">
                        <img src={server.image} alt={server.name} className="w-full h-full object-cover" style={{imageRendering: 'pixelated'}} />
                    </div>
                    
                    <h4 className="text-[#fcd03f] text-2xl pixel-text-shadow-sm mb-1">{server.name}</h4>
                    
                    <div className="w-full text-left space-y-1 mb-2">
                        <div className="flex items-center gap-2">
                             <div className="w-3 h-3 bg-green-500 border border-black"></div>
                             <span className="text-white text-lg drop-shadow-md">{server.players}/{server.maxPlayers}</span>
                        </div>
                         <div className="flex items-center gap-2">
                             <span className="text-orange-900">🦴</span>
                             <span className="text-white text-lg drop-shadow-md">{server.tags.join(', ')}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Featured;