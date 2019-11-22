import React from "react"
import { connect } from "react-redux"
import { getComments } from "../../store/actionCreator"
import InfiniteScroll from 'react-infinite-scroll-component';
import Detail from "./Detail"

let fetchIndex = 6
//控制componentWillReceive只在最开始解决一次
let propsUpdate = false

const stateProps = state => {
    return {
        items: state.comments
    }
}

const dispatchProps = dispatch => {
    return {
        getList(id) {
            dispatch(getComments(id))
        }
    }
}

@connect(stateProps, dispatchProps)

class Comment extends React.Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
    }
    fetchMoreData = () => {
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(this.props.items.slice(fetchIndex - 1, fetchIndex)), //后续加载
            });
        }, 1500);
        fetchIndex = fetchIndex + 1
    };
    componentDidMount() {
        this.props.getList(this.props.match.params.id)  // 触发发送请求方法
    }
    componentWillUnmount() {
        propsUpdate = false
    }
    componentWillReceiveProps(props) {
        if (!propsUpdate) {
            this.setState({
                items: props.items.slice(0, fetchIndex)
            })
            setTimeout(() => {
                propsUpdate = true
            }, 1000);
        }
    }
    render() {
        const style = {
            display: "flex",
            fontSize: "14px",
            color: "#333",
            width: "100%",
            height: "166px"
        }

        return (
            <div>
                <div id="scrollableDiv" style={{
                    width: "100%",
                    height: 800, overflow: "auto", borderTop: "1px solid #ccc",
                    borderRadius: "20px",
                    padding: '10px',
                }}>
                    <InfiniteScroll

                        dataLength={this.state.items.length}
                        next={this.fetchMoreData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="scrollableDiv"
                    >
                        <div style={{ padding: "13px 16px 10px 13px", fontSize: "14px" }}>讨论</div>
                        {this.state.items.map((item) => (
                            <div key={item.id} style={style}>
                                <div><img alt="" src={item.avatarUrl} style={{ width: "34px", height: "34px", borderRadius: "17px" }
                                } /></div>
                                <div style={{ paddingLeft: "10px" }}>
                                    <div style={{ position: "relative" }}><span style={{ fontSize: "14px", lineHeight: "18px" }}>{item.nick}</span><span style={{
                                        width: "20px", marginLeft: "10px", fontSize: "12px", lineHeight: "16px", height: "17px", border: "2px solid #FFDC35", borderRadius: "5px",
                                        backgroundColor: "#CE0000", color: "#FFDC35"
                                    }}>lv{item.userLevel}</span>
                                        <div><span style={{ fontSize: "11px", color: "#999" }}>给这个电影打分{item.score}</span></div>
                                        {/* 内容区域 */}
                                        <div style={{ height: "84px", width: '90%', overflow: "hidden", fontSize: "15px", lineHight: "28px", color: "#666", marginTop: "4px" }}>{item.content}</div>

                                        <div style={{ width: "100%", marginTop: "25px", overflow: "hidden",height:"20px",}}>
                                            <div style={{ float: "right", paddingRight: "50px" }}><span style={{ display: "inlineBox", height: "20px", }}>
                                                <div style={{ width: "36px", height: "100%", float: "left" }}><img alt=""  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/thumb-up-comment.png"
                                                    style={{ width: "10px", height: "10px" }}></img><span style={{ fontSize: "12px", marginLeft: "2px" }}>{item.upCount}</span></div>
                                                <div style={{ width: "40px", border: "1px solid #ccc", marginLeft: "5px", float: "right", borderRadius: "20px", display: 'flex', justifyContent: "center", lineHight: "20px" }}>
                                                    <img alt=""  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/discussion-comment.png"
                                                        style={{ width: "10px", height: "10px", marginTop: "3px" }}></img><span style={{ fontSize: "12px", marginLeft: "2px" }}>{item.replyCount}</span>
                                                </div>
                                            </span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default Comment