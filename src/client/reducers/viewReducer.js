export default function reducer(
  state = {
    index: 0,
    modals: {
      post: false,
      upload: false,
    },
  },
  action = {type: null, payload: 0}) {
  if (action.type === 'SWIPE') {
    return {
      ...state,
      index: action.payload
    }
  }
  else if(action.type === 'TOGGLE_MODAL') {
    return {
      ...state,
      modals: {
        ...state.modals,
        [action.payload]: !state.modals[action.payload]
      }
    }
  }
  return {...state}
}