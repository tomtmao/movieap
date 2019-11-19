import { getHot, mostExpected, comingList, searchMsg, getComment,getDetail} from "../api"


const actionCreator = (type, payload) => ({ type, payload })

//正在热映
export const addHot = params => dispatch => {
      getHot(params)
        .then(res => {
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
                item.img = item.img.replace('w.h', '300.240')
                return item
            })
            dispatch(actionCreator("MOST_EXPECTED", res.data.coming))
        })
        .catch(err => {
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
        .catch(err => {
            console.log(err)
        })
}

//影院查询
export const searchCinema = (params) => dispatch => {
    searchMsg(params).then(val=>{
        //let data = JSON.parse(JSON.stringify(val.data.cinemas)) 
        let data = {...val.data.cinemas}
        dispatch(actionCreator('GET_CINEMAS_LIST',data.list))

       
    })
}



//获取评论
export const getComments = params => dispatch => {
    getComment(params)
      .then(res => {
        //   console.log(res.data.data.hotComments)
          dispatch(actionCreator("addCommets", res.data.data.hotComments))
      })
}

//获取电影详情页
export const getDeatil = (params) => dispatch => {
    getDetail(params).then(res=>{
        console.log(res.data.detailMovie,"123448")
        dispatch(actionCreator('addDetail',res.data.detailMovie))
    })
}
