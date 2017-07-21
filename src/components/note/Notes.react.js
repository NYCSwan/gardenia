import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from '../core/firebase';
import map from 'lodash/map';

import Note from './Note.react';
import notesList from './notes-list.react';
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      currentUser: null
    };
  }

  render() {
    const { notes, currentUser } = this.state;

    return (
      <section className="notes">
        <h2>Notes</h2>
        {/*notes.map((note) => {
          return (
            <div className="note">
              <Note noteSamples={notes}/>
            </div>
          );
        })
      */}
      </section>
    );
  }
}

Notes.protoType = {
  user: PropTypes.object,
  journalRef: PropTypes.object,
  notes: PropTypes.object
};

export default Notes;
