import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import Main from "./component/Main"

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
