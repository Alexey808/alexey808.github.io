



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

// async function loadJson(url) { // (1)
//   let response = await fetch(url); // (2)

//   if (response.status == 200) {
//     let json = await response.json(); // (3)
//     return json;
//   }

//   throw new Error(response.status);
// }

// loadJson('no-such-user.json')
//   .catch(alert); // Error: 404 (4)
//---------------------------------------------
	// const myTestPromise = new Promise((resolve, reject) => {
	//     let b = false;

	//     if (b) {
	//         resolve('all ok =)');
	//     } else {
	//         reject('everything broke =(');
	//     }
	// });

	// myTestPromise
	//     .then(function f(result) {
	//         console.log(result);
	//     })
	//     .catch(function err(e) {
	//         console.log(e);
	//     });

//------------------
	// async function myTestAsync() {
		

	// 	let promise = new Promise((resolve, reject) => {
	// 	    let b = false;

	// 	    if (b) {
	// 	        resolve('all ok =)');
	// 	    } else {
	// 	        throw new Error('everything broke =(');
	// 	    }
	// 	});
		

		


	// 	//return await promise;

	// }

	// myTestAsync()
	//     .then(function f(result) {
	//         console.log(result);
	//     })
	//     .catch(function err(e) {
	//         console.log(e);
	//     });
const f1 = new Promise((resolve,reject) => {
	setTimeout(()=> {
		let result = 1000;
		//console.log(result)
		result ? resolve(result) : reject(new Error("Error!"));
	}, 1000);
}); 


const f2 = new Promise((resolve,reject) => {
	setTimeout(()=> {
		let result = 2000;
		//console.log(result)
		result ? resolve(result) : reject(new Error("Error!")); //*
	}, 2000);
}); 

// function f3() {
// 	console.log('f3() run');
// 	return 10;
// }

// Promise.all([f1, f2, f3]).then(values => {
// 	console.log(values);
// });


f1.then(value1 => {
		return Promise.all([f1(value1), f2(value2)])
	});



// f1.then(
// 		res => {console.log(res);},
// 		rej => {console.log(rej);}
// 		);
// f2.then(
// 		res => {console.log(res);},
// 		rej => {console.log(rej);}
// 		);

// const makeRequest = () => {
//   return promise1()
//     .then(value1 => {
//       // do something
//       return promise2(value1)
//         .then(value2 => {
//           // do something          
//           return promise3(value1, value2)
//         })
//     })
// }