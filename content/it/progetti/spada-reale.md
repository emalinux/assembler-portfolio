---
title: "Albergo - Ristorante Spada Reale"
thumb: "img/spada.webp"
description: "Sito ufficiale del Ristorante Spada Reale (Roaschia, CN) – realizzato con Hugo e deploy automatico su Netlify. Progetto multilingua, responsive, elegante."
draft: false
weight: 3
tags: ["Hugo", "Hotel", "Restaurant", "Static"]
link: "https://spadareale.com/it/"
cliente: "Spada Reale"
anno: "2025"
stack: "Hugo, HTML & CSS personalizzato, multilingua, deploy Netlify"
online: true
---

<img src="/img/spada.webp" alt="Albergo Ristorante Spada Reale" class="project-hero" />

## 🍷 Descrizione

Sito ufficiale del ristorante e albergo **Spada Reale**, situato nel cuore di Roaschia (CN).

Il progetto è stato sviluppato con **Hugo**, completamente personalizzato, multilingua (Italiano, Inglese, Francese), responsive e ottimizzato per la presentazione su schermi da vetrina (modalità notturna).

Contiene sezioni dedicate a camere, ristorante, bottega, prodotti tipici e contatti, con stile elegante e accessibilità semplificata.

[🌐 Visita il sito →](https://spadareale.com/it/)

---

## 🚀 Tecnologie

- **Hugo** (static site generator ultrarapido)
- **HTML/CSS** personalizzato, design full responsive
- **Netlify** (deploy continuo da GitHub)
- **i18n** multilingua integrato (IT, EN, FR)
- Modalità scura automatica dopo le 18:00

---

## 📂 Struttura del progetto

```plaintext
content/
├── it/
│   ├── _index.md
│   ├── ristorante/
│   ├── camere/
│   ├── contatti.md
├── en/
│   └── ...
├── fr/
│   └── ...
layouts/
├── _default/
├── partials/
├── sections/
```
---

## ✨ Funzionalità principali

- Navigazione sticky con toggle tema e lingua
- Layout elegante e leggibile su ogni dispositivo
- Traduzioni curate per ogni sezione
- Bottega virtuale con 6 prodotti locali (pane, miele, souvenir…)
- Mappa e contatti integrati
- Modalità di vetrina notturna attiva

---

## 🛠️ Dev & testing

Per testare in locale:

hugo server -D

Tutto il progetto è versionato su GitHub e pubblicato via Netlify.

---

## 🔖 Tag

{{< taglist tags="Hugo, Hotel, Restaurant, Static" >}}