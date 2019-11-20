let defaultStatus = {}
const md = (state = defaultStatus, action) => {
    switch (action.type) {
        case "MovieDay":
            return {...action.payload}
        default:
            return {...state}
    }
}

export default md