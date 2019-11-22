import React from "react"
import { Carousel } from 'antd-mobile';
import "../../assets/styles/mvRoomSw.css"
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom"



let timer = ''

const mapStateToProps = state => {
    return {
        MvRoomInfo: state.MvRoomInfo.showData,
        movieRoom: state.MvRoomInfo,
        Address:state.MvRoomInfo.cinemaData.addr
    }
}
@withRouter
@connect(mapStateToProps)


class MvSw extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            imgHeight: 176,
            slideIndex: 0
        }
    }

    componentDidMount() {
        timer = setTimeout(() => {
            this.setState({
                data: this.props.MvRoomInfo.movies
            });

        }, 700);
    }

    componentWillUnmount() {
        clearTimeout(timer)
    }
    back(){
        this.props.history.push("./home/hot")
    }
    render() {
        if (this.state.data.length) {
            //console.log(this.state.data, 11111);
            let chooseMovie = this.state.data[this.state.slideIndex] ?
                this.state.data[this.state.slideIndex] : []
            let movieId = chooseMovie.id

            this.props.getId(movieId)
            
            return (
                <div>
                    <div className="cinema-wrap">
                        <div className="cinema-block">
                            <div className="cinema-info" style={{ width: "260px", height: "44px", padding: "15px 100px 15px 15px" }}>
                                <div className="title" style={{ width: "260px", height: "24px", fontSize: "17px", lineHeight: "24px", fontWeight: "700", color: "#333", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                                    {this.props.MvRoomInfo.cinemaName}
                                </div>
                                <div className="location" style={{ width: "260px", height: "18px", marginTop: "2px", fontSize: "13px", lineHeight: "18.5px", color: "#999", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                                    {this.props.Address}
                            </div>
                                <div className="location-icon" style={{ position: "absolute", right: "0", marginTop: "-20px", width: "70px", height: "31px", borderLeft: "1px solid #d8d8d8", textAlign: "center", transform: "translateY(-50%)" }}>
                                    <img onClick={this.back.bind(this)}  alt="" src={require("../../assets/imgs/222.png")} style={{ display: "inline-block", width: "25px", height: "25px", marginTop: "5px" }}>
                                    </img>
                                </div>
                            </div>
                            <div style={{ width: "100%", touchAction: "none" }}>
                                <div style={{ backgroundColor: '#789', width: "100%", height: "97px", padding: "20px 0", position: 'relative' }}>
                                    <div style={{ width: "100%", height: "100%", top: "10px", left: "0", zIndex: "5", position: 'absolute' }}>
                                        <Carousel
                                            className="space-carousel"
                                            style={{
                                                padding: "16px",
                                                overflow: "hidden"
                                            }}
                                            frameOverflow="visible"
                                            cellSpacing={10}
                                            slideWidth={0.2}
                                            autoplay={false}
                                            infinite={false}
                                            dots={false}
                                            selectedIndex={0}
                                            afterChange={index => this.setState({ slideIndex: index })}
                                        >
                                            {this.state.data.map((val, index) => (
                                                <a
                                                    key={val.id}
                                                    style={{
                                                        display: 'block',
                                                        position: 'relative',
                                                        top: this.state.slideIndex === index ? -10 : 0,
                                                        height: this.state.imgHeight,
                                                        boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                                    }}
                                                >
                                                    <img
                                                        src={val.img.replace("w.h", "150.120")}
                                                        alt=""
                                                        style={{ display: "block", width: '100%', height: "100%", verticalAlign: 'top', zIndex: 100 }}
                                                        onLoad={() => {
                                                            window.dispatchEvent(new Event('resize'));
                                                            this.setState({ imgHeight: 'auto' });
                                                        }}
                                                    />
                                                </a>
                                            ))}

                                        </Carousel>
                                    </div>
                                </div>
                                <div style={{ textAlign: "center", background: 'white', padding: '10px 25px' }}>
                                    <p>
                                        <span style={{ font: 'bold 16px/20px ""' }}>{chooseMovie.nm}</span>
                                        &nbsp;
                                    <span style={{ color: 'orange', font: 'bold 12px/20px ""' }}>{chooseMovie.sc ? `${chooseMovie.sc}分` : ''}</span>
                                    </p>
                                    <p style={{ color: "#ccc" }}>{chooseMovie.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        } else {
            return (
                <h1></h1>
            )
        }

    }
}

export default MvSw