
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
|																								   |
|										>>> СТРОКИ <<<											   |
|																								   |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+

## Общее ## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//--- Свойство length - длина строки -----------------------------------------------------------+
//--- Позиция символа в строке -----------------------------------------------------------------+
//--- Поиск подстроки indexOf(подстрока[, начальная_позиция]) ----------------------------------+
//--- Cочетание ~ и str.indexOf ----------------------------------------------------------------+
//--- Поиск подстроки --------------------------------------------------------------------------+
//--- Взятие подстроки: substr, substring, slice. наиболее используемый slice ------------------+
//--- z. Вывести слово с первой большой буквой. ------------------------------------------------+
//--- z. Проверка на спам. ---------------------------------------------------------------------+
//--- z. Если строки длинная, то выводим в конце ... -------------------------------------------+
//--- z. Вывести число без первого валютного знака. --------------------------------------------+
//--- Метод toLocaleLowerCase(). ---------------------------------------------------------------+
//--- Метод toLocaleUpperCase(). ---------------------------------------------------------------+
//--- Метод toString(). ------------------------------------------------------------------------+
//--- Метод valueOf(). -------------------------------------------------------------------------+
//--- Метод anyString(). -----------------------------------------------------------------------+
//--- Метод indexOf(). -------------------------------------------------------------------------+
//--- Метод substr(). --------------------------------------------------------------------------+
//--- Метод replace | Замена слов. -------------------------------------------------------------+
//=== СИМВОЛЫ ================================================================================--+
//--- Символ по коду | Метод: String.fromCharCode(code) ----------------------------------------+
//--- Код по символу | Метод: str.charCodeAt(pos) ----------------------------------------------+
//--- Вывод отрезка символов из юникода от 1034 до 1113 ----------------------------------------+
		
	//--- Свойство length - длина строки -----------------------------------------------------------+
		var str = "one";
		alert( str.length ); // 3
	
	//--- Позиция символа в строке -----------------------------------------------------------------+
		//.charAt - позиция символа
		var str = "jQuery";
		alert( str.charAt(0) ); // "j"
		//альтернатива .charAt используя []
		var str = "Я - современный браузер!";
		//разность между .charAt и []
		alert( "".charAt(0) ); // пустая строка
		alert( "" [0] ); // undefined
		alert( str[0] ); // "Я"
	
	//--- Поиск подстроки indexOf(подстрока[, начальная_позиция]) ----------------------------------+
		var str = "Widget with id";
		alert( str.indexOf("Widget") ); // 0, т.к. "Widget" найден прямо в начале str
		alert( str.indexOf("id") ); // 1, т.к. "id" найден, начиная с позиции 1
		alert( str.indexOf("widget") ); // -1, не найдено, так как поиск учитывает регистр
		alert( str.indexOf("id", 2) ) // 12, поиск начат с позиции 2
	
	//--- Cочетание ~ и str.indexOf ----------------------------------------------------------------+
		//вызов ~n эквивалентен выражению -(n+1)
		alert( ~2 ); // -(2+1) = -3
		alert( ~1 ); // -(1+1) = -2
		alert( ~0 ); // -(0+1) = -1
		alert( ~-1 ); // -(-1+1) = 0
		//проверка совпадений
		//Просто запомните: '~' читается как «не минус один», а "if ~str.indexOf" читается как "если найдено".
		var str = "Widget";
		if (~str.indexOf("get")) {
		  alert( 'совпадение есть!' );
		}
	
	//--- Поиск подстроки --------------------------------------------------------------------------+
		var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
		var target = "Иа"; // цель поиска
		var pos = -1;
		while ((pos = str.indexOf(target, pos + 1)) != -1) {
		  	alert( pos );
		}
	
	//--- Взятие подстроки: substr, substring, slice. наиболее используемый slice ------------------+
		/* substring(start [, end]) */
		var str = "stringify";
		alert(str.substring(0,1)); // "s", символы с позиции 0 по 1 не включая 1.
		alert(str.substring(2)); // ringify, символы с позиции 2 до конца
		alert( "testme".substring(4, -1) ); // "test"
		// -1 становится 0 -> получили substring(4, 0)
		// 4 > 0, так что аргументы меняются местами -> substring(0, 4) = "test"
		
		/* slice(start [, end]) в целом похож на substring */
		alert( "testme".slice(1, -1) ); // "estm", от 1 позиции до первой с конца.
		
		/* substr(start [, length]) */
		var str = "stringify";
		str = str.substr(2,4); // ring, со 2-й позиции 4 символа
		alert(str)

	//--- z. Вывести слово с первой большой буквой. ------------------------------------------------+
		"use strict";		
		function ucFirst(str) {
		  // только пустая строка в логическом контексте даст false
		  if (!str) return str;
		  return str[0].toUpperCase() + str.slice(1);
		}
		alert( ucFirst("алексей") );
	
	//--- z. Проверка на спам. ---------------------------------------------------------------------+
		function checkSpam(str) {
		  var lowerStr = str.toLowerCase();

		  return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
		}
		alert( checkSpam('buy ViAgRA now') );
		alert( checkSpam('free xxxxx') );
		alert( checkSpam("innocent rabbit") );
	
	//--- z. Если строки длинная, то выводим в конце ... -------------------------------------------+
	    function truncate(str, maxlength) {
	      return (str.length > maxlength) ?
	        str.slice(0, maxlength - 3) + '...' : str;
	    }
    
    //--- z. Вывести число без первого валютного знака. --------------------------------------------+
	    function extractCurrencyValue(str) {
	      return +str.slice(1);
	    }
	    alert ( extractCurrencyValue("$120") ); // 120

	//--- Регистор | Метод toLocaleLowerCase(). ----------------------------------------------------+
		console.log('АЛФАВИТ'.toLocaleLowerCase()); // 'алфавит'
		//
		
	//--- Регистор | Метод toLocaleUpperCase(). ----------------------------------------------------+
		console.log('алфавит'.toLocaleUpperCase()); // 'АЛФАВИТ'
		//
		
	//--- Метод toString(). ------------------------------------------------------------------------+
		var x = new String('Привет, мир');
		console.log(x.toString()); // Отобразит 'Привет, мир'

	//--- Метод valueOf(). -------------------------------------------------------------------------+
		var x = new String('Привет, мир');
		console.log(x.valueOf()); // Отобразит 'Привет, мир'

	//--- Метод anyString(). -----------------------------------------------------------------------+
		var anyString = 'Mozilla';

		// Отобразит 'Moz'
		console.log(anyString.substring(0, 3));
		console.log(anyString.substring(3, 0));

		// Отобразит 'lla'
		console.log(anyString.substring(4, 7));
		console.log(anyString.substring(7, 4));

		// Отобразит 'Mozill'
		console.log(anyString.substring(0, 6));

		// Отобразит 'Mozilla'
		console.log(anyString.substring(0, 7));
		console.log(anyString.substring(0, 10));

	//--- Метод indexOf(). -------------------------------------------------------------------------+
		'Голубой кит'.indexOf('Голубой');   // вернёт  0
		'Голубой кит'.indexOf('Голуббой');  // вернёт -1
		'Голубой кит'.indexOf('кит', 0);    // вернёт  8
		'Голубой кит'.indexOf('кит', 5);    // вернёт  8
		'Голубой кит'.indexOf('', 9);       // вернёт  9
		'Голубой кит'.indexOf('', 11);      // вернёт 11
		'Голубой кит'.indexOf('', 12);      // вернёт 11
		// Пример 2. С проверкой на вхождение
		'Голубой кит'.indexOf('Голубой') !== -1; // true
		'Голубой кит'.indexOf('Галубой') !== -1; // false

	//--- Метод substr(). --------------------------------------------------------------------------+
		// Ночь перед Рождеством, Xmas - сокращение для Christmas
		var str = 'Twas the night before Xmas...';
		var newstr = str.replace(/xmas/i, 'Christmas');
		console.log(newstr); // Twas the night before Christmas...

	//--- Метод replace | Замена слов. -------------------------------------------------------------+
		var re = /яблоки/gi;
		var str = 'Яблоки круглые и яблоки сочные.';
		var newstr = str.replace(re, 'апельсины');
		console.log(newstr); // апельсины круглые и апельсины сочные.

	//=== СИМВОЛЫ ================================================================================--+

	//--- Символ по коду | Метод: String.fromCharCode(code) ----------------------------------------+
		alert( String.fromCharCode(1072) ); // 'а'
		//
	
	//--- Код по символу | Метод: str.charCodeAt(pos) ----------------------------------------------+
		alert( "абрикос".charCodeAt(0) ); // 1072, код 'а'
		//
	
	//--- Вывод отрезка символов из юникода от 1034 до 1113 ----------------------------------------+
		var str = '';
		for (var i = 1034; i <= 1113; i++) {
		  str += String.fromCharCode(i);
		}
		alert( str );

