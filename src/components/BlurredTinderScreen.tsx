
import React from 'react';
import { Heart, Lock } from 'lucide-react';

// Data for matches when target is a man (shows women)
const womanMatchData = [
  { name: 'Jes***', age: 24, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name: 'Am***', age: 27, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80' },
  { name: 'Car***', age: 22, image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80' },
  { name: 'Sof***', age: 29, image: 'https://images.unsplash.com/photo-1516726817508-34502edf6d40?w=400&q=80' },
];

// Data for matches when target is a woman (shows men)
const manMatchData = [
  { name: 'Luc***', age: 28, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80' },
  { name: 'Ped***', age: 31, image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&q=80' },
  { name: 'Bru***', age: 26, image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80' },
  { name: 'Gui***', age: 30, image: 'https://images.unsplash.com/photo-1488161628813-04466f872def?w=400&q=80' },
];

const MatchCard = ({ name, age, image }: { name: string, age: number, image: string }) => {
  return (
    <div className="relative aspect-[4/5] w-full bg-gray-900 rounded-lg overflow-hidden group border border-pink-700/30 hover:border-pink-500 transition-all">
      <img
        src={image}
        alt={`Match com ${name}`}
        className="w-full h-full object-cover blur-md scale-110 group-hover:blur-sm transition-all duration-300"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-3 text-white">
        <p className="font-bold text-lg">{name}, {age}</p>
        <p className="text-sm text-pink-300">Match Recente</p>
      </div>
      <Lock className="absolute top-2 right-2 w-5 h-5 text-white/70" />
    </div>
  );
};

export default function BlurredTinderScreen({ gender }: { gender: 'homem' | 'mulher' }) {
  const isMan = gender === 'homem';
  const matches = isMan ? womanMatchData : manMatchData;

  return (
    <div className="space-y-8 mt-10">
      <div className="relative mx-auto max-w-4xl rounded-2xl neon-frame-hacker bg-gradient-to-br from-[#11131d]/95 via-[#1a0c1c]/90 to-[#11131d]/95 border-2 border-pink-500/30 shadow-2xl shadow-pink-500/10 p-6 md:p-10 overflow-hidden select-none backdrop-blur-sm">
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-green-300 flex items-center justify-center gap-4 drop-shadow-glow">
            <Heart className="w-10 h-10 text-pink-400 animate-pulse"/> Matches e Interações
          </h3>
          <p className="text-gray-300 mt-3 text-lg">Encontramos atividade de matches recentes. Os perfis estão protegidos.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {matches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>

        <p className="text-center text-sm text-green-300 mt-6 animate-pulse">
          <Lock className="inline w-4 h-4 mr-1"/> O dossiê completo revela nomes, fotos sem blur e o conteúdo das conversas.
        </p>
      </div>
    </div>
  );
}
