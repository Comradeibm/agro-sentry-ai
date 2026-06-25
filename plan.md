# Implementation Plan - Sentinel AgroGuard AI

Build a modern, mobile-first agricultural platform tailored for African farmers, featuring a professional green/white theme, role-based access control, and a comprehensive dashboard for farm management.

## Scope Summary
- **Public Pages:** Home, About, Contact, Pricing.
- **Auth System:** Registration, Login, Forgot Password, Reset Password, Email Verification.
- **Dashboard:** Role-based (Farmer, Expert, Admin) with sidebar/topbar and feature placeholders.
- **Design:** Green/White agricultural theme using Tailwind CSS and Lucide icons.
- **Languages Support:** English, Hausa, Yoruba, Igbo, Nigerian Pidgin (UI labels/dropdown).

## Non-Goals
- Real-time AI processing (placeholders for "Crop Diagnosis" etc.).
- Live backend/database (mocked authentication and local state).
- Real-time weather/market data integration (mocked data).

## Assumptions & Open Questions
- **Assumption:** Using `react-router-dom` for navigation.
- **Assumption:** Mocking authentication state using `localStorage` and a React Context.
- **Question:** Do we need actual translations for all content now? *Plan: Implement a language switcher UI and translate key navigation/headings.*

## Affected Areas
- **Frontend:** New routes, components for landing page, auth forms, and dashboard.
- **State Management:** Auth context for role-based access.
- **Styling:** Custom green/white theme via Tailwind config or CSS variables.

## Phases

### Phase 1: Foundation & Navigation
- Install dependencies: `react-router-dom`, `lucide-react`.
- Set up Routing structure (Public vs Private routes).
- Implement Auth Context for role management (Farmer, Expert, Admin).
- **Owner:** frontend_engineer

### Phase 2: Public Landing Pages
- Create `LayoutPublic` with Navbar and Footer.
- Build Homepage (Hero, Features, Testimonials).
- Build About, Contact (with form), and Pricing pages.
- Apply the green/white agricultural theme.
- **Owner:** frontend_engineer

### Phase 3: Authentication System
- Implement Login, Register (with role selection).
- Implement Forgot Password and Reset Password UI.
- Mock the auth flow (saving "user" to localStorage).
- **Owner:** frontend_engineer

### Phase 4: Dashboard & Role-Based Access
- Create `LayoutDashboard` with Sidebar and Topbar.
- Implement Role-Based Access Control (RBAC) to protect dashboard routes.
- Build Dashboard Home with summary widgets.
- Create placeholder pages for all menu items (Crop Diagnosis, Pest Detection, etc.).
- **Owner:** frontend_engineer

### Phase 5: Language & Refinement
- Add Language Switcher (English, Hausa, Yoruba, Igbo, Pidgin).
- Finalize mobile-first responsiveness and large touch-friendly buttons.
- Polish UI with realistic agricultural images (using Unsplash/Pexels URLs).
- **Owner:** quick_fix_engineer

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build foundation, public pages, auth, and dashboard structure.
2. quick_fix_engineer — Polish UI, add language switcher, and ensure mobile responsiveness.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4
- **Scope:** Full application structure, routing, auth logic (mock), and landing/dashboard layouts.
- **Files:** `src/App.tsx`, `src/context/AuthContext.tsx`, `src/pages/*`, `src/components/layout/*`.
- **Depends on:** none
- **Acceptance criteria:** All routes working; Auth context correctly identifies Farmer/Expert/Admin; Dashboard layout matches requirements with sidebar.

### 2. quick_fix_engineer
- **Phases:** 5
- **Scope:** Language switcher implementation, CSS refinements for "large buttons", and adding realistic placeholder images.
- **Files:** `src/components/layout/Navbar.tsx`, `src/index.css`.
- **Depends on:** frontend_engineer (Phase 4)
- **Acceptance criteria:** Language dropdown functions (updates UI labels); Mobile view has large, accessible buttons; High-quality agricultural imagery used throughout.
