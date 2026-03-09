# Sudan Building Damage Assessment System - Documentation

## 📋 Overview
The **Sudan Building Damage Assessment System** is a sophisticated, AI-driven web application designed to analyze and assess structural damage to buildings in Sudan caused by conflict. It provides a seamless, multi-step workflow for users to upload satellite/aerial imagery, provide location context, and receive detailed AI-generated damage reports.

---

## 🚀 Technology Stack

### Core
- **React 19**: Modern UI library for building interactive interfaces.
- **TypeScript**: Ensures type safety and improves developer productivity.
- **Vite**: Ultra-fast build tool and development server.

### Styling & UI
- **Tailwind CSS 4**: Utility-first CSS framework for rapid design.
- **Radix UI**: Unstyled, accessible primitives for high-quality components.
- **Lucide React**: Beautiful, consistent icon library.
- **Glassmorphism**: Modern visual style with blurred backgrounds and subtle borders.

### State & Logic
- **React Context API**: Used for global state management (Language, Theme).
- **Custom Hooks**: Encapsulated logic for the analysis process (`useAnalysis`).
- **React-Router 7**: Client-side routing for seamless page transitions.

### Key Features
- **i18next**: Comprehensive translation support for English and Arabic.
- **Next Themes**: Seamless dark/light mode switching with system preference detection.
- **Recharts**: Dynamic data visualization for damage statistics.
- **Framer Motion / CSS Animations**: smooth transitions and premium visual effects.

---

## 🏗️ Architecture & Project Structure

```text
src/
├── components/     # Reusable UI molecules and atoms (Radix/Shadcn)
├── contexts/       # Global context providers (Language, Theme)
├── hooks/          # Custom business logic hooks
├── layout/         # Structural components (Navbar, Headers)
├── pages/          # Full page views and analysis step components
├── services/       # API interaction layer
├── types/          # Global TypeScript interfaces
└── utils/          # Helper functions and formatting
```

---

## 📄 Pages & Workflow

### 1. Landing Page (`pages/index.tsx`)
The entry point of the application.
- **Hero Section**: Visually stunning introduction with animated gradients and background blobs.
- **Quick Stats**: High-level overview of assessment data.
- **Regions Overview**: Interactive cards showing high-priority areas with 100% assessment completion.
- **Features & Team**: Information about the system's capabilities and the development team.

### 2. Analysis Workflow (`pages/Analysis.tsx`)
A linear multi-step process managed by the `useAnalysis` hook.
- **Step 1: Image Upload**: Component for dragging and dropping Pre-war and Post-war satellite imagery.
- **Step 2: Location Information**: Form for providing Sudan State, Conflict Period, Coordinates, and Description.
- **Step 3: Review**: Final check of all provided data before starting the AI process.

### 3. Processing State (`pages/Loading.tsx`)
An immersive loading experience that visualizes the AI analysis progress with a circular progress bar and dynamic status messages.

### 4. Results Dashboard (`pages/Results.tsx`)
A comprehensive report generated after analysis.
- **Damage Statistics**: Grid of cards showing Destroyed, Major Damage, Minor Damage, and No Damage building counts.
- **Visual Analysis**: AI-generated heatmaps and masks comparing war-affected areas.
- **Export & Filter**: Tools to filter data by category/date and export results to PDF/CSV.

---

## 🧩 Key Components

### `layout/Navbare/Navbar.tsx`
The primary navigation bar. Features an animated colorful border, language toggle, and theme switcher. It dynamically adjusts for RTL (Arabic) layouts.

### `layout/Header/Header.tsx`
A specialized header for the Analysis flow, showing the current step and a progress bar.

### `layout/Header/ResultsHeader.tsx`
The header for the Results page, highlighting the successful completion of the assessment.

### `components/common/ThemeToggle.tsx` & `LanguageToggle.tsx`
Global controls for the user experience, persisted across sessions.

---

## 🌐 Localization (i18n)
The system fully supports **English (EN)** and **Arabic (AR)**.
- **RTL Support**: The layout automatically mirrors when Arabic is selected.
- **Arabic Typography**: Uses the "Cairo" font for optimal readability.
- **Context-Aware**: The `useLanguage` context ensures all components re-render instantly upon language change.

---

## 🎨 Visual Design System
The project follows a **Premium Colorful Design** philosophy:
- **Vibrant Gradients**: Used for buttons, text highlights, and borders.
- **Animated Blobs**: Soft, moving background shapes that add depth and life to the UI.
- **Dark Mode Excellence**: Carefully tuned colors and transparency to ensure high contrast and readability in dark themes.
- **Global Cursor**: Interactive elements (buttons, links) use a global pointer for better UX.

---

## 🛠️ Setup & Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

*This documentation is maintained by the development team and covers the core architecture of the Building Damage Assessment System.*
