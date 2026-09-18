(function () {
  var button = document.querySelector('.header-theme-toggle');
  if (!button) return;

  function updateButton() {
    var isLight = document.documentElement.dataset.theme === 'light';
    var label = isLight ? 'Switch to dark mode' : 'Switch to light mode';
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-pressed', String(isLight));
    button.title = label;
    button.querySelector('i').className = isLight ? 'fa-regular fa-moon' : 'fa-regular fa-sun';
  }

  updateButton();
  button.addEventListener('click', function () {
    var isLight = document.documentElement.dataset.theme === 'light';
    if (isLight) {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = 'light';
    }
    try {
      localStorage.setItem('portfolio-theme', isLight ? 'dark' : 'light');
    } catch (error) { /* Theme switching still works without storage. */ }
    updateButton();
  });
})();
