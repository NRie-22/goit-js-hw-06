const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`)

categoriesList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});

/* скрипт, который решает данную задачу:

javascript
Copy code
const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

// Выводим количество категорий
console.log(`Number of categories: ${categoriesItems.length}`);

// Итерируемся по каждому элементу li.item
categoriesItems.forEach((category) => {
  // Находим заголовок категории и количество элементов внутри неё
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;

  // Выводим информацию в консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
Код начинается с выборки элемента ul#categories и всех его потомков li.item с помощью метода querySelectorAll(). Затем мы выводим количество категорий в списке.

Затем мы используем метод forEach() для итерации по каждому элементу li.item в списке. Внутри цикла мы ищем заголовок категории (элемент h2) и количество элементов внутри неё (элементы li внутри вложенного списка). Затем мы выводим информацию о категории и количестве элементов в консоль.
*/