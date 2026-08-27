# TMR Real Estate & RTO Services Platform 🏢 🚗

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB.svg?logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933.svg?logo=nodedotjs)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas_8.x-47A248.svg?logo=mongodb)](https://www.mongodb.com/)

> Full-stack bespoke business platform and operations workspace designed for **TMR Real Estate & RTO Services** — combining **5+ years of dedicated Hyderabad real estate brokerage** with **20+ years of driving licence and vehicle transport documentation assistance** across Telangana and Andhra Pradesh.

---

## 🌟 Overview & Business Purpose

**TMR Real Estate & RTO Services** is a client-first private consultancy led by **Thanniru Malli Karjuna Rao**. The platform operates across two core commercial verticals:

1. **Real Estate Brokerage (Hyderabad Focus — ~5 Years Experience)**:
   - Assistance with residential apartments, standalone villas, commercial retail/office spaces, and open plots.
   - Tailored matchmaking for property buyers, sellers, and rental seekers.
   - Direct on-ground verification, site visits, and legal documentation review across prime Hyderabad corridors (Gachibowli, Madhapur, Hitec City, Jubilee Hills, Banjara Hills, Kondapur, Kukatpally, Miyapur, Tellapur, Manikonda, etc.).

2. **Driving Licence & RTO Documentation Assistance (Telangana & Andhra Pradesh — ~20 Years Experience)**:
   - **Licence Services**: Learner's Licence (LLR) slot booking, Permanent Driving Licence (DL) procedural guidance, DL renewals, duplicate licences, address/name corrections, and vehicle class endorsements (MCWG, LMV, Transport).
   - **Vehicle Documentation**: Ownership transfer assistance (buyer & seller Form 29/30), bank hypothecation loan endorsement/cancellation (Form 35), duplicate RC smart card issuance, state NOC certificates (Form 28) for interstate vehicle movement, re-registration for 15+ year vehicles, commercial fitness certificates, road tax assistance, and pending challan guidance.

---

## 🚀 Key Platform Features

### 1. Public Client Web Application
- **Ultra-Fast Single Page Application**: Built with Vite and React 18 for instant routing and sub-second page transitions.
- **Mobile-First Responsive Design**: Optimized across all modern viewport aspect ratios (320px up to 4K ultra-wide) with notch and dynamic-island safe-area handling (`viewport-fit=cover`).
- **Interactive Service Selectors**: Interactive RTO documentation category selector and FAQ accordions.
- **Direct Lead Conversion Funnel**:
  - Context-aware WhatsApp triggers that pre-fill customer messages based on the specific service vertical.
  - One-click direct telephone call integration.
  - Multi-step Zod-validated enquiry submission form with NoSQL sanitization and instant submission feedback.
- **SEO & Structured Metadata**: Complete Open Graph metadata, semantic HTML5 structure, structured JSON-LD schemas (`LocalBusiness`, `RealEstateAgent`), auto-generated `sitemap.xml`, and clean `robots.txt`.

### 2. Private Admin Operations Portal (`/admin`)
- **Single-Operator Workspace**: Private authenticated dashboard for the business operator to manage incoming leads and track conversions.
- **Real-Time Operations Analytics**:
  - Metric summary cards: Total Leads, New Actionable, Real Estate, RTO & Vehicle, and General enquiries.
  - Recent customer submissions with quick one-click review.
- **Comprehensive Lead Management (`/admin/enquiries`)**:
  - Full-text search by customer name, phone number, location, or requirement.
  - Multi-category filtering (Real Estate, RTO, General) and lifecycle status filtering (NEW, CONTACTED, CLOSED).
  - Date sorting (newest/oldest) and server-side pagination.
- **Customer Engagement & CRM Actions (`/admin/enquiries/:id`)**:
  - One-click direct customer WhatsApp conversation launcher with pre-filled greeting.
  - Direct click-to-call phone button.
  - Interactive status pipeline management (`NEW` ➔ `CONTACTED` ➔ `CLOSED`).

---

## 🛠️ Tech Stack & Architecture

### Frontend
- **Framework**: React 18 with TypeScript 5.x
- **Build Tool**: Vite 6.x
- **Styling**: Tailwind CSS 3.4 with custom typography and color tokens
- **Routing**: React Router v6 with protected admin layouts
- **Icons**: Lucide React
- **Validation**: Zod schema validation

### Backend API
- **Runtime**: Node.js 20+
- **Server Framework**: Express 4.x with TypeScript
- **Database & ODM**: MongoDB Atlas with Mongoose 8.x
- **Authentication**: Stateless JSON Web Tokens (JWT) & Bcrypt password hashing
- **Security Middleware**: Helmet, CORS with dynamic origin matching, CSRF defense, and Express Rate Limiter
- **Testing**: Automated 35-test integration suite covering auth, session revocation, NoSQL injection, and data validation

---

## 📂 Project Directory Structure

```
TMR-Business-Platform/
├── public/                       # Static public assets, favicon, robots.txt, sitemap.xml
├── src/                          # Frontend React source code
│   ├── components/               # UI component library (Admin, Layout, UI, SEO)
│   ├── config/                   # Contact details, navigation, structured schemas
│   ├── context/                  # Admin authentication context & custom hooks
│   ├── pages/                    # Public pages (Home, Real Estate, RTO, About, Contact) & Admin views
│   ├── services/                 # Frontend API client services (AdminService, EnquiryService)
│   ├── types/                    # TypeScript interfaces and Zod schemas
│   ├── App.tsx                   # Main React routing switchboard
│   └── index.css                 # Tailwind directives & responsive utilities
├── server/                       # Backend Node.js / Express REST API
│   ├── src/
│   │   ├── config/               # Database connection (Mongoose) and env configuration
│   │   ├── controllers/          # Request handlers (auth, enquiry, adminEnquiry, health)
│   │   ├── middleware/           # Auth, CSRF protection, rate limiting, error handlers
│   │   ├── models/               # Mongoose schemas (Enquiry model with indexes)
│   │   ├── routes/               # API route definitions
│   │   ├── services/             # Core business logic & session management
│   │   ├── test-api.ts           # 35 automated security & API integration tests
│   │   └── app.ts                # Express app configuration & middleware
│   ├── package.json              # Server dependencies & scripts
│   └── tsconfig.json             # Server TypeScript configuration
├── package.json                  # Root workspace dependencies & scripts
├── tailwind.config.js            # Custom design tokens & theme configuration
└── vite.config.ts                # Vite bundler configuration
```

---

## 🛡️ Security Highlights

- **Decoupled Cross-Origin Dual Authentication**: Combines `SameSite=None; Secure=true` HTTP-only cookies with `Authorization: Bearer <token>` fallback for reliable cross-domain requests while strictly preventing CSRF exploits.
- **Timing-Safe Password Verification**: Admin passwords verified using Bcrypt `compare` with artificial timing delay mitigation.
- **Server-Side Session Revocation**: Admin logout immediately revokes the active session server-side, preventing reuse of any previously issued tokens.
- **Strict Payload Validation**: All inbound payloads validated against strict Zod and Mongoose schemas with character limits and regex constraints.
- **NoSQL Injection Resistance**: Sanitization and strong type enforcement prevent MongoDB `$gt` / `$where` / `$ne` operator injection attacks.
- **Audited Dependencies**: `0 vulnerabilities` across all dependencies.

---

## ⚠️ Disclaimer

**TMR Real Estate & RTO Services** is an independent private consultancy and document assistance provider. TMR is not an official government transport department (RTO) office or government agency. All official fees, taxes, fitness tests, and documentation procedures are governed strictly by the respective state transport departments of Telangana and Andhra Pradesh.

---

## 👤 Author

- **Business Owner & Operator**: Thanniru Malli Karjuna Rao
- **Development & Design**: Yashwanth Thanniru
- **Repository**: [Thanniru-yaswanth03/TMR-Business-Platform](https://github.com/Thanniru-yaswanth03/TMR-Business-Platform)
