export default myClass;                     //экспорт по ум.
export { myClass, myFunc, myValue };        //экспорт
export { myClass as myClassNew};            //экспорт | альтернативное имя

import myClass from "./файл_с_экспортом";   //импорт
import { myClass, myFunc } from "./файл_с_экспортом"; //импорт
import * as myElement from "./файл_с_экспортом"; //импортировать всё | исп-> myElement.myClass

var data = '{"name":"Вася", "age": 30}';
var user = JSON.parse(data); // преоброзование из строки в объект


//--- Декоратор на функцию ------------------------------------------
    let f = () => {
        console.log('произвольная фукнция');
    }

    function dec(func) {
        return function(...arg) {
            //var result = x.apply(this, arguments);
            var result = func.call(arg);

            console.log('dec(func)->run ');
            return result;
        }
    }

    var wr = dec(f); //декарируем
    wr('start'); //=  {'произвольная фукнция'} {dec(func)->run} 

//--- Добавление метода объекту | Добавление свойства объекту -------
    var randomObj = {
    	//произвольный объект
    };

    function myFunc() {
    	console.log('myFunc->run');
    }
    let bul = true;

    randomObj.newMethodName = myFunc; //присваивание функции
    randomObj.newMethodName(); //= myFunc->run
    randomObj.newProp = bul;
    randomObj.newProp; //= true

//--- Добавление методов объекту | примесь --------------------------
    var sayHiMixin = {
        sayHi: function() {
            console.log("Привет " + this.name);
        },
        sayBye: function() {
            console.log("Пока " + this.name);
        }
    };

    // использование
    function User(name) {
        this.name = name; //добавит новый метод
        this.sayBye = function(){ //перепишет старый метод
            console.log("Привет-привет " + this.name);
        };
    }

    // передать методы примеси
    for(let method in sayHiMixin) {
        User.prototype[method] = sayHiMixin[method];
    }

    let obj = new User("NAME");
    obj.sayHi(); // Привет NAME
    obj.sayBye(); // Привет-привет NAME

//--- map -----------------------------------------------------------

    let obj = { prop: 'property'};
    //let map = new Map(['key1', 'value1'], ['key2', 'value2']);
    let map = new Map();
    map.set('key1', 'value1');
    map.set(obj, 'value2');

    console.log(map.get('key1')); //= 'value1'
    console.log(map.get(obj)); //= 'value2'
    console.log(map.size); //= 2

    //--Перебор map
    //Способ 1 встроенный forEach
    	map.forEach((key, value, map) => {
    		console.log(key); //возвращает ключ
    		console.log(value); //возвращает значение
    		console.log(map); //возвращает ключи и значение
    	})
    //Способ 2 через методы map
    	//for (let entry of  map.keys()) { //возвращает ключ
    	// for (let entry of  map.values()) { //возвращает значение
    	for (let entry of  map) { //возвращает ключи и значение
    		console.log(entry);
    	}

//--- Обработка ошибок ----------------------------------------------
    /* 
     * Типы ошибок:
     *	SyntaxError("Синтаксическая ошибка");
     *	EvalError("Ошибка при выполнении eval()");
     *	RangeError("Ошибка в допустимых значениях");
     *	ReferenceError("Ошибка при разыменовании неверной ссылки");
     *	TypeError("Ошибка типа");
     *	URIError("Ошибка, encodeURI() или decodeURI() вызваны с неправильными параметрами");
    */

    /* Оборачивание исключений */
    function ReadError(message, cause) {
      this.message = message;
      this.cause = cause;
      this.name = 'ReadError';
      this.stack = cause.stack;
      console.log(`stack: ${cause.stack}`);
    }

    function readData() {
      	let data = '{ "nameE": "Вася", "age": 30 }';

      	try {
    	  	let user = JSON.parse(data);
    	  	
    	  	if (user.name) {
    	  		console.log(user.name);
    	  	} else { //ошибки с json ловить тут, остальное сразу в catch
    	  		throw new SyntaxError("Синтаксическая ошибка");
    	  	}

      	} catch (e) {
      		console.log(e);

    	    if (e.name == "SyntaxError") {
    	      throw new ReadError("Синтаксическая ошибка в данных", e);
    	    } else {
    	      throw e;
    	    }
      	} finally { //не обязательный элемент, отрабатывает всегда
      		//использовать для отправки на сервер каких-либо данных
      	}
    }

    // Внешний try..catch. Как правило скрипт уже упал, и мы отправляем ошибку на сервер.
    try {
      readData();
    } catch (e) {
      console.log( "Поймал во внешнем catch: " + e);
    }

