import React, { Fragment } from "react"
import { TabBar } from 'antd-mobile';
import {Route,Redirect,withRouter} from "react-router-dom"
import "../../assets/styles/Main.css"
import Top from "./Top"
import tu11 from "../../assets/imgs/tu11.png"
import tu12 from "../../assets/imgs/tu12.png"
import tu21 from "../../assets/imgs/tu21.png"
import tu22 from "../../assets/imgs/tu22.png"
import tu31 from "../../assets/imgs/tu31.png"
import tu32 from "../../assets/imgs/tu32.png"

const A= ()=> <h1>A</h1>
class AA extends React.Component{
  render(){
    // console.log(this.props)
    return(
      <h1>AA</h1>
    )
  }
}
const AAA= ()=> <h1>AAA</h1>

@withRouter
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '/home',
      hidden: false,
      fullScreen: true,
    };
  }

  componentWillReceiveProps(nextprops){
    this.setState({
      selectedTab:nextprops.location.pathname
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
              selected={this.state.selectedTab === '/home'}
              onPress={() => {
                this.props.history.push("/home")
                this.setState({
                  selectedTab: '/home',
                });
              }}
              data-seed="logId"
            >
              <Top>猫眼电影</Top>
              <Route path="/home" component={A}></Route>
              <Redirect from="/" to="/home" ></Redirect>
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
              selected={this.state.selectedTab === '/movie'}
              onPress={() => {
                this.props.history.push("/movie")
                this.setState({
                  selectedTab: '/movie',
                });
              }}
              data-seed="logId1"
            >
              <Top>影院</Top>
              <Route path="/movie" component={AA}></Route>
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
              selected={this.state.selectedTab === '/my'}
              onPress={() => {
                this.props.history.push("/my")
                this.setState({
                  selectedTab: '/my',
                  hidden:true
                });
              }}
            >
              <Route path="/my" component={AAA}></Route>
            </TabBar.Item>
          </TabBar>
        </div>
      </Fragment>
    );
  }
}

export default Main