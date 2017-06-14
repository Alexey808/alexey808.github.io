//проверка на NaN    
    //если замечена ошибка возращаем NaN
    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return value; //ошибок нету, возращаем значение


//isNumeric() полная проверка
	//isFinite отсекает такие значения как (Infinity/-Infinity/NaN)
	//isNaN отсекает такие значения как (true/false/null/'')
	//В результате отсеивается всё, кроме строк-чисел и обычных чисел.
	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

//проверка метода
var something = [1, 2, 3];

if (something.splice) {
  alert( 'Это утка! То есть, массив!' );
}


//проверка даты //утиная типизация
var x = new Date();

if (x.getTime) {
  alert( 'Дата!' );
  alert( x.getTime() ); // работаем с датой
}