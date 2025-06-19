
import React from 'react';
import { Heart, Lock, Star, MessageCircle } from 'lucide-react';

// Data for matches when target is a man (shows women)
const womanMatchData = [
  { name: 'Jessica', age: 24, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', status: 'Conversando há 2 dias' },
  { name: 'Amanda', age: 27, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', status: 'Match recente' },
  { name: 'Carla', age: 22, image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80', status: 'Muito ativa' },
  { name: 'Sofia', age: 29, image: 'https://images.unsplash.com/photo-1516726817508-34502edf6d40?w=400&q=80', status: 'Super Like' },
];

// Data for matches when target is a woman (shows men)
const manMatchData = [
  { name: 'Lucas', age: 28, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', status: 'Conversando hoje' },
  { name: 'Pedro', age: 31, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', status: 'Match recente' },
  { name: 'Bruno', age: 26, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', status: 'Muito interessado' },
  { name: 'Guilherme', age: 30, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', status: 'Super Like' },
];

const MatchCard = ({ name, age, image, status }: { name: string, age: number, image: string, status: string }) => {
  const isSuperLike = status.includes('Super Like');
  const isActive = status.includes('Conversando') || status.includes('ativa') || status.includes('interessado');
  
  return (
    <div className={`relative aspect-[4/5] w-full bg-gray-900 rounded-xl overflow-hidden group transition-all duration-500 hover:scale-105 border-2 shadow-xl ${
      isSuperLike ? 'border-blue-400/60 shadow-blue-400/30' : 
      isActive ? 'border-green-400/60 shadow-green-400/30' : 
      'border-pink-400/40 shadow-pink-400/20'
    } hover:shadow-2xl`}>
      <img
        src={image}
        alt={`Match com ${name}`}
        className="w-full h-full object-cover filter blur-sm scale-110 group-hover:blur-[2px] transition-all duration-500"
        draggable={false}
      />
      
      {/* Gradiente melhorado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      
      {/* Indicadores de status no topo */}
      <div className="absolute top-3 left-3 flex flex-col gap-2">
        {isSuperLike && (
          <div className="bg-blue-500/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 text-white fill-white" />
            <span className="text-xs font-bold text-white">SUPER</span>
          </div>
        )}
        {isActive && (
          <div className="bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-white">ATIVO</span>
          </div>
        )}
      </div>
      
      {/* Informações do perfil */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="space-y-2">
          <h3 className="font-bold text-xl drop-shadow-lg">{name}, {age}</h3>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-pink-300" />
            <p className="text-sm text-pink-200 font-medium">{status}</p>
          </div>
        </div>
      </div>
      
      {/* Ícone de bloqueio */}
      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-2 border border-white/30">
        <Lock className="w-4 h-4 text-white animate-pulse" />
      </div>
    </div>
  );
};

export default function BlurredTinderScreen({ gender }: { gender: 'homem' | 'mulher' }) {
  const isMan = gender === 'homem';
  const matches = isMan ? womanMatchData : manMatchData;

  return (
    <div className="space-y-8 mt-10">
      <div className="relative mx-auto max-w-4xl rounded-2xl neon-frame-hacker bg-gradient-to-br from-[#11131d]/95 via-[#1a0c1c]/90 to-[#11131d]/95 border-2 border-pink-500/40 shadow-2xl shadow-pink-500/20 p-6 md:p-10 overflow-hidden select-none backdrop-blur-sm">
        
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-black text-pink-400 flex items-center justify-center gap-4 drop-shadow-glow">
            <Heart className="w-10 h-10 text-pink-400 animate-pulse fill-pink-400"/> Matches e Conversas Ativas
          </h3>
          <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Detectamos atividade intensa de matches e conversas. Veja com quem {isMan ? 'ele' : 'ela'} está interagindo secretamente.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {matches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>

        {/* Estatísticas adicionais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-black/40 border border-pink-400/30 rounded-xl p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-pink-400 mb-1">47</div>
            <div className="text-sm text-gray-300">Matches Totais</div>
          </div>
          <div className="bg-black/40 border border-green-400/30 rounded-xl p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-400 mb-1">12</div>
            <div className="text-sm text-gray-300">Conversas Ativas</div>
          </div>
          <div className="bg-black/40 border border-blue-400/30 rounded-xl p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-400 mb-1">5</div>
            <div className="text-sm text-gray-300">Super Likes Dados</div>
          </div>
        </div>

        <div className="text-center bg-black/30 border border-pink-400/30 rounded-xl p-6">
          <p className="text-pink-300 font-semibold text-lg animate-pulse flex items-center justify-center gap-2">
            <Lock className="w-5 h-5" /> 
            O relatório completo revela nomes reais, conversas íntimas e números de telefone dos matches
          </p>
        </div>
      </div>
    </div>
  );
}
