const https = require('https');
const fs = require('fs');

const url = 'https://chime-frb-open-data.github.io/catalog.json';

function fetchJSON(cb) {
  https.get(url, { family: 4 }, res => {
    if (res.statusCode !== 200) {
      cb(new Error('Failed to fetch data: ' + res.statusCode));
      return;
    }
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => cb(null, data));
  }).on('error', err => cb(err));
}

function updateCatalogue() {
  fetchJSON((err, text) => {
    if (err) {
      console.error(err.message);
      return;
    }
    try {
      const json = JSON.parse(text);
      fs.writeFileSync('catalogue.json', JSON.stringify(json, null, 2));
      console.log('Updated catalogue.json with', json.length, 'entries');
    } catch (e) {
      console.error('Failed to parse catalogue JSON');
    }
  });
}

updateCatalogue();
