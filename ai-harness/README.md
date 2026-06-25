# AI Harness — Curs Practic

Curs practic despre harness-ul Claude Code — runtime-ul care alimentează agenții, hooks-urile, skills-urile și fluxurile automate.
Axat pe configurare reală, exemple de cod funcționale și exerciții interactive.

## Structura cursului

| # | Lecție | Subiecte |
|---|--------|----------|
| 01 | Ce este AI Harness? | Concept, arhitectură pe patru straturi, trasarea unui request end-to-end |
| 02 | Hooks | PreToolUse / PostToolUse, payload pe stdin, jurnal de audit, blocarea comenzilor |
| 03 | Skills | Formatul entry point-ului, slash commands, progressive disclosure, bundling assets |
| 04 | Agents și fluxuri multi-agent | Tipuri de subagent, foreground vs. background, izolare worktree |
| 05 | Scheduling și automatizare | CronCreate, CronList, CronDelete, ScheduleWakeup, sintaxa cron |
| 06 | Sistemul de memorie | Patru tipuri de memorie, indexul MEMORY.md, ce să salvezi vs. ce să omiți |
| 07 | Permissions și Settings | Liste allow/deny, ierarhia fișierelor de setări, variabile de mediu, safety floor |
| 08 | MCP Servers | Transporturi, schema unui tool, server minimal Node.js, MCP Inspector |

## Cum se folosește

Deschide `index.html` direct în browser — nu este nevoie de server.

```bash
# Windows
start index.html

# macOS / Linux
open index.html
```

Fiecare lecție conține:
- Explicații conceptuale cu diagrame de arhitectură
- Exemple de cod complete, gata de copiat și rulat
- Exerciții practice pe care le poți executa imediat
- Quiz interactiv cu feedback instant

## Tehnologii acoperite

- **Harness-ul Claude Code** — settings.json, permissions, hooks, skills
- **MCP (Model Context Protocol)** — servere de tool-uri personalizate în Node.js / Python
- **Fluxuri multi-agent** — tool-ul Agent, tipuri de subagent, izolare worktree
- **Scheduling** — CronCreate, ScheduleWakeup, execuția agenților în cloud
- **Sistemul de memorie** — context persistent bazat pe fișiere, între sesiuni

## Flux tipic de lucru

```
settings.json → permissions + hooks → skills → agents → scheduling → MCP
```

Fiecare strat se construiește pe cel anterior — stăpânește-l pe unul înainte să treci la următorul.

## Licență

MIT
