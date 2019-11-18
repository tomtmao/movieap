import React from 'react';
import Main from "./component/Main"
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Address from './pages/Address'
import CinemaSearch from './pages/CinemaSearch'
//评论组件
import Comment from "./pages/Comment"
//antd测试组件，暂时别删
import Test from './pages/测试Antd'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route path="/cinemasearch" component={CinemaSearch}></Route>
          <Route path="/address" component={Address}></Route>
          <Route path="/" exac component={Main}></Route> 
           {/* // 测试评论组件 */}
           <Route path="/comment" component={<div>hahaha</div>}></Route>
          <Route path="/test" component={Test}></Route>
          <Route path="/" component={Main}></Route>
        
        </Switch>
      </Router>
    );
  }
}

export default App;