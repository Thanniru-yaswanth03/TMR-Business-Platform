# Production Deployment Guide: TMR Real Estate & RTO Services

This document details the step-by-step procedure for deploying the **TMR Real Estate & RTO Services** platform to production with **₹0 initial infrastructure cost**.

---

## 1. Architecture & Free-Tier Deployment Target

| Layer | Service / Provider | Free Tier Capability | Cost |
| :--- | :--- | :--- | :--- |
| **Frontend** | **Vercel** | Unlimited static/SPA hosting, Global CDN, SSL | ₹0 |
| **Backend** | **Render / Railway / Koyeb** | Free-tier Node.js web service, automatic HTTPS | ₹0 |
| **Database** | **MongoDB Atlas** | M0 Free Shared Cluster (512MB storage, automated backups) | ₹0 |

---

## 2. Step 1: MongoDB Atlas Setup (Free M0 Cluster)

1. **Sign in to MongoDB Atlas** at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. **Create a Free Cluster**:
   - Provider: AWS / GCP / Azure (Select region closest to users, e.g., `ap-south-1` Mumbai).
   - Cluster Tier: **M0 Free**.
3. **Create a Dedicated Database User**:
   - Navigate to **Security** → **Database Access** → **Add New Database User**.
   - Authentication Method: **Password**.
   - Username: e.g., `tmr_app_user`.
   - Password: Use a strong auto-generated password (e.g. 24+ characters).
   - Database User Privileges: **Read and write to any database** (or restrict to `tmr_business_platform`).
4. **Configure Network Access**:
   - Navigate to **Security** → **Network Access** → **Add IP Address**.
   - For cloud hosting platforms with dynamic IPs (Render/Vercel/Railway), select **Allow Access from Anywhere (`0.0.0.0/0`)**.
5. **Obtain the Connection String**:
   - Navigate to **Database** → **Connect** → **Drivers (Node.js)**.
   - Copy the URI: `mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/tmr_business_platform?retryWrites=true&w=majority`.
   - Replace `<username>` and `<password>` with your database user credentials.

---

## 3. Step 2: Backend Deployment (Render / Cloud Node.js Host)

