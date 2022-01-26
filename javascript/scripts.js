// TODO: color picker
// TODO: style everything

// default values for reset and load
const gridSize = 60;
const gridMode = "monochrome";
const squareColor = "#000000";

// vars for like values
let currentSize = gridSize;
let currentMode = gridMode;
let currentColor = squareColor;

// functions to append changes to said vars
function setSize(newSize) {
  currentSize = newSize;
}

function setMode(newMode) {
  currentMode = newMode;
  if (newMode === "eraser") {
    // selectColor.setAttribute("value", "#f1f1f1");
    selectColor.value = "#f1f1f1";
  } else if (newMode === "monochrome") {
    selectColor.value = currentColor;
  }
}

const grid = document.querySelector(".grid");
const rainbow = document.querySelector(".rainbow");
const monochrome = document.querySelector(".monochrome");
const eraser = document.querySelector(".eraser");
const reset = document.querySelector(".reset");
const selectColor = document.querySelector("#selectColor");
const range = document.querySelector("#range");

range.addEventListener("input", watchRange);

selectColor.addEventListener("input", watchColor);

rainbow.addEventListener("click", function () {
  setMode("rainbow");
});
monochrome.addEventListener("click", function () {
  setMode("monochrome");
});
eraser.addEventListener("click", function () {
  setMode("eraser");
});
reset.addEventListener("click", function () {
  defaultGrid();
});

function createGrid(currentSize) {
  grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;

  for (let i = 0; i < currentSize * currentSize; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridSquare.addEventListener("mouseover", changeColor);
    grid.appendChild(gridSquare);
  }
}

function changeColor(e) {
  if (currentMode === "rainbow") {
    e.target.style.backgroundColor = randomRgb();
  } else if (currentMode === "monochrome") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "rgb(241, 241, 241)";
  }
}

function watchRange(e) {
  currentSize = e.target.value;
  grid.innerHTML = "";
  createGrid(currentSize);
}
// color picker
function watchColor(e) {
  currentColor = e.target.value;
  currentMode = "monochrome";
}

function defaultGrid() {
  grid.innerHTML = "";
  createGrid(currentSize);
}

function randomRgb() {
  let r = Math.round(Math.random() * (255 - 0) + 0);
  let g = Math.round(Math.random() * (255 - 0) + 0);
  let b = Math.round(Math.random() * (255 - 0) + 0);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(randomRgb());
console.log(currentSize);
console.log(currentMode);

window.onload = () => {
  createGrid(currentSize);
};
