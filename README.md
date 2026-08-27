# SEMAM · Nova Iguaçu — Painel de Gestão Ambiental

Dashboard de gestão para a **Secretaria Municipal de Agricultura e Meio Ambiente (SEMAM)** de Nova Iguaçu/RJ. Site estático (HTML + CSS + JavaScript puro, **sem dependências externas/CDN**), pronto para publicação na Netlify.

## O que está incluído

- **Painel Geral** — KPIs do município, distribuição da legislação por esfera/tema, evolução legislativa e últimos processos/ocorrências.
- **Legislação** — banco com **46 normas** (municipais, estaduais/RJ e federais) pesquisáveis e filtráveis, com ementa e link para a fonte oficial. Exportação em CSV.
- **Licenças emitidas** — 178 registros únicos localizados nos Diários Oficiais entre 27/08/2021 e 27/08/2026, com filtros por tipo, ano, prazo, empresa e link direto para o DOE-NI.
- **Organograma SEMAM** — estrutura, ocupantes, nomeações, exercício interino e evidências separados por natureza do ato.
- **Unidades de Conservação** — 8 APAs municipais (13.861 ha ≈ 27% do território), mosaico com a Reserva Biológica do Tinguá e a APA do Alto Iguaçu.
- **Licenciamento (SIMULA)** — gestão de processos (criar/editar/excluir, filtrar, exportar), fluxo do SIMULA, tipos de licença e enquadramentos.
- **Fiscalização & Denúncias** — grupos de infração (Lei 9.605/98), canais de denúncia e registro de ocorrências.
- **Indicadores** — saneamento (PMSB), cobertura de APAs, bacias hidrográficas e metas.
- **Programas & Ações** — FMMA, CONDEMA, ProMEA, PMSB, SIMULA, Sanear Rural.
- **Glossário** técnico.

> Os registros de licenciamento e ocorrências são armazenados **localmente no navegador** (localStorage). Use os botões de exportação (CSV/JSON) para integrá-los ao sistema da secretaria. Há opções para restaurar dados de exemplo ou limpar tudo.

## Como publicar na Netlify

**Opção A — Arrastar e soltar (mais simples)**
1. Compacte a pasta `semam-dashboard` em um `.zip`.
2. Acesse [app.netlify.com/drop](https://app.netlify.com/drop) e solte o `.zip`.
3. Pronto — o site estará no ar.

**Opção B — Conectar ao Git**
1. Envie esta pasta para um repositório (GitHub/GitLab/Bitbucket).
2. Em *New site from Git*, aponte para o repositório.
3. Build settings: **Publish directory:** `.` (não é necessário comando de build). O `netlify.toml` já está configurado.

## Estrutura

```
semam-dashboard/
├── index.html
├── netlify.toml
├── assets/
│   ├── css/styles.css
│   └── js/
│       ├── data.js      # base de dados (legislação, UCs, indicadores...)
│       ├── charts.js    # gráficos SVG (sem dependências)
│       └── app.js       # roteamento, views e gestão
└── README.md
```

## Fontes dos dados

Prefeitura de Nova Iguaçu (novaiguacu.rj.gov.br/semam), **Diário Oficial Eletrônico de Nova Iguaçu (DOE-NI)**, IBGE, INEA/CONAMA, legislação federal (Leis 6.938/81, 9.605/98, 9.985/2000, 12.651/12, 12.305/10, 9.433/97, 14.026/20, 15.190/25 etc.) e resoluções CONAMA. Compilação para fins de gestão — confira sempre a fonte oficial antes de decisões administrativas.

## Auditoria de legislação

O arquivo **`AUDITORIA.md`** documenta a auditoria realizada no DOE-NI (normas dos últimos 5 anos + correlatos). Resultado: banco passou de **46 → 58 normas**, com acréscimo de leis federais (Lei 15.190/2025 de Licenciamento Ambiental), decretos/portarias/resoluções municipais (CONDEMA, CTMC, CGAPAGA, PMMA) e a inclusão do **Parque Natural Municipal de Nova Iguaçu** e da **APA de Gericinó-Mendanha** entre as unidades de conservação.

## Publicação automática e atualizações pelo chat

O arquivo `netlify.toml` já está incluído. Para eliminar uploads manuais, coloque o conteúdo desta pasta em um repositório GitHub e conecte esse repositório ao Netlify com `Publish directory: .` e sem build command. Depois da configuração inicial, cada commit na branch `main` gera uma nova publicação automaticamente.

O passo a passo completo está em [`DEPLOY.md`](DEPLOY.md). Não há PDFs locais no projeto: as fontes do Diário Oficial permanecem como links oficiais.
