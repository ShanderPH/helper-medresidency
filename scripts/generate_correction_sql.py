import pandas as pd
import json
from pathlib import Path
from datetime import datetime

# Read the Excel file
excel_path = Path(__file__).parent.parent / "docs" / "residency-exam-data.xlsx"
df = pd.read_excel(excel_path)

# Exam type mapping from database
exam_types_db = {
    "Enare": "d0108456-dffa-4647-9bb8-3db6d5e3b115",
    "FAMEMA": "9a98c841-134b-4155-80e9-90f911a9d6d9",
    "FMABC": "eddb9c37-52e8-4428-8262-8429579a6688",
    "FMJ": "6bd561ea-5128-48ed-a433-e45bf88da2ea",
    "FMRP-USP": "bdc522b8-3b86-48a2-b491-bf2edeca451f",
    "HOS/BOS": "b039cf6f-170c-4fe4-85fc-26ba3f873b75",
    "HRPP": "607e6d2e-4983-4e99-990c-5b65dad1aa4f",
    "HSL": "2fdb38c0-edb1-4d84-a6ad-1aecbb2bb090",
    "IAMSPE": "9a358c7e-1e60-42e8-ad1b-d9486bb2230d",
    "PUC-SP": "1a6027a2-2db5-4712-8756-db3686268f21",
    "SCMRP": "1ffb23c3-46ce-474b-b948-14b5928b40dc",
    "SCMSP": "9bcf8ed3-be99-4598-9e14-b11d60c140de",
    "SUS-SP": "ca2a57ea-09f6-4f4f-8bfa-55294d736f9d",
    "Unicamp": "97ef8c0f-3c5a-41aa-b5c2-227616c06725",
    "UNIFESP": "341ac19b-41b5-4703-844e-4ebc1a27fd6b",
    "USP-SP": "0569aa88-abb5-4172-8db3-18d318883ebf"
}

# Normalize institution names for matching
def normalize_name(name):
    if pd.isna(name):
        return ""
    name = str(name).strip().upper()
    # Remove extra spaces
    name = ' '.join(name.split())
    return name

# Create normalized mapping
df['normalized_inst'] = df['instituicao'].apply(normalize_name)

# Institution name mapping (Excel -> Database)
institution_mapping = {
    "COMPLEXO HOSPITALAR DA UFC/EBSERH": "COMPLEXO HOSPITALAR DA UFC/EBSERH",
    "HOSPITAL GERAL DE FORTALEZA (HGF)": "Hospital Geral de Fortaleza (HGF)",
    "HOSPITAL DAS FORÇAS ARMADAS": "HOSPITAL DAS FORÇAS ARMADAS",
    "ISMEP- INSTITUTO SANTA MARTA DE ENSINO E PESQUISA": "ISMEP- INSTITUTO SANTA MARTA DE ENSINO E PESQUISA",
    "HOSPITAL UNIVERSITÁRIO DE BRASÍLIA – UNB": "HOSPITAL UNIVERSITÁRIO DE BRASÍLIA – UnB",
    "HOSPITAL UNIVERSITÁRIO JÚLIO MULLER": "HOSPITAL UNIVERSITÁRIO JÚLIO MULLER",
    "CAIXA DE ASSISTÊNCIA DOS SERVIDORES DO ESTADO DE MATO GROSSO DO SUL": "Caixa de Assistência dos Servidores do Estado de Mato Grosso do Sul",
    "HC DA UNIVERSIDADE FEDERAL DE MINAS GERAIS": "HC DA UNIVERSIDADE FEDERAL DE MINAS GERAIS",
    "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE JUIZ DE FORA": "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE JUIZ DE FORA",
    "UNIVERSIDADE ESTADUAL DE MONTES CLAROS – UNIMONTES": "UNIVERSIDADE ESTADUAL DE MONTES CLAROS – UNIMONTES",
    "UNIVERSIDADE FEDERAL DE UBERLÂNDIA – UFU": "UNIVERSIDADE FEDERAL DE UBERLÂNDIA – UFU",
    "COMPLEXO DO HOSPITAL DE CLINICAS DA UFPR": "COMPLEXO DO HOSPITAL DE CLINICAS DA UFPR",
    "HC PROFESSOR ROMERO MARQUES – UNIVERSIDADE FEDERAL DE PERNAMBUCO": "HC PROFESSOR ROMERO MARQUES – UNIVERSIDADE FEDERAL DE PERNAMBUCO",
    "HU ANTONIO PEDRO – UNIVERSIDADE FEDERAL FLUMINENSE": "HU ANTONIO PEDRO – UNIVERSIDADE FEDERAL FLUMINENSE",
    "HOSPITAL CENTRAL DA POLÍCIA MILITAR DO ESTADO DO RIO DE JANEIRO": "HOSPITAL CENTRAL DA POLÍCIA MILITAR DO ESTADO DO RIO DE JANEIRO",
    "HOSPITAL FEDERAL DA LAGOA": "HOSPITAL FEDERAL DA LAGOA",
    "HOSPITAL FEDERAL DE BONSUCESSO": "HOSPITAL FEDERAL DE BONSUCESSO",
    "HOSPITAL FEDERAL DO ANDARAI": "HOSPITAL FEDERAL DO ANDARAI",
    "HOSPITAL FEDERAL DOS SERVIDORES DO ESTADO": "HOSPITAL FEDERAL DOS SERVIDORES DO ESTADO",
    "HOSPITAL UNIVERSITÁRIO GAFFRÉE E GUINLE – UNIRIO": "HOSPITAL UNIVERSITÁRIO GAFFRÉE E GUINLE – UNIRIO",
    "HOSPITAL UNIVERSITÁRIO ONOFRE LOPES": "HC DA UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE",
    "UNIVERSIDADE FEDERAL DE SERGIPE": "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE SERGIPE",
    "SUS-SP": "INSTITUTO DE ASSISTÊNCIA MÉDICA AO SERVIDOR PÚBLICO ESTADUAL – IAMSPE",
    "UNIVERSIDADE FEDERAL DE SÃO PAULO - USP": "UNIVERSIDADE DE SÃO PAULO - CAPITAL",
    "IRMANDADE SANTA CASA DE MISERICÓRDIA DE SÃO PAULO": "IRMANDADE DA SANTA CASA DE MISERICÓRDIA DE SÃO PAULO",
    "FACULDADE DE MEDICINA DE RIBEIRÃO PRETO DA UNIVERSIDADE DE SÃO PAULO": "UNIVERSIDADE DE SÃO PAULO - FACULDADE DE MEDICINA DE RIBEIRÃO PRETO",
    "UNIVERSIDADE ESTADUAL DE CAMPINAS": "UNIVERSIDADE ESTADUAL DE CAMPINAS",
    "FACULDADE DE MEDICINA DE MARÍLIA": "HOSPITAL CENTRAL DA POLÍCIA MILITAR DO ESTADO DO RIO DE JANEIRO",
    "INSTITUTO DE ASSISTÊNCIA MÉDICA AO SERVIDOR PÚBLICO ESTADUAL": "INSTITUTO DE ASSISTÊNCIA MÉDICA AO SERVIDOR PÚBLICO ESTADUAL – IAMSPE",
    "FACULDADE DE MEDICINA DO ABC": "FUNDAÇÃO ABC",
    "PONTIFÍCIA UNIVERSIDADE CATÓLICA DE SÃO PAULO": "PONTIFÍCIA UNIVERSIDADE CATÓLICA DE SÃO PAULO",
    "SÍRIO-LIBANÊS": "HOSPITAL SÍRIO-LIBANÊS",
    "FACULDADE DE MEDICINA DE JUNDIAI": "FACULDADE DE MEDICINA DE JUNDIAÍ",
    "HOSPITAL OFTALMOLÓGICO DE SOROCABA": "HOSPITAL OSVALDO CRUZ – BH/IPSEMG",
    "HOSPITAL REGIONAL DE PRESIDENTE PRUDENTE": "HOSPITAL REGIONAL DE PRESIDENTE PRUDENTE – UNESP",
    "SANTA CASA DE MISERICÓRDIA DE RIBEIRÃO PRETO": "IRMANDADE DA SANTA CASA DE MISERICÓRDIA – RIBEIRÃO PRETO",
    "UNIVERSIDADE FEDERAL DE SÃO PAULO - USP": "UNIVERSIDADE FEDERAL DE SÃO PAULO – UNIFESP"
}

