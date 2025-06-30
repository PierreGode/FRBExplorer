# FRBExplorer

This repository hosts a static website for browsing Fast Radio Burst (FRB) data. All pages load local JSON files and render them in the browser using JavaScript.

## Pages

- **index.html** - overview table of all FRB detections.
- **repeaters.html** - table of repeating FRB sources.
- **plots.html** - basic chart visualisation of catalogue entries.
- **pulsars.html** - table of pulsars with chart.

## Local Testing

Run a simple HTTP server in the repository root:

```bash
python3 -m http.server
```

Then open `http://localhost:8000/index.html` in your browser. You can navigate to the other pages from there.

## Automated Data Updates

The repository includes a GitHub Actions workflow that fetches the latest catalogue, repeater and pulsar data once every hour and on each push. The workflow runs the helper scripts in `scripts/` and commits any changes before deploying the site to GitHub Pages.

To run the update scripts locally:

```bash
./scripts/updateAll.sh
```

This will regenerate `catalogue.json`, `repeaters.json` and `pulsars.json` using the remote data sources.
