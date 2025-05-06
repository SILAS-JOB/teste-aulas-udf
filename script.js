const toggleBtn = document.getElementById('toggle-dark');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Modo Claro';
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Modo Escuro';
  }
});
