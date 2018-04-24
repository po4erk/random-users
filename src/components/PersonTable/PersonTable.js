import React from 'react';

import {
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

const PersonTable = (props) => {
    const {name,email,dob,location,cell} = props.data;
    const title = {
        textTransform: 'capitalize'
    }
    return(
        <TableRow>
            <TableRowColumn style={title}><b>{name.first} {name.last}</b></TableRowColumn>
            <TableRowColumn>{email}</TableRowColumn>
            <TableRowColumn>{dob}</TableRowColumn>
            <TableRowColumn>{location.city} {location.street}</TableRowColumn>
            <TableRowColumn>{cell}</TableRowColumn>
        </TableRow>
    );
}

export default PersonTable;