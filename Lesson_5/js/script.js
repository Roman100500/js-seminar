// Задание № 1
// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”
// Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран
// фамилию, имя и возраст через дефис.
// Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры
// Удалите свойство surname

/* 
const week = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресение",
};
console.log(week[2]);

const user = {
  name: "Dmitriy",
  surname: "Petrov",
  age: 30,
};

console.log(`${user.surname} - ${user.name} - ${user.age}`);
user.patronymic = prompt("Введите отчество");
delete user.surname;
console.log(user);
*/

/* 
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
const name = "Ivan";
const surname = "Petrov";
const user = new Person(name, surname);
console.log(user); 
*/

// Задание № 2
// Даны два массива: первый с названиями дней недели,
// а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.

/* 
const arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const week2 = {};
for (let i = 0; i < arr1.length; i++) {
  week2[arr1[i]] = arr2[i];
}
console.log(week2);
for (let key in week2) {
  week2[key] **= 2;
}
console.log(week2);
*/

// Задание № 3
// const obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// Найдите сумму элементов приведенного объекта.

/* 
const obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};
let sum = 0;
let a;
for (let i = 1; i < 4; i++) {
  a = Object.values(obj[`key${i}`]);
  for (const key in a) {
    sum += a[key];
  }
}
console.log(sum);
 */

// Задание № 4
// Создайте объект riddles
// Добавьте свойства question, answer
// создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// Добавьте свойство hints (содержащее 2 подсказки)
// Если пользователь ответил неверно, ему даётся одна подсказка
// Если пользователь ответил второй раз неверно, даётся вторая подсказка
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”

/* 
const riddles = {
  question: "Зимой и летом одним цветом",
  answer: "ель",
  askQuestion: function () {
    const userAnswer = prompt(this.question);
    if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
      alert("Молодец, правильно");
    } else {
      alert("Не угадал");
      const hint1 = "Это растет в лесу";
      const hint2 = "Ее нарежают в новый год";
      alert(hint1);
      alert(hint2);
    }
  },
};
riddles.askQuestion();
*/
