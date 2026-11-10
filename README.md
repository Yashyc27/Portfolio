# Yash Chaudhary — AI/ML & GenAI Portfolio

A static portfolio for AI/ML engineering internship opportunities. It presents selected project studies, experience, education, technical skills, certifications, resume details, and contact information.

## Stack

- Semantic HTML5
- Modular CSS: design tokens and shared components in `assets/css/`, page composition in `site.css`
- Vanilla JavaScript in `assets/js/site.js`
- Static directory routes, compatible with GitHub Pages

No framework, package manager, build step, or server-side runtime is required. Fonts are served by Google Fonts; the site falls back to system fonts if that service is unavailable.

## Pages

- `index.html` — Home
- `about/index.html` — About, experience, education, and skills
- `projects/index.html` — Project directory
- `projects/*/index.html` — Individual case studies and the clearly labeled RAG research proposal
- `certifications/index.html` — Credential record with issuer marks
- `resume/index.html` — Accessible resume text, embedded PDF preview, and PDF download
- `contact/index.html` — Contact links

## Preview locally

Open `index.html` directly in a browser, or serve this folder with any static HTTP server. For example:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Content notes

Matching public GitHub repositories are linked from project entries where available. No live demo URLs were supplied. The Semantic Caching and Cost-Aware Routing for RAG page is a concept-only proposal: no implementation, experiments, results, or research contribution are claimed. The resume PDF is available at `assets/pdf/yash-chaudhary-resume.pdf`. The supplied certificate files contain issuer marks but no certificate scans or verification URLs; the credential page states this limitation.
