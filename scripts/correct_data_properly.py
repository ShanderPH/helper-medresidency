"""
Script para mapear corretamente os dados do arquivo de texto
"""

# MAPEAMENTO CORRETO DOS DADOS
correct_data = [
    # ENARE - 22 instituições
    {"inst": "COMPLEXO HOSPITALAR DA UFC/EBSERH", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "Hospital Geral de Fortaleza (HGF)", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HOSPITAL DAS FORÇAS ARMADAS", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "ISMEP- INSTITUTO SANTA MARTA DE ENSINO E PESQUISA", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HOSPITAL UNIVERSITÁRIO DE BRASÍLIA – UnB", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HOSPITAL UNIVERSITÁRIO JÚLIO MULLER", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "Caixa de Assistência dos Servidores do Estado de Mato Grosso do Sul", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HC DA UNIVERSIDADE FEDERAL DE MINAS GERAIS", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE JUIZ DE FORA", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "UNIVERSIDADE ESTADUAL DE MONTES CLAROS – UNIMONTES", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "UNIVERSIDADE FEDERAL DE UBERLÂNDIA – UFU", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "COMPLEXO DO HOSPITAL DE CLINICAS DA UFPR", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HC PROFESSOR ROMERO MARQUES – UNIVERSIDADE FEDERAL DE PERNAMBUCO", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HU ANTONIO PEDRO – UNIVERSIDADE FEDERAL FLUMINENSE", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HOSPITAL CENTRAL DA POLÍCIA MILITAR DO ESTADO DO RIO DE JANEIRO", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HOSPITAL FEDERAL DA LAGOA", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HOSPITAL FEDERAL DE BONSUCESSO", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HOSPITAL FEDERAL DO ANDARAI", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HOSPITAL FEDERAL DOS SERVIDORES DO ESTADO", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HOSPITAL UNIVERSITÁRIO GAFFRÉE E GUINLE – UNIRIO", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "HOSPITAL UNIVERSITÁRIO ONOFRE LOPES", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    {"inst": "UNIVERSIDADE FEDERAL DE SERGIPE", "exam": "Enare", "price": 330, "date": "2025-10-19", "second_phase": False},
    
    # SÃO PAULO - Exames próprios (15 instituições)
    {"inst": "SUS-SP", "exam": "SUS-SP", "price": 120, "date": "2025-12-14", "second_phase": False},
    {"inst": "UNIVERSIDADE FEDERAL DE SÃO PAULO - USP", "exam": "USP-SP", "price": 620, "date": "2025-11-23", "second_phase": True, "second_date": "2025-12-14"},
    {"inst": "Irmandade Santa Casa de Misericórdia de São Paulo", "exam": "SCMSP", "price": 680, "date": "2025-12-06", "second_phase": True, "second_date": "2026-01-13"},
    {"inst": "Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo", "exam": "FMRP-USP", "price": 620, "date": "2025-11-20", "second_phase": True, "second_date": "2025-12-06"},
    {"inst": "Universidade Estadual de Campinas", "exam": "Unicamp", "price": 630, "date": "2025-11-16", "second_phase": False},
    {"inst": "Faculdade de Medicina de Marília", "exam": "FAMEMA", "price": 300, "date": "2025-12-08", "second_phase": False},
    {"inst": "Instituto de Assistência Médica ao Servidor Público Estadual", "exam": "IAMSPE", "price": 500, "date": "2025-12-15", "second_phase": False},
    {"inst": "Faculdade de Medicina do ABC", "exam": "FMABC", "price": 650, "date": "2025-12-13", "second_phase": False},
    {"inst": "Pontifícia Universidade Católica de São Paulo", "exam": "PUC-SP", "price": 800, "date": "2025-11-16", "second_phase": True, "second_date": "2025-12-09"},
    {"inst": "Sírio-Libanês", "exam": "HSL", "price": 600, "date": "2025-11-22", "second_phase": False},
    {"inst": "Faculdade de Medicina de Jundiai", "exam": "FMJ", "price": 600, "date": "2025-12-10", "second_phase": True, "second_date": "2026-01-07"},
    {"inst": "Hospital Oftalmológico de Sorocaba", "exam": "HOS/BOS", "price": 620, "date": "2025-10-26", "second_phase": True, "second_date": "2025-12-04"},
    {"inst": "Hospital Regional de Presidente Prudente", "exam": "HRPP", "price": 755, "date": "2025-11-30", "second_phase": False},
    {"inst": "Santa Casa de Misericórdia de Ribeirão Preto", "exam": "SCMRP", "price": 700, "date": "2025-11-23", "second_phase": False},
    {"inst": "Universidade Federal de São Paulo - UNIFESP", "exam": "UNIFESP", "price": 660, "date": "2025-11-30", "second_phase": True, "second_date": "2026-01-09"},
]

print("=" * 100)
print("DADOS CORRETOS - TOTAL: 37 INSTITUIÇÕES")
print("=" * 100)

print(f"\nENARE: 22 instituições (preço R$ 330)")
print(f"Exames próprios SP: 15 instituições\n")

print("RESUMO POR TIPO DE EXAME:")
print("-" * 100)

exam_types = {}
for item in correct_data:
    exam = item["exam"]
    if exam not in exam_types:
        exam_types[exam] = []
    exam_types[exam].append(item)

for exam, items in sorted(exam_types.items()):
    print(f"\n{exam}: {len(items)} instituição(ões)")
    for item in items:
        second = f" + 2ª fase" if item.get("second_phase") else ""
        print(f"  - {item['inst']:70} R$ {item['price']:>6.2f}{second}")

print("\n" + "=" * 100)
print("DIFERENÇA CRÍTICA:")
print("=" * 100)
print("❌ SUS-SP ≠ IAMSPE - São INSTITUIÇÕES DIFERENTES!")
print("❌ 'UNIVERSIDADE FEDERAL DE SÃO PAULO - USP' (USP-SP) ≠ 'Universidade Federal de São Paulo - UNIFESP' (UNIFESP)")
print("\n" + "=" * 100)
