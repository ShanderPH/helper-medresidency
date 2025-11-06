import pandas as pd
import json
from pathlib import Path

# Read the Excel file
excel_path = Path(__file__).parent.parent / "docs" / "residency-exam-data.xlsx"
df = pd.read_excel(excel_path)

# Display basic information
print("=" * 80)
print("EXCEL FILE ANALYSIS")
print("=" * 80)
print(f"\nTotal rows: {len(df)}")
print(f"\nColumns: {df.columns.tolist()}")
print("\n" + "=" * 80)
print("FIRST 10 ROWS")
print("=" * 80)
print(df.head(10).to_string())

print("\n" + "=" * 80)
print("EXAM TYPES DISTRIBUTION")
print("=" * 80)
if 'Tipo de Exame' in df.columns:
    exam_types = df['Tipo de Exame'].value_counts()
    print(exam_types)
elif 'exam_type' in df.columns:
    exam_types = df['exam_type'].value_counts()
    print(exam_types)

print("\n" + "=" * 80)
print("UNIQUE INSTITUTIONS")
print("=" * 80)
if 'Instituição' in df.columns:
    institutions = df['Instituição'].unique()
    print(f"Total: {len(institutions)}")
    for inst in sorted(institutions):
        print(f"  - {inst}")
elif 'institution' in df.columns:
    institutions = df['institution'].unique()
    print(f"Total: {len(institutions)}")
    for inst in sorted(institutions):
        print(f"  - {inst}")

print("\n" + "=" * 80)
print("EXAM PRICES")
print("=" * 80)
price_col = None
for col in ['Preço do Exame', 'exam_price', 'price', 'Preço']:
    if col in df.columns:
        price_col = col
        break

if price_col:
    print(f"Price column: {price_col}")
    print(df[price_col].describe())
    print("\nUnique prices:")
    print(sorted(df[price_col].dropna().unique()))

# Export to JSON for easier analysis
output_json = Path(__file__).parent.parent / "docs" / "residency-data-from-excel.json"
df.to_json(output_json, orient='records', force_ascii=False, indent=2)
print(f"\n\nData exported to: {output_json}")
