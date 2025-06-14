
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, Eye, AlertTriangle, Zap } from "lucide-react";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const scanningSteps = [
    { text: "🔍 Iniciando varredura nos bancos de dados...", duration: 2000 },
    { text: "📱 Correlacionando número com perfis públicos...", duration: 2500 },
    { text: "💔 Verificando histórico no Tinder...", duration: 3000 },
    { text: "🕵️ Analisando padrões de atividade...", duration: 2200 },
    { text: "⚡ Cruzando dados de redes sociais...", duration: 2800 },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full blur-[120px]"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        {!isScanning && !scanComplete && (
          <div className="text-center space-y-12 animate-fade-in">
            {/* Enhanced header */}
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Shield className="w-12 h-12 text-red-400 animate-pulse" />
                <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  DETECTOR
                </h1>
                <Shield className="w-12 h-12 text-red-400 animate-pulse" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-red-400 animate-pulse">
                  🚨 PERFIL SECRETO
                </h2>
                <div className="text-xl md:text-2xl text-gray-300 space-y-4 max-w-4xl mx-auto">
                  <p className="font-semibold text-red-400 text-2xl">
                    Será que você realmente conhece quem dorme ao seu lado?
                  </p>
                  <p className="text-lg">
                    Descubra se seu(sua) parceiro(a) já teve — ou ainda tem — uma conta no Tinder
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced statistics section */}
            <div className="grid md:grid-cols-3 gap-6 my-16">
              <Card className="bg-gradient-to-br from-red-900/40 to-red-800/20 border-red-500/30 backdrop-blur-xl shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-black text-red-400 mb-2">94%</div>
                  <div className="text-gray-300 font-medium">Das traições começam em apps</div>
                  <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mt-4 animate-pulse" />
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-black text-purple-400 mb-2">73%</div>
                  <div className="text-gray-300 font-medium">Mantêm perfis secretos</div>
                  <Eye className="w-8 h-8 text-purple-400 mx-auto mt-4 animate-pulse" />
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 border-cyan-500/30 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">2.3M</div>
                  <div className="text-gray-300 font-medium">Perfis verificados</div>
                  <Zap className="w-8 h-8 text-cyan-400 mx-auto mt-4 animate-pulse" />
                </CardContent>
              </Card>
            </div>

            {/* Enhanced phone input section */}
            <Card className="bg-gradient-to-br from-black/60 to-gray-900/40 border-gray-700/50 backdrop-blur-xl shadow-2xl max-w-lg mx-auto hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-center text-yellow-400 text-2xl font-bold flex items-center justify-center space-x-2">
                  <Search className="w-6 h-6" />
                  <span>INICIAR VERIFICAÇÃO</span>
                  <Search className="w-6 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <div className="space-y-4">
                  <label className="text-gray-400 text-center block font-medium">
                    📱 Digite o número de WhatsApp para investigar:
                  </label>
                  <Input 
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="bg-gray-800/70 border-gray-600 text-white text-center text-xl h-14 font-mono focus:border-red-400 focus:ring-red-400/20 transition-all duration-300"
                    maxLength={15}
                  />
                </div>
                
                <Button 
                  onClick={handleScan}
                  disabled={phoneNumber.length < 14}
                  className="w-full bg-gradient-to-r from-red-600 via-red-700 to-purple-600 hover:from-red-700 hover:via-red-800 hover:to-purple-700 text-white font-bold py-4 text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  <Search className="mr-3 h-6 w-6" />
                  🚀 INICIAR INVESTIGAÇÃO
                </Button>
                
                <div className="text-center space-y-2">
                  <p className="text-xs text-gray-500">
                    ⚡ Verificação 100% anônima e segura
                  </p>
                  <p className="text-xs text-gray-600">
                    🔒 Seus dados são protegidos e não são armazenados
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-3 text-gray-400">
              <p className="text-sm">⏱️ Tempo médio de varredura: 15-30 segundos</p>
              <p className="text-sm">🛡️ Sistema utiliza apenas dados públicos disponíveis</p>
            </div>
          </div>
        )}

        {/* Enhanced scanning process */}
        {isScanning && (
          <div className="text-center space-y-10 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-5xl font-black text-green-400 animate-pulse">
                🕵️ INVESTIGAÇÃO EM ANDAMENTO
              </h2>
              <div className="text-2xl text-gray-300">
                Analisando: <span className="text-yellow-400 font-mono bg-gray-800/50 px-4 py-2 rounded-lg">{phoneNumber}</span>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-black/80 to-gray-900/60 border-green-500/30 backdrop-blur-xl max-w-3xl mx-auto shadow-2xl">
              <CardContent className="p-10 space-y-8">
                <Progress value={progress} className="w-full h-4 bg-gray-800" />
                
                <div className="space-y-4">
                  {scanningSteps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${
                        index === currentStep 
                          ? 'bg-green-900/50 border border-green-500/50 text-green-400 shadow-lg shadow-green-500/20' 
                          : index < currentStep 
                            ? 'bg-gray-800/50 text-gray-400' 
                            : 'text-gray-600'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                        index === currentStep 
                          ? 'bg-green-400 animate-pulse shadow-lg shadow-green-400/50' 
                          : index < currentStep 
                            ? 'bg-green-600' 
                            : 'bg-gray-600'
                      }`}></div>
                      <span className="font-mono text-lg flex-grow text-left">{step.text}</span>
                      {index === currentStep && (
                        <div className="ml-auto">
                          <div className="animate-spin w-6 h-6 border-2 border-green-400 border-t-transparent rounded-full"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="text-center text-gray-400">
                  <p className="text-lg font-mono">⚡ Processando {Math.round(progress)}% completo</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Enhanced results */}
        {scanComplete && (
          <div className="text-center space-y-10 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-5xl font-black text-red-400 animate-pulse flex items-center justify-center space-x-4">
                <AlertTriangle className="w-12 h-12" />
                <span>PERFIL ENCONTRADO!</span>
                <AlertTriangle className="w-12 h-12" />
              </h2>
              <p className="text-2xl text-gray-300">
                Verificação concluída para: <span className="text-yellow-400 font-mono bg-gray-800/50 px-4 py-2 rounded-lg">{phoneNumber}</span>
              </p>
            </div>

            <Card className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-red-500/50 backdrop-blur-xl max-w-4xl mx-auto shadow-2xl">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center justify-center space-x-3 text-2xl">
                  <AlertTriangle className="w-8 h-8" />
                  <span>🚨 RELATÓRIO DE DESCOBERTAS</span>
                  <AlertTriangle className="w-8 h-8" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/50 p-6 rounded-xl border border-red-500/20">
                    <div className="text-gray-400 mb-2">Plataforma Detectada</div>
                    <div className="text-2xl font-bold text-red-400">💔 Tinder</div>
                  </div>
                  <div className="bg-black/50 p-6 rounded-xl border border-orange-500/20">
                    <div className="text-gray-400 mb-2">Último Acesso</div>
                    <div className="text-2xl font-bold text-orange-400">🔥 Há 12 dias</div>
                  </div>
                  <div className="bg-black/50 p-6 rounded-xl border border-purple-500/20">
                    <div className="text-gray-400 mb-2">Matches Registrados</div>
                    <div className="text-2xl font-bold text-purple-400">💜 3 matches</div>
                  </div>
                  <div className="bg-black/50 p-6 rounded-xl border border-green-500/20">
                    <div className="text-gray-400 mb-2">Status do Perfil</div>
                    <div className="text-2xl font-bold text-green-400">✅ Ativo</div>
                  </div>
                </div>

                <div className="bg-black/70 p-6 rounded-xl border border-yellow-500/30">
                  <div className="text-gray-400 mb-3 text-lg">Bio Detectada:</div>
                  <div className="text-yellow-400 italic text-xl">"Gosto de adrenalina e pessoas reais ❤️‍🔥"</div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge variant="destructive" className="text-lg px-4 py-2">Perfil Ativo</Badge>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Matches Recentes</Badge>
                  <Badge variant="outline" className="border-orange-500 text-orange-400 text-lg px-4 py-2">Bio Suspeita</Badge>
                </div>

                {!showResults && (
                  <div className="text-center">
                    <div className="animate-pulse text-yellow-400 text-xl">
                      🔍 Carregando detalhes completos...
                    </div>
                  </div>
                )}

                {showResults && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-t border-gray-700 pt-8">
                      <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center justify-center space-x-2">
                        <Eye className="w-8 h-8" />
                        <span>Deseja ver os detalhes completos do perfil detectado?</span>
                      </h3>
                      
                      <div className="space-y-4">
                        <Button 
                          className="w-full bg-gradient-to-r from-red-600 via-red-700 to-pink-600 hover:from-red-700 hover:via-red-800 hover:to-pink-700 text-white font-bold py-6 text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                          onClick={() => {
                            alert('🔓 DESBLOQUEADO! Em um cenário real, aqui seriam exibidos os detalhes completos do perfil encontrado.');
                          }}
                        >
                          🚨 SIM, MOSTRAR PERFIL COMPLETO
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="w-full border-gray-600 text-gray-400 hover:bg-gray-800 py-4 text-lg transition-all duration-300"
                          onClick={() => {
                            setPhoneNumber('');
                            setScanComplete(false);
                            setShowResults(false);
                          }}
                        >
                          🔍 Verificar Outro Número
                        </Button>
                      </div>
                    </div>

                    <div className="text-center text-gray-500 space-y-2 border-t border-gray-800 pt-6">
                      <p className="text-sm">⚠️ Este é um sistema de demonstração</p>
                      <p className="text-sm">🔒 Nenhum dado real foi coletado ou verificado</p>
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
