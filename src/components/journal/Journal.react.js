import React, { Component } from 'react';
import Notes from '../note/Notes.react';
import map from 'lodash/map';

class Journal extends Component {
  constructor() {
    super();
    this.state = {
      garden: '',
      notes: []
    };
  }
  render() {
    return (
      <div className="journal">
        <h3> My Journal</h3>

        <Notes />
      </div>
    );
  }
}

export default Journal;
