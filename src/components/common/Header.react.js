import React, { Component } from 'react';
import CurrentUser from '../core/CurrentUser.react';
import SignIn from './SignIn.react';

class Header extends Component {
  render() {
    return (
      <header className="nav-bar header-container">
        <h1>Gardenia</h1>
        <div>
          <SignIn />
          {/*<CurrentUser user={props.currentUser} /> */}
        </div>
        <div className="fa fa-more" />
        <span className="title">
          {this.props.title}
        </span>
        <input type="text" className="searchInput" placeholder="Search..." />
        <div className="fa fa-search searchIcon" />
      </header>
    );
  }
}

export default Header;
