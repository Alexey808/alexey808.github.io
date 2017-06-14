
## ES6- Object и Prototype ##
//--- Короткое свойство. -----------------------------------------------------------------------+
//--- Вычисляемые свойства с помощью []. -------------------------------------------------------+
//--- Object.assign или копирование свойств обекта в target. -----------------------------------+
//--- Object.is(value1, value2) проверка равенства значений вместо ===. ------------------------+
//--- Методы объекта. --------------------------------------------------------------------------+

	//--- Короткое свойство. -----------------------------------------------------------------------+
		/*При объявлении объекта в этом случае достаточно указать только имя свойства, а значение 
		будет взято из переменной с аналогичным именем.*/
		let name = "Вася";
		let isAdmin = true;
		let user = {
		  name,
		  isAdmin
		};
		alert( JSON.stringify(user) ); // {"name": "Вася", "isAdmin": true}

	//--- Вычисляемые свойства с помощью []. -------------------------------------------------------+
		/*В качестве имени свойства можно использовать выражение*/
			let propName = "firstName";
			let user = {
			  [propName]: "Вася"
			};
			alert( user.firstName ); // Вася

	//--- Object.assign или копирование свойств обекта в target. -----------------------------------+
		/*Получаем объект и в target копируем свойства остальных обектов (с перезаписью)*/
			
			//Пример 1.
				let user = { name: "Вася" };
				let visitor = { isAdmin: false, visits: true };
				let admin = { isAdmin: true };
				Object.assign(user, visitor, admin);
				// user <- visitor <- admin
				alert( JSON.stringify(user) ); // name: Вася, visits: true, isAdmin: true
			
			//------------------------------------------------------------		

			//Пример 2. Его также можно использовать для 1-уровневого клонирования объекта
				let user = { name: "Вася", isAdmin: false };
				// clone = пустой объект + все свойства user
				let clone = Object.assign({}, user);

	//--- Object.is(value1, value2) проверка равенства значений вместо ===. ------------------------+
			// Сравнение +0 и -0
			alert( Object.is(+0, -0)); // false
			alert( +0 === -0 );        // true

			// Сравнение с NaN
			alert( Object.is(NaN, NaN) ); // true
			alert( NaN === NaN );         // false

	//--- Методы объекта. --------------------------------------------------------------------------+

	    //Пример 1. сокращённая запись -------------------------------
		    let name = "Вася";
		    let user = {
		      	name,

		      	//вместо этого
		      	// sayHi: function() {
		      	//   alert(this.name);
		      	// }
		  
		        //это
		        sayHi() {
		          	alert(this.name);
		        }
		        
		    };
		    user.sayHi(); // Вася

  		//Пример 1. Можно задать и метод с вычисляемым названием-----------------------------------------+
			let methodName = "getFirstName";
			let user = {
				// в квадратных скобках может быть любое выражение,
				// которое должно вернуть название метода
				[methodName]() {  // вместо [methodName]: function() {
					return "Вася";
				}
			};
			alert( user.getFirstName() ); // Вася

   		//пример метода объекта, геттера get prop() ----------------------------------------------------
			let name = "Вася", surname="Петров";
			let user = {
			  	name,
			  	surname,
			  	get fullName() {
			    	return `${name} ${surname}`;
			  	}
			};

			alert( user.fullName ); // Вася Петров

		//ключевое слово super, получаем свойства из портотипа объекта ---------------------------------
			let animal = {
			  	walk() {
			    	alert("I'm walking");
			  	}
			};

			let rabbit = {
			  	__proto__: animal,
			  	walk() {
			    	alert(super.walk); // walk() { … }
			    	super.walk(); // I'm walking
			    	/* Или можно так с => в сочетании с setTimeout.
			    	setTimeout(() => super.walk()); // I'm walking */
			  	}
			};

			rabbit.walk();


## ES6-Class ## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//--- Пример 1.1 Анологичен портотипнумоу варианту, (пример 1.2). ------------------------------+
//--- Пример 1.2. ------------------------------------------------------------------------------+
//--- Class Expression.	------------------------------------------------------------------------+
//--- Статические свойства. --------------------------------------------------------------------+
//--- Наследования. ----------------------------------------------------------------------------+
	
	//--- Пример 1.1 Анологичен портотипнумоу варианту, (пример 1.2). ------------------------------+
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

	//--- Пример 1.2. ------------------------------------------------------------------------------+
		function User(name) {
		  this.name = name;
		}

		User.prototype.sayHi = function() {
		  alert(this.name);
		};

	//--- Class Expression.	------------------------------------------------------------------------+
		/*Наиболее очевидная область применения этой возможности (назначении имени) – создание 
		вспомогательного класса прямо при вызове функции.*/
		
		//Пример 1.
			let User = class { // можно задать имя.. //let SiteGuest = class User {
			  sayHi() { alert('Привет!'); }
			};
			new User().sayHi();

		//Пример 2. Посложнее ------------------------------------------+
			let allModels = {};

			function createModel(Model, ...args) {
			  let model = new Model(...args);

			  model._id = Math.random().toString(36).slice(2);
			  allModels[model._id] = model;

			  return model;
			}

			let user = createModel(class User {
			  constructor(name) {
			    this.name = name;
			  }
			  sayHi() {
			    alert(this.name);
			  }
			}, "Вася");

			user.sayHi(); // Вася

			alert( allModels[user._id].name ); // Вася

	//--- Статические свойства. --------------------------------------------------------------------+
		/*Как правило, они используются для операций, не требующих наличия объекта, например – для 
		фабричных, как в примере, то есть как альтернативные варианты конструктора.*/
		
		//Пример 1. -----------------------------------------------------------------------------------+
			class User {
			  constructor(firstName, lastName) {
			    this.firstName = firstName;
			    this.lastName = lastName;
			  }

			  static createGuest() {
			    return new User("Гость", "Сайта");
			  }
			};

			let user = User.createGuest();

			alert( user.firstName ); // Гость

			alert( User.createGuest ); // createGuest ... (функция)

		//Пример 2. Также статическими удобно делать константы ----------------------------------------+
			class Menu {
			  static get elemClass() {
			    return "menu"
			  }
			}

			alert( Menu.elemClass ); // menu

	//--- Наследования. ----------------------------------------------------------------------------+
			
			//Пример 1. --------------------------------------------------+
				class Animal { }
				class Rabbit extends Animal { }

				alert( Rabbit.prototype.__proto__ == Animal.prototype ); // true
			
			//Пример 2. --------------------------------------------------+
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
			
			//Пример 3. --------------------------------------------------+
				/*!в наследовании классов при вызове конструктора в наследнике через super, this определяет 
				именно super.*/
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

