import React, { Component } from 'react';
import { Link } from 'react-router';
import chapterLoadAll from '../actions/chapterLoadAll';
import { connect } from "react-redux";

class Manga extends Component {
  
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let mangaId = this.props.params.mangaId;
  
    // fire action
    this.props.chapterLoadAll(mangaId);
  }
  
  render() {
  
    let mangaId = this.props.params.mangaId;
    
    // https://stackoverflow.com/questions/35352638/react-router-how-to-get-parameter-value-from-url
    //console.log(mangaId);
  
    return (
      <div className='manga'>
        manga page - <Link to="/">Home</Link>
      </div>
    );
  }
}


function mapStateToProps(state) {

  return {
    propLoadingMore: state.chapterLoadAll.loadingMore,
    propList: state.chapterLoadAll.list
  };
}

export default connect(mapStateToProps, { chapterLoadAll })(Manga);
