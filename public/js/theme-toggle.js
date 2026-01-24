const toggle = document.getElementById('theme-toggle');
const htmlTag = document.documentElement;
const icon = document.getElementById('theme-icon');

// All'avvio, applica il tema salvato o automatico
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  htmlTag.setAttribute("data-theme", savedTheme);
  icon.textContent = savedTheme === "dark" ? "☀️" : "🌙";
} else {
  const hour = new Date().getHours();
  const theme = hour >= 18 || hour < 6 ? "dark" : "light";
  htmlTag.setAttribute("data-theme", theme);
  icon.textContent = theme === "dark" ? "☀️" : "🌙";
}

toggle.addEventListener("click", () => {
  const currentTheme = htmlTag.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlTag.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  icon.textContent = newTheme === "dark" ? "☀️" : "🌙";
});