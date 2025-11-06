"""
Análise completa e geração de SQL para corrigir TODOS os dados do banco
comparando com o arquivo residency-data.md
"""

# DADOS DO ARQUIVO residency-data.md (38 programas)
file_data = {
    "COMPLEXO HOSPITALAR DA UFC/EBSERH": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 766.1}
    },
    "Hospital Geral de Fortaleza (HGF)": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 758.9}
    },
    "HOSPITAL DAS FORÇAS ARMADAS": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 790.0, 2024: 848.0, 2023: 814.0, 2022: 786.5}
    },
    "ISMEP- INSTITUTO SANTA MARTA DE ENSINO E PESQUISA": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2024: 818.0}
    },
    "HOSPITAL UNIVERSITÁRIO DE BRASÍLIA – UnB": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 805.0, 2024: 887.5, 2023: 831.3}
    },
    "HOSPITAL UNIVERSITÁRIO JÚLIO MULLER": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 765.0, 2024: 830.0}
    },
    "Caixa de Assistência dos Servidores do Estado de Mato Grosso do Sul": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 752.7}
    },
    "HC DA UNIVERSIDADE FEDERAL DE MINAS GERAIS": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 818.5, 2024: 908.0, 2023: 874.0, 2022: 903.1}
    },
    "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE JUIZ DE FORA": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 776.8, 2024: 867.5, 2023: 810.0, 2022: 837.1}
    },
    "UNIVERSIDADE ESTADUAL DE MONTES CLAROS – UNIMONTES": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 751.7, 2024: 845.0, 2023: 797.0, 2022: 792.0}
    },
    "UNIVERSIDADE FEDERAL DE UBERLÂNDIA – UFU": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 792.66}
    },
    "COMPLEXO DO HOSPITAL DE CLINICAS DA UFPR": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 795.5, 2024: 869.5, 2023: 822.0}
    },
    "HC PROFESSOR ROMERO MARQUES – UNIVERSIDADE FEDERAL DE PERNAMBUCO": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 801.0, 2024: 872.0, 2023: 846.0, 2022: 798.0}
    },
    "HU ANTONIO PEDRO – UNIVERSIDADE FEDERAL FLUMINENSE": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 796.3, 2024: 850.0, 2023: 795.0, 2022: 786.5}
    },
    "HOSPITAL CENTRAL DA POLÍCIA MILITAR DO ESTADO DO RIO DE JANEIRO": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 742.8, 2024: 828.5, 2023: 797.0}
    },
    "HOSPITAL FEDERAL DA LAGOA": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 759.5, 2024: 836.0, 2023: 827.0, 2022: 804.0}
    },
    "HOSPITAL FEDERAL DE BONSUCESSO": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 746.3, 2024: 826.0, 2023: 780.0, 2022: 777.0}
    },
    "HOSPITAL FEDERAL DO ANDARAI": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 736.1, 2024: 813.0, 2023: 810.0, 2022: 778.0}
    },
    "HOSPITAL FEDERAL DOS SERVIDORES DO ESTADO": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 746.7, 2024: 834.5, 2023: 816.0, 2022: 803.0}
    },
    "HOSPITAL UNIVERSITÁRIO GAFFRÉE E GUINLE – UNIRIO": {
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 769.5, 2024: 831.0, 2023: 812.0, 2022: 791.0}
    },
    "HC DA UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE": {  # No arquivo: HOSPITAL UNIVERSITÁRIO ONOFRE LOPES
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 782.8, 2024: 845.0}
    },
    "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE SERGIPE": {  # No arquivo: UNIVERSIDADE FEDERAL DE SERGIPE
        "exam_type": "Enare", "price": 330, "date": "2025-10-19",
        "second_phase": False, "scores": {2025: 750.5, 2024: 825.0, 2023: 808.0, 2022: 792.0}
    },
    # SUS-SP NÃO ESTÁ NO BANCO
    "UNIVERSIDADE DE SÃO PAULO - CAPITAL": {  # No arquivo: UNIVERSIDADE FEDERAL DE SÃO PAULO - USP
        "exam_type": "USP-SP", "price": 620, "date": "2025-11-23",
        "second_phase": True, "second_date": "2025-12-14",
        "scores": {2025: 85.0, 2024: 92.0}
    },
    "IRMANDADE DA SANTA CASA DE MISERICÓRDIA DE SÃO PAULO": {  # No arquivo: Irmandade Santa Casa de Misericórdia de São Paulo
        "exam_type": "SCMSP", "price": 680, "date": "2025-12-06",
        "second_phase": True, "second_date": "2026-01-13",
        "scores": {2025: 86.5, 2024: 86.9}
    },
    "UNIVERSIDADE DE SÃO PAULO - FACULDADE DE MEDICINA DE RIBEIRÃO PRETO": {  # No arquivo: Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo
        "exam_type": "FMRP-USP", "price": 620, "date": "2025-11-20",
        "second_phase": True, "second_date": "2025-12-06",
        "scores": {2025: 8.05, 2024: 6.8}
    },
    "UNIVERSIDADE ESTADUAL DE CAMPINAS": {  # No arquivo: Universidade Estadual de Campinas
        "exam_type": "Unicamp", "price": 630, "date": "2025-11-16",
        "second_phase": False,
        "scores": {2025: 6.74, 2024: 7.78}
    },
    # Faculdade de Medicina de Marília (FAMEMA) NÃO ESTÁ NO BANCO
    "INSTITUTO DE ASSISTÊNCIA MÉDICA AO SERVIDOR PÚBLICO ESTADUAL – IAMSPE": {  # No arquivo: Instituto de Assistência Médica ao Servidor Público Estadual
        "exam_type": "IAMSPE", "price": 500, "date": "2025-12-15",
        "second_phase": False,
        "scores": {2025: 7.8, 2024: 7.5}
    },
    "FUNDAÇÃO ABC": {  # No arquivo: Faculdade de Medicina do ABC
        "exam_type": "FMABC", "price": 650, "date": "2025-12-13",
        "second_phase": False,
        "scores": {2025: 89.4, 2024: 69.8}
    },
    "PONTIFÍCIA UNIVERSIDADE CATÓLICA DE SÃO PAULO": {  # No arquivo: Pontifícia Universidade Católica de São Paulo
        "exam_type": "PUC-SP", "price": 800, "date": "2025-11-16",
        "second_phase": True, "second_date": "2025-12-09",
        "scores": {2025: 82.17, 2024: 81.652}
    },
    "HOSPITAL SÍRIO-LIBANÊS": {  # No arquivo: Sírio-Libanês
        "exam_type": "HSL", "price": 600, "date": "2025-11-22",
        "second_phase": False,
        "scores": {}  # Sem notas no arquivo
    },
    "FACULDADE DE MEDICINA DE JUNDIAÍ": {  # No arquivo: Faculdade de Medicina de Jundiai
        "exam_type": "FMJ", "price": 600, "date": "2025-12-10",
        "second_phase": True, "second_date": "2026-01-07",
        "scores": {2025: 8.21}
    },
    "HOSPITAL OSVALDO CRUZ – BH/IPSEMG": {  # No arquivo: Hospital Oftalmológico de Sorocaba
        "exam_type": "HOS/BOS", "price": 620, "date": "2025-10-26",
        "second_phase": True, "second_date": "2025-12-04",
        "scores": {2025: 64.16, 2024: 62.89}
    },
    "HOSPITAL REGIONAL DE PRESIDENTE PRUDENTE – UNESP": {  # No arquivo: Hospital Regional de Presidente Prudente
        "exam_type": "HRPP", "price": 755, "date": "2025-11-30",
        "second_phase": False,
        "scores": {2025: 76.0}
    },
    "IRMANDADE DA SANTA CASA DE MISERICÓRDIA – RIBEIRÃO PRETO": {  # No arquivo: Santa Casa de Misericórdia de Ribeirão Preto
        "exam_type": "SCMRP", "price": 700, "date": "2025-11-23",
        "second_phase": False,
        "scores": {2025: 84.0}
    },
    "UNIVERSIDADE FEDERAL DE SÃO PAULO – UNIFESP": {  # No arquivo: Universidade Federal de São Paulo - UNIFESP
        "exam_type": "UNIFESP", "price": 660, "date": "2025-11-30",
        "second_phase": True, "second_date": "2026-01-09",
        "scores": {2024: 76.0}  # Nota 2025 é null no arquivo
    },
}

