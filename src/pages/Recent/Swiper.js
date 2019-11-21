import React from "react"
import store from "../../store"
import "../../assets/styles/BannerSwiper.css"

//定义全局变量
let index = 0;
//根据类名获取元素集合
let silders = document.getElementsByClassName('silder');
let timer = function () { }

class Swiper extends React.Component {
    componentDidMount() {
        //实现页面加载完成，图片自动切换2s一次；
        timer = setInterval(function () {
            // console.log("timer")
            this.hide();
            this.checkIndex('+');
            this.show();
        }.bind(this), 3000);
    }
    //组件即将
    componentWillUnmount() {
        clearInterval(timer)
    }

    $(ele) { return document.querySelector(ele) }
    //实现下一张的功能   
    next() {
        this.hide();
        this.checkIndex('-');
        this.show();
    };
    //实现上一张的功能
    before() {
        this.hide();
        this.checkIndex('+');
        this.show();
    };

    //重复部分封装函数法实现
    hide() {//隐藏DOM样式
        silders[index].className = 'silder';
    }

    show() {//显示选中的DOM样式
        silders[index].className = 'silder show';
    }

    checkIndex(xingwei) {//更新index索引
        if (xingwei === '+') {//下一张
            if (index >= store.getState().Recent.length - 1) {
                index = 0;
            } else {
                index++;
            }
        } else if (xingwei === '-') {//上一张
            if (index <= 0) {
                index = store.getState().Recent.length - 1;
            } else {
                index--;
            }
        } else {//index自己赋值
            index = xingwei;
        }
    }

    render() {
        let SwiperArr = store.getState().Recent

        return (
            <div className="img-banner">
                <p className="p-title">近期最受欢迎</p>
                <div className="container">
                    {/* 图片集合 
                    {/* slide-wrapper:滑动的包装  */}
                    <div className="slide-wrapper">
                        {SwiperArr.map((val, index) => {
                            if (index === 0) {
                                //设置初始时，第一张为show
                                return (
                                    <div className="silder show" key={val.id} >
                                        <div style={{display:'flex',width:'80%',height:'80%'}}>
                                            <span className="img-a" style={{flex:2,height:"100%"}}>
                                                <img src={val.img} alt="" style={{height:"100%"}} className="movie-img" />
                                            </span>
                                            <div className="banner-right" style={{ background: "linear-gradient(left,rgb(56, 157, 175),rgb(42, 52, 97))", width: "100px",flex:'1' }}>
                                                <h4>{val.nm}</h4>
                                                <p className="neirong"><span style={{ color: "#faaf00" }}>{val.wish}</span><span>想看</span></p>
                                                <p className="neirong"><span>{val.comingTitle}</span></p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            } else {
                                return (
                                    <div className="silder" key={val.id} >
                                        <div style={{display:'flex',width:'80%',height:'80%'}}>
                                            <span className="img-a" style={{flex:2,height:"100%"}}>
                                                <img src={val.img} alt="" style={{height:"100%"}} className="movie-img" />
                                            </span>
                                            <div className="banner-right" style={{ background: "linear-gradient(left,rgb(56, 157, 175),rgb(42, 52, 97))", width: "100px",flex:'1' }}>
                                                <h4>{val.nm}</h4>
                                                <p className="neirong"><span style={{ color: "#faaf00" }}>{val.wish}</span><span>想看</span></p>
                                                <p className="neirong"><span>{val.comingTitle}</span></p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        }

                        )}
                    </div>

                    {/* 左右按钮  */}
                    <div className="btn-box">
                        <div className="btn-left" onClick={this.next.bind(this)}><span className="bl">{"<"}</span></div>
                        <div className="btn-right" onClick={this.before.bind(this)}><span className="br">{">"}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Swiper