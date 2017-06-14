//---1) Привет программист
	'use strict';
	alert ('Hello programmist');
	console.log('Hello programmist');

//---2) Проверка, целое ли число
	'use strict';
	let isInsteger = num => (num ^ 0) === num;
	console.log(isInsteger(2));
	console.log(isInsteger(0.9));
//---3) Prompt
	'use strict';
	let name = prompt("Ваше имя,", "");
	console.log( name );
//---4) Prompt + if
    'use strict';
	let p = prompt('Inner name ES', '');
	p == "ECMAScript" ? console.log('Yes') : console.log('No, ECMAScript!');
//---
var message = (login == 'Вася') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';


















