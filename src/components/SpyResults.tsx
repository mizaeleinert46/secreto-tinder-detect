
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Eye, DollarSign, CheckCircle, MessageCircle, Camera, Video, Phone, Instagram, Heart, Users, Clock, MapPin, FileText, Lock, Shield, Star, Globe, Smartphone } from "lucide-react";

interface SpyResultsProps {
  targetGender: 'homem' | 'mulher';
}

const SpyResults = ({ targetGender }: SpyResultsProps) => {
  const isMan = targetGender === 'homem';
  
  const platforms = [
    { name: 'WhatsApp', status: 'ATIVO', messages: 847, color: 'text-green-400', icon: MessageCircle },
    { name: 'Instagram', status: 'MUITO ATIVO', messages: 234, color: 'text-pink-400', icon: Instagram },
    { name: 'Telegram', status: 'CONVERSAS SECRETAS', messages: 56, color: 'text-blue-400', icon: MessageCircle },
    { name: 'OnlyFans', status: 'PERFIL ATIVO', messages: 12, color: 'text-red-400', icon: Heart },
    { name: 'Tinder', status: 'MATCHES RECENTES', messages: 23, color: 'text-orange-400', icon: Heart },
    { name: 'Snapchat', status: 'FOTOS ÍNTIMAS', messages: 89, color: 'text-yellow-400', icon: Camera },
  ];

  const mediaFound = [
    { type: 'Fotos Íntimas', count: '127', risk: 'ALTO', color: 'text-red-400' },
    { type: 'Vídeos Privados', count: '8', risk: 'CRÍTICO', color: 'text-red-500' },
    { type: 'Conversas Apagadas', count: '43', risk: 'MÉDIO', color: 'text-yellow-400' },
    { type: 'Localizações', count: '156', risk: 'ALTO', color: 'text-orange-400' },
  ];

  const recentActivity = [
    { platform: 'WhatsApp', action: 'Enviou foto íntima', time: '23 min atrás', risk: 'CRÍTICO' },
    { platform: 'Instagram', action: 'Curtiu 12 fotos suspeitas', time: '1h atrás', risk: 'ALTO' },
    { platform: 'Telegram', action: 'Conversou em grupo secreto', time: '2h atrás', risk: 'ALTO' },
    { platform: 'OnlyFans', action: 'Fez novo pagamento', time: '4h atrás', risk: 'CRÍTICO' },
  ];

  return (
    <section className="text-center space-y-8 md:space-y-10 animate-fade-in">
      {/* Alert Header */}
      <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-9">
        <div className="p-3 bg-black/30 rounded-lg border border-red-500/30">
          <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-red-400 animate-pulse" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-[#ff3333] via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-shift drop-shadow-glow tracking-tight">
          ALERTA: ATIVIDADE DIGITAL COMPROMETEDORA DETECTADA
        </h2>
        <div className="p-3 bg-black/30 rounded-lg border border-orange-500/30">
          <Eye className="w-8 h-8 md:w-10 md:h-10 text-orange-300 animate-pulse" />
        </div>
      </div>
      
      <p className="text-xl md:text-2xl text-white mb-2 font-semibold drop-shadow-glow">
        Encontramos atividade suspeita em múltiplas plataformas. As evidências estão ocultas para sua proteção.
      </p>

      {/* Platform Overview */}
      <Card className="max-w-6xl mx-auto bg-gradient-to-br from-black/90 via-red-900/20 to-black/80 border-2 border-red-400/40 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-red-400 flex items-center justify-center gap-3">
            <Smartphone className="w-8 h-8" />
            Plataformas Comprometidas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-black/50 border border-gray-600 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <platform.icon className={`w-5 h-5 ${platform.color}`} />
                    <span className="font-bold text-white">{platform.name}</span>
                  </div>
                  <Badge className={`bg-red-900/50 text-red-300 border-red-400/50`}>
                    {platform.status}
                  </Badge>
                </div>
                <div className="text-sm text-gray-300">
                  {platform.messages} itens encontrados
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                  <div className={`bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full`} 
                       style={{ width: '85%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Media Evidence */}
      <Card className="max-w-6xl mx-auto bg-gradient-to-br from-black/90 via-purple-900/20 to-black/80 border-2 border-purple-400/40 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-purple-400 flex items-center justify-center gap-3">
            <Camera className="w-8 h-8" />
            Conteúdo Íntimo Detectado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {mediaFound.map((media, index) => (
              <div key={index} className="bg-black/50 border border-gray-600 rounded-xl p-4 text-center">
                <div className={`text-2xl font-bold ${media.color} mb-1`}>
                  {media.count}
                </div>
                <div className="text-sm text-gray-300 mb-2">{media.type}</div>
                <Badge className={`${
                  media.risk === 'CRÍTICO' ? 'bg-red-900/50 text-red-300 border-red-400/50' :
                  media.risk === 'ALTO' ? 'bg-orange-900/50 text-orange-300 border-orange-400/50' :
                  'bg-yellow-900/50 text-yellow-300 border-yellow-400/50'
                }`}>
                  {media.risk}
                </Badge>
              </div>
            ))}
          </div>

          {/* Sample Blurred Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[1,2,3,4].map((item) => (
              <div key={item} className="relative aspect-square bg-gray-900 rounded-xl overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${isMan ? '1534528741775-53994a69daeb' : '1507003211169-0a1dd7228f2d'}?w=400&q=80`}
                  alt="Conteúdo encontrado"
                  className="w-full h-full object-cover filter blur-lg scale-110"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white animate-pulse" />
                </div>
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  ÍNTIMO
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card className="max-w-6xl mx-auto bg-gradient-to-br from-black/90 via-orange-900/20 to-black/80 border-2 border-orange-400/40 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-orange-400 flex items-center justify-center gap-3">
            <Clock className="w-8 h-8" />
            Atividade Suspeita Recente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="bg-black/50 border border-gray-600 rounded-xl p-4 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-blue-900/50 text-blue-300 border-blue-400/50">
                      {activity.platform}
                    </Badge>
                    <span className="text-white font-semibold">{activity.action}</span>
                  </div>
                  <div className="text-sm text-gray-400">{activity.time}</div>
                </div>
                <Badge className={`${
                  activity.risk === 'CRÍTICO' ? 'bg-red-900/50 text-red-300 border-red-400/50' :
                  'bg-orange-900/50 text-orange-300 border-orange-400/50'
                } animate-pulse`}>
                  {activity.risk}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* What You'll Discover */}
      <div className="max-w-4xl mx-auto space-y-6 text-left animate-fade-in pt-8">
        <h3 className="text-2xl md:text-4xl font-bold text-center text-green-300 drop-shadow-glow">
          O que você vai descobrir ao desbloquear?
        </h3>
        <p className="text-center text-lg md:text-xl text-gray-200">
          Por um pagamento único de <span className="font-bold text-yellow-300 text-2xl">R$19,90</span>, você terá acesso total ao dossiê digital completo.
        </p>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 p-6 bg-black/30 rounded-lg border border-gray-700">
          <div className="flex items-center gap-3 text-lg text-gray-200">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>Todas as conversas do WhatsApp (inclusive deletadas)</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-200">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>Fotos e vídeos íntimos em alta resolução</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-200">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>Perfis secretos em todas as redes sociais</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-200">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>Histórico completo de localizações</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-200">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>Conversas em apps de relacionamento</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-200">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>Atividade em sites adultos e pagamentos</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-200">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>Contatos secretos e números alternativos</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-200">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span>Backup completo de todas as evidências</span>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-br from-[#090f10]/90 via-[#27132b]/80 to-[#0e2021]/100 border-4 border-[#39ff14] neon-frame-hacker backdrop-blur-2xl max-w-4xl mx-auto shadow-[0_0_55px_2px_rgba(57,255,20,0.3)] mt-8 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-[#39ff14] flex items-center justify-center space-x-3 md:space-x-4 text-xl md:text-3xl font-bold animate-gradient-shift drop-shadow-glow">
            <Shield className="w-7 h-7 md:w-8 md:h-8 animate-pulse text-green-400" />
            <span>Acesso Completo às Evidências</span>
            <Eye className="w-7 h-7 md:w-8 md:h-8 animate-pulse text-green-400" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 md:space-y-7 px-6 md:px-8 py-8 md:py-10">
          <div className="text-center space-y-4">
            <div className="bg-red-900/50 border border-red-400/50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-red-300 font-semibold mb-2">
                <AlertTriangle className="w-5 h-5 animate-pulse" />
                <span>ATENÇÃO: CONTEÚDO ALTAMENTE SENSÍVEL</span>
                <AlertTriangle className="w-5 h-5 animate-pulse" />
              </div>
              <p className="text-red-200 text-sm">
                As evidências encontradas são de natureza íntima e comprometedora. 
                Tenha certeza antes de prosseguir com o desbloqueio.
              </p>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-[#39ff14] via-green-400 to-[#32cd32] hover:from-green-600 hover:via-green-500 hover:to-green-400 text-black font-black py-5 md:py-6 text-sm sm:text-lg md:text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl uppercase tracking-wide px-2 whitespace-normal h-auto"
              onClick={() => {
                window.location.href = 'https://go.tribopay.com.br/tbcslc8qfr';
              }}
            >
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2" />
              DESBLOQUEAR INVESTIGAÇÃO COMPLETA - R$19,90
            </Button>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mt-4">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-green-400" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Garantia Total</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trust Signals */}
      <div className="text-center space-y-4 pt-6">
        <div className="flex justify-center items-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="text-lg font-bold text-white ml-2">4.9/5</span>
        </div>
        <p className="text-gray-300">
          Mais de <span className="font-bold text-white">25.000 investigações</span> realizadas com sucesso.
        </p>
        <p className="text-sm text-gray-400">
          ✓ Resultados em menos de 5 minutos ✓ Totalmente anônimo ✓ Sem rastros
        </p>
      </div>
    </section>
  );
};

export default SpyResults;

