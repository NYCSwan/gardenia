import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { database } from '../core/firebase';
import PropTypes from 'prop-types';
import CurrentUser from '../core/CurrentUser.react';

class NewNote extends Component {
  constructor() {
    super();
    this.state = {
      body: ''
    };
    this.notesRef = database.ref('/notes');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { currentUser } = this.state;
    event.preventDefault();
    console.log(`submit event: ${event.target.val}`);
    this.notesRef.push({ body: this.state.body });
  }

  render() {
    const { body, currentUser } = this.state;
    return (
      <div className="new-note-container">
        <h3>Add a new note to your journal</h3>
        <form className="garden-notes-form">
          <input
            className="notes-body"
            type="textarea"
            value={body}
            onChange={event => this.setState({ body: event.target.value })}
            placeholder="Add notes here."
          />
          <button disabled={!body} onClick={this.handleSubmit}>
            Add note
          </button>
        </form>
      </div>
    );
  }
}

NewNote.propTypes = {
  journalRef: PropTypes.object,
  notesRef: PropTypes.object,
  body: PropTypes.string
};

export default NewNote;
