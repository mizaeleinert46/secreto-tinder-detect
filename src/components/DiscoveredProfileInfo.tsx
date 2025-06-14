
import React from "react";
import { Heart, Zap, Target, AlertTriangle, Instagram, MapPin, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blurredImages = [
  // Use as imagens sugeridas do contexto
  "/assets/photo-1649972904349-6e44c42644a7.jpg",
  "/assets/photo-1518770660439-4636190af475.jpg",
  "/assets/photo-1526374965328-7f61d4dc18c5.jpg",
  "/assets/photo-1487058792275-0ad4aaf24ca7.jpg",
  "/assets/photo-1581090464777-f3220bbe1b8b.jpg",
];
// Fallback SRC caso assets não estejam disponíveis (imagens placeholder do Unsplash)
const fallbackImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&q=80",
  "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&q=80",
];

export default function DiscoveredProfileInfo() {
  const images = blurredImages.map((src, i) => ({
    key: i,
    src,
    fallback: fallbackImages[i],
  }));
  return (
    <div className="space-y-12">
      {/* Perfil visual: holograma com neon hacker */}
      <div className="relative mx-auto max-w-3xl rounded-2xl neon-frame-hacker bg-gradient-to-br from-[#071a09]/80 via-[#141a24]/70 to-[#0d0315]/90 border-2 border-green-400/20 shadow-xl p-8 md:p-12 overflow-hidden select-none">
        {/* Imagens borradas: grid */}
        <div className="mb-8 grid grid-cols-3 gap-3 md:gap-6">
          {images.map((img) => (
            <div
              key={img.key}
              className="w-full aspect-[4/5] rounded-xl bg-black/30 overflow-hidden relative border border-green-800/30"
            >
              {/* Blurred + glitch style */}
              <img
                src={img.src}
                onError={e => {
                  // fallback pra Unsplash
                  (e.currentTarget as HTMLImageElement).src = img.fallback;
                }}
                alt="Perfil Borrado"
                className="w-full h-full object-cover blur-sm scale-105 contrast-125 brightness-80 saturate-50 opacity-70 
                  transition-all duration-200 hover:blur-none hover:opacity-100 hover:scale-110"
                draggable={false}
                loading="lazy"
                style={{
                  filter: "blur(7px) brightness(0.5) saturate(1.2) grayscale(0.17)",
                  transition: "filter .33s, opacity .33s, transform .33s"
                }}
              />
              {/* Efeito scanline sutil */}
              <div className="absolute inset-0 scanlines-mix opacity-60 pointer-events-none"/>
              {/* Ícone suspeito */}
              <div className="absolute top-1 right-1">
                <AlertTriangle className="w-6 h-6 text-red-400 drop-shadow-glow animate-pulse" />
              </div>
            </div>
          ))}
        </div>
        {/* Dados e etiquetas do perfil */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="grid gap-5 text-left text-green-100 text-lg md:text-xl font-mono">
            <div className="flex items-center gap-3">
              <User className="w-7 h-7 text-green-500" />
              <span><span className="font-bold text-green-300">Nome:</span> Brenda Torres</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-7 h-7 text-green-400" />
              <span><span className="font-bold text-green-200">Última cidade:</span> São Paulo, SP</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-7 h-7 text-yellow-300" />
              <span><span className="font-bold text-yellow-200">Último acesso:</span> há 8 dias</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-7 h-7 text-pink-400" />
              <span><span className="font-bold text-pink-200">Matches:</span> 7</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-7 h-7 text-red-400" />
              <span><span className="font-bold text-red-200">Conversas ativas:</span> 4</span>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-7 h-7 text-pink-500" />
              <span><span className="font-bold text-pink-200">Instagram:</span> @bren_torres</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-block w-5 h-5 rounded-full border-2 border-green-400 bg-green-700 mr-2"/>
              <span><span className="font-bold text-green-300">Status:</span> On-line hoje</span>
            </div>
          </div>
          <div className="md:pl-10 space-y-8">
            <div className="bg-black/40 border-l-4 border-green-400 p-5 rounded-xl text-yellow-300 text-xl font-mono shadow-md">
              <div className="text-green-300 mb-2 text-lg">Bio detectada:</div>
              <div className="italic text-yellow-100">"Buscando algo real e divertido 🔥💕"</div>
              <div className="text-green-300 text-base mt-3">Última atualização: 22/05/2025</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="border border-green-600 bg-green-800/80 text-green-200 px-4 py-2 text-base font-bold">
                💾 Dados verificados
              </Badge>
              <Badge className="border border-purple-500 bg-purple-800/70 text-purple-100 px-4 py-2 text-base font-bold">
                💬 Conversas recentes
              </Badge>
              <Badge className="border border-pink-500 bg-pink-900/70 text-pink-100 px-4 py-2 text-base font-bold">
                🔒 Perfil privado
              </Badge>
              <Badge className="border border-yellow-400 bg-yellow-900/50 text-yellow-100 px-4 py-2 text-base font-bold">
                🕵️ Dossiê completo
              </Badge>
            </div>
            <div className="flex flex-col gap-1 pt-6 text-xs text-gray-400 opacity-90 border-t border-green-800/50">
              <span>❗ Todas as informações são fictícias e ilustrativas.</span>
              <span>🔍 Exibir mais detalhes personalizáveis sob demanda.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
