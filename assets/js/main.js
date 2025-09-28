window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'theme-dark';
  document.body.classList.add(savedTheme);

  const icon = document.getElementById('themeIcon');
  icon.textContent = savedTheme === 'theme-dark' ? '⏾' : '☀︎';
};

function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('themeIcon');

  const isDark = body.classList.contains('theme-dark');
  const newTheme = isDark ? 'theme-light' : 'theme-dark';

  body.classList.remove('theme-dark', 'theme-light');
  body.classList.add(newTheme);

  icon.textContent = newTheme === 'theme-dark' ? '⏾' : '☀︎';
  localStorage.setItem('theme', newTheme);
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}