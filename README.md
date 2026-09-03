# Portfolio — clementthee.com

Personal portfolio built with Astro, React, Tailwind CSS, and TypeScript.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy:preview` | Build and deploy to Cloudflare Pages (manual) |

## Deploy — Cloudflare Pages

### Git integration (production)

1. Push this repo to **`clementthee/portfolio`** on GitHub.
2. In **Cloudflare Dashboard → Workers & Pages → Create → Connect to Git**, connect the repository.
3. Configure the build:

| Setting | Value |
| :--- | :--- |
| Production branch | `master` or `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION=22` |

Cloudflare will deploy automatically on every push to the production branch.

### Custom domain

In the Pages project → **Custom domains**:

1. Add `clementthee.com` (apex).
2. Add `www.clementthee.com` and redirect to apex (recommended).

If the domain is already in your Cloudflare account, DNS records are created automatically.

### Manual deploy (preview / testing)

Requires [Wrangler](https://developers.cloudflare.com/workers/wrangler/) and authentication:

```bash
npx wrangler login
npm run deploy:preview
```

Or after a build:

```bash
npx wrangler pages deploy dist --project-name=clementthee-portfolio
```

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
