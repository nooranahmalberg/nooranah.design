import "./index.css";

let pageNumber = 0;

const pageInfo = [
  {
    copy: "a product designer in Brisbane, Australia",
    background: "#f5f5f4", // stone-100
    color: "#44403c", // stone-700
    circle: "#06b6d4", // cyan-500
  },
  {
    copy: "updating her portfolio 🚧",
    background: "#cffafe", // cyan-100
    color: "#44403c", // stone-700
    circle: "#f59e0b", // amber-500
  },
  {
    copy: "open to work starting mid-late April",
    background: "#fef3c7", // amber-100
    color: "#44403c", // stone-700
    circle: "#14b8a6", // teal-500
  },
];

const tagEl = document.querySelector("#tag-line");
const backgroundEl = document.querySelector("#page-background");
const circleEl = document.querySelector("#circle-color");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const randomBtn = document.querySelector("#random-btn");

// Add event listeners for mouse clicks
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
randomBtn.addEventListener("click", random);

// Add keyboard navigation
document.addEventListener("keydown", function (event) {
  // Use keydown for all keyboard events for consistency
  switch (event.key) {
    case "ArrowRight":
      next();
      break;
    case "ArrowLeft":
      prev();
      break;
    case "r":
    case "R":
      // Add 'r' key for random
      random();
      break;
    case "Home":
      // Add Home key to go to first page
      pageNumber = 0;
      updatePage();
      break;
    case "End":
      // Add End key to go to last page
      pageNumber = pageInfo.length - 1;
      updatePage();
      break;
  }
});

function next() {
  pageNumber = pageNumber + 1;
  if (pageNumber > pageInfo.length - 1) {
    pageNumber = 0;
  }
  updatePage();
}

function prev() {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = pageInfo.length - 1;
  }
  updatePage();
}

function updatePage() {
  tagEl.innerHTML = pageInfo[pageNumber].copy;
  tagEl.style.color = pageInfo[pageNumber].color;

  // Use a simple background color for minimalism
  backgroundEl.style.backgroundColor = pageInfo[pageNumber].background;
  backgroundEl.style.backgroundImage = "none";

  circleEl.style.backgroundColor = pageInfo[pageNumber].circle;
}

function random() {
  pageNumber = Math.floor(Math.random() * pageInfo.length);
  updatePage();
}

// Initialize the page on load
updatePage();
