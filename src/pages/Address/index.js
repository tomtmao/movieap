import React, { Component } from 'react';
import detailStyle from './Address.module.css'
import Location from './Location'
import HotCities from './HotCities';
console.log(detailStyle);

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={detailStyle.container}>
                <div>
                    <p className={detailStyle.title}>定位城市</p> 
                    <Location />
                </div>
                <div>
                    <p className={detailStyle.title}>最近访问城市</p> 
                    <Location />
                </div>
                <div>
                    <p className={detailStyle.title}>热门城市</p> 
                    
                    <HotCities />
                </div>  


            </div>
         );
    }
}
 
export default Address;