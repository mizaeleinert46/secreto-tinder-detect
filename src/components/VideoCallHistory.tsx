
import React from 'react';
import { Video, History, PhoneIncoming, PhoneMissed, Clock, MapPin } from 'lucide-react';

// Dados de chamadas com mulheres (quando o alvo é homem)
const womanCallHistoryData = [
  { name: 'Ana Paula', date: 'Hoje, 21:14', duration: '12 min 45s', status: 'Atendida' as const, location: 'Casa dela' },
  { name: 'Sabrina', date: 'Ontem, 18:32', duration: '03 min 21s', status: 'Atendida' as const, location: 'Hotel' },
  { name: 'Juliana', date: '13/06/2025', duration: 'Não atendida', status: 'Não atendida' as const, location: 'Desconhecido' },
  { name: 'Larissa', date: '13/06/2025', duration: '28 min 09s', status: 'Atendida' as const, location: 'Apartamento' },
  { name: 'Camila', date: '11/06/2025', duration: 'Não atendida', status: 'Não atendida' as const, location: 'Trabalho' },
];

// Dados de chamadas com homens (quando o alvo é mulher)
const manCallHistoryData = [
  { name: 'Marcelo', date: 'Hoje, 22:05', duration: '08 min 12s', status: 'Atendida' as const, location: 'Apartamento dele' },
  { name: 'Pedro', date: 'Ontem, 20:11', duration: 'Não atendida', status: 'Não atendida' as const, location: 'Carro' },
  { name: 'Bruno', date: '12/06/2025', duration: '15 min 50s', status: 'Atendida' as const, location: 'Casa' },
  { name: 'Guilherme', date: '12/06/2025', duration: '05 min 02s', status: 'Atendida' as const, location: 'Hotel' },
  { name: 'Rafael', date: '10/06/2025', duration: 'Não atendida', status: 'Não atendida' as const, location: 'Escritório' },
];

const CallRecord = ({ name, date, duration, status, location }: { 
  name: string, 
  date: string, 
  duration: string, 
  status: 'Atendida' | 'Não atendida',
  location: string 
}) => {
  const isAnswered = status === 'Atendida';
  const isLongCall = isAnswered && duration.includes('min') && parseInt(duration) > 10;
  
  return (
    <div className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 border-2 backdrop-blur-sm hover:scale-[1.02] ${
      isAnswered 
        ? 'bg-green-900/20 border-green-400/40 hover:border-green-400/60 shadow-green-400/10' 
        : 'bg-red-900/20 border-red-400/40 hover:border-red-400/60 shadow-red-400/10'
    } shadow-xl`}>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-full border-2 ${
          isAnswered 
            ? 'bg-green-500/20 border-green-400' 
            : 'bg-red-500/20 border-red-400'
        }`}>
          {isAnswered ? (
            <PhoneIncoming className="w-6 h-6 text-green-400" />
          ) : (
            <PhoneMissed className="w-6 h-6 text-red-400" />
          )}
        </div>
        <div className="space-y-1">
          <p className="font-bold text-white text-lg">{name}</p>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1 text-gray-300">
              <Clock className="w-3 h-3" />
              <span>{date}</span>
            </div>
            {location !== 'Desconhecido' && (
              <div className="flex items-center gap-1 text-gray-400">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-right space-y-1">
        <p className={`font-mono text-lg font-bold ${
          isAnswered ? 'text-green-300' : 'text-red-400'
        }`}>
          {duration}
        </p>
        {isLongCall && (
          <div className="bg-orange-500/20 border border-orange-400/40 rounded-full px-2 py-1">
            <span className="text-xs text-orange-300 font-semibold">LONGA</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default function VideoCallHistory({ gender }: { gender: 'homem' | 'mulher' }) {
  const isTargetMan = gender === 'homem';
  const callHistoryData = isTargetMan ? womanCallHistoryData : manCallHistoryData;
  
  const totalCalls = callHistoryData.length;
  const answeredCalls = callHistoryData.filter(call => call.status === 'Atendida').length;
  const totalMinutes = callHistoryData
    .filter(call => call.status === 'Atendida' && call.duration.includes('min'))
    .reduce((total, call) => {
      const minutes = parseInt(call.duration.split(' ')[0]);
      return total + (isNaN(minutes) ? 0 : minutes);
    }, 0);

  return (
    <div className="space-y-8 mt-10">
      <div className="relative mx-auto max-w-4xl rounded-2xl neon-frame-hacker bg-gradient-to-br from-[#11131d]/95 via-[#0c1a1c]/90 to-[#11131d]/95 border-2 border-green-500/40 shadow-2xl shadow-green-500/20 p-6 md:p-10 overflow-hidden select-none backdrop-blur-sm">
        
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-black text-green-400 flex items-center justify-center gap-4 drop-shadow-glow">
            <History className="w-10 h-10 text-green-400 animate-pulse" /> Histórico de Chamadas Íntimas
          </h3>
          <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Registros completos de chamadas de vídeo suspeitas com horários, durações e localizações detectadas.
          </p>
        </div>

        {/* Estatísticas das chamadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-black/40 border border-blue-400/30 rounded-xl p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-400 mb-1">{totalCalls}</div>
            <div className="text-sm text-gray-300">Total de Chamadas</div>
          </div>
          <div className="bg-black/40 border border-green-400/30 rounded-xl p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-400 mb-1">{answeredCalls}</div>
            <div className="text-sm text-gray-300">Chamadas Atendidas</div>
          </div>
          <div className="bg-black/40 border border-yellow-400/30 rounded-xl p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{totalMinutes}min</div>
            <div className="text-sm text-gray-300">Tempo Total</div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {callHistoryData.map((call, index) => (
            <CallRecord key={index} {...call} />
          ))}
        </div>

        <div className="text-center bg-black/30 border border-green-400/30 rounded-xl p-6">
          <p className="text-green-300 font-semibold text-lg animate-pulse flex items-center justify-center gap-2 mb-2">
            <Video className="w-5 h-5" /> 
            Gravações das chamadas e capturas de tela estão disponíveis no relatório completo
          </p>
          <p className="text-gray-400 text-sm">
            Inclui análise de áudio, detecção de rostos e transcrição automática das conversas
          </p>
        </div>
      </div>
    </div>
  );
}
