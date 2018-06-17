export default function reducer(
  state = {
    open: {}
  },
  action = {type: null, payload: 0}) {
  if (action.type === 'SELECT_OPEN') {
    return {
      ...state,
      open: action.payload,
    }
  }
  return {...state}
}
