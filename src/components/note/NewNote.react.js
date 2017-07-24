import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { database, auth } from '../core/firebase';
import PropTypes from 'prop-types';
import CurrentUser from '../core/CurrentUser.react';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      journalId: 1,
      date: new Date()
    };
    this.journalRef = database.ref('/journal');
    this.noteRef = database.ref('/note');

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newNote = event.target.value;
    console.log(`new note: ${newNote}`);
    this.setState({
      body: newNote
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.val);
    this.props.noteRef.push({ body: event.target.val });
  }

  render() {
    const { body, userId, journalId } = this.state;
    return (
      <div className="new-note-container">
        {CurrentUser}
        <form className="Garden-notes-form">
          <input
            className="notes-body"
            type="textarea"
            value={body}
            ref="inputNoteBody"
            onChange={this.handleChange}
            placeholder="Add notes here."
          />
          <input
            className="date"
            ref="date"
            placeholder={this.state.date.toLocaleTimeString()}
          />
          <button disabled={!body} onSubmit={this.handleSubmit}>
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
  noteRef: PropTypes.object
};

export default NewNote;
