'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import PricingCard from '@/components/PricingCard';
import { 
  Shield, 
  Clock, 
  MapPin, 
  DollarSign, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  Gift,
  Star,
  Handshake
} from 'lucide-react';
import { useState } from 'react';

export default function ClientPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Formulário enviado:', contactForm);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  const features = [
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description: 'Resposta em até 24 horas para consultas e dúvidas jurídicas urgentes.'
    },
    {
      icon: MapPin,
      title: 'Cobertura Nacional',
      description: 'Rede de advogados parceiros em todo o Brasil para atender você onde estiver.'
    },
    {
      icon: DollarSign,
      title: 'Economia Garantida',
      description: 'Até 70% de desconto em honorários advocatícios e taxas judiciais.'
    },
    {
      icon: Shield,
      title: 'Acompanhamento Personalizado',
      description: 'Cada caso recebe atenção individual com profissionais especializados.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empresária',
      content: 'O astreiaJus me ajudou a resolver uma questão trabalhista complexa com economia de mais de R$ 3.000 em honorários. Recomendo!',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'João Santos',
      role: 'Aposentado',
      content: 'Consegui revisar meu benefício previdenciário através da plataforma. O atendimento foi excelente e o resultado superou minhas expectativas.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Ana Costa',
      role: 'Professora',
      content: 'Plataforma muito fácil de usar. Consegui orientação jurídica rápida para um problema familiar. Vale muito a pena o investimento mensal.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const standardFeatures = [
    'Consultas jurídicas ilimitadas por chat',
    'Orientação em direito civil e trabalhista',
    'Análise de contratos (até 5 páginas)',
    'Suporte via WhatsApp',
    'Acesso ao clube de benefícios',
    'Desconto de 30% em honorários'
  ];

  const premiumFeatures = [
    'Todas as funcionalidades do Standard',
    'Consultas por videochamada',
    'Atendimento em todas as áreas do direito',
    'Análise de contratos ilimitada',
    'Acompanhamento processual',
    'Desconto de 50% em honorários',
    'Atendimento prioritário',
    'Consultoria empresarial básica'
  ];

  const partners = [
    'Tribunal de Justiça',
    'OAB Nacional',
    'Instituto dos Advogados',
    'Federação Nacional',
    'Conselho Federal'
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Proteção Jurídica{" "}
                <span className="text-yellow-400">Completa</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Um clube de assinatura jurídico, com acesso a advogados especializados, economizando até 70% em honorários
                e tenha segurança jurídica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  Quero Assinar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                  Saiba Mais
                </Button> */}
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
                    +1.000 clientes atendidos
                  </span>
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
              Como Funciona o astreiaJus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo simples e transparente para você ter acesso completo
              aos nossos serviços jurídicos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Escolha seu Plano",
                desc: "Escolha qual dos planos é o mais adequado para você ou sua empresa",
              },
              {
                step: "2",
                title: "Preencha o Cadastro",
                desc: "Preencha seu cadastro e aceite os termos do contrato",
              },
              {
                step: "3",
                title: "Efetue seu pagamento",
                desc: "Escolha a melhor forma de efetuar seu pagamento",
              },
              {
                step: "4",
                title: "Acesse na web ou smartphones",
                desc: "Complete o ciclo de benefícios fazendo uso de nossa plataforma em qualquer tela.",
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

      {/* Benefícios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher o AstreiaJus?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos muito mais que consultoria jurídica. É uma experiência
              completa de proteção e tranquilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Clube de Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Clube de Benefícios Exclusivos
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Além da proteção jurídica, você tem acesso a centenas de
                vantagens e descontos em parceiros selecionados.
              </p>
              <div className="space-y-4">
                {[
                  "Mais de 100 parceiros com descontos e benefícios exclusivos.",
                  "Treinamentos, seminários e workshops com foco no empreendedor  ",
                  "Sempre novos pacotes de serviços para facilitar a vida de nossos associados.",
                  "Suporte total para tirar todas as suas dúvidas sobre a plataforma.",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Gift className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black">
                Conhecer Todos os Benefícios
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Benefícios exclusivos"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nossos Parceiros de Confiança
            </h2>
            <p className="text-gray-600">
              Trabalhamos com as principais instituições jurídicas do país
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <span className="text-gray-600 font-medium">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indique um Advogado */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Conhece um Advogado Excelente?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Indique profissionais qualificados para nossa rede. Juntos, podemos
            oferecer ainda mais qualidade no atendimento.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-800 hover:bg-gray-100"
          >
            <a href="/advogados">
              <Handshake className="mr-2 h-5 w-5" />
              Indicar Advogado
            </a>
          </Button>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de pessoas que encontraram segurança jurídica
              conosco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section id="planos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Escolha o Plano Ideal para Você
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proteção jurídica completa com o melhor custo-benefício do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Standard"
              price="R$ 59,90"
              period="mês"
              features={standardFeatures}
            />
            <PricingCard
              title="Premium"
              price="R$ 89,90"
              period="mês"
              features={premiumFeatures}
              isPopular={true}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              ✓ Sem fidelidade • ✓ Cancele quando quiser • ✓ Suporte 24/7
            </p>
            <p className="text-sm text-gray-500">
              Todos os planos incluem acesso completo ao clube de benefícios
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tem dúvidas sobre nossos serviços? Nossa equipe está pronta para
                ajudar você a escolher o melhor plano.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-800" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(11) 4000-0000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-800" />
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">contato@juridicoclub.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-6 w-6 text-blue-800" />
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      placeholder="Seu nome completo"
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
                      id="email"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      placeholder="seu@email.com"
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
                      id="phone"
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          phone: e.target.value,
                        })
                      }
                      placeholder="(11) 99999-9999"
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
                      id="message"
                      required
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      placeholder="Como podemos ajudar você?"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900"
                  >
                    Enviar Mensagem
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
                <span className="text-xl font-bold">astreiaJus</span>
              </div>
              <p className="text-gray-400 text-sm">
                Proteção jurídica completa para toda família com os melhores
                profissionais do mercado.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Consultoria Jurídica</li>
                <li>Acompanhamento Processual</li>
                <li>Análise de Contratos</li>
                <li>Orientação Trabalhista</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Áreas de Atuação</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Direito Civil</li>
                <li>Direito Trabalhista</li>
                <li>Direito Previdenciário</li>
                <li>Direito do Consumidor</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(11) 4000-0000</li>
                <li>contato@juridicoclub.com.br</li>
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábado: 8h às 12h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 astreiaJus. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}