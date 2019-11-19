import React, { Component } from 'react';
import Top from '@/component/Main/Top';
import { Icon } from 'antd-mobile'
import "@/assets/styles/Cinema/CinemaSearch.css"
import { connect } from 'react-redux'
import { SearchBar } from 'antd-mobile';
import { searchCinema } from '@/store/actionCreator'

import { List } from 'antd-mobile';
const Item = List.Item;


const mapStateProps = state => {
    return {
        city: state.city,
        CinemaList: state.CinemaList
    }
}

const mapDispatchProps = dispatch => {
    return {
        getCinemaList(params) {
            dispatch(searchCinema(params))
        }
    }
}

@connect(mapStateProps, mapDispatchProps)


class CinemaSearch extends Component {
    state = {
        value: '',
    };

    handleClick() {
        this.props.history.push('/cinema')
    }
    handleValChange(value) {
        this.setState({
            value
        })
        //发送远程查询请求
        this.props.getCinemaList({
            kw: value,
            cityId: this.props.city.ci
        })
    }
    handleTagClick(cinemaId){
        let {history} = this.props
        history.push(`/address?cinemaId=${cinemaId}`)
    }
    render() {
        let list = this.props.CinemaList.map(item => <Item wrap key={item.id} onClick={this.handleTagClick.bind(this,item.id)}>{item.nm}</Item>)


        const p404 = (<Item wrap>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;没有找到数据</Item>)
        //value或者list不为0 或者都不为0 => p404
        //都为0 => list //error

        //当value不为0 且 list 为0 时，404 !!this.state.value &&  !list.length
        let flag = !!this.state.value && !list.length

        return (
            <div>
                <Top >
                    <Icon className='icon-return' type="left" onClick={this.handleClick.bind(this)} />
                    猫眼电影
                </Top>
                <SearchBar placeholder="搜索影院" ref={ref => this.autoFocusInst = ref} value={this.state.value} onChange={this.handleValChange.bind(this)} />
                <List renderHeader={() => '搜索结果'} className="my-list">
                    {flag ? p404 : list}
                </List>

            </div>
        );
    }
}

export default CinemaSearch;