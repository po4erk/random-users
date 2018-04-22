import React, { Component } from 'react';
import Persons from './components/Persons/Persons';
import ScrollToTop from 'react-scroll-up';
import Paper from 'material-ui/Paper';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import arrowUp from '@fortawesome/fontawesome-free-solid/faArrowUp'


class App extends Component {
  render() {
    const up = {
      width: 40,
      height: 40,
      paddingTop: 10,
      background: '#5E35B1'
    }
    return (
      <div className="personsApp">
        <h1>Random Persons</h1>
        <Persons/>
        <ScrollToTop showUnder={160}>
          <Paper style={up} zDepth={1} circle={true}>
            <FontAwesomeIcon icon={arrowUp}/>
          </Paper>
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
