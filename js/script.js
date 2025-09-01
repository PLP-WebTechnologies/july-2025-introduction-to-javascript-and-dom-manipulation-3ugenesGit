// Variable
let colors = ["red", "blue", "green", "yellow", "purple"];

// Function 1: Change to specific color
function changeColor(color) {
  document.body.style.backgroundColor = color;
}

// Function 2: Change to random color
function randomColor() {
  let index = Math.floor(Math.random() * colors.length);
  changeColor(colors[index]);
}

// DOM Interactions
document.getElementById("redBtn").addEventListener("click", () => changeColor("red"));
document.getElementById("blueBtn").addEventListener("click", () => changeColor("blue"));
document.getElementById("randomBtn").addEventListener("click", randomColor);

// Loops
for (let i = 0; i < colors.length; i++) {
  console.log("Available color:", colors[i]);
}

colors.forEach(c => console.log("Color option:", c));
