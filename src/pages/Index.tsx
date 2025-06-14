
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-red-600/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {!isScanning && !scanComplete && (
          <div className="text-center space-y-8 animate-fade-in">
            {/* Header with emotional hook */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                😳 DETECTOR DE PERFIL SECRETO
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-300 space-y-4">
                <p className="font-semibold text-red-400">
                  🚨 Será que você realmente conhece quem dorme ao seu lado?
                </p>
                <p>
                  Descubra se seu(sua) parceiro(a) já teve — ou ainda tem — uma conta no Tinder
                </p>
              </div>
            </div>

            {/* Statistics section */}
            <div className="grid md:grid-cols-3 gap-4 my-12">
              <Card className="bg-red-900/30 border-red-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-400">94%</div>
                  <div className="text-sm text-gray-300">Das traições começam em apps</div>
                </CardContent>
              </Card>
              <Card className="bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400">73%</div>
                  <div className="text-sm text-gray-300">Mantêm perfis secretos</div>
                </CardContent>
              </Card>
              <Card className="bg-orange-900/30 border-orange-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400">2.3M</div>
                  <div className="text-sm text-gray-300">Perfis verificados</div>
                </CardContent>
              </Card>
            </div>

            {/* Phone input section */}
            <Card className="bg-black/40 border-gray-700/50 backdrop-blur-lg max-w-lg mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-yellow-400">
                  🔍 INICIAR VERIFICAÇÃO ANÔNIMA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">
                    📱 Digite o número de WhatsApp:
                  </label>
                  <Input 
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="bg-gray-800/50 border-gray-600 text-white text-center text-lg h-12"
                    maxLength={15}
                  />
                </div>
                
                <Button 
                  onClick={handleScan}
                  disabled={phoneNumber.length < 14}
                  className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-bold py-3 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Search className="mr-2 h-5 w-5" />
                  🚀 INICIAR INVESTIGAÇÃO
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  ⚡ Verificação 100% anônima e segura
                </p>
              </CardContent>
            </Card>

            <div className="text-center space-y-2 text-gray-400 text-sm">
              <p>⏱️ Tempo médio de varredura: 15-30 segundos</p>
              <p>🔒 Seus dados são protegidos e não são armazenados</p>
            </div>
          </div>
        )}

        {/* Scanning process */}
        {isScanning && (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-green-400">
                🕵️ INVESTIGAÇÃO EM ANDAMENTO...
              </h2>
              <div className="text-xl text-gray-300">
                Analisando: <span className="text-yellow-400 font-mono">{phoneNumber}</span>
              </div>
            </div>

            <Card className="bg-black/60 border-green-500/30 backdrop-blur-lg max-w-2xl mx-auto">
              <CardContent className="p-8 space-y-6">
                <Progress value={progress} className="w-full h-3" />
                
                <div className="space-y-4">
                  {scanningSteps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                        index === currentStep 
                          ? 'bg-green-900/40 border border-green-500/50 text-green-400' 
                          : index < currentStep 
                            ? 'bg-gray-800/40 text-gray-500' 
                            : 'text-gray-600'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full ${
                        index === currentStep 
                          ? 'bg-green-400 animate-pulse' 
                          : index < currentStep 
                            ? 'bg-green-600' 
                            : 'bg-gray-600'
                      }`}></div>
                      <span className="font-mono text-sm">{step.text}</span>
                      {index === currentStep && (
                        <div className="ml-auto">
                          <div className="animate-spin w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="text-center text-gray-400 text-sm">
                  <p>⚡ Processando {Math.round(progress)}% completo</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Results */}
        {scanComplete && (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-red-400 animate-pulse">
                ⚠️ PERFIL ENCONTRADO!
              </h2>
              <p className="text-xl text-gray-300">
                Verificação concluída para: <span className="text-yellow-400 font-mono">{phoneNumber}</span>
              </p>
            </div>

            <Card className="bg-red-900/20 border-red-500/50 backdrop-blur-lg max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center justify-center space-x-2">
                  <span>🚨 RELATÓRIO DE DESCOBERTAS</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Plataforma Detectada</div>
                    <div className="text-lg font-bold text-red-400">💔 Tinder</div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Último Acesso</div>
                    <div className="text-lg font-bold text-orange-400">🔥 Há 12 dias</div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Matches Registrados</div>
                    <div className="text-lg font-bold text-purple-400">💜 3 matches</div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Status do Perfil</div>
                    <div className="text-lg font-bold text-green-400">✅ Ativo</div>
                  </div>
                </div>

                <div className="bg-black/60 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-2">Bio Detectada:</div>
                  <div className="text-yellow-400 italic">"Gosto de adrenalina e pessoas reais ❤️‍🔥"</div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="destructive">Perfil Ativo</Badge>
                  <Badge variant="secondary">Matches Recentes</Badge>
                  <Badge variant="outline" className="border-orange-500 text-orange-400">Bio Suspeita</Badge>
                </div>

                {!showResults && (
                  <div className="text-center">
                    <div className="animate-pulse text-yellow-400">
                      🔍 Carregando detalhes completos...
                    </div>
                  </div>
                )}

                {showResults && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="border-t border-gray-700 pt-6">
                      <h3 className="text-xl font-bold text-red-400 mb-4">
                        👁️‍🗨️ Deseja ver os detalhes completos do perfil detectado?
                      </h3>
                      
                      <div className="space-y-4">
                        <Button 
                          className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-4 text-lg transition-all duration-300 transform hover:scale-105"
                          onClick={() => {
                            // Simulate opening detailed results
                            alert('🔓 DESBLOQUEADO! Em um cenário real, aqui seriam exibidos os detalhes completos do perfil encontrado.');
                          }}
                        >
                          🚨 SIM, MOSTRAR PERFIL COMPLETO
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="w-full border-gray-600 text-gray-400 hover:bg-gray-800"
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

                    <div className="text-xs text-gray-500 text-center space-y-1">
                      <p>⚠️ Este é um sistema de demonstração</p>
                      <p>🔒 Nenhum dado real foi coletado ou verificado</p>
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
