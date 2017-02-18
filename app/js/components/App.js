// import
// component
// react
import React, { Component } from 'react';


// export App
export default class App extends Component {
  render() {
    // const
    // { children } === home and about
    // this.props
    const { children } = this.props; // eslint-disable-line

    // return menu and child
    return (
      <div className='App'>
        { children }
      </div>
    );
  }
}
