// ### Hello-world.jsx
// import React from 'react';
// class HelloWorld extends React.Component {
//     render() {
//         return <h1>Hello from {this.props.phrase}!</h1>;
//     }
// }
// export default HelloWorld;


import React from 'react';
import HelloWorld from './hello-world';

React.render(
    <HelloWorld phrase="ES6"/>, document.body
);