---
title: "Gestionale Hotel – Sistema Personalizzato"
thumb: "img/gestion.webp"
description: "Sistema gestionale custom per struttura ricettiva. Architettura modulare, database relazionale, deploy su VPS e backup automatici."
draft: false
weight: 2
tags: ["PHP", "Backend", "Database", "VPS", "Custom Software"]
link: ""
cliente: "Struttura Ricettiva (CN)"
anno: "2026"
stack: "PHP 8, MySQL, Docker, VPS Ubuntu, Git versioning"
online: false
---

<img src="/img/gestion.webp" alt="Gestionale Hotel Personalizzato" class="project-hero" />

## 🏨 Descrizione

Sistema gestionale personalizzato sviluppato per una struttura ricettiva, con l’obiettivo di digitalizzare completamente la gestione di:

- Camere
- Prenotazioni
- Clienti
- Stato occupazione
- Archivio storico

Il progetto nasce da un’analisi dettagliata delle esigenze operative reali e si è evoluto in una piattaforma solida, modulare e scalabile.

---

## 🚀 Architettura tecnica

- **Backend PHP 8 custom**
- **Database MySQL relazionale**
- Foreign key tra prenotazioni e clienti
- Autocomplete intelligente per associazione cliente
- Deploy su **VPS Ubuntu**
- Containerizzazione tramite **Docker**
- Versionamento Git con branch e release
- Backup automatico giornaliero con retention 14 giorni

---

## ✨ Funzionalità principali

- Calendario occupazione camere
- Gestione completa prenotazioni
- Database clienti con archivio
- Sistema di archiviazione soft-delete
- Interfaccia ottimizzata per uso quotidiano
- Controllo accessi con autenticazione

---

## 🔐 Sicurezza & Deploy

- Ambiente separato sviluppo / produzione
- Variabili ambiente configurabili
- Sistema di backup automatico DB via cron
- Versioning con tag di release (v1.0, v1.1, v1.2)
- Deploy controllato su VPS

---

## 📈 Risultato

Sistema attualmente in produzione e utilizzato quotidianamente dalla struttura.

Progetto pensato come **core riutilizzabile** per future installazioni su altre realtà ricettive.

---

## 🔖 Tag

{{< taglist tags="PHP, Backend, Database, VPS, Custom Software" >}}