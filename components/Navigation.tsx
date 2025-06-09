"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAdvogadosPage = pathname === "/advogados";

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/logo.svg"
                  alt="AstreiaJus"
                  className="h-20 transition-transform group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-blue-800 ${
                !isAdvogadosPage ? "text-blue-800" : "text-gray-600"
              }`}
            >
              Para Clientes
            </Link>
            <Link
              href="/advogados"
              className={`text-sm font-medium transition-colors hover:text-blue-800 ${
                isAdvogadosPage ? "text-blue-800" : "text-gray-600"
              }`}
            >
              Para Advogados
            </Link>
            <Button
              asChild
              className="bg-blue-800 hover:bg-blue-900 text-white"
            >
              <Link href={isAdvogadosPage ? "#inscricao" : "#planos"}>
                {isAdvogadosPage ? "Quero me inscrever" : "Assinar Agora"}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-blue-800 ${
                  !isAdvogadosPage ? "text-blue-800" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Para Clientes
              </Link>
              <Link
                href="/advogados"
                className={`text-sm font-medium transition-colors hover:text-blue-800 ${
                  isAdvogadosPage ? "text-blue-800" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Para Advogados
              </Link>
              <Button
                asChild
                className="bg-blue-800 hover:bg-blue-900 text-white w-full"
              >
                <Link
                  href={isAdvogadosPage ? "#inscricao" : "#planos"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isAdvogadosPage ? "Quero me inscrever" : "Assinar Agora"}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
