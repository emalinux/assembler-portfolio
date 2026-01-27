---
title: "Hotel & Restaurant Spada Reale"
thumb: "img/spada.webp"
description: "Official website of Spada Reale Restaurant (Roaschia, CN) – built with Hugo and auto-deployed via Netlify. Multilingual, responsive, and elegant design."
draft: false
weight: 3
tags: ["Hugo", "Hotel", "Restaurant", "Static"]
link: "https://spadareale.com/en/"
cliente: "Spada Reale"
anno: "2025"
stack: "Hugo, custom HTML & CSS, multilingual, Netlify deploy"
online: true
---

<img src="/img/spada.webp" alt="Hotel & Restaurant Spada Reale" class="project-hero" />

## 🍷 Overview

Official website of **Spada Reale**, a charming hotel and restaurant in the heart of Roaschia (Italy).

Built with **Hugo**, the project is fully customized, multilingual (Italian, English, French), responsive, and optimized for display on shopfront screens (night mode enabled).

It features dedicated sections for rooms, restaurant, local shop, regional products, and contact details — all presented with an elegant layout and streamlined navigation.

[🌐 Visit the website →](https://spadareale.com/en/)

---

## 🚀 Technologies

- **Hugo** (lightning-fast static site generator)
- **Custom HTML/CSS** with responsive design
- **Netlify** (continuous deploy from GitHub)
- **i18n** multilingual system (IT, EN, FR)
- Automatic dark mode after 6 PM

---

## 📂 Project structure

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

## ✨ Key Features

- Sticky navigation with theme and language toggle
- Elegant layout, readable on any device
- Carefully crafted translations
- Virtual shop with 6 local products (bread, honey, souvenirs…)
- Embedded map and contact form
- Nighttime display mode for shop windows

---

## 🛠️ Dev & testing

To test the site locally:

hugo server -D

The project is fully versioned on GitHub and deployed via Netlify.

---

## 🔖 Tag

{{< taglist tags="Hugo, Hotel, Restaurant, Static" >}}