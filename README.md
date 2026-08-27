# TMR Real Estate & RTO Services Platform 🏢 🚗

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB.svg?logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933.svg?logo=nodedotjs)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas_8.x-47A248.svg?logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)

> Production-ready, enterprise-grade business platform and operations workspace for **TMR Real Estate & RTO Services** — combining **5+ years of dedicated Hyderabad real estate brokerage** with **20+ years of driving licence and vehicle transport documentation assistance** across Telangana and Andhra Pradesh.

---

## 📑 Table of Contents

- [Overview & Business Purpose](#-overview--business-purpose)
- [Key Features](#-key-features)
  - [Public Client Experience](#1-public-client-experience)
  - [Private Admin Operations Portal](#2-private-admin-operations-portal)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started & Local Development](#-getting-started--local-development)
  - [Prerequisites](#prerequisites)
  - [1. Clone Repository](#1-clone-repository)
  - [2. Frontend Setup](#2-frontend-setup)
  - [3. Backend Setup](#3-backend-setup)
  - [4. Running Development Servers](#4-running-development-servers)
  - [5. Running Automated Security & API Tests](#5-running-automated-security--api-tests)
- [Environment Variables Reference](#-environment-variables-reference)
  - [Frontend (`.env`)](#frontend-env)
  - [Backend (`server/.env`)](#backend-serverenv)
- [Security Architecture & Audit Status](#-security-architecture--audit-status)
- [Deployment Architecture](#-deployment-architecture)
  - [Frontend on Vercel](#frontend-on-vercel)
  - [Backend on Render](#backend-on-render)
- [Disclaimer](#-disclaimer)
- [Author & License](#-author--license)

---

## 🌟 Overview & Business Purpose

**TMR Real Estate & RTO Services** is a client-centric private consultancy led by **Thanniru Malli Karjuna Rao**. The platform operates across two high-demand service domains:

1. **Real Estate Brokerage (Hyderabad Focus — ~5 Years Experience)**:
   - Assistance with residential apartments, standalone villas, commercial retail/office spaces, and open plots.
   - Services for buyers, property owners (selling), and landlords (rental matchmaking).
   - Local on-ground verification, site visits, and property documentation checking across prime Hyderabad corridors (Gachibowli, Madhapur, Hitec City, Jubilee Hills, Banjara Hills, Kondapur, Kukatpally, Miyapur, Tellapur, Manikonda, and more).

2. **Driving Licence & RTO Documentation Assistance (Telangana & Andhra Pradesh — ~20 Years Experience)**:
   - **Licence Services**: Learner's Licence (LLR) slot booking, Permanent Driving Licence (DL) procedural guidance, DL renewals, duplicate licences, address/name corrections, and vehicle class endorsements (MCWG, LMV, Transport).
   - **Vehicle Documentation**: Ownership transfer assistance (buyer & seller Form 29/30), bank hypothecation loan endorsement/cancellation (Form 35), duplicate RC smart card issuance, state NOC certificates (Form 28) for interstate vehicle movement, re-registration for 15+ year vehicles, fitness certificates, road tax assistance, and pending challan guidance.

---

## 🚀 Key Features

### 1. Public Client Experience
- **Ultra-Fast Single Page Application**: Built with Vite and React 18 for instant routing and sub-second page transitions.
- **Mobile-First Responsive Design**: Optimized across all modern viewport aspect ratios (320px up to 4K ultra-wide) with notch and dynamic-island safe-area handling (`viewport-fit=cover`).
- **Interactive Service Selectors**: Interactive RTO documentation category selector and FAQ accordions.
- **Smart Contact Funnel**:
  - Context-aware WhatsApp triggers that pre-fill customer messages based on the specific service and section.
  - Direct telephone call integration.
  - Multi-step Zod-validated enquiry submission form with NoSQL sanitization and instant submission feedback.
- **SEO & Search Engine Optimized**: Complete Open Graph metadata, semantic HTML5 structure, structured JSON-LD schemas (`LocalBusiness`, `RealEstateAgent`), auto-generated `sitemap.xml`, and clean `robots.txt`.

### 2. Private Admin Operations Portal (`/admin`)
- **Single-Operator Secure Access**: Authenticated workspace for the business owner to monitor and convert leads.
- **Real-Time Operations Dashboard**:
  - Top metric summary cards: Total Leads, New Actionable, Real Estate, RTO & Vehicle, and General leads.
  - Recent customer submissions with quick one-click review.
- **Comprehensive Lead Management (`/admin/enquiries`)**:
  - Full-text search by customer name, phone number, location, or requirement.
  - Multi-category filtering (Real Estate, RTO, General) and lifecycle status filtering (NEW, CONTACTED, CLOSED).
  - Date sorting (newest/oldest) and server-side pagination.
- **Lead Detail & Customer Engagement (`/admin/enquiries/:id`)**:
  - One-click direct customer WhatsApp conversation launcher with pre-filled greeting.
  - Direct click-to-call phone button.
  - Interactive status pipeline management (`NEW` ➔ `CONTACTED` ➔ `CLOSED`).

---

## 🛠️ Tech Stack & Architecture

### Frontend
| Technology | Description |
| :--- | :--- |
| **React 18** | Modern component library with Hooks and Context API |
| **TypeScript 5.x** | Strict type safety and client-side interfaces |
| **Vite 6.x** | Next-generation frontend build tooling and bundler |
| **Tailwind CSS 3.4** | Custom luxury design system (Navy `#0E233D`, Gold `#B88E36`, Emerald `#059669`) |
| **React Router v6** | Declarative client-side routing with protected admin layouts |
| **Lucide React** | Feather-light SVG iconography |
| **Zod** | Schema definition and strict runtime validation |

### Backend API
| Technology | Description |
| :--- | :--- |
| **Node.js 20+** | LTS JavaScript runtime environment |
| **Express 4.x** | Fast, minimalist REST API framework |
| **TypeScript 5.x** | Strict server-side typing and validation |
| **MongoDB & Mongoose 8.x** | Production document database with strict indexing |
| **JSON Web Tokens (JWT)** | Stateless signed session verification |
| **Bcrypt.js** | Cryptographic password hashing |
| **Helmet** | HTTP security headers (CSP, HSTS, X-Content-Type-Options) |
| **CORS** | Configurable origin filtering with dynamic Vercel wildcard matching |
| **Express Rate Limit** | Brute-force and DDoS throttling on API and login endpoints |

---

## 📂 Project Directory Structure

```
TMR-Business-Platform/
├── public/                       # Static public assets, favicon, robots.txt, sitemap.xml
├── src/                          # Frontend React source code
│   ├── components/               # Reusable UI component library
│   │   ├── admin/                # Admin navigation, layout & protected routes
│   │   ├── layout/               # Navbar, Footer, AppLayout, PageLoader
│   │   ├── seo/                  # SEOHead component for dynamic page metadata
│   │   └── ui/                   # Button, Card, Badge, Input, Select, Textarea, WhatsAppCTA, PhoneCTA
│   ├── config/                   # Contact details, navigation links, structured data schemas
│   ├── context/                  # Admin authentication context & custom hooks
│   ├── pages/                    # Application route views
│   │   ├── AboutPage/            # Owner background and credibility
│   │   ├── Admin/                # Admin login, dashboard, enquiry list, and detail views
│   │   ├── ContactPage/          # Direct channels, service coverage & enquiry form
│   │   ├── DesignSystemPage/     # Brand design tokens & component showcase
│   │   ├── HomePage/             # Core landing page & conversion funnels
│   │   ├── NotFoundPage/         # 404 error page
│   │   ├── RealEstatePage/       # Hyderabad property brokerage section
│   │   └── RtoServicesPage/      # TS & AP RTO & Driving Licence section
│   ├── services/                 # Frontend API client services (AdminService, EnquiryService)
│   ├── types/                    # TypeScript interfaces and Zod schemas
│   ├── App.tsx                   # Main React routing switchboard
│   ├── index.css                 # Tailwind directives, custom font imports & mobile utilities
│   └── main.tsx                  # React DOM entry point
├── server/                       # Backend Node.js / Express REST API
│   ├── src/
│   │   ├── config/               # Database connection (Mongoose) and env configuration
│   │   ├── controllers/          # Request handlers (auth, enquiry, adminEnquiry, health)
│   │   ├── middleware/           # Auth, CSRF protection, rate limiting, error handlers
│   │   ├── models/               # Mongoose schemas (Enquiry model with indexes)
│   │   ├── routes/               # API route definitions (/api/enquiries, /api/auth, /api/admin)
│   │   ├── services/             # Core business logic & session management
│   │   ├── types/                # Backend TypeScript types
│   │   ├── utils/                # Standardized ApiResponse helper
│   │   ├── app.ts                # Express app configuration, CORS, security headers
│   │   ├── server.ts             # Server entry point and database lifecycle listener
│   │   └── test-api.ts           # 35 automated security & API integration tests
│   ├── package.json              # Server dependencies & build scripts
│   └── tsconfig.json             # Server TypeScript configuration
├── .env.example                  # Frontend environment template
├── DEPLOYMENT.md                 # Production deployment step-by-step guide
├── index.html                    # Root HTML template with viewport-fit=cover
├── package.json                  # Root workspace dependencies & build scripts
├── tailwind.config.js            # Custom theme palette and typography definitions
└── vite.config.ts                # Vite bundler configuration and path aliases
```

---

## 💻 Getting Started & Local Development

### Prerequisites
- **Node.js**: `v20.0.0` or higher
- **npm**: `v10.0.0` or higher
- **MongoDB**: Local MongoDB instance (`mongodb://localhost:27017`) or a free [MongoDB Atlas Cluster](https://www.mongodb.com/atlas/database)

---

### 1. Clone Repository

```bash
git clone https://github.com/Thanniru-yaswanth03/TMR-Business-Platform.git
cd TMR-Business-Platform
```

---

### 2. Frontend Setup

Install root dependencies:
```bash
npm install
```

Create a local environment file for the frontend:
```bash
cp .env.example .env
```
*(Optionally adjust `VITE_API_BASE_URL` if running the backend on a different port)*

---

### 3. Backend Setup

Navigate to the `server/` directory and install dependencies:
```bash
cd server
npm install
```

Create the server environment file:
```bash
cp .env.example .env
```

Open `server/.env` and configure your settings:
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/tmr_business_platform
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your_long_random_jwt_secret_at_least_32_characters_long
```

---

### 4. Running Development Servers

You can run both servers concurrently from the root directory:

**Terminal 1 — Backend API:**
```bash
npm run server:dev
```
*Backend server runs at `http://localhost:5000` (Health check at `http://localhost:5000/api/health`)*

**Terminal 2 — Frontend Application:**
```bash
npm run dev
```
*Frontend application runs at `http://localhost:3000`*

---

### 5. Running Automated Security & API Tests

The platform includes an automated 35-test integration suite covering authentication, session revocation, NoSQL injection defense, IDOR access controls, input sanitization, rate limiting, and CORS verification:

```bash
npm --prefix server run test
```

Expected output:
```text
🧪 Starting Comprehensive TMR Backend & Admin Auth Hardening API Tests...
✅ PASS: 1. Health check endpoint responds
✅ PASS: 2. Public enquiry creation works without authentication (201)
...
✅ PASS: 35. All test cases passed successfully.
📊 Test Results: 35/35 tests passed.
```

---

## 🔐 Environment Variables Reference

### Frontend (`.env`)

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `VITE_APP_NAME` | Full business brand name | `TMR Real Estate & RTO Services` |
| `VITE_APP_SHORT_NAME` | Compact brand wordmark | `TMR Services` |
| `VITE_CONTACT_PHONE` | Formatted phone number display | `+91 99499 48759` |
| `VITE_CONTACT_WHATSAPP`| International WhatsApp phone digits | `919949948759` |
| `VITE_API_BASE_URL` | Backend REST API base endpoint | `http://localhost:5000/api` |

---

### Backend (`server/.env`)

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `PORT` | Server listening port | `5000` |
| `NODE_ENV` | Runtime environment mode | `development` / `production` |
| `CORS_ORIGIN` | Allowed frontend origin URL(s) | `https://your-frontend.vercel.app` |
| `MONGODB_URI` | MongoDB connection URI | `mongodb+srv://user:pass@cluster.mongodb.net/tmr` |
| `ADMIN_USERNAME` | Admin login username | `admin` |
| `ADMIN_PASSWORD` | Plaintext initial password *(auto-hashed)* | `your_secure_password` |
| `ADMIN_PASSWORD_HASH` | Optional pre-computed bcrypt hash | `$2a$12$...` |
| `JWT_SECRET` | Secret key for signing JWT tokens | `min-32-chars-random-string` |
| `JWT_EXPIRES_IN` | Token duration | `7d` |
| `COOKIE_NAME` | Session cookie identifier | `tmr_admin_token` |
| `RATE_LIMIT_MAX_REQUESTS`| Max requests per 15 min window | `10` (for public forms) |

---

## 🛡️ Security Architecture & Audit Status

The codebase undergoes regular security audits:

- ✅ **Zero Secrets Committed**: Verified via automated repository audit; all `.env` files, production database connection strings, passwords, and secrets are strictly excluded from version control via `.gitignore`.
- ✅ **Decoupled Cross-Origin Dual Auth**: Combines `SameSite=None; Secure=true` HTTP-only cookies with `Authorization: Bearer <token>` fallback to ensure 100% reliable cross-domain authentication between Vercel and Render while preventing CSRF exploits.
- ✅ **Timing-Safe Authentication**: Admin passwords verified using Bcrypt `compare` with artificial timing delay mitigation.
- ✅ **Server-Side Session Registry**: Admin logout instantly revokes the session ID server-side, preventing reuse of any previously issued tokens.
- ✅ **Strict Input Validation**: All inbound payloads validated against strict Zod and Mongoose schemas with character length limits and regex constraints.
- ✅ **NoSQL Injection Resistance**: Express sanitization and strong type enforcement prevent MongoDB `$gt` / `$where` / `$ne` operator injection attacks.
- ✅ **Zero Vulnerabilities**: `npm audit` reports **0 vulnerabilities** across all root and backend dependencies.

---

## 🌐 Deployment Architecture

```
[ Visitor / Admin Browser ]
           │
           ├─── (HTTPS) ───► Vercel (Frontend SPA: *.vercel.app)
           │
           └─── (REST API) ─► Render (Backend Node API: *.onrender.com)
                                   │
                                   └───► MongoDB Atlas (Encrypted Database)
```

### Frontend on Vercel
1. Import repository on [Vercel Dashboard](https://vercel.com).
2. Framework Preset: **Vite**.
3. Environment Variables:
   - Add `VITE_API_BASE_URL` with your Render backend URL (e.g., `https://tmr-business-platform.onrender.com/api`).
4. Click **Deploy**.

### Backend on Render
1. Create a new **Web Service** on [Render](https://render.com).
2. Root Directory: `server`.
3. Build Command: `npm install --include=dev && npm run build`.
4. Start Command: `node dist/server.js`.
5. Environment Variables: Add all required server variables (`NODE_ENV=production`, `MONGODB_URI`, `JWT_SECRET`, `CORS_ORIGIN`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`).
6. Deploy service.

---

## ⚠️ Disclaimer

**TMR Real Estate & RTO Services** is an independent private consultancy and document assistance provider. TMR is not an official government transport department (RTO) office or government agency. All official fees, taxes, fitness tests, and documentation procedures are governed strictly by the respective state transport departments of Telangana and Andhra Pradesh.

---

## 👤 Author & License

- **Business Owner & Operator**: Thanniru Malli Karjuna Rao
- **Development**: Yashwanth Thanniru
- **Repository**: [Thanniru-yaswanth03/TMR-Business-Platform](https://github.com/Thanniru-yaswanth03/TMR-Business-Platform)
- **License**: [MIT](LICENSE) © 2026 TMR Real Estate & RTO Services. All rights reserved.
