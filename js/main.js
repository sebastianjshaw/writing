(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem('marginalia-theme');
  if (stored) root.setAttribute('data-theme', stored);

  function current() {
    return root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function paintToggle(btn) {
    if (!btn) return;
    btn.textContent = current() === 'dark' ? '☾' : '☀';
    btn.setAttribute('aria-label', current() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    paintToggle(btn);
    if (btn) {
      btn.addEventListener('click', function () {
        var next = current() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('marginalia-theme', next);
        paintToggle(btn);
      });
    }
  });
})();
