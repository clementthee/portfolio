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
| `npm run deploy:preview` | Build and deploy to Cloudflare Pages (manual) |

## Deploy — Cloudflare Pages

### Git integration (production)

1. Push this repo to **`clementthee/portfolio`** on GitHub (`main` branch).
2. In **Cloudflare Dashboard → Workers & Pages → Create → Connect to Git**, connect the repository.
3. Configure the build in **Settings → Builds**:

| Setting | Value |
| :--- | :--- |
| Production branch | `main` |
| Build command | `npm run build` |
| **Deploy command** | **Leave empty** (do not use Wrangler in CI) |
| Build output directory | `dist` |
| Root directory | `/` (empty) |
| Framework preset | None or Astro |

4. In **Settings → Environment variables** (Build):

| Variable | Value |
| :--- | :--- |
| `NODE_VERSION` | `22` (or rely on [`.node-version`](.node-version)) |

**Do not set `CLOUDFLARE_API_TOKEN`** for Git deploy — Pages publishes `dist/` automatically after the build. A DNS-only token will cause `Authentication error [code: 10000]` if used with `wrangler pages deploy`.

**Common mistake:** using `npx wrangler deploy` or `npx wrangler pages deploy` as Deploy command. That flow is for Workers or manual CLI deploys, not for Astro static sites with Git integration.

Cloudflare will deploy automatically on every push to `main`.

### Custom domain

In the Pages project → **Custom domains**:

1. Add `clementthee.com` (apex).
2. Add `www.clementthee.com` and redirect to apex (recommended).

If the domain is already in your Cloudflare account, DNS records are created automatically.

### Manual deploy (preview / testing only)

For local testing with Wrangler (not used by Git CI):

```bash
npx wrangler login
npm run deploy:preview
```

Or after a build:

```bash
npx wrangler pages deploy dist --project-name=clementthee-portfolio
```

Requires an API token with **Cloudflare Pages → Edit** permission, or interactive `wrangler login`.

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
