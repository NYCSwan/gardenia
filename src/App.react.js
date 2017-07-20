import React, { Component } from 'react';
import map from 'lodash/map';

import { auth, database } from './components/core/firebase';
import CurrentUser from './components/core/CurrentUser.react';
import SignIn from './components/common/SignIn.react';

import Header from './components/common/Header.react';
import NewNote from './components/note/NewNote.react';
import Journal from './components/journal/Journal.react';
import Notes from './components/note/Notes.react';
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
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });

      this.journalRef.on('value', snapshot => {
        console.log('component mounted! Doooope');
        console.log(snapshot.val());
        this.setState({
          notes: snapshot.val()
        });
      });
    });
  }
  componentWillUnmount() {}
  render() {
    const { currentUser, notes, journal } = this.state;
    return (
      <div id="app-container">
        {/*turn section and form into own components*/}
        <div>
          <Header currentUser={currentUser} title="homepage timeline" />
          <NewNote
            bodyVisible={this.state.noteBodyVisible}
            handleNoteSubmit={this.handleSubmitNote}
            addNote={this.addItem}
          />
          {currentUser && <Journal />}
          <Notes />
        </div>
      </div>
    );
  }
}

export default App;
