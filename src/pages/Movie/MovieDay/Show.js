import React, { Fragment } from "react"
import { connect } from "react-redux"
import { getMovie } from "../../../store/actionCreator"
import Top from "../../../component/Main/Top"
import {withRouter} from "react-router-dom"
import tututu from "../../../assets/imgs/111.png"

const mapStateToProps = state => {
    return {
        moviemsg: state.MovieMsg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getmmsg(movieId) {
            dispatch(getMovie(movieId))
        }
    }
}

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Show extends React.Component {
    componentDidMount() {
        let id = this.props.id
        this.props.getmmsg(id)
    }
    re(){
        this.props.history.push("/home/hot")
    }
    jump() {
        this.props.history.push("/comment/"+this.props.id)
    }
    render() {
        
        if (this.props.moviemsg.cat) {
            return (
                <Fragment>
                    <Top>{this.props.moviemsg.nm}</Top>
                    <div style={{
                        backgroundColor: "#333",
                        width: "100%",
                        height: "188px",
                        zIndex: "-1",
                        position: "absolute",
                    }}>
                        <div style={{
                            backgroundImage: "url(//p0.meituan.net/71.100/movie/609e45bd40346eb8b927381be8fb27a61760914.jpg)",
                            width: "100%",
                            height: "100%",
                            zIndex: "-1",
                            overflow: "hidden",
                            position: "absolute",
                            // -webkit-filter: "blur(1.2rem)",
                            filter: "blur(0.8rem)",
                            backgroundSize: "cover",
                            backgroundepeat: " no-repeat",
                            opacity: ".65",
                        }}>
                        </div>
                    </div>
                    <div onClick={this.jump.bind(this)} style={{
                        position: "relative"
                    }}>
                        <div style={{
                            color: "#fff",
                            fontSize: "12px",
                            height: "150px",
                            padding: "19px 30px 19px 15px",
                        }}>
                            <div style={{ display: "flex" }}>
                                {<img alt="" src={this.props.moviemsg.img.replace("w.h", "148.208")} style={{ width: "110px", height: "150px", boxSizing: "border-box"}}></img>}
                                <div style={{ marginLeft: "12.5px" }}>
                                    <div style={{
                                        fontSize: "20px",
                                        fontWeight: "700",
                                        marginTop: "2px",
                                        color: "#fff",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap"
                                    }}>{this.props.moviemsg.nm}</div>
                                    <div style={{
                                        marginTop: "10px",
                                        fontSize: "12px",
                                        color: "#fff",
                                        opacity: "0.8",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        width: "206px"
                                    }}>{this.props.moviemsg.enm}</div>
                                    {this.props.moviemsg.sc ? <div style={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "#fc0",
                                        marginTop: "8px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        width: "206px"
                                    }}>
                                        {this.props.moviemsg.sc}
                                        <span style={{
                                            color: "#fff",
                                            opacity: "0.8",
                                            fontSize: "12px",
                                        }}>
                                            {`（${this.props.moviemsg.snum}人评）`}
                                        </span>
                                    </div> :
                                        <div style={{
                                            fontSize: "14px",
                                            fontWeight: "700",
                                            color: "#fc0",
                                            marginTop: "8px",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            width: "206px"
                                        }}>
                                            <span>{this.props.moviemsg.wish + "人想看"}</span>
                                        </div>
                                    }
                                    <div style={{
                                        marginTop: "5px",
                                        fontSize: "12px",
                                        color: "#fff",
                                        opacity: "0.8",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        width: "206px"
                                    }}>{this.props.moviemsg.cat}</div>
                                    <div style={{
                                        marginTop: "8px",
                                        fontSize: "12px",
                                        color: "#fff",
                                        opacity: "0.8",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        width: "206px"
                                    }}>
                                        {this.props.moviemsg.fra}/<span>{this.props.moviemsg.dur}分钟</span>
                                    </div>
                                    <div style={{
                                        marginTop: "8px",
                                        fontSize: "12px",
                                        color: "#fff",
                                        opacity: "0.8",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        width: "206px"
                                    }}>{new Date().getFullYear()+"年"+(new Date().getMonth()+1)+"月 上映"}</div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            position: "absolute",
                            right: "15px",
                            top: "50%"
                        }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC" alt="" />
                        </div>
                    </div >
                    <div onClick={this.re.bind(this)} style={{
                        position: "absolute",
                        // fontSize: "37px",
                        // color:"#fff",
                        top:"28px",
                        left:"10px"
                    }}>
                        <img style={{
                            width:"26px",
                            height:"26px",
                            marginTop:'20px'
                        }} src={tututu} alt=""/>
                    </div>
                </Fragment>
            )
        } else {
            return null
        }
    }
}

export default Show