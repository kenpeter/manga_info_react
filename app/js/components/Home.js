import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
  
    console.log("home page");
  
    return (
      <div className='Home'>
        Home page - <Link to="/about">About</Link>
      </div>
    );
  }
}
