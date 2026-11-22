
# TenderWise — Landing Page

Official public landing page for **TenderWise**, an AI-powered tender eligibility and bid-readiness platform concept for Sri Lankan SMEs, developed as an Agile Team Project (ATP).

## Live Website

**Website:** https://etenderwise.com  
**Cloudflare Pages:** https://tenderwise-landing-page.pages.dev  
**Status:** Deployed and Active  
**Hosting:** Cloudflare Pages (Free Plan)  
**Domain Registrar:** Namecheap  
**DNS Management:** Cloudflare  
**SSL/HTTPS:** Enabled

## Technology Stack

- React 19 — Frontend development
- TypeScript — Type-safe development
- Vite — Development server and production build
- Tailwind CSS v4 — Styling and responsive design
- Lucide React — Icons
- Git & GitHub — Version control
- Cloudflare Pages — Hosting and deployment

## Run Locally in IntelliJ IDEA

1. Open the `TenderWise-Landing-Page` folder in IntelliJ IDEA.
2. Open the built-in Terminal.
3. Make sure Node.js and npm are installed.
4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open the localhost URL displayed in the terminal, usually:

http://localhost:5173/

## Production Build

To verify the production build locally:

```bash
npm run build
```

To preview the production version:

```bash
npm run preview
```

The production build is generated in the `dist/` directory.

The `.gitignore` file excludes generated files, dependencies, environment files, and IntelliJ-specific project settings.

## GitHub Repository

Repository:  
https://github.com/yenulparanamana/tenderwise-landing-page

**Production branch:** `main`

### Publishing Future Updates

After making changes in IntelliJ IDEA:

1. Save the modified files.
2. Test the application locally.
3. Verify the production build.
4. Commit and push changes to GitHub.

```bash
git status
git add .
git commit -m "Update TenderWise landing page"
git push origin main
```

Cloudflare Pages is configured for automatic deployments from the `main` branch. The next Git push should trigger a new deployment, provided the GitHub integration remains connected.

## Cloudflare Pages Deployment

TenderWise is hosted using Cloudflare Pages with GitHub integration.

### Production Configuration

| Setting | Value |
|---|---|
| Project name | tenderwise-landing-page |
| GitHub repository | yenulparanamana/tenderwise-landing-page |
| Production branch | main |
| Framework preset | React (Vite) |
| Root directory | / |
| Build command | npm run build |
| Build output directory | dist |
| Hosting plan | Free |

### Deployment Workflow

1. Developers update the source code in IntelliJ IDEA.
2. Changes are committed and pushed to GitHub.
3. Cloudflare Pages detects the new commit through Git integration.
4. Cloudflare installs dependencies and runs the production build.
5. A successful deployment publishes the updated landing page.

Deployment history and build logs are available in:

**Cloudflare Dashboard → Workers & Pages → tenderwise-landing-page → Deployments**

## Custom Domain Configuration

**Domain:** etenderwise.com  
**Registrar:** Namecheap  
**DNS Provider:** Cloudflare  
**Domain Status:** Active  
**SSL Certificate:** Enabled

### DNS Configuration

The domain was purchased through Namecheap and connected to Cloudflare using Cloudflare-assigned nameservers.

The Cloudflare DNS configuration includes:

| Type | Name | Target |
|---|---|---|
| CNAME | etenderwise.com | tenderwise-landing-page.pages.dev |

The CNAME is configured with Cloudflare proxy enabled.

Cloudflare manages DNS and HTTPS for the deployed website, while Namecheap remains the domain registrar.

The `www.etenderwise.com` configuration and redirect are separate optional finishing tasks.

## Important Application Notes

### Waitlist Form

The waitlist form is currently a demonstration feature.

In `src/config/waitlist.ts`:

```ts
WAITLIST_ENABLED = false
```

The form does not currently store user names or email addresses.

A backend service or form provider must be integrated and tested before enabling real waitlist registration.

### Dashboard Preview

The landing page includes a sample dashboard demonstrating the proposed TenderWise application.

The displayed information is sample data and is not connected to a live eligibility analysis engine.

### Contact Information

Email: tenderwise.team@gmail.com

The website uses a `mailto:` contact link. The team is responsible for monitoring and responding to incoming messages.

## Maintenance

- Update application code through IntelliJ IDEA.
- Maintain source code using GitHub.
- Monitor deployments through Cloudflare Pages.
- Manage DNS records and HTTPS settings through Cloudflare.
- Manage domain ownership and renewal through Namecheap.
- Keep account credentials secure and enable two-factor authentication.
- Test the website after significant updates.

## Project Information

**Application:** TenderWise  
**Project Type:** Agile Team Project (ATP)  
**Target Users:** Sri Lankan SMEs and tender applicants  
**Purpose:** Help businesses understand tender requirements, evaluate eligibility, identify missing evidence, and improve bid readiness.

---

Developed as part of the Agile Team Project.
