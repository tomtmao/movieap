const defaultState = ''
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'CHECK_MOVIE_ID':
            return action.payload
        default:
            return state
    }
}