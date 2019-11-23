import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import defaultStyle from "../../assets/styles/main-container.module.css"
import '../../assets/styles/Cinema/Cinema.css'
import { Icon } from 'antd-mobile'
import CinemaMenu from './CinemaMenu'

import { connect } from "react-redux"
import { fetchCinemaShowList } from '../../store/actionCreator'

const mapStateToProps = state => {
    return {
        city: state.city,
        CinemaShowList: state.CinemaShowList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCinemaShowList(params) {
            dispatch(fetchCinemaShowList(params))
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)

class Cinema extends React.Component {
    componentDidMount() {
        //发送请求，获取影院列表
        //获取参数day
        let day = this.getTime()
        //发送
        this.props.getCinemaShowList({
            day,
            updateShowDay: true,
            cityId: this.props.city.ci,
            limit: 500
        })
    }

    //时间处理 2019-11-18(格式)
    getTime() {
        let date = new Date();
        let year = date.getFullYear()
        let months = date.getMonth() + 1;
        let days = date.getDate()

        return `${year}-${months}-${days}`
    }

    render() {
        let areaArr = []
        try {
            let list = this.props.CinemaShowList
            //获取所有地区
            for (let item of list) {
                let strArr = item.addr.split('')
                let newStr = ''
                for (let index in strArr) {
                    if (strArr[index] === '区') {
                        newStr = item.addr.slice(0, index)
                        if (newStr.indexOf("购物") === -1 && newStr.indexOf("广场") === -1 && newStr.indexOf("商业") === -1) {
                            areaArr.push(newStr + '区')
                        }
                        strArr = ''
                    }
                }
            }
            areaArr = [...new Set(areaArr)]
        } catch (e) { }

        return (
            <Fragment>
                <div className={defaultStyle.container}>
                    <Link to="/address" style={{ color: '#777' }}>{this.props.city.nm}▽</Link>
                    <Link to="/cinemasearch">
                        <div className='searchbox'>
                             <div style={{ color: '#777' }}><Icon className='icon-search' type="search" />  搜索影院</div>
                        </div>
                    </Link>
                </div>
                <CinemaMenu areaArr={areaArr} history={this.props.history} CinemaShowList={this.props.CinemaShowList} />
            </Fragment>
        )
    }
}





export default Cinema