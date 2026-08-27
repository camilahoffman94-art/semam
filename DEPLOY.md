# Publicação automática — GitHub + Netlify

Este projeto é estático, feito com HTML, CSS e JavaScript puro. A configuração `netlify.toml` já está pronta para publicação na raiz do repositório.

## Fluxo recomendado

```text
Atualização solicitada no chat
        ↓
Arquivos atualizados e enviados ao GitHub
        ↓
Netlify detecta o commit
        ↓
Nova versão publicada automaticamente
```

## Configuração inicial

### 1. Criar o repositório

No GitHub, crie um repositório chamado, por exemplo, `semam-dashboard`.

Envie para a raiz do repositório o conteúdo desta pasta:

```text
index.html
netlify.toml
assets/
AUDITORIA.md
README.md
```

Não é necessário enviar PDFs. O painel mantém links para as fontes oficiais do Diário Oficial.

### 2. Conectar no Netlify

No Netlify:

1. Abra **Add new site**.
2. Escolha **Import an existing project**.
3. Selecione **GitHub**.
4. Escolha o repositório criado.
5. Use estas configurações:
   - **Base directory:** vazio
   - **Build command:** vazio
   - **Publish directory:** `.`
   - **Branch:** `main`
6. Clique em **Deploy site**.

Depois da primeira publicação, cada commit enviado à branch `main` será publicado automaticamente.

## Atualizações futuras pelo chat

Com o repositório autorizado e conectado, peça no chat, por exemplo:

> Pesquise as licenças emitidas pela SEMAM em setembro de 2026, valide as fontes oficiais e atualize o dashboard.

A alteração deverá atualizar os arquivos de dados e a auditoria, sem necessidade de novo upload manual no Netlify.

## Se for necessário configurar pelo terminal

Depois de criar o repositório vazio no GitHub, os comandos equivalentes são:

```bash
git init
git add .
git commit -m "Versão inicial do painel SEMAM"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/semam-dashboard.git
git push -u origin main
```

Não coloque tokens ou senhas no código. Use a autorização do GitHub/Netlify ou o gerenciador de credenciais do Git.

## Observação sobre o ambiente do chat

A prévia na porta 4173 é temporária e serve apenas para conferência. Para que o chat consiga publicar alterações no site real, o repositório remoto precisa estar conectado por uma integração autorizada. Sem essa autorização, o chat consegue atualizar os arquivos no workspace, mas não consegue enviar commits para a sua conta externa.
