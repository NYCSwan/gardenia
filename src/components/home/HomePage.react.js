import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import history from '../../history';
import { auth, database } from '../core/firebase';

import Journal from '../journal/Journal.react';
import Notes from '../note/Notes.react';
import NewNote from '../note/NewNote.react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      notes: [],
      title: 'Home Page'
    };
    this.journalRef = database.ref('/journal');
    this.noteRef = database.ref('/note');
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });

      this.journalRef.on('value', snapshot => {
        console.log('component mounted! Doooope');
        console.log(`HomePage: ${snapshot.val()}`);
        this.setState({
          notes: snapshot.val()
        });
      });
    });
  }

  componentWillUnmount() {}

  render() {
    const { currentUser, notes, title } = this.state;

    return (
      <div className="jumbotron">
        <h1>
          {title}
        </h1>
        <p>Plant list and explanation of gardenia goes here</p>
        {currentUser &&
          <div>
            <NewNote
              bodyVisible={this.state.noteBodyVisible}
              handleNoteSubmit={this.handleSubmit}
              addNote={this.addItem}
            />
          </div>}
      </div>
    );
  }
}

HomePage.propTypes = {
  currentUser: PropTypes.object,
  journalRef: PropTypes.object,
  noteRef: PropTypes.object
};

export default HomePage;
