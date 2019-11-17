import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux'
import { imgComingLists } from "../../store/actionCreator"

const style = {
    height: 150,
    display: "flex",
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 10,
};

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

    componentDidUpdate() {
        this.RecentList = this.props.items
        console.log(this.RecentList)
        this.RecentListDate = this.sortArr(this.RecentList, 'comingTitle');
        console.log(this.RecentListDate)
    }
    render() {
        if (this.RecentListDate) {
            return (
                <div >
                    <h1>demo: Pull down to refresh</h1>
                    <hr />
                    <div id="scrollableDiv" style={{ height: 800, overflow: "auto" }}>
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
                                <div style={style} >
                                    <p><span>{this.arrday[index]}</span></p>
                                    {item.map((val, i) => {
                                        return (
                                            <div style={style} key={i}>
                                                <div className='left'>
                                                    <img src={val.img} alt="" style={{ width: "100%", height: "100%" }} />
                                                </div>
                                                <div className='right'>
                                                    <h3>{val.nm}</h3>
                                                    <p><span>{val.wish}</span>人想看</p>
                                                    <p>{val.comingTitle}上映</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
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
