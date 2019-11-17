import axios from "axios"

export  const  getHot = () =>{
    return fetch("http://m.maoyan.com/ajax/moreComingList?token=&movieIds=345419%2C1300059%2C246300%2C1233318%2C1300762%2C503342%2C1268562%2C1277982%2C1250700%2C1249366")
        .then(body => body.json)
        .then(res => res.body)
}

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





