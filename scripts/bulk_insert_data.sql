-- Bulk insert remaining residency programs (excluding first 5 already inserted)
-- Using a more efficient approach with batch inserts

-- Batch insert all remaining programs
WITH 
  state_map AS (
    SELECT code, id FROM states
  ),
  inst_map AS (
    SELECT i.id, i.name, s.code as state_code
    FROM institutions i
    JOIN states s ON s.id = i.state_id
  ),
  spec_id AS (SELECT id FROM specialties WHERE name = 'Otorrinolaringologia' LIMIT 1),
  exam_id AS (SELECT id FROM exam_types WHERE name = 'Enare' LIMIT 1),
  programs_data AS (
    SELECT 
      im.id as inst_id,
      (SELECT id FROM spec_id) as spec_id,
      (SELECT id FROM exam_id) as exam_id,
      pd.exam_price,
      pd.last_exam_date::date,
      pd.has_second_phase
    FROM (VALUES
      ('HOSPITAL UNIVERSITÁRIO JÚLIO MULLER', 'MT', 330, '2025-10-19', false),
      ('Caixa de Assistência dos Servidores do Estado de Mato Grosso do Sul', 'MS', 330, '2025-10-19', false),
      ('HC DA UNIVERSIDADE FEDERAL DE MINAS GERAIS', 'MG', 330, '2025-10-19', false),
      ('HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE JUIZ DE FORA', 'MG', 330, '2025-10-19', false),
      ('UNIVERSIDADE ESTADUAL DE MONTES CLAROS – UNIMONTES', 'MG', 330, '2025-10-19', false),
      ('UNIVERSIDADE FEDERAL DE UBERLÂNDIA – UFU', 'MG', 330, '2025-10-19', false),
      ('COMPLEXO DO HOSPITAL DE CLINICAS DA UFPR', 'PR', 330, '2025-10-19', false),
      ('HC PROFESSOR ROMERO MARQUES – UNIVERSIDADE FEDERAL DE PERNAMBUCO', 'PE', 330, '2025-10-19', false),
      ('HU ANTONIO PEDRO – UNIVERSIDADE FEDERAL FLUMINENSE', 'RJ', 330, '2025-10-19', false),
      ('HOSPITAL CENTRAL DA POLÍCIA MILITAR DO ESTADO DO RIO DE JANEIRO', 'RJ', 330, '2025-10-19', false),
      ('HOSPITAL FEDERAL DA LAGOA', 'RJ', 330, '2025-10-19', false),
      ('HOSPITAL FEDERAL DE BONSUCESSO', 'RJ', 330, '2025-10-19', false),
      ('HOSPITAL FEDERAL DO ANDARAI', 'RJ', 330, '2025-10-19', false),
      ('HOSPITAL FEDERAL DOS SERVIDORES DO ESTADO', 'RJ', 330, '2025-10-19', false),
      ('HOSPITAL UNIVERSITÁRIO GAFFRÉE E GUINLE – UNIRIO', 'RJ', 330, '2025-10-19', false),
      ('INSTITUTO NACIONAL DE CÂNCER – INCA', 'RJ', 330, '2025-10-19', false),
      ('HC DA UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE', 'RN', 330, '2025-10-19', false),
      ('HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE SERGIPE', 'SE', 330, '2025-10-19', false),
      ('FUNDAÇÃO FACULDADE DE MEDICINA', 'SP', 360, '2025-11-09', true),
      ('INSTITUTO DE ASSISTÊNCIA MÉDICA AO SERVIDOR PÚBLICO ESTADUAL – IAMSPE', 'SP', 120, '2025-12-06', false),
      ('IRMANDADE DA SANTA CASA DE MISERICÓRDIA DE SÃO PAULO', 'SP', 400, '2025-11-09', false),
      ('IRMANDADE DA SANTA CASA DE MISERICÓRDIA – RIBEIRÃO PRETO', 'SP', 300, '2025-11-03', false),
      ('PONTIFÍCIA UNIVERSIDADE CATÓLICA DE SÃO PAULO', 'SP', 550, '2025-11-30', false),
      ('UNIVERSIDADE DE SÃO PAULO - CAPITAL', 'SP', 199, '2025-11-23', false),
      ('UNIVERSIDADE DE SÃO PAULO - FACULDADE DE MEDICINA DE RIBEIRÃO PRETO', 'SP', 199, '2025-12-08', false),
      ('UNIVERSIDADE ESTADUAL DE CAMPINAS', 'SP', 230, '2025-12-07', false),
      ('UNIVERSIDADE FEDERAL DE SÃO PAULO – UNIFESP', 'SP', 305, '2025-10-19', false),
      ('FUNDAÇÃO ABC', 'SP', 450, '2025-11-24', true),
      ('FACULDADE DE MEDICINA DE JUNDIAÍ', 'SP', 220, '2025-11-16', false),
      ('HOSPITAL REGIONAL DE PRESIDENTE PRUDENTE – UNESP', 'SP', 265, '2025-11-02', false),
      ('HOSPITAL SÍRIO-LIBANÊS', 'SP', 550, '2025-11-08', true),
      ('HOSPITAL OSVALDO CRUZ – BH/IPSEMG', 'MG', 210, '2025-11-30', false)
    ) AS pd(inst_name, state_code, exam_price, last_exam_date, has_second_phase)
    JOIN inst_map im ON im.name = pd.inst_name AND im.state_code = pd.state_code
  )
INSERT INTO residency_programs (institution_id, specialty_id, exam_type_id, exam_price, last_exam_date, has_second_phase)
SELECT inst_id, spec_id, exam_id, exam_price, last_exam_date, has_second_phase
FROM programs_data
ON CONFLICT (institution_id, specialty_id, exam_type_id) DO UPDATE
SET exam_price = EXCLUDED.exam_price, 
    last_exam_date = EXCLUDED.last_exam_date,
    has_second_phase = EXCLUDED.has_second_phase;
