(function() {
  const oldLog = console.log;
  const oldError = console.error;

  function store(type, args) {
    const arr = Array.from(args).map(a => {
      if (typeof a === 'object') {
        try { return JSON.stringify(a); } catch (e) { return String(a); }
      }
      return String(a);
    });
    const entry = `${new Date().toISOString()} [${type}] ${arr.join(' ')}`;
    const logs = JSON.parse(localStorage.getItem('logData') || '[]');
    logs.push(entry);
    localStorage.setItem('logData', JSON.stringify(logs));
    if (window.logData) window.logData.push(entry); else window.logData = logs;
  }

  console.log = function(...args) { store('LOG', args); oldLog.apply(console, args); };
  console.error = function(...args) { store('ERROR', args); oldError.apply(console, args); };
})();
