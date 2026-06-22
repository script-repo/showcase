# KCNA Study Portal & Exam Simulator

A static, single-page web app for studying for the **Kubernetes and Cloud Native Associate (KCNA)** certification. It ships with a bank of real-style questions across all four exam domains and runs entirely in the browser — no backend required — so it deploys cleanly to GitHub Pages.

## Features

- **Study Mode** — browse questions by domain, check answers, and read explanations.
- **Timed Exam** — a 90-minute, 50-question randomized mock exam with a flag/review navigator and a 75% pass mark.
- **Results breakdown** — per-question review with your answer vs. the correct answer.
- **Import** — paste additional questions in the same markdown format; they're saved in your browser.
- **Optional AI features** — study plans, deep-dive explanations, and generated practice questions via Google Gemini. These require your own free API key (stored locally, never bundled).
- **Progress persistence** — answers, flags, and settings are saved to `localStorage`.

## Question bank

Questions live in [`KCNA_Question_Bank.md`](./KCNA_Question_Bank.md). The build-time script `scripts/parse-questions.mjs` parses that markdown into the typed module `src/data/questions.ts`. Multi-answer ("select two") questions are skipped because the UI is single-select.

Regenerate after editing the markdown:

```bash
npm run generate:questions
```

## Local development

```bash
npm install
npm run dev      # start the Vite dev server
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## Deploying to GitHub Pages

The repo includes `.github/workflows/deploy.yml`, which builds the app and publishes `dist/` to GitHub Pages on every push to `main`/`main-macos`.

1. In your repository settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
2. Push to the default branch. The workflow builds and deploys automatically.

The Vite `base` is set to `./` (relative), so the site works whether it's served from a user/organization page (`https://<user>.github.io/`) or a project subpath (`https://<user>.github.io/<repo>/`).
