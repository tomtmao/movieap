let defaultState = []

export default (state=defaultState,action)=>{
    switch(action.type){
        case "addCommets":
            return [...action.payload]
        default:
            return [...state]
    }
    
}