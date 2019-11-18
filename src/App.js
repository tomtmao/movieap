import React from 'react';
<<<<<<< HEAD
import './app.css'
import { HashRouter as Router } from 'react-router-dom'
import Search from './Search'
=======
import Main from "./component/Main"
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Address from './pages/Address'
import CinemaSearch from './pages/CinemaSearch'

//antd测试组件，暂时别删
import Test from './pages/测试Antd'
>>>>>>> 25a0b433f8ec0c42b7236b66959f536b4f5fa718

class App extends React.Component {
  render() {
    return (
      <Router>
<<<<<<< HEAD
        <div className="App">
          <Search/>
        </div>
=======
        <Switch>
          <Route path="/cinemasearch" component={CinemaSearch}></Route>
          <Route path="/address" component={Address}></Route>
          <Route path="/test"  component={Test}></Route> 
          <Route path="/"  component={Main}></Route> 
        </Switch>
>>>>>>> 25a0b433f8ec0c42b7236b66959f536b4f5fa718
      </Router>
    );
  }
}

export default App;