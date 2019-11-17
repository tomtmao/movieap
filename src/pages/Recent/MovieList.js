import React from "react"
import store from "../../store"
import "../../assets/styles/Recent/ReactMovieList.css"
class MoviesDate extends React.Component {
    // 传入一个数组
    // 按照某个条件进行分类后整合成新的数组
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
        }
        // 将最后的内容推出新数组
        _arr.push(_t);
        return _arr;
    }

    render() {
        let { RecentList } = store.getState()
        //获取到按照日期排列的数组
        let RecentListDate = this.sortArr(RecentList, 'rt');
        //为当前分好类后的数组
        let lists = RecentListDate.map(item => {
            let list = item.map(e => {
                return { ...e }
            })
            return { ...item, list }
            // return {...item, list}
        })
        console.log(lists)


        //一共有几组
        //item为放有同一时期对象的数组;index为数组下标
        //每组中展示多少数据
        let movieListDom = lists.map((val, index) => {
            return (
                <div className="movie-block">
                    <p className="group-date">上映日期</p>
                    {/*  */}
                    <div className="img-block">
                        <div className="img-bg">
                            <img src="../../assets/imgs/tu11.png"></img>
                        </div>
                        <div className="img-conter">
                            <div className="conter-left">内容左边</div>
                            <div className="content-button">
                                <div className="btn">
                                    <span>按钮</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })


        return (
            //整个即将上映的电影板块
            <div className="coming-list">
                {/* 有几个日期渲染几条date-list */}
                <div className="date-list">
                    {/* 同一天的电影展示块 */}
                    <p className="group-date">上映日期</p>
                    {/* <movieListDom /> */}
                    <div className="movie-block">

                        <div className="img-block">
                            <div className="img-bg">
                                <img src="../../assets/imgs/tu11.png"></img>
                            </div>
                            <div className="img-conter">
                                <div className="conter-left">内容左边</div>
                                <div className="content-button">
                                    <div className="btn">
                                        <span>按钮</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesDate