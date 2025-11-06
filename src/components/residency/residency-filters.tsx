"use client";

import { Card, CardBody, Select, SelectItem } from "@heroui/react";
import { Slider } from "@heroui/slider";
import { motion } from "framer-motion";
import { HiFilter, HiLocationMarker, HiOfficeBuilding, HiAdjustments } from "react-icons/hi";
import type { Tables } from "@/types";

interface ResidencyFiltersProps {
  states: Tables<'states'>[];
  institutions: string[];
  selectedState: string;
  selectedInstitution: string;
  cutoffRange: [number, number];
  onStateChange: (state: string) => void;
  onInstitutionChange: (institution: string) => void;
  onCutoffRangeChange: (range: [number, number]) => void;
}

export function ResidencyFilters({
  states,
  institutions,
  selectedState,
  selectedInstitution,
  cutoffRange,
  onStateChange,
  onInstitutionChange,
  onCutoffRangeChange,
}: ResidencyFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="glass-effect border-primary/20 shadow-xl overflow-hidden">
        <CardBody className="gap-6 p-6">
          {/* Header com gradiente */}
          <motion.div 
            className="flex items-center gap-4 pb-4 border-b border-divider/30"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
              <HiFilter className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Filtros Avançados</h3>
              <p className="text-sm text-foreground-500">Refine sua busca de programas</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* State Filter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
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
                selectorIcon={<div className="w-4 h-4" />}
                classNames={{
                  trigger: "bg-background/60 hover:bg-background/80 transition-colors border-divider/40 hover:border-secondary/50 h-14",
                  label: "font-semibold text-foreground-600",
                  value: "font-medium text-foreground text-base",
                  innerWrapper: "gap-3",
                  selectorIcon: "right-3",
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
            </motion.div>

            {/* Institution Filter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
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
                selectorIcon={<div className="w-4 h-4" />}
                classNames={{
                  trigger: "bg-background/60 hover:bg-background/80 transition-colors border-divider/40 hover:border-secondary/50 h-14",
                  label: "font-semibold text-foreground-600",
                  value: "font-medium text-foreground text-base",
                  innerWrapper: "gap-3",
                  selectorIcon: "right-3",
                  listboxWrapper: "max-h-[400px]",
                }}
                items={["all", ...institutions].map(inst => ({ key: inst, label: inst === "all" ? "Todas as instituições" : inst }))}
              >
                {(item) => (
                  <SelectItem key={item.key} textValue={item.label}>
                    <span className="font-medium">{item.label}</span>
                  </SelectItem>
                )}
              </Select>
            </motion.div>

            {/* Cutoff Range Slider */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center gap-2">
                <HiAdjustments className="w-5 h-5 text-secondary" />
                <label className="text-sm font-semibold text-foreground-600">
                  Faixa de Nota de Corte
                </label>
              </div>
              <div className="px-2 py-4">
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
                    { value: 800, label: "800" },
                    { value: 900, label: "900" },
                    { value: 950, label: "950" },
                  ]}
                  classNames={{
                    base: "max-w-full",
                    track: "bg-divider/40 h-2",
                    filler: "bg-linear-to-r from-secondary-400 to-secondary-600",
                    thumb: "w-5 h-5 bg-secondary shadow-lg shadow-secondary/50 after:bg-background",
                    mark: "text-xs text-foreground-500",
                  }}
                />
              </div>
              <motion.div 
                className="flex justify-between items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.span 
                  className="px-4 py-2 rounded-lg bg-secondary/10 text-secondary font-bold text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  {cutoffRange[0]} pts
                </motion.span>
                <motion.span 
                  className="px-4 py-2 rounded-lg bg-secondary/10 text-secondary font-bold text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  {cutoffRange[1]} pts
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
