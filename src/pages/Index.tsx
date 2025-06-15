import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, Eye, AlertTriangle, Zap, Heart, Target, Radar, Lock, Database, Signal, CheckCircle, Star, DollarSign, User } from "lucide-react";
import HackerOverlay from "@/components/HackerOverlay";
import DiscoveredProfileInfo from "@/components/DiscoveredProfileInfo";
import BlurredTinderScreen from "@/components/BlurredTinderScreen";
import VideoCallHistory from "@/components/VideoCallHistory";
import HackerLinesBackground from "@/components/HackerLinesBackground";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const HACKER_GRADIENT = "from-[#051205]/95 via-[#11131d]/90 to-[#16051f]/90";
const CTA_GRADIENT = "from-[#39ff14] via-[#c300ff] to-[#ec4899]";
const CARD_GRADIENT = "from-[#152e1a]/90 via-[#351b44]/90 to-[#181722]/90";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [targetGender, setTargetGender] = useState('mulher');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [socialProofIndex, setSocialProofIndex] = useState(0);

  const scanningSteps = [
    { text: "🔐 Iniciando protocolo de quebra de sigilo...", duration: 1400 },
    { text: "🛡️ Acessando servidores de apps de relacionamento...", duration: 2000 },
    { text: "🎯 Cruzando dados com o número fornecido...", duration: 1900 },
    { text: "🔍 Revelando perfis, fotos e matches ocultos...", duration: 1200 },
    { text: "⚡ Compilando dossiê completo da atividade...", duration: 1600 },
  ];

  const socialProofs = [
    { name: '@Juh_Almeida', text: 'acabou de descobrir um perfil secreto.' },
    { name: '@Lucas_S2', text: 'revelou os matches ocultos da namorada.' },
    { name: '@Fer_Souza', text: 'confirmou suas suspeitas em menos de 5 minutos.' },
    { name: '@Ricardo92', text: 'pegou a traição no flagra com nosso app.' },
    { name: '@Bia_oliveira', text: 'viu as conversas que tentaram esconder dela.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSocialProofIndex((prevIndex) => (prevIndex + 1) % socialProofs.length);
    }, 4000); // Muda a cada 4 segundos
    return () => clearInterval(interval);
  }, [socialProofs.length]);

  useEffect(() => {
    if (showResults) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showResults]);

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
    <div className={`min-h-screen bg-gradient-to-br ${HACKER_GRADIENT} text-white overflow-hidden relative font-sans`}>
      {isScanning && <HackerOverlay />}
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-pink-900/5 to-violet-900/10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"/>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vw] w-[60vw] rounded-full bg-gradient-radial from-[#ec489920] via-[#8b5cf620] to-transparent blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {!isScanning && !scanComplete && (
          <section className="animate-fade-in">
            {/* Header Premium */}
            <div className="text-center space-y-12 pt-8 pb-12 md:pb-20">
              <div className="flex flex-col items-center space-y-8">
                {/* Logo/Brand */}
                <div className="flex items-center justify-center gap-4 md:gap-6">
                  <div className="rounded-full bg-gradient-to-tr from-pink-800/60 via-pink-500/50 to-pink-400/70 p-4 md:p-5 border-2 border-pink-400/40 shadow-pink-700/50 shadow-xl">
                    <Heart className="w-10 h-10 md:w-14 md:h-14 text-pink-200" />
                  </div>
                  <div className="text-center">
                    <h1 className="font-black text-5xl sm:text-6xl md:text-8xl tracking-tight leading-none">
                      <span className="text-[#ec4899] drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">TINDER</span>
                    </h1>
                    <h2 className="font-black text-3xl sm:text-4xl md:text-6xl tracking-tight text-white/90 mt-1 md:mt-2">
                      ESPIÃO
                    </h2>
                  </div>
                  <div className="rounded-full bg-gradient-to-tr from-violet-800/60 via-violet-500/50 to-violet-400/70 p-4 md:p-5 border-2 border-violet-400/40 shadow-violet-700/50 shadow-xl">
                    <Eye className="w-10 h-10 md:w-14 md:h-14 text-violet-200" />
                  </div>
                </div>
                
                <div className="space-y-6 max-w-4xl mx-auto">
                  <p className="text-2xl md:text-4xl font-bold text-pink-300/90 drop-shadow-glow">
                    A desconfiança te paralisa? Descubra se ele(a) está no Tinder.
                  </p>
                  <p className="text-lg md:text-2xl text-gray-200/90 leading-relaxed">
                    Milhões de pessoas usam o Tinder para trair. Nossa tecnologia expõe perfis secretos e te dá a prova que você precisa. Chega de noites em claro e incerteza.
                  </p>
                </div>
              </div>

              {/* Credibilidade Premium */}
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                <Badge className="backdrop-blur-xl border border-pink-400/50 bg-pink-950/70 text-pink-100 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg font-semibold flex gap-3 items-center shadow-lg">
                  <Shield className="w-5 h-5" /> 100% Seguro
                </Badge>
                <Badge className="border border-violet-400/50 bg-violet-950/70 text-violet-100 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg font-semibold flex gap-3 items-center shadow-lg">
                  <CheckCircle className="w-5 h-5" /> Resultados Precisos
                </Badge>
                <Badge className="border border-green-400/50 bg-green-950/70 text-green-100 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg font-semibold flex gap-3 items-center shadow-lg">
                  <Lock className="w-5 h-5" /> Totalmente Anônimo
                </Badge>
              </div>

              {/* Avaliações */}
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-lg md:text-xl font-bold text-white ml-2">4.9/5</span>
                </div>
                <p className="text-base md:text-lg text-gray-300">Junte-se às mais de <span className="font-bold text-white">7 mil pessoas</span> que usaram hoje para descobrir a verdade.</p>
                <p className="text-sm md:text-base text-gray-400">(+50.000 investigações de sucesso)</p>
              </div>
            </div>

            {/* Features Premium */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
              <Card className="bg-gradient-to-br from-pink-950/50 to-black/70 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 shadow-xl hover:shadow-pink-500/20">
                <CardHeader className="text-center pb-4">
                  <Heart className="w-12 h-12 md:w-16 md:h-16 text-pink-400 mx-auto mb-4 md:mb-6" />
                  <CardTitle className="text-xl md:text-2xl text-pink-300 font-bold">Descubra a Verdade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center text-base md:text-lg leading-relaxed">
                    Mesmo que ele(a) use um nome falso ou outra foto, nosso sistema encontra. Descubra a verdade que tentam esconder de você.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-violet-950/50 to-black/70 border border-violet-400/30 hover:border-violet-400/50 transition-all duration-300 shadow-xl hover:shadow-violet-500/20">
                <CardHeader className="text-center pb-4">
                  <Database className="w-12 h-12 md:w-16 md:h-12 text-violet-400 mx-auto mb-4 md:mb-6" />
                  <CardTitle className="text-xl md:text-2xl text-violet-300 font-bold">Provas Irrefutáveis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center text-base md:text-lg leading-relaxed">
                    Veja com quem ele(a) dá 'match', as fotos que usa e até o início das conversas. A verdade, na palma da sua mão.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-950/50 to-black/70 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 shadow-xl hover:shadow-green-500/20">
                <CardHeader className="text-center pb-4">
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto mb-4 md:mb-6" />
                  <CardTitle className="text-xl md:text-2xl text-green-300 font-bold">Proteja-se com Sigilo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center text-base md:text-lg leading-relaxed">
                    Sua identidade é 100% protegida. Ele(a) NUNCA saberá que você investigou. Aja com segurança e recupere sua paz.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Card de busca principal */}
            <Card className={`mx-auto max-w-3xl neon-frame-hacker shadow-2xl bg-gradient-to-br ${CARD_GRADIENT} hover:scale-[1.02] transition-transform duration-300`}>
              <CardHeader className="pb-6 md:pb-8 pt-8 md:pt-12">
                <p className="text-center text-xl md:text-2xl text-pink-400 font-semibold mb-4 animate-pulse">Você vai continuar na dúvida enquanto outros descobrem a verdade?</p>
                <CardTitle className="text-center text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-glow">
                  <span className="flex items-center justify-center gap-3 md:gap-5">
                    <Search className="w-8 h-8 md:w-12 md:h-12 animate-pulse text-pink-400" />
                    <span>Acabe com a Angústia</span>
                    <Target className="w-8 h-8 md:w-12 md:h-12 animate-pulse text-violet-400" />
                  </span>
                </CardTitle>
                <p className="text-center text-lg md:text-xl text-gray-300 mt-4">
                  Um simples número de telefone é tudo o que precisamos para revelar se a sua confiança está sendo traída.
                </p>
              </CardHeader>
              <CardContent className="space-y-6 md:space-y-8 px-6 md:px-10 pb-8 md:pb-12">
                <div>
                  <Label className="block text-gray-200 text-xl md:text-2xl font-bold mb-4 text-center">
                    Quem você quer investigar?
                  </Label>
                  <RadioGroup
                    value={targetGender}
                    onValueChange={setTargetGender}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="homem" id="r1" className="sr-only" />
                      <Label
                        htmlFor="r1"
                        className={`flex items-center justify-center p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2 text-xl font-bold ${
                          targetGender === 'homem'
                            ? 'bg-pink-500/20 border-pink-400 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                            : 'bg-gray-900/50 border-gray-700 hover:border-pink-400/50 text-gray-400'
                        }`}
                      >
                        <User className="mr-3 h-6 w-6" />
                        Homem
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="mulher" id="r2" className="sr-only" />
                      <Label
                        htmlFor="r2"
                        className={`flex items-center justify-center p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2 text-xl font-bold ${
                          targetGender === 'mulher'
                            ? 'bg-pink-500/20 border-pink-400 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                            : 'bg-gray-900/50 border-gray-700 hover:border-pink-400/50 text-gray-400'
                        }`}
                      >
                        <User className="mr-3 h-6 w-6" />
                        Mulher
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <label className="block text-gray-200 text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
                    Número de telefone:
                  </label>
                  <Input 
                    type="tel"
                    placeholder="(11) 9XXXX-XXXX"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="bg-gray-900/80 border-3 border-pink-400/40 text-white text-center text-2xl md:text-3xl h-16 md:h-20 font-mono focus:border-pink-400 focus:ring-pink-400/30 transition-all duration-300 hover:border-pink-400/60 rounded-2xl shadow-xl"
                    maxLength={15}
                  />
                </div>
                <div className="text-center text-yellow-400 bg-yellow-900/50 border border-yellow-500 rounded-lg py-3 px-4 font-bold text-base md:text-xl mb-4 shadow-lg animate-pulse">
                  <AlertTriangle className="inline-block w-5 h-5 md:w-6 md:h-6 mr-2" /> Apenas 30 verificações gratuitas restantes hoje.
                </div>
                <Button 
                  onClick={handleScan}
                  disabled={phoneNumber.length < 14}
                  className={`w-full py-5 md:py-8 text-xl md:text-3xl font-black tracking-wider rounded-2xl shadow-2xl bg-gradient-to-r ${CTA_GRADIENT} hover:from-pink-500 hover:via-violet-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 uppercase`}
                >
                  <Radar className="mr-3 md:mr-4 h-6 w-6 md:h-10 md:w-10 animate-spin" />
                  Expor a Verdade Agora
                </Button>
                <div className="text-center mt-4 p-3 bg-black/30 rounded-lg border border-gray-700 h-16 flex items-center justify-center">
                  <p key={socialProofIndex} className="text-base md:text-lg text-white animate-fade-in">
                    🔥 <span className="font-bold text-pink-400">{socialProofs[socialProofIndex].name}</span> {socialProofs[socialProofIndex].text}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center pt-2">
                  <div className="flex items-center gap-3 text-pink-400 text-base md:text-xl justify-center">
                    <Shield className="w-6 h-6 md:w-7 md:h-7" />
                    Totalmente Anônimo
                  </div>
                  <div className="flex items-center gap-3 text-violet-400 text-base md:text-xl justify-center">
                    <Lock className="w-6 h-6 md:w-7 md:h-7" />
                    Sem Rastros
                  </div>
                  <div className="flex items-center gap-3 text-green-400 text-base md:text-xl justify-center">
                    <Zap className="w-6 h-6 md:w-7 md:h-7" />
                    Resultados Instantâneos
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
              <div className="flex items-center justify-center gap-4 md:gap-5">
                <div className="rounded-full bg-gradient-to-tr from-pink-800/70 via-pink-500/60 to-pink-400/80 p-3 animate-glow-pulse border-2 border-pink-400 shadow-pink-700 shadow-md">
                  <Radar className="w-12 h-12 md:w-14 md:h-14 text-pink-200 animate-radar" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-pink-300 animate-pulse text-shadow-hacker drop-shadow-glow tracking-tighter">
                  INVESTIGANDO
                </h2>
                <div className="rounded-full bg-gradient-to-tr from-violet-800/70 via-violet-500/60 to-violet-400/80 p-3 animate-glow-pulse border-2 border-violet-400 shadow-violet-500 shadow-md">
                  <Database className="w-12 h-12 md:w-14 md:h-14 text-violet-200 animate-pulse" />
                </div>
              </div>
              <div className="mx-auto rounded-xl bg-black/60 border-l-4 border-pink-400 text-pink-200 px-4 py-2 md:px-6 shadow-inner font-mono max-w-md text-sm md:text-base">
                Analisando: <span className="font-bold text-base md:text-lg text-[#ec4899]">{phoneNumber}</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-4xl">
                <div className="neon-frame-hacker shadow-2xl rounded-2xl p-0 bg-gradient-to-br from-black/70 via-pink-800/10 to-violet-900/10">
                  <div className="p-6 sm:p-10 md:p-14 space-y-8 md:space-y-10">
                    <div className="w-full">
                      <div className="h-6 w-full rounded-full bg-black overflow-hidden border border-pink-700 shadow-inner shadow-pink-400/20">
                        <div
                          style={{
                            width: `${progress}%`,
                            transition: "width 1s cubic-bezier(.65,0,.45,1)",
                          }}
                          className="h-full rounded-full progress-hacker-neon"
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-4 md:space-y-5">
                      {scanningSteps.map((step, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-4 md:space-x-6 p-4 md:p-5 rounded-2xl transition-all duration-700 font-mono text-base md:text-xl
                            ${index === currentStep
                              ? 'bg-gradient-to-r from-[#181f1a]/70 to-pink-950 text-pink-200 border-2 border-pink-400/60 shadow-xl scale-105 drop-shadow-glow'
                              : index < currentStep
                                ? 'bg-black/60 text-gray-500 border border-pink-800/50'
                                : 'text-pink-700 border border-pink-900/20'
                            }`}
                        >
                          <div className={`w-5 h-5 rounded-full transition-all duration-500
                            ${index === currentStep
                              ? 'bg-gradient-to-r from-pink-400 to-[#ec4899] animate-heart-beat'
                              : index < currentStep
                                ? 'bg-pink-500/50'
                                : 'bg-pink-900/20'
                            }`}
                          ></div>
                          <span className="flex-grow text-left font-semibold">{step.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-pink-400 pt-2 font-mono text-lg md:text-2xl">
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
          <section className="text-center space-y-8 md:space-y-10 animate-fade-in">
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-9">
              <div className="p-3 bg-black/30 rounded-lg border border-pink-500/30">
                <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-pink-400 animate-pulse" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-[#ec4899] via-violet-500 to-white bg-clip-text text-transparent animate-gradient-shift drop-shadow-glow tracking-tight">
                ALERTA: ATIVIDADE SUSPEITA DETECTADA
              </h2>
              <div className="p-3 bg-black/30 rounded-lg border border-violet-500/30">
                <Eye className="w-8 h-8 md:w-10 md:h-10 text-violet-300 animate-pulse" />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white mb-2 font-semibold drop-shadow-glow">
              Encontramos um perfil ativo vinculado a este número. Os detalhes estão ocultos para sua proteção.
            </p>
            <div className="mt-2">
              <DiscoveredProfileInfo gender={targetGender as 'homem' | 'mulher'} />
              <BlurredTinderScreen gender={targetGender as 'homem' | 'mulher'} />
              <VideoCallHistory />
            </div>

            {/* O QUE VOCÊ VAI DESCOBRIR */}
            <div className="max-w-4xl mx-auto space-y-6 text-left animate-fade-in pt-8">
              <h3 className="text-2xl md:text-4xl font-bold text-center text-green-300 drop-shadow-glow">
                O que você vai descobrir ao desbloquear?
              </h3>
              <p className="text-center text-lg md:text-xl text-gray-200">
                Por um pagamento único de <span className="font-bold text-yellow-300 text-2xl">R$19,90</span>, você terá acesso total e irrestrito a um dossiê completo. Chega de dúvidas.
              </p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 p-6 bg-black/30 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 text-lg text-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Fotos e vídeos do perfil</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Descrição completa da bio (atual e antigas)</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Lista de matches e curtidas recentes</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>O início de conversas suspeitas</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Nível de atividade e horários de uso</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Localizações recentes de login</span>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <Card className="bg-gradient-to-br from-[#090f10]/90 via-[#27132b]/80 to-[#0e2021]/100 border-4 border-[#ec4899] neon-frame-hacker backdrop-blur-2xl max-w-4xl mx-auto shadow-[0_0_55px_2px_rgba(236,72,153,0.3)] mt-8 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#ec4899] flex items-center justify-center space-x-3 md:space-x-4 text-xl md:text-3xl font-bold animate-gradient-shift drop-shadow-glow">
                  <Target className="w-7 h-7 md:w-8 md:h-8 animate-pulse text-violet-400" />
                  <span>A Verdade Está a Um Clique</span>
                  <Heart className="w-7 h-7 md:w-8 md:h-8 animate-pulse text-pink-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 md:space-y-7 px-6 md:px-8 py-8 md:py-10">
                  <div className="flex flex-col items-center gap-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-[#ec4899] via-violet-400 to-[#8b5cf6] hover:from-pink-600 hover:via-violet-400 hover:to-[#c300ff] text-white font-black py-5 md:py-6 text-sm sm:text-lg md:text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl glow-pink uppercase tracking-wide px-2 whitespace-normal h-auto"
                      onClick={() => {
                        window.location.href = 'https://go.perfectpay.com.br/PPU38CPQMGG';
                      }}
                    >
                      <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2" />
                      DESBLOQUEAR PERFIL COMPLETO POR R$19,90
                    </Button>
                    <p className="text-center text-sm text-gray-400">Pagamento único e 100% seguro. Acesso vitalício às informações.</p>
                  </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;
