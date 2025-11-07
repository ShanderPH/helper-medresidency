"use client";

import { useState } from "react";
import { Input, Chip } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSearch, HiX } from "react-icons/hi";

interface SearchBarProps {
  onSearchChange: (query: string) => void;
  resultsCount: number;
  totalCount: number;
}

export function SearchBar({ onSearchChange, resultsCount, totalCount }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearchChange(value);
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearchChange("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="glass-effect rounded-2xl p-4 border border-primary/20 shadow-xl">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Search Input */}
          <div className="flex-1 w-full">
            <Input
              type="text"
              placeholder="Buscar por estado, instituição ou tipo de exame..."
              aria-label="Campo de busca"
              value={searchQuery}
              onValueChange={handleSearchChange}
              startContent={
                <HiSearch className="w-5 h-5 text-primary pointer-events-none" />
              }
              endContent={
                <AnimatePresence mode="wait">
                  {searchQuery && (
                    <motion.button
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={handleClear}
                      className="hover:bg-danger/10 rounded-full p-1 transition-colors"
                      aria-label="Limpar busca"
                    >
                      <HiX className="w-4 h-4 text-danger" />
                    </motion.button>
                  )}
                </AnimatePresence>
              }
              classNames={{
                base: "w-full",
                input: "text-base font-medium",
                inputWrapper: "bg-background/70 !border-divider/40 hover:!border-primary/70 focus-within:!border-primary transition-all duration-300 shadow-sm hover:shadow-md h-14",
              }}
              variant="bordered"
              color="primary"
              size="lg"
            />
          </div>

          {/* Results Counter */}
          <AnimatePresence mode="wait">
            {searchQuery && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Chip
                  color={resultsCount > 0 ? "primary" : "danger"}
                  variant="flat"
                  size="lg"
                  classNames={{
                    base: "font-bold px-4 h-14",
                    content: "text-base"
                  }}
                >
                  {resultsCount} de {totalCount} resultados
                </Chip>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Search Tips */}
        <AnimatePresence mode="wait">
          {!searchQuery && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 pt-3 border-t border-divider/20"
            >
              <p className="text-xs text-foreground-500 mb-2 font-medium">
                💡 Dicas de busca:
              </p>
              <div className="flex flex-wrap gap-2">
                <Chip size="sm" variant="flat" color="secondary">
                  SP, RJ, MG (estados)
                </Chip>
                <Chip size="sm" variant="flat" color="secondary">
                  USP, UNIFESP, UFMG
                </Chip>
                <Chip size="sm" variant="flat" color="secondary">
                  ENARE, SUS-SP, SURCE
                </Chip>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
