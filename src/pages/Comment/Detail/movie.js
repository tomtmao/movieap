import React from "react"
import { connect } from "react-redux"
import { getDeatil } from "@/store/actionCreator"
import { List } from 'antd-mobile'; // 拉开组件
import detailStyle from "./Deatil.module.css"
import { Link } from 'react-router-dom'
import Video from "component/Video"
import Comments from "../Comment.js"

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
let id = window.localStorage.getItem("audio")

@connect(stateToProps, dispatchToProps)


class Deatil extends React.Component {
    constructor() {
        super()
        this.state = {
            flag: true,
            img1: require("assets/imgs/heart1.png"),
            img2: require("assets/imgs/star1.png")
        }
    }
    handleClick() {
        this.setState({
            flag: !this.state.flag
        })
    }
    fairyA() { // 仙女变色
        this.setState({
            img2: require("assets/imgs/star2.png")

        })
    }
    fairy() { // 仙女变色
        this.setState({
            img1: require("assets/imgs/heart2.png")
        })
    }

    componentDidMount() {  
        let id = this.props.match.params.id
        this.props.getList(id)
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
        const img = require("assets/imgs/back.png")
        console.log(this.props,"wx")
        return (
            <div style={{ backgroundColor: this.props.movieDetail.backgroundColor, color: "#999", fontSize: "12px",dispaly:"flex"}}>
                {/* 视频播放 */}
                <div style={{ width: "100%"}}>
                    <Video url={this.props.movieDetail.videourl} />
                </div>
                {/* 电影详情 */}
                <div style={{ paddingLeft: "16px", paddingTop: "6px", position: "relative"}}>
                    {/* back */}
                <Link to={"/home/hot/movieday/"+id}> 
                <img 
                alt="" 
                src={img} 
                style={{ 
                    width: "18px", 
                    height: "18px", 
                    position: "absolute", 
                    top: "15px", 
                    right: "30px" }} />
                    
                    </Link>
                    
                    </div>
                <div style={{ display: "flex", height: "138px", padding: "15px 16px" }}>
                    {<img alt="" src={a} style={{ width: "100px", height: "138px" }}></img>}

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
                        <div className={detailStyle.heart}>
                            <div className={detailStyle.star} onClick={this.fairy.bind(this)}><img alt="" src={this.state.img1}
                                style={{ width: "14px", height: "14px ", paddingRight: "4px", background: this.state.backgroundColor }} ></img>想看</div>
                            <div className={detailStyle.star} onClick={this.fairyA.bind(this)}><img alt="" src={this.state.img2}
                                style={{ width: "14px", height: "14px ", paddingRight: "4px", background: this.state.backgroundColorA }} ></img>看过</div>
                        </div>
                    </div>
                </div>
                {/* 实时显示 */}
                <div className={detailStyle.time} flex="1">
                    <div className={detailStyle.top}>
                        <div>
                            <img alt="" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/logo.png" style={{ width: "14px", height: "14px" }} />
                            &nbsp;&nbsp;<span style={{ color: "#fff" }}>实时口碑</span>
                        </div>
                    </div>
                    <div className={detailStyle.score}>
                        <div>
                            <div className={detailStyle.grad}>{this.props.movieDetail.sc ? this.props.movieDetail.sc : "暂无评分"}</div>
                            <div>{this.props.movieDetail.snum}人评</div>
                        </div>
                        <div>
                            <div><span className={detailStyle.people}>{this.props.movieDetail.wish} </span>&nbsp;<span>人想看</span>&nbsp;&nbsp;</div>
                            <div><span className={detailStyle.people}>{this.props.movieDetail.wish}</span>&nbsp;<span>人看过</span></div>
                        </div>
                    </div>
                    <span className={detailStyle.comment}>观众评论超过80%</span>
                </div>  
                <Comments {...this.props}/>
            </div>
            
        )
    }
}
export default Deatil