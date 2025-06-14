
import React from "react";
import { Zap, AlertCircle, Lock, Eye, TrendingUp, Users, CalendarClock, MapPin, MessageSquareQuote, AlertTriangle } from "lucide-react";

// Data for men
const manBlurredImages = [
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  "https://images.unsplash.com/photo-1542103749-8ef59b94f475?w=400&q=80",
  "https://images.unsplash.com/photo-1583195764339-32247b913e8b?w=400&q=80",
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
  "https://images.unsplash.com/photo-1594744806548-9931a7ea13de?w=400&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
  "https://images.unsplash.com/photo-1552695845-4a0237de1e74?w=400&q=80",
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
    const borderColorClass = colorClass.split(' ')[0]; // ex: "border-yellow-400"
    const textColorClass = colorClass.split(' ')[1]; // ex: "text-yellow-300"

    return (
        <div className={`relative overflow-hidden flex items-center gap-4 p-3 rounded-xl bg-black/50 border ${borderColorClass} transition-all duration-300 group hover:shadow-xl hover:scale-105`}>
            <div className={`absolute -left-8 -top-8 w-24 h-24 rounded-full bg-gradient-radial from-white/10 to-transparent opacity-0 group-hover:opacity-50 group-hover:scale-[6] transition-transform duration-700`}/>
            <div className={`flex-shrink-0 p-2 rounded-lg bg-black/60 border ${borderColorClass}`}>
                <Icon className={`w-6 h-6 shrink-0 ${textColorClass}`} />
            </div>
            <div className="text-sm z-10">
                <p className="text-gray-400">{text}</p>
                <p className="font-bold text-base text-white">{value}</p>
            </div>
        </div>
    );
}

export default function DiscoveredProfileInfo({ 
  gender,
  profileData
}: { 
  gender: 'homem' | 'mulher',
  profileData: { name: string; profilePic: string; } | null;
}) {
  const isMan = gender === 'homem';
  const blurredImages = isMan ? manBlurredImages : womanBlurredImages;
  const infoData = isMan ? manInfo : womanInfo;
  const fallbackImages = blurredImages; 

  const profileName = profileData?.name || "Desconhecido";
  const profilePicture = profileData?.profilePic || blurredImages[0];

  const images = [
    { src: profilePicture, fallback: fallbackImages[0], label: profileData ? "Foto de Perfil (Real)" : "Foto de Perfil" },
    { src: blurredImages[1], fallback: fallbackImages[1], label: "Foto Oculta #1" },
    { src: blurredImages[2], fallback: fallbackImages[2], label: "Foto Oculta #2" },
  ];

  return (
    <div className="space-y-8">
      <div className="relative mx-auto max-w-4xl rounded-2xl neon-frame-hacker bg-gradient-to-br from-[#0c1c11]/90 via-[#11131d]/95 to-[#0e1d13]/90 border-2 border-green-500/30 shadow-2xl shadow-green-500/20 p-6 md:p-10 overflow-hidden select-none backdrop-blur-sm">
        
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-black text-pink-400 flex items-center justify-center gap-4 drop-shadow-glow">
            <AlertCircle className="w-10 h-10 animate-pulse"/> {profileData ? `Perfil de ${profileName} Detectado` : "Perfil Detectado"}
          </h3>
          <p className="text-gray-300 mt-3 text-lg">As informações a seguir foram detectadas. {profileData ? "Encontramos uma correspondência exata." : "Alguns dados estão protegidos."}</p>
        </div>

        <div className="mb-10">
          <h4 className="text-xl font-semibold text-green-300 mb-4 border-b-2 border-green-400/20 pb-2 flex items-center gap-2">
            <Eye className="w-5 h-5"/> Provas Visuais Encontradas
          </h4>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className={`w-full aspect-[4/5] rounded-lg bg-black/50 overflow-hidden relative group transition-all duration-300
                  ${index === 0 && profileData
                    ? 'border-2 border-pink-400/80 shadow-lg shadow-pink-400/40'
                    : index === 1 
                      ? 'border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/20' 
                      : 'border border-pink-700/30 hover:border-pink-500 hover:shadow-xl hover:shadow-pink-500/20'
                  }`}
              >
                <img
                  src={img.src}
                  onError={e => { (e.currentTarget as HTMLImageElement).src = img.fallback; }}
                  alt={img.label}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    (index === 0 && profileData) 
                    ? 'scale-105' 
                    : 'blur-lg scale-110 opacity-60 group-hover:blur-md group-hover:opacity-80'
                  }`}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center p-2">
                  <span className="font-mono text-xs md:text-sm text-white bg-black/50 px-2 py-1 rounded">{img.label}</span>
                </div>
                 {!(index === 0 && profileData) && <div className="absolute inset-0 scanlines-mix opacity-50"/>}
                 {!(index === 0 && profileData) && <Lock className="absolute top-2 right-2 w-5 h-5 text-white animate-pulse" />}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-pink-300 mt-4 animate-pulse">
            <Eye className="inline w-4 h-4 mr-1"/> Mais 5 fotos e 2 vídeos foram encontrados e estão bloqueados.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold text-green-300 mb-4 border-b-2 border-green-400/20 pb-2 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Análise de Atividade e Comportamento
          </h4>
          <div className="grid md:grid-cols-2 gap-4 font-mono">
             {infoData.map((info, index) => (
                <InfoPill key={index} icon={info.icon} text={info.text} value={info.value} colorClass={info.colorClass} />
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t-2 border-green-500/20 text-center space-y-4">
            <div className="bg-red-900/60 border border-red-500/70 rounded-lg p-4 max-w-lg mx-auto shadow-lg shadow-red-900/50">
              <h5 className="text-lg font-bold text-red-300 flex items-center justify-center gap-2">
                <AlertTriangle className="w-6 h-6 animate-pulse"/> Nível de Risco: Elevado
              </h5>
              <p className="text-red-200 text-sm mt-1">
                A atividade do perfil indica um alto risco de infidelidade e comportamento secreto.
              </p>
            </div>
            <p className="text-lg text-gray-200 pt-4">
              O dossiê completo contém as conversas, nomes dos matches e localizações exatas. <span className="font-bold text-green-300">A verdade está nos detalhes.</span>
            </p>
        </div>

      </div>
    </div>
  );
}
