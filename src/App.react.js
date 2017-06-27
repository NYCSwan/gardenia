import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newNote: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleChange(event) {
    console.log(event.target.value);
    const newNote = event.target.value;

    this.setState({
      newNote
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    database.ref('/garden').push(this.state.newNote);
  }

  render () {
    return (
      <div id='app-container'>
        <h1>Gardenia</h1>

        <section>
          { JSON.stringify(this.state.data, null, 5) }
        </section>
        <form className='Garden-notes-form' onSubmit={this.handleSubmit}>
          <input className='notes-body' type='text' value={this.state.newNote} onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default App;
