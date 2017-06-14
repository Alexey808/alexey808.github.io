


## Аргументы ## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//--- Нестандартный доступ к аргументам, разных стандартов. ------------------------------------+
//--- Создание массива из аргументов. ----------------------------------------------------------+
//--- Значения по умолчанию необязательных аргументов. -----------------------------------------+
//--- Именованные аргументы. -------------------------------------------------------------------+
//--- Именнованные аргументы, повторное использование аргументов. ------------------------------+
//--- z. Сумма всех аргументов. ----------------------------------------------------------------+

	//--- Нестандартный доступ к аргументам, разных стандартов. ------------------------------------+
		function f(x) {
		  "use strict"; // для браузеров с поддержкой строгого режима
		  arguments[0] = 5;
		  alert( x ); // не 5, а 1! Переменная "отвязана" от arguments
		}
		f(1);

	//--- Создание массива из аргументов. ----------------------------------------------------------+
		var args = [];
		for (var i = 0; i < arguments.length; i++) {
		  args[i] = arguments[i];
		}

	//--- Значения по умолчанию необязательных аргументов. -----------------------------------------+
		//если необязательный аргумент не undefined а 0 или null к примеру
		function showWarning(width, height, title, contents) {
		  width = width || 200; // если не указана width, то width = 200
		  height = height || 100; // если нет height, то height = 100
		  title = title || "Предупреждение";

		  //...
		}

		//если изначально аргумент undefined то лучше использовать явную проверку
		function showWarning(width, height, title, contents) {
		  if (width === undefined) width = 200;
		  if (height === undefined) height = 100;
		  if (title === undefined) title = "Предупреждение";

		  //...
		}

	//--- Именованные аргументы. -------------------------------------------------------------------+

		function showWarning(options) {
	  		var width = options.width || 200; // по умолчанию
	  		var height = options.height || 100;

	  		var contents = options.contents || "Предупреждение";

	  		// ...

	  		showWarning({
	  			contents: "Вы вызвали функцию" // и всё понятно!
			});

		// ...
		}
		//или... необычный вызыв функции, где null заменится значением по умолчанию
		showWarning(null, null, "Предупреждение!");

	//--- Именнованные аргументы, повторное использование аргументов. ------------------------------+
		var opts = {
		  width: 400,
		  height: 200,
		  contents: "Текст"
		};

		showWarning(opts);

		opts.contents = "Другой текст";

		showWarning(opts); // вызвать с новым текстом, без копирования других аргументов	
	
	//--- z. Сумма всех аргументов. ----------------------------------------------------------------+
		function sum() {
		  var result = 0;

		  for (var i = 0; i < arguments.length; i++) {
		    result += arguments[i];
		  }

		  return result;
		}

		alert( sum() ); // 0
		alert( sum(1) ); // 1
		alert( sum(1, 2) ); // 3
		alert( sum(1, 2, 3) ); // 6
		alert( sum(1, 2, 3, 4) ); // 1

