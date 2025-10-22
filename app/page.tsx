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
      <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Advocacia Acessível{" "}
                <span className="text-yellow-400">e Inclusiva</span>
              </h1>
              <p className="text-xl mb-6 text-blue-100 leading-relaxed">
                Vislumbramos um futuro onde nossa tecnologia permita que a advocacia seja{" "}
                <strong className="text-yellow-300">inclusiva e acessível a todos</strong>.
              </p>
              <p className="text-lg mb-8 text-blue-100 leading-relaxed">
                Agregamos tecnologia para aprimorar o relacionamento entre usuários de serviços jurídicos 
                e democratizar o acesso a uma advocacia de qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={() => document.getElementById('adesao')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Aderir Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-black hover:bg-white hover:text-blue-800"
                  onClick={() => document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profissionais jurídicos"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-semibold">
                    Tecnologia e Advocacia Juntas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quem Somos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A Plataforma AstreiaJus opera e disponibiliza prestação continuada de serviços jurídicos, 
              unindo tecnologia e advocacia de qualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Nossa Missão</h3>
                <p className="text-gray-600">
                  Agregar tecnologia para aprimorar o relacionamento entre usuários de serviços 
                  jurídicos e democratizar o acesso à uma advocacia de qualidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Nossa Visão</h3>
                <p className="text-gray-600">
                  Um futuro onde nossa tecnologia permita que a advocacia seja inclusiva e acessível 
                  a todos, equacionando a oferta e demanda dos serviços advocatícios.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Nossos Valores</h3>
                <p className="text-gray-600">
                  Valorizar os profissionais do Direito e democratizar o acesso à uma advocacia 
                  de qualidade através da tecnologia e inovação.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl md:text-2xl font-light italic mb-4">
                "Esperamos construir juntos uma nova forma de atender a demanda de mercado,{" "}
                <strong className="font-semibold text-yellow-300">
                  valorizando os profissionais do Direito e democratizando o acesso à uma advocacia de qualidade
                </strong>."
              </blockquote>
              <p className="text-blue-200 mt-6">
                <strong className="text-white">Panayotis Giannopoulos</strong><br />
                Fundador e CEO - Plataforma AstreiaJus
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5 text-blue-800" />
              <span>Av. Brig. Faria Lima, 1432 Cj. 1602 - São Paulo - SP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Públicos-Alvo / Clientes */}
      <section id="clientes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nossa Demanda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendemos diferentes públicos com soluções jurídicas específicas para cada necessidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pessoas Físicas */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Pessoas Físicas</h3>
                <p className="text-gray-600 mb-4">
                  Associados individuais para demandas civis, criminais e trabalhistas com atendimento personalizado.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Consultoria jurídica completa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Acompanhamento processual</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Direito civil, criminal e trabalhista</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Agentes de Segurança */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BadgeCheck className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Agentes de Segurança</h3>
                <p className="text-gray-600 mb-4">
                  Para policiais, guardas civis e agentes de trânsito. Proteção e tranquilidade no exercício da função.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Advogado no local dos fatos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Acidentes com viaturas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Furto de armamento e equipamentos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Profissionais do Transporte */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Profissionais do Transporte</h3>
                <p className="text-gray-600 mb-4">
                  Para transportadores de carga e passageiros. Acompanhamento diferenciado em acidentes e ocorrências.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Apoio junto a autoridades policiais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Intermediação com transportadoras</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Arbitragem em descumprimento de cargas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Empreendedores */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Empreendedores</h3>
                <p className="text-gray-600 mb-4">
                  Para Pessoas Jurídicas, MEI e Profissionais Liberais. Suporte jurídico essencial para empreender.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Formalização do negócio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Elaboração de contratos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Assessoria jurídica empresarial</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços e Benefícios */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Serviços e Benefícios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A adesão à AstreiaJus proporciona acesso a um amplo sistema e à tecnologia necessária 
              para atender demandas crescentes
            </p>
          </div>

          {/* Benefícios Principais */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-2 border-blue-100">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Rede de Advogados</h3>
                <p className="text-gray-600 text-sm">
                  Acesso à Rede de Advogados Membros da Comunidade AstreiaJus
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100">
              <CardContent className="p-6 text-center">
                <Gift className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">AstreiaClube</h3>
                <p className="text-gray-600 text-sm">
                  Clube de Descontos exclusivos com parceiros selecionados
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100">
              <CardContent className="p-6 text-center">
                <Handshake className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Networking</h3>
                <p className="text-gray-600 text-sm">
                  Networking de Negócios, Palestras e Encontros
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100">
              <CardContent className="p-6 text-center">
                <Briefcase className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Capacitação</h3>
                <p className="text-gray-600 text-sm">
                  Cursos, Treinamentos e Seminários
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Coberturas Essenciais */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
              Coberturas Essenciais Disponibilizadas pela Rede de Advogados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Consulta Jurídica e Exame de Processos</h4>
                  <p className="text-gray-600 text-sm">
                    Esclarecimento técnico sobre o direito aplicável ao seu caso
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Formalização do Negócio</h4>
                  <p className="text-gray-600 text-sm">
                    Assessoria legal, elaboração/alteração de Contrato Social
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Cobrança</h4>
                  <p className="text-gray-600 text-sm">
                    Tentativa de acordo e cobrança judicial se necessário
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Elaboração de Notificação Extrajudicial</h4>
                  <p className="text-gray-600 text-sm">
                    Documentos formais para resguardar seus direitos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Consignação em Pagamento</h4>
                  <p className="text-gray-600 text-sm">
                    Via extrajudicial para quitação de débitos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grande Diferencial */}
          <div className="mt-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12 text-center">
            <DollarSign className="h-16 w-16 text-yellow-900 mx-auto mb-4" />
            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-yellow-900">
              O Grande Diferencial de Preço
            </h3>
            <p className="text-lg md:text-xl text-yellow-900 mb-6 max-w-3xl mx-auto">
              Advogados da Rede AstreiaJus são subsidiados, permitindo ao associado (ADERENTE) 
              acesso a serviços jurídicos com{" "}
              <strong className="text-2xl">valores até 50% abaixo da tabela da OAB</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-white/90 rounded-lg p-6">
                <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
                <p className="text-gray-800">
                  Benefício aplicável a questões relacionadas ao exercício da atividade profissional
                </p>
              </div>
              <div className="bg-white/90 rounded-lg p-6">
                <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
                <p className="text-gray-800">
                  Extensivo a questões não relacionadas e aos familiares de primeiro grau
                </p>
              </div>
            </div>
            <div className="mt-6 inline-flex items-center space-x-2 bg-white/90 px-6 py-3 rounded-full">
              <span className="text-lg font-semibold text-gray-800">
                💳 Parcelamento em até 10x sem juros
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AstreiaClube */}
      <section id="astreia-clube" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                AstreiaClube
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Clube de Vantagens exclusivo para usuários e anunciantes, onde empreendedores associados 
                podem oferecer descontos em seus produtos e serviços.
              </p>
              <div className="space-y-4">
                {[
                  "Descontos exclusivos em estabelecimentos parceiros",
                  "Empreendedores associados podem anunciar seus negócios",
                  "Networking de negócios e oportunidades",
                  "Benefícios que crescem junto com a comunidade",
                  "Acesso via plataforma web e aplicativo móvel",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Gift className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                asChild
                size="lg"
                className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                <a href="/astreia-clube">
                  Conhecer o AstreiaClube
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AstreiaClube - Clube de Vantagens"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <Gift className="h-10 w-10 mx-auto mb-2" />
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm font-semibold">Parceiros</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona a Adesão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-blue-800 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos e Adesão */}
      <section id="adesao" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Faça Sua Adesão
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Proteção jurídica completa com acesso à tecnologia e rede de advogados especializados
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white text-gray-900 border-4 border-yellow-400">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-block bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-semibold mb-4">
                    ⭐ PLANO RECOMENDADO
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Adesão AstreiaJus</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-blue-800">R$ 89,90</span>
                    <span className="text-xl text-gray-600 ml-2">/mês</span>
                  </div>
                  <p className="text-gray-600">
                    Primeiro pagamento de R$ 89,90<br />
                    Vencimento nos meses seguintes: dia 10
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Acesso completo à Rede de Advogados AstreiaJus</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Até 50% de desconto em honorários advocatícios</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Acesso ao AstreiaClube com descontos exclusivos</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Consultas jurídicas ilimitadas</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Networking, palestras e treinamentos</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Benefícios extensivos aos familiares de 1º grau</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Parcelamento em até 10x sem juros</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-6"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Aderir Agora
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>

                <p className="text-center text-sm text-gray-500 mt-6">
                  ✓ Sem fidelidade • ✓ Cancele quando quiser • ✓ Suporte completo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tem dúvidas sobre nossos serviços? Nossa equipe está pronta para ajudar você 
                a escolher o melhor plano e esclarecer todas as suas questões.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">+55 (13) 99626-6753</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">contato@astreiajus.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Brig. Faria Lima, 1432 Cj. 1602<br />
                      São Paulo - SP
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Site</h4>
                    <p className="text-gray-600">www.astreiajus.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input name="_captcha" type="hidden" value="false" />
                  <input name="_template" type="hidden" value="table" />
                  
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-green-800 font-medium">
                          Mensagem enviada com sucesso! Entraremos em contato em breve.
                        </span>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <div className="flex items-center">
                        <span className="text-red-800 font-medium">
                          Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
                        </span>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-800 hover:bg-blue-900 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-yellow-400" />
                <span className="text-xl font-bold">AstreiaJus</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Democratizando o acesso à advocacia de qualidade através da tecnologia.
              </p>
              <p className="text-gray-500 text-xs">
                Fundador/CEO: Panayotis Giannopoulos
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/#quem-somos" className="hover:text-white transition-colors">Quem Somos</a></li>
                <li><a href="/#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="/#clientes" className="hover:text-white transition-colors">Clientes</a></li>
                <li><a href="/astreia-clube" className="hover:text-white transition-colors">AstreiaClube</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Públicos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Pessoas Físicas</li>
                <li>Agentes de Segurança</li>
                <li>Profissionais do Transporte</li>
                <li>Empreendedores</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+55 (13) 99626-6753</li>
                <li>contato@astreiajus.com.br</li>
                <li>www.astreiajus.com.br</li>
                <li className="pt-2">
                  Av. Brig. Faria Lima, 1432<br />
                  Cj. 1602 - São Paulo - SP
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} AstreiaJus - Plataforma de Serviços Jurídicos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
