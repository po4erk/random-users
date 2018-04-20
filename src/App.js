import React, { Component } from 'react';
import PeopleList from './components/pages/PeopleList';

class App extends Component {
  render() {
    return (
      <div className="usersApp">
        <h1>Random Persons</h1>
        <PeopleList />
      </div>
    );
  }
}

export default App;
