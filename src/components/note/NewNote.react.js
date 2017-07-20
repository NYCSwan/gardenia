import React, { Component } from 'react';
import { database } from '../core/firebase';
import PropTypes from 'prop-types';
import CurrentUser from '../core/CurrentUser.react';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      date: new Date()
    };
    this.journalRef = database.ref('/journal');
    this.noteRef = database.ref('/note');

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitNote = this.handleSubmitNote.bind(this);
  }

  handleChange(event) {
    const newNote = event.target.value;

    this.setState({
      note: newNote
    });
  }

  handleSubmitNote(event) {
    console.log(`note: ${this.state.note}`);
    let tempItem = {
      body: this.props.inputNoteBody.value
    };
    console.log(tempItem);
    event.preventDefault();
    this.props.addNote(tempItem);
    this.noteRef.push({ note: this.state.body });
  }

  render() {
    const { note } = this.state;
    return (
      <div className="new-note-container">
        {CurrentUser}
        <form className="Garden-notes-form" onSubmit={this.handleSubmit}>
          <input
            className="notes-body"
            type="textarea"
            value={note}
            ref="inputNoteBody"
            onChange={this.handleChange}
            placeholder="Add notes here."
          />
          {this.state.date.toLocaleTimeString()}
          <button disabled={!note}>Add note</button>
        </form>
      </div>
    );
  }
}

NewNote.propTypes = {
  journalRef: PropTypes.object
};

export default NewNote;
