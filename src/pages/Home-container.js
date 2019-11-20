import React, { Fragment } from "react"
import { Route, NavLink, Link,Switch } from "react-router-dom"
import tu from "../assets/imgs/tutong.png"
import defaultStyle from "../assets/styles/main-container.module.css"
import Hot from "./Hot"
import Recent from "../pages/Recent"
import store from '../store'
import Search from '../Search'

class Container extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={defaultStyle.container}>
                    <Link to="/address" style={{ color: '#777' }}>{store.getState().city.nm}▽</Link>
                    <NavLink to="/home/hot" activeStyle={{ color: '#ef4238', height: "100%", borderBottom: "2px solid #ef4238" }} className={defaultStyle.bbb}>正在热映</NavLink>
                    <NavLink to="/home/recent" activeStyle={{ color: '#ef4238', height: "100%", borderBottom: "2px solid #ef4238" }} className={defaultStyle.bbb}>即将上映</NavLink>
                    <Link to="/home/search"><img src={tu} alt="" className={defaultStyle.tu} /></Link>
                </div>
                <Switch>
                    <Route path="/home/search" component={Search}></Route>
                    <Route path="/home/recent" component={Recent}></Route>
                    <Route path="/home/hot"  component={Hot}></Route>
                    <Route path="/home"  component={Hot}></Route>
                    <Route path="/"  component={Hot}></Route>
                </Switch>
            </Fragment>
        )
    }
}

export default Container