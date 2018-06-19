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
    }
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
    case "FETCH_FILE": {
      return {
        openFiles: {
          ...state.openFiles
        },
        loadedFiles: {
          ...state.loadedFiles
        },
        status: {
          ...state.status,
          fetching: true
        }
      };
    }
    case "FETCH_FILE_REJECTED": {
      return {
        openFiles: {
          ...state.openFiles
        },
        loadedFiles: {
          ...state.loadedFiles
        },
        status: {
          ...state.status,
          fetching: false,
          error: action.payload
        }
      }
    }
    case "FETCH_FILE_FULFILLED": {
      return {
        openFiles: {
          ...state.openFiles,
          [action.payload.id]: {
            title: action.payload.title,
            id: action.payload.id,
          },
        },
        loadedFiles: {
          ...state.loadedFiles,
          [action.payload.id]: action.payload,
        },
        status: {
          ...state.status,
          fetching: false,
          fetched: true,
        },
        // files: action.payload.files,
        // name: action.payload.name,
      };
    }
  }
  return {...state};
}
