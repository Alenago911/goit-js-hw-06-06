function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
.toString(16)
.padStart(6, 0)}`;
}



const spanText = document.querySelector(".color");
const button = document.querySelector(".change-color");


button.addEventListener("click", function onClick(event) {
let hex = getRandomHexColor();
document.body.style.backgroundColor = hex;
spanText.textContent = hex;
});