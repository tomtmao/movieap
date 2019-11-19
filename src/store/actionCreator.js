import { getHot, mostExpected, comingList, searchMsg } from "../api"


const actionCreator = (type, payload) => ({ type, payload })

export const addHot = params => dispatch => {
    getHot()
        .then(res => {
            dispatch(actionCreator("addHot", res.stids))
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

//电影查询
export const searchMovie =(params)=>dispatch=>{
    searchMsg(params).then(val=>{
       // console.log(val.data.movies.list,'进入了searchMovie')
       let data = {...val.data.movies}
    //    val.data.movies = val.data.movies.map(item => item.img = item.img.replace("w.h","120.100"))
       console.log(data.list,"1234")
       let action = {
        type:'GET_MOVIE_LIST',
        payload:data.list
        }
        dispatch(action)

        // let action = {
        //     type:'GET_MOVIE_LIST',
        //     payload:val.data.movies.list
        // }
        // dispatch(action)
       
    })
}


