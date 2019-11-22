import React, { Component } from 'react';
import detailStyle from '../../assets/styles/Address/Address.module.css'
import { Button } from 'antd-mobile'
import Citylist from 'utils/city.json'

const actionCreate = (type,payload) => ({type,payload})
class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude: '',//经度
            latitude: '',//纬度
            city: '',
            district: '',
            street: '',
            position: '',//位置名称
        }
    }
    componentWillMount = () => {
        this.getPositions();
    };
    getPositions = () => {
        return new Promise(() => {
            /** 获取当前位置信息 */
            navigator.geolocation.getCurrentPosition(
                location => {
                    this.setState({
                        longitude: location.coords.longitude,//经度
                        latitude: location.coords.latitude,//纬度
                    });
                    //console.log(this.state.longitude);
                    //console.log(this.state.latitude);

                    //通过调用高德地图逆地理接口，传入经纬度获取位置信息
                    fetch(`https://restapi.amap.com/v3/geocode/regeo?key=29b597393d4036804a8106642fd4baf3&location=${this.state.longitude},${this.state.latitude}&radius=1000&extensions=all&batch=false&roadlevel=0`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    })
                        .then((response) => response.json())
                        .then((jsonData) => {
                            //console.log(jsonData, 121212)
                            try {
                                this.setState({
                                    city: jsonData.regeocode.addressComponent.city,
                                    district: jsonData.regeocode.addressComponent.district,
                                    street: jsonData.regeocode.addressComponent.township,
                                    position: jsonData.regeocode.formatted_address,
                                });
                            } catch (e) {

                            }
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                },
                error => {
                    console.error(error);
                }
            );

        })
    }
    handleClick(cityName) {
        //通过城市名称获取对应城市数据
        let Cityobj = Citylist.cts.find(item => item.nm === cityName)

        let{id,nm} = Cityobj
        let { dispatch, history } = this.props.props

        //修改state
        dispatch(actionCreate('CHANGE_CI', {
            ci: id,
            nm
        }))

        //将点击记录保存在本地储存上
        let arr = JSON.parse(localStorage.getItem('RecentCity'))

        let obj = {
            id: id,
            nm
        }
        let flag = true
        //判断数组是否有这个记录
        for (let item of arr) {
            if (item.id === obj.id) {
                flag = false;
                //return
            }
        };

        if (flag) {
            arr.unshift(obj)

            if (arr.length > 5) {
                arr = arr.slice(0, 5)
            }

            localStorage.setItem('RecentCity', JSON.stringify(arr))
        }

        //跳转首页
        history.push('/home/hot')
    }
    reset(){
        this.getPositions();
    }
    render() {
        if (this.state.city) {
            let city = this.state.city.slice(0, this.state.city.slice.length)

            return (
                <div className={detailStyle.box}>
                    <Button
                        style={{ width: '90px', height: '30px', font: '14px/30px ""', marginLeft: '10px' }}
                        onClick={this.handleClick.bind(this, city)}
                    >
                        {city}

                    </Button>
                    {/* <div >经度：{this.state.longitude}</div>
                    <div >纬度：{this.state.latitude}</div>
                    <div >城市：{this.state.city}</div>
                    <div >区域：{this.state.district}</div>
                    <div >街道：{this.state.street}</div>
                    <div >详细位置：{this.state.position}</div> */}
                </div>
            )
        } else {
            return (
                <div className={detailStyle.box}>
                    <Button style={{ width: '175px', height: '30px', font: '12px/30px ""', marginLeft: '10px' }} onClick={this.reset.bind(this)}>定位失败，请点击重试</Button>
                    {/* <div >经度：{this.state.longitude}</div>
                    <div >纬度：{this.state.latitude}</div>
                    <div >城市：{this.state.city}</div>
                    <div >区域：{this.state.district}</div>
                    <div >街道：{this.state.street}</div>
                    <div >详细位置：{this.state.position}</div> */}
                </div>
            );
        }

    }
}

export default Location;