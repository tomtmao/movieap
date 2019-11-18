let defaultState = []

export default (state=defaultState,action)=>{
    // console.log(action.payload)
    switch (action.type) {
        case "MOST_EXPECTED":
            return [...action.payload]
        default:
            return [...state]
    }
}