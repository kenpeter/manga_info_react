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
  

  render() {
  
    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>Mangaeden API</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Icon name='inbox' /> node_modules
            </Table.Cell>
            <Table.Cell>
              <Icon name='ticket' /> Initial commit
              </Table.Cell>
            <Table.Cell>
              <Icon name='wifi' /> 10 hours ago
            </Table.Cell>
          </Table.Row>
          
          
          
        </Table.Body>

      </Table>
    );
  }
}


export default connect(null, { loadAll })(Home);
