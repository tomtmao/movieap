import React, { Component } from 'react';
import detailStyle from './Address.module.css'
import { Button } from 'antd-mobile'
import Citylist from '../../utils/city'

let HotList = Citylist.cts.slice(0,9)

class HotCities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "cts": HotList
        }
    }
    render() {
        let list = this.state.cts.map(item => <Button style={{ width: '90px', font: '14px/30px "" ', height: '30px', margin: '10px' }} key={item.id} ci={item.id}>{item.nm}</Button>)
        return (
            <div className={detailStyle.box}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {list}
                </div>
            </div>

        );
    }
}

export default HotCities;