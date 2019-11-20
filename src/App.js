import React from 'react';
import Main from "component/Main"
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Address from 'pages/Address'
import CinemaSearch from 'pages/Cinema/CinemaSearch'
import MoveDay from "pages/Movie/MovieDay"
//评论组件
import Comment from "@/pages/Comment"
//影院详情
import MvRoom from "./pages/MovieRoom"


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home/hot/movieday/:id" component={MoveDay}></Route>
          <Route path="/comment/:id" component={Comment}></Route>
          <Route path="/cinemasearch" component={CinemaSearch}></Route>
          <Route path="/address" component={Address}></Route>
          <Route path="/mvroom" component={MvRoom}></Route>
          <Route path="/" component={Main}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;