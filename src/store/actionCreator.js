import { getHot} from "../api"
import { mostExpected ,comingList} from "../api/index"

const actionCreator = (type, payload) => ({ type, payload })

//正在热映
export const addHot = params => dispatch => {
      getHot(params)
        .then(res => {
            console.log(params,"sakdxk")
            res.data.movieList = res.data.movieList.map(item => {
                item.img=item.img.replace('w.h', '300.240')
                return item
            })
            dispatch(actionCreator("addHot", res.data.movieList))
        })
}

//最受欢迎电影
export const imgLists = params => dispatch => {
    mostExpected()//调用api下面的方法开始发送请求
        .then(res => {
            res.data.coming = res.data.coming.map(item => {
                item.img=item.img.replace('w.h', '300.240')
                return item
            })
            dispatch(actionCreator("MOST_EXPECTED", res.data.coming))
        })
        .catch(err=>{
            console.log(err)
        })
}

//即将上映电影
export const imgComingLists = params => dispatch => {
    comingList()//调用api下面的方法开始发送请求
        .then(res => {
            console.log(res)
            // res.data.coming = res.data.coming.map(item => {
            //     item.img=item.img.replace('w.h', '300.240')
            //     return item
            // })
            dispatch(actionCreator("MOST_EXPECTED", res.data.coming))
        })
        .catch(err=>{
            console.log(err)
        })
}