## ES6-Символы ## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//--- Пример 1. --------------------------------------------------------------------------------+
//--- Пример 2. Символу можно задать имя -------------------------------------------------------+
//--- Пример 3. Два одинаковых имени символа не равны друг другу -------------------------------+
//--- Пример 4. Глобальные символы с помощью Symbol.for(name) для записи в реестр --------------+
//--- Пример 5. Обратный вызов глобального символа ---------------------------------------------+
//--- Пример 6. Особенности Symbol.for(name), т.е. символ должен быть глобальным ---------------+
//--- Использование симолов, символ в качестви имени для свойства объекта ----------------------+
//--- Символы не участвую в итерации (переборе свойств for..in). -------------------------------+
//--- Отсутствие конфликта нового системного свойства ------------------------------------------+

	//--- Пример 1. --------------------------------------------------------------------------------+
		let sym = Symbol();
		alert( typeof sym ); // symbol

	//--- Пример 2. Символу можно задать имя -------------------------------------------------------+
		let sym = Symbol("name");
		alert( sym.toString() ); // Symbol(name)

	//--- Пример 3. Два одинаковых имени символа не равны друг другу -------------------------------+
		alert( Symbol("name") == Symbol("name") ); // false
		//

	//--- Пример 4. Глобальные символы с помощью Symbol.for(name) для записи в реестр --------------+
		// создание символа в реестре
		let name = Symbol.for("name");
		// символ уже есть, чтение из реестра
		alert( Symbol.for("name") == name ); // true

	//--- Пример 5. Обратный вызов глобального символа ---------------------------------------------+
		// создание символа в реестре
		let name = Symbol.for("name");
		// получение имени символа
		alert( Symbol.keyFor(name) ); // name

	//--- Пример 6. Особенности Symbol.for(name), т.е. символ должен быть глобальным ---------------+
		alert( Symbol.keyFor(Symbol.for("name")) ); // name, глобальный
		alert( Symbol.keyFor(Symbol("name2")) ); // undefined, обычный символ

	//--- Использование симолов, символ в качестви имени для свойства объекта ----------------------+
		'use strict';

		let isAdmin = Symbol("isAdmin");

		let user = {
		  name: "Вася",
		  [isAdmin]: true
		};

		alert(user[isAdmin]); // true

	//--- Символы не участвую в итерации (переборе свойств for..in). -------------------------------+
		let user = {
		  name: "Вася",
		  age: 30,
		  [Symbol.for("isAdmin")]: true
		};

		// в цикле for..in также не будет символа
		alert( Object.keys(user) ); // name, age

		// доступ к свойству через глобальный символ — работает
		alert( user[Symbol.for("isAdmin")] );

	//--- Отсутствие конфликта нового системного свойства ------------------------------------------+
		let obj = {
		  iterator: 1,
		  [Symbol.iterator]: function() {}
		}

		// один символ в объекте
		//alert( Object.getOwnPropertySymbols(obj) ); //один из вариантов, но уже не работает 
		alert( Object.getOwnPropertySymbols(obj)[0].toString() ); // Symbol(Symbol.iterator)

		// и одно обычное свойство
		alert( Object.getOwnPropertyNames(obj) ); // iterator	

