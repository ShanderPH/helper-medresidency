import pandas as pd
import json

# Read Excel file
df = pd.read_excel('docs/residency-exam-data.xlsx')

# Extract unique values
states = df[['uf']].drop_duplicates().dropna().sort_values('uf')
exam_types = df[['exame_acesso']].drop_duplicates().dropna().sort_values('exame_acesso')
specialties = df[['especialidade']].drop_duplicates().dropna()

# Normalize specialty names (remove tabs and extra spaces)
specialties['especialidade_normalized'] = specialties['especialidade'].str.replace('\t', ' ').str.strip().str.upper()
specialties = specialties.drop_duplicates(subset=['especialidade_normalized']).sort_values('especialidade_normalized')

# Process institutions
institutions = df[['instituicao', 'uf']].drop_duplicates()
institutions['instituicao_normalized'] = institutions['instituicao'].str.replace('\t', ' ').str.strip().str.upper()
institutions = institutions.sort_values('instituicao')

# Create output structure
output = {
    'states': states['uf'].tolist(),
    'exam_types': exam_types['exame_acesso'].tolist(),
    'specialties': specialties[['especialidade', 'especialidade_normalized']].to_dict('records'),
    'institutions': institutions[['instituicao', 'instituicao_normalized', 'uf']].to_dict('records'),
    'raw_data': []
}

# Process each row
for _, row in df.iterrows():
    output['raw_data'].append({
        'instituicao': row['instituicao'].replace('\t', ' ').strip() if pd.notna(row['instituicao']) else None,
        'exame_acesso': row['exame_acesso'] if pd.notna(row['exame_acesso']) else None,
        'uf': row['uf'] if pd.notna(row['uf']) else None,
        'especialidade': row['especialidade'].replace('\t', ' ').strip() if pd.notna(row['especialidade']) else None,
        'nota_corte_2025': float(row['nota_corte_2025']) if pd.notna(row['nota_corte_2025']) else None,
        'nota_corte_2024': float(row['nota_corte_2024']) if pd.notna(row['nota_corte_2024']) else None,
        'nota_corte_2023': float(row['nota_corte_2023']) if pd.notna(row['nota_corte_2023']) else None,
        'nota_corte_2022': float(row['nota_corte_2022']) if pd.notna(row['nota_corte_2022']) else None,
        'exam_price': int(row['exam_price']) if pd.notna(row['exam_price']) else None,
        'last_exam_date': str(row['last_exam_date'].date()) if pd.notna(row['last_exam_date']) else None,
        'has_second_phase': bool(row['has_second_phase']) if pd.notna(row['has_second_phase']) else False,
        'second_phase_date': str(row['second_phase_date'].date()) if pd.notna(row['second_phase_date']) else None
    })

# Save to JSON file
with open('docs/processed-residency-data.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"Total states: {len(output['states'])}")
print(f"Total exam types: {len(output['exam_types'])}")
print(f"Total specialties: {len(output['specialties'])}")
print(f"Total institutions: {len(output['institutions'])}")
print(f"Total records: {len(output['raw_data'])}")
print("\nData processed successfully!")
