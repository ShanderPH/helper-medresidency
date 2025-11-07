"use client";

import { useState, useEffect } from "react";
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Button, 
  Chip, 
  Spinner,
  Divider,
  Select,
  SelectItem,
  Input
} from "@heroui/react";
import { Slider } from "@heroui/slider";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HiCalculator, 
  HiTrendingUp, 
  HiCheckCircle,
  HiFilter,
  HiLocationMarker,
  HiOfficeBuilding,
  HiAdjustments,
  HiChevronLeft,
  HiChevronRight,
  HiX
} from "react-icons/hi";
import type { Tables } from "@/types";

interface SidebarProps {
  onScoreChange: (score: number | null) => void;
  totalPrograms: number;
  matchingPrograms: number;
  states: Tables<'states'>[];
  institutions: string[];
  selectedState: string;
  selectedInstitution: string;
  cutoffRange: [number, number];
  onStateChange: (state: string) => void;
  onInstitutionChange: (institution: string) => void;
  onCutoffRangeChange: (range: [number, number]) => void;
}

export function Sidebar({
  onScoreChange,
  totalPrograms,
  matchingPrograms,
  states,
  institutions,
  selectedState,
  selectedInstitution,
  cutoffRange,
  onStateChange,
  onInstitutionChange,
  onCutoffRangeChange,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [convertedScore, setConvertedScore] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsCollapsed(false);
      } else {
        setIsCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const convertScoreTo3Digits = (value: string): number | null => {
    if (!value) return null;

    const cleaned = value.replace(/[^\d.,]/g, "").replace(",", ".");
    const num = parseFloat(cleaned);

    if (isNaN(num)) return null;

    if (num < 100) {
      if (cleaned.includes(".")) {
        return Math.round(num * 100);
      }
      return num * 10;
    }

    return Math.round(num);
  };

  const handleCalculate = async () => {
    setIsCalculating(true);
    
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const score = convertScoreTo3Digits(inputValue);
    setConvertedScore(score);
    onScoreChange(score);
    setIsCalculating(false);
  };

  const handleClear = () => {
    setInputValue("");
    setConvertedScore(null);
    onScoreChange(null);
  };

  const approvalPercentage = totalPrograms > 0 
    ? ((matchingPrograms / totalPrograms) * 100).toFixed(1) 
    : "0";

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsCollapsed(true)}
          />
        )}
      </AnimatePresence>

      {/* Toggle Button - Fixed position */}
      <motion.div
        className="fixed top-24 left-0 z-60 lg:z-50"
        initial={{ x: 0 }}
        animate={{ x: isCollapsed ? 0 : 384 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Button
          isIconOnly
          color="primary"
          variant="shadow"
          size="lg"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-l-none rounded-r-2xl shadow-2xl"
        >
          {isCollapsed ? <HiChevronRight className="w-6 h-6" /> : <HiChevronLeft className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Sidebar */}
      <motion.aside
        className="fixed left-0 top-0 h-full bg-background/95 backdrop-blur-xl border-r border-divider/20 shadow-2xl z-50 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
        style={{ width: isCollapsed ? 0 : 384 }}
        initial={{ x: 0 }}
        animate={{ 
          x: isCollapsed ? -384 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-4 py-6 space-y-6 min-h-full pt-20 w-[384px]">
          {/* Calculator Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-effect border border-primary/20 shadow-xl overflow-visible relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none z-0" />
              
              <CardHeader className="flex flex-col gap-3 pb-3 relative z-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <HiCalculator className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-foreground">
                      Calculadora de Aprovação
                    </h3>
                    <p className="text-foreground-500 text-xs font-medium">
                      Calcule suas chances
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardBody className="gap-4 relative z-1">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <HiTrendingUp className="w-4 h-4 text-primary" />
                    <label className="text-xs font-semibold text-foreground-600">
                      Sua Nota
                    </label>
                  </div>

                  <Input
                    type="number"
                    placeholder="Ex: 7.8, 78 ou 780"
                    aria-label="Campo de entrada da nota"
                    value={inputValue}
                    onValueChange={setInputValue}
                    classNames={{
                      base: "w-full",
                      input: "text-lg font-bold",
                      inputWrapper: "bg-background/70 !border-divider/40 hover:!border-primary/70 focus-within:!border-primary transition-all duration-300 shadow-sm hover:shadow-md",
                    }}
                    variant="bordered"
                    color="primary"
                    size="lg"
                  />

                  <div className="flex gap-2 items-stretch">
                    <Button
                      color="primary"
                      size="lg"
                      onClick={handleCalculate}
                      className="flex-1 font-bold shadow-lg bg-linear-to-r from-primary to-primary-600 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-xl"
                      disabled={!inputValue || isCalculating}
                      startContent={!isCalculating}
                    >
                      {isCalculating ? (
                        <Spinner size="sm" color="white" />
                      ) : (
                        "Calcular"
                      )}
                    </Button>
                    
                    <AnimatePresence mode="wait">
                      {convertedScore !== null && !isCalculating && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <Button
                            isIconOnly
                            variant="bordered"
                            size="lg"
                            color="danger"
                            onClick={handleClear}
                            className="font-semibold border-2 hover:bg-danger hover:text-danger-foreground hover:scale-110 transition-all duration-200 flex items-center justify-center"
                          >
                            <HiX className="w-5 h-5" />
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {convertedScore !== null && !isCalculating && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="p-4 rounded-xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <HiCheckCircle className="w-5 h-5 text-success" />
                          <p className="text-xs font-semibold text-foreground-500">
                            Nota Convertida
                          </p>
                        </div>
                        <motion.p 
                          className="text-4xl font-black text-primary"
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          {convertedScore}
                        </motion.p>

                        <div className="flex flex-col gap-2">
                          <Chip
                            color="primary"
                            variant="flat"
                            size="md"
                            className="w-full font-bold"
                          >
                            {matchingPrograms} de {totalPrograms} programas
                          </Chip>
                          {matchingPrograms > 0 && (
                            <Chip
                              color="success"
                              variant="flat"
                              size="md"
                              startContent={<HiTrendingUp className="w-4 h-4" />}
                              className="w-full font-bold"
                            >
                              {approvalPercentage}% de aprovação
                            </Chip>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardBody>
            </Card>
          </motion.div>

          {/* Divider */}
          <Divider className="bg-divider/30" />

          {/* Filters Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-effect border border-secondary/20 shadow-xl overflow-visible relative">
              <CardHeader className="flex flex-col gap-3 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                    <HiFilter className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Filtros Avançados</h3>
                    <p className="text-xs text-foreground-500">Refine sua busca</p>
                  </div>
                </div>
              </CardHeader>

              <CardBody className="gap-5">
                {/* State Filter */}
                <div>
                  <Select
                    label="Estado"
                    placeholder="Selecione um estado"
                    aria-label="Filtrar por estado"
                    selectedKeys={selectedState !== "all" ? [selectedState] : []}
                    onSelectionChange={(keys) => {
                      const selected = Array.from(keys)[0];
                      onStateChange(selected ? String(selected) : "all");
                    }}
                    variant="bordered"
                    color="secondary"
                    size="lg"
                    startContent={<HiLocationMarker className="w-5 h-5 text-secondary" />}
                    classNames={{
                      trigger: "bg-background/70 !border-divider/40 hover:!border-secondary/70 data-[open=true]:!border-secondary transition-all duration-300 shadow-sm hover:shadow-md",
                      label: "font-semibold text-foreground-600",
                      value: "font-medium text-foreground",
                      popoverContent: "z-[100]",
                    }}
                    items={[{ code: "all", name: "Todos os estados" }, ...states]}
                  >
                    {(state) => (
                      <SelectItem key={state.code} textValue={state.name}>
                        <span className="font-medium">
                          {state.name}{state.code !== "all" ? ` (${state.code})` : ""}
                        </span>
                      </SelectItem>
                    )}
                  </Select>
                </div>

                {/* Institution Filter */}
                <div>
                  <Select
                    label="Instituição"
                    placeholder="Selecione uma instituição"
                    aria-label="Filtrar por instituição"
                    selectedKeys={selectedInstitution !== "all" ? [selectedInstitution] : []}
                    onSelectionChange={(keys) => {
                      const selected = Array.from(keys)[0];
                      onInstitutionChange(selected ? String(selected) : "all");
                    }}
                    variant="bordered"
                    color="secondary"
                    size="lg"
                    startContent={<HiOfficeBuilding className="w-5 h-5 text-secondary" />}
                    classNames={{
                      trigger: "bg-background/70 !border-divider/40 hover:!border-secondary/70 data-[open=true]:!border-secondary transition-all duration-300 shadow-sm hover:shadow-md",
                      label: "font-semibold text-foreground-600",
                      value: "font-medium text-foreground",
                      listboxWrapper: "max-h-[300px]",
                      popoverContent: "z-[100]",
                    }}
                    items={["all", ...institutions].map(inst => ({ key: inst, label: inst === "all" ? "Todas as instituições" : inst }))}
                  >
                    {(item) => (
                      <SelectItem key={item.key} textValue={item.label}>
                        <span className="font-medium text-sm">{item.label}</span>
                      </SelectItem>
                    )}
                  </Select>
                </div>

                {/* Cutoff Range Slider */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <HiAdjustments className="w-5 h-5 text-secondary" />
                    <label className="text-xs font-semibold text-foreground-600">
                      Faixa de Nota de Corte
                    </label>
                  </div>
                  <div className="px-1 py-4">
                    <Slider
                      label=""
                      step={5}
                      minValue={700}
                      maxValue={950}
                      value={cutoffRange}
                      onChange={(value) => onCutoffRangeChange(value as [number, number])}
                      showTooltip={true}
                      color="secondary"
                      size="md"
                      formatOptions={{
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      marks={[
                        { value: 700, label: "700" },
                        { value: 825, label: "825" },
                        { value: 950, label: "950" },
                      ]}
                      classNames={{
                        base: "w-full max-w-full",
                        track: "bg-divider/40 h-2",
                        filler: "bg-linear-to-r from-secondary-400 to-secondary-600",
                        thumb: "w-5 h-5 bg-secondary shadow-lg shadow-secondary/50 after:bg-background",
                        mark: "text-[10px] text-foreground-500",
                        labelWrapper: "mb-2",
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary font-bold text-sm">
                      {cutoffRange[0]} pts
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary font-bold text-sm">
                      {cutoffRange[1]} pts
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
}
