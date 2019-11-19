let defaultState = []

export default (state=defaultState,action)=>{
    switch (action.type) {
        case "MOST_EXPECTED":
            return [...action.payload]
        default:
            return [...state]
    }
}