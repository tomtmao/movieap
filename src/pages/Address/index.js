import React, { Component } from 'react';
import detailStyle from '../../assets/styles/Address.module.css'
import Location from './Location'
import HotCities from './HotCities';
import CityList from './CityList';
import { connect } from 'react-redux'
import RecentCity from './RecentCity';

const actionCreate = (type,payload)=>({type,payload})

const mapStateToProps = state => {
    return {
        ci:state.ci
    }
}

@connect(mapStateToProps)

class Address extends Component {

    render() {
        return (
            <div className={detailStyle.container}>
                <div>
                    <p className={detailStyle.title} >定位城市</p>
                    <Location />
                </div>
                <div>
                    <p className={detailStyle.title} >最近访问城市</p>
                    <RecentCity/>
                </div>
                <div>
                    <p className={detailStyle.title} >热门城市</p>

                    <HotCities props={this.props}/>
                </div>
                <hr />
                {<CityList props={this.props}/>}

            </div>
        );
    }
}

export default Address;