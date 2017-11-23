"use strict";

let About = React.createClass ({
  render() {
    return (
      <div>
        <div>
          <h1>Hello!</h1>
          <h2>This text was created as React component.</h2>
          <p>For more information please visit my blog at <a href="http://www.bebetterdeveloper.com/coding/es6-react-babel.html" target="blank">BeBetterDeveloper</a></p>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<About />, document.getElementById('page'));