# FRBExplorer

This repository hosts a static website for browsing Fast Radio Burst (FRB) data. All pages load local JSON files and render them in the browser using JavaScript.

## Pages

- **index.html** - overview table of all FRB detections.
- **repeaters.html** - table of repeating FRB sources.
- **plots.html** - basic chart visualisation of catalogue entries.
- **pulsars.html** - table of pulsars with chart.

## Local Testing..

Run a simple HTTP server in the repository root:

```bash
python3 -m http.server
```

Then open `http://localhost:8000/index.html` in your browser. You can navigate to the other pages from there.

## Pulsar Data

Run `node scripts/updatePulsars.js` to fetch the latest discoveries from the ATNF pulsar catalogue and populate `pulsars.json`. The file is kept empty in the repository.
