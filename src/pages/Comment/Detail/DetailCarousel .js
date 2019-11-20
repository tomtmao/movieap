import React from 'react'
import { Carousel } from 'antd-mobile';

class DetailCarousel extends React.Component {
  state = {
    data: [],
    imgHeight: 176,
  }
  static getDerivedStateFromProps(nextProps){
      if(nextProps){
          return {
              data:nextProps.list
          }
      }
      return null
  }
  render() { 
    return (
      <div style={{height:"100%",paddingBottom:"10px",touchAction:"none"}}>
        <Carousel 
          style={{height:'100%'}}
          infinite
          dots={false}
          cellSpacing={10}
          slideWidth={0.8}
        >
          {this.state.data.map(val => (
            <a 
              key={val}
              href="#"
              style={{ display: 'inline-block', width: '100%', height:"100%" }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' ,display:'block',height:"210px"}}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default DetailCarousel