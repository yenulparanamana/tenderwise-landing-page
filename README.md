# TenderWise — Landing Page

Official public landing page for **TenderWise**, an AI-powered tender eligibility and bid-readiness concept for Sri Lankan SMEs, developed as an Agile Team Project.

**Domain (once connected):** https://etenderwise.com  
**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React.  
**Hosting:** Cloudflare Pages (GitHub integration).

## Run locally in IntelliJ IDEA

1. Open this folder (`TenderWise-Landing-Page`) as an IntelliJ project.
2. Open **Terminal** in IntelliJ. Make sure Node.js and npm are installed.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed in the terminal, usually http://localhost:5173/.

## Verify the production build

```bash
npm run build
npm run preview
```

Build output: `dist/`. `.gitignore` excludes `node_modules/`, `dist/`, `.env*`, and IntelliJ `.idea/` files from Git.

## Cloudflare Pages settings

| Field | Value |
| --- | --- |
| Framework preset | React (Vite) or Vite |
| Root directory | `/` (repository root) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |

Connect your GitHub repository from **Cloudflare → Workers & Pages → Create → Pages → Import/connect Git repository** (names can vary as the dashboard updates). Confirm the site works on its `*.pages.dev` address before connecting `etenderwise.com`.

To connect the root domain, add `etenderwise.com` to Cloudflare as a site/zone and update the nameservers in Namecheap **only to the two exact nameservers assigned by your Cloudflare account**. Then set the custom domain in Pages. Cloudflare manages DNS after nameserver delegation; Namecheap remains the registrar. Do not invent DNS values. Preserve any mail-related DNS records before switching nameservers if you later use custom-domain email.

## Things to know before launch

- The **waitlist form is a preview** (`src/config/waitlist.ts` has `WAITLIST_ENABLED = false`), so it does **not** store names or email addresses. Do not claim it is working until a backend/form provider is configured and tested.
- The contact email **tenderwise.team@gmail.com** is a real mailto link; check the team's inbox to answer inquiries.
- The dashboard shows **sample data**; it is not a connected live eligibility engine.
- The static landing page does not need a separately purchased Namecheap hosting plan or SSL certificate.
- For future changes, edit locally → test → commit → push to `main`; Cloudflare Pages rebuilds automatically.
