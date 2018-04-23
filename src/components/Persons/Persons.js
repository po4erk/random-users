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

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import ListUl from '@fortawesome/fontawesome-free-solid/faListUl';
import AddressCard from '@fortawesome/fontawesome-free-solid/faAddressCard';
import Paper from 'material-ui/Paper';
import ArrowUp from '@fortawesome/fontawesome-free-solid/faArrowUp';

const Buttons = styled.div`
  padding-top: 5px;
  padding-left: 5px;
  position: fixed;
  width: 230px;
  left: calc(100% - 240px);
  z-index: 3
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
    this.scroll.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount(){
    this.scroll.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
      const {getPersons, persons} = this.props;
      if (
        this.scroll.scrollHeight === this.scroll.scrollTop + this.scroll.offsetHeight
      ) {
        this.scrolles.style.height = 300 + this.scrolles.scrollHeight + "px";
        getPersons(persons);
      }
  };

  handleUp = () => {
      let up = setInterval(()=>{
        if(this.scroll.scrollTop !== 0){
          this.scroll.scrollTop = this.scroll.scrollTop-1;
          this.handleUp();
        }else{
          clearInterval(up);
        }
      },0);
  }

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
      personsLists = persons.map((persons,index) => <List key={index}><PersonList data={persons}/></List>),
      personCards = this.state.isShowCards && <div className="personsCards">{personsCards}</div>,
      personLists = this.state.isShowList && <div className="personsList">{personsLists}</div>;
    const styleCard = {
      textAlign: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 1280,
      margin: 'auto'
    };
    const refresh = {
      position: 'relative',
      marginLeft: 'calc(50% - 20px)',
      marginTop: 10,
      marginBottom: 10,
    };
    const wrapper = {
      background: '#EEEEEE',
      paddingBottom: 5,
      overflowY: "scroll",
      height: '100vh'
    };
    const up = {
      width: 40,
      height: 40,
      paddingTop: 10,
      background: '#5E35B1',
      position: 'fixed',
      top: 80,
      left: 5,
      cursor: 'pointer'
    };

    return(
        <div ref={div => (this.scroll = div)} style={wrapper}>
          <div ref={el => (this.scrolles = el)}>
            <Buttons>
              <RaisedButton onClick={this.toggleCards} primary={this.state.primaryList}>
                <FontAwesomeIcon icon={ListUl}/>
              </RaisedButton>
              <RaisedButton onClick={this.toggleList} primary={this.state.primaryCards}>
                <FontAwesomeIcon icon={AddressCard}/>
              </RaisedButton>
            </Buttons>
            <Subheader>Persons {this.state.name}</Subheader>
            <Card style={styleCard}>{personCards}</Card>
            <Card>{personLists}</Card>
            <RefreshIndicator size={40} top={0} left={0} status="loading" style={refresh}/>

            <Paper onClick={this.handleUp} style={up} zDepth={1} circle={true}>
              <FontAwesomeIcon icon={ArrowUp}/>
            </Paper>
          </div>
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
