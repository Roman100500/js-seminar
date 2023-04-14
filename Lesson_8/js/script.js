// Задание №1
// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль
// текст “событие addEventListener”

/* 
document.getElementById("myButton").onclick = function () {
  console.log("событие onclick");
};
document.getElementById("myButton").addEventListener("click", () => {
  console.log("событие addEventListener");
});

window.onload = function () {
  console.log("Страница загрузилась");
};
*/

// Задание №2
// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка
// на которую мы нажали. Добавить кнопку button с текстом 4, которая считает
// сколько раз на нее нажали и количество нажатий на эту кнопку выводит в
// консоль. Создать кнопку button с текстом 5, При клике на которую,
// меняется текст данной кнопки на “Вы нажали на эту кнопку”

/* 
document.getElementById("button1").onclick = function () {
  console.log("кнопка 1");
};
document.getElementById("button2").onclick = function () {
  console.log("кнопка 2");
};
document.getElementById("button3").onclick = function () {
  console.log("кнопка 3");
};
document.getElementById("button4").onclick = function () {
  console.log("кнопка 4");
};
document.getElementById("button5").onclick = function () {
  console.log("кнопка 5");
};

let clickCount = 0;
document.getElementById("button4").onclick = function () {
  clickCount++;
  console.log(`Кнопка 4 кликнулась ${clickCount} раз(а)`);
};

document.getElementById("button5").addEventListener("click", function () {
  this.innerText = "Вы нажали на эту кнопку";
});
*/

// Задание №3
// Создать кнопку, которая добавляем заголовок h1 с текстом,
// “Новый заголовок, данный элемент нужно расположить после кнопки.
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться
// текст “вы навели на данную кнопку” , как только вы убираем курсор мыши
// с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

/* 
document.getElementById("add").addEventListener("click", () => {
  const heading = document.createElement("h1");
  heading.innerText = "Новый заголовок";
  const button = document.getElementById("add");
  button.parentElement.insertBefore(heading, button.nextSibling);
});

document.getElementById("remove").addEventListener("click", () => {
  const heading = document.querySelector("h1");
  if (heading) {
    heading.parentElement.removeChild(heading);
  }
});

const hoverButton = document.getElementById("hover");
hoverButton.addEventListener("mouseover", () => {
  console.log("Вы навели на кнопку");
});

hoverButton.addEventListener("mouseout", () => {
  console.log("Вы вышли за пределы кнопки");
});
*/

// Задание №4
// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом
// “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

/* 
const list = document.getElementById("myList");
const addButton = document.getElementById("add1");
const removeButton = document.getElementById("remove1");
const addClassButton = document.getElementById("hover1");

addButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.innerText = "Новый элемент списка";
  list.appendChild(newItem);
});

removeButton.addEventListener("click", () => {
  const firstItem = list.querySelector("li:first-child");
  if (firstItem) {
    list.removeChild(firstItem);
  }
});

addClassButton.addEventListener("click", () => {
  addClassButton.classList.add("click");
});
*/
