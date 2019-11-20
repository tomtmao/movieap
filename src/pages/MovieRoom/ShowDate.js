import React, { Fragment } from "react"
import { Tabs } from 'antd-mobile';
import s from "../../assets/styles/ShowDate.module.css"

class ShowDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            movies: this.props.movies,
            tabs: "",
            list: ""
        }
    }
    componentDidMount() {
        //筛选数据
        let { id, movies } = this.state

        let movie = movies.find(item => {
            return item.id === id
        })

        //拿出场次
        let shows = movie.shows

        //拿出需要的数据
        let tabs = shows.map(item => {
            return { title: item.dateShow, list: item.plist }
        })
        this.setState({
            tabs: tabs,
            list: tabs[0].list
        })

    }
    cut(list) {
        this.setState({
            list: list
        })
    }
    Title(tabs) {
        return (
            <div>
                <Tabs tabs={tabs}
                    onTabClick={(tab, index) => { this.cut(tab.list) }}
                    tabBarActiveTextColor="red"
                    tabBarUnderlineStyle={{ border: '1px solid red' }}
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}
                ></Tabs>
            </div>
        )
    }
    timeChange(time, separator = ":", addMins) {
        time = time.split(separator)

        let sumMins = +time[0] * 60 + +time[1] + addMins;
        let mins = sumMins % 60
        let hours = (sumMins - mins) / 60
        hours = hours >= 24 ? hours - 24 : hours
        hours = hours < 10 ? '0' + hours : hours
        mins = mins < 10 ? "0" + mins : mins
        return `${hours}:${mins}`
    }
    componentWillReceiveProps(nextprops,nextstate){
        let { movies } = this.state

        let movie = movies.find(item => {
            return item.id === nextprops.id
        })
        movie = movie?movie:{}
        if (movie.shows) {
            //拿出场次
            let shows = movie.shows

            //拿出需要的数据
            let tabs = shows.map(item => {
                return { title: item.dateShow, list: item.plist }
            })

            this.setState({
                tabs: tabs,
                list: tabs[0].list
            })
        }


    }
    render() {
        let tabs = this.state.tabs
        let list = this.state.list
        if (tabs) {
            return (
                <Fragment >
                    <div>
                        {this.Title(tabs)}
                    </div>
                    <div className={s.box} >
                        {list.length ? list.map(item => {
                            return (
                                <Fragment>
                                    <div className={s.item}>
                                        <div className={s.contain}>
                                            <div className={s.title}>
                                                <div className={s.beng}>{item.tm}</div>
                                                <div className={s.end}>
                                                    {this.timeChange(item.tm, ":", 126)}
                                                    <span className={s.tui}>散场</span>
                                                </div>
                                            </div>
                                            <div className={s.info}>
                                                <div className={s.lian}>
                                                    {item.lang + " "}
                                                    {item.tp}
                                                </div>
                                                <div className={s.hall}>{item.th}</div>
                                            </div>
                                            <div className={s.price}>
                                                <div className={s.sellpr}>
                                                    <span className={s.d}>￥</span>
                                                    {/* {item.sellPr} */}
                                                    34
                                                    &nbsp;
                                                </div>
                                                <div className={s.vipp}>
                                                    <span className={s.con}>折扣卡</span>
                                                    <span className={s.num}>
                                                        ￥
                                                        {item.vipPrice}
                                                    </span>
                                                </div>
                                                <div className={s.ext}>折扣卡首单特惠</div>
                                            </div>
                                            <div className={s.button}>
                                                <div className={s.btn}>购票</div>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        }) : <h1 style={{background:'white',margin:0,padding:"50px 0 100px 0",textAlign:'center',font:'24px/30px ""',color:'black'}} >今日无放映场次</h1>}
                    </div>
                </Fragment>
            )
        } else {
            return null
        }
    }
}

export default ShowDate