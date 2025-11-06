/**
 * Type definitions for Helper MedResidency application
 */

import { type LucideIcon } from "lucide-react";

/**
 * Feature card displayed on landing page
 */
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: "primary" | "success" | "secondary" | "warning" | "danger";
}

/**
 * Residency program information
 * @future For when implementing the search functionality
 */
export interface Residency {
  id: string;
  institution: string;
  specialty: string;
  cutoffScore: number;
  year: number;
  city: string;
  state: string;
  vacancies?: number;
  type?: "R1" | "R2" | "R3" | "R+" | "Área de atuação";
}

/**
 * Search filter parameters
 * @future For when implementing the search functionality
 */
export interface SearchFilters {
  specialty?: string;
  institution?: string;
  year?: number;
  minScore?: number;
  maxScore?: number;
  state?: string;
  city?: string;
}

/**
 * Navbar configuration
 */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Footer section configuration
 */
export interface FooterSection {
  title: string;
  links: NavLink[];
}

/**
 * Re-export database types from Supabase
 */
export type { Database, Tables, TablesInsert, TablesUpdate } from './database.types';
