import React, { Component } from 'react';
import {connect} from 'react-redux';
import './style.css';

class Details extends Component{
    render(){
        return(
            <div className='user_details'>
                <h3>Surname: {this.props.user.lastname}</h3>
                <p>Mail: {this.props.user.mail}</p>
                <p>Birthday: {this.props.user.birthday}</p>
                <p>Address: {this.props.user.address}</p>
                <p>Phone: {this.props.user.phone}</p>
            </div>  
        )
    }
}

const mapStateToProprs = ( state ) => {
    return {
        user: state.active,
    };
}

export default connect(mapStateToProprs)(Details);
