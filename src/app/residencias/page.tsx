"use client";

import { useState, useEffect, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/residency/sidebar";
import { ResidencyCard } from "@/components/residency/residency-card";
import { Spinner } from "@heroui/react";
import { getAllResidencyPrograms, getStates } from "@/lib/supabase/queries";
import type { ResidencyProgramWithRelations } from "@/lib/supabase/queries";
import type { Tables } from "@/types";

export default function ResidenciasPage() {
  const [programs, setPrograms] = useState<ResidencyProgramWithRelations[]>([]);
  const [states, setStates] = useState<Tables<'states'>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [selectedState, setSelectedState] = useState<string>("all");
  const [selectedInstitution, setSelectedInstitution] = useState<string>("all");
  const [cutoffRange, setCutoffRange] = useState<[number, number]>([700, 950]);
  const [userScore, setUserScore] = useState<number | null>(null);

  // Load data
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [programsData, statesData] = await Promise.all([
          getAllResidencyPrograms(),
          getStates(),
        ]);
        setPrograms(programsData);
        setStates(statesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao carregar dados");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter and sort programs
  const filteredPrograms = useMemo(() => {
    return programs
      .filter((program) => {
        // State filter
        if (selectedState !== "all" && program.institution.state?.code !== selectedState) {
          return false;
        }

        // Institution filter
        if (selectedInstitution !== "all" && program.institution.name !== selectedInstitution) {
          return false;
        }

        // Cutoff range filter - get latest score (2025)
        // IMPORTANTE: Só aplica filtro para programas com notas na escala Enare (700-1000)
        const latestScore = program.cutoff_scores.find(s => s.year === 2025)?.score;
        if (latestScore !== undefined) {
          // Só filtra se a nota estiver na escala Enare (> 100)
          // Programas com escalas diferentes (0-10 ou 0-100) sempre passam
          if (latestScore > 100) {
            if (latestScore < cutoffRange[0] || latestScore > cutoffRange[1]) {
              return false;
            }
          }
        }

        // User score filter
        if (userScore !== null) {
          const latest2025 = program.cutoff_scores.find(s => s.year === 2025)?.score;
          if (latest2025 !== undefined && userScore < latest2025) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        const scoreA = a.cutoff_scores.find(s => s.year === 2025)?.score || 0;
        const scoreB = b.cutoff_scores.find(s => s.year === 2025)?.score || 0;
        return scoreB - scoreA;
      });
  }, [programs, selectedState, selectedInstitution, cutoffRange, userScore]);

  // Get unique institutions
  const institutions = useMemo(() => {
    const uniqueInstitutions = new Map<string, string>();
    programs.forEach((program) => {
      uniqueInstitutions.set(program.institution.name, program.institution.name);
    });
    return Array.from(uniqueInstitutions.values()).sort();
  }, [programs]);

  return (
    <main className="min-h-screen w-full bg-background ocean-gradient relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl wave-animation"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl wave-animation-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl float-animation"></div>
      </div>

      <Navbar />

      {/* Sidebar with Calculator and Filters */}
      <Sidebar
        onScoreChange={setUserScore}
        totalPrograms={programs.length}
        matchingPrograms={filteredPrograms.length}
        states={states}
        institutions={institutions}
        selectedState={selectedState}
        selectedInstitution={selectedInstitution}
        cutoffRange={cutoffRange}
        onStateChange={setSelectedState}
        onInstitutionChange={setSelectedInstitution}
        onCutoffRangeChange={setCutoffRange}
      />

      {/* Main Content Area - Adjusted for sidebar */}
      <div className="relative z-10 w-full transition-all duration-300 pt-0 pl-0 lg:pl-96">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Results */}
        <div className="mt-8">
          {loading ? (
            <div className="flex flex-col justify-center items-center py-20 gap-4">
              <Spinner size="lg" color="primary" />
              <p className="text-lg font-semibold text-foreground-600 animate-pulse">
                Carregando programas...
              </p>
            </div>
          ) : error ? (
            <div className="glass-effect rounded-2xl p-8 text-center border border-danger/20">
              <p className="text-danger text-lg font-semibold">⚠️ Erro: {error}</p>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {userScore !== null
                    ? `🎯 Programas onde você passaria (${filteredPrograms.length})`
                    : `📚 Programas de Residência (${filteredPrograms.length})`}
                </h2>
              </div>

              {filteredPrograms.length === 0 ? (
                <div className="glass-effect rounded-2xl p-12 text-center border border-divider/20">
                  <p className="text-foreground-500 text-lg mb-2">🔍 Nenhum programa encontrado</p>
                  <p className="text-foreground-400 text-sm">
                    Tente ajustar os filtros para encontrar mais resultados
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                  {programs.map((program) => {
                    const latestScore = program.cutoff_scores.find(s => s.year === 2025)?.score;
                    const isHighlighted = userScore !== null && latestScore !== undefined && userScore >= latestScore;
                    const isDisabled = userScore !== null && latestScore !== undefined && userScore < latestScore;
                    const isInFilteredList = filteredPrograms.some(p => p.id === program.id);
                    
                    if (!isInFilteredList && userScore === null) return null;
                    
                    return (
                      <ResidencyCard 
                        key={program.id} 
                        program={program} 
                        isHighlighted={isHighlighted}
                        isDisabled={isDisabled}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
