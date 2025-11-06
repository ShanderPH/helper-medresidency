import pandas as pd
from pathlib import Path

# Read Excel data
excel_path = Path(__file__).parent.parent / "docs" / "residency-exam-data.xlsx"
df = pd.read_excel(excel_path)

# Expected data from Excel
print("=" * 80)
print("EXPECTED DATA FROM EXCEL - NON-ENARE EXAMS")
print("=" * 80)

non_enare = df[df['exame_acesso'] != 'Enare']
for idx, row in non_enare.iterrows():
    print(f"\n{row['exame_acesso']:12} | {row['instituicao']:60} | R$ {row['exam_price']:6.0f}")

print("\n" + "=" * 80)
print("INSTITUTIONS THAT NEED UPDATES")
print("=" * 80)

# Map based on actual database names we saw
updates_needed = {
    "INSTITUTO DE ASSISTÊNCIA MÉDICA AO SERVIDOR PÚBLICO ESTADUAL – IAMSPE": {
        "exam_type": "SUS-SP",  # According to Excel, SUS-SP is the exam type
        "price": 120,
        "date": "2025-12-14"
    },
    "UNIVERSIDADE DE SÃO PAULO - CAPITAL": {
        "exam_type": "USP-SP",
        "price": 620,
        "date": "2025-11-23"
    },
    "IRMANDADE DA SANTA CASA DE MISERICÓRDIA DE SÃO PAULO": {
        "exam_type": "SCMSP",
        "price": 680,
        "date": "2025-12-06"
    },
    "UNIVERSIDADE DE SÃO PAULO - FACULDADE DE MEDICINA DE RIBEIRÃO PRETO": {
        "exam_type": "FMRP-USP",
        "price": 620,
        "date": "2025-11-20"
    },
    "FACULDADE DE MEDICINA DE JUNDIAÍ": {
        "exam_type": "FMJ",
        "price": 600,
        "date": "2025-12-10"
    },
    "FUNDAÇÃO ABC": {
        "exam_type": "FMABC",
        "price": 650,
        "date": "2025-12-13"
    },
    "HOSPITAL OSVALDO CRUZ – BH/IPSEMG": {
        "exam_type": "HOS/BOS",
        "price": 620,
        "date": "2025-10-26"
    },
    "IRMANDADE DA SANTA CASA DE MISERICÓRDIA – RIBEIRÃO PRETO": {
        "exam_type": "SCMRP",
        "price": 700,
        "date": "2025-11-23"
    },
    "UNIVERSIDADE FEDERAL DE SÃO PAULO – UNIFESP": {
        "exam_type": "UNIFESP",
        "price": 660,
        "date": "2025-11-30"
    }
}

for inst, data in updates_needed.items():
    print(f"\n{inst}")
    print(f"  → Exam: {data['exam_type']}, Price: R$ {data['price']}, Date: {data['date']}")

print("\n" + "=" * 80)
