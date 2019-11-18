const defaultState = ''
export default (state = defaultState, action) => {
    switch (action.type) {
        case "SET_CINEMA":
            return action.payload
        default:
            return state
    }
}