import React, { Component } from 'react';
import { database } from './firebase';
import PropTypes from 'prop-types';
import CurrentUser from './CurrentUser.react';
import DropDown from './core/DropDown.react';

class NewNote extends Component {
  constructor() {
    super();
    this.state = {
      note: ''
    };
    this.noteRef = database.ref('/note');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newNote = event.target.value;

    this.setState({
      note: newNote
    });
  }

  handleSubmit(event) {
    console.log(`note: ${this.state.note}`);
    event.preventDefault();
    this.noteRef.push({ note: this.state.note });
  }

  render() {
    const { note } = this.state;
    return (
      <form className="Garden-notes-form" onSubmit={this.handleSubmit}>
        <input
          className="notes-body"
          type="textarea"
          value={note}
          onChange={this.handleChange}
          placeholder="Add notes here."
        />
        <button disabled={!note}>Add note</button>
      </form>
    );
  }
}

NewNote.propTypes = {
  noteRef: PropTypes.object
};

export default NewNote;
