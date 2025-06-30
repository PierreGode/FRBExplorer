const https = require('https');
const fs = require('fs');

const url = process.env.CATALOGUE_URL || 'https://chime-frb-open-data.github.io/catalog/v1/catalog.json';

https.get(url, res => {
  if (res.statusCode !== 200) {
    console.error('Failed to fetch data: ' + res.statusCode);
    res.resume();
    return;
  }
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      fs.writeFileSync('catalogue.json', JSON.stringify(json, null, 2));
      console.log('Updated catalogue.json with', json.length, 'entries');
    } catch (err) {
      console.error('Error parsing catalogue:', err.message);
    }
  });
}).on('error', err => {
  console.error('Request failed:', err.message);
});
