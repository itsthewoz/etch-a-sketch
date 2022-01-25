// TODO: attatch slider to currentSize
// TODO: color picker
// TODO: style everything

// default values for reset and load
const gridSize = 16;
const gridMode = "monochrome";
const squareColor = "black";

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
}

function setColor(newColor) {
  currentColor = newColor;
}

// const square = document.querySelectorAll(".square"); currently not needed
const grid = document.querySelector(".grid");
const rainbow = document.querySelector(".rainbow");
const monochrome = document.querySelector(".monochrome");
const eraser = document.querySelector(".eraser");
const reset = document.querySelector(".reset");

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
// on mouseover of .square call randomRGP() and append it to the backgraound of class .square

console.log(randomRgb());
console.log(currentSize);
console.log(currentMode);

window.onload = () => {
  createGrid(currentSize);
};

// on hover add color or toggle class
// add a reset function
