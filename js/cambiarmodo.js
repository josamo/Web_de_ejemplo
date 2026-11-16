document.addEventListener('DOMContentLoaded', () => {
  console.log("1. El script se ha cargado correctamente");

  const toggleButton = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  if (!toggleButton) {
    console.error("❌ ERROR: No se encuentra ningún elemento con id='theme-toggle'");
    return;
  } else {
    console.log("2. ¡Botón encontrado con éxito!", toggleButton);
  }

  // Función para actualizar el aspecto visual del botón (icono y texto)
  function updateButtonUI(theme) {
    const iconSpan = toggleButton.querySelector('.theme-icon');
    const textSpan = toggleButton.querySelector('.theme-text');
    
    // Si tu botón usa los spans, los actualiza; si es un botón de texto plano, usa textContent por seguridad
    if (iconSpan && textSpan) {
      if (theme === 'dark') {
        iconSpan.textContent = '☀️';
        textSpan.textContent = 'Modo claro';
      } else {
        iconSpan.textContent = '🌙';
        textSpan.textContent = 'Modo oscuro';
      }
    } else {
      toggleButton.textContent = theme === 'dark' ? '☀️ Modo claro' : '🌙 Modo oscuro';
    }
  }

  // Comprobar preferencia guardada al cargar la página
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateButtonUI(savedTheme);
  } else {
    // Si no hay preferencia guardada pero el html ya viene en dark (por defecto o sistema)
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme) {
      updateButtonUI(currentTheme);
    }
  }

  // Escuchar el clic para alternar el tema
  toggleButton.addEventListener('click', () => {
    console.log("3. ¡Se ha hecho clic en el botón!");
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      htmlElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      updateButtonUI('light');
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      updateButtonUI('dark');
    }
  });
});