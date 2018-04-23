import React, {Component} from 'react';
import styled from 'styled-components';
import PersonDetails from '../PersonDetails/PersonDetails';

import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {Card} from 'material-ui/Card';

const Header = styled.h2`
  text-transform: capitalize;
`;

class PersonCard extends Component{
  render(){
    const styleItem = {
      maxWidth: 700,
      height: 130,
      margin: 'auto',
    }
    const {picture,name} = this.props.data;
    return(
      <Card>
        <ListItem style={styleItem} leftAvatar={<Avatar src={picture.large} size={115}/>}>
            <Header>{name.first} {name.last}</Header>
            <PersonDetails details={this.props.data}/>
        </ListItem>
      </Card>
    )
  }
}
export default PersonCard;
