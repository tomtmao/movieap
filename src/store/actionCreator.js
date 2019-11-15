import { mostExpected } from "../api/index"
const actionCreator = (type, payload) => ({ type, payload })

export const imgLists = params => dispatch => {
    console.log(999)
    mostExpected()//调用api下面的方法开始发送请求
        .then(res => {
            console.log(res)
            dispatch(actionCreator("MOST_EXPECTED", res))
        })
        .catch(err=>{
            console.log(err)
        })
}

