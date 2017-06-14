z. Кофеварка, публичные и приватные свойства/методы.
### Геттеры и сеттеры ###
Есдиный геттер и сеттер 
z. Конструктор User с гетарами и сетарами
z. Кофеварка. Геттеры.
z. Кофеварка. Добавление публичного метода addWater кофеварке.
z. Создание  onReady для кофеварки.
z. Добавление публичного метода isRunning. Пришлось ввести timerI
### Наследование ###
Общая схема наследования
Наследования
Простой пример наследования
z. Кофеварка
z 4-5. Холодильник
Портатипы


// z. Кофеварка, публичные и приватные свойства/методы. --------------------------------------------
  /*
    !Локальные переменные, включая параметры конструктора, можно считать приватными свойствами.
    !Свойства, записанные в this, можно считать публичными.
  */

  function CoffeeMachine(power) { //приватный параметр power
    this.waterAmount = 0; //публичное свойство

    var WATER_HEAT_CAPACITY = 4200; //приватная локальная переменная/константа

    var self = this; //приватная локальная переменная

    var timerId; //приватная локальная переменная

    function getBoilTime() { //приватный метод
      return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() { //приватный метод
      alert( 'Кофе готово!' );
    }

    this.run = function() { //публичный метод run
      timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function() { //публичный метод стоп, добавляя который ввели переменную timerId
      clearTimeout(timerId);
    };

  }

  var coffeeMachine = new CoffeeMachine(50000);
  coffeeMachine.waterAmount = 200;

  coffeeMachine.run();
  coffeeMachine.stop(); // кофе приготовлен не будет

### Геттеры и сеттеры ### 

// Есдиный геттер и сеттер -------------------------------------------------------------------------
  function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    this.waterAmount = function(amount) { // <- Есдиный геттер и сеттер
      // вызов без параметра, значит режим геттера, возвращаем свойство
      if (!arguments.length) return waterAmount;

      // иначе режим сеттера
      if (amount < 0) {
        throw new Error("Значение должно быть положительным");
      }
      if (amount > capacity) {
        throw new Error("Нельзя залить воды больше, чем " + capacity);
      }

      waterAmount = amount;
    };

  }

  var coffeeMachine = new CoffeeMachine(1000, 500);

  // пример использования
  coffeeMachine.waterAmount(450);
  alert( coffeeMachine.waterAmount() ); // 450

// z. Конструктор User с гетарами и сетарами -------------------------------------------------------
  /*
  !Одна из целей существования геттеров/сеттеров – как раз и есть изоляция внутренних свойств объекта, 
  чтобы можно было их как угодно менять, генерировать «на лету», а внешний интерфейс оставался темже.
  */
  function User() {

    var firstName, surname;

    this.setFirstName = function(newFirstName) {
      firstName = newFirstName;
    };

    this.setSurname = function(newSurname) {
      surname = newSurname;
    };

    this.getFullName = function() {
      return firstName + ' ' + surname;
    }
  }

  var user = new User();
  user.setFirstName("Петя");
  user.setSurname("Иванов");

  alert( user.getFullName() ); // Петя Иванов

  var user = new User();
  user.setFirstName("Петя");
  user.setSurname("Иванов");

  alert( user.getFullName() ); // Петя Иванов

// z. Кофеварка. Геттеры. --------------------------------------------------------------------------
  function CoffeeMachine(power, capacity) {

    this.setWaterAmount = function(amount) {
      if (amount < 0) {
        throw new Error("Значение должно быть положительным");
      }
      if (amount > capacity) {
        throw new Error("Нельзя залить воды больше, чем " + capacity);
      }

      waterAmount = amount;
    };

    this.getWaterAmount = function() {
      return waterAmount;
    };

    // геттер для приватного свойства power
    this.getPower = function() {
      return power
    }
  }

// z. Кофеварка. Добавление публичного метода addWater кофеварке. ----------------------------------

  function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
      if (amount < 0) {
        throw new Error("Значение должно быть положительным");
      }
      if (amount > capacity) {
        throw new Error("Нельзя залить больше, чем " + capacity);
      }

      waterAmount = amount;
    };

    this.addWater = function(amount) {
      this.setWaterAmount(waterAmount + amount);
    };

    function onReady() {
      alert( 'Кофе готов!' );
    }

    this.run = function() {
      setTimeout(onReady, getTimeToBoil());
    };

  }

  var coffeeMachine = new CoffeeMachine(100000, 400);
  coffeeMachine.addWater(200);
  coffeeMachine.addWater(100);
  coffeeMachine.addWater(300); // Нельзя залить больше..
  coffeeMachine.run();