//--- Генераторы ----------------------------------------------------
    function* gen() {
        yield 1;
        yield 2;
        yield 3;
        return 0;
    }

    let generator = gen();

    let result = generator.next();
    console.log(result); //= 1

    result = generator.next();
    result = generator.next();
    console.log(result); //= 3

    let generatroTwo = gen();
    let resultTwo = generatroTwo.next();
    console.log(resultTwo); //=1

    for (let value of generatroTwo) {
        console.log(value); //= 2 и 3
    }

    //--- Генераторы | композиция генераторов
    function* generateSequence(start, end) {
        for (let i = start; i <= end; i++) yield i;
    }

    function* generateAlphaNum() {

        // 0..9
        yield* generateSequence(48, 57);

        // A..Z
        yield* generateSequence(65, 90);

        // a..z
        yield* generateSequence(97, 122);

    }

    let str = '';

    for(let code of generateAlphaNum()) {
        str += String.fromCharCode(code);
    }

    console.log(str); // 0..9A..Za..z

//--- Генератор | Передача параметра в генератор --------------------
    function* gen() {
        let one = yield 1;
        console.log(one); //=2) 111
        let two = yield 2;
        console.log(two); //=4) 222

    }

    let generator = gen();
    console.log( generator.next().value ); //=1) 1
    console.log( generator.next(111).value ); //=3) 2
    console.log( generator.next(222).done ); //=5) true

    //---Генераторы | композиция генераторов | перебор генераторов
    function* testGen1() {
        yield 1;
        yield 2;
        yield 3;
    }

    function* testGen2() {
        var x = yield* testGen1();
        console.log('x => ' + x);
    }


    for (let x of testGen2()) {
        console.log(x);
    }

    var newGen = testGen2();
    let result = newGen.next().value;
    console.log(result);

//--- Async/await ---------------------------------------------------

    /* Async */
        //Пример 1, аналогичен 2
        async function f() {
            return 1;
        }

        f().then(alert); // 1

        //Пример 2
        function f() {
          return Promise.resolve(1);
        }

        f().then(alert); // 1

    /* Await */
        let value = await promise; //работает только внутри асинхронных функций

    // ....

//--- Промис --------------------------------------------------------
    /* Универсальный метод для навешивания обработчиков
     * promise.then(onFulfilled, onRejected)
     */

    var promise = new Promise(function(resolve, reject) {

        //любоq асинхронный процесс
        setTimeout(() => { 
            resolve("result"); 
        }, 1000);

      // resolve(результат) при успешном выполнении
      // reject(ошибка) при ошибке
    })

    //Использование
    // promise.then навешивает обработчики на успешный результат или ошибку
    promise
        .then(
            result => alert("Fulfilled: " + result), //resolve
            error => alert("Rejected: " + error.message) // Rejected: время вышло!
        );

//--- Промис | Промисификация ---------------------------------------
    function httpGet(url) {

        return new Promise(function(resolve, reject) {

            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function() {
                if (this.status == 200) {
                    resolve(this.response); //*
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error); //*
                }
            };

            xhr.onerror = function() {
                reject(new Error("Network Error")); //*
            };

            xhr.send();
        });
    }

    //Использование
    httpGet("/article/promise/user.json")
        .then(
            response => alert(`Fulfilled: ${response}`),
            error => alert(`Rejected: ${error}`)
        );

----------------

//--из промиса в асинхронную функцию

//function loadJson(url) {
async function loadJson(url) {
  
    //return fetch(url)
    let response = await fetch(url);
  
  
    //.then(response => {
    if (response.status == 200) {

        //return response.json();
        let json = await response.json();
    } 

    // else {
    //      throw new Error(response.status);
    //  }
    //})

    throw new Error(response.status);
 
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404



//--промис
const myTestPromise = new Promise((resolve, reject) => {
    let b = true;
  // выполняется асинхронная операция, которая в итоге вызовет:
  //
  //   resolve(someValue); // успешное завершение
  // или
  //   reject("failure reason"); // неудача
    if (b) {
        resolve('all ready');
    } else {
        reject('everything broke');
    }

});

myTestPromise
    .then(function f(result) {
        console.log(result);
    })
    .catch(function err(e) {
        console.log(e);
    });
