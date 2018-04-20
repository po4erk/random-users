import { combineReducers } from 'redux';
import UsersReducers from './users';
import ActiveUser from './user-active';

const allReducers = combineReducers({
    users: UsersReducers,
    active: ActiveUser
});

export default allReducers;