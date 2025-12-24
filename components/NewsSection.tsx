import React from 'react';
import { MOCK_NEWS } from '../constants';
import MCButton from './MCButton';

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="bg-[#2a2a2e] py-20 px-4 border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl text-white pixel-text-shadow">LATEST NEWS</h2>
          <MCButton>View Archive</MCButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_NEWS.map((post) => (
            <div key={post.id} className="mc-panel p-0 bg-gray-200 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 overflow-hidden border-b-4 border-black relative">
                 <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'pixelated' }}
                 />
                 <div className="absolute top-4 right-4 bg-yellow-400 border-2 border-black text-black px-2 py-1 text-xl font-bold uppercase shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                    {post.category}
                 </div>
              </div>
              
              <div className="p-6 text-black flex-1 flex flex-col">
                <div className="text-gray-600 text-xl mb-2">{post.date}</div>
                <h3 className="text-3xl leading-none mb-3 font-bold group-hover:text-blue-800 transition-colors">
                  {post.title}
                </h3>
                <p className="text-2xl text-gray-800 leading-6 mb-6 flex-1">
                  {post.excerpt}
                </p>
                <MCButton className="w-full text-lg py-2" variant="primary">Read More</MCButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;