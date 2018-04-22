import React, { Component } from 'react';
import {connect} from 'react-redux';
import getPersons from '../../actions/PersonActions';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Card} from 'material-ui/Card';


import PersonCard from './PersonCard';
import PersonList from './PersonList';

class Persons extends Component{

  state = {
    isShowCards: true,
    isShowList: false,
    name: 'Cards'
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
          console.log(scrollHeight,documentHeight)
    if( scrollHeight >= documentHeight) getPersons(persons);
  };

  toggleCards = () => {
    const {isShowCards,isShowList} = this.state;
    if(isShowCards){
      this.setState({
        isShowCards: !isShowCards,
        isShowList: !isShowList,
        name: 'List'
      })
    }
  };

  toggleList = () => {
    const {isShowCards,isShowList} = this.state;
    if(isShowList){
      this.setState({
        isShowCards: !isShowCards,
        isShowList: !isShowList,
        name: 'Cards'
      })
    }
  };

  render(){
    const {persons} = this.props,
          personsCards = persons.map((persons,index) => <PersonCard key={index} data={persons}/>),
          personsLists = persons.map((persons,index) => <PersonList key={index} data={persons}/>),
          personCards = this.state.isShowCards && <div className="personsCards">{personsCards}</div>,
          personLists = this.state.isShowList && <div className="personsList">{personsLists}</div>;
    const styleCard = {
      textAlign: 'center',
      display: 'flex',
      flexWrap: 'wrap'
    };

    return(
        <div className="personsWrapper">
          <div className="personsButtons">
            <RaisedButton onClick={this.toggleCards} label='Show List'/>
            <RaisedButton onClick={this.toggleList} label='Show Cards'/>
          </div>

          <Subheader>Persons {this.state.name}</Subheader>
          <Card style={styleCard}>{personCards}</Card>
          <Card><List>{personLists}</List></Card>
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
export default connect(mapStateToProps, mapDispatchToProps)(Persons);
