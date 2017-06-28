import React, { Component } from 'react';
import { auth, database } from './firebase';

import SignIn from './SignIn.react';
import CurrentUser from './CurrentUser.react';
import NewNote from './NewNote.react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newNote: '',
      currentUser: null
    };

    this.dataRef = database.ref();
  

  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({currentUser});
    });

    this.dataRef.on('value', (snapshot) => {

      this.setState({
        data: snapshot.val()
      });
    });
  }

  // handleChange(event) {
  //   console.log(event.target.value);
  //   const newNote = event.target.value;
  //
  //   this.setState({
  //     newNote
  //   })
  // }
  //
  // handleSubmit(event) {
  //   event.preventDefault();
  //   database.ref('/garden').push(this.state.newNote);
  // }

  render () {
    const { currentUser } = this.state;
    return (
      <div id='app-container'>
        <header className='nav-bar'>
          <h1>Gardenia</h1>
          <div>
            { !currentUser && <SignIn /> }

            { currentUser && <CurrentUser user={currentUser} /> }
          </div>
        </header>

{/*turn section and form into own components*/ }

        <section>
          { JSON.stringify(this.state.data, null, 5) }
        </section>
        <div>
        currentUser &&

            <NewNote
              handleSubmit = { this.state }/>
          </div>
        </div>
    )
  }
}

export default App;
