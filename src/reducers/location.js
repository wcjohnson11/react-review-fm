export default function locationReducer(state, action) {
    // return Object.assign({}, state, { location: action.paylaod })
    if (action.type === "SET_LOCATION") {
        return action.payload;
    } else {
        return state;
    }
}