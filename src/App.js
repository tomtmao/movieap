import React from 'react';
import Main from "./component/Main"
import { HashRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Main></Main>
      </Router>
    );
  }
}

export default App;