// z. Создание  onReady для кофеварки. -------------------------------------------------------------
  function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
      // ... проверки пропущены для краткости
      waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
      return waterAmount;
    };

    function onReady() {
      alert( 'Кофе готов!' );
    }
    // В сеттере setOnReady параметр называется newOnReady. Мы не можем назвать 
    // его onReady, так как тогда изнутри сеттера мы никак не доберёмся до внешнего 
    // (старого значения)
    this.setOnReady = function(newOnReady) {
      onReady = newOnReady;
    };
    // Чтобы setOnReady можно было вызывать в любое время, в setTimeout передаётся не 
    // onReady, а анонимная функция function() { onReady() }, которая возьмёт текущий 
    // (установленный последним) onReady из замыкания.
    this.run = function() {
      setTimeout(function() {
        onReady();
      }, getTimeToBoil());
    };

  }

  var coffeeMachine = new CoffeeMachine(20000, 500);
  coffeeMachine.setWaterAmount(150);

  coffeeMachine.run();

  coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    alert( 'Готов кофе: ' + amount + 'мл' ); // Готов кофе: 150 мл
  });

// z. Добавление публичного метода isRunning. Пришлось ввести timerId ------------------------------
  function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var timerId;

    this.isRunning = function() {
      return !!timerId;
    };

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
      // ... проверки пропущены для краткости
      waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
      return waterAmount;
    };

    function onReady() {
      alert( 'Кофе готов!' );
    }

    this.setOnReady = function(newOnReady) {
      onReady = newOnReady;
    };

    this.run = function() {
      timerId = setTimeout(function() {
        timerId = null;
        onReady();
      }, getTimeToBoil());
    };

  }

  var coffeeMachine = new CoffeeMachine(20000, 500);
  coffeeMachine.setWaterAmount(100);

  alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

  coffeeMachine.run();
  alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

  coffeeMachine.setOnReady(function() {
    alert( "После: " + coffeeMachine.isRunning() ); // После: false
  });

### Наследование ###

!Внутренние свойства классов, для того чтобы наследник имел доступ к свойству, оно должно быть прописанно в (this) и должны начинатся с (_) тоесть (this._enabled).
!!!Подчёркивание в начале свойства – общепринятый знак, что свойство является внутренним, предназначенным лишь для доступа из самого объекта и его наследников.
!Оператор instanceof не сможет проверить тип значения, если объект создан в одном окне/фрейме, а проверяется в другом. Это потому, что в каждом окне – своя иерархия объектов. Для точной проверки типов встроенных объектов можно использовать свойство [[Class]].
// Общая схема наследования ------------------------------------------------------------------------
  // приватные/локальные, публичные, защищённые свойства--------------------------------------------
    function Machine(params) {
      // локальные переменные и функции доступны только внутри Machine
      var privateProperty;

      // публичные доступны снаружи
      this.publicProperty = ...;

      // защищённые доступны внутри Machine и для потомков
      // мы договариваемся не трогать их снаружи
      this._protectedProperty = ...
    }

    var machine = new Machine(...)
    machine.public();

// Наследования ------------------------------------------------------------------------------------
    /*
    Для наследования конструктор потомка вызывает родителя в своём контексте через apply. 
    После чего может добавить свои переменные и методы
    */
      function CoffeeMachine(params) {
        // универсальный вызов с передачей любых аргументов
        Machine.apply(this, arguments);

        this.coffeePublicProperty = ...
      }

      var coffeeMachine = new CoffeeMachine(...);
      coffeeMachine.publicProperty();
      coffeeMachine.coffeePublicProperty();

    // перезаписать или расширить свойства -----------------------------------------------------------
    /*
    В CoffeeMachine свойства, полученные от родителя, можно перезаписать своими. Но обычно 
    требуется не заменить, а расширить метод родителя. Для этого он предварительно копируется 
    в переменную
    */
      //базовый класс
      function Machine(params) {
        this._protectedProperty = ...
      } 
      //наследующий класс
      function CoffeeMachine(params) {
        Machine.apply(this, arguments);

        var parentProtected = this._protectedProperty; //записываем в переменную
        this._protectedProperty = function(args) {
          parentProtected.apply(this, args); // (*)
          // ...
        };
      }
      /*
      Строку (*) можно упростить до parentProtected(args), если метод родителя 
      не использует this, а, например, привязан к var self = this:
      */
      function Machine(params) {
        var self = this;

        this._protected = function() {
          self.property = "value";
        };
      }

