// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


// базовые
  const myStr: string = "string";
  const myNum: number = 123;
  const myBool: boolean = true;
  const myTwoType: string | number = 12; //объединённый тип (Union)
  const myArr: Array<number> = [1,2,3];
  const myObject: Object = {};
  const myHzType: any = () => { /*что-то возварщает*/ };
  const myElem: HTMLElement = document.getElementById('app');
  const isNull: null = null; // Субтип null
  const isUndefined: null = undefined; // Субтип undefined
// кортеж
  let tuple: [string, number]; 
  tuple = ['hello', 10];

// обобщённый тип (generic)
  function extend<T, U>(a: T, b: U): T & U {
      return Object.assign({}, a, b);
  }
  const obj = extend({ one: 1 }, { two: 2 }); //Совмещает тип T и U
  const one = obj.one; // 1
  const two = obj.two; // 2

// void - отсутствует
  function warnUser(): void {
    console.log("This is my warning message");
  }

// enum - перечисления
  enum Color {Red, Green, Blue}; 
  let c: Color = Color.Green;

// интерфейсы
interface IPublicAddress {
    netmask: string;
    gateway: string;
    address: string;
}
interface IServer {
    hostname: string;
    location: string;
    active: boolean;
    public_address: string;
}

const server: IServer = {
    hostname: 'Pikachu',
    location: 'RM1',
    active: true,
    public_address: IPublicAddress
}



// приведение к типу (<string>someValue) или someValue as string
  // пример 1. предположительно результат будет число, а принимаем строку
    let someValue: any = "this is a string";
    let strLength1: number = (<string>someValue).length;
    let strLength2: number = (someValue as string).length; 
  // пример 2
    const strr: string = <string>new String('TypeScript');
    console.log(strr);
  // пример 3. на методах класса
    // const pet = getSmallPet();
    // if ((<Fish>pet).swim) {
    //     (<Fish>pet).swim();
    // } else {
    //     (<Bird>pet).fly();
    // }
// индексируемые типы
  let cities: { [index: string]: [string, string] } = {};
  function test(x) { return x; }
  cities["London"] = ["raining", test("38")];
  cities["Paris"] = ["sunny", test("52")];
  cities["Berlin"] = ["snowing", test("23")];
  for (let key in cities) {
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
  }
  

// -
export class TempConverter {
 static convertFtoC(temp: number | string): string {
 let value: number = (<number>temp).toPrecision ? <number>temp : parseFloat(<string>temp);
 return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
 }
}






