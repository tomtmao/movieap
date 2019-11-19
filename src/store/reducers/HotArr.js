const defaultState = []
export default (state = defaultState, action) => {
    switch (action.type) {
        case "addHot":
            return [...action.payload]
        default:
            return [...state]
    }
}