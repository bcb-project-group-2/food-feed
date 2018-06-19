export default function reducer(
  state = {
    status: {
      fetching: false,
      fetched: false,
      error: null,
    },
    allMoods: null,
    moodPosts: {},
    likes: []
  },
  action = {type: null}) {
  switch (action.type) {
    case "FETCH_MOODS": {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: true,
          error: false,
        }
      }
    }
    case "FETCH_MOODS_FAILED": {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: false,
          error: true,
        }
      }
    }
    case "FETCH_MOODS_SUCCESS": {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: false,
          fetched: true,
          error: false,
        },
        allMoods: action.payload
      }
    }
    case "FETCH_POSTS_BY_MOOD": {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: true,
          error: false,
        }
      }
    }
    case "FETCH_POSTS_BY_MOOD_FAILED": {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: false,
          error: true,
        }
      }
    }
    case "FETCH_POSTS_BY_MOOD_SUCCESS": {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: false,
          fetched: true,
          error: false,
        },
        moodPosts: {
          ...state.moodPosts,
          ...action.payload,
        }
      }
    }
    case "STORE_LIKES": {
      return {
        ...state,
        likes: action.payload
      }
    }
  }
  return {...state};
}
