//-- Декоратор на функцию -------------------------------------------
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