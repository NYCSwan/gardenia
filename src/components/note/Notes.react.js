import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from '../core/firebase';
import map from 'lodash/map';
import CurrentUser from '../core/CurrentUser.react';
import Note from './Note.react';
import NotesList from './notes-list.react';

class Notes extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect(key) {
    const { notesRef, user } = this.props;

    notesRef.child(key).child('votes').child(user.uid).set(user.displayName);
  }

  render() {
    const { notes, user } = this.props;
    return (
      <section className="notes">
        <h2>Notes</h2>
        {map(notes, (note, key) =>
          <Note
            key={key}
            {...note}
            user={user}
            handleSelect={() => this.handleSelect(key)}
          />
        )}
      </section>
    );
  }
}

Notes.protoType = {
  notesRef: PropTypes.object,
  notes: PropTypes.object,
  user: PropTypes.object
};

export default Notes;
