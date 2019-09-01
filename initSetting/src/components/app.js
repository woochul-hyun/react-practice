const React = require('react');

class App extends React.Component {
  state = {
    text: 'Hello React'
  };
  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = App;
