import React, { Component } from 'react';
import { auth, database } from './firebase';
import map from 'lodash/map';
import SignIn from './SignIn.react';
import CurrentUser from './CurrentUser.react';
import NewNote from './NewNote.react';
import Journal from './Journal.react';
import Note from './Note.react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journal: null,
      currentUser: null,
      notes: []
    };
    this.noteRef = database.ref('/note');
    this.journalRef = database.ref('/journal');
    /*gardendb*/
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });

      this.noteRef.on('value', snapshot => {
        console.log('component mounted! Doooope');
        console.log(`note: ${snapshot.val()}`);
        this.setState({
          notes: snapshot.val()
        });
      });

      this.notesRef.on('value',)
    });
  }

  render() {
    const { currentUser, notes } = this.state;
    return (
      <div id="app-container">
        <header className="nav-bar">
          <h1>Gardenia</h1>
          <div>
            {!currentUser && <SignIn />}

            {currentUser && <CurrentUser user={currentUser} />}
          </div>
        </header>

        {/*turn section and form into own components*/}
        <div>
          <NewNote />
          <Journal />
        </div>
      </div>
    );
  }
}

export default App;
