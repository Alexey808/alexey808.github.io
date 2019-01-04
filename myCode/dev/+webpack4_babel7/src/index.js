
// const fp = _.noConflict();

/********************************************************************
 * test es+ не работает
 *******************************************************************/

// function superhero(target) {
//   target.isSuperhero = true;
//   target.power = 'flight';
// }

// @superhero
// class MySuperHero {}

// console.log(MySuperHero.isSuperhero);      // true
// console.log(MySuperHero.power);      // true

/********************************************************************
 * test lodash
 *******************************************************************/
// console.log(fp.defaults({ 'a': 2, 'b': 2 })({ 'a': 5 }));

// let timeLessons = ["8:30", "9:30", "10:30"];
// let timeLessons = ["8:30"];
//-
// let schedule = [
// {time: "8:30", flag: true}, 
// {time: "8:30", flag: false}, 
// {time: "8:30", flag: true},
// {time: "9:00", flag: false}, 
// {time: "9:30", flag: true}, 
// {time: "10:00", flag: false}, 
// {time: "10:30", flag: true}
// ];

// console.log(fp.map((item)=>item.time)(schedule));
//-
// let result = 
// fp.flow(
// 	//fp.includes((item) => item === [{time: "8:30"}, {time: "9:00"}, {time: "9:30"}, {time: "10:00"}, {time: "10:30"}])
// 	// fp.includes({time: "8:30"})
// 	// fp.find({time: "10:30"})
// 	fp.filter({ time: "8:30", flag: true })
// 	// fp.map({time: "8:30"})
	
// )(schedule);
// console.log(result);

			


// let result = 
// fp.map((item) => { 
// 	const _time = "8:30";
// 	const _flag = true;

// 	// console.log({time: _time, flag: _flag}, "---", item);
// 	// console.log({time: _time, flag: _flag} == item);
// 	fp.flow(
// 		fp.map((i) => console.log(i))
// 	)(item)
// 	//fp.isEqual({time: _time, flag: _flag})(item)
	
// 	// console.log(fp.filter({time: _time, flag: _flag})(item))
// })(schedule);

//---
// let result = 
// fp.flow(
// 	fp.map((item) => {
// 	const _time = "8:30";
// 	const _flag = true;
// 		fp.isEqual({time: _time, flag: _flag})(item);
// return item
// 	})
// )(schedule);

// console.log(result);
//---

// function ch(t) {
// 	console.log(t);

// }

// function limit(element)
// {
//     var max_chars = 2;

//     if(element.value.length > max_chars) {
//         element.value = element.value.substr(0, max_chars);
//     }
// }
//---
//fp.filter((item) => {const timeLessons = ["8:30", "9:30", "10:30"];})
//--------------
// function run() {
//    console.log('abc');
// }
 
// var realFunction = 
//   fp.debounce(1500, run);
 
// realFunction();
// realFunction();
// realFunction();

//----------------------------------------------------
// console.log("index.js -> started!");
// const app = document.getElementById("app");
// let result;
//---


function superhero(target) {
  target.isSuperhero = true;
  target.power = 'flight';
  test = "test";
}

@superhero
class MySuperHero {}

console.log(MySuperHero.isSuperhero);      // true
console.log(MySuperHero.power);      // flight
console.log(MySuperHero.test);

// //---

// const makeRequest = async () => {
//   console.log(await getJSON());
//   return "done";
// }

// makeRequest();

// //---test
// let test = (a, b) => {
// 	return a + b;
// }
// result = test(1,2);




// //---
// app.innerHTML = result;
// console.log("index.js -> end!");

//------------

// async function wait(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(v => resolve(data), 1000);
//   })
// }
// (async function() {
 
//   let res = await wait('test');
//   console.log(res);
// })();
// console.log('start');
