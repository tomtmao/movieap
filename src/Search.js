import React from 'react'
import { SearchBar, List } from 'antd-mobile'

// 引入react-redux的connect组件
import { connect } from 'react-redux'
import { searchMovie } from './store/actionCreator';

// 为了从list组件里获取item组件
const Item = List.Item;

// 使用react-redux引入的connect组件 将redux的store相关数据和将要传入searchshow组件的props进行数据映射
// 先进行state映射
const mapStateToProps = state => {
    return {
        caa: state.city,//获取state里city的值
        moVies: state.MoviesLists,
    }
}
// 发送电影请求
const dispatchProps = dispatch => {
    return {
        getMovieList(parmas) {
            dispatch(searchMovie(parmas))
        }
    }
}
// 设置dispatch发送action
@connect(mapStateToProps, dispatchProps)

class SearchShow extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
        }
    }
    handleClick() { }
    // 用于改变本身的state的value值
    handleVal(val) {
        // val是antd处理event事件后得到的e.target.value的
        // console.log(val)
        this.setState({ value: val })
        // 每次用户改变输入值的时候，都发送请求改变获取对应的列表
        this.props.getMovieList({
            kw: val,
            cityId: this.props.caa.ci
        })
    }
    handleUserEnter(movieId){
        let {history} = this.props
        history.push(`hot/movieday/${movieId}`)
    }
    render() {
        this.props.moVies.img = this.props.moVies.map(item => item.img = item.img.replace("w.h", "150.150"))
        let list = this.props.moVies.map(item =>
            <Item wrap key={item.id} onClick={this.handleUserEnter.bind(this,item.id)}>
                <div style={{ display: 'flex' }}>
                    <div className="left" style={{ flex: '1' ,display:'flex',alignItems:'center'}}>
                        <img style={{ width: '64px', height: "90px",display:'block' }} src={item.img} alt='' />
                    </div>
                    <div className="right" style={{ flex: '4' }}>
                        <div style={{ color: "black", font: 'bold 16px/24px ""' }}>{item.nm}</div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ flex: '3' }}>
                                    <div style={{ color: "gray", fontSize: '12px' }}>{item.enm}</div>
                                    <div style={{ color: "gray", fontSize: '12px' }}>{item.cat}</div>
                                    <div style={{ color: "gray", fontSize: '12px' }}>{item.star}</div>
                                </div>
                                <div style={{ flex: '2' }}>
                                    {item.wish?<div style={{ color: "orange", font: 'bold 12px/20px ""' }}>{item.wish}人想看</div>:''}
                                </div>
                            </div>
                            <div style={{ color: "black", fontSize: '14px' }}>{item.pubDesc}</div>
                        </div>
                    </div>
                </div>
            </Item>)
        return <div>
            <SearchBar
                value={this.state.value}
                placeholder="Search"
                showCancelButton
                onChange={this.handleVal.bind(this)}
            />
            <List renderHeader={() => '电影搜索结果'} className="my-list">
                {this.state.value?list:''}
            </List>
        </div>
    }
}
export default SearchShow