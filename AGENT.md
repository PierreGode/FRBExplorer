# 🛰️ FRBExplorer AGENT.md

---

## 📋 Overview

This document is a comprehensive agent-style guide for the **FRBExplorer** project — a fully static, JavaScript-driven web portal to display Fast Radio Burst (FRB) data, repeater information, and interactive plots. It is designed as a replacement for the discontinued FRBSTATS site and runs entirely on static hosting with no backend dependencies.

---

## 🔍 Purpose

- Replace the original FRBSTATS website with a **static, client-side only** site.
- Provide dynamic data visualization (tables, charts) entirely in the browser.
- Use pre-generated JSON data files to avoid live API calls or server-side processing.
- Support easy updates by regenerating JSON files offline from NASA and related astronomical datasets.
- Deploy on simple FTP hosting with no backend capabilities (e.g., one.com).

---

## 📂 Project Structure and Required Files

| File/Folder        | Description                                                    | Purpose                                                |
|--------------------|----------------------------------------------------------------|--------------------------------------------------------|
| `index.html`       | Main homepage showing FRB overview and data tables             | Entry point for users; loads core scripts and styles.  |
| `plots.html`       | Interactive page for charts and scatter plots                   | Visualizes FRB data using charting libraries.          |
| `repeaters.html`   | Displays repeating FRB sources in sortable/searchable tables    | Allows browsing of known FRB repeaters.                 |
| `css/` folder      | Contains all CSS stylesheets                                    | Styles for layout, typography, responsiveness.         |
| `js/script.js`     | Main JavaScript logic for data fetching, rendering, interactivity | Fetches data files and dynamically generates UI.       |
| `vendor/`          | Third-party libraries (e.g., Bootstrap, FontAwesome, Chart.js) | Required JS/CSS dependencies loaded locally or via CDN.|
| `catalogue.json`   | JSON dataset of all recorded FRBs                               | Static data source for FRB events.                      |
| `pulsars.json`   | JSON dataset of all recorded pulsars                              | Static data source                    |
| `repeaters.json`   | JSON dataset of known repeating FRBs                            | Static data source for repeater listings.               |
| `tns_search.csv` (optional) | Additional CSV data for search/filtering                 | Optional, used if enhanced search/filter needed.       |
| `img/`, `figs/`    | Images, icons, logos                                            | Visual assets referenced in HTML/CSS.                   |
| `favicon.ico`      | Website favicon                                                 | Browser tab icon.                                       |
| `README.md`        | Documentation                                                  | Project overview and instructions.                      |

---


DO NOT PUSH ANYTHING to pulsars.json catalogue.json or repeaters.json this files are supposed to be automatically populated but the web it self!!!!

## ⚙️ Data Source and Update Workflow

### Data Origin  
- Original FRB and repeater data are published by scientific organizations like NASA/JPL, CHIME, LIGO, Breakthrough Listen, etc.  
- These organizations provide raw astronomical datasets related to Fast Radio Bursts and related phenomena.

## all files are to be pupulated automatically by the webpage

## website limits: html/js

### Data Usage on Site  
- The website does **not** query any API or database live.  
- It loads static JSON files via AJAX/fetch in the browser, rendering data dynamically with JavaScript.  
- This ensures fast page loads and no server-side processing needed.

---

## 🧩 Frontend Architecture

### JavaScript Logic (`js/script.js`)  
- Loads JSON data files asynchronously using fetch/XHR.  
- Parses JSON to extract relevant data points for tables and charts.  
- Utilizes libraries like DataTables or Tabulator for interactive tables (sorting, filtering, pagination).  
- Uses Chart.js or similar for plotting scatter plots, histograms, or line charts.  
- Handles UI events such as search input, filter toggles, and plot interactions.  

### CSS Styling (`css/`)  
- Provides responsive and clean layout with possible use of Bootstrap or custom CSS.  
- Ensures usability across devices (desktop, tablet, mobile).  
- Applies theming consistent with scientific data visualization standards.

### HTML Pages  
- Minimal static markup with placeholders for dynamic content insertion by JS.  
- Includes links to CSS and JS files with correct relative paths.  
- Contains semantic HTML elements for accessibility and SEO.

---

## 🚀 Deployment Instructions

1. **Prepare static build:**  
   - Ensure all `.html`, `.css`, `.js`, JSON data files, images, and vendor libraries are correctly placed and linked.  
   - Use relative paths for all resource references.  

2. **Local testing:**  
   - Run a local HTTP server (e.g., `python -m http.server`) to test functionality and avoid CORS issues.  
   - Verify data loads, tables render correctly, and plots appear as expected.  

3. **Upload to hosting:**  
   - Use FTP or file manager to upload all files maintaining folder structure.  
   - Upload to the public root or designated web directory.  

4. **Verify live site:**  
   - Open the site in browsers, check console for errors, ensure smooth interaction.  

---

## 🔄 Maintenance and Data Updates

- To update data:  
  1. Run site scripts to fetch and process the latest raw FRB data.  
  2. Replace `catalogue.json`, pulsars.json and `repeaters.json` files on the server with newly generated versions.  
  4. Upload via FTP to web domain server.  

- Regular updates keep site scientifically relevant and accurate.

---

## ❗ Limitations and Considerations

- No live API or server-side data querying — all data must be pre-generated.  
- Large JSON files can impact initial load times; consider data pagination or compression if needed.  
- Site relies on client browser JS; ensure users have JS enabled.  
- Hosting on simple FTP limits server-side features (e.g., user accounts, logging).  
- CORS and path issues can arise if relative URLs or folder structures are not consistent.

---

## 📚 References and Resources

- NASA JPL NEO data: https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html  
- CHIME FRB open data: https://chime-frb-open-data.github.io/  
- Original FRBSTATS repo: (link to GitHub repo)  
- Chart.js: https://www.chartjs.org/  
- DataTables: https://datatables.net/  
- Bootstrap: https://getbootstrap.com/
- https://www.atnf.csiro.au/research/pulsar/psrcat/ 

---

## 👩‍💻 Contact & Support

For questions, code contributions, or support, contact the maintainer: Pierre (pierre@gode.one).

---

*You are now equipped with everything to build, deploy, and maintain the FRBExplorer static web portal — the future of fast radio burst visualization!* 🚀
