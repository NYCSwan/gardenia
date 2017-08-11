import React, { Component } from 'react';
import { database, auth } from '../core/firebase';
import PropTypes from 'prop-types';

class Note extends Component {
  render() {
    const { body } = this.props;

    return (
      <article className="note-info media-body">
        <div className="note-body">
          <p>
            {body}
          </p>
          <p>garden:</p>
        </div>
      </article>
    );
  }
}

Note.propTypes = {
  body: PropTypes.string,
  currentUser: PropTypes.object
};

export default Note;
