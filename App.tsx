import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Featured from './components/Featured';
import ApiPanel from './components/ApiPanel';
import ServerList from './components/ServerList';
import WikiBot from './components/WikiBot';
import { ASSETS } from './constants';

const App: React.FC = () => {
  return (
    <div className="font-mc text-white min-h-screen bg-[#18181b] selection:bg-mc-green selection:text-white pb-20 relative bg-cover bg-fixed bg-center"
         style={{backgroundImage: `url('${ASSETS.bg}')`}}>
      
      <Navbar />

      {/* Added pt-40 to push content down below the fixed navbar */}
      <main className="max-w-7xl mx-auto px-4 pt-40 pb-8">
        {/* Top Grid: Filters | Featured | API */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Sidebar: 3 cols */}
            <div className="md:col-span-3">
                <Sidebar />
            </div>

            {/* Middle: 6 cols */}
            <div className="md:col-span-6 flex flex-col gap-6">
                <Featured />
            </div>

            {/* Right Sidebar: 3 cols */}
            <div className="md:col-span-3">
                <ApiPanel />
            </div>
        </div>

        {/* Bottom Section: Server List */}
        <ServerList />
      </main>

      <WikiBot />
    </div>
  );
};

export default App;