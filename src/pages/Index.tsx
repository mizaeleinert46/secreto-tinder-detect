
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, Eye, AlertTriangle, Zap, Heart, Target, Radar, Lock, Database, Signal } from "lucide-react";
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
    { text: "🔐 Iniciando protocolo de análise avançada...", duration: 1400 },
    { text: "🛡️ Acessando bancos de dados seguros...", duration: 2000 },
    { text: "🎯 Processando perfis conectados ao número...", duration: 1900 },
    { text: "🔍 Analisando atividade em plataformas de encontros...", duration: 1200 },
    { text: "⚡ Compilando relatório confidencial...", duration: 1600 },
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-green-900/5 to-violet-900/10" />
        {/* Grid cyber sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(196,72,253,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"/>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vw] w-[70vw] rounded-full bg-gradient-radial from-[#16ffad11] via-[#ce30ff22] to-transparent blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* HEADER */}
        {!isScanning && !scanComplete && (
          <section className="animate-fade-in">
            {/* Hero Section */}
            <div className="text-center space-y-8 pt-12 pb-16">
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center justify-center gap-6">
                  <div className="rounded-full bg-gradient-to-tr from-green-800/50 via-green-500/40 to-green-400/60 p-4 border-2 border-green-400/30 shadow-green-700/50 shadow-lg">
                    <Database className="w-12 h-12 text-green-300" />
                  </div>
                  <h1 className="font-black text-6xl sm:text-7xl md:text-8xl tracking-tight">
                    <span className="text-[#39ff14] drop-shadow-glow">SOCIAL</span>
                    <span className="ml-3 text-white/95 font-extrabold">INTEL</span>
                  </h1>
                  <div className="rounded-full bg-gradient-to-tr from-violet-800/50 via-violet-500/40 to-violet-400/60 p-4 border-2 border-violet-400/30 shadow-violet-700/50 shadow-lg">
                    <Shield className="w-12 h-12 text-violet-300" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl font-bold text-green-300/90 drop-shadow-glow">
                    Investigação Digital Profissional
                  </p>
                  <p className="text-xl text-gray-200/90 max-w-3xl mx-auto leading-relaxed">
                    Tecnologia avançada para análise de perfis digitais e verificação de atividade em redes sociais
                  </p>
                </div>
              </div>

              {/* Badges de credibilidade */}
              <div className="flex flex-wrap gap-6 justify-center mt-12">
                <Badge className="backdrop-blur-xl border border-green-400/50 bg-green-950/60 text-green-100 px-8 py-3 text-lg font-semibold flex gap-3 items-center">
                  <Lock className="w-5 h-5" /> Segurança Certificada
                </Badge>
                <Badge className="border border-violet-400/50 bg-violet-950/60 text-violet-100 px-8 py-3 text-lg font-semibold flex gap-3 items-center">
                  <Signal className="w-5 h-5" /> Análise em Tempo Real
                </Badge>
                <Badge className="border border-blue-400/50 bg-blue-950/60 text-blue-100 px-8 py-3 text-lg font-semibold flex gap-3 items-center">
                  <Eye className="w-5 h-5" /> Privacidade Garantida
                </Badge>
              </div>
            </div>

            {/* Seção de recursos */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-green-950/40 to-black/60 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <Database className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-xl text-green-300">Análise Avançada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    Algoritmos proprietários para análise profunda de dados e identificação de perfis
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-violet-950/40 to-black/60 border border-violet-400/20 hover:border-violet-400/40 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <Shield className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                  <CardTitle className="text-xl text-violet-300">Máxima Segurança</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    Criptografia de ponta e protocolos de segurança para proteger sua identidade
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-950/40 to-black/60 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-xl text-blue-300">Resultados Instantâneos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    Processamento em tempo real com resultados precisos em segundos
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Card de busca principal */}
            <Card className={`mx-auto max-w-2xl neon-frame-hacker shadow-2xl bg-gradient-to-br ${CARD_GRADIENT} hover:scale-105 transition-transform`}>
              <CardHeader className="pb-6 pt-10">
                <CardTitle className="text-center text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-glow">
                  <span className="flex items-center justify-center gap-4">
                    <Search className="w-10 h-10 animate-pulse text-green-400" />
                    <span>INICIAR ANÁLISE</span>
                    <Target className="w-10 h-10 animate-pulse text-violet-400" />
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 px-8 pb-12">
                <div>
                  <label className="block text-gray-200 text-xl font-semibold mb-4 text-center">
                    Número para análise:
                  </label>
                  <Input 
                    type="tel"
                    placeholder="(11) 9XXXX-XXXX"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="bg-gray-900/80 border-2 border-green-400/30 text-white text-center text-2xl h-16 font-mono focus:border-green-400 focus:ring-green-400/20 transition-all duration-300 hover:border-green-400/50 rounded-xl shadow-lg"
                    maxLength={15}
                  />
                </div>
                <Button 
                  onClick={handleScan}
                  disabled={phoneNumber.length < 14}
                  className={`w-full py-6 text-2xl font-black tracking-wider rounded-xl shadow-2xl bg-gradient-to-r ${CTA_GRADIENT} hover:from-green-500 hover:via-violet-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 uppercase`}
                >
                  <Radar className="mr-4 h-8 w-8 animate-spin" />
                  Analisar Agora
                </Button>
                <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                  <div className="flex items-center gap-2 text-green-400 text-lg justify-center">
                    <Shield className="w-6 h-6" />
                    100% Anônimo
                  </div>
                  <div className="flex items-center gap-2 text-violet-400 text-lg justify-center">
                    <Lock className="w-6 h-6" />
                    Dados Protegidos
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* FASE DE SCAN */}
        {isScanning && (
          <section className="text-center animate-fade-in relative z-30 pt-8">
            <div className="absolute inset-0 pointer-events-none z-0">
              <HackerLinesBackground />
            </div>
            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-center gap-5">
                <div className="rounded-full bg-gradient-to-tr from-green-800/70 via-green-500/60 to-green-400/80 p-3 animate-glow-pulse border-2 border-green-400 shadow-green-700 shadow-md">
                  <Radar className="w-14 h-14 text-green-200 animate-radar" />
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-green-300 animate-pulse text-shadow-hacker drop-shadow-glow tracking-tighter">
                  PROCESSANDO
                </h2>
                <div className="rounded-full bg-gradient-to-tr from-violet-800/70 via-violet-500/60 to-violet-400/80 p-3 animate-glow-pulse border-2 border-violet-400 shadow-violet-500 shadow-md">
                  <Database className="w-14 h-14 text-violet-200 animate-pulse" />
                </div>
              </div>
              <div className="mx-auto rounded-xl bg-black/60 border-l-4 border-green-400 text-green-200 px-6 py-2 shadow-inner font-mono max-w-md">
                Analisando: <span className="font-bold text-lg text-[#39ff14]">{phoneNumber}</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-4xl">
                <div className="neon-frame-hacker shadow-2xl rounded-2xl p-0 bg-gradient-to-br from-black/70 via-green-800/10 to-violet-900/10">
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
                      <p>📊 {Math.round(progress)}% CONCLUÍDO</p>
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
              <AlertTriangle className="w-16 h-16 text-green-500 animate-glow-pulse drop-shadow-glow" />
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#39ff14] via-violet-500 to-white bg-clip-text text-transparent animate-gradient-shift drop-shadow-glow tracking-tight">
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
                  <Target className="w-8 h-8 animate-pulse text-violet-400" />
                  <span>Acesso Completo aos Dados</span>
                  <Database className="w-8 h-8 animate-pulse text-green-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-7 px-8 py-10">
                  <Button 
                    className="w-full bg-gradient-to-r from-[#39ff14] via-violet-400 to-[#8b5cf6] hover:from-green-600 hover:via-violet-400 hover:to-[#c300ff] text-black font-black py-6 text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl glow-pink uppercase tracking-wide"
                    onClick={() => {
                      alert('🔓 ACESSO LIBERADO! Todas as informações disponíveis foram processadas e estão prontas para visualização.');
                    }}
                  >
                    🔓 ACESSAR RELATÓRIO COMPLETO
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
                    🔍 Nova Análise
                  </Button>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;
