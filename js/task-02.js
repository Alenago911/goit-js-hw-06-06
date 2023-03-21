const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const elements = ingredients.map(option => {
    const navItem =  document.createElement('li');
    navItem.classList.add('item');
    navItem.textContent = option;
    
    return navItem;
    });

   const list = document.querySelector('#ingredients');
    list.append(...elements);

console.log(list)
 console.log(elements);
   