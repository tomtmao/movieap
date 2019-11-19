import axios from "axios"


// 热映
export const getHot = (ci=1) => axios({
    method:'get',
    url:"/aaa/ajax/movieOnInfoList",
    params:{
        ci,
        token:""
    }
    
})

// 最受期待的电影
export const mostExpected = () => axios({
    method: 'get',
    url: "/api/ajax/mostExpected",
    params: {
        ci: 1,
        token: ""
    }

})

// 即将上映的电影
export const comingList = (params) => axios({
    method:'get',
    url:"/api/ajax/comingList",
    params
})

//评论
export const getComment = (movieId) => axios({
    method:'get',
    url:"/apiv/comments",
    params:{
        movieId
    }
})

//查询
export const searchMsg = (params) => axios({
    method:'get',
    url:'http://59.110.231.183:3001/search',
    params:{
        kw:params.kw,
        cityId:params.cityId,
        stype:-1
    }
})
//电影查询
export const searchMovie = (params) => axios({
    method:'get',
    url:'http://m.maoyan.com/ajax/search?kw=&cityId=55&stype=-1',
    params:{
        kw:params.kw,
        cityId:55,
        stype:-1
    }
})

//电影详情页-放映时间
export const getMoveDay = (data) => {
    console.log(data)
    return axios({
        method: "post",
        url: "/api/ajax/movie",
        data
    })
}
//查询地区影院列表
export const getCinemaByCityId = (params) => axios({
    method:'get',
    url:'/api/ajax/cinemaList',
    params
})
//单个电影详情
export const getMovieMsg = (id) => axios({
    url:'/api/ajax/detailmovie',
    params:{
        movieId:id
    }
})
