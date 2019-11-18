import axios from "axios"

export const getHot = () => {
    return fetch("http://m.maoyan.com/ajax/moreComingList?token=&movieIds=345419%2C1300059%2C246300%2C1233318%2C1300762%2C503342%2C1268562%2C1277982%2C1250700%2C1249366")
        .then(body => body.json)
        .then(res => res.body)
}

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
// export const comingList = () => axios({
//     method:'get',
//     url:"http://m.maoyan.com/ajax/comingList"
// })

//电影详情页-放映时间
export const getMoveDay = (data) => {
    console.log(data)
    return axios({
        method: "post",
        url: "/api/ajax/movie",
        data
    })
}
