import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from 'firebase';

class Notes extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <section className='notes'>
        <p>Notes here</p>
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
