# FRBExplorer

This repository hosts a static website for browsing Fast Radio Burst (FRB) data. All pages load local JSON files and render them in the browser using JavaScript.

## Pages

- **index.html** - overview table of all FRB detections.
- **repeaters.html** - table of repeating FRB sources.
- **plots.html** - basic chart visualisation of catalogue entries.

## Local Testing..

Run a simple HTTP server in the repository root:

```bash
python3 -m http.server
```

Then open `http://localhost:8000/index.html` in your browser. You can navigate to the other pages from there.
