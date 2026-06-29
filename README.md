# Cursuri tehnice — paul2dev

Colecție de cursuri tehnice interactive. Fiecare curs este un folder în acest repo — nu există submodule.

## Cursuri

| Curs | Descriere |
|------|-----------|
| [Git & GitHub Fluency](git-tutorial/) | Mental model, branches, PR-uri, GitHub Actions, CI/CD — 9 lecții |
| [Engineering Principles](engineering-principles/) | SOLID, YAGNI, KISS, DRY, systems thinking, API design, security, testing, code review — 10 lecții |
| [Nuxt 3 cu Supabase și Vercel](nuxt/) | pages/ routing, Nitro server engine, @nuxtjs/supabase, Pinia, deploy Vercel/Netlify/Cloudflare — 9 lecții |
| [Next.js cu Supabase și Vercel](next-js/) | App Router, Server Components, Supabase Auth + RLS, Server Actions, deploy Vercel, Next.js vs Nuxt — 9 lecții |
| [OpenSearch cu Laravel](opensearch-tutorial/) | Căutare full-text, filtre, agregări, Eloquent — 9 lecții |
| [Claude Code](claude-tutorial/) | Instalare, mental model, explorare cod, debugging, git workflow, VS Code — 12 lecții |
| [AI Harness](ai-harness/) | Harness concept, hooks, skills, agents, scheduling, memory, permissions, MCP — 8 lecții |
| [Workflow Agentic Complet](agentic-workflow/) | /verify, /code-review, Greptile, Greploop, CodeRabbit, GitHub Actions, gh CLI — 10 lecții |
| [Embeddings](embedings/) | Vectori semantici, use cases, Python, JavaScript, Laravel, vector databases, RAG — 8 lecții |

## Cum clonezi

```bash
git clone git@github.com:paul2Dev/learn-hub.git
cd learn-hub
```

## Structura repo-ului

```
learn-hub/                      ← repo-ul principal (acesta)
├── index.html                  ← pagina de catalog (deschide în browser)
├── README.md
├── git-tutorial/               ← curs Git & GitHub
│   ├── index.html
│   └── lessons/
├── opensearch-tutorial/        ← curs OpenSearch + Laravel
│   ├── index.html
│   └── lessons/
├── claude-tutorial/            ← curs Claude Code
│   ├── index.html
│   └── lessons/
├── ai-harness/                 ← curs AI Harness
│   ├── index.html
│   └── lessons/
├── engineering-principles/     ← curs Engineering Principles
│   ├── index.html
│   └── lessons/
├── agentic-workflow/           ← curs Workflow Agentic Complet
│   ├── index.html
│   └── lessons/
├── embedings/                  ← curs Embeddings
│   ├── index.html
│   └── lessons/
├── next-js/                    ← curs Next.js cu Supabase și Vercel
│   ├── index.html
│   └── lessons/
└── nuxt/                       ← curs Nuxt 3 cu Supabase și Vercel
    ├── index.html
    └── lessons/
```

## Cum adaugi un curs nou

1. Creează folderul cursului în repo:

```bash
mkdir <folder-name>
```

2. Rulează `/teach` pentru a genera conținutul cursului.
3. Adaugă un card nou în `index.html` și un rând nou în tabelul de mai sus.
4. Commit și push:

```bash
git add <folder-name> README.md index.html
git commit -m "feat: add <topic> course and update catalog"
git push
```

## Navigare locală

Deschide `index.html` din rădăcina repo-ului într-un browser pentru a vedea catalogul de cursuri cu linkuri către fiecare lecție.
