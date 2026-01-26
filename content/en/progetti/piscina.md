---
title: "Camping Piscina Demonte"
thumb: "img/piscina.webp"
description: "Tourism website, built with Hugo and optimized for mobile devices."
draft: false
weight: 1
tags: ["Hugo", "Tourism", "Camping", "Static"]
link: "https://campingpiscinademonte.com/"
---

<img src="/img/piscina.webp" alt="Camping Piscina Demonte" class="project-hero" />

## 🏕️ Overview

Official website of **Camping Piscina Demonte**, built with Hugo and deployed via Netlify.

Easy to navigate, elegant on all devices, and custom-made to convey the experience of a mountain stay.

[🌐 Visit the site →](https://campingpiscinademonte.com/)

---

## 🚀 Technologies

- **Hugo** (v0.121.2 extended)
- **Netlify** (automatic deploy via Git)
- **GitHub** (versioning and collaboration)
- **Custom theme** (layouts, shortcodes, partials)
- **Responsive CSS** styling

---

## 📂 Project Structure

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

✨ Key Features
•Dynamic hero section and featured areas
•Cards for chalet, pitches, pool, igloo, etc.
•Responsive photo gallery
•Editable sections (Regulation, Price List)
•Contact section with map, phone and form

---
```
## 🛠️ Dev & testing

Per testare il sito in locale:

```bash
hugo server -D
```


## 🔖 Tag
```markdown
{{< taglist tags="Hugo, Turismo, Camping, Statico" >}}