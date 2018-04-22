import React, {Component} from 'react';
import styled from 'styled-components';
import PersonDetails from '../PersonDetails/PersonDetails';

import {CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 160px;
  width: 100%;
  background: white;
  padding-top: 30px;
`;
const Header = styled.h2`
  padding-top: 20px;
  text-transform: capitalize;
`;


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
    const stylePaper = {
      width: 250,
      margin: 10,
      padding: 20,
      textAlign: 'center',
      display: 'inline-block',
      position: 'relative'
    };
    const styleAvatar = {
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'
    };
    const {picture,name} = this.props.data;
    const aboutPerson = this.state.isOpen && <Details><PersonDetails details={this.props.data}/></Details>
    return(
        <Paper style={stylePaper} zDepth={2}>
          <Avatar style={styleAvatar} src={picture.large} size={120}/>
          <Header>{name.first} {name.last}</Header>
          <CardActions><FlatButton onClick={this.handleClick} label='Show More' primary={true}/></CardActions>
          <CardText>{aboutPerson}</CardText>
        </Paper>
    )
  }
}
export default PersonCard;
