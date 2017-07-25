import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { auth, database } from './components/core/firebase';
import CurrentUser from './components/core/CurrentUser.react';
import SignIn from './components/common/SignIn.react';

import CurrentUserPage from './components/user/CurrentUserPage.react';
import Header from './components/common/Header.react';
import HomePage from './components/home/HomePage.react';
import Journal from './components/journal/Journal.react';
import Notes from './components/note/Notes.react';
import Plants from './components/plant/Plants.react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      title: '',
      notes: null,
      plants: null,
      journal: null
    };
    this.plantsRef = database.ref('/plants');
    this.notesRef = database.ref('/notes');
    this.journalRef = database.ref('/journal');
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      console.log(`User changed ${currentUser.uid}`);
      this.setState({ currentUser });

      this.notesRef.on('value', snapshot => {
        console.log(`App note: ${snapshot.val()}`);
        this.setState({ notes: snapshot.val() });
      });
    });
  }

  render() {
    const { currentUser, notes, title, journal } = this.state;

    return (
      <div id="app-container">
        {/*turn section and form into own components*/}
        <Router>
          <div className="container">
            <Header />

            {!currentUser
              ? <SignIn />
              : <button onClick={() => auth.signOut()}>Sign Out</button>}

            <Route exact path="/" component={HomePage} />
            <Route path="/plants" component={Plants} />

            {currentUser &&
              <div>
                <Route path="/currentUser" component={CurrentUserPage} />
                <Route path="/journal" component={Journal} />
                <Route path="/plants" component={Plants} />
              </div>}
            <Notes notes={notes} user={currentUser} notesRef={this.notesRef} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
