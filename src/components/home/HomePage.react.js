import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>HomePage</h1>
        <p>Plant list and explanation of gardenia goes here</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn more
        </Link>
      </div>
    );
  }
}

export default HomePage;
