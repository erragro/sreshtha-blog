# Sreshtha blog

The Meet the Builders submission blog for [Sreshtha](https://github.com/erragro/sreshtha),
an app for India's gig workers.

Static Vite + Tailwind v4 site. Uses the same brand tokens as the
Sreshtha app (indigo scale, marigold accent, Geist Variable font).

## Local

```bash
npm install
npm run dev            # http://localhost:5173
```

## Deploy

Auto-deploys to GitHub Pages on every push to `main` via the
workflow at `.github/workflows/deploy.yml`. First time only, in the
repo's Settings → Pages, set **Source** to **GitHub Actions**.

Live URL after deploy: `https://<username>.github.io/<repo-name>/`

The Vite `base` config reads `BASE_PATH` from env, which the
workflow sets to `/<repo-name>/`. So the site works whether you
call the repo `sreshtha-blog`, `sreshtha-site`, or anything else.

## Files

- `index.html`: the blog post
- `src/main.css`: Tailwind v4 + Sreshtha brand tokens
- `public/favicon.svg`: favicon (mirrored from the app)
- `public/screenshots/`: product + sample contract images
- `.github/workflows/deploy.yml`: GitHub Pages deploy pipeline
- `vite.config.ts`, `package.json`: build

## To swap

- **Repo URL** in the blog: search `github.com/erragro/sreshtha`
  in `index.html` if the app repo moves.
- **Byline**: search `Surajit Chaudhuri`.
