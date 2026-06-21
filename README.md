# Cursuri tehnice — paul2dev

Colecție de cursuri tehnice interactive. Fiecare curs este un repo Git separat, integrat aici ca **submodul**.

## Cursuri

| Curs | Descriere | Repo |
|------|-----------|------|
| [Git & GitHub Fluency](git-tutorial/) | Mental model, branches, PR-uri, GitHub Actions, CI/CD — 9 lecții | [paul2Dev/learn-git](https://github.com/paul2Dev/learn-git) |
| [OpenSearch cu Laravel](opensearch-tutorial/) | Căutare full-text, filtre, agregări, Eloquent — 9 lecții | [paul2Dev/learn-opensearch-laravel-integration](https://github.com/paul2Dev/learn-opensearch-laravel-integration) |
| [Claude Code](claude-tutorial/) | Instalare, mental model, explorare cod, debugging, git workflow, VS Code — 8 lecții | [paul2Dev/learn-claude](https://github.com/paul2Dev/learn-claude) |

## Cum clonezi

### Varianta rapidă — tot dintr-o dată

```bash
git clone --recurse-submodules git@github.com:paul2Dev/learn-hub.git
```

Această comandă clonează repo-ul principal **și** trage automat toate cursurile.

### Dacă ai clonat deja fără `--recurse-submodules`

```bash
git clone git@github.com:paul2Dev/learn-hub.git
cd learn-hub
git submodule update --init --recursive
```

### Actualizare cursuri la ultima versiune

```bash
# Actualizează toate submodulele la ultimul commit din branch-ul lor principal
git submodule update --remote --merge
```

## Structura repo-ului

```
learn-hub/                      ← repo-ul principal (acesta)
├── index.html                  ← pagina de catalog (deschide în browser)
├── README.md
├── .gitmodules                 ← lista de submodule
├── git-tutorial/               ← submodul: curs Git & GitHub
│   ├── index.html
│   └── lessons/
├── opensearch-tutorial/        ← submodul: curs OpenSearch + Laravel
│   ├── index.html
│   └── lessons/
└── claude-tutorial/            ← submodul: curs Claude Code
    ├── index.html
    └── lessons/
```

## Cum adaugi un curs nou

1. Creează repo-ul cursului pe GitHub (ex: `paul2Dev/learn-docker`)
2. Adaugă-l ca submodul în acest repo:

```bash
git submodule add git@github.com:paul2Dev/learn-docker.git docker-tutorial
git add .gitmodules docker-tutorial
git commit -m "feat: add docker tutorial submodule"
git push
```

3. Adaugă un card nou în `index.html` și un rând nou în tabelul de mai sus.

## Navigare locală

Deschide `index.html` din rădăcina repo-ului într-un browser pentru a vedea catalogul de cursuri cu linkuri către fiecare lecție.
