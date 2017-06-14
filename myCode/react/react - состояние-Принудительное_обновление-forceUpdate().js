/* Мы устанавливаем случайное число, которое каждый раз будет обновляться при нажатии на кнопку. */

/* main.js */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

/* App.jsx */

import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };

   forceUpdateHandler() {
      this.forceUpdate();
   };

   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
   }
}

export default App;