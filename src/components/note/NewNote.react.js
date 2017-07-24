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
    event.preventDefault();
    console.log(`submit event: ${event.target.val}`);
    this.notesRef.push({ body: this.state.body });
  }

  render() {
    const { body } = this.state;
    return (
      <div className="new-note-container">
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
        <Link to="/journal" className="btn btn-primary btn-lg">
          Go to your journal
        </Link>
      </div>
    );
  }
}

NewNote.propTypes = {
  journalRef: PropTypes.object,
  notesRef: PropTypes.object
};

export default NewNote;
