# ELMiCo website

A static, Greek-language website for ELMiCo, built with Astro and Tailwind CSS.

Requires Node.js **22.12 or later** (the current LTS release is recommended).

## Local development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run build
npm run qa
```

Content is centrally maintained in `src/data/site.ts`, so it can be updated without changing the reusable components.

## Languages

The initial release is published in Greek only. Supported languages are centrally configured in `src/i18n/config.ts`, allowing complete English content to be added later under `/en/` routes.
