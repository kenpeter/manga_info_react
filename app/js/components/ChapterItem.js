import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux";
import { List } from 'semantic-ui-react';

class ChapterItem extends Component {
  
  constructor(props) {
    super(props);
  }

  
  render() {
  
    let chapterIndex = this.props.chapterIndex;
    let chapterId = this.props.chapterId;
    let mangaId = this.props.mangaId;

    return (
      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <Link to={`/chapter/${chapterId}/${mangaId}`}>
            Chapter#: { chapterIndex }, { chapterId }
          </Link>
        </List.Content>
      </List.Item>
    
    );
  }
}



export default ChapterItem;
