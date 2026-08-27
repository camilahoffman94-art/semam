# Auditoria de Legislação Ambiental — SEMAM / Nova Iguaçu

**Objetivo:** verificar se há normas (leis, decretos, portarias, resoluções, planos) ausentes no painel e atualizar o banco com as normas públicas no Diário Oficial Eletrônico de Nova Iguaçu (DOE-NI) dos últimos 5 anos (2021–2026), além de instrumentos correlatos.

**Data da auditoria:** 25/08/2026
**Responsável:** assistente de gestão (compilação a partir de fontes oficiais)
**Banco antes:** 46 normas → **Banco depois:** 58 normas (+12)

---

## 1. Metodologia

1. Rastreamento do portal do **Diário Oficial** (novaiguacu.rj.gov.br/diario-oficial e doweb.novaiguacu.rj.gov.br) e das edições em PDF do DOE-NI.
2. Consulta ao **portal da SEMAM** (novaiguacu.rj.gov.br/semam) — páginas de legislação, CONDEMA, APAs, ProMEA, Parque Natural Municipal e editais.
3. Leitura de **atas do CONDEMA 2024–2025** (atas_2025_merged.pdf) para identificar resoluções do conselho.
4. Cruisamento com a base federal/estadual (CONAMA, IBAMA, INEA, legislação federal) já existente.
5. Inserção das normas no `assets/js/data.js`, com ementa, esfera, tema, status e **link para a fonte oficial** quando disponível.

> **Limitação declarada:** não foi feito o parse exaustivo de *todas* as centenas de páginas do DOE-NI (a maioria são atos de pessoal, licitações e finanças sem relação ambiental). A auditoria foca em normas de interesse da gestão ambiental, identificadas por buscas direcionadas. Recomenda-se raspagem sistemática dos PDFs do DOE-NI filtrando por "SEMAM/SEMAD/meio ambiente" para fechamento total.

---

## 2. Normas ADICIONADAS (últimos 5 anos / DOE-NI e correlatos)

| ID | Ato | Esfera | Tema | Ano | Fonte |
|----|-----|--------|------|-----|-------|
| L47 | Lei Federal nº 15.190/2025 — Nova Lei de Licenciamento Ambiental | Federal | Licenciamento | 2025 | Planalto |
| L48 | Decreto nº 13.922/2025 — Composição do CONDEMA (2023–2027) | Municipal | Política Ambiental | 2025 | DOE-NI 10/04/2025 |
| L49 | Portaria SEMAM nº 006/2025 — Conselho Gestor APA Guandu-Açu (CGAPAGA) | Municipal | Unidades de Conservação | 2025 | DOE-NI 10/04/2025 |
| L50 | Resolução CONDEMA nº 004/2024 — Câmara Técnica de Mudanças Climáticas (CTMC) | Municipal | Política Ambiental | 2024 | DOE-NI 01/04/2024 |
| L51 | Resolução CONDEMA nº 008/2024 — ato sobre empreendimento (**anulada** em 2025) | Municipal | Licenciamento | 2024 | Atas CONDEMA 2025 |
| L52 | Resolução CONDEMA nº 004/2025 — Anula a Res. 008/2024 | Municipal | Licenciamento | 2025 | Atas CONDEMA 2025 |
| L53 | Decreto nº 13.662/2024 — ato normativo ambiental (portal SEMAM) | Municipal | Política Ambiental | 2024 | Portal SEMAM |
| L54 | PMMA — Plano Municipal da Mata Atlântica (2024) | Municipal | Flora/Mata Atlântica | 2024 | PDF SEMAM |
| L55 | Decreto nº 11.032 — Medida Compensatória (SIMULA) | Municipal | Licenciamento | s/ano | Portal SEMAM |
| L56 | Lei Estadual nº 5.100/2007 — ICMS Ecológico RJ | Estadual | Instrumentos Econômicos | 2007 | — |
| L57 | Decreto Estadual nº 11.709/2019 — GT do ICMS Ecológico de NI | Estadual | Instrumentos Econômicos | 2019 | — |
| L58 | Resolução SEMADETUR nº 001/2019 — PGRCC (resíduos construção civil) | Municipal | Resíduos | 2019 | Portal SEMAM |

