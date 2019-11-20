const defaultState = []//设置默认状态
export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_MOVIE_LIST":
            let result = action.payload?action.payload:state
            return result
        default:
            return state;
    }

}