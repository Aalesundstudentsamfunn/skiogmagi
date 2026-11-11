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
PUBLIC_CLOUDINARY_CLOUD_NAME=skiogmagi
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

The standalone ticket lookup page has been removed. Room booking still uses the ticket API at `src/pages/api/tickets/[ref].ts`.

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

## Security headers

The catch-all rule in `netlify.toml` adds security headers to static responses.
`src/middleware.ts` adds the same baseline to Astro's dynamic responses, including
all ticket API statuses with `Cache-Control: no-store`. The room availability
function also adds the baseline directly, since Netlify functions do not inherit
the static header configuration. Shared values are in `src/utils/security-headers.js`;
keep the TOML values in sync. Netlify already supplies HSTS on the production domain.

The CSP restricts base URLs, plugin content, framing, and form submissions, and
upgrades insecure resource URLs. It does not restrict script or resource sources
yet and is not a complete XSS defense. Inline scripts and image load handlers,
Mux, Cloudinary, Google Fonts, and the external QR service need review before
introducing a strict source policy. External ticket links are ordinary navigation
and are not restricted by `form-action 'self'`; the existing forms submit locally.

The previous catch-all seven-day cache override has been removed so pages use
Netlify's default revalidation. Fingerprinted assets retain their long cache rules.
Previously cached pages may still use their original lifetime until they expire.

Before publishing, test a Netlify deploy preview: home, program, ticket lookup,
booking, galleries, video, and external ticket links. Verify static response headers
and ticket API success/error headers. Use test data for ticket and booking actions.
Local Astro development does not apply Netlify's static TOML header rules.
After publishing, verify production responses and rescan with SecurityHeaders.
A scanner grade is not a full review of ticket access or booking authorization.