### Option A: Deploying on Render (Recommended)
1. Sign up/Log in at [render.com](https://render.com).
2. Click **New +** → **Web Service**.
3. Connect your GitHub repository.
4. Configure service settings:
   - **Name**: `tmr-backend-api`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start` (runs `node dist/server.js`)
   - **Instance Type**: `Free`
5. **Set Backend Environment Variables**:
   In the Render dashboard under **Environment**:

   | Variable | Value / Description | Example |
   | :--- | :--- | :--- |
   | `NODE_ENV` | `production` | `production` |
   | `PORT` | `10000` (Render assigns dynamically) | `10000` |
   | `CORS_ORIGIN` | Your production frontend URL (no trailing slash) | `https://tmrservices.in` |
   | `MONGODB_URI` | Full MongoDB Atlas connection string | `mongodb+srv://tmr_user:...@cluster.mongodb.net/tmr_business_platform` |
   | `ADMIN_USERNAME` | Operator login username | `admin` |
   | `ADMIN_PASSWORD` | Strong administrative password | `GenerateStrongPassword2026!` |
   | `ADMIN_PASSWORD_HASH` | (Optional) Pre-hashed bcrypt password | |
   | `JWT_SECRET` | 32+ character random secret string | `Generate64CharRandomHexKeyHere` |
   | `JWT_EXPIRES_IN` | Session duration | `7d` |
   | `COOKIE_NAME` | Session cookie name | `tmr_admin_token` |
   | `RATE_LIMIT_WINDOW_MS` | Rate limit window in ms (15 mins) | `900000` |
   | `RATE_LIMIT_MAX_REQUESTS`| General rate limit per window | `50` |

6. Click **Create Web Service**. Note the deployed backend URL (e.g., `https://tmr-backend-api.onrender.com`).

---

## 4. Step 3: Frontend Deployment (Vercel)

1. Sign up/Log in at [vercel.com](https://vercel.com).
2. Click **Add New...** → **Project**.
3. Import the GitHub repository.
4. Configure project settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Set Frontend Environment Variables**:
   In the Vercel dashboard under **Environment Variables**:

   | Variable | Value | Description |
   | :--- | :--- | :--- |
   | `VITE_APP_NAME` | `TMR Real Estate & RTO Services` | Site title |
   | `VITE_APP_SHORT_NAME` | `TMR Services` | Brand mark |
   | `VITE_CONTACT_PHONE` | `9949948759` | Verified phone number |
   | `VITE_CONTACT_WHATSAPP` | `9949948759` | Verified WhatsApp number |
   | `VITE_API_BASE_URL` | `https://tmr-backend-api.onrender.com/api` | Deployed backend API base URL |

6. Click **Deploy**. Vercel will build and assign a production domain (e.g., `https://tmr-services.vercel.app` or custom domain `https://tmrservices.in`).

7. **Synchronize CORS on Backend**:
   - Go back to the backend hosting dashboard (Render).
   - Update `CORS_ORIGIN` to match the exact frontend production URL: `https://tmr-services.vercel.app` (or custom domain).

---

## 5. Step 4: Production Verification Checklist

Run through this post-deployment checklist:

- [ ] **Health Endpoint**: Open `https://<backend-domain>/api/health`. Confirm response returns HTTP 200 with `status: "healthy"` and `database: "connected"`.
- [ ] **Public Website**: Open the Vercel URL. Confirm Home, Real Estate, RTO Services, DL Subpage, About, and Contact render properly.
- [ ] **Direct URL Navigation**: Directly open `/real-estate` and `/contact` by refreshing the browser. Confirm Vercel SPA rewrite resolves correctly without 404.
- [ ] **Lead Submission**: Submit a test enquiry via the Contact form. Verify receipt confirmation and HTTP 201 response.
- [ ] **Admin Authentication**:
  - Open `/admin/login`.
  - Sign in with configured admin credentials.
  - Verify redirect to `/admin` dashboard.
- [ ] **Session & Cookie Security**:
  - Inspect cookies in DevTools: Verify cookie `tmr_admin_token` has `HttpOnly: true`, `Secure: true`, `SameSite: Lax`.
- [ ] **Enquiry Management**:
  - Verify test enquiry appears in `/admin/enquiries`.
  - Update status from `NEW` to `CONTACTED`.
  - Verify "Contact on WhatsApp" opens WhatsApp with pre-filled message.
- [ ] **Logout & Invalidation**:
  - Click "Logout" in admin header.
  - Verify cookie is cleared.
  - Attempting to directly access `/admin/enquiries` redirects to `/admin/login`.
- [ ] **SEO & Indexing**:
  - Verify `/robots.txt` disallows `/admin` and `/api`.
  - Verify `/sitemap.xml` lists only public marketing URLs.

---

## 6. How to Redeploy After Git Push

- **Frontend (Vercel)**: Automatically triggers a new production build upon every `git push` to the `main` branch.
- **Backend (Render / Railway)**: Automatically redeploys when changes are pushed to `server/**` or the repository.

---

## 7. How to Rotate Credentials if Compromised

If database credentials, admin password, or JWT secrets are ever compromised:

1. **Rotate MongoDB Password**:
   - Go to MongoDB Atlas → **Database Access** → Edit user password.
   - Update `MONGODB_URI` in backend host environment variables.
2. **Rotate Admin Password**:
   - Update `ADMIN_PASSWORD` in backend host environment variables.
3. **Rotate JWT Secret (Instant Invalidation)**:
   - Change `JWT_SECRET` in backend host environment variables to a new random 64-character string.
   - This immediately invalidates all previously issued admin tokens across all sessions.
4. Redeploy/restart the backend web service.
