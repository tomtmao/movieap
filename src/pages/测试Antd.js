import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const style = {
  height: 150,
  display:"flex",
  borderBottom: '1px solid gray',
  margin: 0,
  padding: 10,
};

export default class App extends React.Component {
  state = {
    //items: Array.from({ length: 20 }),
    items: [{
      "id": 1217023,
      "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
      "wish": 614185,
      "wishst": 0,
      "nm": "唐人街探案3",
      "comingTitle": "2020年1月25日 周六"
    }, {
      "id": 1217023,
      "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
      "wish": 614185,
      "wishst": 0,
      "nm": "唐人街探案3",
      "comingTitle": "2020年1月25日 周六"
    }, {
      "id": 1217023,
      "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
      "wish": 614185,
      "wishst": 0,
      "nm": "唐人街探案3",
      "comingTitle": "2020年1月25日 周六"
    },{
      "id": 1217023,
      "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
      "wish": 614185,
      "wishst": 0,
      "nm": "唐人街探案3",
      "comingTitle": "2020年1月25日 周六"
    }, {
      "id": 1217023,
      "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
      "wish": 614185,
      "wishst": 0,
      "nm": "唐人街探案3",
      "comingTitle": "2020年1月25日 周六"
    }, {
      "id": 1217023,
      "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
      "wish": 614185,
      "wishst": 0,
      "nm": "唐人街探案3",
      "comingTitle": "2020年1月25日 周六"
    }, {
      "id": 1217023,
      "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
      "wish": 614185,
      "wishst": 0,
      "nm": "唐人街探案3",
      "comingTitle": "2020年1月25日 周六"
    }, {
      "id": 1217023,
      "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
      "wish": 614185,
      "wishst": 0,
      "nm": "唐人街探案3",
      "comingTitle": "2020年1月25日 周六"
    }], //预加载,内容展示出来之后必须比可视窗口长，才能触发后续加载
  };

  fetchMoreData = () => {
    if(this.state.items<30){

    }
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat([ {
          "id": 1217023,
          "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
          "wish": 614185,
          "wishst": 0,
          "nm": "唐人街探案311111111111",
          "comingTitle": "2020年1月25日 周六"
        },{
          "id": 1217023,
          "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
          "wish": 614185,
          "wishst": 0,
          "nm": "唐1212121111",
          "comingTitle": "2020年1月25日 周六"
        },
        {
          "id": 1217023,
          "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
          "wish": 614185,
          "wishst": 0,
          "nm": "唐人街探案311111111111",
          "comingTitle": "2020年1月25日 周六"
        },{
          "id": 1217023,
          "img": "http://p0.meituan.net/100.120/movie/b5c913630f1fe53775d957b8f115ed5d929026.jpg",
          "wish": 614185,
          "wishst": 0,
          "nm": "唐1212121111",
          "comingTitle": "2020年1月25日 周六"
        }]), //后续加载
      });
    }, 1500);
  };

  render() {
    return (
      <div>
        <h1>demo: Pull down to refresh</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          pullDownToRefresh
          pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>
              &#8595; Pull down to refresh
            </h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          }
          refreshFunction={this.fetchMoreData}
        >
          {this.state.items.map((item, index) => (
            <div style={style} key={index}>
              <div className='left'>
                <img src={item.img} alt=""/>
              </div>
              <div className='right'>
                <h3>{item.nm}</h3>
                <p><span>{item.wish}</span>人想看</p>
                <p>{item.comingTitle}上映</p>
              </div>

            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}