## ES6-Итераторы ## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//--- Пример итерации. -------------------------------------------------------------------------+
//--- Пример итеретируемая строка. -------------------------------------------------------------+
//--- Свой итератор. ---------------------------------------------------------------------------+
//--- Встроенные итераторы. --------------------------------------------------------------------+

	//--- Пример итерации. -------------------------------------------------------------------------+
		let arr = [1, 2, 3]; // массив — пример итерируемого объекта ---+
		for (let value of arr) {
		  alert(value); // 1, затем 2, затем 3

	//--- Пример итеретируемая строка. -------------------------------------------------------------+
		for (let char of "Привет") {
		  alert(char); // Выведет по одной букве: П, р, и, в, е, т
		}

	//--- Свой итератор. ---------------------------------------------------------------------------+
		//range – диапазон чисел от from до to
		let range = {
		  from: 1,
		  to: 5
		}

		// сделаем объект range итерируемым
		range[Symbol.iterator] = function() {

		  let current = this.from;
		  let last = this.to;

		  // метод должен вернуть объект с методом next()
		  return {
		    next() {
		      if (current <= last) {
		        return {
		          done: false, //перебор не окончен
		          value: current++ //продолжаем
		        };
		      } else {
		        return {
		          done: true // перебор окончен
		        };
		      }
		    }

		  }
		};

		for (let num of range) {
		  alert(num); // 1, затем 2, 3, 4, 5
		}

	//--- Встроенные итераторы. --------------------------------------------------------------------+
		/*Встроенные в JavaScript итераторы можно получить и явным образом, без for..of, прямым 
			вызовом Symbol.iterator.*/
		let str = "Hello";

		// Делает то же, что и
		// for (var letter of str) alert(letter);

		let iterator = str[Symbol.iterator]();

		while(true) {
		  let result = iterator.next();
		  if (result.done) break;
		  alert(result.value); // Выведет все буквы по очереди
		}
		//То же самое будет работать и для массивов.

## ES6-Промисы ## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//--- Синтаксис создания Promise: --------------------------------------------------------------+
//--- Универсальный метод для навешивания обработчиков: ----------------------------------------+
//--- С его помощью можно назначить как оба обработчика сразу, так и только один. --------------+
//--- Синхронный throw – то же самое, что reject. ----------------------------------------------+
//--- Пример 1. --------------------------------------------------------------------------------+
//--- Пример 2. Выводит ошибку. ----------------------------------------------------------------+
//--- Пример 3. !Promise после reject/resolve – неизменны. -------------------------------------+
//--- Промисификация. --------------------------------------------------------------------------+
//--- chaining - Цепочки промисов, без отлова ошибок. ------------------------------------------+
//--- Чейнинг промисов, с пробросом ошибки. ----------------------------------------------------+
//--- Параллельное выполнение промисов | Promise.all(iterable). --------------------------------+
//--- Параллельное выполнение промисов | Promise.race(iterable). -------------------------------+
//--- Параллельное выполнение промисов | Promise.resolve(value). -------------------------------+
//--- Параллельное выполнение промисов | Promise.reject(error). --------------------------------+
//--- z. Промисифицировать setTimeout. ---------------------------------------------------------+
//--- z. Загрузить массив последовательно. -----------------------------------------------------+
//--- Пример из коментов, с аватаркой чисто на промисах. ---------------------------------------+

	//--- Синтаксис создания Promise: --------------------------------------------------------------+
		var promise = new Promise(function(resolve, reject) {
		  // Эта функция будет вызвана автоматически

		  // В ней можно делать любые асинхронные операции,
		  // А когда они завершатся — нужно вызвать одно из:
		  // resolve(результат) при успешном выполнении
		  // reject(ошибка) при ошибке
		})

	//--- Универсальный метод для навешивания обработчиков: ----------------------------------------+
		promise.then(onFulfilled, onRejected)
		//-

	//--- С его помощью можно назначить как оба обработчика сразу, так и только один. --------------+
		promise.then(onFulfilled)// onFulfilled сработает при успешном выполнении
		promise.then(null, onRejected)// onRejected сработает при ошибке, или же .catch(onRejected)

	//--- Синхронный throw – то же самое, что reject. ----------------------------------------------+
		let p = new Promise((resolve, reject) => {
		  // то же что reject(new Error("o_O"))
		  throw new Error("o_O");
		})
		p.catch(alert); // Error: o_O

	//--- Пример 1. --------------------------------------------------------------------------------+
		/*В результате запуска кода ниже – через 1 секунду выведется «Fulfilled: result».
			А если бы вместо resolve("result") был вызов reject("error"), то вывелось бы «Rejected: error». 
			Впрочем, как правило, если при выполнении возникла проблема, то reject вызывают не со строкой, 
			а с объектом ошибки типа new Error:*/

		// Создаётся объект promise
		let promise = new Promise((resolve, reject) => {

		  setTimeout(() => {
		    // переведёт промис в состояние fulfilled с результатом "result"
		    resolve("result");
		  }, 1000);

		});

		// promise.then навешивает обработчики на успешный результат или ошибку
		promise
		  .then(
		    result => {
		      // первая функция-обработчик - запустится при вызове resolve
		      alert("Fulfilled: " + result); // result - аргумент resolve
		    },
		    error => {
		      // вторая функция - запустится при вызове reject
		      alert("Rejected: " + error); // error - аргумент reject
		    }
		  );

	//--- Пример 2. Выводит ошибку. ----------------------------------------------------------------+
		// Этот promise завершится с ошибкой через 1 секунду
		var promise = new Promise((resolve, reject) => {

		  setTimeout(() => {
		    reject(new Error("время вышло!"));
		  }, 1000);

		});

		promise
		  .then(
		    result => alert("Fulfilled: " + result),
		    error => alert("Rejected: " + error.message) // Rejected: время вышло!
		  );
	
	//--- Пример 3. !Promise после reject/resolve – неизменны. -------------------------------------+
		let promise = new Promise((resolve, reject) => {

		  // через 1 секунду готов результат: result
		  setTimeout(() => resolve("result"), 1000);

		  // через 2 секунды — reject с ошибкой, он будет проигнорирован
		  setTimeout(() => reject(new Error("ignored")), 2000);

		});

		promise
		  .then(
		    result => alert("Fulfilled: " + result), // сработает
		    error => alert("Rejected: " + error) // не сработает
		  );

	//--- Промисификация. --------------------------------------------------------------------------+
		/*В качестве примера сделаем такую обёртку для запросов при помощи XMLHttpRequest.
			Функция httpGet(url) будет возвращать промис, который при успешной загрузке данных с url будет 
			переходить в fulfilled с этими данными, а при ошибке – в rejected с информацией об ошибке*/
		
		function httpGet(url) {

		  return new Promise(function(resolve, reject) {

		    var xhr = new XMLHttpRequest();
		    xhr.open('GET', url, true);

		    xhr.onload = function() {
		      if (this.status == 200) {
		        resolve(this.response);
		      } else {
		        var error = new Error(this.statusText);
		        error.code = this.status;
		        reject(error);
		      }
		    };

		    xhr.onerror = function() {
		      reject(new Error("Network Error"));
		    };

		    xhr.send();
		  });

		}
		/*Как видно, внутри функции объект XMLHttpRequest создаётся и отсылается как обычно, 
		при onload/onerror вызываются, соответственно, resolve (при статусе 200) или reject.*/

		//использование
		httpGet("/article/promise/user.json") //!вместо лучше исп httpGet метод fetch
		  .then(
		    response => alert(`Fulfilled: ${response}`),
		    error => alert(`Rejected: ${error}`)
		  );

	//--- chaining - Цепочки промисов, без отлова ошибок. ------------------------------------------+
		// сделать запрос
		httpGet('/article/promise/user.json')
		  // 1. Получить данные о пользователе в JSON и передать дальше
		  .then(response => {
		    console.log(response);
		    let user = JSON.parse(response);
		    return user;
		  })
		  // 2. Получить информацию с github
		  .then(user => {
		    console.log(user);
		    return httpGet(`https://api.github.com/users/${user.name}`);
		  })
		  // 3.1 Вывести аватар на 3 секунды (можно с анимацией)
		  .then(githubUser => {
		    console.log(githubUser);
		    githubUser = JSON.parse(githubUser);

		    let img = new Image();
		    img.src = githubUser.avatar_url;
		    img.className = "promise-avatar-example";
		    document.body.appendChild(img);

		    setTimeout(() => img.remove(), 3000); // (*)
		  });
		  // 3.2 Другой вариант, если хотим передать управление дальше, другому промису
			.then(githubUser => {
			  ...
			  // вместо setTimeout(() => img.remove(), 3000); (*)

			  return new Promise((resolve, reject) => {
			    setTimeout(() => {
			      img.remove();
			      // после таймаута — вызов resolve,
			      // можно без результата, чтобы управление перешло в следующий then
			      // (или можно передать данные пользователя дальше по цепочке)
			      resolve();
			    }, 3000);
			  });
			})

	//--- Чейнинг промисов, с пробросом ошибки. ----------------------------------------------------+
		/*Определяем пользователя, и используем аватарку с гитхаба, если с ним не удётся соеденится то 
			используем аватарку по умолчанию*/
		httpGet('/article/promise/userNoGithub.json')
		  .then(JSON.parse)
		  .then(user => loadUrl(`https://api.github.com/users/${user.name}`))
		  .then(
		    JSON.parse,
		    function githubError(error) {
		      if (error.code == 404) {
		        return {name: "NoGithub", avatar_url: '/article/promise/anon.png'};
		      } else {
		        throw error;
		      }
		    }
		  })
		  .then(function showAvatar(githubUser) {
		    let img = new Image();
		    img.src = githubUser.avatar_url;
		    img.className = "promise-avatar-example";
		    document.body.appendChild(img);
		    setTimeout(() => img.remove(), 3000);
		  })
		  .catch(function genericError(error) {
		    alert(error); // Error: Not Found
		  });

	//--- Параллельное выполнение промисов | Promise.all(iterable). --------------------------------+
		/*Нужно зделать следующее: 
			1) Создать для каждого URL соответствующий промис.
			2) Обернуть массив таких промисов в Promise.all.
			!Но если какой-то из промисов завершился с ошибкой, то результатом Promise.all будет эта 
			ошибка. При этом остальные промисы игнорируются. */
		let urls = [
		  '/article/promise/user.json',
		  '/article/promise/guest.json'
		];
		Promise.all( urls.map(httpGet) )
		  .then(results => {
		    alert(results);
		  });

	//--- Параллельное выполнение промисов | Promise.race(iterable). -------------------------------+
		Promise.race([
		  httpGet('/article/promise/user.json'),
		  httpGet('/article/promise/guest.json')
		]).then(firstResult => {
		  firstResult = JSON.parse(firstResult);
		  alert( firstResult.name ); // iliakan или guest, смотря что загрузится раньше
		});

	//--- Параллельное выполнение промисов | Promise.resolve(value). -------------------------------+
		/*!Promise.resolve используют, когда хотят построить асинхронную цепочку, и начальный 
		результат уже есть.*/
		Promise.resolve(window.location) // начать с этого значения
		  .then(httpGet) // вызвать для него httpGet
		  .then(alert) // и вывести результат

	//--- Параллельное выполнение промисов | Promise.reject(error). --------------------------------+
		Promise.reject(new Error("..."))
		  .catch(alert) // Error: ...
			  
	//--- z. Промисифицировать setTimeout. ---------------------------------------------------------+
			/*Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved"
				через ms миллисекунд.*/
			function delay(ms) {
			  return new Promise((resolve, reject) => {
			    setTimeout(resolve, ms);
			  });
			}

			//Вот такой вызов:
			return new Promise((resolve, reject) => {
			  setTimeout(() => {
			    doSomeThing();
			    resolve();
			  }, ms)
			});



			//Пример использования:
			delay(1000)
			  .then(() => alert("Hello!"))

			//Станет возможным переписать так:
			return delay(ms).then(doSomething);
	
	//--- z. Загрузить массив последовательно. -----------------------------------------------------+
	  //http://learn.javascript.ru/promise#promise-resolve-value
	  
	  //Файл httpGet.js-----------------------+
	  function httpGet(url) {

	    return new Promise(function(resolve, reject) {

	      var xhr = new XMLHttpRequest();
	      xhr.open('GET', url, true);

	      xhr.onload = function() {
	        if (this.status == 200) {
	          resolve(this.response);
	        } else {
	          var error = new Error(this.statusText);
	          error.code = this.status;
	          reject(error);
	        }
	      };

	      xhr.onerror = function() {
	        reject(new Error("Network Error"));
	      };

	      xhr.send();
	    });

	  }

	  //Файл quest.json-----------------------+
	  {
	    "name": "guest",
	    "isAdmin": false
	  }

	  //Файл user.json------------------------+
	  {
	    "name": "iliakan",
	    "isAdmin": true
	  }

	  //Файл index.html-----------------------+
	  //Подключаем скрипт <script src="httpGet.js"><//script>
	  'use strict';
	    let urls = ['guest.json', 'user.json'];

	    let chain = Promise.resolve();

	    let results = [];

	    urls.forEach(function(url) {
	      chain = chain
	        .then(() => httpGet(url))
	        .then((result) => {
	          results.push(result);
	        });
	    });

	    chain.then(() => {
	      alert(results);
	    });
	 
	//--- Пример из коментов, с аватаркой чисто на промисах. ---------------------------------------+
		'use strict';
		function showUserAvatar() {

		  fetch('/article/generator/user.json')
		    .then( userJSON => userJSON.json() )
		    .then( userJS => fetch(`https://api.github.com/users/${userJS.name}`))
		    .then( gitUserJSON => gitUserJSON.json())
		    .then( gitUserJS => {
		             let img = new Image();
		             img.src = gitUserJS.avatar_url;
		             img.className = "promise-avatar-example";
		             document.body.appendChild(img);
		             setTimeout(() => img.remove(), 3000);
		      }
		    )
		    .catch( error => { console.error(error); });
		}
		showUserAvatar();    

