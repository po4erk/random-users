import {combineReducers} from 'redux';
import {personReducers} from './personReducers';


export default combineReducers({
  persons: personReducers,
})
