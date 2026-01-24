// Applica tema automatico solo se NON c'è una preferenza salvata
if (!localStorage.getItem("theme")) {
  const hour = new Date().getHours();
  const htmlTag = document.documentElement;
  const theme = (hour >= 18 || hour < 6) ? "dark" : "light";
  htmlTag.setAttribute("data-theme", theme);
}