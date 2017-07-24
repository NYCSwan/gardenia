import React, { Component } from 'react';
import { database, auth, userId } from '../core/firebase';
import PropTypes from 'prop-types';

class Note extends Component {
  constructor(props) {
    super();
    this.state = this._getState(props);
  }
  render() {
    const userId = auth.currentUser.uid;
    return (
      <div className="note-info media-body">
        <div className="note-body">
          <h4>Note Title</h4>
          <p>note body</p>
          <p>date</p>
          <p>garden</p>
        </div>
      </div>
    );
  }
}

export default Note;
