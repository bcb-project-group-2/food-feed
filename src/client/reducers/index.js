import { combineReducers } from 'redux';

import view from './viewReducer';
import user from './userReducer';
import post from './postReducer';


// export default userReducer
export default combineReducers({
  view,
  user,
  post,
})