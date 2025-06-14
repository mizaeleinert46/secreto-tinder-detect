
import React from "react";
import { Zap, AlertCircle, Lock, Eye, TrendingUp, Users, CalendarClock, MapPin, MessageSquareQuote, AlertTriangle } from "lucide-react";

const blurredImages = [
  "/assets/photo-1649972904349-6e44c42644a7.jpg",
  "https://images.unsplash.com/photo-1542103749-8ef59b94f475?w=400&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
];

const fallbackImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&q=80",
  "https://images.unsplash.com/photo-1542103749-8ef59b94f475?w=400&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
];

const InfoPill = ({ icon: Icon, text, value, colorClass }: { icon: React.ElementType, text: string, value: string, colorClass: string }) => (
  <div className={`flex items-center gap-3 p-3 rounded-lg bg-black/30 border-l-4 ${colorClass}`}>
    <Icon className="w-6 h-6 shrink-0" />
    <div className="text-sm">
      <p className="text-gray-400">{text}</p>
      <p className="font-bold text-base text-white">{value}</p>
    </div>
  </div>
);

export default function DiscoveredProfileInfo() {
  const images = [
    { src: blurredImages[0], fallback: fallbackImages[0], label: "Foto de Perfil" },
    { src: blurredImages[1], fallback: fallbackImages[1], label: "Foto Oculta #1" },
    { src: blurredImages[2], fallback: fallbackImages[2], label: "Foto Oculta #2" },
  ];

  return (
    <div className="space-y-8">
      <div className="relative mx-auto max-w-4xl rounded-2xl neon-frame-hacker bg-gradient-to-br from-[#1c0c16]/90 via-[#11131d]/80 to-[#0e1d13]/90 border-2 border-pink-500/30 shadow-xl p-6 md:p-10 overflow-hidden select-none">
        
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-400 flex items-center justify-center gap-3">
            <AlertCircle className="w-8 h-8"/> Dossiê Preliminar
          </h3>
          <p className="text-gray-300 mt-2">As informações a seguir foram detectadas e estão protegidas. Desbloqueie para ver os detalhes.</p>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-green-300 mb-4 border-b-2 border-green-400/20 pb-2">Provas Visuais Encontradas</h4>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="w-full aspect-[4/5] rounded-lg bg-black/50 overflow-hidden relative border border-pink-700/30 group"
              >
                <img
                  src={img.src}
                  onError={e => { (e.currentTarget as HTMLImageElement).src = img.fallback; }}
                  alt={img.label}
                  className="w-full h-full object-cover blur-md scale-110 opacity-60 group-hover:blur-sm group-hover:opacity-80 transition-all duration-300"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center p-2">
                  <span className="font-mono text-xs md:text-sm text-white bg-black/50 px-2 py-1 rounded">{img.label}</span>
                </div>
                <div className="absolute inset-0 scanlines-mix opacity-50"/>
                <Lock className="absolute top-2 right-2 w-5 h-5 text-white animate-pulse" />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-pink-300 mt-4 animate-pulse">
            <Eye className="inline w-4 h-4 mr-1"/> Mais 5 fotos e 2 vídeos foram encontrados e estão bloqueados.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold text-green-300 mb-4 border-b-2 border-green-400/20 pb-2">Análise de Atividade e Comportamento</h4>
          <div className="grid md:grid-cols-2 gap-4 font-mono">
            <InfoPill icon={Zap} text="Última Atividade" value="Hoje, 2:17 AM" colorClass="border-yellow-400 text-yellow-300"/>
            <InfoPill icon={TrendingUp} text="Popularidade" value="Alta (Top 15%)" colorClass="border-cyan-400 text-cyan-300"/>
            <InfoPill icon={Users} text="Novos Matches" value="3 nas últimas 24h" colorClass="border-pink-400 text-pink-300"/>
            <InfoPill icon={MessageSquareQuote} text="Análise de Conversa" value="Tons de Flerte Detectados" colorClass="border-red-500 text-red-400"/>
            <InfoPill icon={CalendarClock} text="Horário de Uso" value="Padrão Noturno (22h - 3h)" colorClass="border-violet-400 text-violet-300"/>
            <InfoPill icon={MapPin} text="Localização Suspeita" value="Login fora da cidade" colorClass="border-orange-500 text-orange-400"/>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-pink-500/20 text-center space-y-4">
            <div className="bg-red-900/50 border border-red-500/70 rounded-lg p-4 max-w-lg mx-auto">
              <h5 className="text-lg font-bold text-red-300 flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5"/> Nível de Risco: Elevado
              </h5>
              <p className="text-red-200 text-sm mt-1">
                A atividade do perfil indica um alto risco de infidelidade e comportamento secreto.
              </p>
            </div>
            <p className="text-lg text-gray-200">
              O dossiê completo contém as conversas, nomes dos matches e localizações exatas. <span className="font-bold text-green-300">A verdade está nos detalhes.</span>
            </p>
        </div>

      </div>
    </div>
  );
}