// Простой пример наследования ---------------------------------------------------------------------

  //базовый класс Машина
  function Machine() {
    this._enabled = false; // вместо "var enabled = false;"

    this.enable = function() {
      this._enabled = true;
    };

    this.disable = function() {
      this._enabled = false;
    };
  }

  //конструктор кофемашина
  function CoffeeMachine(power) {
    Machine.call(this); // унаследовать

    this.enable();

    alert( this._enabled ); // true
  }

  var coffeeMachine = new CoffeeMachine(10000);

// Пример переопределение методов ------------------------------------------------------------------
  //Базовый класс машина
  function Machine(power) {
    this._power = power; // из конструкатара перенесено сюда.

    this._enabled = false;

    this.enable = function() {
      this._enabled = true;
    };

    this.disable = function() {
      this._enabled = false;
    };
  }
  //унаследованный класс кофемашина от машина
  function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var parentEnable = this.enable; // (1)
    this.enable = function() {      // (2)
        parentEnable.call(this);    // (3)
        this.run();                 // (4)
      }
    ...
    // (1) Копируем доставшийся от родителя метод this.enable в переменную, например parentEnable.
    // (2) Заменяем this.enable на свою функцию…
    // (3) …Которая по-прежнему реализует старый функционал через вызов parentEnable.
    // (4) …И в дополнение к нему делает что-то своё, например запускает приготовление кофе.
  }

// z. Кофеварка ------------------------------------------------------------------------------------
  
  //класс машина, от которого наследуем  
    function Machine(power) {
      this._enabled = false;

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }

  //класс кофеварка
    function CoffeeMachine(power) {
      Machine.apply(this, arguments);

      var waterAmount = 0; //переменная где хранится добавленная вода
      var timerId;

      //добавляем воды
      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      function onReady() {
        alert('Кофе готово!');
      }

      //z2. Если выключить процесс варки завершается
      var parentDisable = this.disable;
      this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
      }
      
      this.run = function() {
        //z1. Запуск только при включённой кофеварке
        if (!this._enabled) {
          throw new Error("Кофеварка выключена");
        }
        timerId = setTimeout(onReady, 1000);
      };
    }

    //конструктор кофеварка
    var coffeeMachine = new CoffeeMachine(10000);

    //проверки
    coffeeMachine.enable();
    coffeeMachine.run();
    coffeeMachine.disable(); // остановит работу, ничего не выведет

  //z. Сделать класс холодильник по подобию кофеварки, оба наследуются от Machine --------------------
  //класс машина, от которого наследуем
    function Machine(power) {
      this._power = power;
      this._enabled = false;

      var self = this;

      this.enable = function() {
        self._enabled = true;
      };

      this.disable = function() {
        self._enabled = false;
      };


    }

  //класс холодильник
  function Fridge(power) {
    // унаследовать
    Machine.apply(this, arguments);

    //массив еды
    var food = []; // приватное свойство food

    //Добавление еды
    this.addFood = function() {
      if (!this._enabled) {
        // throw new Error("Холодильник выключен");
        console.log("Холодильник выключен");
      }
      if (food.length + arguments.length >= this._power / 100) {
        //throw new Error("Нельзя добавить, не хватает мощности");
        console.log("Нельзя добавить, не хватает мощности");
      }
      for (var i = 0; i < arguments.length; i++) {
        food.push(arguments[i]); // добавить всё из arguments
      }
    };

    //получение списка массива еды
    this.getFood = function() {
      // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
      return food.slice();
    };

  }

  //конструктор холодильник  
    var fridge = new Fridge(500);
    fridge.enable();

  //финальная проверка
  var fridge = new Fridge(500);
  fridge.enable();
  fridge.addFood("котлета");
  fridge.addFood("сок", "варенье");

  var fridgeFood = fridge.getFood();
  console.log( fridgeFood ); // котлета, сок, варенье

  // добавление элементов не влияет на еду в холодильнике
  fridgeFood.push("вилка", "ложка");

  console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье

