const defaultState = {}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_MVROOM_LIST':
            // console.log(action.payload,1111);
            let result = action.payload?action.payload:{}
            return result
        default:
            return state
    }
}