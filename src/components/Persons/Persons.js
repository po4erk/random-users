import React, { Component } from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';
import getPersons from '../../actions/PersonActions';
import {bindActionCreators} from 'redux';

import RaisedButton from 'material-ui/RaisedButton';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Card} from 'material-ui/Card';
import RefreshIndicator from 'material-ui/RefreshIndicator';


import PersonCard from '../PersonCard/PersonCard';
import PersonList from '../PersonList/PersonList';

const Buttons = styled.div`
  padding-top: 5px;
`;

const Wrapper = styled.div`
  background: #EEEEEE;
  padding-bottom: 5px;
`;

class Persons extends Component{

  state = {
    isShowCards: true,
    isShowList: false,
    name: 'Cards',
    primaryCards: true,
    primaryList: false
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
    const {isShowCards,isShowList,primaryList,primaryCards} = this.state;
    if(isShowCards){
      this.setState({
        isShowCards: !isShowCards,
        isShowList: !isShowList,
        name: 'List',
        primaryList: !primaryList,
        primaryCards: !primaryCards
      })
    }
  };

  toggleList = () => {
    const {isShowCards,isShowList,primaryList,primaryCards} = this.state;
    if(isShowList){
      this.setState({
        isShowCards: !isShowCards,
        isShowList: !isShowList,
        name: 'Cards',
        primaryCards: !primaryCards,
        primaryList: !primaryList
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
      flexWrap: 'wrap',
    };
    const refresh = {
        position: 'relative',
        marginLeft: 'calc(50% - 20px)',
        marginTop: 10,
        marginBottom: 10,
      };

    return(
        <Wrapper>
          <Buttons>
            <RaisedButton onClick={this.toggleCards} label='Show List' primary={this.state.primaryList}/>
            <RaisedButton onClick={this.toggleList} label='Show Cards' primary={this.state.primaryCards}/>
          </Buttons>
          <Subheader>Persons {this.state.name}</Subheader>
          <Card style={styleCard}>{personCards}</Card>
          <Card><List>{personLists}</List></Card>
          <RefreshIndicator size={40} top={0} left={0} status="loading" style={refresh}/>
        </Wrapper>
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
