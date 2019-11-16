import React from "react"
import { Carousel, WingBlank } from 'antd-mobile';
import store from "../../store"
import ReBanner from "../../assets/styles/RecentBanner.css"
class Banner extends React.Component {
    state = {
        data: store.getState().Recent,
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        // setTimeout(() => {
        //   this.setState({
        //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        //   });
        // }, 100);
    }
    render() {
        let { Recent } = store.getState()
        // console.log(Recent)
        return (
            <WingBlank>
                <div className="imgList">
                <p className="title">近期最受欢迎</p>
                    <Carousel
                        autoplay={true}
                        infinite
                        dots={false}
                        cellSpacing={10}
                        slideWidth={0.3}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map((val, index) => (
                            <a
                            key={val.id}
                            href="http://www.alipay.com"
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
                {/* {this.state.data.map((val, index) => (
            <a
              key={val}
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
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))} */}

            </WingBlank>
        );
    }
}

export default Banner