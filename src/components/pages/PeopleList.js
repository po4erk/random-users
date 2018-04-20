import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import getPeople from '../../actions/PeopleActions';
import {bindActionCreators} from 'redux';


import PersonCard from './PersonCard';

class PeopleList extends Component{
 
  componentDidMount(){
    this.props.getPeople();
    const list = ReactDOM.findDOMNode(this.refs.list)
    list.addEventListener('scroll', this.handleScroll);
  }

  handleClick = () => {
    const {getPeople, people} = this.props;
    getPeople(people);
  }
  handleScroll(e){
    alert('scrolling')
  }


  

  render(){
    console.log(this.props.people);
    const button = <button onClick={this.handleClick}>Load More</button>
    const list = this.props.people.map((peopleArr,index) => {
      return(
          <PersonCard key={index} id={index} data={peopleArr}/>
      )
    });

    return(
        <div ref='list' id="peopleListWrapper">
          {list.length?
            <div>
              <div id="peopleList">{list}</div>
              <div id="peopleButton">{button}</div>
            </div>
            :'loading data'}
        </div>
    )
  }
}
function mapStateToProps(state){
  return{
    people: state.people.people
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getPeople:getPeople
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
