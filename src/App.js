import React from 'react';
import Main from "./component/Main"
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Address from './pages/Address'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/address" component={Address}></Route>
          <Route path="/" exac component={Main}></Route> 
        </Switch>
      </Router>
    );
  }
}

export default App;