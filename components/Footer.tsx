import React from 'react';
import { ASSETS } from '../constants';
import { Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0d0d0d] text-gray-400 border-t-4 border-[#333] mt-20 font-mc">
        {/* Top Decorative Border (Subtle strip) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#555] opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                
                {/* Brand / About */}
                <div className="md:col-span-2 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                         <img src={ASSETS.sword} alt="sword" className="w-8 h-8 drop-shadow-md" />
                         <h2 className="text-3xl text-white pixel-text-shadow tracking-widest leading-none">BLOCK REALM</h2>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-400 max-w-md">
                        The ultimate destination for survival enthusiasts. 
                        Join thousands of players in a world crafted for adventure, 
                        creativity, and endless fun.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#56a738]"></span>
                        <span>All Systems Operational</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl text-[#fcd03f] mb-6 pixel-text-shadow border-b-2 border-[#333] pb-2 inline-block">
                        NAVIGATION
                    </h3>
                    <ul className="space-y-3 text-lg">
                        {['Home', 'Server Map', 'Rules & Wiki', 'Store', 'Vote', 'Staff'].map((item) => (
                            <li key={item}>
                                <a href="#" className="flex items-center gap-2 hover:text-white transition-all group">
                                    <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-[#fcd03f] transition-colors"></span>
                                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter / Connect */}
                <div>
                     <h3 className="text-xl text-[#fcd03f] mb-6 pixel-text-shadow border-b-2 border-[#333] pb-2 inline-block">
                        STAY UPDATED
                    </h3>
                    <p className="mb-4 text-base">Subscribe for update news and event alerts.</p>
                    
                    <div className="flex gap-2 mb-8">
                        <input 
                            type="email" 
                            placeholder="Email..." 
                            className="bg-[#1a1a1a] border-2 border-[#333] text-white px-3 py-2 w-full font-mc focus:border-[#fcd03f] outline-none"
                        />
                        <button className="bg-[#56a738] border-2 border-[#2f611e] px-3 py-2 text-white hover:brightness-110 active:translate-y-1 shadow-[2px_2px_0_#000]">
                            <Send size={18} />
                        </button>
                    </div>

                    <div className="flex gap-3">
                        {/* Social Icons as Inventory Slots */}
                        {[
                            { color: '#5865F2', label: 'DC' },
                            { color: '#1DA1F2', label: 'TW' },
                            { color: '#FF0000', label: 'YT' }
                        ].map((social, idx) => (
                            <a key={idx} href="#" className="w-10 h-10 bg-[#8b8b8b] border-2 border-black shadow-[inset_2px_2px_0_rgba(255,255,255,0.2),inset_-2px_-2px_0_rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-[#a0a0a0] transition-colors group relative overflow-hidden">
                                <span className="relative z-10 font-bold text-white text-sm shadow-black drop-shadow-md">{social.label}</span>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity" style={{backgroundColor: social.color}}></div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#222] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <div className="text-gray-500 text-base">
                    <p>&copy; 2025 BlockRealm Network. All rights reserved.</p>
                    <p className="text-sm mt-1 opacity-60">Not affiliated with Mojang Studios.</p>
                </div>
                <div className="flex gap-6 text-gray-500 text-base">
                    <a href="#" className="hover:text-white hover:underline decoration-1">Privacy Policy</a>
                    <a href="#" className="hover:text-white hover:underline decoration-1">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;