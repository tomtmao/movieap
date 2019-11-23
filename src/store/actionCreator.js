import { getComment,getDetail,getHot ,
    mostExpected,getMoveDay, comingList, 
    searchMsg,getCinemaByCityId,getMovieMsg,
    mvRooms} from "../api"


const actionCreator = (type, payload) => ({ type, payload })

//正在热映
export const addHot = params => dispatch => {
    getHot(params)
        .then(res => {
            res.data.movieList = res.data.movieList.map(item => {
                item.img = item.img.replace('w.h', '300.240')
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
            //console.log(err)
        })
}
//影院列表
export const gtMovieDay=params=>dispatch=>{
    getMoveDay(params)
    .then(res=>{
        // console.log(res)
        dispatch(actionCreator("MovieDay",res.data))
    })
}
//即将上映电影
export const imgComingLists = params => dispatch => {
    comingList(params)//调用api下面的方法开始发送请求
        .then(res => {
            res.data.coming = res.data.coming.map(item => {
                item.img=item.img.replace('w.h', '300.240')
                return item
            })
            dispatch(actionCreator("MOST_EXPECTED_LIST", res.data.coming))
        })
        .catch(err=>{
            // console.log(err)
        })
}

//影院查询
export const searchCinema = (params) => dispatch => {
    searchMsg(params).then(val => {
        //let data = JSON.parse(JSON.stringify(val.data.cinemas)) 
        let data = {...val.data.cinemas}
        dispatch(actionCreator('GET_CINEMAS_LIST',data.list))
    })
}

//影院详情(获取该影院上映的电影)
export const movieRoom = (params) => dispatch => {
    mvRooms(params).then(val=>{
        dispatch(actionCreator('GET_MVROOM_LIST',val.data))
    })
}

//电影查询
export const searchMovie =(params)=>dispatch=>{
    searchMsg(params).then(val=>{
       // console.log(val.data.movies.list,'进入了searchMovie')
       let data = {...val.data.movies}

       let action = {
        type:'GET_MOVIE_LIST',
        payload:data.list
        }
        dispatch(action)

    })
}



//获取评论
export const getComments = params => dispatch => {
    // console.log(params)
    getComment(params)
      .then(res => {
          if(res){
            console.log(res.data.data.hotComments,"12345678ss")
            dispatch(actionCreator("addCommets", res.data.data.hotComments))
          } 
      })
}

//获取电影详情页
export const getDeatil = (params) => dispatch => {
    getDetail(params).then(res=>{
        dispatch(actionCreator('addDetail',res.data.detailMovie))
    })
}

//影院展示
export const fetchCinemaShowList = (params) => dispatch => {
    getCinemaByCityId(params).then(
        val=>{
            dispatch(actionCreator('GET_CINEMAS_SHOW_LIST',val.data.cinemas))
        }   
    )
}

//单个电影详情
export const getMovie =params=>dispatch=>{
    getMovieMsg(params)
    .then(res=>{
        // console.log(res.data.detailMovie)
        dispatch(actionCreator("movieMsg",res.data.detailMovie))
    })
}
