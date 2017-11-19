"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

let About = React.createClass ({
  render() {
    return (
      <div>
        <div>
          <h2>Hello!(app.jsx)</h2>
          <h2>This text was created as React component.</h2>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<About />, document.getElementById('page'));






class App extends React.Component {
  constructor(props) {
        super(props);
      
        this.state = {
          header: "Header from state",
          "content": "Content from state"
        }
    }

    render() {

        return (
          <div>

              <p>{this.state.header}</p>
              <p>{this.state.content}</p>

          </div>
      );
   }
}

ReactDOM.render(<App/>, document.getElementById('page2'));


