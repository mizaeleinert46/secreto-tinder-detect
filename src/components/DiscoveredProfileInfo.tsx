
import React from "react";
import { Zap, AlertCircle, Lock, Eye, TrendingUp, Users, CalendarClock, MapPin, MessageSquareQuote, AlertTriangle } from "lucide-react";

// Data for men
const manBlurredImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", // Homem atraente
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", // Homem casual
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", // Homem sorrindo
];
const manInfo = [
    { icon: Zap, text: "Última Atividade", value: "Hoje, 2:17 AM", colorClass: "border-yellow-400 text-yellow-300"},
    { icon: TrendingUp, text: "Popularidade", value: "Alta (Top 15%)", colorClass: "border-cyan-400 text-cyan-300"},
    { icon: Users, text: "Novos Matches", value: "3 nas últimas 24h", colorClass: "border-pink-400 text-pink-300"},
    { icon: MessageSquareQuote, text: "Análise de Conversa", value: "Iniciou 7 novas conversas", colorClass: "border-red-500 text-red-400"},
    { icon: CalendarClock, text: "Horário de Uso", value: "Padrão Noturno (22h - 3h)", colorClass: "border-violet-400 text-violet-300"},
    { icon: MapPin, text: "Localização Suspeita", value: "Login fora da cidade", colorClass: "border-orange-500 text-orange-400"},
];

// Data for women
const womanBlurredImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", // Mulher atraente
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80", // Mulher sorrindo
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80", // Mulher elegante
];
const womanInfo = [
    { icon: Zap, text: "Última Atividade", value: "Hoje, 1:45 AM", colorClass: "border-yellow-400 text-yellow-300"},
    { icon: TrendingUp, text: "Popularidade", value: "Muito Alta (Top 10%)", colorClass: "border-cyan-400 text-cyan-300"},
    { icon: Users, text: "Novos Matches", value: "5 nas últimas 24h", colorClass: "border-pink-400 text-pink-300"},
    { icon: MessageSquareQuote, text: "Análise de Conversa", value: "Respostas rápidas a homens", colorClass: "border-red-500 text-red-400"},
    { icon: CalendarClock, text: "Horário de Uso", value: "Padrão Noturno (23h - 2h)", colorClass: "border-violet-400 text-violet-300"},
    { icon: MapPin, text: "Localização Suspeita", value: "Login em bar popular", colorClass: "border-orange-500 text-orange-400"},
];

const InfoPill = ({ icon: Icon, text, value, colorClass }: { icon: React.ElementType, text: string, value: string, colorClass: string }) => {
    const borderColorClass = colorClass.split(' ')[0];
    const textColorClass = colorClass.split(' ')[1];

    return (
        <div className={`relative overflow-hidden flex items-center gap-4 p-4 rounded-xl bg-black/50 border ${borderColorClass} transition-all duration-300 group hover:shadow-xl hover:scale-105 backdrop-blur-sm`}>
            <div className={`absolute -left-8 -top-8 w-24 h-24 rounded-full bg-gradient-radial from-white/10 to-transparent opacity-0 group-hover:opacity-50 group-hover:scale-[6] transition-transform duration-700`}/>
            <div className={`flex-shrink-0 p-3 rounded-lg bg-black/60 border ${borderColorClass} shadow-lg`}>
                <Icon className={`w-6 h-6 shrink-0 ${textColorClass}`} />
            </div>
            <div className="text-sm z-10">
                <p className="text-gray-300 font-medium">{text}</p>
                <p className="font-bold text-lg text-white drop-shadow-md">{value}</p>
            </div>
        </div>
    );
}

