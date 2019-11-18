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
    method:'get',
    url:"/api/ajax/mostExpected",
    params:{
        ci:1,
        token:""
    }
    
})

// 即将上映的电影
export const comingList = () => axios({
    method:'get',
    url:"/api/ajax/comingList",
    params:{
        ci:1,
        token:""
    }
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



