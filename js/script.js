fetch('catalogue.json')
  .then(response => response.json())
  .then(data => {
    console.log('Loaded catalogue.json with', data.length, 'entries');
    const table = document.getElementById('frb-table');
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
  })
  .catch(err => {
    console.error('Error loading data', err);
    document.getElementById('status').textContent = 'Failed to load data';
  });
