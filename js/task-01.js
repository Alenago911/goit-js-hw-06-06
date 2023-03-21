const navEl = document.querySelectorAll('.item');
console.log(navEl);


const NumberOfCategories = navEl.length;
console.log(NumberOfCategories);


navEl.forEach ((element) => {
console.log(element)
console.log(element.firstElementChild)
const title = element.querySelector("h2").textContent;
console.log(title);
const quantityEl = element.querySelectorAll("li").length;
console.log(quantityEl);
});


