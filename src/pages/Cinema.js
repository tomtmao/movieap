import React,{Fragment} from "react"
import {Route,NavLink,Link} from "react-router-dom"
import defaultStyle from "../assets/styles/main-container.module.css"




const Search=()=><h1>555</h1>

class Cinema extends React.Component{
    render(){
        return(
            <Fragment>
                <div className={defaultStyle.container}>
                    
                    <Link to="/address" style={{color: '#777'}}>北京▽</Link>
                    
                    <Link to="/home/serach">搜索</Link>
                </div>
                {/* <Route path="/home/hot" component={Hot}></Route>
                <Route path="/home/recent" component={Recent}></Route>
                <Route path="/home/serach" component={Search}></Route> */}
            </Fragment>
        )
    }
}

export default Cinema