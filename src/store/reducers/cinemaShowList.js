const defaultState = []
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_CINEMAS_SHOW_LIST':
            let result = action.payload?action.payload:[]
            return result
        default:
            return state
    }
}