export default function reducer(
  state = {
    status: {
      fetching: false,
      fetched: false,
      error: null,
    },
    currentUser: {
      posts: [],
      likes: [],
    },
    notMe: null
  },
  action = {type: null}) {
  switch (action.type) {
    case "AUTHENTICATE_USER": {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: true,
          error: false,
        }
      }
    }
    case "AUTHENTICATE_USER_FAILED": {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: false,
          error: true,
        }
      }
    }
    case "AUTHENTICATE_USER_SUCCESS": {
      localStorage.id = action.payload.id;
      return {
        ...state,
        status: {
          ...state.status,
          fetching: false,
          fetched: true,
          error: false,
        },
        currentUser: {
          ...state.currentUser,
          ...action.payload,
        }
      }
    }
    case "STORE_USER_POSTS": {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          posts: [...action.payload],
        }
      }
    }
    case "STORE_USER_LIKES": {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          likes: action.payload
        }
      }
    }
    case "NOT_ME": {
      return {
        ...state,
        notMe: action.payload
      }
    }
  }
  return {...state};
}
