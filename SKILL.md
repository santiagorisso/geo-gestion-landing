---
name: geo-gestion-landing
description: Build and maintain the premium, high-converting landing page for Geo-Gestión (SaaS for Argentine land surveying firms). Guides layout structure, Argentinian localization, copywriting tone, key features, and visual patterns.
---

# geo-gestion-landing

This skill guides the design, implementation, copywriting, and maintenance of the landing page for **Geo-Gestión**, the specialized SaaS for agrimensura (land surveying) studios in Argentina.

## When to use

Use this skill when modifying, extending, or refactoring any part of the Geo-Gestión landing page project, including the hero component, feature sections, pricing tables, testimonials, FAQs, and global CSS/Tailwind configuration.

## Key Project Guidelines

### 1. Copywriting & Tone
- **Argentine Informal (Vos/Voseo):** Use natural Argentine Spanish (e.g., *"Probá gratis por 30 días"*, *"Tus clientes te llaman todo el día"*, *"Olvidate del papel"*). Avoid Spanish from Spain (*"probéis"*) or generic Latin American Spanish (*"prueba"*, *"olvídate"*).
- **Direct & Problem-Focused:** Avoid generic enterprise buzzwords like *"solución integral end-to-end"*. Focus on the actual, daily headaches of a local agrimensor (ARBA files, client WhatsApp calls, uncollected fees).
- **The Pitch:** *"Geo-Gestión ordena tu estudio: expedientes del solicitado al archivado, clientes, pagos, catastro integrado, y un portal donde tus clientes ven el estado de su trabajo sin llamarte. En 30 días gratis."*

### 2. Core Structure & Sections
Any modifications should preserve or enhance the following sections:
- **Hero:** Impactful headline emphasizing control and relief. Dual CTA: *"Probá gratis 30 días"* (primary, no card required) and *"Ver demo"* (secondary).
- **The 3 Core Problems:**
  1. **Sin trazabilidad:** *"No sé en qué estado está el expediente X"*. (Solution: 6-stage tracker).
  2. **Cobros desorganizados:** *"No recuerdo qué cobré ni qué falta cobrar"*. (Solution: Payment records & real-time balance).
  3. **Llamadas constantes:** *¿Cuándo está mi mensura?"*. (Solution: 8-character public status portal).
- **Key Features (Tabs/Accordion):**
  - Expedientes (Catastral data, status history, 50MB attachments).
  - Clientes (CUIT/CUIL & DNI search).
  - Pagos (Seña, parciales, final, calculated balance).
  - Calendario Semanal (Field visits, mobile-friendly).
  - Integración ARBA (Buenos Aires land registry auto-complete).
  - Portal Público de Estado (Secure 8-character search).
- **Pricing:**
  - **Solo:** USD $19/mes (1 user, 25 active files).
  - **Estudio:** USD $45/mes (5 users + roles, unlimited files, most popular).
  - **Empresa:** USD $89/mes (unlimited users + roles, unlimited files).
  - *Annual Discount:* 2 months free (~16% savings).
  - *Offers:* Founder price for first 20 signups, referral programs (1 month free).

### 3. Visual & Aesthetic Principles
- **Color Palette:** Premium dark/light themes inspired by land/topography. Use rich greens, earth tones, and warm slate grays (`slate-900`, `emerald-500`, `amber-500`).
- **Typography:** Pair a clean, modern geometric sans-serif for UI (e.g., Outfit or Space Grotesk) with a highly readable sans/serif for body copy.
- **Micro-interactions:** Use `framer-motion` for transitions, list entries, status transitions, and tab switches to make the dashboard showcase feel interactive.

### 4. Technical Constraints
- Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**.
- **React 19 Standard:** Use direct `ref` prop passing (avoid legacy `forwardRef`) and `use()` where applicable.
- **Performance & SEO:** Maintain single `<h1>`, proper heading hierarchy, descriptive metadata, and responsive layout for mobile (field work is done on phones).

