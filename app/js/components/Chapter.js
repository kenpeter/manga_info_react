import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux";
import { Grid, Image } from 'semantic-ui-react';

import imgLoadAll from '../actions/imgLoadAll';


// NOTE: if new component is added. For favicon, the server needs to restart
// so favicon can be regenerated.
class Chapter extends Component {
  
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //test
    //console.log("-- component will mount?? --");
  
    let chapterId = this.props.params.chapterId;
    
    // fire action
    this.props.imgLoadAll(chapterId);
  }
  
  
  render() {
  
    let loadingMore = this.props.propLoadingMore;
    let propImgs = this.props.propImgs;
    let imgs = '';
  
    if(propImgs.length == 0) {
      imgs = 'loading.....';
    }
    else {
      let chapterId = this.props.params.chapterId;
      let mangaId = this.props.params.mangaId;
      
      //console.log("-test-");
      //console.log(propImgs);
      
      let imgs_display = propImgs.images.map((val, index) => {
        let imgUri = val[1];
        return <Image key={index} src={`https://cdn.mangaeden.com/mangasimg/${imgUri}`} />
      });
      
      // test
      // e.g. 588769b5719a16803704cf0e
      // console.log(chapterId);

      imgs = 
        <div className='imgs'>
          <Grid>
            <Grid.Column width={1}>
            </Grid.Column>
          
            <Grid.Column width={14}>
              <p><Link to={`/manga/${mangaId}`}>Back to manga</Link></p>
          
              { imgs_display }      
                
            </Grid.Column>
          
            <Grid.Column width={1}>
            </Grid.Column>
          </Grid>
        </div>
      ;    
    }
  
    

    return (
      <div>
        { imgs }
      </div>
    );
  }
}

function mapStateToProps(state) {

  console.log(state);

  return {
    propLoadingMore: state.imgLoadAll.loadingMore,
    propImgs: state.imgLoadAll.imgs
  };
}

export default connect(mapStateToProps, { imgLoadAll })(Chapter);
