import React, { Component } from "react"
import '../assets/styles/login.css'
import { InputItem, WhiteSpace, Button,} from 'antd-mobile';
import { Tabs, Badge } from 'antd-mobile';
const tabs = [
  { title: <Badge>美团账号登录</Badge> },
  { title: <Badge >手机验证登录</Badge> },
];


class Login extends Component {
  constructor() {
    super()
  }
  jump=()=>{
    let {history}=this.props;
    console.log(history,1111);
    history.push('/')
  }
  render() {
    return (
      <div>
        <div className='movie' >
          <button className='row' onClick={this.jump}>&lt;</button>
          猫眼电影
        </div>
        <Tabs tabs={tabs}
          initialPage={1}

          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{ display: 'flex', textAlign: 'left', backgroundColor: '#fff' }}>
            <div style={{ width: '100%' }}>
              <InputItem
                value=""
                placeholder="账号名/手机号/Email"
                disabled
              ></InputItem>
              <InputItem
                type="password"
                placeholder="请输入您的密码"
              ></InputItem>
              <div style={{ height: '45px', padding: '10px', width: '100%' }}>
                <Button type="submit" style={{
                  backgroundColor: '#e54847', height: '30px', color: 'white', fontSize: '16px',
                  lineHeight: '30px', width: '100%'
                }}>登录</Button>
              </div>
              <div className="link_a">
                <a href="#">立即注册</a>
                <a href="#">找回密码</a>
              </div>
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <span>© 猫眼电影 客服电话：<a href="tel:4006705335" style={{ color: 'red' }}>400-670-5335</a></span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', textAlign: 'left', backgroundColor: '#fff' }}>
            <div style={{ width: '100%' }}>
               <InputItem
                value=""
                placeholder="请输入手机号"
              ></InputItem>
              <InputItem
                type="password"
                placeholder="请输入短信验证码"
              ></InputItem>
              <div style={{ height: '45px', padding: '10px', width: '100%' }}>
                <Button type="submit" style={{
                  backgroundColor: "#ccc", height: '30px', color: '#fff', fontSize: '14px',
                  lineHeight: '30px', width: '100%'
                }}>登录</Button>
              </div>
              <div className="link_a">
                <a href="#">立即注册</a>
                <a href="#">找回密码</a>
              </div>
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <span>© 猫眼电影 客服电话：<a href="tel:4006705335" style={{ color: 'red' }}>400-670-5335</a></span>
              </div>
            </div>
          </div>

        </Tabs>
        <WhiteSpace />
      </div>
    )
  }
}

export default Login