# DADOS DO BANCO (do Supabase)
db_data = {
    "COMPLEXO HOSPITALAR DA UFC/EBSERH": {"price": 330, "date": "2025-10-19", "scores": {2025: 766.1}},
    "Hospital Geral de Fortaleza (HGF)": {"price": 330, "date": "2025-10-19", "scores": {2025: 758.9}},
    "HOSPITAL DAS FORÇAS ARMADAS": {"price": 330, "date": "2025-10-19", "scores": {2025: 790.0, 2024: 848.0, 2023: 814.0, 2022: 786.5}},
    "ISMEP- INSTITUTO SANTA MARTA DE ENSINO E PESQUISA": {"price": 330, "date": "2025-10-19", "scores": {2024: 818.0}},
    "HOSPITAL UNIVERSITÁRIO DE BRASÍLIA – UnB": {"price": 330, "date": "2025-10-19", "scores": {2025: 805.0, 2024: 887.5, 2023: 831.3}},
    "HOSPITAL UNIVERSITÁRIO JÚLIO MULLER": {"price": 330, "date": "2025-10-19", "scores": {2025: 765.0, 2024: 830.0}},
    "Caixa de Assistência dos Servidores do Estado de Mato Grosso do Sul": {"price": 330, "date": "2025-10-19", "scores": {2025: 752.7}},
    "HC DA UNIVERSIDADE FEDERAL DE MINAS GERAIS": {"price": 330, "date": "2025-10-19", "scores": {2025: 818.5, 2024: 908.0, 2023: 874.0, 2022: 903.1}},
    "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE JUIZ DE FORA": {"price": 330, "date": "2025-10-19", "scores": {2025: 776.8, 2024: 867.5, 2023: 810.0, 2022: 837.1}},
    "UNIVERSIDADE ESTADUAL DE MONTES CLAROS – UNIMONTES": {"price": 330, "date": "2025-10-19", "scores": {2025: 751.7, 2024: 845.0, 2023: 797.0, 2022: 792.0}},
    "UNIVERSIDADE FEDERAL DE UBERLÂNDIA – UFU": {"price": 330, "date": "2025-10-19", "scores": {2025: 792.66}},
    "COMPLEXO DO HOSPITAL DE CLINICAS DA UFPR": {"price": 330, "date": "2025-10-19", "scores": {2025: 795.5, 2024: 869.5, 2023: 822.0}},
    "HC PROFESSOR ROMERO MARQUES – UNIVERSIDADE FEDERAL DE PERNAMBUCO": {"price": 330, "date": "2025-10-19", "scores": {2025: 801.0, 2024: 872.0, 2023: 846.0, 2022: 798.0}},
    "HU ANTONIO PEDRO – UNIVERSIDADE FEDERAL FLUMINENSE": {"price": 330, "date": "2025-10-19", "scores": {2025: 796.3, 2024: 850.0, 2023: 795.0, 2022: 786.5}},
    "HOSPITAL CENTRAL DA POLÍCIA MILITAR DO ESTADO DO RIO DE JANEIRO": {"price": 330, "date": "2025-10-19", "scores": {2025: 742.8, 2024: 828.5, 2023: 797.0}},
    "HOSPITAL FEDERAL DA LAGOA": {"price": 330, "date": "2025-10-19", "scores": {2025: 759.5, 2024: 836.0, 2023: 827.0, 2022: 804.0}},
    "HOSPITAL FEDERAL DE BONSUCESSO": {"price": 330, "date": "2025-10-19", "scores": {2025: 746.3, 2024: 826.0, 2023: 780.0, 2022: 777.0}},
    "HOSPITAL FEDERAL DO ANDARAI": {"price": 330, "date": "2025-10-19", "scores": {2025: 736.1, 2024: 813.0, 2023: 810.0, 2022: 778.0}},
    "HOSPITAL FEDERAL DOS SERVIDORES DO ESTADO": {"price": 330, "date": "2025-10-19", "scores": {2025: 746.7, 2024: 834.5, 2023: 816.0, 2022: 803.0}},
    "HOSPITAL UNIVERSITÁRIO GAFFRÉE E GUINLE – UNIRIO": {"price": 330, "date": "2025-10-19", "scores": {2025: 769.5, 2024: 831.0, 2023: 812.0, 2022: 791.0}},
    "HC DA UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE": {"price": 330, "date": "2025-10-19", "scores": {2025: 766.1, 2024: 859.0, 2023: 821.0}},
    "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE SERGIPE": {"price": 330, "date": "2025-10-19", "scores": {2025: 752.2, 2024: 807.0, 2023: 766.0}},
    "UNIVERSIDADE DE SÃO PAULO - CAPITAL": {"price": 620, "date": "2025-11-23", "scores": {2025: 857.5, 2024: 935.0}},
    "IRMANDADE DA SANTA CASA DE MISERICÓRDIA DE SÃO PAULO": {"price": 680, "date": "2025-12-06", "scores": {2025: 781.5, 2024: 851.0}},
    "UNIVERSIDADE DE SÃO PAULO - FACULDADE DE MEDICINA DE RIBEIRÃO PRETO": {"price": 620, "date": "2025-11-20", "scores": {2025: 826.5, 2024: 903.0}},
    "UNIVERSIDADE ESTADUAL DE CAMPINAS": {"price": 630, "date": "2025-11-16", "scores": {2025: 823.0, 2024: 902.5}},
    "INSTITUTO DE ASSISTÊNCIA MÉDICA AO SERVIDOR PÚBLICO ESTADUAL – IAMSPE": {"price": 500, "date": "2025-12-15", "scores": {2025: 822.5, 2024: 898.0}},
    "FUNDAÇÃO ABC": {"price": 650, "date": "2025-12-13", "scores": {2025: 800.0, 2024: 879.5}},
    "PONTIFÍCIA UNIVERSIDADE CATÓLICA DE SÃO PAULO": {"price": 800, "date": "2025-11-16", "scores": {2025: 798.0, 2024: 900.5}},
    "HOSPITAL SÍRIO-LIBANÊS": {"price": 600, "date": "2025-11-22", "scores": {2025: 803.0, 2024: 901.5}},
    "FACULDADE DE MEDICINA DE JUNDIAÍ": {"price": 600, "date": "2025-12-10", "scores": {2025: 771.0, 2024: 839.0}},
    "HOSPITAL OSVALDO CRUZ – BH/IPSEMG": {"price": 620, "date": "2025-10-26", "scores": {2025: 794.0, 2024: 875.0}},
    "HOSPITAL REGIONAL DE PRESIDENTE PRUDENTE – UNESP": {"price": 755, "date": "2025-11-30", "scores": {2025: 754.0, 2024: 817.0}},
    "IRMANDADE DA SANTA CASA DE MISERICÓRDIA – RIBEIRÃO PRETO": {"price": 700, "date": "2025-11-23", "scores": {2025: 770.6, 2024: 842.0}},
    "UNIVERSIDADE FEDERAL DE SÃO PAULO – UNIFESP": {"price": 660, "date": "2025-11-30", "scores": {2025: 826.0, 2024: 913.0}},
    # Instituições que estão no banco mas não no arquivo:
    "FUNDAÇÃO FACULDADE DE MEDICINA": {"price": 360, "date": "2025-11-09", "scores": {2025: 792.0, 2024: 857.0}},
    "INSTITUTO NACIONAL DE CÂNCER – INCA": {"price": 330, "date": "2025-10-19", "scores": {2025: 750.0, 2024: 834.5, 2023: 791.0}},
}

