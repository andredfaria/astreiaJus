'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Gift,
  ShoppingBag,
  Percent,
  Users,
  TrendingUp,
  CheckCircle,
  Store,
  Smartphone,
  Utensils,
  Dumbbell,
  GraduationCap,
  Car,
  Home,
  Heart,
  Sparkles
} from 'lucide-react';

export default function AstreiaClubeePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white text-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 px-6 py-3 rounded-full mb-8 text-sm font-medium text-blue-700">
                <Gift className="h-5 w-5" />
                <span>Exclusivo para Associados</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                AstreiaClube
                <br />
                <span className="text-blue-600">Clube de Vantagens</span>
              </h1>
              <p className="text-xl mb-10 text-gray-600 leading-relaxed max-w-2xl">
                Muito mais que serviços jurídicos. Descontos exclusivos, networking de negócios 
                e uma comunidade de empreendedores conectados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4"
                  onClick={() => window.location.href = '/#adesao'}
                >
                  Quero Ser Associado
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4"
                  onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AstreiaClube - Descontos e Vantagens"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Percent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm font-semibold text-gray-600">Parceiros Exclusivos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que É o AstreiaClube */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              O Que É o AstreiaClube?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Um Clube de Descontos para usuários e anunciantes, onde empreendedores associados 
              podem oferecer descontos em seus produtos e serviços, criando uma rede de benefícios mútuos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <ShoppingBag className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Descontos Exclusivos</h3>
              <p className="text-gray-600 leading-relaxed">
                Acesso a descontos em estabelecimentos parceiros em diversas categorias: 
                alimentação, saúde, educação, lazer e muito mais.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Store className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Anuncie Seu Negócio</h3>
              <p className="text-gray-600 leading-relaxed">
                Empreendedores associados podem divulgar seus produtos e serviços para toda 
                a comunidade AstreiaJus, ampliando seu alcance.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Networking</h3>
              <p className="text-gray-600 leading-relaxed">
                Conecte-se com outros associados, participe de eventos, palestras e 
                oportunidades de negócios exclusivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias de Parceiros */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Categorias de Parceiros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descontos em diversas áreas para facilitar sua vida e seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Utensils, title: 'Alimentação', desc: 'Restaurantes, lanchonetes e delivery' },
              { icon: Dumbbell, title: 'Saúde e Bem-Estar', desc: 'Academias, clínicas e consultórios' },
              { icon: GraduationCap, title: 'Educação', desc: 'Cursos, treinamentos e capacitação' },
              { icon: Car, title: 'Automotivo', desc: 'Oficinas, seguros e manutenção' },
              { icon: Home, title: 'Casa e Construção', desc: 'Materiais de construção e decoração' },
              { icon: Smartphone, title: 'Tecnologia', desc: 'Eletrônicos e serviços de TI' },
              { icon: Heart, title: 'Lazer e Entretenimento', desc: 'Eventos, viagens e diversão' },
              { icon: ShoppingBag, title: 'Varejo', desc: 'Lojas e comércio em geral' },
            ].map((category, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-8 h-full group-hover:bg-blue-50 transition-colors">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{category.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simples, prático e disponível na web e no aplicativo móvel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Para Associados */}
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Para Associados</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Faça sua adesão</h4>
                    <p className="text-gray-600">Torne-se um associado AstreiaJus</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Acesse a plataforma</h4>
                    <p className="text-gray-600">Use pelo site ou aplicativo móvel</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Navegue pelos descontos</h4>
                    <p className="text-gray-600">Escolha a categoria que mais lhe interessa</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Aproveite os benefícios</h4>
                    <p className="text-gray-600">Apresente sua identificação de associado e economize</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Para Parceiros */}
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Para Parceiros</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Seja um associado</h4>
                    <p className="text-gray-600">Empreendedores associados podem anunciar</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Cadastre seu negócio</h4>
                    <p className="text-gray-600">Adicione informações e os descontos oferecidos</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Alcance novos clientes</h4>
                    <p className="text-gray-600">Seja visto por toda a comunidade AstreiaJus</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Cresça seu negócio</h4>
                    <p className="text-gray-600">Aumente suas vendas com visibilidade gratuita</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios do AstreiaClube */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Benefícios Exclusivos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Muito mais que descontos. Uma comunidade completa de oportunidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Percent,
                title: 'Descontos em Estabelecimentos',
                desc: 'Centenas de parceiros com descontos exclusivos para associados'
              },
              {
                icon: TrendingUp,
                title: 'Aumente Suas Vendas',
                desc: 'Divulgue seu negócio gratuitamente para milhares de associados'
              },
              {
                icon: Users,
                title: 'Networking de Negócios',
                desc: 'Conecte-se com empreendedores e crie parcerias estratégicas'
              },
              {
                icon: GraduationCap,
                title: 'Palestras e Workshops',
                desc: 'Participe de eventos exclusivos focados no empreendedor'
              },
              {
                icon: Sparkles,
                title: 'Novos Benefícios',
                desc: 'Sempre novos pacotes de serviços para facilitar sua vida'
              },
              {
                icon: Smartphone,
                title: 'Plataforma Completa',
                desc: 'Acesse via web ou app móvel, com interface intuitiva'
              },
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-2xl p-8 h-full group-hover:bg-blue-50 transition-colors">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Gift className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Pronto para Aproveitar Todos os Benefícios?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Faça sua adesão agora e tenha acesso imediato ao AstreiaClube, além de todos os 
            serviços jurídicos da plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold text-lg px-8 py-4"
              onClick={() => window.location.href = '/#adesao'}
            >
              Aderir por R$ 89,90/mês
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
              onClick={() => window.location.href = '/#contato'}
            >
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
