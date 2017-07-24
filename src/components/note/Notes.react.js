import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from '../core/firebase';
import map from 'lodash/map';

import Note from './Note.react';
import NotesList from './notes-list.react';
class Notes extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    const { noteRef, currentUser } = this.props;

    noteRef
      .child(key)
      .child(currentUser.uid)
      .child('note')
      .set(currentUser.displayName);
  }

  render() {
    const { notes, currentUser } = this.state;

    return (
      <section className="notes">
        <h2>Notes</h2>
        {/*map(notes, (note, key) => (

            <div className="note">
              <Note
                key={key}
                user={currentUser}
                {...notes}
                handleSelect={() => this.handleSelect(key)}
                />
            </div>
          ))
      */}
        <NotesList />
      </section>
    );
  }
}

Notes.protoType = {
  currentUser: PropTypes.object,
  noteRef: PropTypes.object,
  notes: PropTypes.object
};

export default Notes;
