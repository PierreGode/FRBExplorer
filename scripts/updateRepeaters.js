const https = require('https');
const fs = require('fs');

const url = process.env.REPEATERS_URL || 'https://chime-frb-open-data.github.io/catalog/v1/repeaters.json';

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
      fs.writeFileSync('repeaters.json', JSON.stringify(json, null, 2));
      console.log('Updated repeaters.json with', json.length, 'entries');
    } catch (err) {
      console.error('Error parsing repeaters:', err.message);
    }
  });
}).on('error', err => {
  console.error('Request failed:', err.message);
});