## ES6-Строки ## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//--- Строки-шаблоны, синтакс. -----------------------------------------------------------------+
//--- Строки-шаблоны (`обратные кавычки`). -----------------------------------------------------+
//--- Строки-шаблоны | интерполяция(вставляемые выражения ${…}). -------------------------------+
//--- Строки-шаблоны | Своя функция шаблонизации. ----------------------------------------------+
//--- Создание символа из кода. ----------------------------------------------------------------+

	//--- Строки-шаблоны, синтакс. -----------------------------------------------------------------+
		`строка текста`

		`строка текста 1
		 строка текста 2`

		`строка текста ${выражение} строка текста`

		tag `строка текста ${выражение} строка текста`

	//--- Строки-шаблоны (`обратные кавычки`). -----------------------------------------------------+
		let str = `обратные кавычки, с переводом 
		строки.`;

	//--- Строки-шаблоны | интерполяция(вставляемые выражения ${…}). -------------------------------+
		let apples = 2;
		let oranges = 3;
		alert(`${apples} + ${oranges} = ${apples + oranges}`); // 2 + 3 = 5

	//--- Строки-шаблоны | Своя функция шаблонизации. ----------------------------------------------+
		var a = 5;
		var b = 10;

		function tag(strings, ...values) {
		  console.log(strings[0]); // "Hello "
		  console.log(strings[1]); // " world "
		  console.log(values[0]);  // 15
		  console.log(values[1]);  // 50

		  return "Bazinga!";
		}

		tag`Hello ${ a + b } world ${ a * b}`;
		// "Bazinga!"

	//--- Создание символа из кода. ----------------------------------------------------------------+
		
		//Стандартный способ
			alert( String.fromCodePoint(119987) ); // 𝒳
		
		//из длинного utf кода
			alert( "\u{20331}" ); // 𠌱, китайский иероглиф с этим кодом
		
		//Unicode-нормализация, приводит к 1 виду.
			alert( "S\u0307\u0323".normalize().length ); // 1, нормализовало в один символ
			alert( "S\u0307\u0323".normalize() == "\u1e68" ); // true

