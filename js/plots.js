fetch('catalogue.json')
  .then(response => response.json())
  .then(data => {
    console.log('Loaded catalogue.json for plots with', data.length, 'entries');
    const labels = data.map(d => d.FRB);
    const ctx = document.getElementById('frb-plot').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'FRB Index',
          data: labels.map((_, i) => i + 1),
          backgroundColor: 'rgba(30, 136, 229, 0.5)'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  })
  .catch(err => {
    console.error('Error loading data', err);
  });
