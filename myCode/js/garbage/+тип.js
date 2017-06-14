alert( typeof 1 );         // 'number'
alert( typeof true );      // 'boolean'
alert( typeof "Текст" );   // 'string'
alert( typeof undefined ); // 'undefined'
alert( typeof null );      // 'object' (ошибка в языке)
alert( typeof alert );     // 'function'
alert( typeof function f(a) {} ); // 'function'
//проверка на массив
alert( Array.isArray([1,2,3]) ); // true
alert( Array.isArray("not array")); // false
//-------------------------------------------------------------------------------------------------
var toString = {}.toString;

var arr = [1, 2];
alert( toString.call(arr) ); // [object Array]

var date = new Date;
alert( toString.call(date) ); // [object Date]

var user = { name: "Вася" };
alert( toString.call(user) ); // [object Object]

alert( {}.toString.call(123) ); // [object Number]
alert( {}.toString.call("строка") ); // [object String]

// спец функция определяющая тип объекта ----------------------------------------------------------
function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}

alert( getClass(new Date) ); // Date
alert( getClass([1, 2, 3]) ); // Array



// Преоброзования типов ---------------------------------------------------------------------------

	//Преоброзование к строке
	alert( String(null) === "null" ); // true
	alert( true + "test" ); // "truetest"

	//Преоброзование к числу
	var a = +"123"; // 123
	var a = Number("123"); // 123, тот же эффект
	alert( true + "test" ); // "truetest" Сравнение разных типов – значит численное преобразование
	alert( +"" ); // 0, пустая строка становится нулем
	alert(+new Date) //преоброзование даты к числу // +date то же самое, что: +date.valueOf()

	//Логическое преоброзование, см таблицу
	alert( !!"0" ); // true
	alert( !!" " ); // любые непустые строки, даже из пробелов - true!


// Преоброзование функций -------------------------------------------------------------------------
var room = {
  number: 777,

  valueOf: function() { return this.number; }, //численное преоброзование
  toString: function() { return this.number; } //строковое преоброзование
};

console.log( +room );  // 777, вызвался valueOf

delete room.valueOf; // valueOf удалён

console.log( +room );  // 777, вызвался toString

