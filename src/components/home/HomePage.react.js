import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import history from '../../history';
import { auth, database } from '../core/firebase';

import NewNote from '../note/NewNote.react';
import Journal from '../journal/Journal.react';
import Notes from '../note/Notes.react';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
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
    return (
      <div className="jumbotron">
        <h1>HomePage</h1>
        <p>Plant list and explanation of gardenia goes here</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn more
        </Link>
        <div>
          <NewNote
            bodyVisible={this.state.noteBodyVisible}
            handleNoteSubmit={this.handleSubmitNote}
            addNote={this.addItem}
          />
          <Journal />
          <Notes />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default HomePage;
