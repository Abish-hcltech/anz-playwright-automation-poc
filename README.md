# Playwright + TypeScript Boilerplate

This project is a minimal starter framework for building scalable Playwright end-to-end tests with TypeScript.

## Features

- Playwright with TypeScript
- Page Object Model (POM)
- Cross-browser tests for Chromium, Firefox, and WebKit
- HTML reporting
- Screenshot capture on failure
- Environment variable support via `.env`
- ESLint + Prettier setup
- GitHub Actions CI workflow

## Project structure

```text
project-root/
├── pages/
│   └── HomePage.ts
├── tests/
│   └── sample.spec.ts
├── utils/
│   └── env.ts
├── .github/workflows/
│   └── playwright.yml
├── .env
├── .eslintrc.json
├── .prettierrc
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── README.md
└── playwright-report/
```

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set your base URL in `.env`:

   ```env
   BASE_URL=https://example.com
   ```

3. Run the test suite:

   ```bash
   npm test
   ```

4. Open the HTML report:

   ```bash
   npm run test:report
   ```

## Useful scripts

```bash
npm test
npm run test:headed
npm run test:ui
npm run lint
npm run lint:fix
npm run format
```

## Notes

- Screenshots and traces are enabled on failure.
- The default browser matrix includes Chromium, Firefox, and WebKit.
- CI uploads the generated HTML report as an artifact.
