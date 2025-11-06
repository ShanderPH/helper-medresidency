import json

# Read processed data
with open('docs/processed-residency-data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# State mapping
state_mapping = {
    'Ceará': 'CE', 'Brasília': 'DF', 'Mato Grosso': 'MT',
    'Mato Grosso do Sul': 'MS', 'Minas Gerais': 'MG', 'Paraná': 'PR',
    'Pernambuco': 'PE', 'Rio Grande do Norte': 'RN', 'Rio de Janeiro': 'RJ',
    'Sergipe': 'SE', 'São Paulo': 'SP'
}

print("-- Insert residency programs and cutoff scores")
print()

for idx, record in enumerate(data['raw_data'], 1):
    inst_name = record['instituicao'].replace("'", "''")
    exam_name = record['exame_acesso'].replace("'", "''") if record['exame_acesso'] else 'Enare'
    specialty_name = 'Otorrinolaringologia'
    state_code = state_mapping.get(record['uf'])
    
    exam_price = record['exam_price'] if record['exam_price'] else 'NULL'
    last_exam_date = f"'{record['last_exam_date']}'" if record['last_exam_date'] else 'NULL'
    has_second_phase = 'true' if record['has_second_phase'] else 'false'
    second_phase_date = f"'{record['second_phase_date']}'" if record['second_phase_date'] else 'NULL'
    
    # Insert residency program
    print(f"-- Record {idx}")
    print("WITH ")
    print(f"  inst AS (SELECT id FROM institutions WHERE name = '{inst_name}' AND state_id = (SELECT id FROM states WHERE code = '{state_code}')),")
    print(f"  spec AS (SELECT id FROM specialties WHERE name = '{specialty_name}'),")
    print(f"  exam AS (SELECT id FROM exam_types WHERE name = '{exam_name}'),")
    print("  prog AS (")
    print("    INSERT INTO residency_programs (institution_id, specialty_id, exam_type_id, exam_price, last_exam_date, has_second_phase, second_phase_date)")
    print(f"    VALUES ((SELECT id FROM inst), (SELECT id FROM spec), (SELECT id FROM exam), {exam_price}, {last_exam_date}, {has_second_phase}, {second_phase_date})")
    print("    ON CONFLICT (institution_id, specialty_id, exam_type_id) DO UPDATE")
    print(f"    SET exam_price = {exam_price}, last_exam_date = {last_exam_date}, has_second_phase = {has_second_phase}, second_phase_date = {second_phase_date}")
    print("    RETURNING id")
    print("  )")
    
    # Insert cutoff scores
    scores = []
    if record['nota_corte_2022']:
        scores.append((2022, record['nota_corte_2022']))
    if record['nota_corte_2023']:
        scores.append((2023, record['nota_corte_2023']))
    if record['nota_corte_2024']:
        scores.append((2024, record['nota_corte_2024']))
    if record['nota_corte_2025']:
        scores.append((2025, record['nota_corte_2025']))
    
    if scores:
        print("INSERT INTO cutoff_scores (residency_program_id, year, score)")
        print("SELECT (SELECT id FROM prog), year, score FROM (VALUES")
        score_values = [f"  ({year}, {score})" for year, score in scores]
        print(",\n".join(score_values))
        print(") AS t(year, score)")
        print("ON CONFLICT (residency_program_id, year) DO UPDATE SET score = EXCLUDED.score;")
    
    print()
