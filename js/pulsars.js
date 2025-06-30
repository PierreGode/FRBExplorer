fetch('pulsars.json')
  .then(response => response.json())
  .then(data => {
    // Sort by discovery year (newest first) and keep the five most recent
    data.sort((a, b) => (b.discovery_year || 0) - (a.discovery_year || 0));
    data = data.slice(0, 5);
    console.log('Loaded pulsars.json with', data.length, 'entries');

    const table = document.getElementById('pulsar-table');
    if (!data.length) {
      document.getElementById('status').textContent = 'No data available';
      return;
    }
    document.getElementById('status').remove();
    const headers = Object.keys(data[0]);
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headers.forEach(h => {
      const th = document.createElement('th');
      th.textContent = h;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    data.forEach(row => {
      const tr = document.createElement('tr');
      headers.forEach(h => {
        const td = document.createElement('td');
        td.textContent = row[h];
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // Chart
    const ctx = document.getElementById('pulsar-chart').getContext('2d');
    new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Period vs SNR',
          data: data.map(d => ({ x: d.period, y: d.snr })),
          backgroundColor: 'rgba(255, 99, 132, 0.5)'
        })
      },
      options: {
        scales: {
          x: {
            title: { display: true, text: 'Period (s)' }
          },
          y: {
            title: { display: true, text: 'SNR' }
          }
        }
      }
    });
  })
  .catch(err => {
    console.error('Error loading data', err);
    document.getElementById('status').textContent = 'Failed to load data';
  });
