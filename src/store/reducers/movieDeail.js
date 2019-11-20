
export default (state = {},action) => {
    switch(action.type){
        case "addDetail":
            return {...action.payload}
        default:
            return state
    }
}