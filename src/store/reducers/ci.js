let defaultState = 1

export default (state=defaultState,action)=>{
    switch(action.type){
        case "CHANGE_CI":
            return action.payload
        default:
            return state
    }
    
}