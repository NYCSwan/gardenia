import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { auth, database } from './components/core/firebase';
import SignIn from './components/common/SignIn.react';
import { Button } from 'react-bootstrap';

import CurrentUserPage from './components/user/CurrentUserPage.react';
import Header from './components/common/Header.react';
import HomePage from './components/home/HomePage.react';
import Journal from './components/journal/Journal.react';
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
      body: '',
      journal: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      console.log(`User changed ${currentUser.uid}`);
      this.setState({ currentUser });

      this.plantsRef = database.ref('/plants');
      this.notesRef = database.ref('/notes');
      this.journalRef = database.ref('/journal');

      this.notesRef.on('value', snapshot => {
        this.setState({ notes: snapshot.val() });
        console.log(`App note: ${snapshot}`);
      });
    });
  }

  render() {
    const { currentUser, notes, title, journal } = this.state;
    const userPage = props => {
      return (
        <CurrentUserPage
          notes={notes}
          user={currentUser}
          notesRef={this.notesRef}
          {...props}
        />
      );
    };

    return (
      <div className="app-container">
        {/*turn section and form into own components*/}
        <Router>
          <div className="container">
            <Header />

            {!currentUser
              ? <SignIn />
              : <Button onClick={() => auth.signOut()}>Sign Out</Button>}

            <Route exact path="/" auth={auth} component={HomePage} />
            <Route path="/plants" component={Plants} />

            {currentUser &&
              <div>
                <Route
                  path="/currentUser"
                  render={userPage}
                  notes={notes}
                  notesRef={this.notesRef}
                />
                <Route path="/journal" component={Journal} />
              </div>}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
