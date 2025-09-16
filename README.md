# IRLBox Docs (Docsify)

This repository hosts community-editable documentation for IRLBox. It mirrors the public guides from https://irlbox.com for easier contribution and versioning.

## Structure

```
irlbox-docs/
├ docs/
│  ├ README.md
│  ├ _sidebar.md
│  ├ installation/
│  ├ devices/
│  ├ protocols/
│  ├ developers/
│  └ troubleshooting/
├ docs/assets/
├ index.html
└ tools/
   └ migrate.ps1
```

## Local Preview (Docsify)

Docsify renders Markdown at runtime in the browser.

1) Install Docsify CLI (optional for serving locally):

```
npm install -g docsify-cli
```

2) Serve locally from the repository root (index.html points Docsify to docs/):

```
docsify serve .
```

Then open http://localhost:3000

Note: This repo is configured so the homepage is `docs/README.md` and the sidebar is `docs/_sidebar.md`.

## Migration Workflow

We provide a PowerShell script that downloads selected IRLBox guides, converts them from HTML to Markdown using Pandoc, and downloads referenced images.

Prerequisites:
- PowerShell 5+ (Windows 10+)
- Pandoc installed and available on PATH: https://pandoc.org/installing.html

Run:

```
# From the repo root
powershell -ExecutionPolicy Bypass -File .\tools\migrate.ps1
```

Converted files land under `docs/` and images under `docs/assets/`.

## Contributing

- Edit any page and submit a PR.
- Please keep a 1:1 mapping between original guide pages and Markdown filenames for traceability.
- Use clear headings and keep images in the `docs/assets/` directory.
