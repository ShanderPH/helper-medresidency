"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Divider,
} from "@heroui/react";
import { motion } from "framer-motion";
import { 
  HiLocationMarker, 
  HiOfficeBuilding, 
  HiTrendingUp, 
  HiTrendingDown, 
  HiCalendar, 
  HiCurrencyDollar,
  HiCheckCircle,
  HiClock
} from "react-icons/hi";
import type { ResidencyProgramWithRelations } from "@/lib/supabase/queries";

interface ResidencyCardProps {
  program: ResidencyProgramWithRelations;
  isHighlighted?: boolean;
  isDisabled?: boolean;
}

export function ResidencyCard({ program, isHighlighted = false, isDisabled = false }: ResidencyCardProps) {
  const scores = program.cutoff_scores.sort((a, b) => b.year - a.year);
  const latestScore = scores[0];
  const previousScore = scores[1];

  const getScoreChange = () => {
    if (!previousScore) return null;
    const diff = latestScore.score - previousScore.score;
    return {
      value: Math.abs(diff),
      isIncrease: diff > 0,
    };
  };

  const scoreChange = getScoreChange();

  const getAverageScore = () => {
    if (scores.length === 0) return null;
    const sum = scores.reduce((acc, score) => acc + score.score, 0);
    return Math.round(sum / scores.length);
  };

  const avgScore = getAverageScore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isDisabled ? 0.4 : 1, 
        y: 0,
        scale: isDisabled ? 0.95 : 1
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={!isDisabled ? { y: -8, transition: { duration: 0.3 } } : {}}
      className="h-full w-full"
    >
      <Card
        isPressable={!isDisabled}
        className={`glass-effect shadow-lg transition-all duration-500 overflow-hidden group h-full ${
          isHighlighted 
            ? 'border-2 border-primary highlighted-card' 
            : isDisabled 
            ? 'border-divider/10 grayscale cursor-not-allowed' 
            : 'border-primary/10 hover:shadow-2xl hover:border-primary/30'
        }`}
        classNames={{
          base: "relative flex flex-col min-h-[420px] w-full",
        }}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />
        
        <CardHeader className="flex flex-col gap-4 pb-3 relative z-10">
          {/* Institution Header */}
          <div className="w-full">
            <div className="flex items-start gap-3 mb-3">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <HiOfficeBuilding className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <h3 
                  className="text-sm font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300 mb-1 leading-tight"
                  title={program.institution.name}
                >
                  {program.institution.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-foreground-500">
                  <HiLocationMarker className="w-3 h-3 text-secondary shrink-0" />
                  <span className="truncate">{program.institution.state?.name}</span>
                </div>
              </div>
            </div>

            {/* Latest Score - Destaque */}
            {latestScore && (
              <motion.div 
                className="w-full p-4 rounded-xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-foreground-500 mb-1">Nota de Corte {latestScore.year}</p>
                    <p className="text-3xl font-black text-primary">{latestScore.score.toFixed(1)}</p>
                  </div>
                  {scoreChange && (
                    <motion.div 
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
                        scoreChange.isIncrease 
                          ? 'bg-danger/10 text-danger' 
                          : 'bg-success/10 text-success'
                      }`}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {scoreChange.isIncrease ? (
                        <HiTrendingUp className="w-5 h-5" />
                      ) : (
                        <HiTrendingDown className="w-5 h-5" />
                      )}
                      <span className="text-sm font-bold">
                        {scoreChange.isIncrease ? '+' : '-'}{scoreChange.value.toFixed(1)}
                      </span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </CardHeader>

        <Divider className="bg-divider/30" />

        <CardBody className="gap-2.5 py-4 relative z-10">
          {/* Info Grid - Mais compacto e organizado */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Average Score */}
            {avgScore && (
              <motion.div 
                className="p-3 rounded-lg bg-content2/30 hover:bg-content2/50 transition-colors duration-300 border border-divider/10"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-xs text-foreground-500 mb-1">Média Histórica</p>
                <p className="text-lg font-bold text-foreground">{avgScore.toFixed(1)}</p>
              </motion.div>
            )}

            {/* Exam Price */}
            {program.exam_price && (
              <motion.div 
                className="p-3 rounded-lg bg-warning/5 hover:bg-warning/10 transition-colors duration-300 border border-warning/10"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-1 mb-1">
                  <HiCurrencyDollar className="w-4 h-4 text-warning" />
                  <p className="text-xs text-foreground-500">Inscrição</p>
                </div>
                <p className="text-sm font-bold text-warning">
                  R$ {program.exam_price.toFixed(2)}
                </p>
              </motion.div>
            )}

            {/* Exam Date */}
            {program.last_exam_date && (
              <motion.div 
                className="p-3 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors duration-300 border border-secondary/10 col-span-2"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2">
                  <HiCalendar className="w-4 h-4 text-secondary" />
                  <p className="text-xs text-foreground-500">Data da Prova</p>
                  <p className="text-sm font-semibold text-secondary ml-auto">
                    {new Date(program.last_exam_date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    })}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </CardBody>

        <Divider className="bg-divider/30" />

        <CardFooter className="flex flex-col gap-2.5 py-3 relative z-10">
          {/* Exam Type */}
          <div className="w-full flex items-center justify-between">
            <span className="text-xs text-foreground-500 font-medium">Tipo de Exame</span>
            <Chip 
              variant="flat" 
              size="sm" 
              color="secondary"
              classNames={{
                base: "font-semibold"
              }}
            >
              {program.exam_type.name}
            </Chip>
          </div>

          {/* Second Phase Badge */}
          {program.has_second_phase && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Chip 
                variant="flat" 
                size="sm" 
                color="warning" 
                className="w-full"
                startContent={<HiCheckCircle className="w-4 h-4" />}
              >
                Possui 2ª Fase
              </Chip>
            </motion.div>
          )}

          {/* Historical Scores - Melhor visualização */}
          {scores.length > 1 && (
            <div className="w-full mt-1">
              <div className="flex items-center gap-2 mb-2">
                <HiClock className="w-3.5 h-3.5 text-foreground-500" />
                <p className="text-xs text-foreground-500 font-medium">Histórico de Notas</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {scores.slice(0, 4).map((score, index) => (
                  <motion.div
                    key={score.year}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Chip
                      size="sm"
                      variant="flat"
                      color={index === 0 ? "primary" : "default"}
                      classNames={{
                        base: "text-xs font-semibold"
                      }}
                    >
                      {score.year}: {score.score.toFixed(0)}
                    </Chip>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