# Generate SQL updates
sql_statements = []
sql_statements.append("-- SQL Script to correct exam types, prices, and dates in residency_programs table")
sql_statements.append("-- Generated at: " + datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
sql_statements.append("")

print("\n" + "="*80)
print("GENERATING CORRECTION SQL")
print("="*80)

corrections_made = 0
for idx, row in df.iterrows():
    inst_name_excel = normalize_name(row['instituicao'])
    exam_type = row['exame_acesso']
    exam_price = row['exam_price']
    
    # Convert timestamp to date
    last_exam_ts = row['last_exam_date']
    if pd.notna(last_exam_ts):
        last_exam_date = pd.to_datetime(last_exam_ts, unit='ms').strftime('%Y-%m-%d')
    else:
        last_exam_date = None
    
    has_second_phase = row['has_second_phase']
    second_phase_ts = row.get('second_phase_date')
    if pd.notna(second_phase_ts):
        second_phase_date = pd.to_datetime(second_phase_ts, unit='ms').strftime('%Y-%m-%d')
    else:
        second_phase_date = None
    
    # Get exam type ID
    exam_type_id = exam_types_db.get(exam_type)
    
    if not exam_type_id:
        print(f"⚠️  Warning: Exam type '{exam_type}' not found in database")
        continue
    
    # Build SQL UPDATE statement
    sql = f"""
-- Update for: {row['instituicao']}
UPDATE residency_programs
SET 
    exam_type_id = '{exam_type_id}',  -- {exam_type}
    exam_price = {exam_price},
    last_exam_date = '{last_exam_date}',
    has_second_phase = {str(has_second_phase).lower()}"""
    
    if second_phase_date:
        sql += f",\n    second_phase_date = '{second_phase_date}'"
    else:
        sql += ",\n    second_phase_date = NULL"
    
    sql += f"""
WHERE institution_id IN (
    SELECT id FROM institutions WHERE UPPER(name) LIKE '%{inst_name_excel.replace("'", "''")}%'
)
AND specialty_id IN (
    SELECT id FROM specialties WHERE UPPER(name) = 'OTORRINOLARINGOLOGIA'
);
"""
    
    sql_statements.append(sql)
    corrections_made += 1
    print(f"✓ {corrections_made}. {row['instituicao']} -> {exam_type} (R$ {exam_price})")

sql_statements.append(f"\n-- Total corrections: {corrections_made}")

# Save to file
output_file = Path(__file__).parent / "correct_exam_data.sql"
with open(output_file, 'w', encoding='utf-8') as f:
    f.write('\n'.join(sql_statements))

print("\n" + "="*80)
print(f"SQL script generated: {output_file}")
print(f"Total corrections: {corrections_made}")
print("="*80)
