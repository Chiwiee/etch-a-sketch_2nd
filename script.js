// querySelector
const body = document.querySelector("body");
// createElement
const mainContainer = document.createElement("div");
const buttonDiv = document.createElement("div");
const button = document.createElement("button");
const mainGrid = document.createElement("div");

// classList
mainContainer.classList = "main-container";
buttonDiv.classList = "button-div";
button.classList = "button";
mainGrid.classList = "main-grid";
// textContent
button.textContent = "EDIT THE GRID SIZE";
// appendChild
body.appendChild(mainContainer);
mainContainer.appendChild(buttonDiv);
buttonDiv.appendChild(button);
mainContainer.appendChild(mainGrid);

for (let i = 1; i <= 16 * 16; i++) {
  const gridContainer = document.querySelector(".main-grid");
}
