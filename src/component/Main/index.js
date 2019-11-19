import React, { Fragment } from "react"
import { TabBar } from 'antd-mobile';
import {Route,Redirect,withRouter} from "react-router-dom"
import "../../assets/styles/Main.css"
import  Container from "../../pages/Home-container"
import Login from "../Login"
import Top from "./Top"
import Cinema from '../../pages/Cinema'
import tu11 from "../../assets/imgs/tu11.png"
import tu12 from "../../assets/imgs/tu12.png"
import tu21 from "../../assets/imgs/tu21.png"
import tu22 from "../../assets/imgs/tu22.png"
import tu31 from "../../assets/imgs/tu31.png"
import tu32 from "../../assets/imgs/tu32.png"


@withRouter
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: true,
    };
  }

  componentWillReceiveProps(nextprops){
    const pathname =nextprops.location.pathname
    let arr=pathname.split("/")
    let qie=arr[1]
    this.setState({
      selectedTab:qie,
      hidden:qie==="my" ? true :false
    })
  }
  render() {
    return (
      <Fragment>
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#e54847"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="电影"
              key="Life"
              icon={
                <div style={{ width: '22px', height: '22px' }}>
                  <img src={tu11} alt="" className="tupian" />
                </div>
              }
              selectedIcon={
                <div style={{ width: '22px', height: '22px' }}>
                  <img src={tu12} alt="" className="tupian" />
                </div>
              }
              selected={this.state.selectedTab === 'home'}
              onPress={() => {
                this.props.history.push("/home/hot")
                this.setState({
                  selectedTab: 'home',
                });
              }}
              data-seed="logId"
            >
              <Top>龙猫电影</Top>
              <Route path="/home" component={Container}></Route>
              <Redirect from="/" to="/home/hot" ></Redirect>
              <Redirect from="/home" to="/home/hot" ></Redirect>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{ width: '22px', height: '22px' }}>
                  <img src={tu21} alt="" className="tupian" />
                </div>
              }
              selectedIcon={
                <div style={{ width: '22px', height: '22px' }}>
                  <img src={tu22} alt="" className="tupian" />
                </div>
              }
              title="影院"
              key="Koubei"
              selected={this.state.selectedTab === 'cinema'}
              onPress={() => {
                this.props.history.push("/cinema")
                this.setState({
                  selectedTab: 'cinema',
                });
              }}
              data-seed="logId1"
            >
              <Top>影院</Top>
              <Route path="/cinema" component={Cinema}></Route>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{ width: '22px', height: '22px' }}>
                  <img src={tu31} alt="" className="tupian" />
                </div>
              }
              selectedIcon={
                <div style={{ width: '22px', height: '22px' }}>
                  <img src={tu32} alt="" className="tupian" />
                </div>
              }
              title="我的"
              key="Friend"
              selected={this.state.selectedTab === 'my'}
              onPress={() => {
                this.props.history.push("/my")
                this.setState({
                  selectedTab: 'my',
                });
              }}
            >
              <Route path="/my" component={Login}></Route>
            </TabBar.Item>
          </TabBar>
        </div>
      </Fragment>
    );
  }
}

export default Main