'use client';

import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Gift,
  Handshake,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
  Users,
  FileText,
  Scale,
  Briefcase,
  Car,
  UserCheck,
  Building2,
  Truck,
  BadgeCheck,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react';
import { useState } from 'react';

export default function ClientPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(event.currentTarget);
    
    try {
      const response = await fetch('https://formsubmit.co/contato@astreiajus.com.br', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-white text-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-8 text-sm font-medium text-gray-700">
                <Shield className="h-4 w-4" />
                <span>Primeira Operadora de Convênios Jurídicos do Brasil</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                Advocacia{" "}
                <span className="text-blue-600">Acessível</span>
                <br />
                e Inclusiva
              </h1>
              <p className="text-xl mb-8 text-gray-600 leading-relaxed max-w-2xl">
                Unindo tecnologia de ponta com advocacia de excelência para tornar serviços jurídicos 
                acessíveis a todos os brasileiros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4"
                  onClick={() => document.getElementById('adesao')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Aderir Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4"
                  onClick={() => document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Profissionais jurídicos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Tecnologia e Advocacia</p>
                    <p className="text-xs text-gray-500">Juntas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Quem Somos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A Plataforma AstreiaJus opera e disponibiliza prestação continuada de serviços jurídicos, 
              unindo tecnologia e advocacia de qualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Agregar tecnologia para aprimorar o relacionamento entre usuários de serviços 
                jurídicos e democratizar o acesso à uma advocacia de qualidade.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Um futuro onde nossa tecnologia permita que a advocacia seja inclusiva e acessível 
                a todos, equacionando a oferta e demanda dos serviços advocatícios.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nossos Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Valorizar os profissionais do Direito e democratizar o acesso à uma advocacia 
                de qualidade através da tecnologia e inovação.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-900 mb-8 leading-relaxed">
                "Esperamos construir juntos uma nova forma de atender a demanda de mercado,{" "}
                <span className="font-semibold text-blue-600">
                  valorizando os profissionais do Direito e democratizando o acesso à uma advocacia de qualidade
                </span>."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Panayotis Giannopoulos</p>
                  <p className="text-gray-600">Fundador e CEO - Plataforma AstreiaJus</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 text-gray-500 bg-white px-6 py-3 rounded-full border border-gray-200">
              <MapPin className="h-5 w-5" />
              <span>Av. Brig. Faria Lima, 1432 Cj. 1602 - São Paulo - SP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Públicos-Alvo / Clientes */}
      <section id="clientes" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Nossa Demanda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Atendemos diferentes públicos com soluções jurídicas específicas para cada necessidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pessoas Físicas */}
            <div className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full group-hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Pessoas Físicas</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Associados individuais para demandas civis, criminais e trabalhistas com atendimento personalizado.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Consultoria jurídica completa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Acompanhamento processual</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Direito civil, criminal e trabalhista</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Agentes de Segurança */}
            <div className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full group-hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <BadgeCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Agentes de Segurança</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para policiais, guardas civis e agentes de trânsito. Proteção e tranquilidade no exercício da função.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Advogado no local dos fatos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Acidentes com viaturas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Furto de armamento e equipamentos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Profissionais do Transporte */}
            <div className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full group-hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Profissionais do Transporte</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para transportadores de carga e passageiros. Acompanhamento diferenciado em acidentes e ocorrências.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Apoio junto a autoridades policiais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Intermediação com transportadoras</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Arbitragem em descumprimento de cargas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Empreendedores */}
            <div className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full group-hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Empreendedores</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para Pessoas Jurídicas, MEI e Profissionais Liberais. Suporte jurídico essencial para empreender.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Formalização do negócio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Elaboração de contratos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Assessoria jurídica empresarial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços e Benefícios */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Serviços e Benefícios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A adesão à AstreiaJus proporciona acesso a um amplo sistema e à tecnologia necessária 
              para atender demandas crescentes
            </p>
          </div>

          {/* Benefícios Principais */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Rede de Advogados Conveniados</h3>
              <p className="text-gray-600 leading-relaxed">
                Acesso à Rede de Advogados Conveniados ao AstreiaJus com especialistas em diversas áreas
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Gift className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">AstreiaClube</h3>
              <p className="text-gray-600 leading-relaxed">
                Clube de Benefícios exclusivos com parceiros selecionados e fomento aos negócios locais
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Handshake className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Networking</h3>
              <p className="text-gray-600 leading-relaxed">
                Networking de Negócios, Palestras e Encontros
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Capacitação</h3>
              <p className="text-gray-600 leading-relaxed">
                Cursos, Treinamentos e Seminários
              </p>
            </div>
          </div>

          {/* Coberturas Essenciais */}
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Coberturas Essenciais
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Consulta Jurídica e Exame de Processos</h4>
                  <p className="text-gray-600">
                    Esclarecimento técnico sobre o direito aplicável ao seu caso
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Formalização do Negócio</h4>
                  <p className="text-gray-600">
                    Assessoria legal, elaboração/alteração de Contrato Social
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cobrança</h4>
                  <p className="text-gray-600">
                    Tentativa de acordo e cobrança judicial se necessário
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Elaboração de Notificação Extrajudicial</h4>
                  <p className="text-gray-600">
                    Documentos formais para resguardar seus direitos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:col-span-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Consignação em Pagamento</h4>
                  <p className="text-gray-600">
                    Via extrajudicial para quitação de débitos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grande Diferencial */}
          <div className="bg-blue-600 rounded-3xl p-12 text-white text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <DollarSign className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold mb-8">
              O Grande Diferencial AstreiaJus
            </h3>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Nossa rede de advogados conveniados opera sob o modelo de{" "}
              <strong className="text-2xl text-blue-100">Tabela de Procedimentos Autorizados</strong>, 
              sempre em conformidade com os valores da Tabela da OAB, permitindo economia de{" "}
              <strong className="text-2xl text-blue-100">até 50% em honorários advocatícios</strong>
            </p>
            <div className="bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
              <p className="text-lg leading-relaxed">
                <strong>Como funciona:</strong> Os advogados membros da Rede AstreiaJus 
                recebem remuneração justa de acordo com nossa Tabela de Procedimentos, sempre compatível com os 
                valores éticos estabelecidos pela OAB. Essa estrutura permite repassar economia significativa 
                aos nossos associados, sem comprometer a qualidade do serviço jurídico prestado.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 rounded-2xl p-6 text-left">
                <CheckCircle className="h-8 w-8 text-green-400 mb-4" />
                <p className="text-lg font-semibold mb-3">
                  Questões Profissionais
                </p>
                <p className="text-blue-100">
                  Benefício completo para demandas relacionadas ao exercício da sua atividade profissional
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-left">
                <CheckCircle className="h-8 w-8 text-green-400 mb-4" />
                <p className="text-lg font-semibold mb-3">
                  Questões Pessoais e Familiares
                </p>
                <p className="text-blue-100">
                  Extensivo a questões não relacionadas à profissão e aos seus familiares de primeiro grau
                </p>
              </div>
            </div>
            <div className="inline-flex items-center space-x-3 bg-white/20 px-8 py-4 rounded-full">
              <span className="text-lg font-semibold">
                💳 Parcelamento em até 10x sem juros
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AstreiaClube */}
      <section id="astreia-clube" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
                AstreiaClube
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Clube de Benefícios exclusivos com parceiros cuidadosamente selecionados, promovendo o 
                fomento aos negócios locais. Empreendedores associados podem anunciar e oferecer vantagens 
                especiais, criando uma verdadeira comunidade de apoio mútuo.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  "Descontos exclusivos em estabelecimentos parceiros",
                  "Empreendedores associados podem anunciar seus negócios",
                  "Networking de negócios e oportunidades",
                  "Benefícios que crescem junto com a comunidade",
                  "Acesso via plataforma web e aplicativo móvel",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Gift className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4"
              >
                <a href="/astreia-clube">
                  Conhecer o AstreiaClube
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AstreiaClube - Clube de Vantagens"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Gift className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm font-semibold text-gray-600">Parceiros</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Como Funciona a Adesão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Um processo simples e transparente para você ter acesso completo aos nossos serviços jurídicos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Escolha seu Plano",
                desc: "Escolha o plano mais adequado para você ou sua empresa",
              },
              {
                step: "2",
                title: "Preencha o Cadastro",
                desc: "Complete seu cadastro e aceite os termos do contrato",
              },
              {
                step: "3",
                title: "Efetue seu Pagamento",
                desc: "Primeiro pagamento de R$ 89,90. Próximas parcelas vencem dia 10",
              },
              {
                step: "4",
                title: "Acesse na Web ou App",
                desc: "Use nossa plataforma em qualquer dispositivo",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-105 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-blue-600 mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos e Adesão */}
      <section id="adesao" className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Proteção jurídica completa com acesso à tecnologia e rede de advogados especializados
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Plano Básico */}
            <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Plano Básico</h3>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">R$ 49,90</span>
                  <span className="text-lg text-gray-600 ml-2">/mês</span>
                </div>
                <p className="text-gray-600">
                  Ideal para necessidades básicas
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Acesso à Rede de Advogados</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Até 30% de desconto em honorários</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Consultas jurídicas (até 2/mês)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Acesso ao AstreiaClube</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-4"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Escolher Básico
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Plano Intermediário - RECOMENDADO */}
            <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl relative border-4 border-yellow-400">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full font-bold text-sm">
                  ⭐ MAIS POPULAR
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Plano Intermediário</h3>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">R$ 89,90</span>
                  <span className="text-lg text-gray-600 ml-2">/mês</span>
                </div>
                <p className="text-gray-600">
                  Perfeito para a maioria dos casos
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Acesso completo à Rede de Advogados</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Até 50% de desconto em honorários</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Consultas jurídicas ilimitadas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Acesso ao AstreiaClube</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Networking e treinamentos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Benefícios para familiares</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Escolher Intermediário
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Plano Avançado */}
            <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Plano Avançado</h3>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">R$ 149,90</span>
                  <span className="text-lg text-gray-600 ml-2">/mês</span>
                </div>
                <p className="text-gray-600">
                  Para necessidades empresariais
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Acesso completo à Rede de Advogados</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Até 60% de desconto em honorários</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Consultas jurídicas ilimitadas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Acesso premium ao AstreiaClube</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Networking VIP e treinamentos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Benefícios para toda família</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Assessoria empresarial</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Prioridade no atendimento</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Escolher Avançado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Informações Importantes</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm">Parcelamento em até 10x sem juros</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm">Primeiro pagamento no ato da adesão</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm">Vencimento nos meses seguintes: dia 10</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm">Cancelamento a qualquer momento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
                Fale Conosco
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Tem dúvidas sobre nossos serviços? Nossa equipe está pronta para ajudar você 
                a escolher o melhor plano e esclarecer todas as suas questões.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Telefone</h4>
                    <p className="text-lg text-gray-600">+55 (13) 99626-6753</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h4>
                    <p className="text-lg text-gray-600">contato@astreiajus.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Endereço</h4>
                    <p className="text-lg text-gray-600">
                      Av. Brig. Faria Lima, 1432 Cj. 1602<br />
                      São Paulo - SP
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Site</h4>
                    <p className="text-lg text-gray-600">www.astreiajus.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                <input name="_captcha" type="hidden" value="false" />
                <input name="_template" type="hidden" value="table" />
                
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-3"
                  >
                    Nome Completo
                  </label>
                  <Input
                    name="name"
                    id="name"
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    disabled={isSubmitting}
                    className="h-12 text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-3"
                  >
                    E-mail
                  </label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    disabled={isSubmitting}
                    className="h-12 text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-700 mb-3"
                  >
                    Telefone
                  </label>
                  <Input
                    name="phone"
                    id="phone"
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    disabled={isSubmitting}
                    className="h-12 text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-3"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    name="message"
                    id="message"
                    required
                    placeholder="Como podemos ajudar você?"
                    rows={4}
                    disabled={isSubmitting}
                    className="text-lg"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-6 bg-green-50 border border-green-200 rounded-2xl">
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                      <span className="text-green-800 font-medium text-lg">
                        Mensagem enviada com sucesso! Entraremos em contato em breve.
                      </span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-6 bg-red-50 border border-red-200 rounded-2xl">
                    <div className="flex items-center">
                      <span className="text-red-800 font-medium text-lg">
                        Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
                      </span>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 h-14 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/logo-letra-preto.png" alt="AstreiaJus" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-gray-900">AstreiaJus</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Democratizando o acesso à advocacia de qualidade através da tecnologia.
              </p>
              <div className="text-sm text-gray-500">
                <p className="font-medium">Fundador/CEO</p>
                <p>Panayotis Giannopoulos</p>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Links</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <a href="/#home" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Home
                  </a>
                  <a href="/#quem-somos" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Quem Somos
                  </a>
                  <a href="/#servicos" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Serviços
                  </a>
                </div>
                <div className="space-y-3">
                  <a href="/#clientes" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Clientes
                  </a>
                  <a href="/astreia-clube" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    AstreiaClube
                  </a>
                  <a href="/#contato" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Contato
                  </a>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-3 text-blue-600" />
                  <span>+55 (13) 99626-6753</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-3 text-blue-600" />
                  <span>contato@astreiajus.com.br</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MapPin className="h-4 w-4 mr-3 text-blue-600 mt-1" />
                  <div>
                    <div>Av. Brig. Faria Lima, 1432</div>
                    <div>Cj. 1602 - São Paulo - SP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} AstreiaJus. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span>CNPJ: 00.000.000/0001-00</span>
                <span>•</span>
                <span>OAB/SP</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
