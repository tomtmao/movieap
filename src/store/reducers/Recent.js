let defaultState = [{id:"",img:"",wish:"",nm:"",comingTitle:"",}]

export default (state=defaultState,action)=>{
    switch (action.type) {
        case "MOST_EXPECTED":
            return [...action.payload]
        default:
            return [...state]
    }
}