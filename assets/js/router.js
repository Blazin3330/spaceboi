window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);

function loadPage() {
  const route = location.hash.replace('#/', '') || 'home';
  const main = document.getElementById('main');

  fetch(`${route}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Page not found');
      }
      return response.text();
    })
    .then(html => {
      main.innerHTML = html;
    })
    .catch(() => {
      main.innerHTML = `
        <h1 class="error-title">404</h1>
        <p class="error-message">Oops! That page doesn’t exist.</p>
      `;
    });
}