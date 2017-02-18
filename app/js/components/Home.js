import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon, Table } from 'semantic-ui-react';
import loadAll from '../actions/loadAll';

import { connect } from "react-redux";

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // fire action
    this.props.loadAll();
  }
  
  /*
  render() {
    let display = '';
  
    let rows = this.props.propList;
    
    let rows_display = '';
  
    if(rows.length > 0) {
      rows_display = rows.map((val, index) => {
        return (
          <Table.Row key={index}>
            <Table.Cell>
              <Icon name='inbox' /> {index}
            </Table.Cell>
            
            <Table.Cell>
              <Icon name='wifi' /> {val.t}
            </Table.Cell>
          
            <Table.Cell>
              <Icon name='file' /> {val.h}
            </Table.Cell>
          </Table.Row>
        );
      });
      
      
      display = 
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Mangaeden API</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        
          <Table.Body>
            { rows_display }
          </Table.Body>

        </Table>;
    }
    else {
      display = "Waiting for > 30s .........";
    }
  
    return (
      <div>
        {display}
      </div>
    );
  }
  */
  
  
  render() {
    let rows = this.props.propList;
    let display = '';
    let rows_display = '';
  
    if(rows.length > 0) {
      rows_display =
        rows.map((val, index) => {
          return (
            <tr key={index}>
              <td>{ index }</td>
              <td>{ val.t }</td>
              <td>{ val.h }</td>
            </tr>
          );
        });
    
      //console.log(rows_display);
    
      // display table
      display = 
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Hit</th>
            </tr>
          </thead>
          
          <tbody>
            {rows_display}
          </tbody>
        </table>
    }
    else {
      //
      display = "Waiting for > 30s .........";
    }
  
    return (
      <div>
        {display}
      </div>  
    );
  }
  
  
}


function mapStateToProps(state) {

  return {
    propLoadingMore: state.loadAll.loadingMore,
    propList: state.loadAll.list
  };
}

export default connect(mapStateToProps, { loadAll })(Home);
