import React, { Component } from 'react';
import { database, auth, userId } from '../core/firebase';
import PropTypes from 'prop-types';

class Note extends Component {
  render() {
    const userId = auth.currentUser.uid;
    const { body } = this.props;

    return (
      <div className="note-info media-body">
        <div className="note-body">
          <h4>Note Title</h4>
          <p>
            {body}
          </p>
          <p>date</p>
          <p>garden</p>
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  body: PropTypes.string
};

export default Note;
