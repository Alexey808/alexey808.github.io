import React from "react";
import ReactDOM from "react-dom";

// import GalleryForm from './components/GalleryForm.jsx';



//--- Создание элементов
	{

	// пример 1 (эквиволентны друг другу)
    const element1 = (
      <h1 className="greeting">
        Hello, world!
      </h1>
    );

    // пример 2 (эквиволентны друг другу)
    const element2 = React.createElement(
      'h1',
      {className: 'greeting'},
      'Hello, world!'
    );

    // пример 3 (эквиволентны друг другу)
    const element3 = {
      type: 'h1',
      props: {
        className: 'greeting',
        children: 'Hello, world'
      }
    };

	}

//--- Работа с компонентами
	{

	// Создание компонента | Функциональный копомент
    function Welcome1(props) {
      return <div>Привет, {props.name}</div>;
    }

    // Создание компонента | Классовый компонент
    class Welcome2 extends React.Component {
      render() {
        return <div>Привет, {this.props.name}</div>;
      }
    }

    const element = <Welcome1 name="NAME" />; //добавление компонента в переменную
    ReactDOM.render(<Welcome2 name="NAME" />,document.getElementById('test')); //отрисовка компонента
	//import Welcome2 from './components/Welcome2.jsx'; //импорт компонента
	//module.exports = Welcome2; //экспорт компонента
	//export default Welcome2; //экспорт компонента

	// Композиция
    function App() { //композиция, итоговый компонент <App/>
      return (
        <div>
          <Welcome1 name="NAME1" />
          <Welcome2 name="NAME2" />
          <Welcome2 name="NAME3" />
        </div>
      );
    }


	}

//--- Работа с классом, компонентом

	/* компонент класс | состояние | монтаж | демонтаж | жизненный цикл */

	{
	const INTERVAL = 90;
  	class Timer extends React.Component {

  		//вызывается 2 //добавление конструктора состояния
	    constructor(props) { 
	      	super(props);
	      	this.state = {value: 0}; //добавление состояния
	    }

	    //вызывается 4, 6 и далее каждую секунду
	    increment(){
	     	this.setState({value: this.state.value + 1});
	    }

	    //вызывается 3, после отрисовки рендером //монтаж
	    componentDidMount() { 
     		this.timerID = setInterval(() => {this.increment(), 1000/INTERVAL});
  		}

  		//демонтаж если компонент удалён
	  	componentWillUnmount() { 
	    	clearInterval(this.timerID);
	  	}


	  	//вызывается 1, 5
    	render() {
	      	//const value = this.props.value
	      	const value = this.state.value //добавление состояния

	      	return (
	        	<div>
	          	<p>Таймер:</p>
	          	<p>
	            	<span>{Math.round(value/INTERVAL/60/60)}:</span>
	            	<span>{Math.round(value/INTERVAL/60)}:</span>
	            	<span>{Math.round(value/INTERVAL)}.</span>
	            	<span>{value % INTERVAL}</span>
	          	</p>
	        	</div>
	      	);
	    }
	}

    ReactDOM.render(<Timer/>, document.getElementById('timer'));

  	}

//--- Встраиваемые выражения
	function formatName(user) {
	  return user.firstName + ' ' + user.lastName;
	}

	let user = {
	  firstName: 'FIRST_NAME',
	  lastName: 'LAST_NAME'
	};

	let element1 = (
	  <div>
	    Привет, {formatName(user)}!
	  </div>
	);

//--- Добавление атрибутов
	let className="myClass";
	const element2 = <div className="myClass">Через строку</div>; // добавление аттрибута
	const element3 = <div className={className}>Через переменную</div>; // добавление аттрибута

//--- Отрисовка элемента | Обновление элемента
   function tick() {
      const element4 = (
        <div>
          <div>Время {new Date().toLocaleTimeString()}.</div>
        </div>
      );
      ReactDOM.render(element4, document.getElementById('testTick'));
    }

    setInterval(tick, 1000);

//--- Обновление состояний

	//где prevState последнее стостояние а props свойства в момент обновления
  	this.setState((prevState, props) => ({
    	temperature: prevState.temperature + props.delta
  	}));

//--- Слияние состояний (merge)
{
  	constructor(props) {
    	super(props);
    	this.state = {
        	permissions: [],
        	users: []
    	};
  	}
  	componentDidMount() {
	    fetchPermissions().then(response => {
	      	this.setState({
	        	permissions: response.permissions
	      	});
	    });

    	fetchUsers().then(response => {
      		this.setState({
        		users: response.users
      		});
    	});
  	}
}

// Перебор свойств обекта 2 вложенность
class ScanUser extends React.Component {
	render() {
		const objInit = Object.keys(userInfo).map((keyName1, i)=>{
			const objProp = userInfo[keyName1];
			const o = Object.keys(objProp).map((keyName2)=>{
				//console.log(objProp[keyName2]);
				return objProp[keyName2];
			});
			return o;
			// console.log(userInfo[keyName1]);
			// return userInfo[keyName1];
		});
		console.log(objInit);
		return <div>{objInit}</div>;
	}
}


// >>> RENDER примеров <<<

	// композиция элементов
	function App() {
		console.log(element1);
		console.log(element2);
		console.log(element3);

		return (
			<div>
				{element1}
				{element2}
				{element3}
			</div>

		);
	}

	ReactDOM.render(<App/>,document.getElementById('app'));