## ES6-Модули ## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//--- export | экспорт переменной прямо перед объявлением. -------------------------------------+
//--- export | экспорт переменной отдельно от объявления. --------------------------------------+
//--- export | экспорт для двух переменных. ----------------------------------------------------+
//--- export | При помощи ключевого слова as указываем имя с которым переменная будет доступна.-+
//--- export | Экспорт функций и классов. ------------------------------------------------------+
//--- export | export default, экспорт по умолчанию. -------------------------------------------+
//--- import | синтакс: ------------------------------------------------------------------------+
//--- import | Пример импорта ------------------------------------------------------------------+
//--- import | Импорт всех значений в виде объекта ---------------------------------------------+

	//--- export | экспорт переменной прямо перед объявлением. -------------------------------------+
		export let one = 1;		
		//
		
	//--- export | экспорт переменной отдельно от объявления. --------------------------------------+
		let two = 2;
		export {two};
	
	//--- export | экспорт для двух переменных. ----------------------------------------------------+
		let one = 1;
		let two = 2;
		export {one, two};
	
	//--- export | При помощи ключевого слова as указываем имя с которым переменная будет доступна.-+
		let one = 1;
		let two = 2;
		export {one as once, two as twice};
	
	//--- export | Экспорт функций и классов. ------------------------------------------------------+
		export class User {
		  constructor(name) {
		    this.name = name;
		  }
		};

		export function sayHi() {
		  alert("Hello!");
		};

		// отдельно от объявлений было бы так:
		// export {User, sayHi}

	//--- export | export default, экспорт по умолчанию. -------------------------------------------+
		//Например, файл user.js:
			export default class User { /*если было бы: export class User { ... }*/
			  constructor(name) {
			    this.name = name;
			  }
			};
			
		//в файле login.js:
			import User from './user'; /*то пришлось бы ставить тут {}: import {User} from './user';*/
				new User("Вася");

	//--- import | синтакс: ------------------------------------------------------------------------+
		/* Где...
			"./nums" – модуль, как правило это путь к файлу модуля.
			one, two – импортируемые переменные, которые должны быть обозначены в nums словом export.
		*/
		import {one, two} from "./nums";

	//--- import | Пример импорта ------------------------------------------------------------------+
		//при таком файле nums.js:
		export let one = 1;
		export let two = 2;
		//Способ 1. Модуль ниже выведет «1 and 2»:
		import {one, two} from "./nums";
		alert( `${one} and ${two}` ); // 1 and 2
		//Способ 2. Импорт one под именем item1, а two – под именем item2
		import {one as item1, two as item2} from "./nums";
		alert( `${item1} and ${item2}` ); // 1 and 2

	//--- import | Импорт всех значений в виде объекта ---------------------------------------------+
		//при таком файле nums.js:
		export let one = 1;
		export let two = 2;
		//импортируем 
		import * as numbers from "./nums";
		// теперь экспортированные переменные - свойства numbers
		alert( `${numbers.one} and ${numbers.two}` ); // 1 and 2	

