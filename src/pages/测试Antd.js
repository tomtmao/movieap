import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux'
import Main from '../component/Main';

const createAction = (type, payload) => ({ type, payload })
const style = {
  height: 150,
  display: "flex",
  borderBottom: '1px solid gray',
  margin: 0,
  padding: 10,
};

//控制预先展示的条数
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
    getList() {
      fetch("/api/ajax/movieOnInfoList?token=").then(body => body.json()).then(val => {
        dispatch(createAction('addHot', val.movieList
        ))
      })

    }
  }
}
@connect(stateProps, dispatchProps)

class App111 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(this.props.items.slice(fetchIndex-1, fetchIndex)), //后续加载
      });
    }, 1500);
    fetchIndex = fetchIndex + 1
  };
  componentDidMount() {
    this.props.getList()
  }
  componentWillReceiveProps(props) {
    if(!propsUpdate){
      this.setState({
        items: props.items.slice(0, fetchIndex)
      })
      setTimeout(() => {
        propsUpdate=true
      }, 1000);
    }
  }

  render() {
    return (
      <div >
        <h1>demo: Pull down to refresh</h1>
        <hr />
        <div id="scrollableDiv" style={{ height: 800, overflow: "auto" }}>
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {this.state.items.map((item, index) => (
            <div style={style} key={index}>
              {item.nm}
            </div>
          ))}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App111
