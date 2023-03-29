const navEl = document.querySelectorAll('.item');
console.log(navEl);

const NumberOfCategories = navEl.length;

navEl.forEach ((element) => {
const title = element.querySelector("h2").textContent;
console.log(title);
const quantityEl = element.querySelectorAll("li").length;
console.log(quantityEl);
})


