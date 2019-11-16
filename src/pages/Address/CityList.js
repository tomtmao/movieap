import React, { Component,Fragment } from 'react';
import cities from '../../utils/city.json'
import '../../assets/styles/Address/CityList.css'
import IndexCity from './IndexCity.js';

//对城市列表进行排序
let cityArr = cities.cts.sort((a, b) => a.py.charCodeAt(0) - b.py.charCodeAt(0));
const actionCreate = (type,payload)=>({type,payload})
//获取地区标题
function Title(arr, str) {
    let list = [...arr]
    let newArr = []
    for (let item of list) {
        let title = item[str][0].toUpperCase()
        if (newArr[newArr.length - 1] !== title) {
            newArr.push(title)
        }
    }
    return newArr
}
let cityTitles = Title(cities.cts, 'py')


class City extends Component {
    handleClick(id,city){ 
        let {dispatch,history} = this.props 
        //修改state
        dispatch(actionCreate('CHANGE_CI',id))

        //将点击记录保存在本地储存上
        let arr = JSON.parse(localStorage.getItem('RecentCity'))
        
        let obj = {
            id:id,
            nm:city
        }
        let flag = true
            //判断数组是否有这个记录
        for(let item of arr){
            if(item.id == obj.id){
                flag=false;
                //return
            }
        }
        if(flag){
            arr.unshift(obj)

            if (arr.length > 5) {
                arr = arr.slice(0, 5)
            }

            localStorage.setItem('RecentCity',JSON.stringify(arr))
        }


        //跳转首页
        history.push('/')
    }
    render() {
        let { item } = this.props;
        let newCityArr =cityArr.filter(i=>i.py[0] === 'a')
        let lis = newCityArr.map(item => <li 
            key={item.id}
            onClick={this.handleClick.bind(this,item.id,item.nm)}
        >
            {item.nm}
        </li>)
        
        return (
            <Fragment>
                {lis}
            </Fragment>
        );
    }
}



class CityList extends Component {

    render() {
        return (
            <div>
                <div className="indexlist">
                    <ul className="indexlist-content" id="content">
                        {/* 标题栏 */}
                        {cityTitles.map((item, index) =>
                            <li key={index} className='indexlist-box'>
                                <div className='indexlist-title' >{item}</div>
                                <ul className='cityname'>
                                    <City dispatch={this.props.props.dispatch} history={this.props.props.history} item={item.toLowerCase()} />
                                </ul>
                            </li>)}
                    </ul>
                    <div /* onClick={this.handleClick.bind(this)} */ className="indexlist-indicator" id="indicator">
                        {/* 导航框 */}
                        <IndexCity cityTitles={cityTitles}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CityList;