// z 4-5. Холодильник ------------------------------------------------------------------------------
  /*
    1) Имеет 2 состояния, включен / выключен.
    2) Добовление еды / Удаление еды.
    3) Выводить ошибку если его пытаются выключить в то время когда он с едой.
    4) Нельзя ложить еду если холодильник выключен.
    5) Холодильник ограничен вместимостью еды в зависимости от его мощности.
    6) Есть фильтр, в проверке ниже фильтруем по колориям <50 и выводим.
  */

  function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
      self._enabled = true;
    };

    this.disable = function() {
      self._enabled = false;
    };
  }

  function Fridge(power) {
    // унаследовать
    Machine.apply(this, arguments);

    var food = []; // приватное свойство food

    this.addFood = function() {
      if (!this._enabled) {
        throw new Error("Холодильник выключен");
      }
      if (food.length + arguments.length >= this._power / 100) {
        throw new Error("Нельзя добавить, не хватает мощности");
      }
      for (var i = 0; i < arguments.length; i++) {
        food.push(arguments[i]); // добавить всё из arguments
      }

    };

    this.getFood = function() {
      // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
      return food.slice();
    };

    //фильтр, по проверке фильтруем по колориям <50
    this.filterFood = function(filter) {
      return food.filter(filter);
    };

    //удаление продукта
    this.removeFood = function(item) {
      var idx = food.indexOf(item);
      if (idx != -1) food.splice(idx, 1);
    };

    //Выключить нельзя, внутри есть еда.
    var parentDisable = this.disable;
    this.disable = function() {
      if (food.length) {
        throw new Error("Нельзя выключить: внутри еда");
      }
      parentDisable();
    };
  }

  var fridge = new Fridge(500);
  fridge.enable();
  fridge.addFood({
    title: "котлета",
    calories: 100
  });
  fridge.addFood({
    title: "сок",
    calories: 30
  });
  fridge.addFood({
    title: "зелень",
    calories: 10
  });
  fridge.addFood({
    title: "варенье",
    calories: 150
  });

  var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
  });

  fridge.removeFood("нет такой еды"); // без эффекта
  console.log( fridge.getFood().length ); // 4

  dietItems.forEach(function(item) {
    alert( item.title ); // сок, зелень
    fridge.removeFood(item);
  });

  console.log( fridge.getFood().length ); // 2
  fridge.disable(); // ошибка, в холодильнике есть еда

// Портатипы ---------------------------------------------------------------------------------------
!this записываем в переменную(var self = this;), когда внутри контекста объекта есть другой контекст;
!прототипный подход стоит предпочитать функциональному как более быстрый и универсальный. А что касается красоты синтаксиса – она сильно лучше в новом стандарте ES6, которым можно пользоваться уже сейчас, если взять транслятор babeljs.
!Прототип задействуется только при чтении свойства. Операции присвоения obj.prop = или удаления delete obj.prop совершаются всегда над самим объектом obj.
! 1) Свойство prototype имеет смысл только у конструктора (через функцию new). 2) Ещё при работе new, свойство prototype будет использовано лишь в том случае, если это объект. Примитивное значение, такое как число или строка, будет проигнорировано. 3) У каждой функции по умолчанию уже есть свойство prototype.
!Свойство constructor может быть полезно, когда, получив объект, мы не знаем в точности, какой у него был конструктор (например, сделан вне нашего кода), а нужно создать такой же.
!!Изменение портотипов крайне не рекомендуется, добовлять изменять и расширять можно, но не стоит злоупотреблять. Портотипы можно и даже рекомендуется использовать совместимости/кроссбраузерности.
Свойство  __proto__
  Object.getPrototypeOf(obj) (кроме IE8-) - Чтение
  Object.setPrototypeOf(obj, proto) (кроме IE10-) - Запись
  Object.create(proto, descriptors) (кроме IE8-) - Создание объекта с прототипом
  Object.create(null) - Создание объекта без портотипа.

Метод     obj.hasOwnProperty(prop)

