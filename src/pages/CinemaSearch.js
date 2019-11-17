import React, { Component } from 'react';
import Top from '../component/Main/Top';
import { Icon } from 'antd-mobile'
import "../assets/styles/Cinema/CinemaSearch.css"
import {connect} from 'react-redux'

const createAction = (type,payload) => ({type,payload})

const stateProps = state => {
    return {
        items:state.HotArr
    }
}

const dispatchProps = dispatch =>{
    return {
        getList(){
            fetch("https://douban.uieee.com/v2/movie/in_theaters").then(body => body.json()).then(val=>{
                console.log(val);
                dispatch(createAction('addHot',val.subjects))
            })
            
        }
    }
}

@connect(stateProps,dispatchProps)


class CinemaSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:props.items
        }
       
        
    }
    componentDidMount(){
        this.props.getList()
        this.setState()
        console.log(this.props,3333);
        
    }
    handleClick(){}
    render() {
        console.log(this.props);
        return (
            <div>
                <Top>
                    <Icon className='icon-return' type="left" onClick={this.handleClick()}/>
                    猫眼电影
                {this.props.items.map(item=><div key={item.id} style={{color:"black"}}>{item.title}</div>)}
                </Top>
            </div>
        );
    }
}

export default CinemaSearch;