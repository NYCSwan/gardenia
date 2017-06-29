import React, { Component } from 'react';
import { database } from './firebase';
import PropTypes from 'prop-types';
import CurrentUser from './CurrentUser.react';

class NewNote extends Component {
  constructor() {
    super();
    this.state = {
      note: ''
    }
    {/*notes in journal*/}
    this.journalRef = database.ref('/journal');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    console.log(event.target.value);
    const newNote = event.target.value;

    this.setState({
      note: newNote
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.journalRef.push({note: this.state.note});
  }

  render() {
    const { note } = this.state;
    return (

      <form
        className='Garden-notes-form'
        >
        <input
          className='notes-body'
          type='textarea'
          value={note}
          onChange={this.handleChange}
          placeholder="Add notes here."
        />
        <button
          onSubmit={this.handleSubmit}
          disabled={!note}
        >
        Add note
        </button>
      </form>

    )
  }
}

NewNote.propTypes = {
  journalRef: PropTypes.object
}

export default NewNote;
