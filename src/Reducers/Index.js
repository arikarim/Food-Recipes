import { combineReducers } from 'redux';
import recipieReducer from './RecipiReducer'

export default combineReducers({
  Items: recipieReducer
})