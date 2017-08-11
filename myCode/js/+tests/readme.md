# Разработка тестов


## Полезные ссылки
Источник - http://learn.javascript.ru/testing  

Стили mocha - https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.css  
Библиотека mocha - https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.js  
Библиотека chai - https://cdnjs.cloudflare.com/ajax/libs/chai/2.0.0/chai.js  

Комплект (Chai, Mocha и Sinon) инструментов для написания тестов - https://js.cx/test/libs.js  

---

## Инструменты для разработки тестов

**Mocha** – эта библиотека содержит общие функции для тестирования, включая describe и it.  
**Chai** – библиотека поддерживает разнообразные функции для проверок. Есть разные «стили» проверки результатов, с которыми мы познакомимся позже, на текущий момент мы будем использовать лишь assert.equal.  
**Sinon** – для эмуляции и хитрой подмены функций «заглушками»  

---

## Поток разработки
- Пишется спецификация, которая описывает самый базовый функционал.  
- Делается начальная реализация.  
- Для проверки соответствия спецификации мы задействуем фреймворк (в нашем случае Mocha). Фреймворк запускает все тесты it и выводит ошибки, если они возникнут. При ошибках вносятся исправления.  
- Спецификация расширяется, в неё добавляются возможности, которые пока, возможно, не поддерживаются реализацией.  
- Идём на пункт 2, делаем реализацию. И так «до победного конца».  

---

## Спецификация
**assert-проверки, встроенные в Chai**  
- assert(value) – проверяет что value является true в логическом контексте.  
- assert.equal(value1, value2) – проверяет равенство value1 == value2.  
- assert.strictEqual(value1, value2) – проверяет строгое равенство value1 === value2.  
- assert.notEqual, assert.notStrictEqual – проверки, обратные двум предыдущим.  
- assert.isTrue(value) – проверяет, что value === true
- assert.isFalse(value) – проверяет, что value === false 
 
**Синтакс**
```js
  // Блок it -------------------------------------------------------+
  it("другие блоки it", function() { 
    /* assert.метод_проверки(функция(),результат) */
  });

  // Под блок describe ---------------------------------------------+
  describe("des", function() {
    it("блоки it в подблоке des", function() {
      /* assert.метод_проверки(функция(),результат) */
    });
  });

  // it, describe, before/after и beforeEach/afterEach -------------+
  describe("des", function() {
    before(function() { alert("Начало всех тестов"); });
    after(function() { alert("Окончание всех тестов"); });
    beforeEach(function() { alert("Вход в тест"); });
    afterEach(function() { alert("Выход из теста"); });
    it("блоки it в подблоке des", function() { 
      alert('test!'); 
      /* assert.метод_проверки(функция(),результат) */
    });

  });
```

### Пример спецификации
Файл: **pull.html**
```html
  <!DOCTYPE html>
  <html>

  <head>
    <meta charset="utf-8">
    <!-- подключаем Chai, Mocha и Sinon -->
    <script src="https://js.cx/test/libs.js"></script>

  </head>

  <body>

    <script>
      function pow(x, n) {
        var result = 1;

        for (var i = 0; i < n; i++) {
          result *= x;
        }

        return result;
      }
    </script>

    <!-- в этом скрипте находятся спеки -->
    <script src="test.js"></script>


  </body>

  </html>
```

Файл: **test.js**
```js
  describe("pow", function() {

    describe("возводит x в степень n", function() {

      function makeTest(x) {
          var expected = x * x * x;
         //блок it, непосредственно сам тест
          it("при возведении " + x + " в степень 3 результат: " + expected, function() {
            assert.equal(pow(x, 3), expected);
          });
      }
      //вспомогательный цикл, генерируем возможные варианты
      for (var x = 1; x <= 5; x++) {
          makeTest(x);
      }

    });

    // ... дальнейшие тесты it и подблоки describe ...
    
  });
```
