"use client";

import { Select, SelectItem } from "@heroui/react";
import { motion } from "framer-motion";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";

export type SortOption = 
  | "name-asc" 
  | "name-desc" 
  | "state-asc" 
  | "state-desc" 
  | "score-asc" 
  | "score-desc";

interface SortControlsProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions = [
  { 
    key: "score-desc", 
    label: "Nota de Corte (Maior → Menor)", 
    icon: HiSortDescending 
  },
  { 
    key: "score-asc", 
    label: "Nota de Corte (Menor → Maior)", 
    icon: HiSortAscending 
  },
  { 
    key: "name-asc", 
    label: "Instituição (A → Z)", 
    icon: HiSortAscending 
  },
  { 
    key: "name-desc", 
    label: "Instituição (Z → A)", 
    icon: HiSortDescending 
  },
  { 
    key: "state-asc", 
    label: "Estado (A → Z)", 
    icon: HiSortAscending 
  },
  { 
    key: "state-desc", 
    label: "Estado (Z → A)", 
    icon: HiSortDescending 
  },
];

export function SortControls({ value, onChange }: SortControlsProps) {
  const selectedOption = sortOptions.find(opt => opt.key === value);
  const Icon = selectedOption?.icon || HiSortDescending;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full sm:w-auto min-w-[280px]"
    >
      <Select
        label="Ordenar por"
        placeholder="Selecione a ordenação"
        aria-label="Ordenar programas"
        selectedKeys={[value]}
        onSelectionChange={(keys) => {
          const selected = Array.from(keys)[0];
          if (selected) onChange(selected as SortOption);
        }}
        variant="bordered"
        color="primary"
        size="lg"
        startContent={<Icon className="w-5 h-5 text-primary" />}
        classNames={{
          trigger: "glass-effect !border-primary/30 hover:!border-primary/70 data-[open=true]:!border-primary transition-all duration-300 shadow-md hover:shadow-lg h-14",
          label: "font-semibold text-foreground-600",
          value: "font-medium text-foreground text-base",
          innerWrapper: "gap-3",
        }}
        items={sortOptions}
      >
        {(option) => (
          <SelectItem 
            key={option.key} 
            textValue={option.label}
            startContent={<option.icon className="w-4 h-4 text-primary" />}
          >
            <span className="font-medium">{option.label}</span>
          </SelectItem>
        )}
      </Select>
    </motion.div>
  );
}
