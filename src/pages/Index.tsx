import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, Eye, AlertTriangle, Zap, Heart, Target, Radar } from "lucide-react";
import HackerOverlay from "@/components/HackerOverlay";
import DiscoveredProfileInfo from "@/components/DiscoveredProfileInfo";
import HackerLinesBackground from "@/components/HackerLinesBackground";

// Paleta de cores: preto, neon-green, pink, violet, with subtle gradients

const HACKER_GRADIENT = "from-[#051205]/95 via-[#11131d]/90 to-[#16051f]/90";
const CTA_GRADIENT = "from-[#39ff14] via-[#c300ff] to-[#ec4899]";
const CARD_GRADIENT = "from-[#152e1a]/90 via-[#351b44]/90 to-[#181722]/90";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const scanningSteps = [
    { text: "🎯 Iniciando análise segura...", duration: 1400 },
    { text: "💕 Decifrando perfis conectados ao número...", duration: 2000 },
    { text: "🔍 Rastreando atividade no Tinder...", duration: 1900 },
    { text: "🛡️ Protegendo identidade...", duration: 1200 },
    { text: "⚡ Compilando relatório ultra confidencial...", duration: 1600 },
  ];

  const handleScan = () => {
    if (!phoneNumber.trim()) return;
    setIsScanning(true);
    setCurrentStep(0);
    setProgress(0);
    setScanComplete(false);
    setShowResults(false);

    scanningSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        setProgress(((index + 1) / scanningSteps.length) * 100);
        if (index === scanningSteps.length - 1) {
          setTimeout(() => {
            setIsScanning(false);
            setScanComplete(true);
            setTimeout(() => setShowResults(true), 1000);
          }, step.duration);
        }
      }, scanningSteps.slice(0, index).reduce((acc, s) => acc + s.duration, 0));
    });
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${HACKER_GRADIENT} text-white overflow-hidden relative font-mono`}>
      {/* Efeito Hacker durante scanning */}
      {isScanning && <HackerOverlay />}
      {/* Fundo animado */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-pink-900/5 to-green-700/10" />
        {/* Sutileza: grid cyber e brilhos */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.045)_1.2px,transparent_1.2px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:46px_46px]"/>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[85vw] w-[85vw] rounded-full bg-gradient-radial from-[#16ffad22] via-[#ce30ff33] to-transparent blur-3xl opacity-50" />
      </div>
      {/* Floating neon hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(13)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-400/20 animate-pulse"
            size={Math.random() * 20 + 18}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-2 py-10 max-w-5xl">
        {/* HEADER */}
        {!isScanning && !scanComplete && (
          <section className="animate-fade-in">
              {/* Branding nova */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-9 pt-8 lg:pt-12 pb-12">
                <Target className="w-20 h-20 text-green-400 animate-glow-pulse drop-shadow-glow rotate-6" />
                <div className="text-center space-y-2">
                  <h1 className="font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-glow-hacker animate-gradient-shift">
                    <span className="text-[#39ff14] drop-shadow-glow">TINDER</span>
                    <span className="ml-2 text-pink-500/90 font-extrabold">ESPIÃO</span>
                  </h1>
                  <span className="text-2xl md:text-3xl font-semibold text-green-300/90 drop-shadow-glow block mt-2">
                    Descubra segredos, revele verdades – sem deixar rastros.
                  </span>
                </div>
                <Radar className="w-20 h-20 text-pink-400 animate-spin drop-shadow-glow -rotate-6" />
              </div>
              <div className="mx-auto text-center mb-10 max-w-2xl">
                <p className="text-2xl text-gray-100/90 font-semibold mb-4">
                  <span className="text-[#39ff14] font-extrabold">A elite das investigações confidenciais no Tinder.</span>
                </p>
                <p className="text-xl md:text-2xl text-pink-100/95 mb-2 font-medium">
                  Exponha perfis ativos, atividades ocultas e conexões secretas em segundos.
                </p>
              </div>
              {/* Estatísticas-badges premium aprimoradas */}
              <div className="flex flex-wrap gap-7 justify-center mt-8 mb-14">
                <Badge className="backdrop-blur-xl shadow-green-700/50 border border-green-400 bg-green-950/70 text-green-100 px-9 py-4 text-xl font-bold flex gap-2 items-center">
                  <Shield className="inline mr-1 w-6 h-6" /> 100% Anonimato Garantido
                </Badge>
                <Badge className="border border-pink-400/80 bg-gradient-to-r from-pink-900/70 via-fuchsia-800/70 to-pink-700/80 text-pink-100 px-9 py-4 text-xl font-bold glow-pink flex gap-2 items-center">
                  <Zap className="inline mr-1 w-6 h-6" /> Resultado Ultrarrápido
                </Badge>
                <Badge className="border border-violet-400/80 bg-gradient-to-r from-violet-900/70 via-[#181722]/90 to-violet-900/70 text-violet-100 px-9 py-4 text-xl font-bold flex gap-2 items-center">
                  <Eye className="inline mr-1 w-6 h-6" /> Privacidade Total
                </Badge>
              </div>
              {/* Card CTA - Busca */}
              <Card className={`mx-auto max-w-xl neon-frame-hacker shadow-2xl  bg-gradient-to-br ${CARD_GRADIENT} hover:scale-105 transition-transform`}>
                <CardHeader className="pb-4 pt-8">
                  <CardTitle className="text-center text-3xl md:text-4xl font-black text-green-200 tracking-tight drop-shadow-glow">
                    <span className="flex items-center justify-center gap-3">
                      <Search className="w-8 h-8 animate-pulse" />
                      <span>INICIAR RASTREAMENTO</span>
                      <Search className="w-8 h-8 animate-pulse" />
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-7 px-6 pb-10">
                  <div>
                    <label className="block text-gray-300 text-lg font-semibold mb-2 text-center">
                      WhatsApp suspeito para investigar:
                    </label>
                    <Input 
                      type="tel"
                      placeholder="(11) 9XXXX-XXXX"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      className="bg-gray-900/90 border-2 border-pink-400/20 text-white text-center text-2xl h-16 font-mono focus:border-[#39ff14] focus:ring-pink-400/30 transition-all duration-300 hover:border-pink-400/50 rounded-xl shadow-input"
                      maxLength={15}
                    />
                  </div>
                  <Button 
                    onClick={handleScan}
                    disabled={phoneNumber.length < 14}
                    className={`w-full py-6 text-2xl font-black tracking-wider rounded-xl shadow-2xl bg-gradient-to-r ${CTA_GRADIENT} hover:from-pink-600 hover:via-green-400 hover:to-[#c300ff] transition-all duration-300 transform hover:scale-105 uppercase glow-pink`}
                  >
                    <Radar className="mr-4 h-8 w-8 animate-spin" />
                    Investigar Agora
                  </Button>
                  <div className="flex flex-col md:flex-row gap-3 justify-center pt-2">
                    <div className="flex items-center gap-2 text-green-400 text-base">
                      <Shield className="w-5 h-5" />
                      Operação sigilosa
                    </div>
                    <div className="flex items-center gap-2 text-pink-300 text-base">
                      <Eye className="w-5 h-5" />
                      Invisibilidade garantida
                    </div>
                  </div>
                </CardContent>
              </Card>
          </section>
        )}
        {/* FASE DE SCAN */}
        {isScanning && (
          <section className="text-center animate-fade-in relative z-30 pt-8">
            {/* Adiciona fundo hacker verde */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <HackerLinesBackground />
            </div>
            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-center gap-5">
                <div className="rounded-full bg-gradient-to-tr from-green-800/70 via-green-500/60 to-green-400/80 p-3 animate-glow-pulse border-2 border-green-400 shadow-green-700 shadow-md">
                  <Radar className="w-14 h-14 text-green-200 animate-radar" />
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-green-300 animate-pulse text-shadow-hacker drop-shadow-glow tracking-tighter">
                  ANALISANDO
                </h2>
                <div className="rounded-full bg-gradient-to-tr from-pink-800/70 via-pink-500/60 to-pink-400/80 p-3 animate-glow-pulse border-2 border-pink-400 shadow-pink-500 shadow-md">
                  <Target className="w-14 h-14 text-pink-200 animate-pulse" />
                </div>
              </div>
              <div className="mx-auto rounded-xl bg-black/60 border-l-4 border-green-400 text-green-200 px-6 py-2 shadow-inner font-mono max-w-md">
                Telefone: <span className="font-bold text-lg text-[#39ff14]">{phoneNumber}</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-4xl">
                <div className="neon-frame-hacker shadow-2xl rounded-2xl p-0 bg-gradient-to-br from-black/70 via-green-800/10 to-pink-900/10">
                  <div className="p-10 sm:p-14 space-y-10">
                    <div className="w-full">
                      <div className="h-6 w-full rounded-full bg-black overflow-hidden border border-green-700 shadow-inner shadow-green-400/20">
                        <div
                          style={{
                            width: `${progress}%`,
                            transition: "width 1s cubic-bezier(.65,0,.45,1)",
                          }}
                          className="h-full rounded-full progress-hacker-neon"
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-5">
                      {scanningSteps.map((step, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-6 p-5 rounded-2xl transition-all duration-700 font-mono text-lg md:text-xl
                            ${index === currentStep
                              ? 'bg-gradient-to-r from-[#181f1a]/70 to-green-950 text-green-200 border-2 border-green-400/60 shadow-xl scale-105 drop-shadow-glow'
                              : index < currentStep
                                ? 'bg-black/60 text-gray-500 border border-green-800/50'
                                : 'text-green-700 border border-green-900/20'
                            }`}
                        >
                          <div className={`w-5 h-5 rounded-full transition-all duration-500
                            ${index === currentStep
                              ? 'bg-gradient-to-r from-green-400 to-[#ec4899] animate-heart-beat'
                              : index < currentStep
                                ? 'bg-green-500/50'
                                : 'bg-green-900/20'
                            }`}
                          ></div>
                          <span className="flex-grow text-left font-semibold">{step.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-green-400 pt-2 font-mono text-xl md:text-2xl">
                      <p>🎯 {Math.round(progress)}% CONCLUÍDO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* RESULTADOS */}
        {scanComplete && (
          <section className="text-center space-y-10 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-9">
              <AlertTriangle className="w-16 h-16 text-pink-500 animate-glow-pulse drop-shadow-glow" />
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#39ff14] via-pink-500 to-[#7c3aed] bg-clip-text text-transparent animate-gradient-shift drop-shadow-glow tracking-tight">
                PERFIL ENCONTRADO
              </h2>
              <Eye className="w-16 h-16 text-violet-400 animate-glow-pulse drop-shadow-glow" />
            </div>
            <p className="text-2xl text-white mb-2 font-semibold drop-shadow-glow">
              Resultado da análise para:{" "}
              <span className="text-[#39ff14] font-mono bg-black/70 px-5 py-2 rounded-lg border border-green-400 shadow-input">
                {phoneNumber}
              </span>
            </p>
            <div className="mt-2">
              <DiscoveredProfileInfo />
            </div>
            {/* CALL TO ACTION */}
            <Card className="bg-gradient-to-br from-[#090f10]/90 via-[#27132b]/80 to-[#0e2021]/100 border-4 border-[#9dff44] neon-frame-hacker backdrop-blur-2xl max-w-4xl mx-auto shadow-[0_0_55px_2px_rgba(57,255,20,0.3)] mt-8 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#39ff14] flex items-center justify-center space-x-4 text-2xl md:text-3xl font-bold animate-gradient-shift drop-shadow-glow">
                  <Target className="w-8 h-8 animate-pulse text-pink-400" />
                  <span>Quer ver todas as FOTOS, MATCHES e CONVERSAS?</span>
                  <Heart className="w-8 h-8 animate-pulse text-[#ff0080]" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-7 px-8 py-10">
                  <Button 
                    className="w-full bg-gradient-to-r from-[#39ff14] via-pink-400 to-[#8b5cf6] hover:from-pink-600 hover:via-green-400 hover:to-[#c300ff] text-black font-black py-6 text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl glow-pink uppercase tracking-wide"
                    onClick={() => {
                      alert('🔓 ACESSO LIBERADO! Em um sistema real, aqui seriam exibidas todas as evidências encontradas: fotos do perfil, conversas, matches e atividade detalhada.');
                    }}
                  >
                    🚨 LIBERAR TUDO AGORA!
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-[#39ff14] text-[#39ff14] hover:bg-[#161f13]/70 hover:text-white py-4 text-lg transition-all duration-300 hover:scale-105 rounded-lg font-bold shadow-input"
                    onClick={() => {
                      setPhoneNumber('');
                      setScanComplete(false);
                      setShowResults(false);
                    }}
                  >
                    🔍 Nova Pesquisa
                  </Button>
              </CardContent>
            </Card>
            <div className="text-center text-gray-500 text-xs pt-6 pb-2 italic opacity-70">
              ⚠️ Nenhum dado real é violado nesta simulação. Sua privacidade é prioridade.
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;
