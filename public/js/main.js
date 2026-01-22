document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("hamburger");
    const nav = document.querySelector("nav ul");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  });

  const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});