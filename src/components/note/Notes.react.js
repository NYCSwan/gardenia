import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from '../core/firebase';
import map from 'lodash/map';

import Note from './Note.react';
import NotesList from './notes-list.react';

class Notes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notes } = this.props;

    return (
      <section className="notes">
        <h2>Notes</h2>
        {map(notes, (note, key) => <Note key={key} {...note} />)}
      </section>
    );
  }
}

Notes.protoType = {
  noteRef: PropTypes.object,
  notes: PropTypes.object
};

export default Notes;
