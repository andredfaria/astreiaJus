import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'astreiaJus - Convênio Jurídico com Clube de Vantagens',
  description: 'Acesso facilitado a serviços jurídicos com preços reduzidos. Planos a partir de R$ 59,90/mês.',
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