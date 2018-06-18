import { combineReducers } from 'redux';

import view from './viewReducer';
import user from './userReducer';


// export default userReducer
export default combineReducers({
  view,
  user,
})