/* main.js */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

/* App.jsx */

import React from 'react';

class App extends React.Component {
 	constructor(props) {
      	super(props);
      
      	this.state = { //специальный объект с состояниями
         	header: "Header from state",
         	"content": "Content from state"
      	}
   	}

   	render() {

      	return (
      		<div> //всегда в этом месте идёт обёртка(div)

            	<p>{this.state.header}</p> //Вывод: Header from state
            	<p>{this.state.content}</p> //Content from state

      		</div>
      );
   }
}

export default App;