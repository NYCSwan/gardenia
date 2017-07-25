import React, { Component } from 'react';
import Notes from '../note/Notes.react';
import map from 'lodash/map';
import { database } from '../core/firebase';

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      garden: ''
    };
    this.notesRef = database.ref('/notes');
  }
  render() {
    const { notes, currentUser } = this.props;
    return (
      <div className="journal">
        <h3>
          {' '}{currentUser} Journal
        </h3>

        <Notes notes={notes} user={currentUser} notesRef={this.notesRef} />
      </div>
    );
  }
}

export default Journal;
