import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    font-size: 14px;
    padding: 10px;
`;

const PersonDetails = (props) => {
    const {email,dob,location,cell} = props.details;
    return(
        <Item>
            <p><b>Email:</b> {email}</p>
            <p><b>Birthday:</b> {dob}</p>
            <p><b>Address:</b> {location.city} {location.street}</p>
            <p><b>Phone:</b> {cell}</p>
        </Item>
    );
}

export default PersonDetails;