export default function DiscoveredProfileInfo({ gender }: { gender: 'homem' | 'mulher' }) {
  const isMan = gender === 'homem';
  const blurredImages = isMan ? manBlurredImages : womanBlurredImages;
  const infoData = isMan ? manInfo : womanInfo;

  const images = [
    { src: blurredImages[0], label: "Foto Principal do Perfil" },
    { src: blurredImages[1], label: "Foto Privada #1" },
    { src: blurredImages[2], label: "Foto Privada #2" },
  ];

  return (
    <div className="space-y-8">
      <div className="relative mx-auto max-w-4xl rounded-2xl neon-frame-hacker bg-gradient-to-br from-[#0c1c11]/95 via-[#11131d]/95 to-[#0e1d13]/95 border-2 border-green-500/40 shadow-2xl shadow-green-500/20 p-6 md:p-10 overflow-hidden select-none backdrop-blur-sm">
        
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-black text-pink-400 flex items-center justify-center gap-4 drop-shadow-glow">
            <AlertCircle className="w-10 h-10 animate-pulse"/> Perfil Secreto Descoberto
          </h3>
          <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Encontramos evidências comprometedoras. As informações estão protegidas por questões de privacidade, mas você pode desbloqueá-las.
          </p>
        </div>

        <div className="mb-12">
          <h4 className="text-2xl font-bold text-green-300 mb-6 border-b-2 border-green-400/30 pb-3 flex items-center gap-3">
            <Eye className="w-6 h-6 animate-pulse"/> Evidências Fotográficas Encontradas
          </h4>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className={`w-full aspect-[4/5] rounded-xl bg-gray-900 overflow-hidden relative group transition-all duration-300 border-2 shadow-xl
                  ${index === 1 
                    ? 'border-red-400/60 shadow-red-400/30 ring-2 ring-red-400/20' 
                    : 'border-pink-400/40 hover:border-pink-400/70 hover:shadow-pink-400/30'
                  }`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover filter blur-md scale-105 group-hover:blur-sm transition-all duration-500"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                
                {/* Overlay de informações */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                    <span className="font-mono text-xs text-white font-semibold">{img.label}</span>
                  </div>
                </div>
                
                {/* Ícone de bloqueio */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-2 border border-white/30">
                  <Lock className="w-4 h-4 text-white animate-pulse" />
                </div>
                
                {/* Indicador especial para foto suspeita */}
                {index === 1 && (
                  <div className="absolute top-3 left-3 bg-red-500/90 backdrop-blur-sm rounded-full px-2 py-1 border border-red-300">
                    <span className="text-xs font-bold text-white">SUSPEITA</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-6 bg-black/30 border border-pink-400/30 rounded-xl p-4">
            <p className="text-pink-300 font-semibold animate-pulse flex items-center justify-center gap-2">
              <Eye className="w-5 h-5"/> 
              Mais 8 fotos íntimas e 3 vídeos foram detectados e estão protegidos
            </p>
          </div>
        </div>
        
        <div>
          <h4 className="text-2xl font-bold text-green-300 mb-6 border-b-2 border-green-400/30 pb-3 flex items-center gap-3">
            <TrendingUp className="w-6 h-6" /> Análise Comportamental Detalhada
          </h4>
          <div className="grid md:grid-cols-2 gap-4 font-mono">
             {infoData.map((info, index) => (
                <InfoPill key={index} icon={info.icon} text={info.text} value={info.value} colorClass={info.colorClass} />
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-green-500/30 text-center space-y-6">
            <div className="bg-gradient-to-r from-red-900/80 to-red-800/60 border-2 border-red-400/80 rounded-xl p-6 max-w-2xl mx-auto shadow-2xl shadow-red-900/40 backdrop-blur-sm">
              <h5 className="text-xl font-bold text-red-200 flex items-center justify-center gap-3 mb-3">
                <AlertTriangle className="w-7 h-7 animate-pulse"/> Nível de Risco: CRÍTICO
              </h5>
              <p className="text-red-100 leading-relaxed">
                A análise revela padrões de comportamento altamente suspeitos com evidências de atividade secreta constante. 
                <span className="font-bold text-yellow-300"> Ação imediata recomendada.</span>
              </p>
            </div>
            <div className="bg-black/40 border border-gray-600/50 rounded-xl p-6 max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 leading-relaxed">
                O relatório completo contém todas as conversas, perfis dos matches, horários de atividade e localizações precisas. 
                <span className="font-bold text-green-300 block mt-2 text-2xl">
                  💎 Tenha as provas que você precisa nas suas mãos.
                </span>
              </p>
            </div>
        </div>

      </div>
    </div>
  );
}
