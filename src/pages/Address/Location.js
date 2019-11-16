import React, { Component } from 'react';
import detailStyle from './Address.module.css'
import {Button} from 'antd-mobile'

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div  className={detailStyle.box}>
                <Button style={{width:'175px',height:'30px',font:'12px/30px ""',marginLeft: '10px'}}>定位失败，请点击重试</Button>
            </div>
         );
    }
}
 
export default Location;