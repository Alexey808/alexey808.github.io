"use strict";

let About = React.createClass({ displayName: "About",
  render() {
    return React.createElement("div", null, React.createElement("div", null, React.createElement("h2", null, "Hello!(app.jsx)"), React.createElement("h2", null, "This text was created as React component.")));
  }
});

ReactDOM.render(React.createElement(About, null), document.getElementById('page'));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "Header from state",
      "content": "Content from state"
    };
  }

  render() {

    return React.createElement("div", null, React.createElement("p", null, this.state.header), React.createElement("p", null, this.state.content));
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('page2'));