+--------------------------------------------------------------------------------------------------+
| Встроенные "классы" в JavaScript                   http://learn.javascript.ru/native-prototypes  |
+--------------------------------------------------------------------------------------------------+
|                                             null                                                 |
|                                              |                                                   | 
|                                              |__proto__                                          |
|                                              |                                                   |
|                                       Object.prototype                                           |
|                                    +------------------------+                                    |
|                                  / | toString: function     | \                                  |
|                                 /  | другие методы объектов |  \                                 |
|                                /   +------------------------+   \                                |
|                      __proto__/              |                   \__proto__                      |
|                              /               |__proto__           \                              |
|                             /                |                     \                             |
|            Array.prototype            Function.prorotype            Number.prototype             |
|      +------------------------+    +------------------------+    +------------------------+      | 
|      | slice: function        |    |    apply: function     |    | toFixed: function      |      |
|      | другие методы массивов |    |    другие методы       |    | другие методы чисел    |      |
|      +------------------------+    +------------------------+    +------------------------+      |
|                |                              |                              |                   |
|                |__proto__                     |__proto__                     |__proto__          |
|                |                              |                              |                   |
|           +------------+            +------------------------+            +-----+                |
|           | [1, 2, 3]  |            |    function f(args) {  |            |  5  |                |
|           +------------+            |      ...               |            +-----+                |
|                                     |    }                   |                                   |
|                                     +------------------------+                                   |
+--------------------------------------------------------------------------------------------------+



//Пример портотипа, не работает в IE10-
  var animal = {
    eats: true
  };
  var rabbit = {
    jumps: true
  };

  rabbit.__proto__ = animal;

  // в rabbit можно найти оба свойства
  alert( rabbit.jumps ); // true
  alert( rabbit.eats ); // true

//Перебор свойств объекта пропуская портотипы __poroto__ методом obj.hasOwnProperty(prop) ----------
  var animal = {
    eats: true
  };

  var rabbit = {
    jumps: true,
    __proto__: animal
  };

  for (var key in rabbit) {
    if (!rabbit.hasOwnProperty(key)) continue; // пропустить "не свои" свойства
    alert( key + " = " + rabbit[key] ); // выводит только "jumps"
  }

//Пример Object.create(null) -----------------------------------------------------------------------
  var data = Object.create(null);
  data.text = "Привет";

  alert(data.text); // Привет
  alert(data.toString); // undefined

//Свойство портотип, снизу __proto__ анологичен .portotipe -----------------------------------------

  //Свойство .__proto__
  var animal = {
    eats: true
  };

  function Rabbit(name) {
    this.name = name;
    this.__proto__ = animal;
  }

  var rabbit = new Rabbit("Кроль");

  alert( rabbit.eats ); // true, из прототипа

  //Свойство .portotipe
  var animal = {
    eats: true
  };

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype = animal;

  var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal

  alert( rabbit.eats ); // true

//Свойство constructor -----------------------------------------------------------------------------
//У каждой функции по умолчанию уже есть свойство prototype. Оно содержит объект такого вида, только генерится автоматически:
  function Rabbit() {}

  Rabbit.prototype = {
    constructor: Rabbit
  };

//z. Портотипы, вызовы, и как они работают на примере. ---------------------------------------------
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
}

var rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); //Rabbit
Rabbit.prototype.sayHi(); //undefined
Object.getPrototypeOf(rabbit).sayHi(); //undefined
rabbit.__proto__.sayHi(); //undefined


//z.Аргументы по умолчанию. ------------------------------------------------------------------------
function Menu(options) {
  //создание объекта options позволяет сохранить переданные значения не боясь за то что данные будут изменены. 
  //Ещё эту проблему можно было решить с помощью переменных и копированием всего объекта.
  options = Object.create(options); //создаём такойже объект.

  options.width = options.width || 300;

  alert( options.width ); // возьмёт width из наследника
  alert( options.height ); // возьмёт height из исходного объекта
  ...
}

//Стандартные методы {} ----------------------------------------------------------------------------
  //то что генерирует представление alert
  alert( {}.__proto__.toString ); // function toString

  //-
  
  //проверки
    var obj = {};

    // метод берётся из прототипа?
    alert( obj.toString == Object.prototype.toString ); // true, да

    // проверим, правда ли что __proto__ это Object.prototype?
    alert( obj.__proto__ == Object.prototype ); // true

    // А есть ли __proto__ у Object.prototype?
    alert( obj.__proto__.__proto__ ); // null, нет

