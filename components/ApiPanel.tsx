import React from 'react';

const ApiPanel: React.FC = () => {
  return (
    <div className="mc-dark-panel p-6 text-center h-full flex flex-col items-center">
        <h3 className="text-3xl text-[#fcd03f] pixel-text-shadow mb-6">
            API DATA (MOCK)
        </h3>

        <div className="space-y-8 w-full">
            <div>
                 <div className="text-5xl text-green-500 pixel-text-shadow mb-1">5,000</div>
                 <div className="text-xl text-gray-400">Total Players</div>
            </div>

            <div>
                 <div className="text-xl text-gray-300 mb-1">Total Servers:</div>
                 <div className="text-3xl text-green-500 pixel-text-shadow">150,000</div>
            </div>

             <div>
                 <div className="text-xl text-gray-300 mb-1">API Latency:</div>
                 <div className="text-3xl text-green-500 pixel-text-shadow">25ms</div>
            </div>
        </div>
    </div>
  );
};

export default ApiPanel;