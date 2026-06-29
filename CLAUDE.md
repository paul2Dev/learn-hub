# learn-hub — Claude Instructions

Repo cu cursuri tehnice interactive. Fiecare curs este un folder obișnuit în repo — nu există submodule.

## Cum se generează cursurile

**Tot conținutul cursurilor este generat de skill-ul `/teach`.** Nu scrie manual HTML pentru lecții, întrebări de quiz, assets sau fișiere de glosar — invocă întotdeauna `/teach` și lasă skill-ul să conducă sesiunea. Skill-ul gestionează:
- Configurarea workspace-ului de predare (MISSION.md, RESOURCES.md, NOTES.md, learning-records/)
- Crearea `assets/style.css` și `assets/quiz.js`
- Generarea fișierelor HTML pentru lecții, una câte una sau toate odată când se cere
- Crearea `reference/glossary.html`
- Crearea `index.html` al cursului
- Adaugare link navigatie catre paginda `index.html`

Rolul lui Claude în afara `/teach` se limitează la: crearea folderului cursului, configurarea `.gitignore` dacă e nevoie, și actualizarea `README.md` și `index.html` principale (catalogul).

## Git identity

Folosește întotdeauna această identitate când faci commit:

```
user.name  = Paul2Dev
user.email = paul.maxineanu@gmail.com
```

---

## Adăugarea unui curs nou — checklist complet

Urmează acești pași în ordine de fiecare dată când se adaugă un curs nou.

### 1. Creează folderul cursului

Creează folderul în rădăcina repo-ului:

```bash
mkdir <folder-name>
```

**Convenție de denumire foldere:** folosește `<topic>-tutorial` pentru cursuri de tehnologie (ex: `git-tutorial`, `claude-tutorial`) sau simplu `<topic>` pentru cursuri conceptuale (ex: `ai-harness`).

### 2. Adaugă .gitignore în folder

Creează `<folder-name>/.gitignore` cu exact acest conținut — sau lasă `.gitignore` rădăcină să acopere cu pattern-urile `**/`:

```
# Claude Code
.claude/

# Note personale de teaching
MISSION.md
NOTES.md
RESOURCES.md

# Progres personal
learning-records/
```

### 3. Rulează /teach pentru a genera întreg cursul

Invocă skill-ul `/teach` — acesta generează totul: fișiere workspace, toate lecțiile HTML, assets, glosar și `index.html` al cursului. Nu scrie manual niciunul dintre aceste fișiere.

Skill-ul creează:
- `MISSION.md`, `NOTES.md`, `RESOURCES.md` (gitignorate — personale)
- `learning-records/` (gitignorate — personale)
- `assets/style.css`, `assets/quiz.js` (commise)
- `lessons/0001-*.html … 000N-*.html` (commise)
- `reference/glossary.html` (commis)
- `index.html` (commis)

### 4. Actualizează README.md principal

Adaugă un rând în tabelul cursurilor:

```md
| [Titlu Curs](folder/) | Descriere scurtă — N lecții |
```

Adaugă folderul în arborele structurii repo-ului:

```
└── <folder-name>/              ← curs <Topic>
    ├── index.html
    └── lessons/
```

### 5. Actualizează index.html principal

Adaugă un card de curs în `.course-grid` urmând pattern-ul existent:

```html
<a class="course-card" href="<folder>/index.html">
  <span class="course-icon"><icon></span>
  <div class="course-info">
    <h3>Titlu Curs</h3>
    <p>Descriere într-un paragraf. N lecții cu quizuri interactive.</p>
    <div class="course-tags">
      <span class="tag">primary-tag</span>
      <span class="tag tag-orange">secondary-tag</span>
      <span class="tag tag-green">N lecții</span>
    </div>
  </div>
</a>
```

Culori tag-uri: albastru (implicit) = tehnologie primară, `tag-orange` = tehnologie secundară, `tag-green` = număr lecții.

### 6. Commit și push

```bash
git add <folder-name> README.md index.html
git commit -m "feat: add <topic> course and update catalog"
git push origin master
```

---

## Format README pentru cursuri

Fiecare curs trebuie să aibă un README care urmează această structură (în română):

