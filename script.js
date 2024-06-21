// querySelector
const body = document.querySelector("body");
// createElement
const mainContainer = document.createElement("div");
const buttonDiv = document.createElement("div");
const button = document.createElement("button");
// classList
mainContainer.classList = "main-container";
buttonDiv.classList = "button-div";
button.classList = "button";
// textContent
button.textContent = "EDIT THE GRID SIZE";
// appendChild
body.appendChild(mainContainer);
mainContainer.appendChild(buttonDiv);
buttonDiv.appendChild(button);

console.log(mainContainer);
