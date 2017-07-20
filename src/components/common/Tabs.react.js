import React, { Component } from 'react';

class Tabs extends Component {
  displayName: 'Tabs';

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    };
  }

  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {
    return (
      <div className="tabs">
        {this._renderContent()}
      </div>
    );
  }
}

Tabs.defaultProps = {
  selected: 0
};

export default Tabs;
