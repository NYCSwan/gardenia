import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from 'firebase';
import map from 'lodash/map';

import Note from './Note.react';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  render() {
    const { notes, currentUser } = this.state;

    return (
      <section className="notes">
        <Note />
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
