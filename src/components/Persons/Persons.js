import React, { Component } from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';
import getPersons from '../../actions/PersonActions';
import {bindActionCreators} from 'redux';

import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Card from 'material-ui/Card';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Paper from 'material-ui/Paper';
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow} from 'material-ui/Table';

import PersonCard from '../PersonCard/PersonCard';
import PersonList from '../PersonList/PersonList';
import PersonTable from '../PersonTable/PersonTable';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import ListUl from '@fortawesome/fontawesome-free-solid/faListUl';
import AddressCard from '@fortawesome/fontawesome-free-solid/faAddressCard';
import ArrowUp from '@fortawesome/fontawesome-free-solid/faArrowUp';
import TableFa from '@fortawesome/fontawesome-free-solid/faTable';


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
    isShowCards: false,
    isShowList: true,
    isShowTable: false,
    name: 'Cards',
    primaryCards: true,
    primaryList: false,
    primaryTable: false
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
      if(this.scroll.scrollHeight === this.scroll.scrollTop + this.scroll.offsetHeight){
        this.scrolles.style.height = this.scrolles.scrollHeight + "px";
        getPersons(persons);
      }
  };

  handleUp = () => {
      setTimeout(()=>{
        let speed = 50;
        if(this.scroll.scrollTop !== 0){
          this.scroll.scrollTop = this.scroll.scrollTop-speed;
          this.handleUp();
        }
      },0);
  }

  showCards = () => {
    const {isShowCards} = this.state;
    if(!isShowCards){
      this.setState({
        isShowCards: true,
        isShowList: false,
        isShowTable: false,
        name: 'List',
        primaryList: true,
        primaryCards: false,
        primaryTable: false
      })
    }
  };

  showList = () => {
    const {isShowList} = this.state;
    if(!isShowList){
      this.setState({
        isShowCards: false,
        isShowList: true,
        isShowTable: false,
        name: 'Cards',
        primaryList: false,
        primaryCards: true,
        primaryTable: false
      })
    }
  };

  showTable = () => {
    const {isShowTable} = this.state;
    if(!isShowTable){
      this.setState({
        isShowCards: false,
        isShowList: false,
        isShowTable: true,
        name: 'Table',
        primaryList: false,
        primaryCards: false,
        primaryTable: true
      })
    }
  };

  render(){
    const {persons} = this.props,
      personsCards = persons.map((persons,index) => <PersonCard key={index} data={persons}/>),
      personsLists = persons.map((persons,index) => <List key={index}><PersonList data={persons}/></List>),
      personsTable = persons.map((persons,index) => <PersonTable key={index} data={persons}/>),
      personCards = this.state.isShowList && <div className="personsCards">{personsCards}</div>,
      personLists = this.state.isShowCards && <div className="personsList">{personsLists}</div>,
      personTable = this.state.isShowTable && 
      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Email</TableHeaderColumn>
                <TableHeaderColumn>Birthday</TableHeaderColumn>
                <TableHeaderColumn>Address</TableHeaderColumn>
                <TableHeaderColumn>Phone</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>{personsTable}</TableBody>
      </Table>;
    const styleCard = {
      textAlign: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 1280,
      margin: 'auto'
    };
    const styleTable = {
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
      height: '92vh'
    };
    const up = {
      width: 40,
      height: 40,
      paddingTop: 10,
      background: '#43B8D2',
      position: 'fixed',
      top: 80,
      left: 5,
      cursor: 'pointer'
    };

    return(
        <div ref={div => (this.scroll = div)} style={wrapper}>
          <div ref={el => (this.scrolles = el)}>
            <Buttons>
              <RaisedButton onClick={this.showCards} primary={this.state.primaryList}>
                <FontAwesomeIcon icon={ListUl}/>
              </RaisedButton>
              <RaisedButton onClick={this.showList} primary={this.state.primaryCards}>
                <FontAwesomeIcon icon={AddressCard}/>
              </RaisedButton>
              <RaisedButton onClick={this.showTable} primary={this.state.primaryTable}>
                <FontAwesomeIcon icon={TableFa}/>
              </RaisedButton>
            </Buttons>
            <Subheader>Persons {this.state.name}</Subheader>

            <Card style={styleCard}>{personCards}</Card>
            <Card>{personLists}</Card>
            <Card style={styleTable}>{personTable}</Card>

            <Paper onClick={this.handleUp} style={up} zDepth={1} circle={true}>
              <FontAwesomeIcon icon={ArrowUp}/>
            </Paper>
            <RefreshIndicator size={40} top={0} left={0} status="loading" style={refresh}/>
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
