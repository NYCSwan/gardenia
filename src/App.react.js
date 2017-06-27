import React, { Component } from 'react';
import { auth, database } from './firebase';
import SignIn from './SignIn.react';
import CurrentUser from './CurrentUser.react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newNote: '',
      currentUser: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({currentUser});
    });

    this.dataRef = database.ref('/garden');
    this.dataRef.on('value', (snapshot) => {

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
    const { currentUser } = this.state.currentUser;
    return (
      <div id='app-container'>
        <header className='nav-bar'>
          <h1>Gardenia</h1>
          <div>
            { !currentUser && <SignIn /> }
            { currentUser && <CurrentUser user={currentUser} /> }
          </div>
        </header>
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