## ES6-Символы ## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

!Два одинаковых имени символа не равны друг другу.
!Символы должны быть глобальные чтобы от них был толк.

//--- Символы. ---------------------------------------------------------------------------------+
//--- Использование симолов, символ в качестви имени для свойства объекта. ---------------------+
//--- Символы не участвую в итерации (переборе свойств for..in). -------------------------------+
//--- Отсутствие конфликта нового системного свойства. -----------------------------------------+

	//--- Символы. ---------------------------------------------------------------------------------+
		let sym = Symbol(); 							//Создание символа без имени
		alert( typeof sym ); // symbol 					//Проверяем тип на символ
		sym = Symbol("name");							//Задаём имя символу
		alert( sym.toString() ); // Symbol(name) 		//Читаем символ

		let name = Symbol.for("name");					//Создание символа в реесторе
		alert( Symbol.for("name") == name ); // true 	//символ уже есть, чтение из реестра
		alert( Symbol.keyFor(name) ); // name 			//получение имени символа

		alert( Symbol.keyFor(Symbol.for("name")) ); 	// name, глобальный
		alert( Symbol.keyFor(Symbol("name2")) ); 		// undefined, обычный символ

	//--- Использование симолов, символ в качестви имени для свойства объекта. ---------------------+
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

	//--- Отсутствие конфликта нового системного свойства. -----------------------------------------+
		let obj = {
		  iterator: 1,
		  [Symbol.iterator]: function() {}
		}

		// один символ в объекте
		//alert( Object.getOwnPropertySymbols(obj) ); //один из вариантов, но уже не работает 
		alert( Object.getOwnPropertySymbols(obj)[0].toString() ); // Symbol(Symbol.iterator)

		// и одно обычное свойство
		alert( Object.getOwnPropertyNames(obj) ); // iterator



+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
|																								   |
|										>>> ЧИСЛА <<<											   |
|																								   |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+

