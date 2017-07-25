import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import CurrentUser from '../core/CurrentUser.react';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <header className="nav-bar header-container">
        <h1>Gardenia</h1>

        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/plants" exact activeClassName="active">
              Plants
            </NavLink>
          </li>
          {/* Filter by loggedin*/}
          <li>
            <NavLink to="/notes" activeClassName="active">
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/journal" activeClassName="active">
              Journal
            </NavLink>
          </li>
        </ul>
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
