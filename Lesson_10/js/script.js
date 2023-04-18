import { dataInfo } from "./data.js";
// Все примеры в презентации

// Задание №1
// Поиск в интернете (бесплатные api примеры)
// Найти любые данные, на произвольную тему
// Установить расширение в браузер “JSON viewer”

// Задание №2
// Создать файл data.js
// Создать переменную dataInfo
// Добавить несколько данных в dataInfo

// Задание №3
// Создать файл index.html
// Подключить data.js
// Добавить блок <div class="content"></div>
// Создать переменную data и добавить в нее JSON parse данные из  файла data.js
// Вывести в консоль объект data
// С помощью foreach обойти массив data
// Вывести все изображения из данных

const data = JSON.parse(dataInfo);
console.log(data);
data.forEach((elem) => {
  const img = document.createElement("img");
  img.src = elem.url;
  document.querySelector(".content").appendChild(img);
});

// Задание №4
// Создать все необходимые заголовки, параграфы изображения (из  данных json)
// Добавить все содержимое в блок контент
// Добавить стили при необходимости

const content = document.querySelector(".content");

const data4 = JSON.parse(dataInfo);
console.log(data4);

data4.forEach(({ id, name, age, url }) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = url;
  img.height = `200`;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = name;

  const subtitle = document.createElement("h6");
  subtitle.classList.add("card-subtitle", "mb-2", "text-muted");
  subtitle.textContent = age;

  const idPara = document.createElement("p");
  idPara.classList.add("card-content");
  idPara.textContent = `ID ${id}`;

  cardBody.appendChild(title);
  cardBody.appendChild(subtitle);
  cardBody.appendChild(idPara);

  div.appendChild(img);
  div.appendChild(cardBody);

  content.appendChild(div);
});
