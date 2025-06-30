window.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('log-output');
  function render() {
    const logs = JSON.parse(localStorage.getItem('logData') || '[]');
    output.textContent = logs.join('\n');
  }
  render();
  document.getElementById('clear').addEventListener('click', () => {
    localStorage.removeItem('logData');
    if (window.logData) window.logData = [];
    render();
  });
});
