
import { getHot} from "../api"

const actionCreator = (type, payload) => ({ type, payload })

export const addHot = params => dispatch => {
      getHot()
        .then(res => {
            dispatch(actionCreator("addHot", res.stids))
        })
}