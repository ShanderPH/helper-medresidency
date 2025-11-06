"""
Comparação entre instituições do BANCO vs ARQUIVO
"""

# Instituições do BANCO (37)
db_institutions = [
    "Caixa de Assistência dos Servidores do Estado de Mato Grosso do Sul",
    "COMPLEXO DO HOSPITAL DE CLINICAS DA UFPR",
    "COMPLEXO HOSPITALAR DA UFC/EBSERH",
    "FACULDADE DE MEDICINA DE JUNDIAÍ",
    "FUNDAÇÃO ABC",
    "FUNDAÇÃO FACULDADE DE MEDICINA",  # ⚠️ NÃO ESTÁ NO ARQUIVO
    "HC DA UNIVERSIDADE FEDERAL DE MINAS GERAIS",
    "HC DA UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE",
    "HC PROFESSOR ROMERO MARQUES – UNIVERSIDADE FEDERAL DE PERNAMBUCO",
    "HOSPITAL CENTRAL DA POLÍCIA MILITAR DO ESTADO DO RIO DE JANEIRO",
    "HOSPITAL DAS FORÇAS ARMADAS",
    "HOSPITAL FEDERAL DA LAGOA",
    "HOSPITAL FEDERAL DE BONSUCESSO",
    "HOSPITAL FEDERAL DO ANDARAI",
    "HOSPITAL FEDERAL DOS SERVIDORES DO ESTADO",
    "Hospital Geral de Fortaleza (HGF)",
    "HOSPITAL OSVALDO CRUZ – BH/IPSEMG",  # ⚠️ BH/MG - não é Sorocaba/SP!
    "HOSPITAL REGIONAL DE PRESIDENTE PRUDENTE – UNESP",
    "HOSPITAL SÍRIO-LIBANÊS",
    "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE JUIZ DE FORA",
    "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE SERGIPE",
    "HOSPITAL UNIVERSITÁRIO DE BRASÍLIA – UnB",
    "HOSPITAL UNIVERSITÁRIO GAFFRÉE E GUINLE – UNIRIO",
    "HOSPITAL UNIVERSITÁRIO JÚLIO MULLER",
    "HU ANTONIO PEDRO – UNIVERSIDADE FEDERAL FLUMINENSE",
    "INSTITUTO DE ASSISTÊNCIA MÉDICA AO SERVIDOR PÚBLICO ESTADUAL – IAMSPE",
    "INSTITUTO NACIONAL DE CÂNCER – INCA",  # ⚠️ NÃO ESTÁ NO ARQUIVO
    "IRMANDADE DA SANTA CASA DE MISERICÓRDIA – RIBEIRÃO PRETO",
    "IRMANDADE DA SANTA CASA DE MISERICÓRDIA DE SÃO PAULO",
    "ISMEP- INSTITUTO SANTA MARTA DE ENSINO E PESQUISA",
    "PONTIFÍCIA UNIVERSIDADE CATÓLICA DE SÃO PAULO",
    "UNIVERSIDADE DE SÃO PAULO - CAPITAL",
    "UNIVERSIDADE DE SÃO PAULO - FACULDADE DE MEDICINA DE RIBEIRÃO PRETO",
    "UNIVERSIDADE ESTADUAL DE CAMPINAS",
    "UNIVERSIDADE ESTADUAL DE MONTES CLAROS – UNIMONTES",
    "UNIVERSIDADE FEDERAL DE SÃO PAULO – UNIFESP",
    "UNIVERSIDADE FEDERAL DE UBERLÂNDIA – UFU",
]

