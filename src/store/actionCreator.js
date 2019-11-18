import { getHot ,mostExpected,getMoveDay} from "../api"

const actionCreator = (type, payload) => ({ type, payload })

export const addHot = params => dispatch => {
      getHot()
        .then(res => {
            dispatch(actionCreator("addHot", res.stids))
        })
}

export const imgLists = params => dispatch => {
    mostExpected()//调用api下面的方法开始发送请求
        .then(res => {
            console.log(res)
            dispatch(actionCreator("MOST_EXPECTED", res))
        })
        .catch(err=>{
            console.log(err)
        })
}

export const gtMovieDay=params=>dispatch=>{
    getMoveDay(params)
    .then(res=>{
        // console.log(res)
        dispatch(actionCreator("MovieDay",res.data))
    })
}