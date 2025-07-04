'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from "next/link";

import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Briefcase,
  Building,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Scale,
  Shield,
  TrendingUp,
  User,
  Users
} from 'lucide-react';
import { useState } from 'react';


export default function AdvogadosPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(event.currentTarget);
    
    // Extrair todos os dados do formulário
    const subject = formData.get("_subject") || "Nova Inscrição de Advogado - AstreiaJus";
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const numeroOab = formData.get("numero_oab") || "";
    const estadoOab = formData.get("estado_oab") || "";
    const areasAtuacao = formData.get("areas_atuacao") || "";
    const tempoExperiencia = formData.get("tempo_experiencia") || "";
    const descricaoProfissional = formData.get("descricao_profissional") || "";

    // Criar mensagem concatenada com todos os dados
    const message = `${subject}

Nome: ${name}
Email: ${email}
Número OAB: ${numeroOab}
Estado OAB: ${estadoOab}
Áreas de Atuação: ${areasAtuacao}
Tempo de Experiência: ${tempoExperiencia}
Descrição Profissional: ${descricaoProfissional}`;

    // Criar novo FormData apenas com o campo message
    const submitFormData = new FormData();
    submitFormData.append('message', message);

    try {
      const response = await fetch('https://formsubmit.co/contato@astreiajus.com.br', {
        method: 'POST',
        body: submitFormData,
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


  const areasAtuacao = [
    { icon: Scale, title: 'Direito Civil', description: 'Contratos, responsabilidade civil, família e sucessões' },
    { icon: Building, title: 'Direito Trabalhista', description: 'Demissões, assédio, horas extras e benefícios' },
    { icon: Shield, title: 'Direito Previdenciário', description: 'Aposentadorias, pensões e revisões de benefícios' },
    { icon: Briefcase, title: 'Direito Empresarial', description: 'Constituição de empresas, contratos comerciais' },
    { icon: FileText, title: 'Direito do Consumidor', description: 'Defesa de direitos do consumidor e indenizações' },
    { icon: User, title: 'Direito Criminal', description: 'Defesa criminal e acompanhamento processual' }
  ];

  const testimonials = [
    {
      name: 'Dr. Carlos Mendes',
      role: 'Advogado Trabalhista - OAB/SP 123456',
      content: 'Desde que me tornei parceiro do astreiaJus, minha carteira de clientes cresceu 300%. A plataforma me conecta com pessoas que realmente precisam de ajuda jurídica.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Dra. Fernanda Lima',
      role: 'Advogada Civilista - OAB/RJ 789012',
      content: 'A plataforma é muito bem organizada e o suporte é excelente. Consigo atender mais clientes e ter uma renda mais estável como advogada parceira.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Dr. Roberto Silva',
      role: 'Advogado Previdenciário - OAB/MG 345678',
      content: 'O astreiaJus me permitiu focar no que eu mais gosto: ajudar pessoas. A gestão administrativa é toda feita pela plataforma, o que facilita muito meu trabalho.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const beneficios = [
    {
      icon: TrendingUp,
      title: 'Aumento de Carteira',
      description: 'Receba novos clientes qualificados regularmente através da nossa plataforma'
    },
    {
      icon: DollarSign,
      title: 'Renda Recorrente',
      description: 'Construa uma base sólida de clientes com pagamentos garantidos mensalmente'
    },
    {
      icon: Clock,
      title: 'Gestão Simplificada',
      description: 'Foque no atendimento enquanto cuidamos da parte administrativa e financeira'
    },
    {
      icon: Users,
      title: 'Suporte Dedicado',
      description: 'Equipe especializada para ajudar você a aproveitar ao máximo a plataforma'
    }
  ];

  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Seja um{" "}
                <span className="text-yellow-400">Advogado Parceiro</span>{" "}
                AstreiaJus
              </h1>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                Expanda sua carteira de clientes, tenha renda recorrente e faça
                parte da maior rede de convênio jurídico do Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  Quero me Inscrever
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
                  Saiba Como Funciona
                </Button> */}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Advogado profissional"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-semibold">
                    +500 advogados parceiros
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principais Áreas Atendidas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Principais Áreas de Atuação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos oportunidades em diversas especialidades jurídicas para
              atender toda demanda dos nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areasAtuacao.map((area, index) => (
              <FeatureCard key={index} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona para o Advogado */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona para Você, Advogado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um modelo de parceria transparente e vantajoso para ambas as
              partes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Processo Simplificado
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Receba Demandas",
                    desc: "Clientes são direcionados para você baseado na sua especialidade e localização",
                  },
                  {
                    title: "Atenda com Qualidade",
                    desc: "Ofereça o melhor atendimento jurídico usando nossa plataforma de suporte",
                  },
                  {
                    title: "Receba seus Honorários",
                    desc: "Pagamentos garantidos e processados automaticamente pela plataforma",
                  },
                  {
                    title: "Cresça Conosco",
                    desc: "Desenvolva sua carreira com suporte contínuo e novas oportunidades",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5668769/pexels-photo-5668769.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Advogado trabalhando"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Benefícios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => (
              <FeatureCard key={index} {...beneficio} />
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de Remuneração */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Modelo de Remuneração Transparente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda como você será remunerado por cada tipo de atendimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Consultas Online
                </h3>
                <div className="text-3xl font-bold text-blue-800 mb-4">
                  R$ 80-120
                </div>
                <p className="text-gray-600 mb-6">
                  Por consulta realizada via chat ou videochamada
                </p>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li>• Duração: até 1 hora</li>
                  <li>• Pagamento em 48h</li>
                  <li>• Histórico completo</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-800 ring-2 ring-blue-100 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                Mais Demanda
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Acompanhamento Processual
                </h3>
                <div className="text-3xl font-bold text-blue-800 mb-4">
                  R$ 500-1500
                </div>
                <p className="text-gray-600 mb-6">
                  Por processo acompanhado mensalmente
                </p>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li>• Pagamento mensal</li>
                  <li>• Valor varia por complexidade</li>
                  <li>• Suporte da plataforma</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Contratos e Documentos
                </h3>
                <div className="text-3xl font-bold text-blue-800 mb-4">
                  R$ 200-800
                </div>
                <p className="text-gray-600 mb-6">
                  Por análise ou elaboração de contratos
                </p>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li>• Varia por extensão</li>
                  <li>• Pagamento à vista</li>
                  <li>• Templates disponíveis</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              ✓ Pagamentos garantidos • ✓ Sem taxas de adesão • ✓ Suporte
              completo
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos de Advogados */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Depoimentos de Advogados Parceiros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o que profissionais como você estão dizendo sobre nossa
              parceria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section id="inscricao" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Inscreva-se como Advogado Parceiro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato
              para dar início à parceria
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input name="_captcha" type="hidden" value="false" />
                <input name="_template" type="hidden" value="table" />
                <input
                  name="_subject"
                  type="hidden"
                  value="Nova Inscrição de Advogado - AstreiaJus"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nome Completo *
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
                      E-mail Profissional *
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="oab"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Número da OAB *
                    </label>
                    <Input
                      name="numero_oab"
                      id="oab"
                      type="text"
                      required
                      placeholder="123456"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="estado"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Estado da OAB *
                    </label>
                    <select
                      name="estado_oab"
                      id="estado"
                      required
                      disabled={isSubmitting}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione o estado</option>
                      {estados.map((estado) => (
                        <option key={estado} value={estado}>
                          {estado}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="areas"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Principais Áreas de Atuação *
                    </label>
                    <Input
                      name="areas_atuacao"
                      id="areas"
                      type="text"
                      required
                      placeholder="Ex: Civil, Trabalhista, Previdenciário"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="experiencia"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Tempo de Experiência *
                    </label>
                    <select
                      name="tempo_experiencia"
                      id="experiencia"
                      required
                      disabled={isSubmitting}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione</option>
                      <option value="1-3">1 a 3 anos</option>
                      <option value="3-5">3 a 5 anos</option>
                      <option value="5-10">5 a 10 anos</option>
                      <option value="10+">Mais de 10 anos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="descricao"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Breve Descrição Profissional
                  </label>
                  <Textarea
                    name="descricao_profissional"
                    id="descricao"
                    placeholder="Conte um pouco sobre sua experiência, especializações e o que te motiva na advocacia..."
                    rows={4}
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-800 font-medium">
                        Inscrição enviada com sucesso! Analisaremos seu perfil e
                        entraremos em contato em breve.
                      </span>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <div className="flex items-center">
                      <span className="text-red-800 font-medium">
                        Erro ao enviar inscrição. Tente novamente ou entre em
                        contato por telefone.
                      </span>
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-blue-800 hover:bg-blue-900 w-full md:w-auto px-12 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Inscrição
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    {isSubmitting
                      ? "Processando sua inscrição..."
                      : "Analisaremos seu perfil e entraremos em contato"}
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Pronto para Expandir sua Carreira?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Junte-se a centenas de advogados que já estão crescendo conosco.
            Comece hoje mesmo sua jornada como parceiro astreiaJus.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-gray-800"
          >
            <a href="#inscricao">
              Quero me Inscrever Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="relative">
                    <img
                      src="/logo-letra-branco.png"
                      alt="AstreiaJus"
                      className="h-20 transition-transform group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-gray-400 text-sm">
                A maior plataforma de convênio jurídico do Brasil. Conectando
                clientes e advogados de forma simples e eficiente.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Para Advogados</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Como Funciona</li>
                <li>Modelo de Remuneração</li>
                <li>Áreas de Atuação</li>
                <li>Processo de Inscrição</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Central de Ajuda</li>
                <li>FAQ Advogados</li>
                <li>Documentos Necessários</li>
                <li>Política de Pagamentos</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato Parceiros</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(11) 4000-0001</li>
                <li>parceiros@juridicoclub.com.br</li>
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Atendimento dedicado</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} AstreiaJus. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}