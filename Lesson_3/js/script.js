// Задание №1
// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
// Создайте функцию которая возводит переданное число в квадрат
// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

/* 
function greetings(first_name, last_name, age) {
  return `Привет ${first_name} ${last_name} с возрастом ${age}`;
}
console.log(greetings("Ivan", "Petrov", 30));

const square = (n) => n ** 2;
console.log(square(4));

const positiveNumber = (n) => (n >= 0 ? "+++" : "---");
console.log(positiveNumber(2));
*/

// Задание №2
// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
// С помощью созданной вами функции выведите в консоль сумму значений этих переменных.

/* 
let param1 = 1;
let param2 = 2;
let param3 = 3;
function sumNumbers(firstNumber, secondNumber, thirdNumber) {
  console.log(firstNumber + secondNumber + thirdNumber);
}
sumNumbers(param1, param2, param3);
*/

// Дана фукнция
// function func(num = 5) {
// console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции.
// func(2); 4
// func(3); 9
// func(); 25

// Задание №3
// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.

/* 
function sqrt(number) {
  return number ** (1 / 2);
}
const result = sqrt(3) + sqrt(4);
console.log(result);
// Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции
const minimum = (a, b) => Math.min(a, b);
console.log(minimum(6, 5));
*/

// Задание №4
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

/* 
function week(number) {
  switch (number) {
    case 1:
      console.log("Понедельник");
      break;
    case 2:
      console.log("Вторник");
      break;
    case 3:
      console.log("Среда");
      break;
    case 4:
      console.log("Четверг");
      break;
    case 5:
      console.log("Пятница");
      break;
    case 6:
      console.log("Суббота");
      break;
    case 7:
      console.log("Воскресенье");
      break;
  }
}
week(5); 
*/

// Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

/* 
function greetingsDay(name = anonim) {
  const now = new Date();
  const hour = now.getHours();
  if (hour >= 6 && hour < 12) {
    return `Доброе утро, ${name}`;
  } else if (hour >= 12 && hour < 18) {
    return `Добрый день, ${name}`;
  }
  if (hour >= 18 && hour < 24) {
    return `Добрый вечер, ${name}`;
  } else {
    return `Доброй ночи, ${name}`;
  }
}
console.log(greetingsDay("Fedor"));
 */

// Задание №5
// Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который
// Выводит в консоль “Число больше 5”
// Выводит в консоль “Число меньше 5”
// Выводит в консоль “Число равно 5”

/* 
function numbersFive(number) {
  if (number > 5) {
    return "Число больше 5";
  } else if (number < 5) {
    return "Число меньше 5";
  }
  return "Число равно 5";
}
const userNumber = +prompt("Введите число");
console.log(numbersFive(userNumber));
*/

// Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.

/* 
test1 = "asd";
test2 = "asвd";
console.log(test1 === test2 ? "test1 равен test2" : "test1 не равен test2");
*/

// Пользователь с клавиатуры вводит 2 числа
// Необходимо найти какое из двух чисел минимальное

/* 
const userFirstNumber = +prompt("Введите первое число");
const userSecondNumber = +prompt("Введите второе число");
console.log(
  `Минимальное число: ${Math.min(userFirstNumber, userSecondNumber)}`
);
*/

// Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше нуля и меньше 15.

/* 
const userNumber = +prompt("Введите число");
console.log(
  userNumber > 0 && userNumber < 15
    ? "Данная переменная больше нуля и меньше 15"
    : "Данная переменная меньше или равно нуля или больше или равно 15"
);
*/
