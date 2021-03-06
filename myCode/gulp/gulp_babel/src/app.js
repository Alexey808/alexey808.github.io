// import {Person} from './model/Person';

// global.app = function () {
//     var christoph = new Person('Christoph', 'Burgdorf');
//     console.log(christoph.fullName);
// };
'use strict';

let messages = {
  "Hello, {0}!": "Привет, {0}!"
};

function i18n(strings, ...values) {
  // По форме строки получим шаблон для поиска в messages
  // На месте каждого из значений будет его номер: {0}, {1}, …
  let pattern = "";
  for(let i=0; i<values.length; i++) {
    pattern += strings[i] + '{' + i + '}';
  }
  pattern += strings[strings.length-1];
  // Теперь pattern = "Hello, {0}!"

  let translated = messages[pattern]; // "Привет, {0}!"

  // Заменит в "Привет, {0}" цифры вида {num} на values[num]
  return translated.replace(/\{(\d)\}/g, (s, num) => values[num]);
}

// Пример использования
let name = "Вася";

// Перевести строку
alert( i18n`Hello, ${name}!` ); // Привет, Вася!