# Portfolio — clementthee.com

Personal portfolio built with Astro, React, Tailwind CSS, and TypeScript.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run check` | Type-check Astro and TypeScript sources |
| `npm run preview` | Preview the production build locally |
| `npm run deploy:preview` | Build and deploy to Cloudflare Workers (manual) |

## Deploy — Cloudflare Workers Builds

This project deploys as **Workers Static Assets** (Astro static site). The Git integration uses **Workers → Create application → Connect to Git**.

### Create and deploy (dashboard)

| Setting | Value |
| :--- | :--- |
| Project name | `portfolio` |
| Production branch | `main` |
| Build command | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |
| **Version command** | `npx wrangler versions upload` |
| Root directory | `/` |

### Environment variables

| Variable | Action |
| :--- | :--- |
| `NODE_VERSION` | Optional `22` (or use [`.node-version`](.node-version)) |
| `CLOUDFLARE_API_TOKEN` | **Remove** if set with DNS-only permissions (causes auth errors). Workers Builds usually authenticates via Git integration. |

If deploy fails with auth errors, create a new API token with **Workers Scripts → Edit** and **Account Settings → Read**.

**Do not use** `npx wrangler pages deploy` — that is the legacy Pages flow and does not match this Workers setup.

Cloudflare deploys automatically on every push to `main`.

### Custom domain

Live URL (Workers): `https://portfolio.clementthee.workers.dev`

Custom domains are declared in [`wrangler.toml`](wrangler.toml) and provisioned on each `wrangler deploy`:

```toml
[[routes]]
pattern = "clementthee.com"
custom_domain = true

[[routes]]
pattern = "www.clementthee.com"
custom_domain = true
```

Requirements:
- Zone `clementthee.com` must exist in your Cloudflare account.
- Remove conflicting DNS records (old Pages CNAMEs) before the first custom-domain deploy.
- **Do not use** `public/_redirects` with absolute URLs — Workers Static Assets only allow relative paths and will fail deploy (error 100324).

Confirm in dashboard: **Workers & Pages → portfolio → Settings → Domains & Routes** that `clementthee.com` and `www.clementthee.com` are attached.

#### www → apex redirect (subdomain)

Do **not** use `_redirects` for www → apex. Configure in **Cloudflare Dashboard → clementthee.com → Rules → Redirect Rules**:

| Field | Value |
| :--- | :--- |
| Rule name | `www to apex` |
| Expression | `(http.host eq "www.clementthee.com")` |
| Action | Dynamic redirect to `concat("https://clementthee.com", http.request.uri.path)` |
| Status code | `301` |

SSL/TLS mode: **Full** or **Full (strict)**.

### Manual deploy (local testing)

```bash
npx wrangler login
npm run deploy:preview
```

Or after a build:

```bash
npx wrangler deploy
```

Requires `wrangler login` or an API token with **Workers Scripts → Edit**.

## Project structure

```text
/
├── public/          # Static assets (e.g. cv.pdf)
├── src/
│   ├── components/  # Astro + React components
│   ├── data/        # Portfolio data and i18n
│   ├── layouts/     # Base layout
│   ├── pages/       # Routes
│   ├── stores/      # Shared client state
│   └── types/       # TypeScript types
├── astro.config.mjs
└── wrangler.toml
```
