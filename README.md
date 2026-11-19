# Ski & Magi — Official Website  
A fast, modern website built with Astro for the Ski & Magi winter trip.  
Includes program pages, event info, landing video, and a full ticket lookup system.

**NOTE:**
*This is a production repo, commits here will update the website. Use local for testing or development branch.*

[![Netlify Status](https://api.netlify.com/api/v1/badges/8da4c468-7fc0-4296-99f2-4d7d65636d1f/deploy-status)](https://app.netlify.com/projects/skiogmagi/deploys)

---

## 🌲 Tech Stack

- **Astro** (static-first frontend framework)  
- **TypeScript**  
- **Tailwind CSS**  
- **Mux Player** (landing hero background video)  
- **Cloudinary** (on-demand media optimization)  
- **Netlify** (CI/CD hosting)

---

## 🚀 Getting Started

### Requirements  
- Node.js **18+** (LTS recommended)  
- npm or pnpm  

### Install

\`\`\`bash
git clone <repo-url>
cd skiogmagi
npm install
\`\`\`

### Local development

\`\`\`bash
npm run dev
\`\`\`

Runs the site at:

\`\`\`
http://localhost:4321
\`\`\`

### Build for production

\`\`\`bash
npm run build
\`\`\`

Outputs to the \`/dist\` directory.

### Preview production build

\`\`\`bash
npm run preview
\`\`\`

---

## 🔐 Environment Variables

Create a \`.env\` file in the project root.

\`\`\`
PUBLIC_CLOUDINARY_CLOUD_NAME=deh4z2t5x
\`\`\`

Only public-prefixed env vars are exposed to the client in Astro.

Include this file in your repo:

\`\`\`
.env.example
\`\`\`

---

## 📁 Project Structure

\`\`\`
/
├─ public/
│   └─ scripts/
│       └─ ticket/
│           ├── page.js        # Page controller
│           ├── api.js         # fetch logic
│           └── ui.js          # render & dialog logic
│
├─ src/
│   ├─ pages/                  # Site pages (index, billett, program, etc.)
│   │   └─ api/                # Astro server endpoints (/api/tickets/[ref].ts)
│   ├─ components/             # UI components
│   ├─ layouts/                # PageLayout, wrappers
│   ├─ content/                # MDX (trip memories, etc.)
│   └─ styles/                 # Tailwind & global styles
│
├─ astro.config.mjs
└─ package.json
\`\`\`

---

## 🎫 Ticket Lookup System

The route \`/billett\` lets users fetch their ticket details.

### Frontend files  
Located in:

\`\`\`
public/scripts/ticket/
  page.js — handles form, URL params, auto-fetch & lifecycle
  api.js  — fetchTicketByRefId()
  ui.js   — DOM rendering, QR code, dialogs
\`\`\`

### How it works

1. User enters a ticket ID  
2. OR visits a direct link:

\`\`\`
/billett/?ticketId=ABC123
\`\`\`

3. \`page.js\`:
   - reads the query  
   - fetches ticket JSON from \`/api/tickets/<id>\`  
   - updates UI  
   - renders QR code  
   - cleans the URL afterward  

### API response format

\`\`\`json
{
  "id": "ABC123",
  "product": "Ski & Magi 2026",
  "ownerName": "Name Example",
  "email": "example@domain.com",
  "phone": "12345678",
  "originalOwner": null, // Must fetch this from internal supabase later
  "status": "ACTIVE"
}
\`\`\`

If you replace the backend later, update \`src/pages/api/tickets/[ref].ts\`.

---

## 🌐 Deployment (Netlify)

Site is deployed automatically via **Netlify → GitHub integration**.

### Netlify build settings

**Build command:**

\`\`\`
npm run build
\`\`\`

**Publish directory:**

\`\`\`
dist
\`\`\`

**Node version:**  
Set to **18.x** in **Site Settings → Build & Deploy → Environment**.

### Netlify environment variables  
Add under:

**Site Settings → Environment Variables**

\`\`\`
PUBLIC_CLOUDINARY_CLOUD_NAME
\`\`\`

---

## 🧰 Maintenance Notes

- **Video hero:** Update Mux playback ID in \`Hero.astro\`.  
- **Trip memories:** Add MDX files in \`src/content/memories\`.  
- **Ticket system:**  
  - Scripts must stay in \`/public/scripts/ticket/\`  
  - Ensure \`/api/tickets/[ref].ts\` is returning valid JSON with \`refId\` uppercase  
- **QR codes:** Free QR service works, Cloudinary fetch available for performance.

---

## 🗿 License

This project is proprietary and maintained for the Ski & Magi crew.

PS: GPT for rask readme
