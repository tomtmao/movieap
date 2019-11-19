const defaultState = []
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_CINEMAS_LIST':
            return {...action.payload}
        default:
            return {...state}
    }
}