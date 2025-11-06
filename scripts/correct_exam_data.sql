-- SQL Script to correct exam types, prices, and dates in residency_programs table
-- Generated at: 2025-11-06 17:07:24


-- Update for: COMPLEXO HOSPITALAR DA UFC/EBSERH
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%COMPLEXO HOSPITALAR DA UFC/EBSERH%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Hospital Geral de Fortaleza (HGF)
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL GERAL DE FORTALEZA (HGF)%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HOSPITAL DAS FORÇAS ARMADAS
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL DAS FORÇAS ARMADAS%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: ISMEP- INSTITUTO SANTA MARTA DE ENSINO E PESQUISA
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%ISMEP- INSTITUTO SANTA MARTA DE ENSINO E PESQUISA%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HOSPITAL UNIVERSITÁRIO DE BRASÍLIA – UnB
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL UNIVERSITÁRIO DE BRASÍLIA – UNB%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HOSPITAL UNIVERSITÁRIO JÚLIO MULLER
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL UNIVERSITÁRIO JÚLIO MULLER%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Caixa de Assistência dos Servidores do Estado de Mato Grosso do Sul
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%CAIXA DE ASSISTÊNCIA DOS SERVIDORES DO ESTADO DE MATO GROSSO DO SUL%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HC DA UNIVERSIDADE FEDERAL DE MINAS GERAIS
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HC DA UNIVERSIDADE FEDERAL DE MINAS GERAIS%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE JUIZ DE FORA
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE JUIZ DE FORA%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: UNIVERSIDADE ESTADUAL DE MONTES CLAROS – UNIMONTES
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%UNIVERSIDADE ESTADUAL DE MONTES CLAROS – UNIMONTES%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: UNIVERSIDADE FEDERAL DE UBERLÂNDIA – UFU
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%UNIVERSIDADE FEDERAL DE UBERLÂNDIA – UFU%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: COMPLEXO DO HOSPITAL DE CLINICAS DA UFPR
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%COMPLEXO DO HOSPITAL DE CLINICAS DA UFPR%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HC PROFESSOR ROMERO MARQUES – UNIVERSIDADE FEDERAL DE PERNAMBUCO
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HC PROFESSOR ROMERO MARQUES – UNIVERSIDADE FEDERAL DE PERNAMBUCO%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HU ANTONIO PEDRO – UNIVERSIDADE FEDERAL FLUMINENSE
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HU ANTONIO PEDRO – UNIVERSIDADE FEDERAL FLUMINENSE%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HOSPITAL CENTRAL DA POLÍCIA MILITAR DO ESTADO DO RIO DE JANEIRO
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL CENTRAL DA POLÍCIA MILITAR DO ESTADO DO RIO DE JANEIRO%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HOSPITAL FEDERAL DA LAGOA
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL FEDERAL DA LAGOA%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HOSPITAL FEDERAL DE BONSUCESSO
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL FEDERAL DE BONSUCESSO%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HOSPITAL FEDERAL DO ANDARAI
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL FEDERAL DO ANDARAI%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HOSPITAL FEDERAL DOS SERVIDORES DO ESTADO
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL FEDERAL DOS SERVIDORES DO ESTADO%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HOSPITAL UNIVERSITÁRIO GAFFRÉE E GUINLE – UNIRIO
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL UNIVERSITÁRIO GAFFRÉE E GUINLE – UNIRIO%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: HOSPITAL UNIVERSITÁRIO ONOFRE LOPES
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL UNIVERSITÁRIO ONOFRE LOPES%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: UNIVERSIDADE FEDERAL DE SERGIPE
UPDATE residency_programs
SET 
    exam_type_id = 'd0108456-dffa-4647-9bb8-3db6d5e3b115',  -- Enare
    exam_price = 330,
    last_exam_date = '2025-10-19',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%UNIVERSIDADE FEDERAL DE SERGIPE%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: SUS-SP
UPDATE residency_programs
SET 
    exam_type_id = 'ca2a57ea-09f6-4f4f-8bfa-55294d736f9d',  -- SUS-SP
    exam_price = 120,
    last_exam_date = '2025-12-14',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%SUS-SP%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: UNIVERSIDADE FEDERAL DE SÃO PAULO - USP
