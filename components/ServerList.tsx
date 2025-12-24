import React from 'react';

const SERVERS = [
    { name: "MineWorld", players: "89/100", version: "1.20.1", mode: "Survival", type: "Survival" },
    { name: "BlockEmpire", players: "1200/5000", version: "1.21", mode: "Skyblock", type: "Economy" },
    { name: "Pixelia Realms", players: "45/50", version: "1.19", mode: "Creative", type: "Plots" },
    { name: "RedstoneLab", players: "12/20", version: "1.21", mode: "Tech", type: "Redstone" },
    { name: "MineWorld", players: "89/100", version: "1.20.1", mode: "Survival", type: "Survival" },
];

const ServerList: React.FC = () => {
  return (
    <div className="mc-dark-panel p-4 mt-6">
        <h3 className="text-3xl text-[#fcd03f] pixel-text-shadow text-center mb-4">
            SERVER LIST
        </h3>

        <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-gray-400 text-xl border-b-2 border-gray-600">
                        <th className="p-3">SERVER NAME</th>
                        <th className="p-3">PLAYERS</th>
                        <th className="p-3">VERSION</th>
                        <th className="p-3">GAME MODE</th>
                        <th className="p-3">TYPE</th>
                        <th className="p-3 text-right">VOTE</th>
                    </tr>
                </thead>
                <tbody className="text-white text-xl">
                    {SERVERS.map((server, i) => (
                        <tr key={i} className={`border-b border-gray-700 hover:bg-white/5 transition-colors ${i % 2 === 0 ? 'bg-black/20' : ''}`}>
                            <td className="p-3 font-bold">{server.name}</td>
                            <td className="p-3">{server.players}</td>
                            <td className="p-3">{server.version}</td>
                            <td className="p-3">{server.mode}</td>
                            <td className="p-3">{server.type}</td>
                            <td className="p-3 text-right">
                                <button className="bg-[#56a738] border-2 border-[#2f611e] px-4 py-1 text-white shadow-[2px_2px_0_#000] hover:brightness-110 active:translate-y-1">
                                    Vote
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default ServerList;