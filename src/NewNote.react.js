import React, { Component } from 'react';
import { database } from 'firebase';
import CurrentUser from './CurrentUser.react';

class NewNote extends Component {
  constructor() {
    super();
    this.state = {
      note: ''
    }
    {/*notes in journal*/}
    this.journalRef = database.ref('/journal')
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    database.ref().on('value', (snapshot) => {
      console.log('component mounted! Doooope');
      this.setState({
        note: snapshot.val()
      });
    });
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
    console.log(event);
    database.ref().push(this.state.note);
  }

  render() {
    const { note } = this.state;
    return (

      <form
        className='Garden-notes-form'
        onSubmit={this.handleSubmit}
        >
        <input
          className='notes-body'
          type='textarea'
          value={note}
          onChange={this.handleChange}
          placeholder="Add notes here."
        />
        <button
          type='submit'
        >
        Add note
        </button>
      </form>

    )
  }
}

export default NewNote;