UPDATE residency_programs
SET 
    exam_type_id = '0569aa88-abb5-4172-8db3-18d318883ebf',  -- USP-SP
    exam_price = 620,
    last_exam_date = '2025-11-23',
    has_second_phase = true,
    second_phase_date = '2025-12-14'
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%UNIVERSIDADE FEDERAL DE SÃO PAULO - USP%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Irmandade Santa Casa de Misericórdia de São Paulo 
UPDATE residency_programs
SET 
    exam_type_id = '9bcf8ed3-be99-4598-9e14-b11d60c140de',  -- SCMSP
    exam_price = 680,
    last_exam_date = '2025-12-06',
    has_second_phase = true,
    second_phase_date = '2026-01-13'
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%IRMANDADE SANTA CASA DE MISERICÓRDIA DE SÃO PAULO%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo
UPDATE residency_programs
SET 
    exam_type_id = 'bdc522b8-3b86-48a2-b491-bf2edeca451f',  -- FMRP-USP
    exam_price = 620,
    last_exam_date = '2025-11-20',
    has_second_phase = true,
    second_phase_date = '2025-12-06'
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%FACULDADE DE MEDICINA DE RIBEIRÃO PRETO DA UNIVERSIDADE DE SÃO PAULO%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Universidade Estadual de Campinas
UPDATE residency_programs
SET 
    exam_type_id = '97ef8c0f-3c5a-41aa-b5c2-227616c06725',  -- Unicamp
    exam_price = 630,
    last_exam_date = '2025-11-16',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%UNIVERSIDADE ESTADUAL DE CAMPINAS%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Faculdade de Medicina de Marília
UPDATE residency_programs
SET 
    exam_type_id = '9a98c841-134b-4155-80e9-90f911a9d6d9',  -- FAMEMA
    exam_price = 300,
    last_exam_date = '2025-12-08',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%FACULDADE DE MEDICINA DE MARÍLIA%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Instituto de Assistência Médica ao Servidor Público Estadual
UPDATE residency_programs
SET 
    exam_type_id = '9a358c7e-1e60-42e8-ad1b-d9486bb2230d',  -- IAMSPE
    exam_price = 500,
    last_exam_date = '2025-12-15',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%INSTITUTO DE ASSISTÊNCIA MÉDICA AO SERVIDOR PÚBLICO ESTADUAL%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Faculdade de Medicina do ABC
UPDATE residency_programs
SET 
    exam_type_id = 'eddb9c37-52e8-4428-8262-8429579a6688',  -- FMABC
    exam_price = 650,
    last_exam_date = '2025-12-13',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%FACULDADE DE MEDICINA DO ABC%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Pontifícia Universidade Católica de São Paulo
UPDATE residency_programs
SET 
    exam_type_id = '1a6027a2-2db5-4712-8756-db3686268f21',  -- PUC-SP
    exam_price = 800,
    last_exam_date = '2025-11-16',
    has_second_phase = true,
    second_phase_date = '2025-12-09'
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%PONTIFÍCIA UNIVERSIDADE CATÓLICA DE SÃO PAULO%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Sírio-Libanês
UPDATE residency_programs
SET 
    exam_type_id = '2fdb38c0-edb1-4d84-a6ad-1aecbb2bb090',  -- HSL
    exam_price = 600,
    last_exam_date = '2025-11-22',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%SÍRIO-LIBANÊS%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Faculdade de Medicina de Jundiai
UPDATE residency_programs
SET 
    exam_type_id = '6bd561ea-5128-48ed-a433-e45bf88da2ea',  -- FMJ
    exam_price = 600,
    last_exam_date = '2025-12-10',
    has_second_phase = true,
    second_phase_date = '2026-01-07'
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%FACULDADE DE MEDICINA DE JUNDIAI%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Hospital Oftalmológico de Sorocaba
UPDATE residency_programs
SET 
    exam_type_id = 'b039cf6f-170c-4fe4-85fc-26ba3f873b75',  -- HOS/BOS
    exam_price = 620,
    last_exam_date = '2025-10-26',
    has_second_phase = true,
    second_phase_date = '2025-12-04'
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL OFTALMOLÓGICO DE SOROCABA%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Hospital Regional de Presidente Prudente
UPDATE residency_programs
SET 
    exam_type_id = '607e6d2e-4983-4e99-990c-5b65dad1aa4f',  -- HRPP
    exam_price = 755,
    last_exam_date = '2025-11-30',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%HOSPITAL REGIONAL DE PRESIDENTE PRUDENTE%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Santa Casa de Misericórdia de Ribeirão Preto
UPDATE residency_programs
SET 
    exam_type_id = '1ffb23c3-46ce-474b-b948-14b5928b40dc',  -- SCMRP
    exam_price = 700,
    last_exam_date = '2025-11-23',
    has_second_phase = false,
    second_phase_date = NULL
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%SANTA CASA DE MISERICÓRDIA DE RIBEIRÃO PRETO%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Update for: Universidade Federal de São Paulo - USP
UPDATE residency_programs
SET 
    exam_type_id = '341ac19b-41b5-4703-844e-4ebc1a27fd6b',  -- UNIFESP
    exam_price = 660,
    last_exam_date = '2025-11-30',
    has_second_phase = true,
    second_phase_date = '2026-01-09'
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%UNIVERSIDADE FEDERAL DE SÃO PAULO - USP%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);


-- Total corrections: 37