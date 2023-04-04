// Задание №1
/* <div id="block">
	<p>1</p>
	<p>2</p>
</div>
Получите ссылку на первый абзац из дива с id, равным block, 
выведите его в консоль.
Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p> 
}*/

/* 
const div1 = document.querySelector("#block p:first-child");
console.log(div1);
const p1 = document.getElementsByClassName("www");
console.log(p1[0]);
*/

// Задание №2
// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/
// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src
// на любое изображение из интернета

/* 
const link2 = document.querySelector(".link");
link2.textContent = "link text js";
link2.href = "https://developer.mozilla.org/ru/";
// link1.setAttribute("href", "https://developer.mozilla.org/ru/");
const img2 = document.querySelector(".photo");
img2.src = "https://cattish.ru/wp-content/uploads/2018/06/kitekat-0.jpg";
*/

// Задание №3
// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

/* 
const divContent3 = document.querySelector(".content");
const p3 = document.createElement("p");
p3.textContent = "Новый текстовый элемент";
divContent3.appendChild(p3);
divContent3.removeChild(p3);
//p3.remove();
*/

// Задание №4
// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз
//  пользователь нажал на данную кнопку

// const divContent4 = document.querySelector(".content");
// const btn4 = document.createElement("button");
// divContent4.appendChild(btn4);
// btn4.textContent = "Нажми на меня";
// let count = 0;

// 1 вариант
// btn4.onclick = function () {
//   count++;
//   console.log(`Вы нажали на кнопку ${count} раз(а)`);
// };

// 2 вариант

/* 
btn4.addEventListener("click", () => {
  count++;
  console.log(`Вы нажали на кнопку ${count} раз(а)`);
});

const resetbtn4 = document.createElement("button");
resetbtn4.textContent = "Сброс нажатий";
divContent4.appendChild(resetbtn4);
resetbtn4.setAttribute("id", "resetbtn4");
resetbtn4.addEventListener("click", () => {
  count = 0;
  console.log(`Нажатия обнулены`);
});
*/

// Задание №5
// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы
// текст поменялся на “Текст отправлен”

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
