import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../../actions/index';
import Details from '../UserDetails/UserDetails';
import './style.css';

class UserCards extends Component {
    showUsers(){
        return this.props.users.map((user)=>{
            return(
                <div key={user.id} className = 'users_cards'>
                    <img src={user.photo} alt={'img'}></img>
                    <h3>Name: {user.firstname}</h3>
                    <button onClick={()=> this.props.select(user)}>Show More</button>
                </div>
            );
        })
    }
    render(){
        return(
            <div>
                <div className = 'users_wrapper'>
                    {this.showUsers()}
                </div>
                <Details />
            </div>
        );
    }
};

const mapStateToProprs = ( state ) => {
    return {
        users: state.users,
    };
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProprs,matchDispatchToProps)(UserCards);