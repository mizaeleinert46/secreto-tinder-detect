
import React from 'react';
import { Video, History, PhoneIncoming, PhoneMissed } from 'lucide-react';

// Dados de chamadas com mulheres (quando o alvo é homem)
const womanCallHistoryData = [
  { name: 'Ana****', date: 'Hoje, 21:14', duration: '12 min 45s', status: 'Atendida' as const },
  { name: 'Sab****', date: 'Ontem, 18:32', duration: '03 min 21s', status: 'Atendida' as const },
  { name: 'Jul****', date: '13/06/2025', duration: 'Não atendida', status: 'Não atendida' as const },
  { name: 'Lar****', date: '13/06/2025', duration: '28 min 09s', status: 'Atendida' as const },
  { name: 'Cam****', date: '11/06/2025', duration: 'Não atendida', status: 'Não atendida' as const },
];

// Dados de chamadas com homens (quando o alvo é mulher)
const manCallHistoryData = [
  { name: 'Mar***', date: 'Hoje, 22:05', duration: '08 min 12s', status: 'Atendida' as const },
  { name: 'Ped***', date: 'Ontem, 20:11', duration: 'Não atendida', status: 'Não atendida' as const },
  { name: 'Bru***', date: '12/06/2025', duration: '15 min 50s', status: 'Atendida' as const },
  { name: 'Gui****', date: '12/06/2025', duration: '05 min 02s', status: 'Atendida' as const },
  { name: 'Raf****', date: '10/06/2025', duration: 'Não atendida', status: 'Não atendida' as const },
];

const CallRecord = ({ name, date, duration, status }: { name: string, date: string, duration: string, status: 'Atendida' | 'Não atendida' }) => {
  const isAnswered = status === 'Atendida';
  return (
    <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-gray-700/50 hover:bg-gray-800/40 transition-colors">
      <div className="flex items-center gap-4">
        {isAnswered ? (
          <PhoneIncoming className="w-6 h-6 text-green-400" />
        ) : (
          <PhoneMissed className="w-6 h-6 text-red-500" />
        )}
        <div>
          <p className="font-bold text-white text-lg">{name}</p>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
      </div>
      <div className={`text-right ${isAnswered ? 'text-gray-300' : 'text-red-400'}`}>
        <p className="font-mono text-base">{duration}</p>
      </div>
    </div>
  );
};

export default function VideoCallHistory({ gender }: { gender: 'homem' | 'mulher' }) {
  const isTargetMan = gender === 'homem';
  const callHistoryData = isTargetMan ? womanCallHistoryData : manCallHistoryData;

  return (
    <div className="space-y-8 mt-10">
      <div className="relative mx-auto max-w-4xl rounded-2xl neon-frame-hacker bg-gradient-to-br from-[#11131d]/95 via-[#0c1a1c]/90 to-[#11131d]/95 border-2 border-green-500/30 shadow-2xl shadow-green-500/10 p-6 md:p-10 overflow-hidden select-none backdrop-blur-sm">
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-pink-300 flex items-center justify-center gap-4 drop-shadow-glow">
            <History className="w-10 h-10 text-green-400 animate-pulse" /> Histórico de Ligações
          </h3>
          <p className="text-gray-300 mt-3 text-lg">Detectamos um histórico de chamadas de vídeo recentes.</p>
        </div>

        <div className="space-y-4">
          {callHistoryData.map((call, index) => (
            <CallRecord key={index} {...call} />
          ))}
        </div>

        <p className="text-center text-sm text-green-300 mt-6 animate-pulse">
          <Video className="inline w-4 h-4 mr-1" /> O conteúdo das chamadas e conversas está disponível no dossiê completo.
        </p>
      </div>
    </div>
  );
}