//z. Переделать фкнкфиональный вид в портотипный, на примере часов. --------------------------------

  //функциональынй ------------------------------
  function Clock(options) {

    var template = options.template;
    var timer;

    function render() {
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      var min = date.getMinutes();
      if (min < 10) min = '0' + min;

      var sec = date.getSeconds();
      if (sec < 10) sec = '0' + sec;

      var output = template.replace('h', hours).replace('m', min).replace('s', sec);

      console.log(output);
    }

    this.stop = function() {
      clearInterval(timer);
    };

    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    }

  }
  //-
  var clock = new Clock({
  template: 'h:m:s'
  });
  //смотреть в консоли
  clock.start();

// Прототипный ----------------------------------

  function Clock(options) {
    this._template = options.template;
  }

  Clock.prototype._render = function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
  };

  Clock.prototype.stop = function() {
    clearInterval(this._timer);
  };

  Clock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function() {
      self._render();
    }, 1000);
  };

  //--
  var clock = new Clock({
    template: 'h:m:s'
  });
  //смотреть в консоли
  clock.start();


//Добавление своих методов в портотип. -------------------------------------------------------------

  Object.prototype.each = function(f) {

    for (var prop in this) {

      //т.к. включать проверку в цикл не рекомендуется, будем исп флаг
      //if (!this.hasOwnProperty(prop)) continue;// пропускать свойства из прототипа

      var value = this[prop];
      f.call(value, prop); //, value

    }

  };

  // поправить объявление свойства, установив флаг enumerable: false
  Object.defineProperty(Object.prototype, 'each', {
    enumerable: false
  });

  // Теперь все будет в порядке
  var obj = {
    name: 'Вася',
    age: 25
  };

  obj.each(function(prop, val) {
    alert( prop ); // name -> age
  });

// Структура наследования на примере ---------------------------------------------------------------
  // --------- Класс-Родитель ------------
  // Конструктор родителя пишет свойства конкретного объекта
  function Animal(name) {
    this.name = name;
    this.speed = 0;
  }

  // Методы хранятся в прототипе
  Animal.prototype.run = function() {
    alert(this.name + " бежит!")
  }

  // --------- Класс-потомок -----------
  // Конструктор потомка
  function Rabbit(name) {
    Animal.apply(this, arguments);
  }

  // Унаследовать
  Rabbit.prototype = Object.create(Animal.prototype);

  // Желательно и constructor сохранить
  Rabbit.prototype.constructor = Rabbit;

  // Методы потомка
  Rabbit.prototype.run = function() {
    // Вызов метода родителя внутри своего
    Animal.prototype.run.apply(this);
    alert( this.name + " подпрыгивает!" );
  };

  // Готово, можно создавать объекты
  var rabbit = new Rabbit('Кроль');
  rabbit.run();

//z. Расширение класса Clock путём добавления класса ExtendedClock ---------------------------------

  //Clock.js---------------------------------------
    function Clock(options) {
      this._template = options.template;
    }

    Clock.prototype._render = function render() {
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      var min = date.getMinutes();
      if (min < 10) min = '0' + min;

      var sec = date.getSeconds();
      if (sec < 10) sec = '0' + sec;

      var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

      console.log(output);
    };

    Clock.prototype.stop = function() {
      clearInterval(this._timer);
    };

    Clock.prototype.start = function() {
      this._render();
      var self = this;
      this._timer = setInterval(function() {
        self._render();
      }, 1000);
    };

  //ExtendedClock.js-------------------------------
  function ExtendedClock(options) {
    Clock.apply(this, arguments);
    this._precision = +options.precision || 10000;
  }

  ExtendedClock.prototype = Object.create(Clock.prototype);

  ExtendedClock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function() {
      self._render();
    }, this._precision);
  };

  //index.html-------------------------------------
    //Надо: часы, которые тикают раз в 10 секунд (точность 10000)
      var lowResolutionClock = new ExtendedClock({
          template: 'h:m:s',
          precision: 10000
      });

      lowResolutionClock.start();

