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
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-black/10 px-4 py-2 rounded-full mb-6">
                <Gift className="h-5 w-5" />
                <span className="font-semibold">Exclusivo para Associados</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                AstreiaClube
                <br />
                <span className="text-yellow-900">Clube de Vantagens</span>
              </h1>
              <p className="text-xl mb-8 text-yellow-900 leading-relaxed">
                Muito mais que serviços jurídicos. Descontos exclusivos, networking de negócios 
                e uma comunidade de empreendedores conectados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-800 hover:bg-blue-900 text-white font-semibold"
                  onClick={() => window.location.href = '/#adesao'}
                >
                  Quero Ser Associado
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-black bg-white hover:bg-black hover:text-white"
                  onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AstreiaClube - Descontos e Vantagens"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <Percent className="h-10 w-10 mx-auto mb-2 text-yellow-500" />
                  <div className="text-3xl font-bold text-yellow-600">100+</div>
                  <div className="text-sm font-semibold">Parceiros Exclusivos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que É o AstreiaClube */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              O Que É o AstreiaClube?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um Clube de Descontos para usuários e anunciantes, onde empreendedores associados 
              podem oferecer descontos em seus produtos e serviços, criando uma rede de benefícios mútuos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-yellow-100 hover:border-yellow-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Descontos Exclusivos</h3>
                <p className="text-gray-600">
                  Acesso a descontos em estabelecimentos parceiros em diversas categorias: 
                  alimentação, saúde, educação, lazer e muito mais.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-100 hover:border-yellow-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Anuncie Seu Negócio</h3>
                <p className="text-gray-600">
                  Empreendedores associados podem divulgar seus produtos e serviços para toda 
                  a comunidade AstreiaJus, ampliando seu alcance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-100 hover:border-yellow-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Networking</h3>
                <p className="text-gray-600">
                  Conecte-se com outros associados, participe de eventos, palestras e 
                  oportunidades de negócios exclusivas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categorias de Parceiros */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Categorias de Parceiros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descontos em diversas áreas para facilitar sua vida e seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <category.icon className="h-7 w-7 text-yellow-600" />
                  </div>
                  <h3 className="font-bold mb-2 text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simples, prático e disponível na web e no aplicativo móvel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Para Associados */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Para Associados</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">1. Faça sua adesão</h4>
                      <p className="text-gray-600 text-sm">Torne-se um associado AstreiaJus</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">2. Acesse a plataforma</h4>
                      <p className="text-gray-600 text-sm">Use pelo site ou aplicativo móvel</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">3. Navegue pelos descontos</h4>
                      <p className="text-gray-600 text-sm">Escolha a categoria que mais lhe interessa</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">4. Aproveite os benefícios</h4>
                      <p className="text-gray-600 text-sm">Apresente sua identificação de associado e economize</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Para Parceiros */}
            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                    <Store className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Para Parceiros</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">1. Seja um associado</h4>
                      <p className="text-gray-600 text-sm">Empreendedores associados podem anunciar</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">2. Cadastre seu negócio</h4>
                      <p className="text-gray-600 text-sm">Adicione informações e os descontos oferecidos</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">3. Alcance novos clientes</h4>
                      <p className="text-gray-600 text-sm">Seja visto por toda a comunidade AstreiaJus</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">4. Cresça seu negócio</h4>
                      <p className="text-gray-600 text-sm">Aumente suas vendas com visibilidade gratuita</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios do AstreiaClube */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Benefícios Exclusivos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Muito mais que descontos. Uma comunidade completa de oportunidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-yellow-200">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-7 w-7 text-yellow-900" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Pronto para Aproveitar Todos os Benefícios?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Faça sua adesão agora e tenha acesso imediato ao AstreiaClube, além de todos os 
            serviços jurídicos da plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8"
              onClick={() => window.location.href = '/#adesao'}
            >
              Aderir por R$ 89,90/mês
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800"
              onClick={() => window.location.href = '/#contato'}
            >
              Falar com Consultor
            </Button>
          </div>
          <p className="text-blue-200 mt-6 text-sm">
            ✓ Sem fidelidade • ✓ Cancele quando quiser • ✓ Acesso imediato
          </p>
        </div>
      </section>
    </main>
  );
}
