export default function reducer(
  state = {
    index: 0
  },
  action = {type: null, payload: 0}) {
  if (action.type === 'SWIPE') {
    return {
      ...state,
      index: action.payload
    }
  }
  return {...state}
}