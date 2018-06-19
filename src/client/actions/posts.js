import axios from 'axios'

export function getMoods() {
  return function (dispatch) {
    dispatch({type: 'FETCH_MOODS'});
    axios.get('/api/discover/moods')
      .then(res => {
        console.log('MOODS', res.data);
        dispatch({
          type: 'FETCH_MOODS_SUCCESS',
          payload: res.data.map(mood => mood.category)
        })
      })
      .catch(err => {
        dispatch({type: 'FETCH_MOODS_FAILED', payload: err})
      })
  }
}

export function getPostsByMood(mood, offset) {
  return function (dispatch) {
    dispatch({type: 'FETCH_POSTS_BY_MOOD'});
    axios.get(`/api/discover/${mood}/${offset}`)
      .then(res => {
        dispatch({
          type: 'FETCH_POSTS_BY_MOOD_SUCCESS',
          payload: {[mood]: res.data}
        })
      })
      .catch(err => {
        dispatch({type: 'FETCH_POSTS_BY_MOOD_FAILED', payload: err})
      })
  }
}

export function getUserCreatedPosts(id) {
  return function (dispatch) {
    axios.get(`/api/users/posts/${id}`)
      .then(res => {
        console.log('HERE', res.data);
        dispatch({type: 'STORE_USER_POSTS', payload: res.data})
      })
  }
}

export function getLikesByPost() {
  return function (dispatch) {
    axios.get('/api/likes/posts').then(res => {
      dispatch({type: 'STORE_LIKES', payload: res.data})
    })
      .catch(err => console.log(err))
  }
}

export function getLikesByUser(id) {
  return function (dispatch) {
    axios.get(`/api/likes/user/${id}`).then(res => {
      dispatch({type: 'STORE_USER_LIKES', payload: res.data})
    })
      .catch(err => console.log(err))
  }
}


export function likePost(UserId, PostId, add) {
  return function (dispatch) {
    if (add) {
      axios.post(
        '/api/likes/add',
        {UserId, PostId}
      ).then(res => {
      })
        .catch(err => console.log(err))
    }
    else {
      axios.delete(`/api/likes/del/${UserId}/${PostId}`)
        .then(res => console.log(res))
        .catch(e => console.log(e));
    }
  }
}
