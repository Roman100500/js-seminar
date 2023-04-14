// Задание №1
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным
// элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом
// “Необходимо согласиться с условиями”

/* 
const checkbox = document.getElementById("agree");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  if (!checkbox.checked) {
    const error = document.createElement("div");
    error.textContent = "Необходимо согласиться с условиями";
    checkbox.parentElement.appendChild(error);
  }
});
*/

// Задание №2
// В html создать 2 элемента радио кнопки (input type=”radio”)
// и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

/* 
const teaButton = document.querySelector("input[name='drink'][value='tea']");
const coffeeButton = document.querySelector(
  "input[name='drink'][value='coffee']"
);
const submitButton2 = document.getElementById("submit2");

submitButton2.addEventListener("click", () => {
  if (teaButton.checked) {
    alert("Чай закончился");
  } else if (coffeeButton.checked) {
    alert("Кофе закончился");
  }
});
*/

// Задание №3
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть
// подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и
// текст “пароль неверный”

/* 
const passwordField = document.getElementById("password-field");
const submitButton3 = document.getElementById("submit-button");

submitButton3.addEventListener("click", () => {
  if (passwordField.value === "пароль") {
    passwordField.style.borderColor = "green";
    passwordField.style.borderWidth = "2px";
    passwordField.setCustomValidity("Пароль верный");
  } else {
    passwordField.style.borderColor = "red";
    passwordField.style.borderWidth = "2px";
    passwordField.setCustomValidity("Пароль неверный");
  }
  passwordField.reportValidity();
});
*/

// Задание №4
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри
// заголовка менятся на введенный в поле ввода

/* 
const changeHeader = () => {
  const input4 = document.getElementById("input");
  const header4 = document.getElementById("header");
  header4.innerText = input4.value;
};
const input = document.getElementById("input");
input.addEventListener("input", changeHeader);
*/