> L56/L57/L58 são anteriores a 2021 mas **essenciais** à gestão (incentivo econômico e resíduos) e estavam ausentes; incluídas para completude.

---

## 3. Unidades de Conservação encontradas (novas no painel)

- **Parque Natural Municipal de Nova Iguaçu** — Decreto Municipal nº 6.001/1998, **1.100 ha**, serra do Gericinó-Mendanha; Plano de Manejo aprovado; elevado a geoparque em 2004.
- **APA de Gericinó-Mendanha** — Lei Estadual nº 1.331/1988 (parte em Nova Iguaçu); abriga o Parque Natural Municipal.

> **Insight:** as 8 APAs (13.861 ha / 27%) **não contemplavam** o Parque Natural Municipal. A área municipal protegida de fato é **maior** que o divulgado — recomenda-se revisar o indicador de cobertura.

---

## 4. Achados relevantes nas Atas do CONDEMA (2024–2025)

- Criação da **CTMC** (Res. 004/2024) e discussão do **Plano Municipal de Mudanças Climáticas (PMMC)**.
- **Plano de Trabalho da APA Jaceruba** e revisão do **PMGIRS** (Plano de Gestão Integrada de Resíduos Sólidos) levados ao conselho para fins de **ICMS Ecológico 2024**.
- **Anulação** da Res. CONDEMA 008/2024 (empreendimento não prosperou).
- **PMMA** em fase de aprovação no CONDEMA.

---

## 5. Recomendações

1. **Raspagem sistemática do DOE-NI** (PDFs 2021–2026) filtrando por "SEMAM/SEMAD/meio ambiente" para garantir cobertura total — o painel pode importar um JSON gerado desse processo.
2. **Revisar o indicador de cobertura territorial** para incluir o Parque Natural Municipal (1.100 ha).
3. **Vincular o PMMC e o PMGIRS** como instrumentos vigentes no módulo de Programas/Indicadores.
4. **Manter o campo de fonte oficial** atualizado: sempre que possível, link direto para o PDF do DOE-NI da data de publicação.
5. **Observância:** nem toda norma do DOE-NI é ambiental; esta auditoria priorizou atos da SEMAM, CONDEMA e temas ambientais.

---

*Documento de auditoria gerado para fins de gestão. Confira sempre o Diário Oficial e a fonte oficial antes de decisões administrativas.*

---

## 6. Licenças emitidas — janela de 27/08/2021 a 27/08/2026

Foi realizada uma varredura dos links de publicação do Diário Oficial Eletrônico de Nova Iguaçu para a janela de cinco anos, sem gravar PDFs no workspace. Os PDFs foram consultados apenas em memória para localizar avisos de **CONCESSÃO DE LICENÇA** assinados/publicados pela SEMAM.

| Ano de publicação | Registros únicos localizados |
|---|---:|
| 2021 (27/08 a 31/12) | 24 |
| 2022 | 51 |
| 2023 | 6 |
| 2024 | 0 localizados |
| 2025 | 24 |
| 2026 (até 27/08) | 73 |
| **Total** | **178** |

### Distribuição por tipo

- LO — Licença de Operação: 117
- LI — Licença de Instalação: 29
- LP — Licença Prévia: 6
- LPI — Licença Prévia e de Instalação: 13
- LIO — Licença de Instalação e Operação: 10
- LOR — Licença de Operação e Recuperação: 3

A consolidação usa o número da licença e CNPJ/CPF para evitar a contagem duplicada de republicações. Cada registro guarda a data de publicação, interessado, CNPJ/CPF quando extraído, processo, prazo publicado, tipo e link direto para o DOE-NI.

> **Cuidado:** “vigente no corte” no painel é uma classificação mecânica pela data de validade publicada no ato em 27/08/2026. Não confirma, isoladamente, cancelamento, renovação, alteração ou situação cadastral posterior.

A página institucional de [Licenças emitidas da SEMAM](https://www.novaiguacu.rj.gov.br/semam/licenciamento-ambiental/licencas-emitidas/) atualmente aponta principalmente para planilhas históricas de empresas industriais, ETEs e oficinas. Por isso, para o recorte 2021–2026, a fonte primária utilizada no painel é o [Diário Oficial do Município](https://novaiguacu.rj.gov.br/diario-oficial/).
