import React, {Component} from 'react';
import PersonDetails from './PersonDetails'
import './style.css'

class PersonCard extends Component{
  render(){
    const {picture,name} = this.props.data;
    return(
      <div className="personCard">
        <img className="picture" src={picture.large} alt={'photos'}/>
        <h2 className="name">{name.first} {name.last}</h2>
        <PersonDetails details={this.props.data}/>
      </div>
    )
  }
}
export default PersonCard;
