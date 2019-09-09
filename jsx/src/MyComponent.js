import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: 'Default Name'
  };

  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    const { name, children } = this.props;
    return (
      <div>
        Hello {name}! <br />
        Children value is {children}
      </div>
    );
  }
}

export default MyComponent;
