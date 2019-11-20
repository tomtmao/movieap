import React from "react"
import { connect } from "react-redux"
import { getDeatil } from "../../../store/actionCreator"
import { List, Icon, Grid } from 'antd-mobile'; // 拉开组件
import detailStyle from "./Deatil.module.css"
import DetailCarousel from "./DetailCarousel ";

const list = ['down']


//下拉文本组件
const Item = List.Item;

class Type extends React.Component {
    render() {
        if (this.props.flag) {
            return (
                <Item activeStyle={{ border: 'red' }} data-seed="logId" style={{
                    background: this.props.color
                }} ><span className={detailStyle.am}>{this.props.text}</span> </Item>
            )
        } else {
            return (
                <Item wrap style={{
                    background: this.props.color,
                    color: "#fff"
                }}><span className={detailStyle.am}>{this.props.text}</span></Item>
            )
        }
    }
}
// 实时口碑组件
const stateToProps = state => {
    return {
        movieDetail: state.movieDeail
    }
}
const dispatchToProps = dispatch => {
    return {
        getList(_id) {  //在组件中传入实参
            dispatch(getDeatil(_id))
        }
    }
}
@connect(stateToProps, dispatchToProps)

class Deatil extends React.Component {
    constructor() {
        super()
        this.state = {
            flag: true
        }
    }
    handleClick() {
        this.setState({
            flag: !this.state.flag
        })
    }
    componentDidMount() {
        this.props.getList(this.props.id)
    }
    render() {
        let list = []  // 剧照图片
        let a = ""
        try {
            a = this.props.movieDetail.img.replace("w.h", "320.200")
            list = [...this.props.movieDetail.photos]  // 复杂数据类型的数据需要解构赋值
            list = list.map(item => item = item.replace("w.h", '320.200'))
        }
        catch (err) { }
        return (
            <div style={{ backgroundColor: this.props.movieDetail.backgroundColor, color: "#999", fontSize: "12px" }}>
                <div style={{ display: "flex", height: "138px", padding: "20px 16px" }}>
                    {<img src={a} style={{ width: "100px", height: "138px" }}></img>}

                    <div style={{ marginLeft: "12px" }}>
                        <div style={{ fontSize: "20px", fontWeight: "700", marginBottom: "4px", color: "#fff" }}>{this.props.movieDetail.nm}</div>
                        <div style={{
                            fontSize: "12px", width: "100%", textOverflow: "ellipsis",
                            whiteSpace: "nowrap", overflow: "hidden"
                        }}>{this.props.movieDetail.enm}</div>
                        <div style={{ lineHeight: "20px" }}>{this.props.movieDetail.cat}</div>
                        <div style={{
                            width: "100%", textOverflow: "ellipsis",
                            whiteSpace: "nowrap", overflow: "hidden", lineHeight: "18px"
                        }}>{this.props.movieDetail.star}</div>
                        <div style={{ lineHeight: "25px" }}>{this.props.movieDetail.pubDesc}&nbsp;/<span style={{ paddingLeft: "3px" }}>{this.props.movieDetail.dur}分钟></span></div>
                        <div style={{ paddingTop: "5px" }}>
                            <button style={{
                                width: "100px", height: "30px", boxShadow: "0 .02rem .08rem 0 rgba(0,0,0,.1)", background: "hsla(0,0%,100%,.35)", borderRadius: "3px",
                                fontSize: "14px", color: "#fff"
                            }}><img src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/want-to-watch.png"
                                style={{ width: "14px", height: "14px ", paddingRight: "6px" }}></img>想看</button>
                            <button style={{
                                width: "100px", height: "30px", boxShadow: "0 .02rem .08rem 0 rgba(0,0,0,.1)", background: "hsla(0,0%,100%,.35)", borderRadius: "3px",
                                fontSize: "14px", color: "#fff", marginLeft: "12px"
                            }}><img src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star.png"
                                style={{ width: "14px", height: "14px ", paddingRight: "6px" }}></img>看过</button>
                        </div>
                    </div>
                </div>
                {/* 实时显示 */}
                <div className={detailStyle.time}>
                    <div className={detailStyle.top}>
                        <div>
                            <img src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/logo.png" style={{ width: "14px", height: "14px" }} />
                            &nbsp;&nbsp;<span style={{ color: "#fff" }}>实时口碑</span>
                        </div>
                    </div>
                    <div className={detailStyle.score}>
                        <div>
                            <div className={detailStyle.grad}>{this.props.movieDetail.sc}</div>
                            <div>{this.props.movieDetail.snum}人评</div>
                        </div>
                        <div>
                            <div><span className={detailStyle.people}>{this.props.movieDetail.wish} </span>&nbsp;<span>人想看</span>&nbsp;&nbsp;</div>
                            <div><span className={detailStyle.people}>{this.props.movieDetail.wish}</span>&nbsp;<span>人看过</span></div>
                        </div>
                    </div>
                    <span className={detailStyle.comment}>观众评论超过91%</span>
                </div>
                {/* 文本拉取 */}
                <div style={{ position: "relative" }}>
                    <List renderHeader={() => <div className={detailStyle.into}><span>简介</span><span onClick={this.handleClick.bind(this)} className={detailStyle.extend}>展开&nbsp;▼</span>
                    </div>} >
                        <div style={{ backgroundColor: this.props.movieDetail.backgroundColor, color: "#999", fontSize: "12px" }}>
                            {/* 上面的组件 */}
                            <Type flag={this.state.flag} text={this.props.movieDetail.dra}
                                color={this.props.movieDetail.backgroundColor}></Type>
                            <br />

                        </div>
                    </List>
                </div>
                {/* 视屏和剧照 */}
                <div>
                    <DetailCarousel list={list} />
                </div>
            </div>
        )
    }
}
export default Deatil