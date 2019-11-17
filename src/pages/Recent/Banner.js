import React from "react"
import { Carousel, WingBlank } from 'antd-mobile';
import store from "../../store"
import "../../assets/styles/Recent/RecentBanner.css"
class Banner extends React.Component {
    constructor(){
        super()
        this.state = {
            data: [],
            imgHeight: 176,
        }
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: 
            store.getState().Recent.splice(0,8)
          });
        }, 100);
    }
    render() {
        let Recent = store.getState()
        return (
            <WingBlank>
                <div className="imgList">
                <p className="title">近期最受欢迎</p>
                    <Carousel
                        autoplay
                        infinite
                        dots={false}
                        cellSpacing={10}
                        slideWidth={0.4}
                    >
                    {this.state.data.map((val, index) => (
                            <a
                            key={val.id}
                            href="#"
                            style={{
                                display: 'inline-block',
                                width:"100%",
                                height:"100%",
                            }}
                        >
                            <img
                                src={val.img}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: '100%' });
                                }}
                            />
                        </a> 
                    ))}
                    </Carousel>
                </div>
            </WingBlank>
        );
    }
}

export default Banner