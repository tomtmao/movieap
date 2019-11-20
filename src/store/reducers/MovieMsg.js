let defaultStatus = {}
const mmsg = (state = defaultStatus, action) => {
    switch (action.type) {
        case "movieMsg":
            return {...action.payload}
        default:
            return {...state}
    }
}

export default mmsg