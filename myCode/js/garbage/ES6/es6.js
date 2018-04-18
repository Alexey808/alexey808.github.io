//ДЕКОРАТОРЫ
//-------------------------------------------

function doSomething(name) {
  console.log('Hello, ' + name);
}

function loggingDecorator(wrapped) {
  return function() {
    //console.log('Starting');
    const result = wrapped.apply(this, arguments);
    //console.log('Finished');
    return result;
  }
}

const wrapped = loggingDecorator(doSomething);

doSomething('NAME');
wrapped('NAME');


// -------------------------------------------
function work(a) {
  /*...*/ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {

  	return function wrapper(a) {
      	log.push(a);
      	return f.call(this, a);
    }
  //return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1); // 1
work(5); // 5

for (var i = 0; i < log.length; i++) {
  console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
// -------------------------------------------

function superhero(isSuperhero) {
  return function (target) {
    target.isSuperhero = isSuperHero;
    target.power = 'flight';
  }
  
}

@superhero(false)
class MySuperHero {}

console.log(MySuperHero.isSuperhero);      // false

----------------------------------------------------------------




