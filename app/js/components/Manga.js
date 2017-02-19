import React, { Component } from 'react';
import { Link } from 'react-router';
import chapterLoadAll from '../actions/chapterLoadAll';
import { connect } from "react-redux";

import { Grid, Image } from 'semantic-ui-react';
import ChapterItem from './ChapterItem';
import { AllHtmlEntities } from 'html-entities';

let entities = new AllHtmlEntities();

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
    let manga_display = "Loading.....";
      
    let manga = this.props.propManga;
     
    // Hak 
    // https://stackoverflow.com/questions/11040472/check-if-object-property-exists-using-a-variable 
    if(manga.hasOwnProperty('chapters')) {
      let title = manga.title;
      let imgUri = manga.image;
      let description = manga.description;
      let categories = manga.categories;
      let chapters = manga.chapters;
      
      //console.log(categories);
      
      // https://www.w3schools.com/jsref/jsref_join.asp
      let cat = categories.join(", ");
      
      let chapterItems_display = chapters.map((val, index) => {
        return (
          <ChapterItem key={index} />
        );
      });
    
      manga_display = 
        <div className='manga'>
          <p>&nbsp;</p>
          <Grid>
            <Grid.Column width={1}>
              
            </Grid.Column>
            
            <Grid.Column width={4}>
              <Image src={`https://cdn.mangaeden.com/mangasimg/${imgUri}`} fluid />
            </Grid.Column>
            <Grid.Column width={7}>
              <p><strong>Description: </strong></p>
              <p>{ entities.decode(description) }</p>
              
              <p><strong>Category: { cat }</strong></p>
              
              
              <p><strong>Chapters: </strong></p>
              { chapterItems_display }
              
              
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            
            <Grid.Column width={1}>
              
            </Grid.Column>
          </Grid>
        </div>;
    }
    else {
    
    }
  
    return (
      <div>
        { manga_display }
      </div>
    );
  }
}


function mapStateToProps(state) {

  //console.log(state);

  return {
    propLoadingMore: state.chapterLoadAll.loadingMore,
    propManga: state.chapterLoadAll.manga
  };
}

export default connect(mapStateToProps, { chapterLoadAll })(Manga);
