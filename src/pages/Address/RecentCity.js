import React, { Component } from 'react';
import detailStyle from '../../assets/styles/Address/Address.module.css'
import { Button } from 'antd-mobile'
const actionCreate = (type, payload) => ({ type, payload })

class RecentCity extends Component {
    componentDidMount() {
        if (!localStorage.getItem('RecentCity')) {
            localStorage.setItem('RecentCity', '[]')
        }

        let arr = JSON.parse(localStorage.getItem('RecentCity'))
        
        if (arr.length > 5) {
            arr = arr.slice(0, 5)
        }
        
        localStorage.setItem('RecentCity', JSON.stringify(arr))
    }
    handleClick(id, city) {
        let { dispatch, history } = this.props.props

        //修改state
        dispatch(actionCreate('CHANGE_CI', {
            ci:id,
            nm:city
        }))

        //将点击记录保存在本地储存上
        let arr = JSON.parse(localStorage.getItem('RecentCity'))

        let obj = {
            id: id,
            nm: city
        }
        let flag = true
        //判断数组是否有这个记录
        for (let item of arr) {
            if (item.id == obj.id) {
                flag = false;
                //return
            }
        }

        if (flag) {
            arr.unshift(obj)

            if (arr.length > 5) {
                arr = arr.slice(0, 5)
            }

            localStorage.setItem('RecentCity', JSON.stringify(arr))
        }

        //跳转首页
        history.push('/')
    }
    render() {
        let list =[]
        if(!!localStorage.getItem('RecentCity')){
            list = JSON.parse(localStorage.getItem('RecentCity')).map(item =>
                <Button
                    style={{ width: '90px', font: '14px/30px "" ', height: '30px', margin: '10px' }}
                    key={item.ci}
                    onClick={this.handleClick.bind(this, item.id, item.nm)}
                >
                    {item.nm}
                </Button>)
        }
        
        return (
            <div className={detailStyle.box}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {/* {list.lenght ? list : (
                        <Button
                            style={{ width: '90px', font: '14px/30px "" ', height: '30px', margin: '10px' }}
                        >
                            <span>无记录</span>
                        </Button>
                    )} */}
                    {list}
                </div>
            </div>
        );
    }
}

export default RecentCity;