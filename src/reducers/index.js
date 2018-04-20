import {combineReducers} from 'redux';
import {peopleReducers} from './peopleReducers';


export default combineReducers({
  people: peopleReducers,
})
