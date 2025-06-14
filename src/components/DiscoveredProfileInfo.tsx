
import React from "react";
import { Heart, Zap, Target, AlertCircle, Lock, Star, Eye, MessageCircle, TrendingUp, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blurredImages = [
  "/assets/photo-1649972904349-6e44c42644a7.jpg",
  "/assets/photo-1518770660439-4636190af475.jpg",
  "/assets/photo-1526374965328-7f61d4dc18c5.jpg",
  "/assets/photo-1487058792275-0ad4aaf24ca7.jpg",
  "/assets/photo-1581090464777-f3220bbe1b8b.jpg",
];
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

  // Ideias para maior mistério e curiosidade
  return (
    <div className="space-y-12">
      <div className="relative mx-auto max-w-3xl rounded-2xl neon-frame-hacker bg-gradient-to-br from-[#071a09]/80 via-[#141a24]/70 to-[#0d0315]/90 border-2 border-green-400/20 shadow-xl p-8 md:p-12 overflow-hidden select-none">
        {/* Imagens do perfil (protegidas por efeito de privacidade) */}
        <div className="mb-8 grid grid-cols-3 gap-3 md:gap-6">
          {images.map((img) => (
            <div
              key={img.key}
              className="w-full aspect-[4/5] rounded-xl bg-black/30 overflow-hidden relative border border-green-800/30"
            >
              <img
                src={img.src}
                onError={e => {
                  (e.currentTarget as HTMLImageElement).src = img.fallback;
                }}
                alt="Foto protegida do perfil do Tinder"
                className="w-full h-full object-cover blur-sm scale-105 contrast-125 brightness-80 saturate-50 opacity-70 
                  transition-all duration-200 hover:blur-none hover:opacity-100 hover:scale-110"
                draggable={false}
                loading="lazy"
                style={{
                  filter: "blur(7px) brightness(0.5) saturate(1.2) grayscale(0.17)",
                  transition: "filter .33s, opacity .33s, transform .33s"
                }}
              />
              <div className="absolute inset-0 scanlines-mix opacity-60 pointer-events-none"/>
              <div className="absolute top-1 right-1">
                <AlertCircle className="w-6 h-6 text-pink-400 drop-shadow-glow animate-pulse" />
              </div>
            </div>
          ))}
        </div>
        {/* Dados persuasivos do Tinder */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="grid gap-5 text-left text-green-100 text-lg md:text-xl font-mono">
            <div className="flex items-center gap-3">
              <Zap className="w-7 h-7 text-yellow-300" />
              <span>
                <span className="font-bold text-yellow-200">Última atividade detectada:</span> Muito recente
              </span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-cyan-300" />
              <span>
                <span className="font-bold text-cyan-200">Nível de popularidade:</span> Alto
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-7 h-7 text-red-400" />
              <span>
                <span className="font-bold text-red-200">Conversas em andamento:</span> Diversas
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-pink-400" />
              <span>
                <span className="font-bold text-pink-200">Novas interações:</span> Detectadas recentemente
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-7 h-7 text-yellow-400" />
              <span>
                <span className="font-bold text-yellow-200">Superlikes recebidos:</span> Sim
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-7 h-7 text-green-400" />
              <span>
                <span className="font-bold text-green-300">Perfil restrito:</span> Sim, acesso limitado
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="w-7 h-7 text-violet-400" />
              <span>
                <span className="font-bold text-violet-300">Acesso recente ao app:</span> Frequentemente
              </span>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw className="w-7 h-7 text-cyan-400" />
              <span>
                <span className="font-bold text-cyan-300">Mudanças na Bio:</span> Sim, atualização identificada
              </span>
            </div>
          </div>
          <div className="md:pl-10 space-y-8">
            <div className="bg-black/50 border-l-4 border-green-400 p-5 rounded-xl text-pink-300 text-xl font-mono shadow-md">
              <div className="text-green-300 mb-2 text-lg">Bio encontrada:</div>
              <div className="italic text-pink-100 flex items-center gap-2">"Pronto(a) para novas aventuras 🔥💕"</div>
              <div className="text-green-300 text-base mt-3">Variações recentes identificadas</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="border border-green-600 bg-green-800/80 text-green-200 px-4 py-2 text-base font-bold shadow-glow">Detectado novo match</Badge>
              <Badge className="border border-pink-500 bg-pink-900/70 text-pink-100 px-4 py-2 text-base font-bold shadow-glow">Indícios de múltiplas conversas</Badge>
              <Badge className="border border-yellow-400 bg-yellow-900/50 text-yellow-100 px-4 py-2 text-base font-bold shadow-glow">Perfil ativo e engajado</Badge>
              <Badge className="border border-violet-400 bg-violet-900/50 text-violet-100 px-4 py-2 text-base font-bold shadow-glow">Atenção: indícios de atualizações recentes</Badge>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-xs text-pink-200 opacity-80 border-t border-green-800/50">
              <span>O perfil analisado apresenta sinais claros de atividade e engajamento.</span>
              <span>Mais detalhes e provas visuais podem existir. Curioso(a) para descobrir tudo?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
