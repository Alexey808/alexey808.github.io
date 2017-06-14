/* main.js */

	/*Когда в компоненте вам понадобятся данные без возможности их изменения, вы можете просто добавить свойство с 
	функцией reactDOM.render() в main.js и использовать его внутри компонента.*/

	import React from 'react';
	import ReactDOM from 'react-dom';
	import App from './App.jsx';

	ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content
	   from props..."/>, document.getElementById('app'));

	export default App;




/* App.jsx */
	import React from 'react';

	class App extends React.Component {
	   render() {
	      return (
	         <div>
	            <h1>{this.props.headerProp}</h1>
	            <h2>{this.props.contentProp}</h2>
	         </div>
	      );
	   }
	}

	export default App;