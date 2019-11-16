import React, { Component } from 'react';
import detailStyle from './Address.module.css'
import { Button } from 'antd-mobile'


class RecentCity extends Component {
    componentDidMount(){
        if(!localStorage.getItem('RecentCity')){
            localStorage.setItem('RecentCity','[]')
        }

        let arr = JSON.parse(localStorage.getItem('RecentCity'))
        if(arr.lenght>5){
            arr = arr.slice(0,5)
        }
        localStorage.setItem('RecentCity',JSON.stringify(arr))
    }
    render() {
        let list = JSON.parse(localStorage.getItem('RecentCity')).map(item=>
            <Button
                style={{ width: '90px', font: '14px/30px "" ', height: '30px', margin: '10px' }}
                key={item.ci}
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

export default RecentCity;