import React, { Component } from 'react';
import {connect} from 'react-redux';
import getPersons from '../../actions/PersonActions';
import {bindActionCreators} from 'redux';

import PersonCard from './PersonCard';
import PersonList from './PersonList';

class PersonsList extends Component{

  state = {
    isShowCards: true,
    isShowList: false
  }

  componentDidMount(){
    this.props.getPersons();
    document.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount(){
    document.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    const {getPersons, persons} = this.props,
          documentHeight = document.body.scrollHeight,
          scrollHeight = window.pageYOffset + 920;
    if( scrollHeight >= documentHeight) getPersons(persons);
  };

  toggleCards = () => {
    const {isShowCards,isShowList} = this.state;
    if(isShowCards){
      this.setState({
        isShowCards: !isShowCards,
        isShowList: !isShowList
      })
    }
  };

  toggleList = () => {
    const {isShowCards,isShowList} = this.state;
    if(isShowList){
      this.setState({
        isShowCards: !isShowCards,
        isShowList: !isShowList
      })
    }
  };

  render(){
    const {persons} = this.props,
          personsCards = persons.map((persons,index) => <PersonCard key={index} data={persons}/>),
          personsLists = persons.map((persons,index) => <PersonList key={index} data={persons}/>),
          personCards = this.state.isShowCards && <div className="personsCards">{personsCards}</div>,
          personLists = this.state.isShowList && <div className="personsList">{personsLists}</div>;

    return(
        <div className="personsWrapper">
          <div className="personsButtons">
            <button onClick={this.toggleCards}>Show List</button>
            <button onClick={this.toggleList}>Show Cards</button>
          </div>
          {personCards}
          {personLists}
        </div>
    )
  }
}
function mapStateToProps(state){
  return{
    persons: state.persons.persons
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getPersons: getPersons
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonsList);
