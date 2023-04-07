// Задание №1
// Дан блок, внутри него необходимо создать элемент div с классом item,
// разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

/* 
const div1 = document.querySelector(".block");
const divItem1 = document.createElement("div");
divItem1.classList.add("item");
divItem1.textContent = "Элемент внутри";

divItem1.style.color = "blue";
divItem1.style.border = "1px solid black";
divItem1.style.backgroundColor = "#f8f8f8";
divItem1.style.padding = "16px";
div1.appendChild(divItem1);

divItem1.setAttribute("class", "block item_1");
// divItem1.classList.add("item_1");
*/

// Задание №2
// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

/* 
const p2 = document.querySelector(".text");
const headingElem2 = p2.previousElementSibling;
console.log(headingElem2);
const parentContent2 = document.querySelector(".content");
console.log(parentContent2.parentElement);
const img2 = document.querySelector("img");
console.log(img2);
const elem2 = document.querySelector(".elem");
console.log(elem2.parentElement);
*/

// Задание №3
// С помощью querySelector найти элемент h2  и вывести в консоль всех
// его родителей

/* 
const h2Elem3 = document.querySelector("h2.subtitle");
let parentElement2 = h2Elem3.parentElement;
while (parentElement2) {
  console.log(parentElement2);
  parentElement2 = parentElement2.parentElement;
}
*/

// Задание №4
// Дано поле ввода и кнопка отправить, необходим реализовать функционал,
// если пользователь нажимает на кнопку отправить, а поле ввода пустое, то
// под полем ввода и кнопкой должен появиться заголовок h2
// с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

/* 
const form4 = document.querySelector("form");
const input4 = document.querySelector("input");
const btn4 = document.querySelector(".btn");

form4.addEventListener("submit", () => {
  if (input4.value === "") {
    const errorMassage4 = document.createElement("h2");
    errorMassage4.textContent = "Поле не заполнено";
    errorMassage4.style.border = "2px solid red";
    form4.insertBefore(errorMassage4, btn4);
  }
});
*/

// Задание №5
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на
// “Текст отправлен”

/* 
const divContent5 = document.querySelector(".content");
const btn5 = document.createElement("button");
btn5.textContent = "Отправить";
divContent5.appendChild(btn5);

btn5.onclick = function () {
  btn5.textContent = "Текст отправлен";
  // после идет дополнительное задание
  setTimeout(() => {
    btn5.textContent = "Отправить";
  }, 1000);
};
*/