# Instituições do ARQUIVO (37)
file_institutions = [
    "COMPLEXO HOSPITALAR DA UFC/EBSERH",
    "Hospital Geral de Fortaleza (HGF)",
    "HOSPITAL DAS FORÇAS ARMADAS",
    "ISMEP- INSTITUTO SANTA MARTA DE ENSINO E PESQUISA",
    "HOSPITAL UNIVERSITÁRIO DE BRASÍLIA – UnB",
    "HOSPITAL UNIVERSITÁRIO JÚLIO MULLER",
    "Caixa de Assistência dos Servidores do Estado de Mato Grosso do Sul",
    "HC DA UNIVERSIDADE FEDERAL DE MINAS GERAIS",
    "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE JUIZ DE FORA",
    "UNIVERSIDADE ESTADUAL DE MONTES CLAROS – UNIMONTES",
    "UNIVERSIDADE FEDERAL DE UBERLÂNDIA – UFU",
    "COMPLEXO DO HOSPITAL DE CLINICAS DA UFPR",
    "HC PROFESSOR ROMERO MARQUES – UNIVERSIDADE FEDERAL DE PERNAMBUCO",
    "HU ANTONIO PEDRO – UNIVERSIDADE FEDERAL FLUMINENSE",
    "HOSPITAL CENTRAL DA POLÍCIA MILITAR DO ESTADO DO RIO DE JANEIRO",
    "HOSPITAL FEDERAL DA LAGOA",
    "HOSPITAL FEDERAL DE BONSUCESSO",
    "HOSPITAL FEDERAL DO ANDARAI",
    "HOSPITAL FEDERAL DOS SERVIDORES DO ESTADO",
    "HOSPITAL UNIVERSITÁRIO GAFFRÉE E GUINLE – UNIRIO",
    "HOSPITAL UNIVERSITÁRIO ONOFRE LOPES",  # ⚠️ No banco: "HC DA UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE"
    "UNIVERSIDADE FEDERAL DE SERGIPE",  # ⚠️ No banco: "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE SERGIPE"
    "SUS-SP",  # ⚠️ NÃO ESTÁ NO BANCO
    "UNIVERSIDADE FEDERAL DE SÃO PAULO - USP",  # ⚠️ No banco: "UNIVERSIDADE DE SÃO PAULO - CAPITAL"
    "Irmandade Santa Casa de Misericórdia de São Paulo",
    "Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo",
    "Universidade Estadual de Campinas",
    "Faculdade de Medicina de Marília",  # ⚠️ NÃO ESTÁ NO BANCO (FAMEMA)
    "Instituto de Assistência Médica ao Servidor Público Estadual",
    "Faculdade de Medicina do ABC",  # ⚠️ No banco: "FUNDAÇÃO ABC"
    "Pontifícia Universidade Católica de São Paulo",
    "Sírio-Libanês",  # ⚠️ No banco: "HOSPITAL SÍRIO-LIBANÊS"
    "Faculdade de Medicina de Jundiai",
    "Hospital Oftalmológico de Sorocaba",  # ⚠️ NO BANCO: "HOSPITAL OSVALDO CRUZ – BH/IPSEMG"?
    "Hospital Regional de Presidente Prudente",
    "Santa Casa de Misericórdia de Ribeirão Preto",
    "Universidade Federal de São Paulo - UNIFESP",
]

print("=" * 120)
print("ANÁLISE: BANCO vs ARQUIVO")
print("=" * 120)

# Normalizar nomes para comparação
def normalize(name):
    return name.upper().strip()

db_norm = {normalize(x): x for x in db_institutions}
file_norm = {normalize(x): x for x in file_institutions}

print("\n🔴 INSTITUIÇÕES NO BANCO MAS NÃO NO ARQUIVO:")
print("-" * 120)
for norm, orig in sorted(db_norm.items()):
    if norm not in file_norm:
        print(f"  - {orig}")

print("\n🔴 INSTITUIÇÕES NO ARQUIVO MAS NÃO NO BANCO:")
print("-" * 120)
for norm, orig in sorted(file_norm.items()):
    if norm not in db_norm:
        print(f"  - {orig}")

print("\n✅ TOTAL:")
print("-" * 120)
print(f"Banco: {len(db_institutions)} instituições")
print(f"Arquivo: {len(file_institutions)} instituições")

print("\n" + "=" * 120)
print("CONCLUSÃO:")
print("=" * 120)
print("""
O banco e o arquivo têm 37 instituições cada, mas NÃO SÃO AS MESMAS 37!

Possíveis mapeamentos:
- "HC DA UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE" → "HOSPITAL UNIVERSITÁRIO ONOFRE LOPES"
- "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DE SERGIPE" → "UNIVERSIDADE FEDERAL DE SERGIPE"
- "FUNDAÇÃO ABC" → "Faculdade de Medicina do ABC"
- "HOSPITAL SÍRIO-LIBANÊS" → "Sírio-Libanês"
- "UNIVERSIDADE DE SÃO PAULO - CAPITAL" → "UNIVERSIDADE FEDERAL DE SÃO PAULO - USP" (NOME INCORRETO NO ARQUIVO!)

NÃO TÊM CORRESPONDÊNCIA:
- BANCO: "FUNDAÇÃO FACULDADE DE MEDICINA", "INSTITUTO NACIONAL DE CÂNCER – INCA", "HOSPITAL OSVALDO CRUZ – BH/IPSEMG"
- ARQUIVO: "SUS-SP", "Faculdade de Medicina de Marília", "Hospital Oftalmológico de Sorocaba"
""")
print("=" * 120)
