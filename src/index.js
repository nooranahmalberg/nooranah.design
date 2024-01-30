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
