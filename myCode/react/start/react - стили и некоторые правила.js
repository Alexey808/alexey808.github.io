/* main.js */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

/* App.jsx */

import React from 'react';

class Content extends React.Component {
	render() {

      var myStyle = {
         color: '#FF0000'
      }

		return (
			<div>
				<h2>Content</h2>
            <ul>
            	<li>Обязательная обёртка(div)</li>
            	<li data-myattribute = "somevalue">Разрешено пользоватся атрибутами</li>
            	<li>Выражения такие как 'фигурнСкобк' 1 + 1 'фигурнСкобк' вывод 2</li>
            	<li>Вместо "if else" тернарные выражения. "фигурнСкобк" i == 1 ? 'True!' : 'False' "фигурнСкобк"</li>
            	<li><span style={myStyle}>Рекомендуется использовать встроеные стили</span></li>
            	<li>Коментарии должны находится в фигурных скобках. {/*Multi line comment...*/}</li>
            </ul>
          </div>
      );
	}
}