
//Класс

	//Классный способ
		class User {

		  constructor(name) {
		    this.name = name;
		  }

		  sayHi() {
		    alert(this.name);
		  }

		}

		let user = new User("Вася");
		user.sayHi(); // Вася

	//Портотипный способ
		function User(name) {
		  this.name = name;
		}

		User.prototype.sayHi = function() {
		  alert(this.name);
		};

//Class Expression (вспомогатель класс)
	/*Наиболее очевидная область применения этой возможности (назначении имени) – создание 
	вспомогательного класса прямо при вызове функции.*/

	let allModels = {};

	function createModel(Model, ...args) {
	  let model = new Model(...args);

	  model._id = Math.random().toString(36).slice(2);
	  allModels[model._id] = model;

	  return model;
	}

	let user = createModel(class User { //где class User вспомогательный класс
	  constructor(name) {
	    this.name = name;
	  }
	  sayHi() {
	    alert(this.name);
	  }
	}, "Вася");

	user.sayHi(); // Вася

	alert( allModels[user._id].name ); // Вася

//Статические свойства
	/*Как правило, они используются для операций, не требующих наличия объекта, например – для 
	фабричных, как в примере, то есть как альтернативные варианты конструктора.*/
	class User {
	  	constructor(firstName, lastName) {
	    	this.firstName = firstName;
	    	this.lastName = lastName;
	  	}

	  	static createGuest() {
	   		return new User("Гость", "Сайта");
	  	}

	  	//можно исп get
	  	//static get elemClass() {
	    //	return "тра-та-та"
	  	//}
	  	
	};

	let user = User.createGuest();

	alert( user.firstName ); // Гость

	alert( User.createGuest ); // createGuest ... (функция)

//Наследование | super
	/*!в наследовании классов при вызове конструктора в наследнике через super, this определяет 
	именно super.*/

	//Пример 1.
		class Animal { }
		class Rabbit extends Animal { }

		alert( Rabbit.prototype.__proto__ == Animal.prototype ); // true

	//Пример 2.
		class Animal {
		  constructor(name) {
		    this.name = name;
		  }

		  walk() {
		    alert("I walk: " + this.name);
		  }
		}

		class Rabbit extends Animal {
		  walk() {
		    super.walk();
		    alert("...and jump!");
		  }
		}

		new Rabbit("Вася").walk(); //метод walk доступен через [[super]]
		// I walk: Вася
		// and jump!

	//Пример 3. Момент опеределения super
		class Animal {
		  constructor(name) {
		    this.name = name;
		  }

		  walk() {
		    alert("I walk: " + this.name);
		  }
		}


		class Rabbit extends Animal {
		  constructor() {
		    
		    console.log(this); //ошибка, this ещё не определён

		    // вызвать конструктор Animal с аргументом "Кроль"
		    super("Кроль"); // то же, что и Animal.call(this, "Кроль")

		    console.log(this); //уже есть, определён кл super
		  }
		}

		new Rabbit().walk(); // I walk: Кроль


