---
title: "Camping Piscina Demonte"
thumb: "img/piscina.webp"
description: "Sito turistico, realizzato con Hugo e ottimizzato per dispositivi mobili."
draft: false
weight: 1
tags: ["Hugo", "Turismo", "Camping", "Statico"]
link: "https://campingpiscinademonte.com/"
cliente: "Camping Piscina Demonte"
anno: "2025"
stack: "Hugo, Netlify, CSS personalizzato"
online: true
---

<img src="/img/piscina.webp" alt="Camping Piscina Demonte" class="project-hero" />

## 🏕️ Descrizione

Sito ufficiale del campeggio **Camping Piscina Demonte**, realizzato con Hugo e pubblicato tramite Netlify.

Semplice da navigare, elegante su ogni dispositivo, e costruito su misura per raccontare l’esperienza di un soggiorno in montagna.

[🌐 Visita il sito →](https://campingpiscinademonte.com/)

---

## 🚀 Tecnologie

- **Hugo** (v0.121.2 extended)
- **Netlify** (hosting & deploy automatico da Git)
- **GitHub** (versionamento e collaborazione)
- **Tema custom** (layouts, shortcodes, partials)
- **CSS responsive** personalizzato

---

## 📂 Struttura del progetto

```plaintext
content/it/
├── _index.md
├── chi-siamo.md
├── servizi/
├── galleria/
static/
├── img/
layouts/
├── _default/
├── partials/
netlify.toml
```
---

## ✨ Funzionalità principali

- Hero dinamico e sezioni in evidenza
- Card per chalet, piazzole, piscina, igloo, ecc.
- Galleria fotografica responsive
- Sezioni aggiornabili (Regolamento, Listino)
- Contatti con mappa, telefono e form

---

## 🛠️ Dev & testing

Per testare il sito in locale:

```bash
hugo server -D
```

## 🔖 Tag

```markdown
{{< taglist tags="Hugo, Turismo, Camping, Statico" >}}
```