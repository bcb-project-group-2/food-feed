import axios from 'axios';

export function authenticateUser(email, pass) {
  return function (dispatch) {
    dispatch({type: 'AUTHENTICATE_USER', payload: null});
    axios.get(`/api/users/login/${email}/${pass}`)
      .then(res => {
        console.log(res.data);
        dispatch({type: 'AUTHENTICATE_USER_SUCCESS', payload: res.data})
      })
      .catch(err => {
        dispatch({type: 'AUTHENTICATE_USER_FAILED', payload: err})
      })
  }
}

export function createUser(email, username, pass) {
  return function (dispatch) {
    dispatch({type: 'AUTHENTICATE_USER', payload: null});
    axios.post(
      `/api/users`,
      {
        user_email: email,
        user_name: username,
        password: pass,
      }
      )
      .then(res => {
        console.log(res.data);
        dispatch({type: 'AUTHENTICATE_USER_SUCCESS', payload: res.data})
      })
      .catch(err => {
        dispatch({type: 'AUTHENTICATE_USER_FAILED', payload: err})
      })
  }
}
