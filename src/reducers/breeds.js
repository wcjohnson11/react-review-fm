export default function breedsReducer(state = [], action) {
    // return Object.assign({}, state, { breeds: action.paylaod })
    if (action.type === "SET_BREEDS") {
        return action.payload;
    } else {
        return state;
    }
}
