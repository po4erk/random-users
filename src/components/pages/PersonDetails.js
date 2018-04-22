import React from 'react';

const PersonDetails = (props) => {
    const {email,dob,location,cell} = props.details;
    const styleItem = {
        fontSize: '14px',
        padding: '10px',
      };
    return(
        <div style={styleItem}>
            <p><b>Email:</b> {email}</p>
            <p><b>Birthday:</b> {dob}</p>
            <p><b>Address:</b> {location.city} {location.street}</p>
            <p><b>Phone:</b> {cell}</p>
        </div>
    );
}

export default PersonDetails;