// querySelector
const body = document.querySelector("body");
// createElement
const mainContainer = document.createElement("div");
const buttonDiv = document.createElement("div");
// classList
mainContainer.classList = "main-container";
buttonDiv.classList = "button-div";
// textContent
// appendChild
body.appendChild(mainContainer);
mainContainer.appendChild(buttonDiv);

console.log(mainContainer);
