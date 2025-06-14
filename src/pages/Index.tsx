import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, Eye, AlertTriangle, Zap, Heart, Target, Radar } from "lucide-react";
import HackerOverlay from "@/components/HackerOverlay";
import HackerLinesBackground from "@/components/HackerLinesBackground";
import TerminalTypingTitle from "@/components/TerminalTypingTitle";
import DiscoveredProfileInfo from "@/components/DiscoveredProfileInfo";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const scanningSteps = [
    { text: "🎯 Iniciando varredura no Tinder...", duration: 2000 },
    { text: "💕 Buscando perfis vinculados ao número...", duration: 2500 },
    { text: "🔍 Analisando atividade recente...", duration: 3000 },
    { text: "📊 Verificando matches e conversas...", duration: 2200 },
    { text: "⚡ Compilando relatório final...", duration: 2800 },
  ];

  const handleScan = () => {
    if (!phoneNumber.trim()) return;
    
    setIsScanning(true);
    setCurrentStep(0);
    setProgress(0);
    setScanComplete(false);
    setShowResults(false);

    // Simulate scanning process
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
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Hacker Efeito EXCLUSIVO para busca */}
      {isScanning && <HackerOverlay />}

      {/* Fundo preto sólido, retirando o gradiente colorido */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Remove blobs coloridos. Grid animado sutil */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Floating hearts (ainda aparecem coloridos para contraste) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-400/20 animate-pulse"
            size={Math.random() * 20 + 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {!isScanning && !scanComplete && (
          <div className="text-center space-y-10 animate-fade-in">
            {/* Enhanced header */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-6 mb-8">
                <Target className="w-16 h-16 text-pink-400 animate-pulse" />
                <div className="text-center">
                  <TerminalTypingTitle
                    text="TINDER ESPIÃO"
                    className="text-7xl md:text-9xl font-black block"
                  />
                  <h2 className="text-4xl md:text-6xl font-bold text-red-400 -mt-4">
                    ESPIÃO
                  </h2>
                </div>
                <Radar className="w-16 h-16 text-pink-400 animate-spin" />
              </div>
              
              <div className="space-y-6 max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-bold text-green-400 animate-pulse text-shadow-hacker">
                  🕵️ Tema Hacker Ativado!
                </p>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Será que seu(sua) parceiro(a) está sendo 100% honesto(a)? 
                  <br />
                  <span className="text-red-400 font-semibold">Descubra agora se ele(a) tem perfil ativo no Tinder!</span>
                </p>
              </div>
            </div>

            {/* Enhanced statistics */}
            <div className="grid md:grid-cols-3 gap-8 my-16">
              <Card className="bg-gradient-to-br from-pink-900/50 to-pink-800/30 border-pink-500/40 backdrop-blur-xl shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 animate-pulse" />
                  <div className="text-5xl font-black text-pink-400 mb-3">87%</div>
                  <div className="text-gray-300 font-semibold text-lg">Dos relacionamentos sofrem com traições digitais</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-red-900/50 to-red-800/30 border-red-500/40 backdrop-blur-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4 animate-pulse" />
                  <div className="text-5xl font-black text-red-400 mb-3">92%</div>
                  <div className="text-gray-300 font-semibold text-lg">Mantêm perfis secretos ativos</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-500/40 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <Target className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
                  <div className="text-5xl font-black text-purple-400 mb-3">4.8M</div>
                  <div className="text-gray-300 font-semibold text-lg">Perfis já investigados</div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced input section with neon hacker frame */}
            <Card className="bg-gradient-to-br from-black/80 to-gray-900/50 border-gray-600/50 backdrop-blur-2xl shadow-2xl max-w-2xl mx-auto hover:shadow-xl transition-all duration-500 hover:scale-[1.02] neon-frame-hacker">
              <CardHeader className="pb-6">
                <CardTitle className="text-center text-yellow-400 text-3xl font-bold flex items-center justify-center space-x-3">
                  <Search className="w-8 h-8 animate-pulse" />
                  <span>INICIAR INVESTIGAÇÃO</span>
                  <Search className="w-8 h-8 animate-pulse" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-10">
                <div className="space-y-6">
                  <label className="text-gray-300 text-center block font-semibold text-lg">
                    📱 Digite o WhatsApp da pessoa suspeita:
                  </label>
                  <Input 
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="bg-gray-800/80 border-2 border-gray-600 text-white text-center text-2xl h-16 font-mono focus:border-pink-400 focus:ring-pink-400/30 transition-all duration-300 hover:border-pink-500/50"
                    maxLength={15}
                  />
                </div>
                
                <Button 
                  onClick={handleScan}
                  disabled={phoneNumber.length < 14}
                  className="w-full bg-gradient-to-r from-pink-600 via-red-600 to-pink-700 hover:from-pink-700 hover:via-red-700 hover:to-pink-800 text-white font-bold py-6 text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Radar className="mr-4 h-8 w-8 animate-spin" />
                  🚀 ESPIONAR AGORA
                </Button>
                
                <div className="text-center space-y-3 pt-4">
                  <p className="text-sm text-green-400 font-medium">
                    ✅ 100% Anônimo e Seguro
                  </p>
                  <p className="text-sm text-gray-500">
                    🔒 Seus dados são protegidos e não ficam salvos
                  </p>
                  <p className="text-xs text-gray-600">
                    ⏱️ Investigação completa em 30 segundos
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* SCANNING PHASE (COMPLETAMENTE CYBERPUNK) */}
        {isScanning && (
          <div className="text-center space-y-12 animate-fade-in relative z-30">
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-4">
                <Radar className="w-16 h-16 text-green-400 animate-radar" />
                <h2 className="text-6xl font-black text-green-400 animate-pulse text-shadow-hacker">
                  INVESTIGANDO
                </h2>
                <Target className="w-16 h-16 text-pink-400 animate-pulse" />
              </div>
              <div className="text-3xl text-green-300 font-mono drop-shadow-lg bg-black/60 px-10 py-4 rounded-xl border border-green-500/40 neon-frame-hacker shadow-neon">
                Alvo: <span className="text-green-300 font-mono">{phoneNumber}</span>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="w-full max-w-4xl">
                <div className="card-hacker-neon rounded-2xl shadow-2xl p-0">
                  <div className="p-12 space-y-10">
                    <div className="w-full">
                      <div className="h-6 w-full rounded-full bg-black overflow-hidden border border-green-700/70 shadow-inner shadow-green-400/20">
                        <div
                          style={{
                            width: `${progress}%`,
                            transition: "width 1s cubic-bezier(.65,0,.45,1)",
                          }}
                          className="h-full rounded-full progress-hacker-neon"
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {scanningSteps.map((step, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-6 p-6 rounded-2xl transition-all duration-700 font-mono text-lg md:text-xl
                            ${index === currentStep
                              ? 'bg-gradient-to-r from-black to-green-950 border-2 border-green-400/70 text-green-300 shadow-lg scale-105 drop-shadow-glow'
                              : index < currentStep
                                ? 'bg-black/60 text-gray-400 border border-green-800/50'
                                : 'text-green-700 border border-green-800/30'
                            }`}
                        >
                          <div className={`w-6 h-6 rounded-full flex-shrink-0 transition-all duration-500
                            ${index === currentStep
                              ? 'bg-gradient-to-r from-green-400 to-pink-400 animate-heart-beat shadow-green-400/60'
                              : index < currentStep
                                ? 'bg-green-500 shadow-md'
                                : 'bg-green-900'
                            }`}
                          ></div>
                          <span className="font-mono flex-grow text-left font-semibold">{step.text}</span>
                          {index === currentStep && (
                            <div className="ml-auto">
                              <div className="animate-radar w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full"></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-green-400 pt-4 font-mono text-xl md:text-2xl">
                      <p>🎯 {Math.round(progress)}% CONCLUÍDO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced results */}
        {scanComplete && (
          <div className="text-center space-y-12 animate-fade-in">
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-6">
                <AlertTriangle className="w-20 h-20 text-red-400 animate-pulse" />
                <h2 className="text-6xl font-black text-red-400 animate-pulse">
                  DESCOBERTO!
                </h2>
                <Eye className="w-20 h-20 text-pink-400 animate-pulse" />
              </div>
              <p className="text-3xl text-gray-300">
                Investigação completa para: <span className="text-yellow-400 font-mono bg-gray-800/60 px-6 py-3 rounded-xl border border-yellow-500/30">{phoneNumber}</span>
              </p>
            </div>
            {/* NOVA SEÇÃO AVANÇADA DE PERFIL DESCOBERTO */}
            <DiscoveredProfileInfo />

            <Card className="bg-gradient-to-br from-red-900/40 to-pink-900/30 border-2 border-red-500/60 backdrop-blur-2xl max-w-5xl mx-auto shadow-2xl mt-16">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center justify-center space-x-4 text-3xl">
                  <Target className="w-10 h-10" />
                  <span>🚨 RELATÓRIO DE ESPIONAGEM</span>
                  <Heart className="w-10 h-10" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-10 p-10">
                {/* Removi a grade antiga, agora os dados principais ficam em <DiscoveredProfileInfo /> */}
                <div className="flex flex-wrap gap-4 justify-center">
                  <Badge className="bg-red-500/80 hover:bg-red-500 text-white text-xl px-6 py-3 font-bold">🚨 Perfil Ativo</Badge>
                  <Badge className="bg-orange-500/80 hover:bg-orange-500 text-white text-xl px-6 py-3 font-bold">🔥 Matches Recentes</Badge>
                  <Badge className="bg-purple-500/80 hover:bg-purple-500 text-white text-xl px-6 py-3 font-bold">💬 Conversando</Badge>
                </div>
                {!showResults && (
                  <div className="text-center py-8">
                    <div className="animate-pulse text-yellow-400 text-2xl font-bold">
                      🔍 Carregando evidências completas...
                    </div>
                  </div>
                )}
                {showResults && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="border-t-2 border-gray-700/50 pt-10">
                      <h3 className="text-3xl font-bold text-pink-400 mb-8 flex items-center justify-center space-x-4">
                        <Eye className="w-10 h-10 animate-pulse" />
                        <span>Quer ver as FOTOS e CONVERSAS encontradas?</span>
                        <Heart className="w-10 h-10 animate-pulse" />
                      </h3>
                      <div className="space-y-6">
                        <Button 
                          className="w-full bg-gradient-to-r from-red-600 via-pink-600 to-red-700 hover:from-red-700 hover:via-pink-700 hover:to-red-800 text-white font-bold py-8 text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/40"
                          onClick={() => {
                            alert('🔓 ACESSO LIBERADO! Em um sistema real, aqui seriam exibidas todas as evidências encontradas: fotos do perfil, conversas, matches e atividade detalhada.');
                          }}
                        >
                          🚨 SIM, MOSTRAR TUDO AGORA!
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white py-6 text-xl transition-all duration-300 hover:scale-105"
                          onClick={() => {
                            setPhoneNumber('');
                            setScanComplete(false);
                            setShowResults(false);
                          }}
                        >
                          🔍 Investigar Outro Número
                        </Button>
                      </div>
                    </div>
                    <div className="text-center text-gray-500 space-y-2 border-t border-gray-800 pt-8">
                      <p className="text-sm">⚠️ Sistema de demonstração - Tinder Espião</p>
                      <p className="text-sm">🔒 Nenhum dado real foi acessado nesta simulação</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
