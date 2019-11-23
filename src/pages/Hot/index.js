import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { addHot } from "../../store/actionCreator"  //引入addHot方法请求数据
import { connect } from "react-redux"
import store from "../../store/index"
import HotStyle from "./Hot.module.css"

let fetchIndex = 8
//控制componentWillReceive只在最开始解决一次
let propsUpdate = false

const stateProps = state => {
  return {
    items: state.HotArr
  }
}

const dispatchProps = dispatch => {
  return {
    getList(i) {
      dispatch(addHot(i))  // i是城市参数 
    }
  }
}

@connect(stateProps, dispatchProps)

class Hot extends React.Component {
  constructor(props) {
    super()
    this.state = {
      items: props.items.slice(0, fetchIndex-1)
    }
  }
  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(this.props.items.slice(fetchIndex - 1, fetchIndex)), //后续加载
      });
    }, 1500);
    fetchIndex = fetchIndex + 1
  };
  componentDidMount() {
    let {city} = store.getState()
    this.props.getList(city.ci) // 触发请求函数,请求后台数据,并将城市id发过去
  }
  componentWillUnmount(){
    propsUpdate = false
  }
  jump(_id){   // 调转路由
    let {url}=this.props.match
    
    if(url === '/'){
      this.props.history.push(`home/hot/movieday/${_id}`)
    }else{
      this.props.history.push(`${url}/movieday/${_id}`)
    }
    
  }
  componentWillReceiveProps(props) {
    if (!propsUpdate) {
      this.setState({
        items: props.items.slice(0, fetchIndex)
      })
      setTimeout(() => {
        propsUpdate = true
      }, 1000);
    }
  }

  render() {
    const style = { 
      height: 115,
      display: "flex",
      margin: 0,
      paddingLeft: '15px',
      fontSize: '13px',
      color: "#666"
    };

    // 购票
    const sell = <div style={{
      width: "47px", lineHeight: "27px", textAlign: "center", boxSizing: "border-box",
      backgroundColor: "#f03d37", color: "#fff", bordeRadius: "4px", whiteSpace: "nowrap", fontSize: "12px",
      cursor: "pointer", borderRadius: "8px",margin:"30px 30px 0 0"
    }}><span>购票</span></div>

    //  预售
    const presell = <div style={{
      width: "47px", lineHeight: "27px", textAlign: "center", boxSizing: "border-box",
      backgroundColor: "#3c9fe6", color: "#fff", bordeRadius: "4px", whiteSpace: "nowrap", fontSize: "12px",
      cursor: "pointer",borderRadius: "8px",margin:"30px 30px 0 0"
    }}><span>预售</span></div>
    return (
      <div style={{overflowX:"hidden"}} >
        <div id="scrollableDiv" style={{ height: 800, overflowX: "hidden" ,overflowX:"hidden"}}>
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
            style={{overflowX:"hidden"}}
          >
            {this.state.items.map((item, index) => (
              <div style={style} key={item.id} onClick={this.jump.bind(this,item.id)}>
                <div style={{ marginTop: "12px" }}><img alt="" src={item.img} style={{ width: "64px", height: "90px" }} /></div>
                <div className={HotStyle.space}>
                  <div> <div style={{ marginBottom: '7px', fontSize: '17px', fontWeight: 'bold', color: "#333" }}>{item.nm}</div>
                  {/* 观众评分 */}
                  <div><span></span>{item.sc ? <span><span>观众评</span><span style={{ color: "#faaf00", fontSize: "17px", fontWeight: "700", marginLeft: "2px" }}>{item.sc}</span></span>:
                    <span><span style={{ color: "#faaf00", fontSize: "17px" }}>{item.wish}</span><span>人想看</span></span>}
                  </div>
                  <div style={{ color: "#777", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: "6px", width: "219px" }}>主演:{item.star}</div>
                  <div style={{ color: "#777", marginTop: "6px" }}>{item.showInfo}</div></div>
                 <div>{item.sc ? sell : presell}</div>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}


export default Hot
