import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Eye, Search, Zap, ShieldCheck, Users, HeartCrack, Smartphone, MessageSquare, Video } from 'lucide-react';
import TerminalTypingTitle from '@/components/TerminalTypingTitle';
import HackerLinesBackground from '@/components/HackerLinesBackground';
import DiscoveredProfileInfo from '@/components/DiscoveredProfileInfo';
import BlurredTinderScreen from '@/components/BlurredTinderScreen';
import VideoCallHistory from '@/components/VideoCallHistory';
import HackerOverlay from '@/components/HackerOverlay';

export default function IndexPage() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'homem' | 'mulher'>('homem');
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const messages = [
    'Acessando banco de dados do Tinder...',
    'Procurando por perfis correspondentes...',
    'Quebrando criptografia de ponta-a-ponta...',
    'Buscando em 5.8 milhões de perfis na sua área...',
    'Compilando dados de localização e atividade...',
    'Analisando padrões de "match"...',
    'Detectando contas ocultas ou secundárias...',
    'Cruzando informações com redes sociais...',
    'Quase lá...',
  ];
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    if (step === 1 && progress < 100) {
      const messageInterval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
      }, 1000);
      return () => clearInterval(messageInterval);
    }
  }, [step, progress]);

  const handleSearch = () => {
    if (!name.trim()) return;

    setIsSearching(true);
    setStep(1);

    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 10;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => {
          setStep(2);
          setShowResults(true);
        }, 500);
      }
      setProgress(p);
    }, 200);
  };

  const handleReset = () => {
    setName('');
    setGender('homem');
    setStep(0);
    setProgress(0);
    setShowResults(false);
    setIsSearching(false);
    setCurrentMessage(0);
  };

  if (showResults) {
    return (
      <div className="relative min-h-screen w-full bg-black text-green-400 font-mono p-4 md:p-8 overflow-x-hidden">
        <HackerLinesBackground />
        <div className="relative z-10 max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-green-300 drop-shadow-glow">Dossiê de Atividade</h1>
            <p className="text-pink-300 text-xl mt-2 animate-pulse">Análise Concluída para: <span className="font-bold text-white">{name}</span></p>
          </header>

          <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-2">
              <DiscoveredProfileInfo name={name} gender={gender} />
            </div>

            <BlurredTinderScreen gender={gender} />

            <VideoCallHistory gender={gender} />
          </main>

          <footer className="text-center mt-16">
            <p className="text-lg text-gray-300">Este é um resumo das atividades encontradas.</p>
            <h3 className="text-2xl md:text-3xl font-bold text-pink-300 mt-4 mb-6 drop-shadow-glow">Obtenha o Dossiê Completo!</h3>
            <p className="max-w-3xl mx-auto text-gray-400 mb-8">
              O dossiê completo inclui o acesso irrestrito ao perfil do Tinder, histórico completo de conversas e mídias, e a localização em tempo real. Tenha todas as provas que você precisa, de forma 100% anônima e segura.
            </p>
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-bold text-xl py-8 px-10 rounded-lg shadow-lg shadow-pink-500/30 transform hover:scale-105 transition-all duration-300 animate-pulse">
              <Zap className="w-6 h-6 mr-3" /> QUERO O DOSSIÊ COMPLETO
            </Button>
            <p className="text-sm text-green-500 mt-4"><ShieldCheck className="inline w-4 h-4 mr-1" /> Transação Segura e 100% Anônima</p>
            <button onClick={handleReset} className="mt-8 text-gray-400 hover:text-white transition-colors underline">
              Fazer outra consulta
            </button>
          </footer>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative min-h-screen w-full bg-black text-green-400 font-mono flex items-center justify-center p-4 overflow-hidden">
      <HackerLinesBackground />
      {isSearching && <HackerOverlay isVisible={isSearching} />}
      
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        {step === 0 && (
          <div className="text-center bg-black/50 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-green-500/20 neon-glow-subtle">
            <Eye className="w-16 h-16 mx-auto mb-6 text-pink-400 animate-pulse" />
            <TerminalTypingTitle text="Ele(a) está no Tinder?" />
            <p className="text-lg md:text-xl text-gray-300 mt-4 mb-8 max-w-2xl mx-auto">
              Descubra de uma vez por todas se você está sendo <span className="text-pink-400 font-bold">enganada(o)</span>. Nossa ferramenta avançada varre o Tinder em busca de perfis ocultos.
            </p>

            <div className="w-full max-w-md mx-auto space-y-6">
              <Input
                type="text"
                placeholder="Digite o primeiro nome do alvo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-900/80 border-green-500 text-lg text-center h-14"
              />
              <div className="text-left">
                <Label className="text-lg mb-3 block">Qual o gênero do alvo?</Label>
                <RadioGroup defaultValue="homem" value={gender} onValueChange={(value: 'homem' | 'mulher') => setGender(value)} className="grid grid-cols-2 gap-4">
                  <div>
                    <RadioGroupItem value="homem" id="g-homem" className="peer sr-only" />
                    <Label htmlFor="g-homem" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                      Homem
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="mulher" id="g-mulher" className="peer sr-only" />
                    <Label htmlFor="g-mulher" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                      Mulher
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                onClick={handleSearch}
                disabled={!name.trim()}
                className="w-full h-16 text-2xl font-black bg-green-500 hover:bg-green-600 text-black shadow-lg shadow-green-500/20 disabled:bg-gray-600 disabled:shadow-none disabled:text-gray-400 transform hover:scale-105 transition-all duration-300"
              >
                <Search className="w-8 h-8 mr-4" /> INVESTIGAR AGORA
              </Button>
            </div>
             <p className="text-xs text-gray-500 mt-8">
              <ShieldCheck className="inline w-3 h-3 mr-1" /> Sua consulta é 100% anônima e segura.
            </p>
          </div>
        )}

        {step === 1 && (
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-pink-300 drop-shadow-glow mb-8">Analisando...</h2>
            <div className="w-full bg-gray-800/50 rounded-full h-6 border-2 border-green-500/50">
              <div
                className="bg-green-500 h-full rounded-full transition-all duration-300 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xl mt-6 animate-pulse">{messages[currentMessage]}</p>
          </div>
        )}
      </div>
    </div>
  );
}
