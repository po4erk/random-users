import React, { Component } from 'react';
import Persons from './components/pages/Persons';

class App extends Component {
  render() {
    return (
      <div className="personsApp">
        <h1>Random Persons</h1>
        <Persons/>
      </div>
    );
  }
}

export default App;
