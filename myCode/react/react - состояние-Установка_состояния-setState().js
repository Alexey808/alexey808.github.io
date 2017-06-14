/* Мы создали пустой массив. Каждый раз, при нажатии на кнопку, состояние будет обновляться. */

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
    
      this.state = {
         data: []
      }
  
      this.setStateHandler = this.setStateHandler.bind(this);
   };

   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data;
      myArray.push(item)
      this.setState({data: myArray})
   };

   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}

export default App;