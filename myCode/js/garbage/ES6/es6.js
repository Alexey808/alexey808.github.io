



// -------------------------------------------

// function superhero(isSuperhero) {
//   return function (target) {
//     target.isSuperhero = isSuperHero;
//     target.power = 'flight';
//   }
  
// }

// @superhero(false)
// class MySuperHero {}

// console.log(MySuperHero.isSuperhero);      // false

//-----------------------------------

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

// --- Цепочки промисов | Чейнинг(chaining) -------------------------