## ES6-Proxy ## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//--- Cинтакс. ---------------------------------------------------------------------------------+
//--- Пример прокси. ---------------------------------------------------------------------------+
//--- Пример прокси, обращение к не существущему свойству. -------------------------------------+
//--- has - Ловушка has срабатывает в операторе in, когда проверяется наличие свойства. --------+
//--- deleteProperty - Срабатывает при операции delete. ----------------------------------------+
//--- enumerate - Ловушка enumerate перехватывает операции for..in и for..of по объекту. -------+
//--- apply - работа с функциями. --------------------------------------------------------------+
//--- construct - перехватывает вызовы при помощи new. -----------------------------------------+

	//--- Cинтакс. ---------------------------------------------------------------------------------+
		/* target – объект, обращения к которому надо перехватывать.
			 handler – объект с «ловушками»: функциями-перехватчиками для операций к target.*/
		let proxy = new Proxy(target, handler)	

		//Срабатывает при чтении свойства из прокси.
			get(target, property, receiver)
			> target – целевой объект, тот же который был передан первым аргументом в new Proxy.
			> property – имя свойства.
			> receiver – объект, к которому было применено присваивание. Обычно сам прокси, либо прототипно 
					наследующий от него. Этот аргумент используется редко.
		//Срабатывает при записи свойства в прокси
			set(target, property, value, receiver)
			> target – целевой объект, тот же который был передан первым аргументом в new Proxy.
			> property – имя свойства.
			> value – значение свойства.
			> receiver – объект, к которому было применено присваивание, обычно сам прокси, либо 
					прототипно наследующий от него.

		Метод set должен вернуть true, если присвоение успешно обработано и false в случае 
			ошибки (приведёт к генерации TypeError).

	//--- Пример прокси. ---------------------------------------------------------------------------+
		'use strict';
		let user = {};
		let proxy = new Proxy(user, {
		  get(target, prop) {
		    alert(`Чтение ${prop}`);
		    return target[prop];
		  },
		  set(target, prop, value) {
		    alert(`Запись ${prop} ${value}`);
		    target[prop] = value;
		    return true;
		  }
		});
		proxy.firstName = "Ilya"; // запись
		proxy.firstName; // чтение
		alert(user.firstName); // Ilya		

	//--- Пример прокси, обращение к не существущему свойству. -------------------------------------+
		'use strict';

		//словарь
		let dictionary = {
		  'Hello': 'Привет',
		  'Bye': 'Пока'
		};
		alert( dictionary['Hello'] ); // Привет

		//прокси
		dictionary = new Proxy(dictionary, {
		  get(target, phrase) {
		    if (phrase in target) {
		      return target[phrase];
		    } else {
		      console.log(`No phrase: ${phrase}`);
		      return phrase;
		    }
		  }
		})

		// Обращаемся к произвольным свойствам словаря!
		alert( dictionary['Hello'] ); // Привет
		alert( dictionary['Welcome']); // Welcome (без перевода)

	//--- has - Ловушка has срабатывает в операторе in, когда проверяется наличие свойства. --------+
		/*Синтаксис has аналогичен get. Ловушка has срабатывает в операторе in и некоторых других 
			случаях, когда проверяется наличие свойства.*/

		'use strict';
		let dictionary = {
		  'Hello': 'Привет'
		};
		dictionary = new Proxy(dictionary, {
		  has(target, phrase) {
		    return true;
		  }
		});
		alert("BlaBlaBla" in dictionary); // true

	//--- deleteProperty - Срабатывает при операции delete. ----------------------------------------+
		/*Синтакс аналогичен get/has. Срабатывает при операции delete, должна вернуть true, если 
			удаление было успешным.*/
		/*В примере ниже delete не повлияет на исходный объект, так как все операции перехватываются 
			и «аннигилируются» прокси:*/
		'use strict';

		let dictionary = {
		  'Hello': 'Привет'
		};

		let proxy = new Proxy(dictionary, {
		  deleteProperty(target, phrase) {
		    return true; // ничего не делаем, но возвращает true
		  }
		});

		delete proxy['Hello'];// не удалит свойство!

		alert("Hello" in dictionary); // true

		// будет то же самое, что и выше
		// так как нет ловушки has, операция in сработает на исходном объекте
		alert("Hello" in proxy); // true

	//--- enumerate - Ловушка enumerate перехватывает операции for..in и for..of по объекту. -------+
		/*В примере ниже прокси делает так, что итерация идёт по всем свойствам, 
			кроме начинающихся с подчёркивания _*/

		'use strict';

		let user = {
		  name: "Ilya",
		  surname: "Kantor",
		  _version: 1,
		  _secret: 123456
		};

		let proxy = new Proxy(user, {
		  enumerate(target) {
		    let props = Object.keys(target).filter(function(prop) {
		      return prop[0] != '_';
		    });
		    //возращаем встроенный итератор
		    return props[Symbol.iterator]();
		  }
		});

		// отфильтрованы свойства, начинающиеся с _
		for(let prop in proxy) {
		  alert(prop); // Выведет свойства user: name, surname
		}
	
	//--- apply - работа с функциями. --------------------------------------------------------------+
	 	
	 	/*Метод apply(target, thisArgument, argumentsList)
	 	target – исходный объект.
		thisArgument – контекст this вызова.
		argumentsList – аргументы вызова в виде массива.*/
	  
	 	/*Она может обработать вызов сама и/или передать его функции. Ещё перехыватывать вызоы через new*/
		'use strict';

		function sum(a, b) {
		  return a + b;
		}

		let proxy = new Proxy(sum, {
		  // передаст вызов в target, предварительно сообщив о нём
		  apply: function(target, thisArg, argumentsList) {
		    alert(`Буду вычислять сумму: ${argumentsList}`);
		    return target.apply(thisArg, argumentsList);
		  }
		});

		// Выведет сначала сообщение из прокси,
		// а затем уже сумму
		alert( proxy(1, 2) );
	
	//--- construct - перехватывает вызовы при помощи new. -----------------------------------------+
		/*construct(target, argumentsList)*/
		/*Пример ниже передаёт операцию создания исходному классу или функции-конструктору, 
			выводя сообщение об этом*/
		'use strict';

		function User(name, surname) {
		  this.name = name;
		  this.surname = surname;
		}

		let UserProxy = new Proxy(User, {
		  // передаст вызов new User, предварительно сообщив о нём
		  construct: function(target, argumentsList) {
		    alert(`Запуск new с аргументами: ${argumentsList}`);
		    return new target(...argumentsList);
		  }
		});

		let user = new UserProxy("Ilya", "Kantor");

		alert( user.name ); // Ily

