import React,{Fragment} from "react"
import {Route,NavLink,Link} from "react-router-dom"
import tu from "../assets/imgs/tutong.png"
import defaultStyle from "../assets/styles/main-container.module.css"
import Hot from "../pages/Hot"
import Recent from "../pages/Recent"
import Address from "../pages/Address"


const Search=()=><h1>555</h1>









class Container extends React.Component{
    // componentWillReceiveProps(){
    //     console.log(12)
    //     this.setState({})
    //     console.log(51)
    //   }
    render(){
        console.log("render触发了")
        return(
            <Fragment>
                <div className={defaultStyle.container}>
                    
                    <Link to="/home/address" style={{color: '#777'}}>北京▽</Link>
                    <NavLink to="/home/hot" activeStyle={{color: '#ef4238',height:"100%",borderBottom:"2px solid #ef4238"}} className={defaultStyle.bbb}>正在热映</NavLink>
                    <NavLink to="/home/recent" activeStyle={{color: '#ef4238',height:"100%",borderBottom:"2px solid #ef4238"}} className={defaultStyle.bbb}>即将上映</NavLink>
                    <Link to="/home/serach"><img src={tu} alt="" className={defaultStyle.tu}/></Link>
                </div>
                <Route path="/home/address" component={Address}></Route>
                <Route path="/home/hot" component={Hot}></Route>
                <Route path="/home/recent" component={Recent}></Route>
                <Route path="/home/serach" component={Search}></Route>
            </Fragment>
        )
    }
}

export default Container