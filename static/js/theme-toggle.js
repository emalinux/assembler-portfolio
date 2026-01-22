const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Mantieni preferenza
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}