import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux";

class ChapterItem extends Component {
  
  constructor(props) {
    super(props);
  }

  
  render() {
  

    return (
      <div className='chapterItem'>
        <p>chapter item</p>
      </div>
    );
  }
}



export default ChapterItem;
