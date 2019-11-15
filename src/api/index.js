
import axios from "axios"

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
// export const comingList = () => axios({
//     method:'get',
//     url:"http://m.maoyan.com/ajax/comingList"
// })