print("=" * 120)
print("ANÁLISE COMPLETA: ARQUIVO vs BANCO DE DADOS")
print("=" * 120)

print("\n🔍 DISCREPÂNCIAS ENCONTRADAS:")
print("-" * 120)

discrepancies = []

for inst_name, file_info in file_data.items():
    if inst_name in db_data:
        db_info = db_data[inst_name]
        
        # Comparar preços
        if file_info["price"] != float(db_info["price"]):
            discrepancies.append(f"❌ {inst_name}: Preço DIFERENTE - Arquivo: R$ {file_info['price']}, DB: R$ {db_info['price']}")
        
        # Comparar datas
        if file_info["date"] != db_info["date"]:
            discrepancies.append(f"❌ {inst_name}: Data DIFERENTE - Arquivo: {file_info['date']}, DB: {db_info['date']}")
        
        # Comparar notas de corte
        file_scores = file_info.get("scores", {})
        db_scores = db_info.get("scores", {})
        
        for year in set(list(file_scores.keys()) + list(db_scores.keys())):
            file_score = file_scores.get(year)
            db_score = db_scores.get(year)
            
            if file_score is not None and db_score is not None:
                if abs(float(file_score) - float(db_score)) > 0.01:
                    discrepancies.append(f"❌ {inst_name}: Nota {year} DIFERENTE - Arquivo: {file_score}, DB: {db_score}")
            elif file_score is not None and db_score is None:
                discrepancies.append(f"⚠️  {inst_name}: Nota {year} existe no ARQUIVO mas NÃO no DB - Valor: {file_score}")
            elif file_score is None and db_score is not None:
                discrepancies.append(f"⚠️  {inst_name}: Nota {year} existe no DB mas NÃO no ARQUIVO - Valor: {db_score}")

if discrepancies:
    for disc in discrepancies:
        print(disc)
else:
    print("✅ Nenhuma discrepância encontrada!")

print("\n" + "=" * 120)
print(f"TOTAL DE DISCREPÂNCIAS: {len(discrepancies)}")
print("=" * 120)
