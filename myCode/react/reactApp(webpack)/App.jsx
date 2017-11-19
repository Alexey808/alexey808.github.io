import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }
   
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

//Header
class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Header-React</h1>
			</div>
		);
	}
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

// //Content
// class Content extends React.Component {
// 	render() {
//       	var myStyle = {
//          	color: '#FF0000'
//       	}
// 		return (
// 			<div>
// 				<h2>Content</h2>
//             	<ul>
//             		<li>Обязательная обёртка(div)</li>
//             		<li data-myattribute = "somevalue">Разрешено пользоватся атрибутами</li>
//             		<li>Выражения такие как 'фигурнСкобк' 1 + 1 'фигурнСкобк' вывод 2</li>
//             		<li>Вместо "if else" тернарные выражения. "фигурнСкобк" i == 1 ? 'True!' : 'False' "фигурнСкобк"</li>
//             		<li><span style={myStyle}>Рекомендуется использовать встроеные стили</span></li>
//             		<li>Коментарии должны находится в фигурных скобках. {/*Multi line comment...*/}</li>
//             	</ul>
//             </div>
//         );
// 	}
// }
export default App;