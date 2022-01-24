// default values for reset
// vars for like values
// functions to append those changes to said vars

const grid = document.getElementById("grid");

//create a 16x16 grid

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const gridSquare = document.createElement("div");
    grid.appendChild(gridSquare);
  }
}

createGrid(16);

// on hover add color or toggle class
// add a reset function
