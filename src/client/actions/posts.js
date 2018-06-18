import axios from 'axios'

export function getMoods() {
  return function(dispatch) {
    dispatch({type: 'FETCH_MOODS'});
    axios.get('/api/discover/moods')
      .then(res => {
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
  return function(dispatch) {
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