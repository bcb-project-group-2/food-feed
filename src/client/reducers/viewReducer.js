export default function reducer(
  state = {
    index: 0,
    modalOpen: false,
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
      modalOpen: !state.modalOpen
    }
  }
  return {...state}
}