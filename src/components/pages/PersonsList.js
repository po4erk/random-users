import React, { Component } from 'react';
import {connect} from 'react-redux';
import getPersons from '../../actions/PersonActions';
import {bindActionCreators} from 'redux';


import PersonCard from './PersonCard';

class PersonsList extends Component{

  componentDidMount(){
    this.props.getPersons();
    document.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    document.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const {getPersons, persons} = this.props;
    let x = document.body.scrollHeight - 898;
    if( window.pageYOffset > x){
      getPersons(persons);
    }
  }

  render(){
    const list = this.props.persons.map((persons,index) => {
      return(
          <PersonCard key={index} id={index} data={persons}/>
      )
    });

    return(
        <div className="peopleListWrapper">
          <div className="peopleList">{list}</div>
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
    getPersons:getPersons
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonsList);
