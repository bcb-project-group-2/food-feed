import axios from 'axios';

export function authenticateUser(email, pass) {
  return function (dispatch) {
    dispatch({type: 'AUTHENTICATE_USER', payload: null});
    axios.get(`/api/users/login/${email}/${pass}`)
      .then(res => {
        localStorage.id = res.data.id;
        dispatch({type: 'AUTHENTICATE_USER_SUCCESS', payload: res.data})
      })
      .catch(err => {
        dispatch({type: 'AUTHENTICATE_USER_FAILED', payload: err})
      })
  }
}

export function getUserPosts(email, pass) {
  return function (dispatch) {
    dispatch({type: 'AUTHENTICATE_USER', payload: null});
    axios.get(`/api/users/login/${email}/${pass}`)
      .then(res => {
        if (!res.data) {
          dispatch({type: 'AUTHENTICATE_USER_FAILED', payload: 'no user in db'})
        }
        else {
          localStorage.id = res.data.id;
          dispatch({type: 'AUTHENTICATE_USER_SUCCESS', payload: res.data})
        }
      })
      .catch(err => {
        dispatch({type: 'AUTHENTICATE_USER_FAILED', payload: err})
      })
  }
}

export function createUser(email, username, pass, img) {
  return function (dispatch) {
    dispatch({type: 'AUTHENTICATE_USER', payload: null});
    axios.post(
      `/api/users`,
      {
        user_email: email,
        user_name: username,
        profile_picture: img,
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