## ES6-Set, Map, WeakSet и WeakMap ## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//--- Map | Пример 1. Произвольные значения ключей-значений ------------------------------------+
//--- Map | Пример 2. Метод set можно чейнить --------------------------------------------------+
//--- Map | Пример 3. В качестве ключей map можно использовать и объекты -----------------------+
//--- Set | Пример 1. Сохранение уникальных значений. ------------------------------------------+
//--- Set | Пример 2. --------------------------------------------------------------------------+
//--- WeakMap и WeakSet. -----------------------------------------------------------------------+

	//--- Map | Пример 1. Произвольные значения ключей-значений ------------------------------------+
		let map = new Map();

		map.set('1', 'str1');   // ключ-строка
		map.set(1, 'num1');     // число
		map.set(true, 'bool1'); // булевое значение

		// в обычном объекте это было бы одно и то же,
		// map сохраняет тип ключа
		alert( map.get(1)   ); // 'num1'
		alert( map.get('1') ); // 'str1'

		alert( map.size ); // 3

	//--- Map | Пример 2. Метод set можно чейнить --------------------------------------------------+

		//Пример 2.1, анологичен примеру 2.2. ------------------------------
			map
			  .set('1', 'str1')
			  .set(1, 'num1')
			  .set(true, 'bool1');

		//Пример 2.2. ------------------------------------------------------
			let map = new Map([
			  ['1',  'str1'],
			  [1,    'num1'],
			  [true, 'bool1']
			]);

	//--- Map | Пример 3. В качестве ключей map можно использовать и объекты -----------------------+
		let user = { name: "Вася" };

		// для каждого пользователя будем хранить количество посещений
		let visitsCountMap = new Map();

		// объект user является ключом в visitsCountMap
		visitsCountMap.set(user, 123);

		alert( visitsCountMap.get(user) ); // 123

	//--- Set | Пример 1. Сохранение уникальных значений. ------------------------------------------+
		let set = new Set();

		let vasya = {name: "Вася"};
		let petya = {name: "Петя"};
		let dasha = {name: "Даша"};

		// посещения, некоторые пользователи заходят много раз
		set.add(vasya);
		set.add(petya);
		set.add(dasha);
		set.add(vasya);
		set.add(petya);

		// set сохраняет только уникальные значения
		alert( set.size ); // 3

		set.forEach( user => alert(user.name ) ); // Вася, Петя, Даша

	//--- Set | Пример 2. --------------------------------------------------------------------------+
		/*У set.forEach((value, valueAgain, set) три аргумента для совместимости с Map, у Set первые
			два аргумента одинаковые*/

		let set = new Set(["апельсины", "яблоки", "бананы"]);

		// то же, что: for(let value of set)
		set.forEach((value, valueAgain, set) => {
		  alert(value); // апельсины, затем яблоки, затем бананы
		});

	//--- WeakMap и WeakSet. -----------------------------------------------------------------------+
		/*Например, у нас есть элементы на странице или, к примеру, пользователи, и мы хотим хранить для 
		них вспомогательную информацию, например обработчики событий или просто данные, но действительные 
		лишь пока объект, к которому они относятся, существует. Если поместить такие данные в WeakMap, а 
		объект сделать ключом, то они будут автоматически удалены из памяти, когда удалится элемент.*/

		// текущие активные пользователи
		let activeUsers = [
		  {name: "Вася"},
		  {name: "Петя"},
		  {name: "Маша"}
		];

		// вспомогательная информация о них,
		// которая напрямую не входит в объект юзера,
		// и потому хранится отдельно
		let weakMap = new WeakMap();

		weakMap[activeUsers[0]] = 1;
		weakMap[activeUsers[1]] = 2;
		weakMap[activeUsers[2]] = 3;

		alert( weakMap[activeUsers[0]] ); // 1

		activeUsers.splice(0, 1); // Вася более не активный пользователь

		// weakMap теперь содержит только 2 элемента

		activeUsers.splice(0, 1); // Петя более не активный пользователь

		// weakMap теперь содержит только 1 элемент
		// 
