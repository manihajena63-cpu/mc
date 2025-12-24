import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const data = [
  { name: '10 AM', players: 1200 },
  { name: '12 PM', players: 1900 },
  { name: '2 PM', players: 2400 },
  { name: '4 PM', players: 2100 },
  { name: '6 PM', players: 2800 },
  { name: '8 PM', players: 3200 },
  { name: '10 PM', players: 2900 },
];

const ServerStatus: React.FC = () => {
  return (
    <section className="bg-[#18181b] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Status Panel */}
          <div className="lg:col-span-1">
             <div className="mc-panel p-6 h-full flex flex-col items-center justify-center text-black">
                <h2 className="text-4xl mb-6 border-b-4 border-black pb-2 w-full text-center">Server Status</h2>
                
                <div className="flex flex-col gap-6 w-full">
                   <div className="flex justify-between items-center bg-gray-300 p-4 border-2 border-gray-500">
                      <span className="text-2xl">Status</span>
                      <span className="text-2xl text-green-700 font-bold flex items-center gap-2">
                        <span className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></span>
                        ONLINE
                      </span>
                   </div>

                   <div className="flex justify-between items-center bg-gray-300 p-4 border-2 border-gray-500">
                      <span className="text-2xl">Version</span>
                      <span className="text-2xl text-blue-800">1.21.1</span>
                   </div>

                   <div className="flex justify-between items-center bg-gray-300 p-4 border-2 border-gray-500">
                      <span className="text-2xl">Latency</span>
                      <span className="text-2xl text-green-700">14ms</span>
                   </div>
                </div>

                <div className="mt-8 text-center text-lg text-gray-700">
                    Last updated: Just now
                </div>
             </div>
          </div>

          {/* Activity Graph */}
          <div className="lg:col-span-2">
            <div className="mc-panel p-6 h-full text-black">
                <h2 className="text-4xl mb-6 border-b-4 border-black pb-2 w-full">Player Activity</h2>
                <div className="h-64 w-full bg-gray-800 border-4 border-gray-600 p-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <XAxis dataKey="name" stroke="#fff" tick={{fontFamily: 'VT323', fontSize: 20}} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#18181b', 
                          border: '2px solid #fff', 
                          fontFamily: 'VT323',
                          fontSize: '20px',
                          color: '#fff'
                        }} 
                        cursor={{fill: 'rgba(255,255,255,0.1)'}}
                      />
                      <Bar dataKey="players" fill="#56a738" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-xl flex justify-between items-center">
                    <span>Peak Players (24h): <span className="text-blue-800 font-bold">3,421</span></span>
                    <span className="text-gray-600">Timezone: UTC</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServerStatus;