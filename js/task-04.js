
const btnDec = document.querySelector('[data-action="decrement"]');
const btnIn = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
counterValue += 1;

document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
counterValue -= 1;

document.getElementById("value").textContent = counterValue;
};
btnIn.addEventListener("click", increment);
btnDec.addEventListener("click", decrement);




