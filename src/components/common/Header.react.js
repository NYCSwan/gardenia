import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  FormControl,
  FormGroup,
  Button
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import CurrentUser from '../core/CurrentUser.react';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <Nav barStyle="tabs" activeKey="1">
        <NavItem eventKey="1">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </NavItem>
        <NavItem to="/plants" exact activeClassName="active">
          Plants
        </NavItem>

        {/* Filter by loggedin*/}

        <NavLink to="/currentUser" activeClassName="active">
          My Page
        </NavLink>
        {/*
            <NavLink to="/journal" activeClassName="active">
              Journal
            </NavLink>*/}

        <span className="title">
          {this.props.title}
        </span>
        <FormGroup
          controlId="formBasicText"
          className="navbar-form search"
          action=""
        >
          <FormControl
            type="text"
            className="searchInput"
            placeholder="Search..."
          />
          <Button bsStyle="success" type="submit">
            Search
          </Button>
        </FormGroup>
      </Nav>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object
};

export default Header;