//z. Написать класс AnimatingMenu расширяющий класс Menu-------------------------------------------
  //mtnu.js--------------------------------------------------
  function Menu(state) {
    this._state = state || this.STATE_CLOSED;
  };

  Menu.prototype.STATE_OPEN = 1;
  Menu.prototype.STATE_CLOSED = 0;

  Menu.prototype.open = function() {
    this._state = this.STATE_OPEN;
  };

  Menu.prototype.close = function() {
    this._state = this.STATE_CLOSED;
  };

  Menu.prototype._stateAsString = function() {
    switch (this._state) {
      case this.STATE_OPEN:
        return 'открыто';

      case this.STATE_CLOSED:
        return 'закрыто';
    }
  };

  Menu.prototype.showState = function() {
    alert(this._stateAsString());
  }
  //index.html-----------------------------------------------
  function AnimatingMenu() {
      Menu.apply(this, arguments);
    }

    AnimatingMenu.prototype = Object.create(Menu.prototype);

    AnimatingMenu.prototype.STATE_ANIMATING = 2;

    AnimatingMenu.prototype.open = function() {
      var self = this;

      this._state = this.STATE_ANIMATING;

      this._timer = setTimeout(function() {
        Menu.prototype.open.call(self);
      }, 1000);
    };

    AnimatingMenu.prototype.close = function() {
      clearTimeout(this._timer);
      Menu.prototype.close.apply(this);
    };

    AnimatingMenu.prototype._stateAsString = function() {

      switch (this._state) {
        case this.STATE_ANIMATING:
          return 'анимация';

        default:
          return Menu.prototype._stateAsString.call(this);
      }
    };

    // тест, использование..
    var menu = new AnimatingMenu();

    menu.showState(); // закрыто

    menu.open();
    menu.showState(); // анимация

    setTimeout(function() { // через 1 секунду
      menu.showState(); // открыто

      menu.close();
      menu.showState(); // закрыто
    }, 1000);

// Примеси. простой примерчик. (Подробности в impurity.html) ---------------------------------------
/*
!События – это средство «поделиться информацией» с неопределённым кругом заинтересованных лиц.
!Примесь – объект, содержащий методы и свойства для реализации конкретного функционала. Возможны вариации этого приёма проектирования.
!Для добавления примеси в класс – её просто «подмешивают» в прототип. «Подмешать» можно сколько угодно примесей, но если имена методов в разных примесях совпадают, то возможны конфликты.

 */

  // примесь
  var sayHiMixin = {
    sayHi: function() {
      alert("Привет " + this.name);
    },
    sayBye: function() {
      alert("Пока " + this.name);
    }
  };

  // использование:
  function User(name) {
    this.name = name;
  }

  // передать методы примеси
  for(var key in sayHiMixin) User.prototype[key] = sayHiMixin[key];

  // User "умеет" sayHi
  new User("Вася").sayHi(); // Привет Вася

### Кросс-браузерность ### -------------------------------------------------------------------------

//Эмуляция Object.create для IE8-
  function inherit(proto) {
    function F() {}     // (1)
    F.prototype = proto // (2)
    var object = new F; // (3)
    return object;      // (4)
  }
  /*
  1) Создана новая функция F. Она ничего не делает с this, так что если вызвать new F, то получим пустой объект.
  2) Свойство F.prototype устанавливается в будущий прототип proto
  3) Результатом вызова new F будет пустой объект с __proto__ равным значению F.prototype.
  4) Мы получили пустой объект с заданным прототипом, как и хотели. Возвратим его.
  */

  //Для унификации можно запустить такой код, и метод Object.create станет кросс-браузерным:
  if (!Object.create) Object.create = inherit; /* определение inherit - выше */

  //проверка
  var animal = {
    eats: true
  };
  var rabbit = inherit(animal);
  alert( rabbit.eats ); // true
### ------------------------------------------------------------------------------------------------

//z. Добавление в портатип функции свойство defer --------------------------------------------------
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

function f() {
  alert( "привет" );
}

f.defer(1000); // выведет "привет" через 1 секунду

//z. Добавление в портотип функции свойство defer с аргументами ------------------------------------
Function.prototype.defer = function(ms) {
  var f = this;
  return function() {
    var args = arguments,
      context = this;
    setTimeout(function() {
      f.apply(context, args);
    }, ms);
  }
}

// проверка
function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.























































































































































































































































































































































































































































































































































  