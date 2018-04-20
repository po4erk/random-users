import React, { Component } from 'react';
import UserCards from './components/UserCards/UserCards';

class App extends Component {
  render() {
    return (
      <div className="usersApp">
        <h1>Random Users</h1>
        <UserCards />
      </div>
    );
  }
}

export default App;
