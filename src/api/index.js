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
    url:"http://59.110.231.183:3001/comments",
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

//电影详情
export const getDetail = (movieId) => axios({
    method:'get',
    url:"/api/ajax/detailmovie",
    params:{
        movieId
    },
    headers:{
        "User-Agent":'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        "Referer":`http://m.maoyan.com/cinema/movie/${movieId}?$from=canary`
    }  
})



