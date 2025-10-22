import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AstreiaJus - Advocacia Acessível e Inclusiva | Serviços Jurídicos com Tecnologia',
  description: 'Plataforma que democratiza o acesso à advocacia de qualidade. Valores até 50% abaixo da tabela OAB, Clube de Vantagens exclusivo e rede de advogados especializados. Adesão a partir de R$ 89,90/mês.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}