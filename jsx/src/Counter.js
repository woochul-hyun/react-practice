import React, { Component } from 'react';

class Counter extends Component {
  state = {
    username: '',
    message: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  };

  onKeyUp = e => {
    if (e.key === 'Enter') {
      this.onClick();
    }
  };

  render() {
    const { username, message } = this.state;
    return (
      <div>
        <h1>Event</h1>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={username}
          onChange={this.onChange}
        />
        <input
          type='text'
          name='message'
          placeholder='Enter any value'
          value={message}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
        />
        <button onClick={this.onClick}>Check</button>
      </div>
    );
  }
}

export default Counter;
