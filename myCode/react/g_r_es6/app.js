"use strict";

let About = React.createClass({ displayName: "About",
  render() {
    return React.createElement("div", null, React.createElement("div", null, React.createElement("h1", null, "Hello!"), React.createElement("h2", null, "This text was created as React component."), React.createElement("p", null, "For more information please visit my blog at ", React.createElement("a", { href: "http://www.bebetterdeveloper.com/coding/es6-react-babel.html", target: "blank" }, "BeBetterDeveloper"))));
  }
});

ReactDOM.render(React.createElement(About, null), document.getElementById('page'));