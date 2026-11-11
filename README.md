# Krina Soni — Premium Personal Developer Portfolio

> **Theme**: Dark Purple + Creative + Dreamy + Futuristic Digital Universe  
> **Technologies**: React 19, Vite, Tailwind CSS, Three.js (WebGL), Framer Motion, Lucide Icons

---

## 🌌 Overview

An award-winning personal developer portfolio designed and built for **Krina Soni**, software developer and Master's candidate in Computing Science at Griffith College Dublin, Ireland.

### Key Highlights:
- **Original 3D Visual Identity**: High-performance interactive 3D Purple Glass Orb with refraction, inner glowing core, dual gyroscopic orbital rings, particle cloud, and mouse-parallax tracking (No personal photographs used).
- **Dynamic Hero Section**: Staggered animated name reveal, dynamic cycling roles ("Full Stack Developer", "Mobile App Developer", "Creative Problem Solver", "Technology Enthusiast"), and quick call-to-actions.
- **Glassmorphic Navigation**: Auto-blurring navigation bar with active section indicator and responsive mobile drawer.
- **About Me**: Narrative of Krina's journey from Information Technology to studying in Dublin, Ireland, paired with 4 floating glass pillars.
- **Interactive Tech Matrix**: 24 categorized technologies across Frontend, Backend, Mobile, and DevOps/AI with official SVG icons and clean descriptions. Strictly no arbitrary percentage bars.
- **Featured Projects & Deep Dive Modal**:
  1. **AI Travel Planner** (React, Node.js, Express, MongoDB, AI Integration)
  2. **StudyAI** (Swift, SwiftUI, Python, FastAPI, Firebase, Cloud Firestore, Core Data, AI/NLP)
  3. **Expense Tracker** (Kotlin, Jetpack Compose, Coroutines, Room DB)
  4. **SafeHer** (Kotlin, Jetpack Compose, Firebase, Google Maps SDK, Room DB, WorkManager, Location Services)
  - Interactive project detail modal with architectural breakdowns, key highlights, and editable links.
- **Education & Training Timelines**:
  - *Academic*: Master's in Computing Science (Griffith College Dublin), Bachelor's in IT, Diploma in IT.
  - *Specialized Training*: MERN Stack Development (6 months), Flutter Development (1 month).
- **Contact Section**: Transparent validation feedback, one-click email copy (`krina.soni.dev@example.com`), formatted message generator, and direct social links.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Running Locally
```bash
# 1. Navigate to the project directory
cd krina-soni-portfolio

# 2. Install dependencies (already installed)
npm install

# 3. Start development server
npm run dev

# 4. Open in your browser
http://localhost:5173
```

### Building for Production
```bash
npm run build
npm run preview
```

---

## 🎨 Color Palette Reference

| Name | Hex Code | Purpose |
|---|---|---|
| Background Void | `#090611` | Primary deep space backdrop |
| Secondary Background | `#110B20` | Cards, panels, and dropdowns |
| Primary Purple | `#8B5CF6` | Primary accents & active states |
| Electric Violet | `#A855F7` | Glowing gradients & buttons |
| Lavender Accent | `#C4B5FD` | Headings & highlighted text |
| Soft White | `#F5F3FF` | High-contrast body text |
| Muted Text | `#A7A0B8` | Descriptions & secondary labels |

---

## 📂 Project Architecture

```
krina-soni-portfolio/
├── index.html                   # SEO metadata, Google Fonts, theme tags
├── package.json
├── vite.config.js               # Vite + React + Tailwind CSS configuration
├── public/
│   └── favicon.svg              # Custom neon monogram favicon
├── src/
│   ├── main.jsx
│   ├── App.jsx                  # Master application orchestrator
│   ├── index.css                # Tailwind base + custom glassmorphic utilities
│   ├── data/
│   │   ├── projectsData.js      # Project catalog & architecture specs
│   │   ├── skillsData.js        # Tech matrix categorized datasets
│   │   └── timelineData.js      # Academic & professional training datasets
│   └── components/
│       ├── Navbar.jsx           # Glassmorphic navbar with active indicator
│       ├── Hero.jsx             # Staggered entrance, role carousel, and CTA
│       ├── OrbCanvas.jsx        # Three.js 3D floating purple glass orb
│       ├── Starfield.jsx        # Cosmic stardust canvas background
│       ├── CustomCursor.jsx     # Desktop glowing violet cursor trail
│       ├── About.jsx            # Dublin journey narrative & glass cards
│       ├── TechStack.jsx        # Interactive technology matrix with filter tabs
│       ├── Projects.jsx         # Project showcase cards with hover actions
│       ├── ProjectMockups.jsx   # Custom visual preview mockups
│       ├── ProjectModal.jsx     # Detailed project deep-dive modal
│       ├── EducationExperience.jsx # Glowing dual-timeline component
│       ├── Contact.jsx          # Validated inquiry form & copy email
│       ├── SocialIcons.jsx      # SVG brand icons (GitHub, LinkedIn, Instagram)
│       └── Footer.jsx           # Signature, social links, back-to-top
```

---

Designed & Developed with ❤️ for **Krina Soni**
