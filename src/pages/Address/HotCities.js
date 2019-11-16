import React, { Component } from 'react';
import detailStyle from './Address.module.css'
import { Button } from 'antd-mobile'
import Citylist from '../../utils/city.json'

let HotList = Citylist.cts.slice(0,9)

const actionCreate = (type,payload)=>({type,payload})

class HotCities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "cts": HotList
        }
    }
    handleClick(id,city){
        let {dispatch,history} = this.props.props
        //修改state
        dispatch(actionCreate('CHANGE_CI',id))

        //将点击记录保存在本地储存上
        let arr = JSON.parse(localStorage.getItem('RecentCity'))
        
        let obj = {
            ci:id,
            nm:city
        }
        let flag = true
            //判断数组是否有这个记录
        for(let item of arr){
            if(item.ci == obj.ci){
                flag=false;
                //return
            }
        }
        console.log(11);
        
        if(flag){
            arr.unshift(obj)
            localStorage.setItem('RecentCity',JSON.stringify(arr))
        }

        //跳转首页
        history.push('/recent')
    }
    render() {
        let list = this.state.cts.map(item => 
            <Button 
                style={{ width: '90px', font: '14px/30px "" ', height: '30px', margin: '10px' }} 
                key={item.id} 
                onClick = {this.handleClick.bind(this,item.id,item.nm)}
            >
                    {item.nm}
            </Button>)
        return (
            <div className={detailStyle.box}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {list}
                </div>
            </div>

        );
    }
}

export default HotCities;