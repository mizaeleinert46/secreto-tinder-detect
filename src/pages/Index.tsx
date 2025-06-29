import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, Eye, AlertTriangle, Zap, Heart, Target, Radar, Lock, Database, Signal, CheckCircle, Star, DollarSign, User, X, Wifi, Globe, Smartphone, Clock, Users, MessageCircle, Camera, Video, FileText, Phone, Mail, Instagram } from "lucide-react";
import HackerOverlay from "@/components/HackerOverlay";
import SpyResults from "@/components/SpyResults";
import HackerLinesBackground from "@/components/HackerLinesBackground";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const HACKER_GRADIENT = "from-[#051205]/95 via-[#11131d]/90 to-[#16051f]/90";
const CTA_GRADIENT = "from-[#39ff14] via-[#c300ff] to-[#ec4899]";
const CARD_GRADIENT = "from-[#152e1a]/90 via-[#351b44]/90 to-[#181722]/90";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [personName, setPersonName] = useState('');
  const [targetGender, setTargetGender] = useState('mulher');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [socialProofIndex, setSocialProofIndex] = useState(0);
  const [showIdentityConfirmation, setShowIdentityConfirmation] = useState(false);
  const [whatsappImage, setWhatsappImage] = useState('');
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [scanningData, setScanningData] = useState({});

  const scanningSteps = [
    { 
      text: "🔐 Interceptando dados do WhatsApp...", 
      duration: 1400,
      icon: MessageCircle,
      details: "Acessando conversas privadas e mídias",
      status: "Decrypting WhatsApp database..."
    },
    { 
      text: "📱 Escaneando redes sociais vinculadas...", 
      duration: 2000,
      icon: Instagram,
      details: "Instagram, Facebook, TikTok, Twitter",
      status: "Cross-referencing 2,847 social profiles..."
    },
    { 
      text: "📸 Localizando fotos e vídeos íntimos...", 
      duration: 1900,
      icon: Camera,
      details: "Buscando conteúdo privado e vazamentos",
      status: "Scanning private media collections..."
    },
    { 
      text: "💌 Extraindo conversas comprometedoras...", 
      duration: 1200,
      icon: Mail,
      details: "Decodificando mensagens deletadas",
      status: "Recovering deleted conversations..."
    },
    { 
      text: "🌐 Mapeando atividade online completa...", 
      duration: 1600,
      icon: Globe,
      details: "Histórico de navegação e apps utilizados",
      status: "Building comprehensive digital footprint..."
    },
  ];

  const realTimeData = [
    { label: "WhatsApp Conversas", value: "34", icon: MessageCircle, color: "text-green-400" },
    { label: "Fotos Encontradas", value: "127", icon: Camera, color: "text-blue-400" },
    { label: "Vídeos Íntimos", value: "8", icon: Video, color: "text-red-400" },
    { label: "Plataformas Ativas", value: "12", icon: Smartphone, color: "text-purple-400" },
  ];

  const socialProofs = [
    { name: '@CarlaM_23', text: 'descobriu as conversas secretas do marido no WhatsApp.' },
    { name: '@PedroSilva90', text: 'encontrou os vídeos íntimos que a ex estava escondendo.' },
    { name: '@AnaClara_', text: 'viu todas as fotos comprometedoras em 3 minutos.' },
    { name: '@RicardoLima', text: 'descobriu a traição através das conversas deletadas.' },
    { name: '@JuliaRocha', text: 'encontrou evidências em 5 plataformas diferentes.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSocialProofIndex((prevIndex) => (prevIndex + 1) % socialProofs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [socialProofs.length]);

  useEffect(() => {
    if (showResults) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showResults]);

  const fetchWhatsAppImage = async (phone: string) => {
    setIsLoadingImage(true);
    try {
      const cleanPhone = phone.replace(/\D/g, '');
      const phoneWithDDI = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
      
      const response = await fetch(`https://whatsapp-data.p.rapidapi.com/wspicture?phone=${phoneWithDDI}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '1642a29e2emsha9cbf0936523495p14fdf5jsnefd16264d115',
          'x-rapidapi-host': 'whatsapp-data.p.rapidapi.com'
        }
      });
      
      const imageUrl = await response.text();
      console.log('WhatsApp API response:', imageUrl);
      
      if (imageUrl && imageUrl.startsWith('https://') && imageUrl.includes('whatsapp.net')) {
        setWhatsappImage(imageUrl);
        setShowIdentityConfirmation(true);
      } else {
        console.log('Imagem não encontrada ou inválida, continuando com o scan...');
        handleStartScan();
      }
    } catch (error) {
      console.error('Erro ao buscar imagem do WhatsApp:', error);
      handleStartScan();
    } finally {
      setIsLoadingImage(false);
    }
  };

  const handleScan = () => {
    if (!phoneNumber.trim() || !personName.trim()) return;
    fetchWhatsAppImage(phoneNumber);
  };

  const handleStartScan = () => {
    setShowIdentityConfirmation(false);
    setIsScanning(true);
    setCurrentStep(0);
    setProgress(0);
    setScanComplete(false);
    setShowResults(false);

    const dataInterval = setInterval(() => {
      setScanningData(prev => ({
        ...prev,
        "WhatsApp Conversas": Math.floor(Math.random() * 50) + 20,
        "Fotos Encontradas": Math.floor(Math.random() * 150) + 50,
        "Vídeos Íntimos": Math.floor(Math.random() * 15) + 3,
        "Plataformas Ativas": Math.floor(Math.random() * 20) + 5,
      }));
    }, 1500);

    scanningSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        setProgress(((index + 1) / scanningSteps.length) * 100);
        if (index === scanningSteps.length - 1) {
          setTimeout(() => {
            clearInterval(dataInterval);
            setIsScanning(false);
            setScanComplete(true);
            setTimeout(() => setShowResults(true), 1000);
          }, step.duration);
        }
      }, scanningSteps.slice(0, index).reduce((acc, s) => acc + s.duration, 0));
    });
  };

  const handleIdentityConfirmation = (isCorrect: boolean) => {
    if (isCorrect) {
      handleStartScan();
    } else {
      setShowIdentityConfirmation(false);
      setWhatsappImage('');
    }
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-green-900/5 to-purple-900/10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(195,0,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"/>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vw] w-[60vw] rounded-full bg-gradient-radial from-[#39ff1420] via-[#c300ff20] to-transparent blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Identity Confirmation Modal */}
        {showIdentityConfirmation && whatsappImage && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="max-w-xs sm:max-w-sm w-full mx-auto animate-fade-in-scale">
              <div className="relative bg-gradient-to-b from-white to-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={whatsappImage} 
                    alt="Perfil encontrado" 
                    className="w-full h-full object-cover"
                    onError={() => {
                      console.log('Erro ao carregar imagem, continuando com o scan...');
                      handleStartScan();
                    }}
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col gap-1 sm:gap-2">
                    <div className="bg-red-500/90 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 animate-pulse">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping"></div>
                      <span className="text-xs">ATIVO AGORA</span>
                    </div>
                    <div className="bg-yellow-500/90 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold text-black flex items-center gap-1">
                      <AlertTriangle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span className="text-xs">ATIVIDADE SUSPEITA</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white">
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-lg sm:text-2xl font-bold">{personName}</h3>
                      <div className="space-y-0.5 sm:space-y-1">
                        <p className="text-xs sm:text-sm opacity-90 flex items-center gap-1 sm:gap-2">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full animate-pulse"></span>
                          <span className="text-xs sm:text-sm">Último acesso: há 15 minutos</span>
                        </p>
                        <p className="text-xs opacity-75 flex items-center gap-1">
                          <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>3 conversas ativas encontradas</span>
                        </p>
                        <p className="text-xs opacity-75 flex items-center gap-1">
                          <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>7 matches nas últimas 48h</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-green-500 to-purple-500 p-1.5 sm:p-2 rounded-full shadow-lg">
                    <Eye className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-white" />
                  </div>
                </div>
                <div className="p-3 sm:p-6 bg-white">
                  <div className="text-center mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                      Essa é a pessoa que você quer investigar?
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
                      Confirme para revelar as evidências encontradas
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                      <div className="flex items-center justify-center gap-1 sm:gap-2 text-red-600 mb-1 sm:mb-2">
                        <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm font-semibold">EVIDÊNCIAS DETECTADAS</span>
                      </div>
                      <div className="space-y-0.5 sm:space-y-1 text-xs text-red-700">
                        <p>• Perfil ativo em múltiplas plataformas digitais</p>
                        <p>• Conversas e mídias privadas encontradas</p>
                        <p>• Atividade recente suspeita</p>
                        <p className="font-semibold">+ Muito mais no relatório completo</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4 justify-center mb-3 sm:mb-4">
                    <Button 
                      onClick={() => handleIdentityConfirmation(false)}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-700 shadow-lg border-2 sm:border-4 border-white transform hover:scale-110 transition-all duration-200"
                    >
                      <X className="w-5 h-5 sm:w-8 sm:h-8" />
                    </Button>
                    <Button 
                      onClick={() => handleIdentityConfirmation(true)}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg border-2 sm:border-4 border-white transform hover:scale-110 transition-all duration-200 animate-pulse"
                    >
                      <AlertTriangle className="w-5 h-5 sm:w-8 sm:h-8" />
                    </Button>
                  </div>
                  <div className="flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                    <span>PESSOA ERRADA</span>
                    <span className="text-red-600 font-semibold">VER EVIDÊNCIAS</span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-2 sm:mt-4 space-y-1 sm:space-y-2">
                <div className="bg-red-900/80 border border-red-500 rounded-lg p-2 sm:p-3">
                  <p className="text-red-300 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1 sm:gap-2">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                    <span>ATIVIDADE DETECTADA NAS ÚLTIMAS HORAS</span>
                  </p>
                </div>
                <p className="text-yellow-400 text-xs sm:text-sm px-2">
                  💡 Se não for a pessoa certa, verifique o nome e número e tente novamente
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Loading Image */}
        {isLoadingImage && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-sm mx-auto animate-fade-in">
              <div className="relative bg-gradient-to-br from-black/90 via-green-900/30 to-purple-900/30 border border-green-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 via-transparent to-purple-400/20 animate-pulse"></div>
                <div className="relative text-center space-y-6">
                  <div className="flex justify-center items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center animate-pulse">
                        <Search className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center animate-pulse">
                        <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-purple-400/30 animate-ping" style={{ animationDelay: '500ms' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-glow">
                      Verificando Identidade
                    </h3>
                    <p className="text-sm sm:text-base text-green-300 font-medium">
                      Buscando foto do WhatsApp...
                    </p>
                  </div>
                  <div className="w-full bg-gray-800/60 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 via-purple-500 to-red-500 rounded-full animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-yellow-300 animate-pulse">
                      <Radar className="w-4 h-4 animate-spin" />
                      <span className="font-medium">Escaneando bases de dados...</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-green-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Conexão segura estabelecida</span>
                    </div>
                  </div>
                  <div className="bg-black/40 border border-gray-600/50 rounded-xl p-3 sm:p-4 mt-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span>Processo 100% anônimo e seguro</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 border border-green-400/20 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 border border-purple-400/10 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        )}

        {!isScanning && !scanComplete && !showIdentityConfirmation && !isLoadingImage && (
          <section className="animate-fade-in">
            <div className="text-center space-y-12 pt-8 pb-12 md:pb-20">
              <div className="flex flex-col items-center space-y-8">
                <div className="flex items-center justify-center gap-4 md:gap-6">
                  <div className="rounded-full bg-gradient-to-tr from-green-800/60 via-green-500/50 to-green-400/70 p-4 md:p-5 border-2 border-green-400/40 shadow-green-700/50 shadow-xl">
                    <Eye className="w-10 h-10 md:w-14 md:h-14 text-green-200" />
                  </div>
                  <div className="text-center">
                    <h1 className="font-black text-5xl sm:text-6xl md:text-8xl tracking-tight leading-none">
                      <span className="text-[#39ff14] drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">CYBER</span>
                    </h1>
                    <h2 className="font-black text-3xl sm:text-4xl md:text-6xl tracking-tight text-white/90 mt-1 md:mt-2">
                      ESPIÃO
                    </h2>
                  </div>
                  <div className="rounded-full bg-gradient-to-tr from-purple-800/60 via-purple-500/50 to-purple-400/70 p-4 md:p-5 border-2 border-purple-400/40 shadow-purple-700/50 shadow-xl">
                    <Shield className="w-10 h-10 md:w-14 md:h-14 text-purple-200" />
                  </div>
                </div>
                <div className="space-y-6 max-w-4xl mx-auto">
                  <p className="text-2xl md:text-4xl font-bold text-green-300/90 drop-shadow-glow">
                    Sistema de Espionagem Digital Completo - Descubra TUDO sobre qualquer pessoa.
                  </p>
                  <p className="text-lg md:text-2xl text-gray-200/90 leading-relaxed">
                    WhatsApp, fotos íntimas, vídeos privados, conversas deletadas, redes sociais secretas e muito mais. 
                    A tecnologia mais avançada de investigação digital ao seu alcance.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                <Badge className="backdrop-blur-xl border border-green-400/50 bg-green-950/70 text-green-100 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg font-semibold flex gap-3 items-center shadow-lg">
                  <Shield className="w-5 h-5" /> 100% Anônimo
                </Badge>
                <Badge className="border border-purple-400/50 bg-purple-950/70 text-purple-100 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg font-semibold flex gap-3 items-center shadow-lg">
                  <Database className="w-5 h-5" /> Multi-Plataforma
                </Badge>
                <Badge className="border border-red-400/50 bg-red-950/70 text-red-100 px-4 py-2 text-base md:px-6 md:py-3 md:text-lg font-semibold flex gap-3 items-center shadow-lg">
                  <Zap className="w-5 h-5" /> Resultados Instantâneos
                </Badge>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-lg md:text-xl font-bold text-white ml-2">4.9/5</span>
                </div>
                <p className="text-base md:text-lg text-gray-300">Mais de <span className="font-bold text-white">15 mil investigações</span> realizadas com sucesso hoje.</p>
                <p className="text-sm md:text-base text-gray-400">(+250.000 evidências descobertas)</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
              <Card className="bg-gradient-to-br from-green-950/50 to-black/70 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 shadow-xl hover:shadow-green-500/20">
                <CardHeader className="text-center pb-4">
                  <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto mb-4 md:mb-6" />
                  <CardTitle className="text-xl md:text-2xl text-green-300 font-bold">WhatsApp Completo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center text-base md:text-lg leading-relaxed">
                    Conversas, fotos, vídeos, áudios, localizações e até mensagens deletadas. Acesso total ao WhatsApp de qualquer pessoa.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-950/50 to-black/70 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/20">
                <CardHeader className="text-center pb-4">
                  <Camera className="w-12 h-12 md:w-16 md:h-16 text-purple-400 mx-auto mb-4 md:mb-6" />
                  <CardTitle className="text-xl md:text-2xl text-purple-300 font-bold">Conteúdo Íntimo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center text-base md:text-lg leading-relaxed">
                    Encontre fotos e vídeos privados, nudes vazados, conteúdo íntimo escondido em todas as plataformas digitais.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-red-950/50 to-black/70 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 shadow-xl hover:shadow-red-500/20">
                <CardHeader className="text-center pb-4">
                  <Globe className="w-12 h-12 md:w-16 md:h-16 text-red-400 mx-auto mb-4 md:mb-6" />
                  <CardTitle className="text-xl md:text-2xl text-red-300 font-bold">Redes Sociais Secretas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center text-base md:text-lg leading-relaxed">
                    Perfis ocultos, conversas privadas, aplicativos de relacionamento, tudo que tentam esconder de você.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className={`mx-auto max-w-3xl neon-frame-hacker shadow-2xl bg-gradient-to-br ${CARD_GRADIENT} hover:scale-[1.02] transition-transform duration-300`}>
              <CardHeader className="pb-6 md:pb-8 pt-8 md:pt-12">
                <p className="text-center text-xl md:text-2xl text-green-400 font-semibold mb-4 animate-pulse">
                  Pare de viver na dúvida. Descubra TODA a verdade digital.
                </p>
                <CardTitle className="text-center text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-glow">
                  <span className="flex items-center justify-center gap-3 md:gap-5">
                    <Radar className="w-8 h-8 md:w-12 md:h-12 animate-pulse text-green-400" />
                    <span>Investigação Total</span>
                    <Eye className="w-8 h-8 md:w-12 md:h-12 animate-pulse text-purple-400" />
                  </span>
                </CardTitle>
                <p className="text-center text-lg md:text-xl text-gray-300 mt-4">
                  Digite o nome e número da pessoa para iniciar a investigação completa.
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
                            ? 'bg-green-500/20 border-green-400 text-white shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                            : 'bg-gray-900/50 border-gray-700 hover:border-green-400/50 text-gray-400'
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
                            ? 'bg-green-500/20 border-green-400 text-white shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                            : 'bg-gray-900/50 border-gray-700 hover:border-green-400/50 text-gray-400'
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
                    Nome da pessoa:
                  </label>
                  <Input 
                    type="text"
                    placeholder="Digite o nome completo"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                    className="bg-gray-900/80 border-3 border-green-400/40 text-white text-center text-2xl md:text-3xl h-16 md:h-20 font-mono focus:border-green-400 focus:ring-green-400/30 transition-all duration-300 hover:border-green-400/60 rounded-2xl shadow-xl mb-4"
                  />
                </div>
                <div>
                  <label className="block text-gray-200 text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
                    Número do WhatsApp:
                  </label>
                  <Input 
                    type="tel"
                    placeholder="(11) 9XXXX-XXXX"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="bg-gray-900/80 border-3 border-green-400/40 text-white text-center text-2xl md:text-3xl h-16 md:h-20 font-mono focus:border-green-400 focus:ring-green-400/30 transition-all duration-300 hover:border-green-400/60 rounded-2xl shadow-xl"
                    maxLength={15}
                  />
                  <p className="text-center text-yellow-300 text-sm md:text-base mt-2 font-semibold">
                    ⚠️ Certifique-se de que o número tem WhatsApp ativo
                  </p>
                </div>
                <div className="text-center text-red-400 bg-red-900/50 border border-red-500 rounded-lg py-3 px-4 font-bold text-base md:text-xl mb-4 shadow-lg animate-pulse">
                  <AlertTriangle className="inline-block w-5 h-5 md:w-6 md:h-6 mr-2" /> 
                  ATENÇÃO: Apenas 15 investigações gratuitas restantes hoje.
                </div>
                <Button 
                  onClick={handleScan}
                  disabled={phoneNumber.length < 14 || personName.trim().length < 2}
                  className={`w-full py-5 md:py-8 text-xl md:text-3xl font-black tracking-wider rounded-2xl shadow-2xl bg-gradient-to-r ${CTA_GRADIENT} hover:from-green-500 hover:via-purple-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 uppercase`}
                >
                  <Radar className="mr-3 md:mr-4 h-6 w-6 md:h-10 md:w-10 animate-spin" />
                  Iniciar Investigação Completa
                </Button>
                <div className="text-center mt-4 p-3 bg-black/30 rounded-lg border border-gray-700 h-16 flex items-center justify-center">
                  <p key={socialProofIndex} className="text-base md:text-lg text-white animate-fade-in">
                    🔥 <span className="font-bold text-green-400">{socialProofs[socialProofIndex].name}</span> {socialProofs[socialProofIndex].text}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center pt-2">
                  <div className="flex items-center gap-3 text-green-400 text-base md:text-xl justify-center">
                    <Shield className="w-6 h-6 md:w-7 md:h-7" />
                    Totalmente Anônimo
                  </div>
                  <div className="flex items-center gap-3 text-purple-400 text-base md:text-xl justify-center">
                    <Lock className="w-6 h-6 md:w-7 md:h-7" />
                    Sem Rastros
                  </div>
                  <div className="flex items-center gap-3 text-red-400 text-base md:text-xl justify-center">
                    <Zap className="w-6 h-6 md:w-7 md:h-7" />
                    Acesso Instantâneo
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Enhanced Scanning Phase */}
        {isScanning && (
          <section className="text-center animate-fade-in relative z-30 pt-8">
            <div className="absolute inset-0 pointer-events-none z-0">
              <HackerLinesBackground />
            </div>
            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-center gap-4 md:gap-5">
                <div className="rounded-full bg-gradient-to-tr from-green-800/70 via-green-500/60 to-green-400/80 p-3 animate-glow-pulse border-2 border-green-400 shadow-green-700 shadow-md">
                  <Database className="w-12 h-12 md:w-14 md:h-14 text-green-200 animate-pulse" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-green-300 animate-pulse text-shadow-hacker drop-shadow-glow tracking-tighter">
                  INVESTIGANDO
                </h2>
                <div className="rounded-full bg-gradient-to-tr from-purple-800/70 via-purple-500/60 to-purple-400/80 p-3 animate-glow-pulse border-2 border-purple-400 shadow-purple-500 shadow-md">
                  <Eye className="w-12 h-12 md:w-14 md:h-14 text-purple-200 animate-radar" />
                </div>
              </div>
              <div className="mx-auto rounded-xl bg-black/60 border-l-4 border-green-400 text-green-200 px-4 py-2 md:px-6 shadow-inner font-mono max-w-md text-sm md:text-base">
                Alvo: <span className="font-bold text-base md:text-lg text-[#39ff14]">{phoneNumber}</span>
              </div>
              <div className="mx-auto rounded-xl bg-red-900/30 border border-red-400/50 text-red-200 px-4 py-2 md:px-6 shadow-inner font-mono max-w-lg text-sm md:text-base animate-pulse">
                🚨 MÚLTIPLAS PLATAFORMAS DETECTADAS - Extraindo dados sensíveis
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-6xl">
                <div className="neon-frame-hacker shadow-2xl rounded-2xl p-0 bg-gradient-to-br from-black/70 via-green-800/10 to-purple-900/10">
                  <div className="p-6 sm:p-10 md:p-14 space-y-8 md:space-y-10">
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-green-300 font-mono text-sm md:text-base">PROGRESSO DA INVESTIGAÇÃO</span>
                        <span className="text-green-300 font-mono text-sm md:text-base font-bold">{Math.round(progress)}%</span>
                      </div>
                      <div className="h-6 w-full rounded-full bg-black overflow-hidden border border-green-700 shadow-inner shadow-green-400/20">
                        <div
                          style={{
                            width: `${progress}%`,
                            transition: "width 1s cubic-bezier(.65,0,.45,1)",
                          }}
                          className="h-full rounded-full progress-hacker-neon relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-purple-500 to-red-500 animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {realTimeData.map((data, index) => (
                        <div key={index} className="bg-black/50 border border-gray-700 rounded-xl p-3 md:p-4 text-center backdrop-blur-sm">
                          <div className="flex items-center justify-center mb-2">
                            <data.icon className={`w-5 h-5 md:w-6 md:h-6 ${data.color}`} />
                          </div>
                          <div className={`text-lg md:text-xl font-bold ${data.color} font-mono`}>
                            {scanningData[data.label] || data.value}
                          </div>
                          <div className="text-xs md:text-sm text-gray-400 font-semibold">
                            {data.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4 md:space-y-5">
                      {scanningSteps.map((step, index) => {
                        const StepIcon = step.icon;
                        return (
                          <div
                            key={index}
                            className={`relative overflow-hidden rounded-2xl transition-all duration-700 font-mono border-2 ${
                              index === currentStep
                                ? 'bg-gradient-to-r from-[#181f1a]/90 via-green-950/60 to-purple-950/60 text-green-200 border-green-400/60 shadow-xl scale-105 drop-shadow-glow transform-gpu' 
                                : index < currentStep
                                  ? 'bg-gradient-to-r from-green-900/40 to-green-800/60 text-green-300 border-green-500/50 shadow-lg'
                                  : 'bg-black/40 text-green-700 border-green-900/20'
                            }`}
                          >
                            {index === currentStep && (
                              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-purple-400/10 to-red-400/10 animate-pulse"></div>
                            )}
                            <div className="relative flex items-center space-x-4 md:space-x-6 p-4 md:p-6">
                              <div className={`flex-shrink-0 p-3 rounded-lg transition-all duration-500 ${
                                index === currentStep
                                  ? 'bg-gradient-to-r from-green-500/20 to-purple-500/20 border border-green-400/40 shadow-lg'
                                  : index < currentStep
                                    ? 'bg-green-500/20 border border-green-400/40'
                                    : 'bg-gray-900/40 border border-gray-700/40'
                              }`}>
                                <StepIcon className={`w-6 h-6 md:w-7 md:h-7 transition-all duration-500 ${
                                  index === currentStep
                                    ? 'text-green-300 animate-pulse'
                                    : index < currentStep
                                      ? 'text-green-400'
                                      : 'text-gray-600'
                                }`} />
                              </div>
                              <div className="flex-grow min-w-0">
                                <div className="text-base md:text-xl font-semibold mb-1">
                                  {step.text}
                                </div>
                                <div className="text-sm md:text-base opacity-80 mb-1">
                                  {step.details}
                                </div>
                                {index === currentStep && (
                                  <div className="text-xs md:text-sm font-mono text-yellow-300 animate-pulse">
                                    {step.status}
                                  </div>
                                )}
                              </div>
                              <div className={`flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full transition-all duration-500 ${
                                index === currentStep
                                  ? 'bg-gradient-to-r from-green-400 to-purple-400 animate-pulse shadow-lg'
                                  : index < currentStep
                                    ? 'bg-green-500 shadow-md'
                                    : 'bg-gray-700'
                              }`}>
                                {index < currentStep && (
                                  <CheckCircle className="w-full h-full text-white" />
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center gap-3 text-green-400 pt-2 font-mono text-lg md:text-2xl">
                        <Database className="w-6 h-6 md:w-7 md:h-7 animate-pulse" />
                        <span>📊 {Math.round(progress)}% CONCLUÍDO</span>
                        <Signal className="w-6 h-6 md:w-7 md:h-7 animate-pulse" />
                      </div>
                      {progress > 60 && (
                        <div className="bg-red-900/40 border border-red-400/50 rounded-xl p-4 animate-fade-in">
                          <div className="flex items-center justify-center gap-2 text-red-300 font-semibold">
                            <AlertTriangle className="w-5 h-5 animate-pulse" />
                            <span>CONTEÚDO ALTAMENTE COMPROMETEDOR DETECTADO</span>
                            <AlertTriangle className="w-5 h-5 animate-pulse" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results Section */}
        {scanComplete && (
          <SpyResults targetGender={targetGender as 'homem' | 'mulher'} />
        )}
      </div>
    </div>
  );
};

export default Index;
