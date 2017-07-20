import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from '../core/firebase';
import map from 'lodash/map';

import Note from './Note.react';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes
    };
  }

  renderNote(data) {
    return;
  }
  render() {
    const { notes, currentUser } = this.state;

    return (
      <section className="notes">
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
