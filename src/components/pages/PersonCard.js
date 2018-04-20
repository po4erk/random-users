import React, {Component} from 'react';
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
    const {picture,name,email,dob,location,cell} = this.props.data;
    const aboutPerson = this.state.isOpen && 
    <div>
      <p><b>Email:</b> {email}</p>
      <p><b>Birthday:</b> {dob}</p>
      <p><b>Address:</b> {location.city} {location.street}</p>
      <p><b>Phone:</b> {cell}</p>
    </div>
    return(
      <div className="person">
        <hr/>
        <div className="picture"><img src={picture.large} alt={'photos'}/></div>
        <h2 className="name">{name.first} {name.last}</h2>
        <button onClick={this.handleClick}>Show More</button>
        {aboutPerson}
        <hr/>
      </div>
    )
  }
}
export default PersonCard;
