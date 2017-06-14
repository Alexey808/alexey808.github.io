/* Методы жизненного цикла: 
1) componentWillMount - выполняется до рендера, как на серверной так и клиентской стороне.
2) componentDidMount - выполняется после первого рендера, только на стороне клиента. Здесь должны происходить AJAX и DOM запросы или обновление состояния. Этот метод также используется для интеграции с другими JavaScript структурами и любыми функциями использующие setTimeout или setInterval. Мы используем этот метод для обновления состояния и для вызова других методов управления жизненным циклом.
3) componentWillReceiveProps - вызывается как только обновляются свойства (props) перед вызовом рендера.
4) shouldComponentUpdate - возвращает значения true или false. Позволяет определить, будет ли компонент обновляться или нет. Значение по умолчанию true.
5) componentWillUpdate - вызывается непосредственно перед рендером.
6) componentDidUpdate - вызывается непосредственно после рендера.
7) componentWillUnmount - вызывается после удаления компонента из DOM.
*/

/* main.js */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);


/* App.jsx */

import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);
      
      this.state = {
         data: 0
      }

      this.setNewNumber = this.setNewNumber.bind(this)
   };

   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }

   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}

class Content extends React.Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default App;