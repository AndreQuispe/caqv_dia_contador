// Navegación local entre la bienvenida y el resumen de la auditoría.
const startButton = document.getElementById("start-audit");
const restartButton = document.getElementById("restart-audit");
const welcomePanel = document.getElementById("welcome-panel");
const auditPanel = document.getElementById("audit-panel");
const auditTitle = document.getElementById("audit-title");

startButton.addEventListener("click", () => {
  welcomePanel.hidden = true;
  auditPanel.hidden = false;
  // El foco anuncia el nuevo contenido al navegar con teclado o lector de pantalla.
  auditTitle.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
});

restartButton.addEventListener("click", () => {
  auditPanel.hidden = true;
  welcomePanel.hidden = false;
  // Cada nueva auditoría comienza con los detalles cerrados.
  auditPanel.querySelectorAll("details").forEach((detail) => {
    detail.open = false;
  });
  startButton.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
});
