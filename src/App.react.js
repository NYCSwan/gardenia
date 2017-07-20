import React, { Component } from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { auth, database } from './components/core/firebase';
import CurrentUser from './components/core/CurrentUser.react';
import SignIn from './components/common/SignIn.react';

import Header from './components/common/Header.react';
import HomePage from './components/home/HomePage.react';
import Journal from './components/journal/Journal.react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journal: null,
      currentUser: null,
      title: 'title',
      notes: []
    };
    this.noteRef = database.ref('/note');
    this.journalRef = database.ref('/journal');
  }

  render() {
    const { currentUser, notes, journal, title } = this.state;

    return (
      <div id="app-container">
        {/*turn section and form into own components*/}
        <Router>
          <div className="container">
            <Header currentUser={currentUser} title={title} />
            <Route exact path="/" component={HomePage} />
            <Route path="/journal" component={Journal} />
          </div>
        </Router>

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
