import React, {Component} from 'react';
import PersonDetails from './PersonDetails';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {Card} from 'material-ui/Card';

class PersonCard extends Component{
  render(){
    const {picture,name} = this.props.data;
    const styleHeader = {
      textTransform: 'capitalize'
    };
    const styleItem = {
      maxWidth: 600,
      margin: 'auto'
    }
    return(
      <Card>
      <ListItem  style={styleItem} leftAvatar={<Avatar src={picture.large} size={115}/>}>
        <div>
          <h2 style={styleHeader}>{name.first} {name.last}</h2>
          <PersonDetails details={this.props.data}/>
        </div>
      </ListItem>
      </Card>
    )
  }
}
export default PersonCard;
