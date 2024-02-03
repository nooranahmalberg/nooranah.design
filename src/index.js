// Bento grid

const bentoProjects = document.querySelectorAll(".bento-project");
const bentoCards = document.querySelectorAll(".bento-card");
const bentoButtons = document.querySelectorAll(".bento-button");

const opacityClass = "opacity-40";

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (!isTouchDevice()) {
  bentoProjects.forEach((node) => {
    node.addEventListener("mouseenter", (event) => {
      bentoProjects.forEach((node) => {
        if (node !== event.target) node.classList.add(opacityClass);
      });
    });
    node.addEventListener("mouseleave", () => {
      [...bentoProjects, ...bentoCards, ...bentoButtons].forEach((node) =>
        node.classList.remove(opacityClass)
      );
    });
  });
}

// Theme toggle

const themeToggleButton = document.querySelector("[data-theme-toggle]");

themeToggleButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (event.matches) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  });
