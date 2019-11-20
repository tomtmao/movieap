import React, { Component } from 'react';
import { Tabs, Badge, Button } from 'antd-mobile';
import CinemaMenuStyle from "../../assets/styles/Cinema/CinemaMenu.module.css"



class CinemaMenu extends Component {
    constructor() {
        super()
        this.state = {
            tag: '地区选择'
        }
    }
    handleTabClick(tab, index) {
        let contents = document.getElementsByClassName('content')
        contents[index].style.display = contents[index].style.display === 'block' ?
            contents[index].style.display = 'none' :
            contents[index].style.display = "block"
    }
    handleTag(tag) {
        this.setState({
            tag
        })
        let contents = document.getElementsByClassName('content')
        contents[0].style.display = contents[0].style.display === 'block' ?
            contents[0].style.display = 'none' :
            contents[0].style.display = "block"
    }
    handleCinemaClick(cinemaId){
        //跳转影院详情页面
        let {history} = this.props
        history.push(`/mvroom?cinemaId=${cinemaId}`)
    }
    render() {
        let list = this.props.CinemaShowList
        if (this.state.tag !== '地区选择') {
            list = list.filter(item => item.addr.includes(this.state.tag))

        }

        return (
            <div >
                <div style={{ position: 'relative' }}>
                    <Tabs
                        tabs={[
                            { title: <Badge >{this.state.tag} ▽</Badge> }
                        ]}
                        initialPage={0}
                        tabBarUnderlineStyle={{ display: 'none' }}
                        tabBarActiveTextColor={'black'}
                        onTabClick={this.handleTabClick.bind(this)}
                    > </Tabs>
                    <div style={{ position: 'absolute', width: '100%' }}>
                        <div className="content" style={{ display: 'none', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <ul>
                                <Button style={{ fontSize: '14px', height: '40px' }} onClick={this.handleTag.bind(this, '地区选择')} >全部</Button>
                                {this.props.areaArr.map((item, index) =>
                                    <Button style={{ fontSize: '14px', height: '40px' }} key={index} onClick={this.handleTag.bind(this, item)} >{item}</Button>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    {list.map(item => <div onClick={this.handleCinemaClick.bind(this,item.id)} className={CinemaMenuStyle.context} key={item.id}>
                            <div className={CinemaMenuStyle.left}>
                                <div className={CinemaMenuStyle.title}>
                                    {item.nm}
                                </div>
                                <br />
                                <p style={{ color: "gray",marginLeft:'5px' }}>{item.addr}</p>
                                <br />
                                 {/* 特色 */}
                                <div>
                                    {item.tag.vipTag?<span style={{display:'inline-block',color:'orange',border:"1px solid orange",borderRadius:'1px',margin:'0 5px 0 0'}}>折扣卡</span>:''}
                                    {item.tag.snack?<span style={{display:'inline-block',color:'orange',border:"1px solid orange",borderRadius:'1px',margin:'0 5px 0 0'}}>小吃</span>:''}

                                    {item.tag.hallType?item.tag.hallType.map((item2,index)=><span style={{display:'inline-block',color:'rgb(13, 162, 231)',border:"1px solid rgb(13, 162, 231)",borderRadius:'1px',margin:'0 5px 0 0'}} key={index}>{item2}</span>):''}
                                    
                                    {item.tag.allowRefund?<span style={{display:'inline-block',color:'rgb(13, 162, 231)',border:"1px solid rgb(13, 162, 231)",borderRadius:'1px',margin:'0 5px 0 0'}}>允许改签</span>:''}

                                    
                                </div>
                                <br/>
                                {item.promotion.cardPromotionTag?
                                    (<p style={{ color: 'red' }}>
                                        <span style={{
                                            color:'white',
                                            background:'rgb(13, 162, 231)',
                                            display:'inline-block',
                                            width:'16px',
                                            height:'16px',
                                            font:'14px/16px ""',
                                            borderRadius:'3px'
                                            }}>卡</span> 
                                        &nbsp;
                            
                                        {item.promotion.cardPromotionTag}
                                    </p>)
                                    :
                                    ''
                                }
                                
                            </div>
                           
                            {/* 位置展示 */}
                            <div className={CinemaMenuStyle.right}>
                                    {item.distance}
                            </div>
                        </div>)}
                </div>
            </div>
                );
            }
        }
        
        export default CinemaMenu;