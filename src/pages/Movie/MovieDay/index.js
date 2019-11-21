import React, { Fragment } from "react"
import { connect } from "react-redux"
import { gtMovieDay } from "../../../store/actionCreator"
import List from "./List"
import { Tabs } from 'antd-mobile';
import Show from "./Show"
import dS from "../../../assets/styles/MovieDay.module.css"

const mapStateToProps = state => {
    return {
        movieday: state.MovieDay,
        cityid:state.city.ci
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getmd(option) {
            dispatch(gtMovieDay(option))
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class MovieDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrday: "",
            option: {
                movieId: this.props.match.params.id,
                cityId: this.props.cityid,
                day: this.getTime(0)
            },
        }
    }
    componentDidMount() {
        this.props.getmd(this.state.option)
    }
    componentWillReceiveProps(nextprops) {
        this.setState({
            arrday: nextprops.movieday
        })
    }
    cut(day) {
        let op = Object.assign({}, this.state.option, { day: day })
        this.props.getmd(op)
    }
    Title() {

        let Today = new Date()
        let Tomorrow = new Date(Today.getTime() + 24*60*60*1000);
        let AfterDay = new Date(Today.getTime() + 48*60*60*1000);

        let td = `今天${Today.getMonth()+1}月${Today.getDate()}日`
        let md = `明天${Tomorrow.getMonth()+1}月${Tomorrow.getDate()}日`
        let hd = `后天${AfterDay.getMonth()+1}月${AfterDay.getDate()}日`
        
        let tabs = [
            { title: td, d: this.getTime(0) },
            { title: md, d: this.getTime(1) },
            { title: hd, d: this.getTime(2) }
        ]
        return (
            <div>
                <Tabs tabs={tabs}
                    onTabClick={(tab, index) => { this.cut(tab.d) }}
                    tabBarActiveTextColor="red"
                    tabBarUnderlineStyle={{ border: '1px solid red' }}
                ></Tabs>
            </div>)
    }
    //时间处理 2019-11-18(格式)
    getTime(day) {
        let date = new Date();
        let year = date.getFullYear()
        let months = date.getMonth() + 1;
        let days = date.getDate() + day
        return `${year}-${months}-${days}`
    }
    render() {
        if (this.state.arrday) {
            let obj = this.state.arrday
            
            return (
                <Fragment>
                    <Show id={this.state.option.movieId}></Show>
                    <div className={dS.title}>
                        {this.Title()}
                    </div>
                    <List {...obj} ></List>
                </Fragment>
            )
        } else {
            return null
        }
    }
}

export default MovieDay