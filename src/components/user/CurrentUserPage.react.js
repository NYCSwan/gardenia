import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from '../core/firebase';

import Journal from '../journal/Journal.react';
import Notes from '../note/Notes.react';
import NewNote from '../note/NewNote.react';

class CurrentUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My Garden Page'
    };
    this.notesRef = database.ref('/notes');
    this.journalRef = database.ref('/journal');
  }

  render() {
    const { user, title, notes, notesRef } = this.state;
    return (
      <div>
        <h1>
          {title}
        </h1>
        <Journal journalRef={this.journalRef} notesRef={this.notesRef} />

        <NewNote notesRef={this.notesRef} />
      </div>
    );
  }
}

CurrentUserPage.propTypes = {
  currentUser: PropTypes.object,
  user: PropTypes.object,
  journalRef: PropTypes.object,
  plantsRef: PropTypes.object,
  notesRef: PropTypes.object,
  notes: PropTypes.object
};

export default CurrentUserPage;
