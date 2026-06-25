# OpenSearch + Laravel — Tutorial în română

Tutorial practic pentru integrarea OpenSearch într-un proiect Laravel cu MongoDB.
Scris în română, axat pe cod concret și exemple reale.

## Structura cursului

| # | Lecție | Subiecte |
|---|--------|---------|
| 01 | Ce este OpenSearch? | Arhitectură, cluster, index, document, shard, mapping |
| 02 | Instalare și conectare | Docker Compose, pachete PHP, Service class, Artisan ping |
| 03 | CRUD | Indexare, get, update parțial, delete, bulk indexing |
| 04 | Căutare full-text | match, multi_match, match_phrase, fuzziness, boost |
| 05 | Mapping | text vs keyword, tipuri de câmpuri, multi-fields, analyzer |
| 06 | Filtre, sortare, paginație | bool query, term, range, sort, paginare from/size |
| 07 | Eloquent cu pdphilip/opensearch | Modele Eloquent, Observer, sincronizare MongoDB → OpenSearch |
| 08 | Highlight | Evidențierea termenilor căutați în rezultate, CSS styling |
| 09 | Agregări | terms, date_histogram, range, faceted search, sidebar cu contoare |

## Cum folosești tutorialul

Deschide `index.html` direct în browser — nu necesită server.

```bash
# Windows
start index.html

# macOS
open index.html
```

Fiecare lecție conține:
- Explicații conceptuale cu diagrame vizuale
- Cod PHP/Laravel complet, copy-paste ready
- Quiz interactiv cu feedback instant

## Stack acoperit

- **OpenSearch** 2.x
- **Laravel** 10/11
- **PHP** 8.1+
- Pachete: `friendsofcat/opensearch-client` (low-level), `pdphilip/opensearch` (Eloquent ORM)
- **MongoDB** ca bază de date operațională (pattern dual-database)
- **Docker Compose** pentru dezvoltare locală

## Pattern arhitectural

```
MongoDB (date operaționale)  →  Eloquent Observer  →  OpenSearch (căutare)
     ↑ source of truth                                      ↑ search index
```

Același `_id` în ambele baze de date pentru cross-referencing fără join-uri.

## Licență

MIT
