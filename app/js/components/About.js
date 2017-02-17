import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
  
    console.log("about page");
  
    return (
      <div className='About'>
        About page - <Link to="/">Home</Link>
      </div>
    );
  }
}