//способы записи
		alert( 0xFF ); // 255 в шестнадцатиричной
		//===
		alert( 3e5 ); // 300000 в научной или с плаавющей точкой
		alert( 3e-5 ); // 0.00003  <== 5 нулей, включая начальный ноль
		//=== Infinity
		alert( 1 / 0 ); // Infinity
		alert( 1e500 ); // Infinity, т.е. её можно получить
		//=== NaN
		alert( 0 / 0 ); // NaN
		if (NaN === NaN) alert( "===" ); // Ни один вызов
		alert( isNaN(n) ); // функция isNaN(n). true
		alert( isNaN("12") ); // функция isNaN(n).  false, строка преобразовалась к обычному числу 12
		alert( NaN + 1 ); //Любая операция с NaN возвращает NaN.
		//=== isFinite()
		alert( isFinite(1) ); // true
		alert( isFinite(Infinity) ); // false
		alert( isFinite(NaN) ); // false
		//=== Преоброзование в числа
		alert( +"  -12" ); // -12
		alert( +" \n34  \n" ); // 34, перевод строки \n является пробельным символом
		alert( +"" ); // 0, пустая строка становится нулем
		alert( +"1 2" ); // NaN, пробел посередине числа - ошибка
		alert( '12.34' / "-2" ); // -6.17
		//===parseInt() и parseFloat()
		alert( parseInt('12px') ) // 12, ошибка на символе 'p'
		alert( parseFloat('12.3.4') ) // 12.3, ошибка на второй точке
		alert( parseInt('a123') ); // NaN
		alert( parseInt('FF', 16) ); // 255, указываем систему счисления
		//===isNaN(str)
		var x = prompt("Введите значение", "-11.5");
		if (isNaN(x)) {
		  alert( "Строка преобразовалась в NaN. Не число" );
		} else {
		  alert( "Число" );
		}
		//===isNumeric() полная проверка
		function isNumeric(n) {
		  //isFinite отсекает такие значения как (Infinity/-Infinity/NaN)
		  //isNaN отсекает такие значения как (true/false/null/'')
		  //В результате отсеивается всё, кроме строк-чисел и обычных чисел.
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}
		//===toString(основание системы)
		var n = 255;
		alert( n.toString(16) ); // ff //Основание может быть любым от 2 до 36
		//Основание 36 (по количеству букв в английском алфавите – 26, вместе с цифрами, которых 10) 
		var n = 1234567890;
		alert( n.toString(36) ); // kf12oi
		//===Округление: Math.floor / Math.ceil / Math.round
		alert( Math.floor(3.1) );  // 3
		alert( Math.ceil(3.1) );   // 4
		alert( Math.round(3.1) );  // 3
		//===Округление битовыми операторами
		//Битовые операторы делают любое число 32-битным целым, обрезая десятичную часть.
		alert( ~~12.3 ); // 12
		alert( 12.3 ^ 0 ); // 12
		alert( 1.2 + 1.3 ^ 0 ); // 2, приоритет ^ меньше, чем +
		var x = a * b / c ^ 0; // читается как "a * b / c и округлить"
		//===Округление до заданной точности
		//можно умножить и поделить на 10 с нужным количеством нулей. 
		var n = 3.456;
		alert( Math.round(n * 100) / 100 ); // 3.456 -> 345.6 -> 346 -> 3.46
		//метод num.toFixed(precision), возращает строку, можно легко перевести в число (+)
		var n = 12.34;
		alert( n.toFixed(1) ); // "12.3"
		var n = 12.34;
		alert( n.toFixed(5) ); // "12.34000", добавлены нули до 5 знаков после запятой
		var price = 6.35;
		alert( price.toFixed(1) ); // 6.3
		alert( Math.round(price * 10) / 10 ); // 6.4
		//===интересные случаи
		alert( 0.1 + 0.2 ); // 0.30000000000000004
		alert( 0.1 + 0.2 > 0.3 ); // true
		//===метод toLocaleString()
		var number = 123456789;
		alert( number.toLocaleString() ); // 123 456 789
	//===сумма чисел
		var x = +prompt("Введите число x ", "");
		var y = +prompt("Введите число y ", "");
		function summ (x, y) {
			return x + y;
		}
		alert ( summ(x, y) );
		//округление
		var price1 = 0.1, price2 = 0.2;
		alert( +(price1 + price2).toFixed(2) );
		
		//===возращение десятичной части числа, 1 вариант
		function getDecimal(num) {
		  	return num > 0 ? (num % 1) : (-num % 1);
		}
		alert( getDecimal(12.345) ); // 0.345
		alert( getDecimal(1.2) ); // 0.2
		alert( getDecimal(-1.2) ); // 0.2

		//===возращение десятичной части числа, 1 вариант
		function getDecimal(num) {
		  var str = "" + num;
		  var zeroPos = str.indexOf(".");
		  if (zeroPos == -1) return 0;
		  str = str.slice(zeroPos);
		  return +str;
		}

		alert( getDecimal(12.5) ); // 0.5
		alert( getDecimal(1.2) ); // 0.2

		//===Случайное из интервала (min, max)
		// использование Math.round() даст неравномерное распределение!
		var min = 5,
			max = 10;
		alert( min + Math.random() * (max - min) );

		//===Случайное целое от min до max
		function randomInteger(min, max) {
    		var rand = min + Math.random() * (max + 1 - min);
    		rand = Math.floor(rand);
    		return rand;
  		}

		alert( randomInteger(5, 10) );