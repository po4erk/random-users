import React, { Component } from 'react';
import PersonsList from './components/pages/PersonsList';

class App extends Component {
  render() {
    return (
      <div className="personsApp">
        <h1>Random Persons</h1>
        <PersonsList />
      </div>
    );
  }
}

export default App;
