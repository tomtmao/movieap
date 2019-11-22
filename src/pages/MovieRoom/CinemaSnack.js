import React, { Component, Fragment } from 'react';
class CinemaSnack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentWillReceiveProps(nextProps) {
        //let cinemaId = nextProps.movieRoom.cinemaId

        // fetch("http://m.maoyan.com/ajax/cinemaDetail?cinemaId=" + cinemaId, {
        //     headers: {
        //         "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
        //         "Referer": 'http://m.maoyan.com/shows/' + cinemaId + '?$from=canary'
        //     }
        // })
        //     .then(body => body.json())
        //     .then(val => {
        //         let arr = val.dealList.dealList.map(item =>
        //             Object.assign({}, item, {
        //                 imageUrl: item.imageUrl.replace('w.h', '92.92')
        //             })
        //         )


        //         this.setState({
        //             list: arr
        //         })

        //     })

        let arr = nextProps.movieRoom.dealList.dealList.map(item =>
            Object.assign({}, item, {
                imageUrl: item.imageUrl.replace('w.h', '92.92')
            })
        )


        this.setState({
            list: arr
        })
    }



    checkPerson(num) {
        let str = ''
        switch (num) {
            case 1:
                str = '单'
                break;
            case 2:
                str = '双'
                break;
            default:
                str = '多'
                break;
        }
        return str
    }
    render() {
        if (!this.state.list) {
            return (
                <Fragment></Fragment>
            )
        } else {
            let list = this.state.list.map(item => (
                <div style={{ display: 'flex', padding: '20px 10px', borderBottom: '1px solid #ccc' }}>
                    <img src={item.imageUrl} alt="" style={{
                        marginRight: '10px',
                        width: '92px',
                        height: '92px'
                    }} />
                    <div style={{
                        flex: '1',
                        justifyContent: 'space-between',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <p >
                            <span style={{
                                background: "orange",
                                color: 'white',
                                borderRadius: '3px',
                                padding: '2px',
                                textAlign: 'center',
                                marginRight: '3px',
                                display: "inline-block"
                            }}>{this.checkPerson(item.recommendPersonNum)}人</span>
                            {item.title}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ color: 'red', font: '16px/20px ""', paddingTop: '20px' }}>￥{item.price}</div>
                            <div>
                                <p style={{ font: "10px/20px ''", color: 'gray' }}>{item.curNumberDesc}</p>
                                <div style={{
                                    background: 'red',
                                    textAlign: 'center',
                                    height: '20px',
                                    width: '40px',
                                    color: 'white',
                                    borderRadius: '3px',
                                    font: "12px/20px '' "
                                }}>去购买</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))

            return (
                <div style={{ background: 'white', padding: '15px' }}>
                    <p style={{ font: '16px/30px ""', height: '30px', borderBottom: '1px solid #C9C9C9' }}>影院超值套餐</p>
                    {list ? list : '今日暂无'}
                </div>
            );
        }

    }
}

export default CinemaSnack;
