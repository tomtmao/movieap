import React from "react"
import { Carousel, WingBlank } from 'antd-mobile';
import "./mvRoomSw.css"
import { connect } from 'react-redux'

let timer = ''

const mapStateToProps = state => {
    return {
        MvRoomInfo: state.MvRoomInfo
    }
}

@connect(mapStateToProps)


class MvSw extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            imgHeight: 176,
        }
    }

    componentDidMount() {
        timer = setTimeout(() => {
            this.setState({
                data: this.props.MvRoomInfo.movies
            });
            console.log(this.state.data);

        }, 700);
    }

    componentWillUnmount() {
        clearTimeout(timer)
    }
    render() {
        if (this.state.data) {
            return (
                <div className="cinema-block">
                    <div className="cinema-wrap" style={{ width: "260px", height: "44px", padding: "15px 15px 100px", backgroundColor: "red" }}>
                        <div className="cinema-info" style={{ width: "260px", height: "44px", padding: "15px 15px 100px" }}>
                            <div className="title" style={{ width: "260px", height: "24px", fontSize: "17px", lineHeight: "24px", fontWeight: "700", color: "#333", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{this.props.MvRoomInfo.cinemaName}
                            </div>
                            <div className="location" style={{ width: "260px", height: "18px", marginTop:"2px",fontSize: "13px", lineHeight: "18.5px",  color: "#999", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>影院的地址
                            </div>
                            <div className="location-icon" style={{ position: "absolute",right: "0",top: "50%",width: "70px",height: "31px",borderLeft: "1px solid #d8d8d8",textAlign: "center",transform: "translateY(-50%)"}}>
                                <img alt="" src="../../public/locationlogo.png" style={{display: "inline-block",width: "19px",height: "22px",marginTop: "5px"}}/>
                            </div>
                        </div>
                    </div>
                <WingBlank>
                    <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.4}
                        autoplay
                        infinite
                    >
                            {this.state.data.map((val, index) => (
                                <a key={val.id}
                                    href="http://www.alipay.com"
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
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                    </Carousel>
                </WingBlank>
                </div>
            );
        } else {
            return (
                <h1>暂无数据</h1>
            )
        }

    }
}

export default MvSw