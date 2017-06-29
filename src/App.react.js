import React, { Component } from 'react';
import { auth, database } from './firebase';
import map from 'lodash/map';
import SignIn from './SignIn.react';
import CurrentUser from './CurrentUser.react';
import NewNote from './NewNote.react';
import Notes from './Notes.react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: null,
      currentUser: null
    };

    this.journalRef = database.ref('/journal');
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({currentUser});


      this.journalRef.on('value', (snapshot) => {
        console.log('component mounted! Doooope');
        console.log(snapshot.val());
        this.setState({
          notes: snapshot.val()
        });
      });
    });
  }

  render () {
    const { currentUser, notes } = this.state;
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
        {
          currentUser &&
          <div>
            <NewNote />
              { map(notes, (note, key) => <p key={key}>{note}</p>) }
              <Notes />
            </div>
        }
      </div>
    )
  }
}

export default App;
