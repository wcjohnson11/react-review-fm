export default function breedReducer(state, action) {
  // return Object.assign({}, state, { breed: action.paylaod })
  if (action.type === "SET_BREED") {
    return action.payload;
  } else if (action.type === "SET_ANMIAL") {
      return "";
  } else {
    return state;
  }
}
