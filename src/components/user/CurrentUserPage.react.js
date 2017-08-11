import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from '../core/firebase';
import map from 'lodash/map';

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
    const { title, currentUser, notes } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        {/*<Journal journalRef={this.journalRef} notesRef={this.notesRef} />*/}{' '}
        <NewNote notesRef={this.notesRef} />
        {map(notes, (note, key) => {
          <p key={key}>
            {note.body}
          </p>;
        })}
        <Notes notes={notes} user={currentUser} notesRef={this.notesRef} />
      </div>
    );
  }
}

CurrentUserPage.propTypes = {
  currentUser: PropTypes.object.isRequired,
  journalRef: PropTypes.object,
  plantsRef: PropTypes.object,
  notesRef: PropTypes.object.isRequired,
  notes: PropTypes.object.isRequired
};

export default CurrentUserPage;
