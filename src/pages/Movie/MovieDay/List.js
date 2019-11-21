import React, { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import s from "../../../assets/styles/List.module.css"
import {withRouter} from 'react-router-dom'

@withRouter

class App111 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.cinemas?this.props.cinemas:[]
        }
    }
    componentWillReceiveProps(nextprops){
        this.setState({
            items:nextprops.cinemas
        })
    }
    jump(item) {
        // console.log("跳转")
        // console.log("电影id " + this.props.movieId)
        // console.log("电影院id " + item.id)
        // console.log(this.props,'props');
        let {history} = this.props
        //mvroom?cinemaId=2598
        history.push('/mvroom?cinemaId='+item.id)
    }
    render() {
        if (this.state.items.length) {
            return (
                <Fragment>
                    <div >
                        <div id="scrollableDiv" className={s.scrollableDiv}>
                            <InfiniteScroll
                                dataLength={this.state.items.length}
                                hasMore={true}
                                scrollableTarget="scrollableDiv"
                                style={{ background: "#fff" }}
                            >
                                {this.state.items.map((item, index) => (
                                    <div className={s.box} key={index} onClick={this.jump.bind(this, item)}>
                                        <div className={s.price}>
                                            <span className={s.span1}>{item.nm + " "}</span>
                                            <span className={s.span2}>{item.sellPrice}</span>
                                            <span className={s.span3}>元起</span>
                                        </div>
                                        <div className={s.addrs}>
                                            <span className={s.addr1}>{item.addr}</span>
                                            <span>{item.distance}</span>
                                        </div>
                                        <div className={s.tag}>
                                            {item.tag.allowRefund ? <span className={s.allowRefund}>退</span> : ""}
                                            {item.tag.endorse ? <span className={s.endorse}>改签</span> : ""}
                                            {item.tag.snack ? <span className={s.snack}>小吃</span> : ""}
                                            {item.tag.vipTag ? <span className={s.vipTag}>折扣卡</span> : ""}
                                            {item.tag.hallTypeVOList.map((item, index) => {
                                                return <span className={s.hallType} key={index}>{item.name}</span>
                                            })}
                                        </div>
                                        {item.promotion.cardPromotionTag ?
                                            <div className={s.kabox}>
                                                <span>
                                                    <img className={s.ka} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="" />
                                                </span>
                                                <span className={s.kazi}>{item.promotion.cardPromotionTag}</span>
                                            </div> : ""}
                                        <div className={s.showtimes}>近期场次：{item.showTimes}</div>
                                    </div>
                                ))}
                            </InfiniteScroll>
                        </div>
                    </div>
                </Fragment >
            );
        } else {
            return <div className={s.wu}>暂无数据</div>
        }
    }
}

export default App111
