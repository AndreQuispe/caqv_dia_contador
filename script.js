// Navegación local entre la bienvenida y el resumen de la auditoría.
const startButton = document.getElementById("start-audit");
const restartButton = document.getElementById("restart-audit");
const welcomePanel = document.getElementById("welcome-panel");
const auditPanel = document.getElementById("audit-panel");
const auditTitle = document.getElementById("audit-title");

// Contador de días desde el inicio de la relación (01.11.2025).
const RELATIONSHIP_START = new Date(2025, 10, 1);
const MS_PER_DAY = 1000 * 60 * 60 * 24;

function daysSinceStart() {
  const today = new Date();
  const start = new Date(RELATIONSHIP_START.getFullYear(), RELATIONSHIP_START.getMonth(), RELATIONSHIP_START.getDate());
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((now - start) / MS_PER_DAY);
}

function nextAnniversary() {
  const today = new Date();
  let anniversary = new Date(today.getFullYear(), RELATIONSHIP_START.getMonth(), RELATIONSHIP_START.getDate());
  if (anniversary < today) anniversary = new Date(today.getFullYear() + 1, RELATIONSHIP_START.getMonth(), RELATIONSHIP_START.getDate());
  return Math.round((anniversary - today) / MS_PER_DAY);
}

const days = daysSinceStart();
const daysToAnniversary = nextAnniversary();

const daysValue = document.getElementById("days-value");
const daysDetail = document.getElementById("days-detail");
const daysSince = document.getElementById("days-since");

if (daysValue) daysValue.textContent = days.toLocaleString("es-PE");
if (daysDetail) {
  daysDetail.textContent = daysToAnniversary === 0
    ? "Hoy cumplimos exactamente un año. Feliz aniversario, amor. ❤️"
    : `Contando cada día desde que empezamos. Faltan ${daysToAnniversary} días para nuestro primer aniversario. 🎉`;
}
if (daysSince) {
  daysSince.textContent = `${days.toLocaleString("es-PE")} días desde el 01.11.2025, y contando.`;
}

// La foto solo se muestra si carga con éxito; si no existe aún, queda el respaldo con inicial.
const ledgerPhotoImg = document.getElementById("ledger-photo-img");
if (ledgerPhotoImg) {
  ledgerPhotoImg.addEventListener("load", () => {
    ledgerPhotoImg.hidden = false;
  });
}

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
