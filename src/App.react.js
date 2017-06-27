const React = require('react');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render () {
    return (
      <div id='app-container'>
        <h1>Gardenia</h1>
      </div>
    )
  }
}

export default App;
