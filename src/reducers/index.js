import { combineReducers } from 'redux'
import user from './userReducer'
import transfer from './transferReducer'

export default combineReducers({
  user,
  transfer
})
