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
        <p>{ this.props.chapterIndex }, { this.props.chapterId }</p>
      </div>
    );
  }
}



export default ChapterItem;
