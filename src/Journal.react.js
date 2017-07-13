import React, { Component } from 'react';
import Notes from './Notes.react';
import map from 'lodash/map';

class Journal extends Component {
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
