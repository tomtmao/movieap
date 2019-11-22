import React, { Component } from "react"
import '../assets/styles/login.css'
import { InputItem, WhiteSpace, Button, } from 'antd-mobile';
import { Tabs, Badge } from 'antd-mobile';
import aaa from "../assets/imgs/111.png"
const tabs = [
  { title: <Badge>美团账号登录</Badge> },
  { title: <Badge >手机验证登录</Badge> },
];

const btnStyle = {
  backgroundColor: '#e54847', height: '30px', color: 'white', fontSize: '16px',
  lineHeight: '30px', width: '100%'
}
const fnStyle = { fontSize: "16px", fontFamily: "楷体", fontWeight: "100px" }

class Login extends Component {
  jump = () => {
    let { history } = this.props;
    history.push('/home/hot')
  }
  render() {
    return (
      <div>
        <div className='movie' >
          <button className='row' onClick={this.jump}>
          <img style={{
                            width:"26px",
                            height:"26px"
                        }} src={aaa} alt=""/>
          </button>
          龙猫电影
        </div>
        <Tabs tabs={tabs}
          initialPage={0}
        >
          <div style={{ display: 'flex', textAlign: 'left', backgroundColor: '#fff' }}>
            <div style={{ width: '100%' }}>
              <InputItem
                style={fnStyle}
                type='text'
                placeholder="账号名/手机号/Email"
              ></InputItem>
              <InputItem
                style={fnStyle}
                type="password"
                placeholder="请输入您的密码"
              ></InputItem>
              <div style={{ height: '45px', padding: '10px', width: '100%' }}>
                <Button type="submit" style={btnStyle}>登录</Button>
              </div>
              <div style={{ height: '45px', padding: '10px', width: '100%' }}>
                <Button type="submit" style={btnStyle}>立即注册</Button>
              </div>
              <div style={{ height: '45px', padding: '10px', width: '100%' }}>
                <Button type="submit" style={btnStyle}>忘记密码?</Button>
              </div>
              {/* <div className="link_a">
                <a href="#">立即注册</a>
                <a href="#">找回密码</a>
              </div> */}
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <span>© 龙猫电影 客服电话：<a href="tel:4006705335" style={{ color: 'red' }}>400-670-5335</a></span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', textAlign: 'left', backgroundColor: '#fff' }}>
            <div style={{ width: '100%' }}>
              <div style={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #ccc"}}>
                <InputItem
                  style={fnStyle}
                  type="text"
                  placeholder="请输入手机号"
                ></InputItem>
                <button style={{marginRight:"20px",border:"none",display:"inline-block",width:"100px",color:"#999",height:"24px",marginTop:"10px",borderRadius:"3px"}}>获取验证码</button>
              </div>

              <InputItem
                style={fnStyle}
                type="password"
                placeholder="请输入短信验证码"
              ></InputItem>
              <div style={{ height: '45px', padding: '10px', width: '100%' }}>
                <Button type="submit" style={{
                  backgroundColor: "#ccc", height: '30px', color: '#fff', fontSize: '14px',
                  lineHeight: '30px', width: '100%'
                }}>登录</Button>
              </div>

              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <span>© 龙猫电影 客服电话：<a href="tel:4006705335" style={{ color: 'red' }}>400-670-5335</a></span>
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