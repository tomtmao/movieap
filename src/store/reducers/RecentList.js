let defaultState = []

export default (state=defaultState,action)=>{
    switch (action.type) {
        case "MOST_EXPECTED_LIST":
            return [...action.payload]
        default:
            return [...state]
    }
}