```md
# <Titlu Curs> — <subtitle>

Descriere pe o linie. Focus și audiență.

## Structura Cursului

| # | Lecție | Subiecte |
|---|--------|----------|
| 01 | Nume Lecție | subiect, subiect, subiect |
...

## Cum se folosește

Deschide `index.html` direct în browser — nu necesită server.

\`\`\`bash
# Windows
start index.html

# macOS / Linux
open index.html
\`\`\`

Fiecare lecție conține:
- Explicație conceptuală cu diagrame
- Exemple de cod complete, gata de copiat
- Quiz interactiv cu feedback instant

## Tehnologii Acoperite

- **Tehnologie 1** — ce acoperă
- **Tehnologie 2** — ce acoperă

## Flux Tipic

\`\`\`
pas → pas → pas → pas
\`\`\`

## Licență

MIT
```

---

## Convenții fișiere lecții

- **Denumire:** `lessons/0001-<titlu-cu-liniuțe>.html`, incrementând per lecție
- **Assets comune:** întotdeauna link la `../assets/style.css` și `../assets/quiz.js`
- **Navigare:** fiecare lecție are link la lecția anterioară, la următoarea, la `../reference/glossary.html` și la pagina principală de cursuri (`../index.html` al cursului sau `/index.html`)
- **Structura per lecție:**
  1. Header meta lecție (lecția N din M, timp estimat, link înapoi la catalog)
  2. Secțiuni de concept cu diagrame arhitecturale unde e relevant
  3. Exerciții practice pe care utilizatorul le poate rula imediat
  4. Callout la sursa primară (link la documentație oficială)
  5. Quiz interactiv (5 întrebări, câte una pe rând)
  6. Callout „Întreabă profesorul"
  7. Navigare Anterior / Următor

## Widget Quiz

Quiz-ul din `assets/quiz.js` afișează **câte o întrebare pe rând**:
- Doar întrebarea 1 este vizibilă la încărcare
- După click pe un răspuns: highlighting corect/greșit + text feedback apare
- Apare un buton **„Întrebarea următoare →"** (ultima întrebare arată **„Vezi rezultatele →"**)
- După răspunsul final: rezumatul scorului cu afișare mare `X / N` înlocuiește întrebările

Structura HTML quiz (folosită în fiecare lecție):

```html
<div class="quiz">
  <div class="quiz-question">
    <div class="quiz-q">
      <span class="qnum">Întrebarea 1 din 5</span>
      <span class="qtext">Textul întrebării?</span>
    </div>
    <ul class="quiz-options">
      <li><button data-correct="false">Opțiune greșită</button></li>
      <li><button data-correct="true">Opțiune corectă</button></li>
      <li><button data-correct="false">Opțiune greșită</button></li>
      <li><button data-correct="false">Opțiune greșită</button></li>
    </ul>
    <div class="quiz-feedback">
      Explicație afișată după răspuns.
    </div>
  </div>
  <!-- repetă pentru fiecare întrebare -->
  <div class="quiz-score"></div>
</div>
```

Reguli pentru întrebările de quiz:
- 5 întrebări per lecție
- Toate opțiunile trebuie să fie similare ca lungime (nu da răspunsul prin formatare)
- Feedback-ul explică *de ce*, nu doar „corect" sau „greșit"

## Index curs (index.html)

Fiecare curs trebuie să aibă un `index.html` în rădăcina lui care servește drept pagina de start a cursului. Trebuie să includă:
- Link înapoi la catalogul principal (`../index.html`)
- Grilă de lecții cu link-uri la toate lecțiile în ordine
- Secțiune de referință (glosar, resurse, README)
- Tabel de referință rapidă pentru harness/subiect

---

## Cursuri existente

| Folder | Lecții |
|--------|--------|
| `git-tutorial/` | 9 |
| `opensearch-tutorial/` | 9 |
| `claude-tutorial/` | 12 |
| `ai-harness/` | 8 |
| `engineering-principles/` | 10 |
| `agentic-workflow/` | 10 |
| `embedings/` | 8 |
| `next-js/` | 9 |
| `nuxt/` | 9 |
