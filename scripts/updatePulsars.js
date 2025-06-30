const https = require('https');
const fs = require('fs');

// URL for the ATNF pulsar catalogue CSV
const url = 'https://www.atnf.csiro.au/research/pulsar/psrcat/psrcat_csv.php?delimiter=,';

function fetchCatalogue(cb) {
  https.get(url, res => {
    if (res.statusCode !== 200) {
      cb(new Error('Failed to fetch data: ' + res.statusCode));
      return;
    }
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => cb(null, data));
  }).on('error', err => cb(err));
}

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (!lines.length) return [];
  const headers = lines.shift().split(',');
  return lines.map(line => {
    const cols = line.split(',');
    const obj = {};
    headers.forEach((h, i) => { obj[h.trim()] = cols[i] ? cols[i].trim() : ''; });
    return obj;
  });
}

function updatePulsars() {
  fetchCatalogue((err, csv) => {
    if (err) {
      console.error(err.message);
      return;
    }
    const entries = parseCSV(csv);
    // Sort by discovery year, newest first
    entries.sort((a, b) => parseInt(b.DISCOVERY_YEAR) - parseInt(a.DISCOVERY_YEAR));
    const latest = entries.slice(0, 5);
    fs.writeFileSync('pulsars.json', JSON.stringify(latest, null, 2));
    console.log('Updated pulsars.json with', latest.length, 'entries');
  });
}

updatePulsars();
