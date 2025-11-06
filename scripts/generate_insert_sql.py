import json

# Read processed data
with open('docs/processed-residency-data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# State mapping (state name to code)
state_mapping = {
    'Ceará': 'CE',
    'Brasília': 'DF',
    'Mato Grosso': 'MT',
    'Mato Grosso do Sul': 'MS',
    'Minas Gerais': 'MG',
    'Paraná': 'PR',
    'Pernambuco': 'PE',
    'Rio Grande do Norte': 'RN',
    'Rio de Janeiro': 'RJ',
    'Sergipe': 'SE',
    'São Paulo': 'SP'
}

# Generate SQL for institutions
print("-- Insert institutions")
print("WITH state_lookup AS (")
print("  SELECT id, code FROM states")
print(")")
print("INSERT INTO institutions (name, normalized_name, state_id) VALUES")

institutions_sql = []
for inst in data['institutions']:
    name = inst['instituicao'].replace("'", "''")
    normalized = inst['instituicao_normalized'].replace("'", "''")
    state_code = state_mapping.get(inst['uf'])
    
    institutions_sql.append(
        f"('{name}', '{normalized}', (SELECT id FROM state_lookup WHERE code = '{state_code}'))"
    )

print(",\n".join(institutions_sql))
print("ON CONFLICT (name, state_id) DO NOTHING;\n")
