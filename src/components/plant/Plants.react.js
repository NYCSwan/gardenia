import React, { Component } from 'react';
import plants from './plants.json';
import Plant from './Plant.react';
import map from 'lodash/map';

import './Plants.css';

class Plants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="plants-container">
        <h3>PLANTS Galore!</h3>

        {plants.map((plant, key) => <Plant plant={plant} key={key} />)}
      </div>
    );
  }
}

export default Plants;
