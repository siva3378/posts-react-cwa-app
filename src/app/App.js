import React, { Component } from 'react';
import './App.css';

import {
  Posts
} from '../pages';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h4>Blogging Application Test Case</h4>
          {/* We can have routes here if we have multiple routes */}
          <Posts />
      </div>
    );
  }
}

export default App;
