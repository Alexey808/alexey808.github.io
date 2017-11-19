import React from 'react'; //подключаем сам framework
import ReactDOM from 'react-dom'; //подключаем виртуальный dom
import App from './App.jsx'; //привязываем к App наш файл App.jsx

ReactDOM.render(<App />, document.getElementById('app'));