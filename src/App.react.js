import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { auth, database } from './components/core/firebase';
import CurrentUser from './components/core/CurrentUser.react';
import SignIn from './components/common/SignIn.react';

import Header from './components/common/Header.react';
import HomePage from './components/home/HomePage.react';
import Journal from './components/journal/Journal.react';
import Notes from './components/note/Notes.react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      title: '',
      notes: null,
      plants: null
    };
    this.plantsRef = database.ref('/plants');
    this.notesRef = database.ref('/notes');
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      console.log(`User changed ${currentUser.displayName}`);
      this.setState({ currentUser });

      this.notesRef.on('value', snapshot => {
        console.log(`App note: ${snapshot.val()}`);
        this.setState({ notes: snapshot.val() });
      });
    });
  }
  render() {
    const { currentUser, notes, title } = this.state;

    return (
      <div id="app-container">
        {/*turn section and form into own components*/}
        <Router>
          <div className="container">
            <Header currentUser={currentUser} title={title} />
            {!currentUser ? <SignIn /> : <CurrentUser user={currentUser} />}

            <Route exact path="/" component={HomePage} />
            <Route path="/journal" component={Journal} />
            <Route path="/notes" component={Notes} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
