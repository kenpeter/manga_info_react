import React, { Component } from 'react';
import { Link } from 'react-router';
import chapterLoadAll from '../actions/chapterLoadAll';
import { connect } from "react-redux";

import { Grid, Image } from 'semantic-ui-react';
import ChapterItem from './ChapterItem';
import { AllHtmlEntities } from 'html-entities';
import { List } from 'semantic-ui-react';


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
      let mangaId = this.props.params.mangaId;
      
      // https://www.w3schools.com/jsref/jsref_join.asp
      let cat = categories.join(", ");
      
      
      let chapterItems_display = chapters.map((val, index) => {
        return (
          <ChapterItem 
            key={index} 
            chapterIndex={val[0]}
            chapterId={val[3]}
            mangaId={mangaId}
          />
        );
      });
      
      
      let allChapterItems_display = 
        <List>
          { chapterItems_display }
        </List>
    
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
              
              <p><strong>Category: </strong></p>
              <p>{ cat }</p>
              
              <p><strong>Chapters: </strong></p>
              { allChapterItems_display }  
              
            </Grid.Column>
            
            
            <Grid.Column width={3}>
              <p><Link to="/">Home</Link></p>
              
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
