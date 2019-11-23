import React, { Component } from 'react'
import Slider from "react-slick";
import "./index.css";

class Test extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:500
        };
        return (
            <div className="container">
            <Slider {...settings}>
              <div>
                  <p>1</p>
                <img style={{width:'100px',height:"100px"}} src="http://placekitten.com/g/400/200" />
              </div>
              <div>
              <p>2</p>
                <img style={{width:'100px',height:"100px"}} src="http://placekitten.com/g/400/200" />
              </div>
              <div>
              <p>3</p>
                <img style={{width:'100px',height:"100px"}} src="http://placekitten.com/g/400/200" />
              </div>
              <div>
              <p>4</p>
                <img style={{width:'100px',height:"100px"}} src="http://placekitten.com/g/400/200" />
              </div>
            </Slider>
          </div>
        );
    }
}
export default Test;