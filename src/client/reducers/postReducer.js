export default function reducer(
  state = {
    status: {
      fetching: false,
      fetched: false,
      error: null,
    },
    allMoods: null,
    moodPosts: {}
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
