import { dataProducts } from "./data.js";

// Задание №1
// 1. Дан макет
// https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/sh
// op-(Copy)-(Copy)?node-id=73%3A140 в котором
// представлены товары на странице корзины
// 2. Необходимо создать файл data.js в котором создать
// переменную dataProducts в которую присвоить JSON
// данные по товарам.
// 3. Вам нужно самостоятельно создать JSON данные (не
// забыть про кавычки для ключей и значений
// 4. Добавить все данные из макета, чтобы в дальнейшим по
// ним мы смогли создать вёрстку

// Задание №2
// 1. Создаём вёрстку по данному макету
// 2. Добавляем все теги и стили для них, чтобы получилось
// один в один как в макете
// 3. Пока данные для шаблонизации использовать не нужно

// Задание №3
// 1. Создаём блоки с помощью javascript для этого используем данные
// из dataProducts
// 2. Формируем товары на основе нашей вёрстки
// 3. Проверяем, как будет выглядеть сайт, если в json данных, добавить
// еще один объект с товаром (в вёрстке должен появиться еще один
// блок, на основе этих данных)

const productData = JSON.parse(dataProducts);
const productBox = document.querySelector(".product__box");

productData.forEach(({ name, image, price, color, size, quantity }) => {
  const productEl = `
  <div class="product">
    <button class="btn__del" type="button">Удалить</button>
    <div class="product__content">
      <img class="product__img" src="${image}" alt="${name}" />
      <div class="product__desc">
        <h2 class="product__name">${name}</h2>
        <p class="product__price_label">
          Price: <span class="product__price">$${price}</span>
        </p>
        <p class="product__color">Color: ${color}</p>
        <p class="product__size">Size: ${size}</p>
        <div class="product__qty">
          <label class="input__label">Quantity:</label>
          <input class="input__qty" type="number" min="0" max="6" value="${quantity}"/>
        </div>
      </div>
    </div>
  </div>`;
  productBox.insertAdjacentHTML("beforeend", productEl);
});

const deleteButtons = document.querySelectorAll(".btn__del");

deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const product = button.closest(".product");
    product.remove();
  });
});
