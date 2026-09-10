# Gunjan Vasara — Portfolio

Personal portfolio site: [gunjanvasara.dev](https://gunjanvasara.dev/)

Senior Frontend Engineer with 7+ years building and owning complex, user-facing systems end-to-end. This site walks through detailed case studies — architecture decisions, tradeoffs, and shipped outcomes — rather than just a list of projects.

## Case studies

- **Highflame** — Enterprise LLM security platform: Code Agents UI, threat-detection surfaces, telemetry
- **Uber Databook** — Internal data insights platform used by 1,000+ engineers
- **Coolpanda** — Motion-rich marketing site revamp with custom Lottie animations
- **Systematichq** *(anonymized as "Stealth Startup")* — Graph-based system architecture visualization tool

## Stack

Plain HTML, CSS, and vanilla JavaScript — no framework, no build step, no dependencies. Chosen deliberately to keep the site fast and trivially deployable on GitHub Pages.

## Structure

```
.
├── index.html          # Homepage — hero, work grid, experience timeline, contact
├── work/                # Individual case-study pages
│   ├── highflame.html
│   ├── databook.html
│   ├── coolpanda.html
│   └── stealth-startup.html
├── images/              # Case-study screenshots, diagrams, video posters
└── assets/              # Downloadable resume (PDF)
```

## Running locally

No build step — just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Hosted on GitHub Pages, auto-deployed from the `main` branch on every push. Live at [https://gunjanvasara.dev/](https://gunjanvasara.dev/) (custom domain via CNAME, backed by the `goonjan.github.io` repo).

## Contact

- Email: gunjan.gojiya@gmail.com
- LinkedIn: [gunjan-vasara-667170175](https://www.linkedin.com/in/gunjan-vasara-667170175/)
- GitHub: [@Goonjan](https://github.com/Goonjan)
