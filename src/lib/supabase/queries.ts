import { supabase } from './client';
import type { Tables } from '@/types/database.types';

export type ResidencyProgramWithRelations = Tables<'residency_programs'> & {
  institution: Tables<'institutions'> & {
    state: Tables<'states'>;
  };
  specialty: Tables<'specialties'>;
  exam_type: Tables<'exam_types'>;
  cutoff_scores: Tables<'cutoff_scores'>[];
};

export async function getAllResidencyPrograms() {
  const { data, error } = await supabase
    .from('residency_programs')
    .select(
      `
      *,
      institution:institutions(
        *,
        state:states(*)
      ),
      specialty:specialties(*),
      exam_type:exam_types(*),
      cutoff_scores(*)
    `
    )
    .eq('active', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as unknown as ResidencyProgramWithRelations[];
}

export async function getResidencyProgramsByState(stateCode: string) {
  const { data, error } = await supabase
    .from('residency_programs')
    .select(
      `
      *,
      institution:institutions!inner(
        *,
        state:states!inner(*)
      ),
      specialty:specialties(*),
      exam_type:exam_types(*),
      cutoff_scores(*)
    `
    )
    .eq('institution.state.code', stateCode)
    .eq('active', true);

  if (error) throw error;
  return data as unknown as ResidencyProgramWithRelations[];
}

export async function getResidencyProgramsBySpecialty(specialtyId: string) {
  const { data, error } = await supabase
    .from('residency_programs')
    .select(
      `
      *,
      institution:institutions(
        *,
        state:states(*)
      ),
      specialty:specialties(*),
      exam_type:exam_types(*),
      cutoff_scores(*)
    `
    )
    .eq('specialty_id', specialtyId)
    .eq('active', true);

  if (error) throw error;
  return data as unknown as ResidencyProgramWithRelations[];
}

export async function getCutoffScoresByYear(year: number) {
  const { data, error } = await supabase
    .from('cutoff_scores')
    .select(
      `
      *,
      residency_program:residency_programs(
        *,
        institution:institutions(
          *,
          state:states(*)
        ),
        specialty:specialties(*),
        exam_type:exam_types(*)
      )
    `
    )
    .eq('year', year)
    .order('score', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getStates() {
  const { data, error } = await supabase
    .from('states')
    .select('*')
    .order('name', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getSpecialties() {
  const { data, error } = await supabase
    .from('specialties')
    .select('*')
    .eq('active', true)
    .order('name', { ascending: true });

  if (error) throw error;
  return data;
}

export async function getExamTypes() {
  const { data, error } = await supabase
    .from('exam_types')
    .select('*')
    .eq('active', true)
    .order('name', { ascending: true });

  if (error) throw error;
  return data;
}
