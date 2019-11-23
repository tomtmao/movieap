import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux'
import { imgComingLists } from "../../store/actionCreator"




//控制预先展示的条数
let fetchIndex = 7
//控制componentWillReceiveProps只在最开始解决一次
let propsUpdate = false

const stateProps = state => {
    return {
        items: state.RecentList
    }
}

const dispatchProps = dispatch => {
    return {
        comingList(a) {
            dispatch(imgComingLists(a))
        }
    }
}
@connect(stateProps, dispatchProps)

class MovieList extends React.Component {
    constructor(props) {
        super(props)
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
        let obj = {
            ci: 1,
            token: ""
        }
        this.props.comingList(obj)
    }

    static getDerivedStateFromProps(props) {
        if (!propsUpdate) {
            setTimeout(() => {
                propsUpdate = true
            }, 1000);
            return {
                items: props.items.slice(0, fetchIndex)
            }
        }
        return null
    }
    componentWillUnmount() {
        propsUpdate = false
    }

    //处理数据的函数
    // 调用方法：传入一个数组按照某个条件进行分类后整合成新的数组
    sortArr(arr, str) {
        var _arr = [],
            _t = [],
            // 临时的变量
            _tmp;
        // 按照特定的参数将数组排序将具有相同值得排在一起
        arr = arr.sort(function (a, b) {
            var s = a[str],
                t = b[str];

            return s < t ? -1 : 1;
        });

        if (arr.length) {
            _tmp = arr[0][str];
        }
        // console.log( arr );
        // 将相同类别的对象添加到统一个数组
        let arrdayset = new Set()
        for (var i in arr) {
            // console.log(_tmp);
            if (arr[i][str] === _tmp) {
                // console.log(_tmp)
                _t.push(arr[i]);
            } else {
                _tmp = arr[i][str];
                _arr.push(_t);
                _t = [arr[i]];
            }
            arrdayset.add(_tmp)
        }
        this.arrday = []
        for (let item of arrdayset) {
            this.arrday.push(item)
        }
        // 将最后的内容推出新数组
        _arr.push(_t);
        return _arr;
    }
    //实现跳转
    jump(_id) {   // 调转路由
        // console.log(this.props,"1234567");
        
        this.props.history.push(`/comment/${_id}`)
    }
    componentDidUpdate() {
        this.RecentList = this.props.items

        this.RecentListDate = this.sortArr(this.RecentList, 'comingTitle');
        // console.log(this.RecentListDate)
    }
    render() {
        const style = {
            height: 115,
            display: "flex",
            justifyContent: "space-between",
            margin: 0,
            paddingLeft: '15px',
            fontSize: '13px',
            color: "#666"
        };
        // 想看
        const sell = <div style={{
            width: "47px", 
            lineHeight: "27px", 
            textAlign: "center", 
            boxSizing: "border-box",
            backgroundColor: "orange", 
            color: "#fff", 
            bordeRadius: "4px", 
            whiteSpace: "nowrap",
            fontSize: "12px",
            cursor: "pointer",
            position: "absolute",
            right: "30px", top: "0",
            borderRadius: "8px"
        }}>
            <span>想看</span>
        </div>

        //  预售
        const presell = <div style={{
            width: "47px",
            lineHeight: "27px",
            textAlign: "center",
            boxSizing: "border-box",
            backgroundColor: "#3c9fe6",
            color: "#fff",
            bordeRadius: "4px",
            whiteSpace: "nowrap",
            fontSize: "12px",
            cursor: "pointer",
            position: "absolute",
            right: "30px", top: "0",
            borderRadius: "8px"
        }}>
            <span>预售</span>
        </div>

        if (this.RecentListDate) {
            return (
                <div>
                    <div id="scrollableDiv" style={{ height: 800, overflow: "auto", backgroundColor: "#fff" }}>
                        <InfiniteScroll
                            dataLength={this.state.items.length}
                            next={this.fetchMoreData}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                            scrollableTarget="scrollableDiv"
                        >

                            {
                                this.RecentListDate.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p style={{ padding: "12px 15px 0" }}>
                                                <span style={{ fontSize: "14px" }}>{this.arrday[index]}</span></p>
                                            {item.map((val, i) => {
                                                return (
                                                    <div style={style} key={val.id} onClick={this.jump.bind(this, val.id)}>
                                                        <div style={{ marginTop: "12px" }}><img src={val.img} style={{ width: "64px", height: "90px" }} alt="" /></div>
                                                        <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "25px", padding: "12px 0", borderBottom: "1px solid #DDD", width: "90%" }}>
                                                            <div >
                                                                <div style={{ marginBottom: '7px', fontSize: '17px', fontWeight: 'bold', color: "#333" }}>{val.nm}</div>
                                                                {/* 多少人想看 */}
                                                                <div>
                                                                    <span style={{ color: "#faaf00", fontSize: "17px" }}>{val.wish}</span><span>人想看</span>
                                                                </div>
                                                                <div style={{ color: "#777", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: "6px", width: "219px" }}>主演:{val.star}</div>
                                                                <div style={{ color: "#777", marginTop: "6px" }}>{val.rt}<span>上映</span></div>
                                                            </div>
                                                            <div style={{ width: "30px", position:'relative'}}>
                                                                {val.preShow ? sell : presell}
                                                         
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                    )
                                })
                            }
                        </InfiniteScroll>
                    </div>
                </div>
            );
        } else {
            return null
        }

    }
}

export default MovieList
