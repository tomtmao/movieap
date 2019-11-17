import React,{Fragment} from "react"
import {Route,NavLink,Link} from "react-router-dom"
import defaultStyle from "../assets/styles/main-container.module.css"



class Cinema extends React.Component{
    render(){
        return(
            <Fragment>
                <div className={defaultStyle.container}>
                    <Link to="/address" style={{color: '#777'}}>北京▽</Link>
                    <Link to="/cinemasearch">
                        <input type="text" value='搜索影院'/>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

export default Cinema