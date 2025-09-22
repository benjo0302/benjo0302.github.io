# Love Lighthouse Network — GitHub Pages Site

This is a ready-to-deploy React + Tailwind site for **LLN**.

## Quick start
```bash
npm i
npm run dev
```

## Deploying to GitHub Pages

1. Commit & push this repo to GitHub.
2. Ensure the workflow at `.github/workflows/deploy.yml` is present on `main`.
3. In GitHub: **Settings → Pages → Build and deployment**: Source = **GitHub Actions**.
4. The site will publish at:
   - Project site: `https://USERNAME.github.io/REPO_NAME` (set `base` in `vite.config.js` to `'/REPO_NAME/'`)
   - User/Org site: `https://USERNAME.github.io` (leave `base: '/'`)

### SPA refresh fix
The build script also creates `404.html` to support client-side routing on GitHub Pages.
