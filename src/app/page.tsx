"use client";

import { Button, Chip } from "@heroui/react";
import { Navbar } from "@/components/navbar";
import { FeatureCard } from "@/components/feature-card";
import { Footer } from "@/components/footer";
import { Search, BarChart3, Sparkles } from "lucide-react";
import { type Feature } from "@/types";

// Feature cards configuration
const features: Feature[] = [
  {
    id: "search",
    title: "Busca Avançada",
    description:
      "Encontre rapidamente as notas de corte por especialidade, instituição e ano.",
    icon: Search,
    colorClass: "primary",
  },
  {
    id: "historical",
    title: "Dados Históricos",
    description:
      "Acesse o histórico de notas de corte e identifique tendências ao longo dos anos.",
    icon: BarChart3,
    colorClass: "success",
  },
  {
    id: "modern",
    title: "Interface Moderna",
    description:
      "Experiência otimizada com design responsivo e modo escuro automático.",
    icon: Sparkles,
    colorClass: "secondary",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background ocean-gradient relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl wave-animation"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl wave-animation-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl float-animation"></div>
      </div>

      <Navbar />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Chip color="primary" variant="flat" className="mb-4">
            Em Desenvolvimento
          </Chip>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Consulta de Notas de Corte
          </h2>
          <p className="text-lg sm:text-xl text-foreground-600 max-w-2xl mx-auto">
            Plataforma completa para consultar notas de corte de residências
            médicas em todo o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            color="primary" 
            size="lg" 
            className="font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40"
            as="a"
            href="/residencias"
          >
            Consultar Notas de Corte
          </Button>
          <Button 
            variant="bordered" 
            size="lg" 
            className="glass-effect font-semibold transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-primary/5"
            as="a"
            href="/residencias"
          >
            Ver Programas
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
