import React, {Component} from 'react';
import PersonDetails from './PersonDetails';
import {CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

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
    const stylePaper = {
      height: '90%',
      width: 250,
      margin: 10,
      padding: 20,
      textAlign: 'center',
      display: 'inline-block'
    };
    const styleHeader = {
      textTransform: 'capitalize'
    };
    const styleAvatar = {
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'
    };
    
    return(
        <Paper style={stylePaper} zDepth={2}>
          <Avatar style={styleAvatar} src={picture.large} size={120}/>
          <h2 style={styleHeader}>{name.first} {name.last}</h2>
          <CardActions><FlatButton onClick={this.handleClick} label='Show More' primary={true}/></CardActions>
          <CardText>{aboutPerson}</CardText>
        </Paper>
    )
  }
}
export default PersonCard;
