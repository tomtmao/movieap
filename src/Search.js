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
            console.log(parmas, '进入了getMovieList')
            dispatch(searchMovie(parmas))

            /*

            function searchMovie(parmas){
                    //thunk 
                return function(dispatch){

                    searchMsg(params).then(val=>{
                    val.data.list
                    dispatch({
                        type:"GET_CINEMAS_LIST",
                        payload: val.data.list
                    })
                    dispatch(actionCreator('GET_CINEMAS_LIST',data.list))
                })
            }
                

            searchMovie = (params) => dispatch => {
             searchMsg(params).then(val=>{
        //let data = JSON.parse(JSON.stringify(val.data.cinemas)) 
        let data = {...val.data.cinemas}
        dispatch(actionCreator('GET_CINEMAS_LIST',data.list))

       
    })
}
            */
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
        //connect 传入的props  
        //console.log(this.props,5764646);

        this.props.getMovieList({
            kw: val,
            cityId: this.props.caa.ci
        })
    }
        //影院搜索跳转页面
    // handleUserEnter(cinemaId) {
    //     let { history } = this.props
    //     history.push(`/address?cinemaId=${cinemaId}`)
    // }
    handleUserEnter(movieId){
        let {history} = this.props
        history.push(`/movieDetails?movieId=${movieId}`)
    }
    render() {
        console.log(this.props.moVies, 123)
        this.props.moVies.img = this.props.moVies.map(item => item.img = item.img.replace("w.h", "150.150"))
        console.log(this.props.moVies)
        let list = this.props.moVies.map(item =>
            <Item wrap key={item.id} onClick={this.handleUserEnter.bind(this,item.id)}>
                {/* <img style={{height:"120px",width:'100px'}} src="http://p0.meituan.net./100.120/movie/837051c5066f12331e8044b5866f1ca01031604.jpg" alt="" />  */}
                <div style={{ display: 'flex' }}>
                    <div className="left" style={{ flex: '1' ,display:'flex',alignItems:'center'}}>
                        <img style={{ width: '64px', height: "90px",display:'block' }} src={item.img} />
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
                                    <div style={{ color: "orange", font: 'bold 12px/20px ""' }}>{item.wish}人想看</div>
                                </div>
                            </div>
                            <div style={{ color: "black", fontSize: '14px' }}>{item.pubDesc}</div>
                        </div>
                    </div>
                </div>
            </Item>)

        // const p404 = (<Item wrap style={{align='center'}}>😱没有数据QAQ</Item>)
        // // 判断value不为0 但list为0时
        // let flag = !!this.state.value && !list.length

        return <div>
            <SearchBar
                value={this.state.value}
                placeholder="Search"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onCancel={() => console.log('onCancel')}
                showCancelButton
                onChange={this.handleVal.bind(this)}
            />
            <List renderHeader={() => '电影搜索结果'} className="my-list">
                {this.state.value?list:''}
                {/* {flag ? p404 : list} */}
                {/* <img src="http://p0.meituan.net/100.120/movie/837051c5066f12331e8044b5866f1ca01031604.jpg" alt="" /> */}
            </List>

        </div>
    }
}
export default SearchShow