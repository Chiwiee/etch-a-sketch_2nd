// querySelector
const body = document.querySelector("body");
// createElement
const mainContainer = document.createElement("div");
const buttonDiv = document.createElement("div");
const button = document.createElement("button");
const gridContainer = document.createElement("div");

// classList
mainContainer.classList = "main-container";
buttonDiv.classList = "button-div";
button.classList = "button";
gridContainer.classList = "grid-container";
// textContent
button.textContent = "EDIT THE GRID SIZE";
// appendChild
body.appendChild(mainContainer);
mainContainer.appendChild(buttonDiv);
buttonDiv.appendChild(button);
mainContainer.appendChild(gridContainer);

for (let i = 1; i <= 16 * 16; i++) {
  const gridContainer = document.querySelector(".grid-container");
  const grid = document.createElement("div");
  grid.classList = "grid";
  gridContainer.appendChild(grid);
}

console.log(mainContainer);

const grid = document.querySelectorAll(".grid");
grid.forEach((grid) => {
  grid.addEventListener("mouseout", (e) => {
    e.target.style.background = "black";
  });
});

const gridButton = document.querySelector(".button");
gridButton.addEventListener("click", function () {
  function getInput() {
    const userInput = prompt("Please enter a number for Grid Size");
    const maximum = 100;
    if (userInput <= maximum) {
      return userInput;
    } else {
      return "ERROR";
    }
  }
  const inputValue = getInput();
  console.log(inputValue);
});
