import React, {Component} from 'react';
import PersonDetails from './PersonDetails'
import './style.css'

class PersonCard extends Component{
  state = {
    isOpen: false
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    const {picture,name} = this.props.data;
    const aboutPerson = this.state.isOpen && <PersonDetails details={this.props.data}/>
    
    return(
      <div className="person">
        <hr/>
        <img className="picture" src={picture.large} alt={'photos'}/>
        <h2 className="name">{name.first} {name.last}</h2>
        <button onClick={this.handleClick}>Show More</button>
        {aboutPerson}
        <hr/>
      </div>
    )
  }
}
export default PersonCard;
